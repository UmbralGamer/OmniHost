const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

const missingApis = `
  ipcMain.handle('update-server-meta', async (_, id, changes) => {
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    const metaPath = join(serverDir, 'omnihost.json');
    let meta = {};
    if (fs.existsSync(metaPath)) {
      try { meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8')); } catch(e){}
    }
    meta = { ...meta, ...changes };
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    
    // Live update the running instance
    if (activeServers[id]) {
      activeServers[id].omnihostMeta = meta;
    }
    return true;
  });

  ipcMain.handle('toggle-auto-start', async (_, id, enabled) => {
    if (enabled) {
      if (!activeProxies[id]) {
        // Only load if activeServers[id] exists or create dummy
        if (!activeServers[id]) activeServers[id] = new MinecraftAdapter(id);
        activeProxies[id] = new WakeProxy(activeServers[id]);
      }
      activeProxies[id].startListening();
    } else {
      if (activeProxies[id]) {
        activeProxies[id].stopListening();
      }
    }
    return true;
  });
`;

if (!code.includes("ipcMain.handle('update-server-meta'")) {
  code = code.replace(
    "ipcMain.handle('get-server-meta', async (_, id) => {",
    missingApis + "\n  ipcMain.handle('get-server-meta', async (_, id) => {"
  );
  fs.writeFileSync(indexPath, code, 'utf-8');
  console.log('Injected update-server-meta and toggle-auto-start');
} else {
  console.log('Already injected');
}
