import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'fs'
import axios from 'axios'
import semver from 'semver'

// Import our custom modules
import { getServers, createServer } from './db'
import { MinecraftAdapter } from './adapters/MinecraftAdapter'
import { FrpAdapter } from './adapters/FrpAdapter'
import { JavaManager } from './adapters/JavaManager'
import { spawn } from 'child_process'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // --- 1. INITIALIZE SYSTEMS ---
  const activeServers: Record<number, MinecraftAdapter> = {};
  const tunnelProvider = new FrpAdapter();

  // --- 2. IPC HANDLERS (THE BRIDGE) ---
  
  // Database
  ipcMain.handle('get-servers', () => {
    return getServers()
  })

  ipcMain.handle('create-server', async (_, name, type, version) => {
    const id = createServer(name, type);
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    if (!fs.existsSync(serverDir)) fs.mkdirSync(serverDir, { recursive: true });
    fs.writeFileSync(join(serverDir, 'omnihost.json'), JSON.stringify({ type, version }));
    return id;
  })

  // Versions & Downloads
  ipcMain.handle('get-vanilla-versions', async () => {
    try {
      const res = await axios.get('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json');
      const releases = res.data.versions.filter((v: any) => v.type === 'release');
      return releases.map((v: any) => v.id).filter((v: string) => {
        const coerced = semver.coerce(v);
        return coerced && semver.gte(coerced, '1.16.0');
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  ipcMain.handle('get-paper-versions', async () => {
    try {
      const res = await axios.get('https://api.papermc.io/v2/projects/paper');
      return res.data.versions.filter((v: string) => {
        const coerced = semver.coerce(v);
        return coerced && semver.gte(coerced, '1.16.0');
      }).reverse(); // newest first
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  ipcMain.handle('get-fabric-versions', async () => {
    try {
      const res = await axios.get('https://meta.fabricmc.net/v2/versions/game');
      return res.data.filter((v: any) => v.stable).map((v: any) => v.version);
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  ipcMain.handle('get-forge-versions', async () => {
    try {
      const res = await axios.get('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json');
      const promos = res.data.promos;
      const versions = new Set<string>();
      for (const key of Object.keys(promos)) {
        if (key.endsWith('-latest')) {
          versions.add(key.replace('-latest', ''));
        }
      }
      return Array.from(versions).reverse();
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  ipcMain.handle('get-neoforge-versions', async () => {
    try {
      const res = await axios.get('https://maven.neoforged.net/api/maven/versions/releases/net/neoforged/neoforge');
      const all: string[] = res.data.versions;
      const mcVersions = new Set<string>();
      for (const v of all) {
        const parts = v.split('.');
        if (parts.length >= 2) {
          if (parts[0] === '20' || parts[0] === '21') {
            mcVersions.add('1.' + parts[0] + '.' + parts[1]);
          } else {
            mcVersions.add(parts[0] + '.' + parts[1]);
          }
        }
      }
      return Array.from(mcVersions).reverse();
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  ipcMain.handle('download-server-jar', async (event, id, type, version) => {
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    const jarPath = join(serverDir, 'server.jar');
    const installerPath = join(serverDir, 'installer.jar');
    
    try {
      let downloadUrl = '';
      let isInstaller = false;
      let installerArgs: string[] = [];

      if (type === 'Vanilla') {
        const manifestRes = await axios.get('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json');
        const vData = manifestRes.data.versions.find((v: any) => v.id === version);
        if (!vData) throw new Error('Version not found');
        const vRes = await axios.get(vData.url);
        downloadUrl = vRes.data.downloads.server.url;
      } else if (type === 'Paper') {
        const buildsRes = await axios.get(`https://api.papermc.io/v2/projects/paper/versions/${version}`);
        const build = buildsRes.data.builds[buildsRes.data.builds.length - 1];
        const buildData = await axios.get(`https://api.papermc.io/v2/projects/paper/versions/${version}/builds/${build}`);
        const dlName = buildData.data.downloads.application.name;
        downloadUrl = `https://api.papermc.io/v2/projects/paper/versions/${version}/builds/${build}/downloads/${dlName}`;
      } else if (type === 'Fabric') {
        const loaderRes = await axios.get('https://meta.fabricmc.net/v2/versions/loader');
        const loader = loaderRes.data.find((v: any) => v.stable).version;
        const installerRes = await axios.get('https://meta.fabricmc.net/v2/versions/installer');
        const installer = installerRes.data.find((v: any) => v.stable).version;
        downloadUrl = `https://meta.fabricmc.net/v2/versions/loader/${version}/${loader}/${installer}/server/jar`;
      } else if (type === 'Forge') {
        const forgeRes = await axios.get('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json');
        let forgeVersion = forgeRes.data.promos[version + '-latest'] || forgeRes.data.promos[version + '-recommended'];
        if (!forgeVersion) throw new Error('Forge version not found for ' + version);
        downloadUrl = `https://maven.minecraftforge.net/net/minecraftforge/forge/${version}-${forgeVersion}/forge-${version}-${forgeVersion}-installer.jar`;
        isInstaller = true;
        installerArgs = ['--installServer'];
      } else if (type === 'NeoForge') {
        const neoRes = await axios.get('https://maven.neoforged.net/api/maven/versions/releases/net/neoforged/neoforge');
        const all: string[] = neoRes.data.versions;
        let prefix = version.startsWith('1.') ? version.substring(2) : version;
        const matched = all.filter((v: string) => v.startsWith(prefix + '.')).sort((a: string, b: string) => semver.rcompare(semver.coerce(a)!, semver.coerce(b)!));
        if (matched.length === 0) throw new Error('NeoForge version not found for ' + version);
        const neoVersion = matched[0];
        downloadUrl = `https://maven.neoforged.net/releases/net/neoforged/neoforge/${neoVersion}/neoforge-${neoVersion}-installer.jar`;
        isInstaller = true;
        installerArgs = ['--installServer'];
      }

      if (!downloadUrl) throw new Error('Could not resolve download URL');

      event.sender.send(`download-progress-${id}`, 0, 'Downloading...');

      const response = await axios({
        method: 'GET',
        url: downloadUrl,
        responseType: 'stream'
      });

      const totalLength = response.headers['content-length'] as string;
      let downloaded = 0;

      const targetPath = isInstaller ? installerPath : jarPath;
      const writer = fs.createWriteStream(targetPath);
      response.data.on('data', (chunk: Buffer) => {
        downloaded += chunk.length;
        if (totalLength) {
          const progress = Math.round((downloaded / parseInt(totalLength)) * 100);
          event.sender.send(`download-progress-${id}`, progress, isInstaller ? 'Downloading Installer...' : 'Downloading Jar...');
        }
      });

      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', () => resolve(true));
        writer.on('error', reject);
      });

      if (isInstaller) {
        event.sender.send(`download-progress-${id}`, 100, 'Installing Modloader...');
        
        let javaRequired: 8 | 16 | 17 | 21 | 25 = 17;
        const coerced = semver.coerce(version);
        if (coerced) {
          if (semver.lt(coerced, '1.17.0')) javaRequired = 8;
          else if (semver.lt(coerced, '1.18.0')) javaRequired = 16;
          else if (semver.lt(coerced, '1.20.5')) javaRequired = 17;
          else if (semver.lt(coerced, '26.0.0')) javaRequired = 21;
          else javaRequired = 25;
        }

        const javaPath = await JavaManager.getJavaPath(javaRequired);
        
        await new Promise((resolve, reject) => {
          const proc = spawn(javaPath, ['-jar', 'installer.jar', ...installerArgs], { cwd: serverDir });
          proc.on('close', (code) => {
            if (code === 0) resolve(true);
            else reject(new Error('Installer failed with code ' + code));
          });
          proc.on('error', reject);
        });

        if (fs.existsSync(installerPath)) {
          fs.unlinkSync(installerPath);
        }
      }

      return true;
    } catch (e: any) {
      console.error(e);
      throw new Error(e.message);
    }
  });

  // Server Lifecycle
  ipcMain.handle('start-server', async (_, id) => {
    if (!activeServers[id]) {
      activeServers[id] = new MinecraftAdapter(id);
    }
    await activeServers[id].start();
    return true;
  });

  ipcMain.handle('stop-server', async (_, id) => {
    if (activeServers[id]) {
      activeServers[id].stop();
      delete activeServers[id];
    }
    return true;
  });

  // Tunnels
  ipcMain.handle('start-tunnel', async () => {
    await tunnelProvider.start();
    return true;
  });

  ipcMain.handle('stop-tunnel', () => {
    tunnelProvider.stop();
    return true;
  });

  // Config Editor
  ipcMain.handle('read-config', async (_, id) => {
    const configPath = join(app.getPath('userData'), 'servers', id.toString(), 'server.properties');
    if (fs.existsSync(configPath)) return fs.readFileSync(configPath, 'utf-8');
    return '# No server.properties found.\n# Start the server once to generate this file automatically!';
  });

  ipcMain.handle('write-config', async (_, id, data) => {
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    if (!fs.existsSync(serverDir)) fs.mkdirSync(serverDir, { recursive: true });
    fs.writeFileSync(join(serverDir, 'server.properties'), data);
    return true;
  });

  // Player JSON Editor
  ipcMain.handle('read-json', async (_, id, filename) => {
    const filePath = join(app.getPath('userData'), 'servers', id.toString(), `${filename}.json`);
    if (fs.existsSync(filePath)) return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return [];
  });

  ipcMain.handle('write-json', async (_, id, filename, data) => {
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    if (!fs.existsSync(serverDir)) fs.mkdirSync(serverDir, { recursive: true });
    fs.writeFileSync(join(serverDir, `${filename}.json`), JSON.stringify(data, null, 2));
    return true;
  });

  // Live Commands & Inventory
  ipcMain.handle('send-command', async (_, id, cmd) => {
    if (activeServers[id]) activeServers[id].sendCommand(cmd);
    return true;
  });

  ipcMain.handle('get-inventory', async (_, id, playerName) => {
    if (activeServers[id]) {
      return await activeServers[id].getPlayerInventory(playerName);
    }
    return null;
  });

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})