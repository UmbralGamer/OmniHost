const fs = require('fs');
const path = require('path');

const preloadPath = path.join(__dirname, 'src', 'preload', 'index.ts');
let preloadCode = fs.readFileSync(preloadPath, 'utf-8');

const additions = `  getServerMeta: (id: number) => ipcRenderer.invoke('get-server-meta', id),
  updateServerMeta: (id: number, changes: any) => ipcRenderer.invoke('update-server-meta', id, changes),
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  toggleAutoStart: (id: number, enabled: boolean) => ipcRenderer.invoke('toggle-auto-start', id, enabled),`;

preloadCode = preloadCode.replace(
  "getServerMeta: (id: number) => ipcRenderer.invoke('get-server-meta', id),",
  additions
);

fs.writeFileSync(preloadPath, preloadCode, 'utf-8');
console.log('Fixed preload APIs');
