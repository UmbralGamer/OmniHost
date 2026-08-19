const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

// Add import
if (!code.includes('ServerManagerService')) {
  code = code.replace(
    "import { CurseForgeService } from './services/CurseForgeService';",
    "import { CurseForgeService } from './services/CurseForgeService';\nimport { ServerManagerService } from './services/ServerManagerService';"
  );
}

// get-servers
code = code.replace(
  /ipcMain\.handle\('get-servers', \(\) => \{\s*return getServers\(\)\s*\}\)/m,
  `ipcMain.handle('get-servers', async () => {
    return await ServerManagerService.getServers();
  })`
);

// delete-server
code = code.replace(
  /ipcMain\.handle\('delete-server'[\s\S]*?\}\);/m,
  `ipcMain.handle('delete-server', async (_, id) => {
    return await ServerManagerService.deleteServer(id, activeServers);
  });`
);

// create-server
code = code.replace(
  /ipcMain\.handle\('create-server'[\s\S]*?\}\)/m,
  `ipcMain.handle('create-server', async (_, name, type, version) => {
    return await ServerManagerService.createServer(name, type, version);
  })`
);

// get-server-meta
code = code.replace(
  /ipcMain\.handle\('get-server-meta'[\s\S]*?\}\);/m,
  `ipcMain.handle('get-server-meta', async (_, id) => {
    return await ServerManagerService.getServerMeta(id);
  });`
);

// read-config
code = code.replace(
  /ipcMain\.handle\('read-config'[\s\S]*?\}\);/m,
  `ipcMain.handle('read-config', async (_, id) => {
    return await ServerManagerService.readConfig(id);
  });`
);

// write-config
code = code.replace(
  /ipcMain\.handle\('write-config'[\s\S]*?\}\);/m,
  `ipcMain.handle('write-config', async (_, id, data) => {
    return await ServerManagerService.writeConfig(id, data);
  });`
);

// read-json
code = code.replace(
  /ipcMain\.handle\('read-json'[\s\S]*?\}\);/m,
  `ipcMain.handle('read-json', async (_, id, type) => {
    return await ServerManagerService.readJson(id, type);
  });`
);

// write-json
code = code.replace(
  /ipcMain\.handle\('write-json'[\s\S]*?\}\);/m,
  `ipcMain.handle('write-json', async (_, id, type, data) => {
    return await ServerManagerService.writeJson(id, type, data);
  });`
);

fs.writeFileSync(indexPath, code, 'utf-8');
console.log('Refactored index.ts for ServerManagerService');
