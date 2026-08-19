const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src', 'main', 'index.ts');
let code = fs.readFileSync(indexPath, 'utf-8');

// Fix map with await inside
code = code.replace(
  /return files\.filter\(f => f\.endsWith\('\.jar'\)\)\.map\(f => \{[\s\S]*?\}\);/m,
  `const jarFiles = files.filter(f => f.endsWith('.jar'));
      const modsInfo = await Promise.all(jarFiles.map(async f => {
        const stats = await fsPromises.stat(join(modsDir, f));
        return { name: f, size: stats.size };
      }));
      return modsInfo;`
);

// Fix await precedence
code = code.replace(
  /await fsPromises\.stat\(join\(serverDir, sub\)\)\.isDirectory\(\)/g,
  `(await fsPromises.stat(join(serverDir, sub))).isDirectory()`
);

fs.writeFileSync(indexPath, code, 'utf-8');
console.log('Fixed ts errors in index.ts');
