const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

const targetStr = `  // Server Lifecycle
  ipcMain.handle('start-server', async (_, id) => {
    if (!activeServers[id]) {
      activeServers[id] = new MinecraftAdapter(id);
    }
    await activeServers[id].start();
    return true;
  });`;

const replacement = `  // Server Lifecycle
  ipcMain.handle('start-server', async (_, id) => {
    if (!activeServers[id]) {
      activeServers[id] = new MinecraftAdapter(id);
    }
    
    // CRITICAL: Stop proxy if it exists to free the port!
    if (activeProxies[id]) {
       activeProxies[id].stopListening();
    }
    
    await activeServers[id].start();
    return true;
  });`;

if (code.includes("await activeServers[id].start();") && !code.includes("activeProxies[id].stopListening();")) {
  code = code.replace(targetStr, replacement);
  fs.writeFileSync(indexPath, code, 'utf-8');
  console.log('Fixed manual start crash in index.ts');
} else {
  console.log('Not replaced');
}
