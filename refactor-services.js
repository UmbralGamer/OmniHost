const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

// Add import
if (!code.includes('CurseForgeService')) {
  code = code.replace(
    "import { CacheManager } from './CacheManager';",
    "import { CacheManager } from './CacheManager';\nimport { CurseForgeService } from './services/CurseForgeService';"
  );
}

// Replace search-modpacks
code = code.replace(
  /ipcMain\.handle\('search-modpacks'[\s\S]*?\}\);/m,
  `ipcMain.handle('search-modpacks', async (_, query, version, modloader) => {
    try {
      return await CurseForgeService.searchModpacks(query, version, modloader);
    } catch (e: any) {
      console.error('Error searching modpacks:', e.message);
      return [];
    }
  });`
);

// Replace get-modpack-details
code = code.replace(
  /ipcMain\.handle\('get-modpack-details'[\s\S]*?\}\);/m,
  `ipcMain.handle('get-modpack-details', async (_, modId) => {
    try {
      return await CurseForgeService.getModpackDetails(modId);
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });`
);

// Replace search-curseforge-mods
code = code.replace(
  /ipcMain\.handle\('search-curseforge-mods'[\s\S]*?\}\);/m,
  `ipcMain.handle('search-curseforge-mods', async (_, search, type, version, page, classId = 6, sortField = 2) => {
    try {
      return await CurseForgeService.searchMods(search, type, version, page, classId, sortField);
    } catch (e: any) {
      console.error(e.message);
      return [];
    }
  });`
);

// Replace get-curseforge-mod
code = code.replace(
  /ipcMain\.handle\('get-curseforge-mod'[\s\S]*?\}\);/m,
  `ipcMain.handle('get-curseforge-mod', async (_, modId) => {
    try {
      return await CurseForgeService.getMod(modId);
    } catch (e: any) {
      console.error(e.message);
      return null;
    }
  });`
);

fs.writeFileSync(indexPath, code, 'utf-8');
console.log('Refactored index.ts for CurseForgeService');
