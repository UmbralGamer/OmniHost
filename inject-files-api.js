const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

const newHandlers = `
  // --- File Manager ---
  ipcMain.handle('list-dir', async (_, id, relPath) => {
    try {
      const serverDir = join(app.getPath('userData'), 'servers', id.toString());
      // Prevent directory traversal
      const targetPath = join(serverDir, relPath);
      if (!targetPath.startsWith(serverDir)) return [];
      
      if (!await exists(targetPath)) return [];
      
      const files = await fsPromises.readdir(targetPath);
      const result = [];
      for (const f of files) {
        try {
          const stat = await fsPromises.stat(join(targetPath, f));
          result.push({
            name: f,
            isDirectory: stat.isDirectory(),
            size: stat.size,
            lastModified: stat.mtimeMs
          });
        } catch (e) {}
      }
      return result;
    } catch (e: any) {
      console.error(e.message);
      return [];
    }
  });

  ipcMain.handle('delete-item', async (_, id, relPath) => {
    try {
      const serverDir = join(app.getPath('userData'), 'servers', id.toString());
      const targetPath = join(serverDir, relPath);
      if (!targetPath.startsWith(serverDir) || targetPath === serverDir) return false;
      if (await exists(targetPath)) {
        await fsPromises.rm(targetPath, { recursive: true, force: true });
        return true;
      }
      return false;
    } catch (e: any) {
      console.error(e.message);
      return false;
    }
  });

  ipcMain.handle('read-file', async (_, id, relPath) => {
    try {
      const serverDir = join(app.getPath('userData'), 'servers', id.toString());
      const targetPath = join(serverDir, relPath);
      if (!targetPath.startsWith(serverDir)) return null;
      if (await exists(targetPath)) {
        return await fsPromises.readFile(targetPath, 'utf-8');
      }
      return null;
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });

  ipcMain.handle('write-file', async (_, id, relPath, content) => {
    try {
      const serverDir = join(app.getPath('userData'), 'servers', id.toString());
      const targetPath = join(serverDir, relPath);
      if (!targetPath.startsWith(serverDir)) return false;
      await fsPromises.writeFile(targetPath, content, 'utf-8');
      return true;
    } catch (e: any) {
      console.error(e.message);
      return false;
    }
  });
`;

if (!code.includes("ipcMain.handle('list-dir'")) {
  code = code.replace(
    /ipcMain\.handle\('get-cache-info', \(\) => \{/m,
    newHandlers + "\n  ipcMain.handle('get-cache-info', () => {"
  );
  fs.writeFileSync(indexPath, code, 'utf-8');
  console.log('Injected file manager endpoints into index.ts');
} else {
  console.log('Already injected');
}

// Now inject into preload/index.ts
const preloadPath = path.join(__dirname, 'src', 'preload', 'index.ts');
let preloadCode = fs.readFileSync(preloadPath, 'utf-8');

const preloadApis = `
  // File Manager
  listDir: (id: number, relPath: string) => ipcRenderer.invoke('list-dir', id, relPath),
  deleteItem: (id: number, relPath: string) => ipcRenderer.invoke('delete-item', id, relPath),
  readFile: (id: number, relPath: string) => ipcRenderer.invoke('read-file', id, relPath),
  writeFile: (id: number, relPath: string, content: string) => ipcRenderer.invoke('write-file', id, relPath, content),
`;

if (!preloadCode.includes('listDir:')) {
  preloadCode = preloadCode.replace(
    /getCacheInfo:/,
    preloadApis + "\n  getCacheInfo:"
  );
  fs.writeFileSync(preloadPath, preloadCode, 'utf-8');
  console.log('Injected into preload');
} else {
  console.log('Already injected preload');
}

