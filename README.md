# OmniHost

OmniHost is a modern, high-performance Minecraft server management application built with Electron, React, and TypeScript. It is designed to provide a seamless, all-in-one desktop experience for deploying, configuring, and running Minecraft servers locally, while bypassing the headaches of traditional port-forwarding.

![OmniHost UI Preview](https://via.placeholder.com/1200x600.png?text=OmniHost+Dashboard)

## 🚀 Features

* **Multi-Loader Support**: Create Vanilla, Paper, Fabric, Forge, and NeoForge servers with a single click.
* **Integrated Mod Management**: Browse, search, install, and update mods and modpacks directly from CurseForge within the app.
* **Auto-Java Management**: Automatically downloads and maps the correct Java version (Java 8, 16, 17, 21, or 25) depending on your selected Minecraft version.
* **Dynamic Hardware Allocation**: Easily scale your server's maximum RAM usage and CPU core limits using visual sliders.
* **Cloud Tunneling (`frp`)**: Expose your local servers to the internet using a secure cloud tunnel—no router port-forwarding required.
* **Smart Auto-Start & Auto-Stop**: Save system resources with an inactivity monitor that shuts down the server when empty, and a WakeProxy that instantly spins the server up the moment a player attempts to connect.
* **Built-in File Manager**: A rich visual file explorer for modifying server properties, exploring worlds, and editing configurations without leaving the app.

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, TailwindCSS
* **Backend**: Node.js, Electron (IPC Main)
* **Build Tool**: Vite (`electron-vite`)

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v16.14.0 or newer)
- Git

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hunterSC-code-07/OmniHost.git
   cd OmniHost
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will launch the Electron app with live-reloading enabled for both the main and renderer processes.

### Building for Production

To package OmniHost into a standalone executable for distribution, run the build command matching your OS:

- **Windows:**
  ```bash
  npm run build:win
  ```
- **macOS:**
  ```bash
  npm run build:mac
  ```
- **Linux:**
  ```bash
  npm run build:linux
  ```
The compiled binaries and installers will be output to the `dist` directory.

## 📁 Project Structure

* `src/main/`: Electron backend logic. Handles server processes, proxies, Java management, IPC events, and API interactions.
  * `adapters/`: Contains integration logic for Minecraft servers, CurseForge, Java parsing, and FRP tunneling.
* `src/renderer/`: The React frontend interface.
  * `components/tabs/`: Contains the modular UI tabs (Console, Options, File Manager, Mod Browser).
* `src/preload/`: The secure bridge exposing native Node functionalities to the React renderer.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
If you find a bug or have an idea, please open an issue or submit a Pull Request.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
