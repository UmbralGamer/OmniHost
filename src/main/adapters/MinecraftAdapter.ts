import { spawn, ChildProcess } from 'child_process'
import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import fs from 'fs'
import axios from 'axios'

export class MinecraftAdapter {
  serverId: number;
  serverDir: string;
  process: ChildProcess | null = null;
  onlinePlayers: string[] = []; 

  constructor(serverId: number) {
    this.serverId = serverId;
    this.serverDir = join(app.getPath('userData'), 'servers', serverId.toString());
  }

  sendLog(msg: string) {
    console.log(msg); // Guaranteed VS Code output!
    BrowserWindow.getAllWindows().forEach(win => {
      if (!win.isDestroyed()) win.webContents.send('console-log', msg);
    });
  }

  sendPlayerUpdate() {
    BrowserWindow.getAllWindows().forEach(win => {
      if (!win.isDestroyed()) win.webContents.send('online-players', { id: this.serverId, players: this.onlinePlayers });
    });
  }

  sendCommand(cmd: string) {
    if (this.process && this.process.stdin) {
      this.process.stdin.write(cmd + '\n');
      this.sendLog(`> ${cmd}`); 
    } else {
      this.sendLog(`[System] Cannot send command: Server is offline.`);
    }
  }

  async getPlayerInventory(playerName: string) {
    try {
      this.sendCommand('save-all flush');
      await new Promise(r => setTimeout(r, 200));

      const cachePath = join(this.serverDir, 'usercache.json');
      if (!fs.existsSync(cachePath)) return null;
      
      const cache = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      const playerEntry = cache.find((p: any) => p.name.toLowerCase() === playerName.toLowerCase());
      if (!playerEntry) return null;

      const datPath = join(this.serverDir, 'world', 'playerdata', `${playerEntry.uuid}.dat`);
      if (!fs.existsSync(datPath)) return null;

      const buffer = fs.readFileSync(datPath);
      
      // Clean NBT Require (Fixes the deprecation warning in the terminal!)
      const libName = 'prismarine-nbt';
      const nbt = require(libName);
      const { parsed } = await nbt.parse(buffer);
      
      const inventory = parsed.value.Inventory?.value?.value || [];
      return inventory.map((item: any) => ({
        slot: item.Slot.value,
        id: item.id.value.replace('minecraft:', ''),
        count: item.Count.value
      }));
    } catch (err: any) {
      this.sendLog(`[System] Inventory Error: ${err.message}`);
      return null;
    }
  }

  async init() {
    if (!fs.existsSync(this.serverDir)) fs.mkdirSync(this.serverDir, { recursive: true });
    const jarPath = join(this.serverDir, 'paper.jar');
    
    if (!fs.existsSync(jarPath)) {
      this.sendLog(`[System] Asking PaperMC for the latest version...`);
      const version = '1.20.4';
      const userAgent = 'OmniHost-App/1.0.0 (admin@localhost)'; 
      const buildsRes = await axios.get(`https://fill.papermc.io/v3/projects/paper/versions/${version}/builds`, { headers: { 'User-Agent': userAgent } });
      const latestBuild = buildsRes.data[buildsRes.data.length - 1]; 
      this.sendLog(`[System] Downloading Paper build ${latestBuild.id}... this might take a minute!`);
      const response = await axios({ url: latestBuild.downloads['server:default'].url, method: 'GET', responseType: 'stream', headers: { 'User-Agent': userAgent } });
      const writer = fs.createWriteStream(jarPath);
      response.data.pipe(writer);
      await new Promise((resolve, reject) => { writer.on('finish', resolve); writer.on('error', reject); });
      this.sendLog('[System] Download complete!');
    }
    fs.writeFileSync(join(this.serverDir, 'eula.txt'), 'eula=true\n');
  }

  async start() {
    await this.init();
    this.onlinePlayers = []; 
    this.sendPlayerUpdate();
    
    this.sendLog(`[System] Starting Server ${this.serverId}...`);
    this.process = spawn('java', ['-Xmx2G', '-jar', 'paper.jar', 'nogui'], { cwd: this.serverDir });

    this.process.stdout?.on('data', (data) => {
      const rawText = data.toString().trim();
      const cleanText = rawText.replace(/\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/g, '');
      if (!cleanText) return;
      this.sendLog(`[Minecraft]: ${cleanText}`);

      const joinMatch = cleanText.match(/([a-zA-Z0-9_]{3,16}) joined the game/);
      if (joinMatch) {
        if (!this.onlinePlayers.includes(joinMatch[1])) {
          this.onlinePlayers.push(joinMatch[1]);
          this.sendPlayerUpdate();
        }
      }
      const leaveMatch = cleanText.match(/([a-zA-Z0-9_]{3,16}) left the game/);
      if (leaveMatch) {
        this.onlinePlayers = this.onlinePlayers.filter(p => p !== leaveMatch[1]);
        this.sendPlayerUpdate();
      }
    });
    this.process.stderr?.on('data', (data) => this.sendLog(`[Minecraft Error]: ${data.toString().trim()}`));
  }

  stop() {
    if (this.process) {
      this.sendLog(`[System] Stopping Server ${this.serverId}...`);
      this.process.stdin?.write('stop\n');
      this.process = null;
      this.onlinePlayers = []; 
      this.sendPlayerUpdate();
    }
  }
}