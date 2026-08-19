import net from 'net';
import { MinecraftAdapter } from './MinecraftAdapter';

export class WakeProxy {
  private server: net.Server | null = null;
  private adapter: MinecraftAdapter;
  private port: number;

  constructor(adapter: MinecraftAdapter, port: number = 25565) {
    this.adapter = adapter;
    this.port = port;
  }

  startListening() {
    if (this.server) return; // Already listening

    this.server = net.createServer((socket) => {
      this.adapter.sendLog(`[WakeProxy] Connection detected from ${socket.remoteAddress}! Waking up server...`);
      socket.end(); // Close connection immediately
      
      this.stopListening(); // Free the port!
      
      // Delay slightly to ensure port is fully freed before starting
      setTimeout(() => {
        this.adapter.start();
      }, 500);
    });

    this.server.on('error', (err: any) => {
      this.adapter.sendLog(`[WakeProxy] Error: ${err.message}`);
      this.stopListening();
    });

    try {
      this.server.listen(this.port, () => {
        this.adapter.sendLog(`[WakeProxy] Sleeping. Listening on port ${this.port} for wake-up connections...`);
      });
    } catch (e) {
      this.adapter.sendLog(`[WakeProxy] Failed to bind to port ${this.port}. Is another server running?`);
    }
  }

  stopListening() {
    if (this.server) {
      try {
        this.server.close();
      } catch (e) {}
      this.server = null;
      this.adapter.sendLog(`[WakeProxy] Stopped listening on port ${this.port}.`);
    }
  }
}
