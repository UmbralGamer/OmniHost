const fs = require('fs');
let code = fs.readFileSync('src/main/adapters/MinecraftAdapter.ts', 'utf-8');

const target = `        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
        if (meta.version) version = meta.version;`;

const replacement = `        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
        this.omnihostMeta = meta;
        if (meta.version) version = meta.version;`;

code = code.replace(target, replacement);

fs.writeFileSync('src/main/adapters/MinecraftAdapter.ts', code, 'utf-8');
console.log('Patched MinecraftAdapter.ts successfully');
