const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'renderer', 'src', 'App.tsx');
let code = fs.readFileSync(appPath, 'utf-8');

// 1. Add import
if (!code.includes('import { FilesTab }')) {
  code = code.replace(
    "import { PlayersTab } from './components/tabs/PlayersTab';",
    "import { PlayersTab } from './components/tabs/PlayersTab';\nimport { FilesTab } from './components/tabs/FilesTab';"
  );
}

// 2. Update activeTab type definition
code = code.replace(
  "const [activeTab, setActiveTab] = useState<'console' | 'options' | 'players' | 'software' | 'mods'>('console')",
  "const [activeTab, setActiveTab] = useState<'console' | 'options' | 'players' | 'software' | 'mods' | 'files'>('console')"
);

// 3. Update the map array
code = code.replace(
  "{[{ id: 'console', label: 'Console' }, { id: 'options', label: 'Options' }, { id: 'players', label: 'Players' }, { id: 'mods', label: 'Mods' }, { id: 'software', label: 'Software' }].map(tab => (",
  "{[{ id: 'console', label: 'Console' }, { id: 'options', label: 'Options' }, { id: 'players', label: 'Players' }, { id: 'mods', label: 'Mods' }, { id: 'software', label: 'Software' }, { id: 'files', label: 'Files' }].map(tab => ("
);

// 4. Update the render logic
const renderBlock = `
              {activeTab === 'console' && (
                <ConsoleTab
                  activeServerId={activeServerId}
                  logs={logs}
                  consoleInput={consoleInput}
                  setConsoleInput={setConsoleInput}
                  handleSendCommand={handleSendCommand}
                />
              )}
`;

if (!code.includes("<FilesTab")) {
  code = code.replace(
    /{activeTab === 'players' && \(\s*<PlayersTab[\s\S]*?\/>\s*\)}/,
    match => `${match}\n              {activeTab === 'files' && (\n                <FilesTab serverId={activeServerId} />\n              )}`
  );
}

fs.writeFileSync(appPath, code, 'utf-8');
console.log('App.tsx updated with FilesTab');
