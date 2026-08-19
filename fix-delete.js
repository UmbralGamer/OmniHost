const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

code = code.replace(
  "ipcMain.handle('delete-server', (_, id) => {",
  "ipcMain.handle('delete-server', async (_, id) => {"
);

fs.writeFileSync(indexPath, code, 'utf-8');
console.log('Fixed delete-server');
