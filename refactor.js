const fs = require('fs');

let content = fs.readFileSync('src/main/index.ts', 'utf-8');

// Replace imports
content = content.replace("import fs from 'fs'", "import fs from 'fs'\nimport fsPromises from 'fs/promises'");

// Replace existsSync helper
const existsHelper = `
async function exists(path: string) {
  try {
    await fsPromises.access(path);
    return true;
  } catch {
    return false;
  }
}
`;
content = content.replace("const CURSEFORGE_API_KEY", existsHelper + "\nconst CURSEFORGE_API_KEY");

// 1. fs.existsSync(x) -> await exists(x)
// Note: Some handlers might not be async, but most ipcMain.handle are async already. We will add async if needed, but they are mostly async.
content = content.replace(/fs\.existsSync\(([^)]+)\)/g, 'await exists($1)');

// 2. fs.readFileSync(x, y) -> await fsPromises.readFile(x, y)
content = content.replace(/fs\.readFileSync\(([^,]+),\s*['"]utf-?8['"]\)/g, "await fsPromises.readFile($1, 'utf-8')");

// 3. fs.writeFileSync(x, y) -> await fsPromises.writeFile(x, y)
content = content.replace(/fs\.writeFileSync\(([^,]+),\s*([^)]+)\)/g, 'await fsPromises.writeFile($1, $2)');

// 4. fs.mkdirSync(x, y) -> await fsPromises.mkdir(x, y)
content = content.replace(/fs\.mkdirSync\(([^,]+)(,\s*\{[^}]+\})?\)/g, 'await fsPromises.mkdir($1$2)');

// 5. fs.rmSync(x, y) -> await fsPromises.rm(x, y)
content = content.replace(/fs\.rmSync\(([^,]+),\s*(\{[^}]+\})\)/g, 'await fsPromises.rm($1, $2)');

// 6. fs.copyFileSync(x, y) -> await fsPromises.copyFile(x, y)
content = content.replace(/fs\.copyFileSync\(([^,]+),\s*([^)]+)\)/g, 'await fsPromises.copyFile($1, $2)');

// 7. fs.unlinkSync(x) -> await fsPromises.unlink(x)
content = content.replace(/fs\.unlinkSync\(([^)]+)\)/g, 'await fsPromises.unlink($1)');

// 8. fs.readdirSync(x) -> await fsPromises.readdir(x)
content = content.replace(/fs\.readdirSync\(([^)]+)\)/g, 'await fsPromises.readdir($1)');

// 9. fs.statSync(x) -> await fsPromises.stat(x)
content = content.replace(/fs\.statSync\(([^)]+)\)/g, 'await fsPromises.stat($1)');

// 10. fs.renameSync(x, y) -> await fsPromises.rename(x, y)
content = content.replace(/fs\.renameSync\(([^,]+),\s*([^)]+)\)/g, 'await fsPromises.rename($1, $2)');

// 11. fs.rmdirSync(x) -> await fsPromises.rmdir(x)
content = content.replace(/fs\.rmdirSync\(([^)]+)\)/g, 'await fsPromises.rmdir($1)');

fs.writeFileSync('src/main/index.ts', content);
console.log('Refactored fs.*Sync calls in index.ts');
