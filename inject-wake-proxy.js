const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

// 1. Import WakeProxy
if (!code.includes('import { WakeProxy }')) {
  code = code.replace(
    "import { MinecraftAdapter } from './adapters/MinecraftAdapter'",
    "import { MinecraftAdapter } from './adapters/MinecraftAdapter'\nimport { WakeProxy } from './adapters/WakeProxy'"
  );
}

// 2. Add activeProxies record
if (!code.includes('const activeProxies: Record<number, WakeProxy> = {};')) {
  code = code.replace(
    "const activeServers: Record<number, MinecraftAdapter> = {};",
    "const activeServers: Record<number, MinecraftAdapter> = {};\n  const activeProxies: Record<number, WakeProxy> = {};"
  );
}

// 3. Add toggle-auto-start ipc handler
const toggleProxyApi = `
  ipcMain.handle('toggle-auto-start', async (_, id, enabled) => {
    try {
      if (enabled) {
        if (!activeServers[id]) activeServers[id] = new MinecraftAdapter(id);
        const serverDir = join(app.getPath('userData'), 'servers', id.toString());
        const propsPath = join(serverDir, 'server.properties');
        let port = 25565;
        if (await exists(propsPath)) {
          const props = await fsPromises.readFile(propsPath, 'utf-8');
          const portMatch = props.match(/server-port=(\\d+)/);
          if (portMatch) port = parseInt(portMatch[1], 10);
        }
        
        if (!activeProxies[id]) {
          activeProxies[id] = new WakeProxy(activeServers[id], port);
        }
        activeProxies[id].startListening();
      } else {
        if (activeProxies[id]) {
          activeProxies[id].stopListening();
          delete activeProxies[id];
        }
      }
      return true;
    } catch (e: any) {
      console.error('WakeProxy error:', e);
      return false;
    }
  });
`;

if (!code.includes("ipcMain.handle('toggle-auto-start'")) {
  code = code.replace(
    /ipcMain\.handle\('get-system-info'/m,
    match => toggleProxyApi + "\n  " + match
  );
  fs.writeFileSync(indexPath, code, 'utf-8');
  console.log('Injected toggle-auto-start into index.ts');
}

const preloadPath = path.join(__dirname, 'src', 'preload', 'index.ts');
let preloadCode = fs.readFileSync(preloadPath, 'utf-8');

if (!preloadCode.includes('toggleAutoStart:')) {
  preloadCode = preloadCode.replace(
    /getSystemInfo: \(\) => ipcRenderer\.invoke\('get-system-info'\),/m,
    match => match + "\n  toggleAutoStart: (id: number, enabled: boolean) => ipcRenderer.invoke('toggle-auto-start', id, enabled),"
  );
  fs.writeFileSync(preloadPath, preloadCode, 'utf-8');
  console.log('Injected toggleAutoStart into preload');
}
