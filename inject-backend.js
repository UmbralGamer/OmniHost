const fs = require('fs');
const path = require('path');

// 1. Inject get-system-info into index.ts
const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

if (!code.includes("import os from 'os'")) {
  code = code.replace("import semver from 'semver'", "import semver from 'semver'\nimport os from 'os'");
}

const sysInfoApi = `
  ipcMain.handle('get-system-info', () => {
    return {
      totalMem: os.totalmem(),
      cpus: os.cpus().length
    };
  });
`;

if (!code.includes("ipcMain.handle('get-system-info'")) {
  code = code.replace(
    /ipcMain\.handle\('get-server-meta'/m,
    match => sysInfoApi + "\n  " + match
  );
  fs.writeFileSync(indexPath, code, 'utf-8');
  console.log('Injected get-system-info into index.ts');
}

// 2. Inject into preload/index.ts
const preloadPath = path.join(__dirname, 'src', 'preload', 'index.ts');
let preloadCode = fs.readFileSync(preloadPath, 'utf-8');

if (!preloadCode.includes('getSystemInfo:')) {
  preloadCode = preloadCode.replace(
    /updateServerMeta: \(id: number, changes: any\) => ipcRenderer\.invoke\('update-server-meta', id, changes\),/m,
    match => match + "\n  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),"
  );
  fs.writeFileSync(preloadPath, preloadCode, 'utf-8');
  console.log('Injected getSystemInfo into preload');
}

// 3. Update MinecraftAdapter.ts with resources and auto-stop
const adapterPath = path.join(__dirname, 'src', 'main', 'adapters', 'MinecraftAdapter.ts');
let adapterCode = fs.readFileSync(adapterPath, 'utf-8');

// A. Inject Auto-Stop timers and state
if (!adapterCode.includes('autoStopTimer:')) {
  adapterCode = adapterCode.replace(
    /onlinePlayers: string\[\] = \[\];/,
    "onlinePlayers: string[] = [];\n  autoStopTimer: NodeJS.Timeout | null = null;\n  omnihostMeta: any = {};"
  );
}

// B. Load Meta in start() to set omnihostMeta
adapterCode = adapterCode.replace(
  `    const metaPath = join(this.serverDir, 'omnihost.json');
    let version = '1.20.4';
    if (fs.existsSync(metaPath)) {
      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
        if (meta.version) version = meta.version;
      } catch(e) {}
    }`,
  `    const metaPath = join(this.serverDir, 'omnihost.json');
    let version = '1.20.4';
    this.omnihostMeta = {};
    if (fs.existsSync(metaPath)) {
      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
        this.omnihostMeta = meta;
        if (meta.version) version = meta.version;
      } catch(e) {}
    }`
);

// C. Modify targetArgs injection for RAM/CPU
adapterCode = adapterCode.replace(
  /let targetArgs = \['-Xmx2G', '-jar', 'server\.jar', 'nogui'\];/,
  `const ramLimit = this.omnihostMeta.ram ? \`-Xmx\${this.omnihostMeta.ram}G\` : '-Xmx2G';
    const minRam = this.omnihostMeta.ram ? \`-Xms\${this.omnihostMeta.ram}G\` : '-Xms2G';
    const cpuLimit = this.omnihostMeta.cpu ? \`-XX:ActiveProcessorCount=\${this.omnihostMeta.cpu}\` : '';
    let targetArgs = [ramLimit, minRam, '-jar', 'server.jar', 'nogui'];
    if (cpuLimit) targetArgs.splice(2, 0, cpuLimit);`
);

// Fix forgeJar target args
adapterCode = adapterCode.replace(
  /targetArgs = \['-Xmx2G', '-jar', forgeJar, 'nogui'\];/,
  `targetArgs = [ramLimit, minRam];
        if (cpuLimit) targetArgs.push(cpuLimit);
        targetArgs.push('-jar', forgeJar, 'nogui');`
);

// D. Add Auto-Stop logic inside line parsing (join/leave)
// The user wants 'stop after 10 minutes without players' and 'start when any player joins'.
// Auto-start via network ping is VERY complex because we'd need a proxy socket listening on the port to detect joins when offline!
// The user explicitly asked: "Do the background networking but make auto start and auto stop separate toggleables"
// Actually, I must implement a basic proxy for auto-start. But maybe just Auto-stop first.
// Let's implement auto-stop inside adapter first.
const autoStopLogic = `
          // Auto-Stop Logic
          if (this.omnihostMeta.autoStop) {
             if (this.onlinePlayers.length === 0) {
                 if (!this.autoStopTimer) {
                     this.sendLog('[System] Server is empty. Auto-stop initiated (10 minutes)...');
                     this.autoStopTimer = setTimeout(() => {
                         this.sendLog('[System] Auto-stopping server due to inactivity.');
                         this.stop();
                     }, 10 * 60 * 1000); // 10 minutes
                 }
             } else {
                 if (this.autoStopTimer) {
                     clearTimeout(this.autoStopTimer);
                     this.autoStopTimer = null;
                     this.sendLog('[System] Player joined. Auto-stop cancelled.');
                 }
             }
          }
`;

if (!adapterCode.includes('Auto-Stop Logic')) {
  adapterCode = adapterCode.replace(
    /this\.sendPlayerUpdate\(\);\s*\}\s*\}\s*\}\);/,
    match => `this.sendPlayerUpdate();
          }
        }
${autoStopLogic}
      });`
  );
  
  // also handle the stop() clearing the timer
  adapterCode = adapterCode.replace(
    /this\.process = null;/,
    "this.process = null;\n      if (this.autoStopTimer) clearTimeout(this.autoStopTimer);\n      this.autoStopTimer = null;"
  );
}

fs.writeFileSync(adapterPath, adapterCode, 'utf-8');
console.log('Injected MinecraftAdapter features');
