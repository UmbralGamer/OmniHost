# Graph Report - D:\\github\\OmniHost  (2026-08-26)

## Corpus Check
- 77 files · ~69,049 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 303 nodes · 519 edges · 68 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 232 non-file, non-concept node(s)
- Weakly connected components: 55
- Singleton components: 38
- Isolated nodes: 38
- Largest component: 83 node(s) (36% of the entity graph basis)
- Low-cohesion communities: 0
- Largest low-cohesion community: none on the entity graph basis

## Workspace Bridges
1. `DayzHub\(\)` - connects `Renderer App — Cache`, `Renderer Dayz Economy Tab`, `Renderer Dayz Files Tab`, `Renderer Dayz Installed Mods Tab`, `Renderer Dayz Mods Tab`, `Renderer Dayz Options Tab`, `Renderer Use Dayz Mod Downloader`; home: `Renderer Dayz Hub`; degree 11; score 2562.29
  source files: `D:/github/OmniHost/src/renderer/src/App.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModDownloader.ts`
2. `DayzAdapter` - connects `Main Dayz Adapter — Cleanup`, `Main Dayz Adapter — File`, `Main Dayz Adapter — Init`, `Main Dayz Adapter — Line`, `Main Dayz Adapter — Log`; home: `Main Dayz Adapter`; degree 15; score 1688
  source files: `D:/github/OmniHost/src/main/adapters/DayzAdapter.ts`
3. `App\(\)` - connects `Renderer App`, `Renderer Create Server Modal`, `Renderer Dashboard Hub`, `Renderer Dayz Hub`, `Renderer Minecraft Hub`; home: `Renderer App — Cache`; degree 12; score 1113.17
  source files: `D:/github/OmniHost/src/renderer/src/App.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx`, `D:/github/OmniHost/src/renderer/src/components/modals/DeleteConfirmationModal.tsx`, `D:/github/OmniHost/src/renderer/src/components/modals/SteamLoginModal.tsx`, `D:/github/OmniHost/src/renderer/src/components/modals/TunnelModal.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useIpcListeners.ts`
4. `.sendLog\(\)` - connects `Main Dayz Adapter`, `Main Dayz Adapter — Cleanup`, `Main Dayz Adapter — File`, `Main Dayz Adapter — Init`; home: `Main Dayz Adapter — Log`; degree 7; score 54.42
  source files: `D:/github/OmniHost/src/main/adapters/DayzAdapter.ts`
5. `DayzInstalledModsTab\(\)` - connects `Renderer Dayz Hub`, `Renderer Dayz Installed Mods Tab — Handle`, `Renderer Dayz Installed Mods Tab — Handle \(2\)`; home: `Renderer Dayz Installed Mods Tab`; degree 12; score 1842.59
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`
6. `DayzOptionsTab\(\)` - connects `Renderer Dayz Hub`, `Renderer Dayz Options Tab — Config`, `Renderer Dayz Options Tab — Replace`; home: `Renderer Dayz Options Tab`; degree 6; score 1374.09
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx`

## God Nodes
1. `DayzAdapter` - 17 edges
2. `SteamCMDManager` - 16 edges
3. `App\(\)` - 14 edges
4. `DayzInstalledModsTab\(\)` - 14 edges
5. `MinecraftAdapter` - 14 edges
6. `DayzHub\(\)` - 13 edges
7. `DayzFilesTab\(\)` - 11 edges
8. `DayzModsTab\(\)` - 11 edges
9. `CacheManager` - 10 edges
10. `RadminVpnAdapter` - 9 edges

