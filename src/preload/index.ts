import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  getServers: () => ipcRenderer.invoke('get-servers'),
  startServer: (id: number) => ipcRenderer.invoke('start-server', id),
  stopServer: (id: number) => ipcRenderer.invoke('stop-server', id),
  startTunnel: () => ipcRenderer.invoke('start-tunnel'),
  stopTunnel: () => ipcRenderer.invoke('stop-tunnel'),
  readConfig: (id: number) => ipcRenderer.invoke('read-config', id),
  writeConfig: (id: number, data: string) => ipcRenderer.invoke('write-config', id, data),
  readJson: (id: number, filename: string) => ipcRenderer.invoke('read-json', id, filename),
  writeJson: (id: number, filename: string, data: any) => ipcRenderer.invoke('write-json', id, filename, data),
  sendCommand: (id: number, cmd: string) => ipcRenderer.invoke('send-command', id, cmd),
  getInventory: (id: number, playerName: string) => ipcRenderer.invoke('get-inventory', id, playerName),
  onConsoleLog: (callback: (msg: string) => void) => {
    ipcRenderer.removeAllListeners('console-log')
    ipcRenderer.on('console-log', (_, msg) => callback(msg))
  },
  // --- NEW: Listens for the live player array ---
  onOnlinePlayers: (callback: (data: {id: number, players: string[]}) => void) => {
    ipcRenderer.removeAllListeners('online-players')
    ipcRenderer.on('online-players', (_, data) => callback(data))
  },
  
  // Versions & Downloads
  createServer: (name: string, type: string, version: string) => ipcRenderer.invoke('create-server', name, type, version),
  getVanillaVersions: () => ipcRenderer.invoke('get-vanilla-versions'),
  getPaperVersions: () => ipcRenderer.invoke('get-paper-versions'),
  getFabricVersions: () => ipcRenderer.invoke('get-fabric-versions'),
  getForgeVersions: () => ipcRenderer.invoke('get-forge-versions'),
  getNeoForgeVersions: () => ipcRenderer.invoke('get-neoforge-versions'),
  downloadServerJar: (id: number, type: string, version: string) => ipcRenderer.invoke('download-server-jar', id, type, version),
  onDownloadProgress: (id: number, callback: (progress: number, text?: string) => void) => {
    ipcRenderer.removeAllListeners(`download-progress-${id}`)
    ipcRenderer.on(`download-progress-${id}`, (_, progress, text) => callback(progress, text))
  }
}


if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore
  window.electron = electronAPI
  // @ts-ignore
  window.api = api
}