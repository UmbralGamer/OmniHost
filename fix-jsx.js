const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'renderer', 'src', 'components', 'tabs', 'OptionsTab.tsx');
let code = fs.readFileSync(filePath, 'utf-8');

// Replace literal backslash followed by backtick with just backtick
code = code.replace(/\\`/g, '`');

// Replace literal backslash followed by dollar sign with just dollar sign
code = code.replace(/\\\$/g, '$');

fs.writeFileSync(filePath, code, 'utf-8');
console.log('Fixed JSX syntax escaping issues');