## Surprising Connections
- `App\(\)` --renders--> `DashboardHub\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx  _bridges separate communities_
- `App\(\)` --renders--> `DayzHub\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx  _bridges separate communities_
- `App\(\)` --renders--> `MinecraftHub\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx  _bridges separate communities_
- `App\(\)` --renders--> `CreateServerModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx  _bridges separate communities_
- `App\(\)` --renders--> `SteamLoginModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/components/modals/SteamLoginModal.tsx  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - DayzHub\(\) bridges Renderer Dayz Hub and Renderer App — Cache, Renderer Use Dayz Mod Downloader, Renderer Dayz Options Tab, Renderer Dayz Economy Tab, Renderer Dayz Mods Tab, Renderer Dayz Installed Mods Tab, Renderer Dayz Files Tab, Renderer App.
  _High betweenness centrality \(2481.291\) across 9 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - DayzAdapter bridges Main Dayz Adapter and Main Dayz Adapter — Log, Main Dayz Adapter — Line, Main Dayz Adapter — Init, Main Dayz Adapter — Cleanup, Main Dayz Adapter — File, Main Db.
  _High betweenness centrality \(1623.000\) across 7 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - DayzInstalledModsTab\(\) bridges Renderer Dayz Installed Mods Tab and Renderer Dayz Hub, Renderer Use Dayz Mod Store, Renderer Dayz Installed Mods Tab — Handle, Renderer Dayz Installed Mods Tab — Handle \(2\), Renderer Use Dayz Mod Downloader.
  _High betweenness centrality \(1800.591\) across 6 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - App\(\) → CreateServerModal\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - App\(\) → DashboardHub\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Renderer App"
Cohesion (entity basis within full-graph community): 0.02
Nodes (19): getGameImageUrl\(\), isGameSupported\(\), BackupsTabProps, ConsoleTabProps, DeleteConfirmationModal\(\), confirmDeleteServer\(\), ModsTabProps, OverviewTabProps (+11 more)

### Community 1 - "Renderer Dayz Files Tab"
Cohesion (entity basis within full-graph community): 0.36
Nodes (9): DayzFilesTab\(\), fetchDir\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleFileClick\(\), handleNavigate\(\), handleNavigateUp\(\) (+1 more)

### Community 2 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 3 - "Main Db"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\), registerServerIpc\(\), getServerPath\(\)

### Community 4 - "Main Minecraft Adapter"
Cohesion (entity basis within full-graph community): 0.36
Nodes (8): MinecraftAdapter, .constructor\(\), .getActualPid\(\), .getPlayerInventory\(\), .sendCommand\(\), .sendLog\(\), .stop\(\), .updatePlayerStats\(\)

### Community 5 - "Main Steam Cmd Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): SteamCMDManager, .copyFromCache\(\), .deleteCache\(\), .getCacheDir\(\), .installApp\(\), .isCached\(\), .sendInput\(\), .updateCache\(\)

### Community 6 - "Renderer Dayz Mods Tab"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): DayzModsTab\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\), handleInstall\(\), handleUninstall\(\), loadInstalledMods\(\), stripBBCode\(\)

### Community 7 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): BackupsTab\(\), fetchBackups\(\), formatBytes\(\), handleCreate\(\), handleDelete\(\), handleRestore\(\)

### Community 8 - "Main Minecraft Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): exists\(\)

### Community 9 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzEconomyTab\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\), renderSlider\(\)

### Community 10 - "Renderer Dayz Installed Mods Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): DayzInstalledModsTab\(\), handleCheckDependencies\(\), handleDownloadMission\(\), handleExtractLocalMission\(\), handleRebuildLoadOrder\(\), openWorkshopPage\(\)

### Community 11 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 12 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 13 - "Renderer Use Minecraft Software"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): SoftwareTabProps, useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 14 - "Main Steam Cmd Manager — Download"
Cohesion (entity basis within full-graph community): 0.67
Nodes (6): .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 15 - "Renderer Use Minecraft Mods"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): useMinecraftMods\(\), fetchMods\(\), handleDeleteMod\(\), handleInstallMod\(\), installWithDeps\(\), handleSearchMods\(\)

### Community 16 - "Renderer Use Minecraft Players"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useMinecraftPlayers\(\), fetchInv\(\), handleAddPlayer\(\), handleRemovePlayer\(\), loadPlayers\(\), sendPlayerCommand\(\)

### Community 17 - "Renderer App — Cache"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): App\(\), checkCache\(\), formatBytes\(\), handleClearCache\(\), getGameThemeColor\(\)

### Community 18 - "Renderer Create Server Modal"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 19 - "Main Dayz Adapter"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzAdapter, .constructor\(\), .getPlayerInventory\(\), .updatePlayerStats\(\)

### Community 20 - "Renderer Dayz Hub"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzHub\(\), handleClearLogs\(\), handleSendCommand\(\), handleTabChange\(\), handleTunnel\(\)

### Community 21 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\)

### Community 22 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftHub\(\), fetchServerMeta\(\), handleTabChange\(\), handleTunnel\(\), onRedirectToCreateModpack\(\)

### Community 23 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 24 - "Main Wake Proxy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 25 - "Main Dayz Adapter — Log"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): .readNewLogs\(\), .sendCommand\(\), .sendLog\(\), .tailLogFile\(\)

### Community 26 - "Renderer Use Dayz Mod Downloader"
Cohesion (entity basis within full-graph community): 1
Nodes (1): useDayzModDownloader\(\)

### Community 27 - "Renderer Use Log Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 28 - "Renderer Use Dayz Mod Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzModStore, PendingDownload

### Community 29 - "Renderer Dayz Installed Mods Tab — Handle"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): handleToggleMap\(\), handleUninstall\(\), handleUninstallAll\(\), loadInstalledMods\(\)

### Community 30 - "Renderer Dayz Options Tab — Config"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): loadConfig\(\), parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 31 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 32 - "Main Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): createWindow\(\), registerMinecraftIpc\(\)

### Community 33 - "Main Java Manager"
Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 34 - "Main Minecraft Adapter — Bat"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): .init\(\), .parseRunBat\(\), .sendPlayerUpdate\(\), .start\(\)

### Community 35 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): RadminVpnAdapter, .constructor\(\), .getIp\(\)

### Community 36 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DashboardHub\(\), handleTunnel\(\), DayzModStatus\(\)

### Community 37 - "Main Dayz Adapter — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForLogFile\(\), checkFile\(\), .setupLogWatcher\(\)

### Community 38 - "Renderer Dayz Options Tab — Replace"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 39 - "Renderer List View Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 40 - "Renderer Motion Faqs Accordion"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 41 - "Renderer Motion Faqs Accordion — Accordion"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 42 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 43 - "Main Server Ipc"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): exists\(\), fetchDayzMission\(\), findFolder\(\)

### Community 44 - "Main Steam Cmd Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): registerSteamCMDIpc\(\)

### Community 45 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamWebAPI, .getModDependencies\(\)

### Community 46 - "Main System Ipc"
Cohesion (entity basis within full-graph community): 0
Nodes (2): exists\(\), registerSystemIpc\(\)

### Community 47 - "Renderer Use Minecraft Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 48 - "Renderer Use Stats Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 49 - "Main Dayz Adapter — Cleanup"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .cleanupLogWatcher\(\), .stop\(\)

### Community 50 - "Main Dayz Adapter — Init"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .init\(\), .start\(\)

### Community 51 - "Main Dayz Adapter — Line"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .parseLogLine\(\), .sendPlayerUpdate\(\)

### Community 52 - "Renderer Dayz Files Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): FileEntry

### Community 53 - "Renderer Dayz Installed Mods Tab — Handle \(2\)"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleInstallDependencies\(\), handleToggleModStatus\(\)

### Community 54 - "Renderer Dayz Mods Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzModsTabProps

### Community 55 - "Renderer Dayz Mods Tab — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleCategoryChange\(\), handleSearch\(\)

### Community 56 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 57 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 58 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 59 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 60 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 61 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 62 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 63 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 64 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 65 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 66 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 67 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **118 weakly connected node(s):** `calculateSize\(\)`, `.constructor\(\)`, `.getPlayerInventory\(\)`, `.updatePlayerStats\(\)`, `.constructor\(\)` (+113 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Main Dayz Adapter — Cleanup`** (2 nodes): `.cleanupLogWatcher\(\)`, `.stop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Adapter — Init`** (2 nodes): `.init\(\)`, `.start\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Adapter — Line`** (2 nodes): `.parseLogLine\(\)`, `.sendPlayerUpdate\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Files Tab — Dayz`** (2 nodes): `DayzFilesTab.tsx`, `FileEntry`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Installed Mods Tab — Handle \(2\)`** (2 nodes): `handleInstallDependencies\(\)`, `handleToggleModStatus\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Mods Tab — Dayz`** (2 nodes): `DayzModsTab.tsx`, `DayzModsTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Mods Tab — Handle`** (2 nodes): `handleCategoryChange\(\)`, `handleSearch\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preload Index D`** (2 nodes): `index.d.ts`, `Window`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Install`** (2 nodes): `.install\(\)`, `.sendLog\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Installed`** (2 nodes): `.isInstalled\(\)`, `.open\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Web API — Workshop`** (2 nodes): `.getWorkshopItemDetails\(\)`, `.searchWorkshop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Versions`** (2 nodes): `Versions.tsx`, `Versions\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Electron Vite Config TypeScript`** (1 nodes): `electron.vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Env D TypeScript`** (1 nodes): `env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main TSX`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Minecraft SVG`** (1 nodes): `minecraft.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Postcss Config Js`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config Js`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Wavy Lines SVG`** (1 nodes): `wavy-lines.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does \`DayzHub\(\)\` connect \`Renderer Dayz Hub\` to \`Renderer App — Cache\`, \`Renderer Use Dayz Mod Downloader\`, \`Renderer Dayz Options Tab\`, \`Renderer Dayz Economy Tab\`, \`Renderer Dayz Mods Tab\`, \`Renderer Dayz Installed Mods Tab\`, \`Renderer Dayz Files Tab\`, \`Renderer App\`?**
  _High betweenness centrality \(2481.291\) - this node is a cross-community bridge._
- **Why does \`DayzInstalledModsTab\(\)\` connect \`Renderer Dayz Installed Mods Tab\` to \`Renderer Dayz Hub\`, \`Renderer Use Dayz Mod Store\`, \`Renderer Dayz Installed Mods Tab — Handle\`, \`Renderer Dayz Installed Mods Tab — Handle \(2\)\`, \`Renderer Use Dayz Mod Downloader\`?**
  _High betweenness centrality \(1800.591\) - this node is a cross-community bridge._
- **Why does \`DayzAdapter\` connect \`Main Dayz Adapter\` to \`Main Dayz Adapter — Log\`, \`Main Dayz Adapter — Line\`, \`Main Dayz Adapter — Init\`, \`Main Dayz Adapter — Cleanup\`, \`Main Dayz Adapter — File\`, \`Main Db\`?**
  _High betweenness centrality \(1623.000\) - this node is a cross-community bridge._
- **What connects \`calculateSize\(\)\`, \`.constructor\(\)\`, \`.getPlayerInventory\(\)\` to the rest of the system?**
  _118 weakly-connected nodes found - possible documentation gaps or missing edges._
