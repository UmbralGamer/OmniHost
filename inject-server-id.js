const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'renderer', 'src', 'App.tsx');
let code = fs.readFileSync(appPath, 'utf-8');

code = code.replace(
  /<OptionsTab\s*advancedMode={advancedMode}/,
  '<OptionsTab \n                  serverId={activeServerId as number}\n                  advancedMode={advancedMode}'
);

fs.writeFileSync(appPath, code, 'utf-8');
console.log('Injected serverId into OptionsTab');
