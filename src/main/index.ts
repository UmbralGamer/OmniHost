import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'fs'

// Import our custom modules
import { getServers } from './db'
import { MinecraftAdapter } from './adapters/MinecraftAdapter'
import { FrpAdapter } from './adapters/FrpAdapter'

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