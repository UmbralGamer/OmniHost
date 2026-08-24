# Graph Report - C:\\OmniHostWIPDAYZ\\OmniHost  (2026-08-24)

## Corpus Check
- 158 files · ~96,456 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 424 nodes · 523 edges · 169 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 278 non-file, non-concept node(s)
- Weakly connected components: 63
- Singleton components: 49
- Isolated nodes: 49
- Largest component: 134 node(s) (48% of the entity graph basis)
- Low-cohesion communities: 2
- Largest low-cohesion community: 19 node(s) (cohesion 0.11)

## Workspace Bridges
1. `App\(\)` - connects `Renderer App — Handle`, `Renderer Create Server Modal`, `Renderer Dayz Hub`, `Renderer Delete Confirmation Modal`, `Renderer Minecraft Hub`, `Renderer Steam Login Modal`, `Renderer Tunnel Modal`, `Scratch Dashboard Hub Fixed`; home: `Renderer App — Delete`; degree 19; score 3313.24
  source files: `C:/OmniHostWIPDAYZ/OmniHost/scratch/DashboardHub\_fixed.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/modals/DeleteConfirmationModal.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/modals/SteamLoginModal.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/modals/TunnelModal.tsx`
2. `DayzHub\(\)` - connects `Renderer App — Delete`, `Renderer Dayz Economy Tab`, `Renderer Dayz Files Tab`, `Renderer Dayz Hub — Add`, `Renderer Dayz Installed Mods Tab`, `Renderer Dayz Mods Tab`, `Renderer Dayz Options Tab`; home: `Renderer Dayz Hub`; degree 12; score 4899.55
  source files: `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModsTab.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx`
3. `DayzAdapter` - connects `Main Dayz Adapter — Cleanup`, `Main Dayz Adapter — File`, `Main Dayz Adapter — Init`, `Main Dayz Adapter — Line`, `Main Dayz Adapter — Log`; home: `Main Dayz Adapter`; degree 15; score 1688
  source files: `C:/OmniHostWIPDAYZ/OmniHost/src/main/adapters/DayzAdapter.ts`
4. `App\(\)` - connects `Renderer Backups Tab`, `Scratch Main App — Delete`, `Scratch Main App — Game`, `Scratch Main App — Handle`; home: `Scratch Main App`; degree 33; score 5129.38
  source files: `C:/OmniHostWIPDAYZ/OmniHost/scratch/main\_App.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/tabs/BackupsTab.tsx`
5. `MinecraftHub\(\)` - connects `Renderer App — Delete`, `Renderer Backups Tab`, `Renderer Minecraft Hub — Delete`, `Renderer Minecraft Hub — Install`; home: `Renderer Minecraft Hub`; degree 18; score 4598.28
  source files: `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/tabs/BackupsTab.tsx`
6. `DayzOptionsTab\(\)` - connects `Renderer Dayz Hub`, `Renderer Dayz Options Tab — Click`, `Renderer Dayz Options Tab — Dayz`, `Renderer Dayz Options Tab — Replace`; home: `Renderer Dayz Options Tab`; degree 6; score 1672.57
  source files: `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx`

## God Nodes
1. `App\(\)` - 34 edges
2. `App\(\)` - 21 edges
3. `MinecraftHub\(\)` - 20 edges
4. `DayzAdapter` - 17 edges
5. `SteamCMDManager` - 16 edges
6. `DayzHub\(\)` - 14 edges
7. `DayzInstalledModsTab\(\)` - 14 edges
8. `MinecraftAdapter` - 14 edges
9. `showToast\(\)` - 13 edges
10. `DayzFilesTab\(\)` - 11 edges

