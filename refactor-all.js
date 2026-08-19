const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

// Imports
code = code.replace(
  "import { CacheManager } from './CacheManager';",
  "import { CacheManager } from './CacheManager';\nimport { CurseForgeService } from './services/CurseForgeService';\nimport { ServerManagerService } from './services/ServerManagerService';"
);

// get-servers
code = code.replace(
  `  ipcMain.handle('get-servers', () => {
    return getServers()
  })`,
  `  ipcMain.handle('get-servers', () => {
    return ServerManagerService.getServers();
  })`
);

// delete-server
code = code.replace(
  `  ipcMain.handle('delete-server', async (_, id) => {
    deleteServer(id);
    if (activeServers[id]) {
      activeServers[id].stop();
      delete activeServers[id];
    }
    const serversDir = join(app.getPath('userData'), 'servers');
    const srvDir = join(serversDir, id.toString());
    if (await exists(srvDir)) await fsPromises.rm(srvDir, { recursive: true, force: true });
    return true;
  });`,
  `  ipcMain.handle('delete-server', async (_, id) => {
    return await ServerManagerService.deleteServer(id, activeServers);
  });`
);

// create-server
code = code.replace(
  `  ipcMain.handle('create-server', async (_, name, type, version) => {
    const id = createServer(name, type);
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    if (!await exists(serverDir)) await fsPromises.mkdir(serverDir, { recursive: true });
    await fsPromises.writeFile(join(serverDir, 'omnihost.json'), JSON.stringify({ type, version }));
    return id;
  })`,
  `  ipcMain.handle('create-server', async (_, name, type, version) => {
    return await ServerManagerService.createServer(name, type, version);
  })`
);

// get-server-meta
code = code.replace(
  `  ipcMain.handle('get-server-meta', async (_, id) => {
    const serverDir = join(app.getPath('userData'), 'servers', id.toString());
    const metaPath = join(serverDir, 'omnihost.json');
    if (await exists(metaPath)) {
      try {
        return JSON.parse(await fsPromises.readFile(metaPath, 'utf-8'));
      } catch (e) {}
    }
    return null;
  });`,
  `  ipcMain.handle('get-server-meta', async (_, id) => {
    return await ServerManagerService.getServerMeta(id);
  });`
);

// search-modpacks
code = code.replace(
  `  ipcMain.handle('search-modpacks', async (_, query, version, modloader) => {
    try {
      let url = \`https://api.curseforge.com/v1/mods/search?gameId=432&classId=4471&sortField=2&sortOrder=desc\`;
      if (query) url += \`&searchFilter=\${encodeURIComponent(query)}\`;
      if (version) {
        const cfVersion = version.endsWith('.0') && version.split('.').length === 3 ? version.slice(0, -2) : version;
        url += \`&gameVersion=\${encodeURIComponent(cfVersion)}\`;
      }
      if (modloader) {
        if (modloader === 'Forge') url += '&modLoaderType=1';
        else if (modloader === 'Fabric') url += '&modLoaderType=4';
        else if (modloader === 'NeoForge') url += '&modLoaderType=6';
      }
      
      const res = await axios.get(url, { headers: { 'x-api-key': CURSEFORGE_API_KEY } });
      return res.data.data;
    } catch (e: any) {
      console.error('Error searching modpacks:', e.message);
      return [];
    }
  });`,
  `  ipcMain.handle('search-modpacks', async (_, query, version, modloader) => {
    try {
      return await CurseForgeService.searchModpacks(query, version, modloader);
    } catch (e: any) {
      console.error('Error searching modpacks:', e.message);
      return [];
    }
  });`
);

// get-modpack-details
code = code.replace(
  `  ipcMain.handle('get-modpack-details', async (_, modId) => {
    try {
      const res = await axios.get(\`https://api.curseforge.com/v1/mods/\${modId}\`, { headers: { 'x-api-key': CURSEFORGE_API_KEY } });
      return res.data.data;
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });`,
  `  ipcMain.handle('get-modpack-details', async (_, modId) => {
    try {
      return await CurseForgeService.getModpackDetails(modId);
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });`
);

