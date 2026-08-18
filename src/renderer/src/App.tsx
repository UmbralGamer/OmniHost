import { useState, useEffect } from 'react'

function App() {
  const [servers, setServers] = useState<any[]>([])

  // This runs the moment the app opens, fetching real data from SQLite!
  useEffect(() => {
    const fetchServers = async () => {
      // @ts-ignore
      const data = await window.api.getServers()
      setServers(data)
    }
    fetchServers()
  }, [])

  return (
    <div className="flex h-screen bg-darkBg text-white overflow-hidden">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-darkCard border-r border-gray-800 p-5 flex flex-col">
        <h1 className="text-2xl font-bold text-brand mb-8">OmniHost</h1>
        <ul className="space-y-4">
          <li className="text-gray-300 hover:text-white cursor-pointer flex items-center bg-gray-800/50 p-2 rounded-lg">Dashboard</li>
          <li className="text-gray-400 hover:text-white cursor-pointer flex items-center p-2 rounded-lg">Tunnels (Playit)</li>
          <li className="text-gray-400 hover:text-white cursor-pointer flex items-center p-2 rounded-lg">Settings</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Your Servers</h2>
          <button className="bg-brand hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold shadow-lg shadow-blue-500/30 transition-all">
            + New Server
          </button>
        </div>

        {/* SERVER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servers.map((server) => (
            <div key={server.id} className="bg-darkCard p-6 rounded-xl border border-gray-700 shadow-xl hover:border-gray-500 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{server.name}</h3>
                  <p className="text-sm text-gray-400">{server.game}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 ${server.status === 'Online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  <div className={`w-2 h-2 rounded-full ${server.status === 'Online' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  {server.status}
                </div>
              </div>
              
              <div className="text-sm text-gray-400 mb-6">
                Players: <span className="text-white">{server.players}</span>
              </div>

              <div className="flex gap-3">
                <button className={`flex-1 py-2 rounded-lg font-semibold transition-all ${server.status === 'Online' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30' : 'bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/30'}`}>
                  {server.status === 'Online' ? 'Stop Server' : 'Start Server'}
                </button>
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg font-semibold transition-all">
                  Console
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App