## Surprising Connections
- `App\(\)` --renders--> `DashboardHub\(\)`  [EXTRACTED]
  C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx → C:/OmniHostWIPDAYZ/OmniHost/scratch/DashboardHub\_fixed.tsx  _bridges separate communities; peripheral node \`DashboardHub\(\)\` unexpectedly reaches hub \`App\(\)\`_
- `App\(\)` --renders--> `BackupsTab\(\)`  [EXTRACTED]
  C:/OmniHostWIPDAYZ/OmniHost/scratch/main\_App.tsx → C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/tabs/BackupsTab.tsx  _bridges separate communities_
- `App\(\)` --renders--> `DayzHub\(\)`  [EXTRACTED]
  C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx → C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx  _bridges separate communities_
- `App\(\)` --renders--> `MinecraftHub\(\)`  [EXTRACTED]
  C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx → C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx  _bridges separate communities_
- `App\(\)` --renders--> `CreateServerModal\(\)`  [EXTRACTED]
  C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/App.tsx → C:/OmniHostWIPDAYZ/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - DayzHub\(\) bridges Renderer Dayz Hub and Renderer App — Delete, Renderer Dayz Hub — Dayz, Renderer Dayz Hub — Add, Renderer Dayz Options Tab, Renderer Dayz Economy Tab, Renderer Dayz Mods Tab, Renderer Dayz Installed Mods Tab, Renderer Dayz Files Tab, Renderer App.
  _High betweenness centrality \(4817.547\) across 10 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - App\(\) bridges Renderer App — Delete and Renderer App, Renderer App — Handle, Scratch Dashboard Hub Fixed, Renderer Dayz Hub, Renderer Minecraft Hub, Renderer Create Server Modal, Renderer Steam Login Modal, Renderer Delete Confirmation Modal, Renderer Tunnel Modal, Main TSX.
  _High betweenness centrality \(3214.236\) across 11 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - MinecraftHub\(\) bridges Renderer Minecraft Hub and Renderer App — Delete, Renderer App, Renderer Minecraft Hub — Delete, Renderer Minecraft Hub — Install, Renderer Backups Tab.
  _High betweenness centrality \(4540.275\) across 6 communities makes this node a likely dependency chokepoint._
- **[HIGH] Low-cohesion community** - Scratch Main App is weakly connected for its size.
  _Cohesion score 0.11 across 19 nodes suggests this community may mix unrelated responsibilities._
- **[HIGH] Cross-boundary edge** - App\(\) → BackupsTab\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Scratch Main App"
Cohesion (entity basis within full-graph community): 0.13
Nodes (16): App\(\), confirmDeleteServer\(\), fetchCacheSize\(\), fetchInitialData\(\), fetchInv\(\), fetchLoaderVersions\(\), fetchServerMeta\(\), fetchVersions\(\) (+8 more)

### Community 1 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.14
Nodes (14): MinecraftHub\(\), fetchInv\(\), fetchLoaderVersions\(\), fetchServerMeta\(\), fetchVersions\(\), handleAddPlayer\(\), handleClearLogs\(\), handleRemovePlayer\(\) (+6 more)

### Community 2 - "Scratch Main App — Handle"
Cohesion (entity basis within full-graph community): 0.17
Nodes (13): handleAddPlayer\(\), handleClearCache\(\), handleCreateServer\(\), handleInstallMod\(\), installWithDeps\(\), handleRemovePlayer\(\), handleRestart\(\), handleSaveConfig\(\) (+5 more)

### Community 3 - "Renderer Dayz Files Tab"
Cohesion (entity basis within full-graph community): 0.36
Nodes (9): DayzFilesTab\(\), fetchDir\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleFileClick\(\), handleNavigate\(\), handleNavigateUp\(\) (+1 more)

### Community 4 - "Renderer App"
Cohesion (entity basis within full-graph community): 0
Nodes (2): getGameImageUrl\(\), isGameSupported\(\)

### Community 5 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 6 - "Main Db"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\), registerServerIpc\(\), getServerPath\(\)

### Community 7 - "Main Minecraft Adapter"
Cohesion (entity basis within full-graph community): 0.36
Nodes (8): MinecraftAdapter, .constructor\(\), .getActualPid\(\), .getPlayerInventory\(\), .sendCommand\(\), .sendLog\(\), .stop\(\), .updatePlayerStats\(\)

### Community 8 - "Main Steam Cmd Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): SteamCMDManager, .copyFromCache\(\), .deleteCache\(\), .getCacheDir\(\), .installApp\(\), .isCached\(\), .sendInput\(\), .updateCache\(\)

### Community 9 - "Renderer App — Delete"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): App\(\), checkCache\(\), confirmDeleteServer\(\), fetchServers\(\), formatBytes\(\), handleDelete\(\), getGameThemeColor\(\)

### Community 10 - "Renderer Dayz Mods Tab"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): DayzModsTab\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\), handleInstall\(\), handleUninstall\(\), loadInstalledMods\(\), stripBBCode\(\)

### Community 11 - "Renderer App — Handle"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): handleClearCache\(\), handleRestart\(\), handleStart\(\), handleStop\(\), handleTunnel\(\), showToast\(\)

### Community 12 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): BackupsTab\(\), fetchBackups\(\), formatBytes\(\), handleCreate\(\), handleDelete\(\), handleRestore\(\)

### Community 13 - "Main Minecraft Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): exists\(\)

### Community 14 - "Renderer Create Server Modal"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 15 - "Renderer Dayz Installed Mods Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): DayzInstalledModsTab\(\), handleCheckDependencies\(\), handleDownloadMission\(\), handleExtractLocalMission\(\), handleRebuildLoadOrder\(\), openWorkshopPage\(\)

### Community 16 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 17 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 18 - "Main Steam Cmd Manager — Download"
Cohesion (entity basis within full-graph community): 0.67
Nodes (6): .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 19 - "Scratch Main App — Game"
Cohesion (entity basis within full-graph community): 0
Nodes (3): getGameImageUrl\(\), getGameThemeColor\(\), isGameSupported\(\)

### Community 20 - "Main Dayz Adapter"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzAdapter, .constructor\(\), .getPlayerInventory\(\), .updatePlayerStats\(\)

### Community 21 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzEconomyTab\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\), renderSlider\(\)

### Community 22 - "Renderer Dayz Hub"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzHub\(\), handleClearLogs\(\), handleSendCommand\(\), removePendingDownload\(\), updatePendingProgress\(\)

### Community 23 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (5): DayzOptionsTab\(\), loadConfig\(\), parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 24 - "Main Wake Proxy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 25 - "Main Dayz Adapter — Log"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): .readNewLogs\(\), .sendCommand\(\), .sendLog\(\), .tailLogFile\(\)

### Community 26 - "Renderer Dayz Installed Mods Tab — Handle"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): handleToggleMap\(\), handleUninstall\(\), handleUninstallAll\(\), loadInstalledMods\(\)

### Community 27 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 28 - "Main Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): createWindow\(\), registerMinecraftIpc\(\)

### Community 29 - "Main Java Manager"
Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 30 - "Main Minecraft Adapter — Bat"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): .init\(\), .parseRunBat\(\), .sendPlayerUpdate\(\), .start\(\)

### Community 31 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): RadminVpnAdapter, .constructor\(\), .getIp\(\)

### Community 32 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DashboardHub\(\), DayzModStatus\(\)

### Community 33 - "Main Dayz Adapter — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForLogFile\(\), checkFile\(\), .setupLogWatcher\(\)

### Community 34 - "Renderer Dayz Hub — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzHubProps

### Community 35 - "Renderer Dayz Files Tab — Dayz"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzFilesTabProps, FileEntry

### Community 36 - "Renderer Dayz Installed Mods Tab — Dayz"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PendingDownload, DayzInstalledModsTabProps

### Community 37 - "Renderer Dayz Options Tab — Dayz"
Cohesion (entity basis within full-graph community): 0
Nodes (2): CustomNumberInput\(\), DayzOptionsTabProps

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

### Community 42 - "Main Server Ipc"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): exists\(\), fetchDayzMission\(\), findFolder\(\)

### Community 43 - "Main Steam Cmd Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): registerSteamCMDIpc\(\)

### Community 44 - "Renderer Steam Login Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamLoginModal\(\), handleUpdateSteamCache\(\)

### Community 45 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamWebAPI, .getModDependencies\(\)

### Community 46 - "Main System Ipc"
Cohesion (entity basis within full-graph community): 0
Nodes (2): exists\(\), registerSystemIpc\(\)

### Community 47 - "Renderer Backups Tab — Backups"
Cohesion (entity basis within full-graph community): 1
Nodes (1): BackupsTabProps

### Community 48 - "Renderer Console Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ConsoleTabProps

### Community 49 - "Scratch Dashboard Hub Fixed"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DashboardHub\(\)

### Community 50 - "Scratch Dashboard Hub Perfect"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DashboardHub\(\)

### Community 51 - "Scratch Dashboard Hub Repaired"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DashboardHub\(\)

### Community 52 - "Scratch Dashboard Hub Repaired2"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DashboardHub\(\)

### Community 53 - "Main Dayz Adapter — Cleanup"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .cleanupLogWatcher\(\), .stop\(\)

### Community 54 - "Main Dayz Adapter — Init"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .init\(\), .start\(\)

### Community 55 - "Main Dayz Adapter — Line"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .parseLogLine\(\), .sendPlayerUpdate\(\)

### Community 56 - "Renderer Dayz Console Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzConsoleTabProps

### Community 57 - "Renderer Dayz Economy Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzEconomyTabProps

### Community 58 - "Renderer Dayz Hub — Add"
Cohesion (entity basis within full-graph community): 1
Nodes (2): addPendingDownload\(\), handleTabChange\(\)

### Community 59 - "Renderer Dayz Installed Mods Tab — Handle \(2\)"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleInstallDependencies\(\), handleToggleModStatus\(\)

### Community 60 - "Renderer Dayz Mods Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzModsTabProps

### Community 61 - "Renderer Dayz Mods Tab — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleCategoryChange\(\), handleSearch\(\)

### Community 62 - "Renderer Dayz Options Tab — Click"
Cohesion (entity basis within full-graph community): 1
Nodes (2): CustomSelect\(\), handleClickOutside\(\)

### Community 63 - "Renderer Delete Confirmation Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DeleteConfirmationModal\(\)

### Community 64 - "Scratch Fix App Animations"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 65 - "Scratch Fix Layout ID"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 66 - "Scratch Fix Layout Id2"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 67 - "Scratch Fix Regex"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 68 - "Scratch Fix Table"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 69 - "Scratch Fix Wrapper"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 70 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 71 - "Scratch Main App — Delete"
Cohesion (entity basis within full-graph community): 1
Nodes (2): fetchMods\(\), handleDeleteMod\(\)

### Community 72 - "Renderer Minecraft Hub — Delete"
Cohesion (entity basis within full-graph community): 1
Nodes (2): fetchMods\(\), handleDeleteMod\(\)

### Community 73 - "Renderer Minecraft Hub — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleInstallMod\(\), installWithDeps\(\)

### Community 74 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 75 - "Renderer Overview Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OverviewTabProps

### Community 76 - "Scratch Patch"
Cohesion (entity basis within full-graph community): 1
Nodes (1): scan\(\)

### Community 77 - "Scratch Perfect"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 78 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): PlayersTabProps

### Community 79 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 80 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 81 - "Refactor Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): generateImports\(\)

### Community 82 - "Scratch Repair"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 83 - "Scratch Repair2"
Cohesion (entity basis within full-graph community): 1
Nodes (1): main\(\)

### Community 84 - "Scratch Test"
Cohesion (entity basis within full-graph community): 1
Nodes (1): test\(\)

### Community 85 - "Scratch Test3"
Cohesion (entity basis within full-graph community): 1
Nodes (1): test\(\)

### Community 86 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 87 - "Test"
Cohesion (entity basis within full-graph community): 1
Nodes (1): getModDependencies\(\)

### Community 88 - "Test Logic"
Cohesion (entity basis within full-graph community): 1
Nodes (1): updatePlayerStats\(\)

### Community 89 - "Test Stalker2"
Cohesion (entity basis within full-graph community): 1
Nodes (1): getModDependencies\(\)

### Community 90 - "Renderer Tunnel Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (1): TunnelModal\(\)

### Community 91 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 92 - "Anim Port Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 93 - "App To Mc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 94 - "Check Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 95 - "Check Balance Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 96 - "Check Db Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 97 - "Check2 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 98 - "Clean Ast Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 99 - "Clean Imports Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 100 - "Clean Mc Hooks Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 101 - "Cleanup App Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 102 - "Cleanup Mc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 103 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 104 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 105 - "Extract Create Modal Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 106 - "Extract Dashboard Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 107 - "Extract Delete Modal Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 108 - "Extract Mc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 109 - "Extract Steam Modal Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 110 - "Extract Tunnel Modal Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 111 - "Final Mc Cleanup Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 112 - "Find Unbalanced Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 113 - "Fix Anim Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 114 - "Fix App Props Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 115 - "Fix App TSX Modal Py"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 116 - "Fix Dashboard Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 117 - "Fix Delete Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 118 - "Fix Escapes Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 119 - "Fix Import Py"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 120 - "Fix Ipc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 121 - "Fix JSX Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 122 - "Fix Logo Py"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 123 - "Fix Manual Start Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 124 - "Fix Mc Hub Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 125 - "Fix Modals Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 126 - "Fix Modpack Modal Py"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 127 - "Fix Preload Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 128 - "Fix TypeScript Errors Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 129 - "Inject Backend Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 130 - "Inject Files API Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 131 - "Inject Files UI Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 132 - "Inject Meta API Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 133 - "Inject Server ID Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 134 - "Inject Stats Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 135 - "Inject Wake Proxy Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 136 - "JSX TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 137 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 138 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 139 - "Move Create Logic Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 140 - "Move Steam Logic Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 141 - "Patch App Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 142 - "Patch Playerstab Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 143 - "Patch Ram Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 144 - "Patch Stats Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 145 - "Port Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 146 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 147 - "Refactor Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 148 - "Refactor All Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 149 - "Refactor Server Manager Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 150 - "Refactor Services Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 151 - "Remove Funcs Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 152 - "Restore Mc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 153 - "Scratch Test2 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 154 - "Scratch Test4 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 155 - "Scratch Test5 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 156 - "Scratch Test6 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 157 - "Scratch Test7 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 158 - "Scratch Test8 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 159 - "Screen Png"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 160 - "Splice Mc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 161 - "Splice Mc Fixed Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 162 - "Splice Mc Fixed2 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 163 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 164 - "Test Stalker Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 165 - "Test3 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 166 - "Test Watcher TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 167 - "Udp Test 2302 Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 168 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **147 weakly connected node(s):** `generateImports\(\)`, `DashboardHub\(\)`, `DashboardHub\(\)`, `DashboardHub\(\)`, `DashboardHub\(\)` (+142 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Renderer Backups Tab — Backups`** (2 nodes): `BackupsTab.tsx`, `BackupsTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Console Tab`** (2 nodes): `ConsoleTab.tsx`, `ConsoleTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Dashboard Hub Fixed`** (2 nodes): `DashboardHub\_fixed.tsx`, `DashboardHub\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Dashboard Hub Perfect`** (2 nodes): `DashboardHub\_perfect.tsx`, `DashboardHub\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Dashboard Hub Repaired`** (2 nodes): `DashboardHub\_repaired.tsx`, `DashboardHub\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Dashboard Hub Repaired2`** (2 nodes): `DashboardHub\_repaired2.tsx`, `DashboardHub\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Adapter — Cleanup`** (2 nodes): `.cleanupLogWatcher\(\)`, `.stop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Adapter — Init`** (2 nodes): `.init\(\)`, `.start\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Adapter — Line`** (2 nodes): `.parseLogLine\(\)`, `.sendPlayerUpdate\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Console Tab`** (2 nodes): `DayzConsoleTab.tsx`, `DayzConsoleTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab — Dayz`** (2 nodes): `DayzEconomyTab.tsx`, `DayzEconomyTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Hub — Add`** (2 nodes): `addPendingDownload\(\)`, `handleTabChange\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Installed Mods Tab — Handle \(2\)`** (2 nodes): `handleInstallDependencies\(\)`, `handleToggleModStatus\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Mods Tab — Dayz`** (2 nodes): `DayzModsTab.tsx`, `DayzModsTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Mods Tab — Handle`** (2 nodes): `handleCategoryChange\(\)`, `handleSearch\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Options Tab — Click`** (2 nodes): `CustomSelect\(\)`, `handleClickOutside\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Delete Confirmation Modal`** (2 nodes): `DeleteConfirmationModal.tsx`, `DeleteConfirmationModal\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Fix App Animations`** (2 nodes): `fix\_app\_animations.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Fix Layout ID`** (2 nodes): `fix\_layoutId.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Fix Layout Id2`** (2 nodes): `fix\_layoutId2.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Fix Regex`** (2 nodes): `fix\_regex.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Fix Table`** (2 nodes): `fix\_table.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Fix Wrapper`** (2 nodes): `fix\_wrapper.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preload Index D`** (2 nodes): `index.d.ts`, `Window`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Main App — Delete`** (2 nodes): `fetchMods\(\)`, `handleDeleteMod\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Minecraft Hub — Delete`** (2 nodes): `fetchMods\(\)`, `handleDeleteMod\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Minecraft Hub — Install`** (2 nodes): `handleInstallMod\(\)`, `installWithDeps\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Options Tab`** (2 nodes): `OptionsTab.tsx`, `OptionsTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Overview Tab`** (2 nodes): `OverviewTab.tsx`, `OverviewTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Patch`** (2 nodes): `patch.js`, `scan\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Perfect`** (2 nodes): `perfect.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Players Tab`** (2 nodes): `PlayersTab.tsx`, `PlayersTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Install`** (2 nodes): `.install\(\)`, `.sendLog\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Installed`** (2 nodes): `.isInstalled\(\)`, `.open\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Ipc`** (2 nodes): `refactor-ipc.js`, `generateImports\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Repair`** (2 nodes): `repair.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Repair2`** (2 nodes): `repair2.py`, `main\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test`** (2 nodes): `scratch\_test.js`, `test\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test3`** (2 nodes): `scratch\_test3.js`, `test\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Web API — Workshop`** (2 nodes): `.getWorkshopItemDetails\(\)`, `.searchWorkshop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test`** (2 nodes): `test.js`, `getModDependencies\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test Logic`** (2 nodes): `test-logic.js`, `updatePlayerStats\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test Stalker2`** (2 nodes): `test\_stalker2.js`, `getModDependencies\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Tunnel Modal`** (2 nodes): `TunnelModal.tsx`, `TunnelModal\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Versions`** (2 nodes): `Versions.tsx`, `Versions\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Anim Port Js`** (1 nodes): `anim\_port.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App To Mc Js`** (1 nodes): `app\_to\_mc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Check Js`** (1 nodes): `check.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Check Balance Js`** (1 nodes): `check\_balance.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Check Db Js`** (1 nodes): `check\_db.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Check2 Js`** (1 nodes): `check2.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Clean Ast Js`** (1 nodes): `clean\_ast.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Clean Imports Js`** (1 nodes): `clean-imports.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Clean Mc Hooks Js`** (1 nodes): `clean\_mc\_hooks.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Cleanup App Js`** (1 nodes): `cleanup\_app.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Cleanup Mc Js`** (1 nodes): `cleanup\_mc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Electron Vite Config TypeScript`** (1 nodes): `electron.vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Env D TypeScript`** (1 nodes): `env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Create Modal Js`** (1 nodes): `extract\_create\_modal.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Dashboard Js`** (1 nodes): `extract\_dashboard.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Delete Modal Js`** (1 nodes): `extract\_delete\_modal.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Mc Js`** (1 nodes): `extract\_mc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Steam Modal Js`** (1 nodes): `extract\_steam\_modal.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Tunnel Modal Js`** (1 nodes): `extract\_tunnel\_modal.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Final Mc Cleanup Js`** (1 nodes): `final\_mc\_cleanup.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Find Unbalanced Js`** (1 nodes): `find\_unbalanced.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Anim Js`** (1 nodes): `fix\_anim.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix App Props Js`** (1 nodes): `fix\_app\_props.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix App TSX Modal Py`** (1 nodes): `fix\_app\_tsx\_modal.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Dashboard Js`** (1 nodes): `fix\_dashboard.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Delete Js`** (1 nodes): `fix-delete.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Escapes Js`** (1 nodes): `fix\_escapes.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Import Py`** (1 nodes): `fix\_import.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Ipc Js`** (1 nodes): `fix-ipc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix JSX Js`** (1 nodes): `fix-jsx.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Logo Py`** (1 nodes): `fix\_logo.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Manual Start Js`** (1 nodes): `fix-manual-start.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Mc Hub Js`** (1 nodes): `fix\_mc\_hub.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Modals Js`** (1 nodes): `fix\_modals.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Modpack Modal Py`** (1 nodes): `fix\_modpack\_modal.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Preload Js`** (1 nodes): `fix-preload.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix TypeScript Errors Js`** (1 nodes): `fix-ts-errors.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Backend Js`** (1 nodes): `inject-backend.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Files API Js`** (1 nodes): `inject-files-api.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Files UI Js`** (1 nodes): `inject-files-ui.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Meta API Js`** (1 nodes): `inject-meta-api.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Server ID Js`** (1 nodes): `inject-server-id.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Stats Js`** (1 nodes): `inject-stats.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inject Wake Proxy Js`** (1 nodes): `inject-wake-proxy.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `JSX TSX`** (1 nodes): `jsx.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main TSX`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Minecraft SVG`** (1 nodes): `minecraft.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Move Create Logic Js`** (1 nodes): `move\_create\_logic.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Move Steam Logic Js`** (1 nodes): `move\_steam\_logic.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Patch App Js`** (1 nodes): `patch-app.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Patch Playerstab Js`** (1 nodes): `patch-playerstab.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Patch Ram Js`** (1 nodes): `patch-ram.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Patch Stats Js`** (1 nodes): `patch-stats.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Port Js`** (1 nodes): `port.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Postcss Config Js`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Js`** (1 nodes): `refactor.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor All Js`** (1 nodes): `refactor-all.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Server Manager Js`** (1 nodes): `refactor-server-manager.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Services Js`** (1 nodes): `refactor-services.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Remove Funcs Js`** (1 nodes): `remove\_funcs.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Restore Mc Js`** (1 nodes): `restore-mc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test2 Js`** (1 nodes): `scratch\_test2.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test4 Js`** (1 nodes): `scratch\_test4.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test5 Js`** (1 nodes): `scratch\_test5.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test6 Js`** (1 nodes): `scratch\_test6.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test7 Js`** (1 nodes): `scratch\_test7.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scratch Test8 Js`** (1 nodes): `scratch\_test8.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Screen Png`** (1 nodes): `screen.png`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Splice Mc Js`** (1 nodes): `splice\_mc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Splice Mc Fixed Js`** (1 nodes): `splice\_mc\_fixed.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Splice Mc Fixed2 Js`** (1 nodes): `splice\_mc\_fixed2.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config Js`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test Stalker Js`** (1 nodes): `test\_stalker.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test3 Js`** (1 nodes): `test3.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test Watcher TypeScript`** (1 nodes): `testWatcher.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Udp Test 2302 Js`** (1 nodes): `udp\_test\_2302.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Wavy Lines SVG`** (1 nodes): `wavy-lines.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does \`App\(\)\` connect \`Scratch Main App\` to \`Scratch Main App — Game\`, \`Scratch Main App — Delete\`, \`Scratch Main App — Handle\`, \`Renderer Backups Tab\`?**
  _High betweenness centrality \(5056.375\) - this node is a cross-community bridge._
- **Why does \`DayzHub\(\)\` connect \`Renderer Dayz Hub\` to \`Renderer App — Delete\`, \`Renderer Dayz Hub — Dayz\`, \`Renderer Dayz Hub — Add\`, \`Renderer Dayz Options Tab\`, \`Renderer Dayz Economy Tab\`, \`Renderer Dayz Mods Tab\`, \`Renderer Dayz Installed Mods Tab\`, \`Renderer Dayz Files Tab\`, \`Renderer App\`?**
  _High betweenness centrality \(4817.547\) - this node is a cross-community bridge._
- **Why does \`MinecraftHub\(\)\` connect \`Renderer Minecraft Hub\` to \`Renderer App — Delete\`, \`Renderer App\`, \`Renderer Minecraft Hub — Delete\`, \`Renderer Minecraft Hub — Install\`, \`Renderer Backups Tab\`?**
  _High betweenness centrality \(4540.275\) - this node is a cross-community bridge._
- **What connects \`generateImports\(\)\`, \`DashboardHub\(\)\`, \`DashboardHub\(\)\` to the rest of the system?**
  _147 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should \`Scratch Main App\` be split into smaller, more focused modules?**
  _Cohesion score 0.11 across 19 entity nodes - this community may mix unrelated responsibilities._
- **Should \`Renderer Minecraft Hub\` be split into smaller, more focused modules?**
  _Cohesion score 0.14 across 14 entity nodes - this community may mix unrelated responsibilities._
