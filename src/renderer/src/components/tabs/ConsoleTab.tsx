import React, { useState } from 'react';

interface ConsoleTabProps {
  logs: string[];
  endOfLogsRef: React.RefObject<HTMLDivElement | null>;
  handleSendCommand: (command: string) => void;
  onlinePlayers: string[];
}

export const ConsoleTab: React.FC<ConsoleTabProps> = React.memo(({
  logs,
  endOfLogsRef,
  handleSendCommand,
  onlinePlayers
}) => {
  const [consoleInput, setConsoleInput] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;
    handleSendCommand(consoleInput);
    setConsoleInput('');
  };
  return (
    <div className="absolute inset-0 flex min-h-0">
      <div className="flex-1 flex flex-col bg-[#050505]/60 backdrop-blur-md min-h-0 min-w-0">
        <div className="flex-1 p-6 overflow-y-auto font-mono text-sm text-gray-300 min-h-0">
          {logs.length === 0 && <div className="text-gray-600 italic mt-4 mb-4">Waiting for server output... click Start to boot!</div>}
          {logs.map((log, i) => (
            <div key={i} className="mb-1 leading-relaxed break-words">
              {log.includes('INFO') ? <span className="text-yellow-400 font-bold">INFO </span> : ''}
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

        <form onSubmit={onSubmit} className="p-4 bg-darkCard border-t border-gray-800 flex gap-3">
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
                <div key={idx} className="flex items-center gap-3 bg-gray-800/40 p-3 rounded-lg border border-gray-800/50">
                  <img src={`https://mc-heads.net/avatar/${playerName}/32`} alt={playerName} className="w-8 h-8 rounded shadow-sm bg-gray-900" />
                  <span className="font-bold text-gray-200">{playerName}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