// search-curseforge-mods
code = code.replace(
  `  ipcMain.handle('search-curseforge-mods', async (_, search, type, version, page, classId = 6, sortField = 2) => {
    try {
      let modLoaderType = 0;
      if (type === 'Forge') modLoaderType = 1;
      else if (type === 'Fabric') modLoaderType = 4;
      else if (type === 'NeoForge') modLoaderType = 6;
      
      const index = page * 20;
      const cfVersion = version.endsWith('.0') && version.split('.').length === 3 ? version.slice(0, -2) : version;
      let url = \`https://api.curseforge.com/v1/mods/search?gameId=432&classId=\${classId}&sortField=\${sortField}&sortOrder=desc&gameVersion=\${cfVersion}&index=\${index}&pageSize=20\`;
      
      // Only apply modLoaderType for the "Mods" class (id 6)
      if (classId === 6 && modLoaderType !== 0) {
        url += \`&modLoaderType=\${modLoaderType}\`;
      }
      
      if (search) url += \`&searchFilter=\${encodeURIComponent(search)}\`;
      
      const res = await axios.get(url, { headers: { 'x-api-key': CURSEFORGE_API_KEY } });
      return res.data.data;
    } catch (e: any) {
      console.error(e.message);
      return [];
    }
  });`,
  `  ipcMain.handle('search-curseforge-mods', async (_, search, type, version, page, classId = 6, sortField = 2) => {
    try {
      return await CurseForgeService.searchMods(search, type, version, page, classId, sortField);
    } catch (e: any) {
      console.error(e.message);
      return [];
    }
  });`
);

// get-curseforge-mod
code = code.replace(
  `  ipcMain.handle('get-curseforge-mod', async (_, modId) => {
    try {
      const res = await axios.get(\`https://api.curseforge.com/v1/mods/\${modId}\`, { headers: { 'x-api-key': CURSEFORGE_API_KEY } });
      return res.data.data;
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });`,
  `  ipcMain.handle('get-curseforge-mod', async (_, modId) => {
    try {
      return await CurseForgeService.getMod(modId);
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });`
);

// read-config
code = code.replace(
  `  ipcMain.handle('read-config', async (_, id) => {
    const configPath = join(app.getPath('userData'), 'servers', id.toString(), 'server.properties');
    if (await exists(configPath)) {
      return await fsPromises.readFile(configPath, 'utf-8');
    }
    return '';
  });`,
  `  ipcMain.handle('read-config', async (_, id) => {
    return await ServerManagerService.readConfig(id);
  });`
);

// write-config
code = code.replace(
  `  ipcMain.handle('write-config', async (_, id, data) => {
    const configPath = join(app.getPath('userData'), 'servers', id.toString(), 'server.properties');
    await fsPromises.writeFile(configPath, data);
    return true;
  });`,
  `  ipcMain.handle('write-config', async (_, id, data) => {
    return await ServerManagerService.writeConfig(id, data);
  });`
);

// read-json
code = code.replace(
  `  ipcMain.handle('read-json', async (_, id, type) => {
    const jsonPath = join(app.getPath('userData'), 'servers', id.toString(), \`\${type}.json\`);
    if (await exists(jsonPath)) {
      try {
        return JSON.parse(await fsPromises.readFile(jsonPath, 'utf-8'));
      } catch (e) {}
    }
    return [];
  });`,
  `  ipcMain.handle('read-json', async (_, id, type) => {
    return await ServerManagerService.readJson(id, type);
  });`
);

// write-json
code = code.replace(
  `  ipcMain.handle('write-json', async (_, id, type, data) => {
    const jsonPath = join(app.getPath('userData'), 'servers', id.toString(), \`\${type}.json\`);
    await fsPromises.writeFile(jsonPath, JSON.stringify(data, null, 2));
    return true;
  });`,
  `  ipcMain.handle('write-json', async (_, id, type, data) => {
    return await ServerManagerService.writeJson(id, type, data);
  });`
);

fs.writeFileSync(indexPath, code, 'utf-8');
console.log('Successfully refactored index.ts');
