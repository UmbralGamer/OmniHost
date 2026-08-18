import { useState, useEffect, useRef } from 'react'

function App() {
  const [servers, setServers] = useState<any[]>([])
  const [logs, setLogs] = useState<string[]>([])
  const [tunnelStatus, setTunnelStatus] = useState('Offline')
  
  const [activeServerId, setActiveServerId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'console' | 'options' | 'players' | 'software'>('console')
  const [onlinePlayers, setOnlinePlayers] = useState<string[]>([])
  
  const [consoleInput, setConsoleInput] = useState('')
  const [rawConfigText, setRawConfigText] = useState('')
  const [advancedMode, setAdvancedMode] = useState(false)
  const [props, setProps] = useState<Record<string, string>>({})

  const [playerListType, setPlayerListType] = useState<'live' | 'whitelist' | 'ops' | 'banned-players' | 'banned-ips'>('live')
  const [playerData, setPlayerData] = useState<any[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)
  const [playerInventory, setPlayerInventory] = useState<any[] | null>(null)
  const [toasts, setToasts] = useState<{id: number, message: string}[]>([])

  const endOfLogsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchServers = async () => {
      // @ts-ignore
      const data = await window.api.getServers()
      setServers(data)
    }
    fetchServers()

    // --- LISTENER 1: CONSOLE LOGS ---
    // @ts-ignore
    window.api.onConsoleLog((msg: string) => {
      setLogs(prev => [...prev, msg])
    })

    // --- LISTENER 2: LIVE PLAYERS ---
    // @ts-ignore
    window.api.onOnlinePlayers((data: {id: number, players: string[]}) => {
      setOnlinePlayers(data.players)
    })
  }, [])

  useEffect(() => {
    if (activeTab === 'console') {
      endOfLogsRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [logs, activeTab])

  useEffect(() => {
    if (activeServerId !== null) {
      if (activeTab === 'options') loadConfig(activeServerId);
      if (activeTab === 'players' && playerListType !== 'live') loadPlayers(activeServerId, playerListType);
    }
  }, [activeServerId, activeTab, playerListType])

  useEffect(() => {
    if (selectedPlayer && activeServerId !== null) {
      const fetchInv = async () => {
        // @ts-ignore
        const inv = await window.api.getInventory(activeServerId, selectedPlayer);
        setPlayerInventory(inv);
      };
      fetchInv();
    }
  }, [selectedPlayer, activeServerId])

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }

  const handleStart = async (id: number) => {
    try {
      // @ts-ignore
      await window.api.startServer(id);
      setServers(servers.map(s => s.id === id ? { ...s, status: 'Online' } : s));
      showToast("Server is starting...");
    } catch (error) {
      alert("Backend Error: " + error);
    }
  }

  const handleStop = async (id: number) => {
    // @ts-ignore
    await window.api.stopServer(id);
    setServers(servers.map(s => s.id === id ? { ...s, status: 'Offline' } : s));
    showToast("Server has been stopped.");
  }

  const handleRestart = async (id: number) => {
    try {
      // @ts-ignore
      await window.api.stopServer(id);
      setServers(servers.map(s => s.id === id ? { ...s, status: 'Offline' } : s));
      showToast("Server is restarting...");
      
      // Give the server a moment to fully shut down before starting again
      setTimeout(async () => {
        // @ts-ignore
        await window.api.startServer(id);
        setServers(servers.map(s => s.id === id ? { ...s, status: 'Online' } : s));
      }, 3000);
    } catch (error) {
      alert("Backend Error: " + error);
    }
  }

  const handleTunnel = async () => {
    if (tunnelStatus === 'Offline') {
      setTunnelStatus('Starting...');
      // @ts-ignore
      await window.api.startTunnel();
      setTunnelStatus('Online');
      showToast("Tunnel connected!");
    } else {
      // @ts-ignore
      await window.api.stopTunnel();
      setTunnelStatus('Offline');
      showToast("Tunnel disconnected.");
    }
  }

  const handleSendCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim() || activeServerId === null) return;
    // @ts-ignore
    await window.api.sendCommand(activeServerId, consoleInput);
    setConsoleInput('');
  }

  const sendPlayerCommand = async (cmd: string, successMsg: string) => {
    if (activeServerId !== null && selectedPlayer) {
      // @ts-ignore
      await window.api.sendCommand(activeServerId, cmd.replace('{player}', selectedPlayer));
      showToast(successMsg.replace('{player}', selectedPlayer));
    }
  }

  const loadConfig = async (id: number) => {
    // @ts-ignore
    const data = await window.api.readConfig(id);
    setRawConfigText(data);
    const parsed: Record<string, string> = {};
    data.split('\n').forEach((line: string) => {
      if (line.trim() && !line.startsWith('#')) {
        const [key, ...val] = line.split('=');
        if (key && val) parsed[key.trim()] = val.join('=').trim();
      }
    });
    setProps(parsed);
  }

  const handleSaveConfig = async () => {
    if (activeServerId !== null) {
      let finalData = rawConfigText;
      Object.keys(props).forEach(key => {
        const regex = new RegExp(`^${key}=.*`, 'm');
        if (regex.test(finalData)) {
          finalData = finalData.replace(regex, `${key}=${props[key]}`);
        } else {
          finalData += `\n${key}=${props[key]}`;
        }
      });
      // @ts-ignore
      await window.api.writeConfig(activeServerId, advancedMode ? rawConfigText : finalData);
      showToast("Settings saved! Restart server to apply.");
    }
  }

  const loadPlayers = async (id: number, type: string) => {
    // @ts-ignore
    const data = await window.api.readJson(id, type);
    setPlayerData(data);
  }

  const handleAddPlayer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlayerName || activeServerId === null || playerListType === 'live') return;
    setIsProcessing(true);

    let uuid = "00000000-0000-0000-0000-000000000000"; 
    let name = newPlayerName.trim();

    if (playerListType !== 'banned-ips') {
      try {
        const res = await fetch(`https://api.ashcon.app/mojang/v2/user/${name}`);
        if (res.ok) {
          const profile = await res.json();
          uuid = profile.uuid;
          name = profile.username; 
        }
      } catch (err) {}
    }

    let newEntry: any = { uuid, name };
    if (playerListType === 'ops') newEntry = { uuid, name, level: 4, bypassesPlayerLimit: false };
    else if (playerListType === 'banned-players') newEntry = { uuid, name, created: new Date().toISOString(), source: "Server", expires: "forever", reason: "Banned by operator." };
    else if (playerListType === 'banned-ips') newEntry = { ip: name, created: new Date().toISOString(), source: "Server", expires: "forever", reason: "Banned by operator." };

    const exists = playerData.some(p => p.name === name || p.ip === name);
    if (!exists) {
      const updatedList = [...playerData, newEntry];
      setPlayerData(updatedList);
      // @ts-ignore
      await window.api.writeJson(activeServerId, playerListType, updatedList);
      showToast(`Added ${name} to ${playerListType}`);
    }
    
    setNewPlayerName('');
    setIsProcessing(false);
  }

  const handleRemovePlayer = async (targetName: string) => {
    if (activeServerId === null) return;
    const updatedList = playerData.filter(p => p.name !== targetName && p.ip !== targetName);
    setPlayerData(updatedList);
    // @ts-ignore
    await window.api.writeJson(activeServerId, playerListType, updatedList);
    showToast(`Removed ${targetName}`);
  }

  // --- UI COMPONENTS ---
  const ConfigToggle = ({ label, propKey, invert = false }: any) => {
    const rawVal = props[propKey] === 'true';
    const isToggled = invert ? !rawVal : rawVal;
    return (
      <div className="bg-[#1e1e2e] border border-gray-700/50 p-4 rounded-lg flex justify-between items-center shadow-md">
        <span className="font-bold text-gray-200">{label}</span>
        <button onClick={() => setProps(prev => ({ ...prev, [propKey]: invert ? (isToggled ? 'true' : 'false') : (!isToggled ? 'true' : 'false') }))} className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isToggled ? 'bg-green-500' : 'bg-red-500'}`}>
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isToggled ? 'right-1' : 'left-1'}`}></div>
        </button>
      </div>
    );
  }

  const ConfigSelect = ({ label, propKey, options }: any) => (
    <div className="bg-[#1e1e2e] border border-gray-700/50 p-4 rounded-lg flex justify-between items-center shadow-md">
      <span className="font-bold text-gray-200">{label}</span>
      <select value={props[propKey] || ''} onChange={(e) => setProps(prev => ({...prev, [propKey]: e.target.value}))} className="bg-darkBg text-white border border-gray-600 rounded p-1 outline-none focus:border-brand capitalize">
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  )

  const ConfigNumber = ({ label, propKey }: any) => (
    <div className="bg-[#1e1e2e] border border-gray-700/50 p-4 rounded-lg flex justify-between items-center shadow-md">
      <span className="font-bold text-gray-200">{label}</span>
      <input type="number" value={props[propKey] || 0} onChange={(e) => setProps(prev => ({...prev, [propKey]: e.target.value}))} className="bg-darkBg text-white border border-gray-600 rounded p-1 w-20 text-center outline-none focus:border-brand" />
    </div>
  )

  const ConfigString = ({ label, propKey, placeholder }: any) => (
    <div className="bg-[#1e1e2e] border border-gray-700/50 p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center shadow-md col-span-1 md:col-span-2 lg:col-span-3 gap-2">
      <span className="font-bold text-gray-200 whitespace-nowrap">{label}</span>
      <input type="text" value={props[propKey] || ''} placeholder={placeholder} onChange={(e) => setProps(prev => ({...prev, [propKey]: e.target.value}))} className="bg-darkBg text-white border border-gray-600 rounded p-2 flex-1 w-full outline-none focus:border-brand" />
    </div>
  )

  const MinecraftSlot = ({ slotId }: { slotId: number }) => {
    const item = playerInventory?.find(i => i.slot === slotId);
    return (
      <div className="w-10 h-10 bg-[#8b8b8b] border-t-2 border-l-2 border-[#373737] border-b-2 border-r-2 border-[#ffffff] relative flex items-center justify-center group shadow-inner cursor-help hover:bg-[#a0a0a0] transition-colors">
        {item ? (
          <>
            <img src={`https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.19.3/items/${item.id}.png`} alt={item.id} className="w-8 h-8 object-contain drop-shadow-md z-10" onError={(e) => {(e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjYzg3ZTI1Ii8+PC9zdmc+';}} />
            {item.count > 1 && <span className="absolute -bottom-1 -right-1 text-white font-black text-[11px] z-20 drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">{item.count}</span>}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-[#120412] text-white text-xs rounded border border-[#3b123b] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none capitalize">{item.id.replace(/_/g, ' ')}</div>
          </>
        ) : null}
      </div>
    );
  }

  const activeServer = servers.find(s => s.id === activeServerId);

  return (
    <div className="flex h-screen bg-darkBg text-white overflow-hidden relative">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-darkCard border-r border-gray-800 flex flex-col z-10 shadow-2xl">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span className="text-brand">Omni</span>Host
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div onClick={() => setActiveServerId(null)} className={`px-6 py-3 cursor-pointer flex items-center gap-3 transition-colors ${activeServerId === null ? 'bg-brand/10 text-brand border-r-4 border-brand font-bold' : 'text-gray-400 hover:text-white hover:bg-gray-800/50 font-semibold'}`}>Dashboard</div>
          <div className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Your Servers</div>
          
          {servers.map(server => (
            <div key={server.id} className="mb-2">
              <div onClick={() => { 
                if (activeServerId === server.id) {
                  setActiveServerId(null);
                } else {
                  setActiveServerId(server.id); 
                  setActiveTab('console'); 
                }
              }} className={`px-6 py-3 cursor-pointer flex justify-between items-center transition-colors ${activeServerId === server.id ? 'bg-gray-800/80 text-white font-bold' : 'text-gray-400 hover:text-white hover:bg-gray-800/30 font-semibold'}`}>
                <span className="truncate pr-2">{server.name}</span>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${server.status === 'Online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`}></div>
              </div>

              {activeServerId === server.id && (
                <div className="bg-[#0f1219] py-2 border-y border-gray-800/50 shadow-inner">
                  {[{ id: 'console', label: 'Console' }, { id: 'options', label: 'Options' }, { id: 'players', label: 'Players' }, { id: 'software', label: 'Software' }].map(tab => (
                    <div key={tab.id} onClick={() => { setActiveTab(tab.id as any); setSelectedPlayer(null); }} className={`pl-10 pr-6 py-2 cursor-pointer text-sm font-semibold transition-all ${activeTab === tab.id ? 'text-brand bg-brand/5 border-l-2 border-brand' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30 border-l-2 border-transparent'}`}>{tab.label}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-800 bg-[#121824]">
          <button onClick={handleTunnel} className={`w-full py-2 rounded-md text-sm font-bold shadow-lg transition-colors ${tunnelStatus === 'Online' ? 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20' : 'bg-brand hover:bg-blue-600 text-white'}`}>
            {tunnelStatus === 'Online' ? 'Stop Tunnel' : 'Start Tunnel'}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col bg-[#0a0a0f] relative">
        
        {/* DASHBOARD VIEW */}
        {activeServerId === null && (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {servers.map((server) => (
                <div key={server.id} onClick={() => { setActiveServerId(server.id); setActiveTab('console'); }} className="bg-darkCard p-6 rounded-xl border border-gray-700/50 shadow-xl cursor-pointer group hover:border-brand/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-brand transition-colors">{server.name}</h3>
                      <p className="text-sm text-gray-400">{server.game}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 ${server.status === 'Online' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      <div className={`w-2 h-2 rounded-full ${server.status === 'Online' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      {server.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTIVE SERVER VIEW */}
        {activeServer !== undefined && activeServerId !== null && (
          <>
            <div className="bg-darkCard border-b border-gray-800 p-6 flex justify-between items-center shadow-sm z-10">
              <h2 className="text-2xl font-bold text-white">{activeServer.name}</h2>
              <div className="flex gap-2">
                <button onClick={() => activeServer.status === 'Online' ? handleStop(activeServer.id) : handleStart(activeServer.id)} className={`px-8 py-2.5 rounded-lg font-bold text-white transition-all ${activeServer.status === 'Online' ? 'bg-red-500 hover:bg-red-600 shadow-red-500/20 shadow-lg' : 'bg-green-600 hover:bg-green-500 shadow-green-500/20 shadow-lg'}`}>
                  {activeServer.status === 'Online' ? 'STOP' : 'START'}
                </button>
                <button onClick={() => handleRestart(activeServer.id)} className="px-8 py-2.5 rounded-lg font-bold text-white transition-all bg-yellow-500 hover:bg-yellow-600 shadow-yellow-500/20 shadow-lg">
                  RESTART
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden relative min-h-0">
              
              {/* TAB: CONSOLE */}
              {activeTab === 'console' && (
                <div className="absolute inset-0 flex min-h-0">
                  <div className="flex-1 flex flex-col bg-[#050505] min-h-0 min-w-0">
                    <div className="flex-1 p-6 overflow-y-auto font-mono text-sm text-gray-300 min-h-0">
                      {logs.length === 0 && <div className="text-gray-600 italic mt-4 mb-4">Waiting for server output... click Start to boot!</div>}
                      {logs.map((log, i) => (
                        <div key={i} className="mb-1 leading-relaxed break-words">
                          {log.includes('INFO') ? <span className="text-blue-400 font-bold">INFO </span> : ''}
                          {log.includes('WARN') ? <span className="text-yellow-400 font-bold">WARN </span> : ''}
                          {log.includes('ERROR') ? <span className="text-red-400 font-bold">ERROR </span> : ''}
                          {log.startsWith('>') ? <span className="text-brand font-bold"> </span> : ''}
                          <span className={log.includes('joined the game') ? 'text-green-400 font-bold' : log.includes('left the game') ? 'text-gray-500' : log.startsWith('>') ? 'text-brand font-bold' : ''}>
                            {log.replace(/(INFO|WARN|ERROR)/, '')}
                          </span>
                        </div>
                      ))}
                      <div ref={endOfLogsRef} />
                    </div>
                    
                    <form onSubmit={handleSendCommand} className="p-4 bg-darkCard border-t border-gray-800 flex gap-3">
                      <span className="text-gray-500 font-bold text-xl leading-none flex items-center">&gt;</span>
                      <input type="text" value={consoleInput} onChange={(e) => setConsoleInput(e.target.value)} placeholder="Type a command..." className="flex-1 bg-transparent border-none outline-none text-white font-mono" />
                      <button type="submit" className="bg-gray-800 hover:bg-brand text-white px-6 py-2 rounded font-bold transition-colors">Send</button>
                    </form>
                  </div>

                  <div className="w-72 bg-darkCard border-l border-gray-800 flex flex-col shadow-inner min-h-0">
                    <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/30">
                      <h3 className="font-bold text-gray-200">Live Players</h3>
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">{onlinePlayers.length} Online</div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 min-h-0">
                      {onlinePlayers.length === 0 ? (
                        <div className="text-center text-gray-500 text-sm mt-10">No one is online right now.</div>
                      ) : (
                        <div className="space-y-3">
                          {onlinePlayers.map((playerName, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-800/40 p-3 rounded-lg border border-gray-700/50">
                              <img src={`https://mc-heads.net/avatar/${playerName}/32`} alt={playerName} className="w-8 h-8 rounded shadow-sm bg-gray-900" />
                              <span className="font-bold text-gray-200">{playerName}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: OPTIONS */}
              {activeTab === 'options' && (
                <div className="absolute inset-0 p-8 overflow-y-auto">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">Server Properties</h3>
                      <p className="text-gray-400 text-sm mt-1">Configure exactly how your world works.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <button onClick={() => setAdvancedMode(!advancedMode)} className="text-sm text-brand hover:text-blue-400 underline">
                        {advancedMode ? 'Switch to Visual UI' : 'Switch to Raw Text'}
                      </button>
                      <button onClick={handleSaveConfig} className="px-6 py-2 bg-brand hover:bg-blue-600 rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-all text-white">
                        Save Settings
                      </button>
                    </div>
                  </div>

                  {advancedMode ? (
                    <div className="h-[60vh] bg-darkCard border border-gray-700 rounded-xl overflow-hidden flex flex-col">
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
              )}

              {/* TAB: PLAYERS */}
              {activeTab === 'players' && (
                <div className="h-full flex flex-col p-8 overflow-y-auto">
                  {!selectedPlayer ? (
                    <>
                      <div className="flex gap-2 mb-8 bg-gray-900/50 p-2 rounded-xl border border-gray-800">
                        {['live', 'whitelist', 'ops', 'banned-players', 'banned-ips'].map(type => (
                          <button key={type} onClick={() => setPlayerListType(type as any)} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all capitalize ${playerListType === type ? 'bg-green-600 text-white shadow-lg shadow-green-500/20' : 'text-gray-400 hover:bg-gray-800'}`}>
                            {type.replace('-', ' ')}
                          </button>
                        ))}
                      </div>

                      {playerListType !== 'live' && (
                        <form onSubmit={handleAddPlayer} className="mb-6 flex gap-3">
                          <input type="text" placeholder="Enter Username/IP..." value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} className="flex-1 bg-darkCard border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-brand" disabled={isProcessing} />
                          <button type="submit" disabled={isProcessing} className="px-8 bg-brand hover:bg-blue-600 rounded-lg font-bold transition-all disabled:opacity-50">{isProcessing ? 'Adding...' : 'Add'}</button>
                        </form>
                      )}

                      <div className="flex-1 overflow-y-auto">
                        {(playerListType === 'live' ? onlinePlayers : playerData).length === 0 ? (
                          <div className="text-center text-gray-500 mt-12">No records found.</div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {(playerListType === 'live' ? onlinePlayers : playerData).map((player: any, idx) => {
                              const pName = typeof player === 'string' ? player : (player.name || player.ip);
                              const isIp = playerListType === 'banned-ips';
                              return (
                                <div key={idx} onClick={() => !isIp && setSelectedPlayer(pName)} className={`bg-darkCard border border-gray-700/50 p-4 rounded-xl flex items-center justify-between group transition-all shadow-md ${!isIp ? 'cursor-pointer hover:border-brand' : ''}`}>
                                  <div className="flex items-center gap-4">
                                    {isIp ? (
                                      <div className="w-10 h-10 bg-red-900/30 rounded flex items-center justify-center text-red-500 font-bold border border-red-500/30">IP</div>
                                    ) : (
                                      <img src={`https://mc-heads.net/avatar/${pName}/32`} alt="face" className="w-10 h-10 rounded-md shadow-sm bg-gray-900" />
                                    )}
                                    <div>
                                      <h4 className="font-bold text-gray-200">{pName}</h4>
                                      <p className="text-xs text-green-500 font-mono">Click for details &rarr;</p>
                                    </div>
                                  </div>
                                  {playerListType !== 'live' && (
                                    <button onClick={(e) => { e.stopPropagation(); handleRemovePlayer(pName); }} className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">✕</button>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between bg-darkCard p-6 rounded-xl border border-gray-700 mb-6 shadow-md">
                        <div className="flex items-center gap-5">
                          <img src={`https://mc-heads.net/avatar/${selectedPlayer}/64`} alt="face" className="w-16 h-16 rounded-lg shadow-lg bg-gray-900" />
                          <div>
                            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                              {selectedPlayer}
                              <span className={`text-xs px-2 py-1 rounded-md font-bold uppercase ${onlinePlayers.includes(selectedPlayer) ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
                                {onlinePlayers.includes(selectedPlayer) ? 'Online' : 'Offline'}
                              </span>
                            </h2>
                            <p className="text-sm text-gray-400 font-mono mt-1">Player Profile details</p>
                          </div>
                        </div>
                        <button onClick={() => setSelectedPlayer(null)} className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold transition-all">&larr; Back</button>
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-20">
                        <div className="xl:col-span-2 space-y-6">
                          <div className="bg-darkCard p-6 rounded-xl border border-gray-700 shadow-md">
                            <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                              Live Inventory {playerInventory === null && <span className="text-xs text-red-400 ml-2">(Offline / No Data)</span>}
                            </h3>
                            <div className="bg-[#c6c6c6] p-6 rounded-lg border-[4px] border-[#555555] inline-block shadow-2xl mx-auto w-full max-w-[480px]">
                              <div className="grid grid-cols-9 gap-1 mb-4 bg-[#c6c6c6]">
                                {Array.from({length: 27}).map((_, i) => <MinecraftSlot key={`main-${i}`} slotId={i + 9} />)}
                              </div>
                              <div className="grid grid-cols-9 gap-1 mt-6">
                                {Array.from({length: 9}).map((_, i) => <MinecraftSlot key={`hotbar-${i}`} slotId={i} />)}
                              </div>
                            </div>
                          </div>
                          <div className="bg-darkCard p-6 rounded-xl border border-gray-700 shadow-md">
                            <h3 className="font-bold text-lg mb-4 text-white">Health and Actions</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                              <button onClick={() => sendPlayerCommand('kill {player}', 'Killed {player}!')} className="bg-[#ff8800] hover:bg-orange-500 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform flex justify-center">☠️ Kill</button>
                              <button onClick={() => sendPlayerCommand('effect give {player} instant_health 1 10', 'Healed {player}!')} className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform flex justify-center">❤️ Heal</button>
                              <button onClick={() => sendPlayerCommand('effect give {player} hunger 10 10', 'Starved {player}!')} className="bg-[#ff8800] hover:bg-orange-500 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform flex justify-center">🍖 Starve</button>
                              <button onClick={() => sendPlayerCommand('effect give {player} saturation 1 10', 'Fed {player}!')} className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform flex justify-center">🍗 Feed</button>
                              <button onClick={() => sendPlayerCommand('clear {player}', 'Cleared {player}\'s inventory!')} className="col-span-2 lg:col-span-4 bg-red-600/80 hover:bg-red-500 text-white font-bold py-3 rounded-lg shadow-lg active:scale-95 transition-transform border border-red-500/50">🗑️ Clear Inventory</button>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-darkCard p-6 rounded-xl border border-gray-700 shadow-md">
                            <h3 className="font-bold text-lg mb-4 text-white">Control Panel</h3>
                            <div className="space-y-3">
                              <button onClick={() => sendPlayerCommand('whitelist add {player}', 'Added {player} to Whitelist!')} className="w-full bg-gray-800 hover:bg-gray-700 py-3 px-4 rounded-lg font-bold flex justify-between items-center transition-colors">
                                <span>Add to Whitelist</span> <span className="text-gray-400">→</span>
                              </button>
                              <button onClick={() => sendPlayerCommand('op {player}', 'Made {player} an OP!')} className="w-full bg-gray-800 hover:bg-gray-700 py-3 px-4 rounded-lg font-bold flex justify-between items-center transition-colors">
                                <span>Make Operator (OP)</span> <span className="text-gray-400">→</span>
                              </button>
                              <button onClick={() => sendPlayerCommand('deop {player}', 'Removed {player} as OP!')} className="w-full bg-gray-800 hover:bg-gray-700 py-3 px-4 rounded-lg font-bold flex justify-between items-center transition-colors">
                                <span className="text-yellow-500">Remove OP</span> <span className="text-gray-400">→</span>
                              </button>
                              <button onClick={() => sendPlayerCommand('ban {player}', 'Banned {player} from server!')} className="w-full bg-red-900/30 hover:bg-red-900/60 border border-red-900 py-3 px-4 rounded-lg font-bold flex justify-between items-center transition-colors text-red-400">
                                <span>Ban Player</span> <span className="text-red-500">→</span>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB: SOFTWARE */}
              {activeTab === 'software' && (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 p-8">
                  <div className="w-24 h-24 mb-6 opacity-20">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">Software & Modpacks</h3>
                  <p className="text-center max-w-md">This feature is being built in the next stage.</p>
                </div>
              )}

            </div>
          </>
        )}
      </div>

      {/* TOAST SYSTEM */}
      <div className="absolute bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        {toasts.map(toast => (
          <div key={toast.id} className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right-8 fade-in duration-300">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span className="font-bold text-sm">{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App