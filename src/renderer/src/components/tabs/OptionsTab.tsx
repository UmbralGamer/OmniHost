import React from 'react';

interface OptionsTabProps {
  advancedMode: boolean;
  setAdvancedMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveConfig: () => void;
  rawConfigText: string;
  setRawConfigText: React.Dispatch<React.SetStateAction<string>>;
  props: Record<string, string>;
  setProps: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export const OptionsTab: React.FC<OptionsTabProps> = React.memo(({
  advancedMode,
  setAdvancedMode,
  handleSaveConfig,
  rawConfigText,
  setRawConfigText,
  props,
  setProps
}) => {
  const ConfigToggle = ({ label, propKey, invert = false }: any) => {
    const rawVal = props[propKey] === 'true';
    const isToggled = invert ? !rawVal : rawVal;
    return (
      <div className="bg-[#1e1e2e] border border-gray-800/50 p-4 rounded-lg flex justify-between items-center shadow-md">
        <span className="font-bold text-gray-200">{label}</span>
        <button onClick={() => setProps(prev => ({ ...prev, [propKey]: invert ? (isToggled ? 'true' : 'false') : (!isToggled ? 'true' : 'false') }))} className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isToggled ? 'bg-green-500' : 'bg-red-500'}`}>
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isToggled ? 'right-1' : 'left-1'}`}></div>
        </button>
      </div>
    );
  }

  const ConfigSelect = ({ label, propKey, options }: any) => (
    <div className="bg-[#1e1e2e] border border-gray-800/50 p-4 rounded-lg flex justify-between items-center shadow-md">
      <span className="font-bold text-gray-200">{label}</span>
      <select value={props[propKey] || ''} onChange={(e) => setProps(prev => ({ ...prev, [propKey]: e.target.value }))} className="bg-darkBg text-white border border-gray-600 rounded p-1 outline-none focus:border-brand capitalize">
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  )

  const ConfigNumber = ({ label, propKey }: any) => (
    <div className="bg-[#1e1e2e] border border-gray-800/50 p-4 rounded-lg flex justify-between items-center shadow-md">
      <span className="font-bold text-gray-200">{label}</span>
      <input type="number" value={props[propKey] || 0} onChange={(e) => setProps(prev => ({ ...prev, [propKey]: e.target.value }))} className="bg-darkBg text-white border border-gray-600 rounded p-1 w-20 text-center outline-none focus:border-brand" />
    </div>
  )

  const ConfigString = ({ label, propKey, placeholder }: any) => (
    <div className="bg-[#1e1e2e] border border-gray-800/50 p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center shadow-md col-span-1 md:col-span-2 lg:col-span-3 gap-2">
      <span className="font-bold text-gray-200 whitespace-nowrap">{label}</span>
      <input type="text" value={props[propKey] || ''} placeholder={placeholder} onChange={(e) => setProps(prev => ({ ...prev, [propKey]: e.target.value }))} className="bg-darkBg text-white border border-gray-600 rounded p-2 flex-1 w-full outline-none focus:border-brand" />
    </div>
  )

  return (
    <div className="absolute inset-0 p-8 overflow-y-auto">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Server Properties</h3>
          <p className="text-gray-400 text-sm mt-1">Configure exactly how your world works.</p>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={() => setAdvancedMode(!advancedMode)} className="text-sm text-brand hover:text-yellow-400 underline">
            {advancedMode ? 'Switch to Visual UI' : 'Switch to Raw Text'}
          </button>
          <button onClick={handleSaveConfig} className="px-6 py-2 bg-brand hover:bg-yellow-600 rounded-lg font-bold shadow-lg shadow-yellow-500/30 transition-all text-white">
            Save Settings
          </button>
        </div>
      </div>

      {advancedMode ? (
        <div className="h-[60vh] bg-darkCard border border-gray-800 rounded-xl overflow-hidden flex flex-col">
          <textarea className="flex-1 w-full bg-[#0c0c0c] text-gray-300 p-6 font-mono text-sm focus:outline-none resize-none" value={rawConfigText} onChange={(e) => setRawConfigText(e.target.value)} spellCheck="false" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
          <ConfigNumber label="Slots (Max Players)" propKey="max-players" />
          <ConfigSelect label="Gamemode" propKey="gamemode" options={['survival', 'creative', 'adventure', 'spectator']} />
          <ConfigSelect label="Difficulty" propKey="difficulty" options={['peaceful', 'easy', 'normal', 'hard']} />
          <ConfigToggle label="Whitelist" propKey="white-list" />
          <ConfigToggle label="Cracked (Offline)" propKey="online-mode" invert={true} />
          <ConfigToggle label="PVP" propKey="pvp" />
          <ConfigToggle label="Command Blocks" propKey="enable-command-block" />
          <ConfigToggle label="Flight" propKey="allow-flight" />
          <ConfigToggle label="Animals" propKey="spawn-animals" />
          <ConfigToggle label="Monsters" propKey="spawn-monsters" />
          <ConfigToggle label="Villagers (NPCs)" propKey="spawn-npcs" />
          <ConfigToggle label="Nether" propKey="allow-nether" />
          <ConfigToggle label="Force Gamemode" propKey="force-gamemode" />
          <ConfigNumber label="Spawn Protection" propKey="spawn-protection" />
          <ConfigNumber label="Idle Timeout" propKey="player-idle-timeout" />
          <ConfigNumber label="View Distance" propKey="view-distance" />
          <ConfigString label="MOTD (Message of the day)" propKey="motd" placeholder="A Minecraft Server" />
          <ConfigString label="Resource Pack URL" propKey="resource-pack" placeholder="https://example.com/pack.zip" />
        </div>
      )}
    </div>
  );
});
