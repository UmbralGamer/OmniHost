# Graph Report - D:\\github\\OmniHost (2026-08-26)

## Corpus Check

- 109 files · ~71,041 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary

- 410 nodes · 666 edges · 94 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals

- Entity graph basis: 307 non-file, non-concept node(s)
- Weakly connected components: 80
- Singleton components: 41
- Isolated nodes: 41
- Largest component: 57 node(s) (19% of the entity graph basis)
- Low-cohesion communities: 1
- Largest low-cohesion community: 14 node(s) (cohesion 0.14)

## Workspace Bridges

1. `useDayzWorkshop\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Workshop — Handle`, `Renderer Use Dayz Workshop — Handle \(2\)`; home: `Renderer Use Dayz Workshop`; degree 12; score 2034.25
   source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzWorkshop.ts`
2. `MinecraftProcessManager` - connects `Main Minecraft Process Manager — Bat`, `Main Minecraft Process Manager — Send`; home: `Main Minecraft Process Manager`; degree 9; score 1668
   source files: `D:/github/OmniHost/src/main/minecraft/MinecraftProcessManager.ts`
3. `useDayzMods\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Mods — Handle`; home: `Renderer Use Dayz Mods`; degree 9; score 1492.25
   source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzMods.ts`
4. `DayzLogParser` - connects `Main Dayz Log Parser — File`, `Main Dayz Log Parser — Log`; home: `Main Dayz Log Parser`; degree 7; score 1486.67
   source files: `D:/github/OmniHost/src/main/adapters/DayzLogParser.ts`
5. `useDayzFiles\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Files — Handle`; home: `Renderer Use Dayz Files`; degree 8; score 1316.5
   source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts`
6. `useDayzOptions\(\)` - connects `Renderer Use Dayz Options`, `Renderer Use Dayz Options — Replace`; home: `Renderer Dayz Options Tab`; degree 4; score 1303.75
   source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzOptions.ts`

## God Nodes

1. `SteamCMDManager` - 15 edges
2. `useDayzWorkshop\(\)` - 14 edges
3. `MinecraftProcessManager` - 12 edges
4. `MinecraftDownloader` - 11 edges
5. `useDayzMods\(\)` - 11 edges
6. `CacheManager` - 10 edges
7. `useDayzFiles\(\)` - 10 edges
8. `DayzHubContent\(\)` - 9 edges
9. `DayzLogParser` - 9 edges
10. `RadminVpnAdapter` - 9 edges

## Surprising Connections

- `DayzHubContent\(\)` --renders--> `DayzOptionsTab\(\)` [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx → D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx _bridges separate communities_
- `MinecraftHub\(\)` --renders--> `BackupsTab\(\)` [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx → D:/github/OmniHost/src/renderer/src/components/tabs/BackupsTab.tsx _bridges separate communities_
- `registerSystemIpc\(\)` --calls--> `getServers\(\)` [EXTRACTED]
  D:/github/OmniHost/src/main/ipc/SystemIpc.ts → D:/github/OmniHost/src/main/db.ts _bridges separate communities_
- `DayzEconomyTab\(\)` --calls--> `useDayzEconomy\(\)` [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzEconomy.ts _bridges separate communities_
- `DayzFilesTab\(\)` --calls--> `useDayzFiles\(\)` [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts _bridges separate communities_

## Semantic Anomalies

- **[HIGH] Bridge node** - MinecraftProcessManager bridges Main Minecraft Process Manager and Main Minecraft Config Manager, Main Minecraft Process Manager — Send, Main Minecraft Process Manager — Bat, Main Wake Proxy, Main Db.
  _High betweenness centrality \(1639.000\) across 6 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - useDayzWorkshop\(\) bridges Renderer Use Dayz Workshop and Renderer Use Dayz Workshop — Handle, Renderer Use Dayz Workshop — Handle \(2\), Renderer Dayz Hub Context.
  _High betweenness centrality \(1992.250\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - MinecraftDownloader bridges Main Minecraft Downloader and Main Cache Manager — TypeScript, Main Minecraft Downloader — Download, Main Minecraft Ipc.
  _High betweenness centrality \(1591.233\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - App\(\) → GameBackgrounds\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - App\(\) → TopNavbar\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Renderer Delete Confirmation Modal"

Cohesion (entity basis within full-graph community): 0.02
Nodes (15): BackupsTabProps, ConsoleTabProps, DeleteConfirmationModal\(\), confirmDeleteServer\(\), ModsTabProps, OverviewTabProps, SteamLoginModal\(\), handleUpdateSteamCache\(\) (+7 more)

### Community 1 - "Renderer Dayz Hub Context"

Cohesion (entity basis within full-graph community): 0.14
Nodes (13): DayzEconomyTab\(\), renderSlider\(\), DayzFilesTab\(\), DayzHub\(\), DayzHubContent\(\), DayzHubContextType, DayzHubProvider\(\), handleTabChange\(\) (+5 more)

### Community 2 - "Main Steam Workshop Downloader"

Cohesion (entity basis within full-graph community): 0.05
Nodes (7): DayzMissionManager, SteamCache, registerSteamCMDIpc\(\), SteamCMDSetup, SteamDownloader, SteamWorkshopDownloader, .sendInput\(\)

### Community 3 - "Main Steam Cmd Manager"

Cohesion (entity basis within full-graph community): 0.14
Nodes (14): SteamCMDManager, .copyFromCache\(\), .deleteCache\(\), .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .ensureInstalled\(\), .getCacheDir\(\), .getExePath\(\) (+6 more)

### Community 4 - "Main Db"

Cohesion (entity basis within full-graph community): 0.24
Nodes (7): createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\), exists\(\), registerServerIpc\(\), getServerPath\(\)

### Community 5 - "Main Minecraft Downloader"

Cohesion (entity basis within full-graph community): 0.22
Nodes (9): MinecraftDownloader, .getFabricVersions\(\), .getForgeVersions\(\), .getLoaderVersions\(\), .getModpackDetails\(\), .getNeoForgeVersions\(\), .getPaperVersions\(\), .getVanillaVersions\(\) (+1 more)

### Community 6 - "Renderer Top Navbar"

Cohesion (entity basis within full-graph community): 0.3
Nodes (5): GameBackgrounds\(\), formatBytes\(\), getGameThemeColor\(\), TopNavbar\(\), handleClearCache\(\)

### Community 7 - "Main Cache Manager"

Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 8 - "Renderer Hub Router"

Cohesion (entity basis within full-graph community): 0
Nodes (2): getGameImageUrl\(\), isGameSupported\(\)

### Community 9 - "Renderer Use Dayz Workshop"

Cohesion (entity basis within full-graph community): 0.4
Nodes (5): useDayzWorkshop\(\), handleCheckDependencies\(\), handleDownloadMission\(\), handleExtractLocalMission\(\), handleRebuildLoadOrder\(\)

### Community 10 - "Main Dayz Mod Installer"

Cohesion (entity basis within full-graph community): 0.43
Nodes (7): DayzModInstaller, .importLocalWorkshop\(\), .installMod\(\), .installMods\(\), .selectWorkshopFolder\(\), .uninstallMod\(\), exists\(\)

### Community 11 - "Renderer Dayz Options Tab"

Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\), useDayzOptions\(\)

### Community 12 - "Main Dayz Process Manager"

Cohesion (entity basis within full-graph community): 0.48
Nodes (7): DayzProcessManager, .constructor\(\), .sendCommand\(\), .sendLog\(\), .sendPlayerUpdate\(\), .start\(\), .stop\(\)

### Community 13 - "Renderer Use Dayz Mods"

Cohesion (entity basis within full-graph community): 0.43
Nodes (7): useDayzMods\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\), handleInstall\(\), handleUninstall\(\), loadInstalledMods\(\), stripBBCode\(\)

### Community 14 - "Renderer Backups Tab"

Cohesion (entity basis within full-graph community): 0.47
Nodes (6): BackupsTab\(\), fetchBackups\(\), formatBytes\(\), handleCreate\(\), handleDelete\(\), handleRestore\(\)

### Community 15 - "Renderer Use Dayz Economy"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzEconomy\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\)

### Community 16 - "Renderer Use Dayz Mod Store"

Cohesion (entity basis within full-graph community): 0
Nodes (3): DayzModsTabProps, DayzModStore, PendingDownload

### Community 17 - "Main Frp Adapter"

Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 18 - "Main Playit Adapter"

Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 19 - "Renderer Use Minecraft Software"

Cohesion (entity basis within full-graph community): 0.33
Nodes (4): SoftwareTabProps, useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 20 - "Renderer Use Dayz Files"

Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useDayzFiles\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleNavigateUp\(\), handleSaveFile\(\)

### Community 21 - "Renderer Use Minecraft Mods"

Cohesion (entity basis within full-graph community): 0.47
Nodes (6): useMinecraftMods\(\), fetchMods\(\), handleDeleteMod\(\), handleInstallMod\(\), installWithDeps\(\), handleSearchMods\(\)

### Community 22 - "Renderer Use Minecraft Players"

Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useMinecraftPlayers\(\), fetchInv\(\), handleAddPlayer\(\), handleRemovePlayer\(\), loadPlayers\(\), sendPlayerCommand\(\)

### Community 23 - "Renderer Create Server Modal"

Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 24 - "Main Dayz Adapter"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzAdapter, .constructor\(\), .start\(\), .stop\(\)

### Community 25 - "Main Dayz Config Manager"

Cohesion (entity basis within full-graph community): 0.6
Nodes (5): DayzConfigManager, .ensureDefaultConfig\(\), .exists\(\), .readConfig\(\), .writeConfig\(\)

### Community 26 - "Renderer Minecraft Hub"

Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftHub\(\), fetchServerMeta\(\), handleTabChange\(\), handleTunnel\(\), onRedirectToCreateModpack\(\)

### Community 27 - "Renderer Players Tab"

Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 28 - "Renderer Use Create Server Data"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useCreateServerData\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\)

### Community 29 - "Main Wake Proxy"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 30 - "Renderer App"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): App\(\), checkCache\(\), HubRouter\(\), ModalsContainer\(\)

### Community 31 - "Renderer Use Log Store"

Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 32 - "Main Dayz Economy Manager"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzEconomyManager, .getEconomy\(\), .updateEconomy\(\), .wipeLoot\(\)

### Community 33 - "Main Dayz Log Parser"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzLogParser, .cleanup\(\), .constructor\(\)

### Community 34 - "Main Dayz Mod Graph"

Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzModGraph, .resolveMods\(\)

### Community 35 - "Main Steam Web API"

Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamWebAPI, .getModDependencies\(\)

### Community 36 - "Renderer Files Tab"

Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 37 - "Main Java Manager"

Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 38 - "Main Minecraft Config Manager"

Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftConfigManager, .init\(\)

### Community 39 - "Main Minecraft Process Manager"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): MinecraftProcessManager, .constructor\(\), .getActualPid\(\), .stop\(\)

### Community 40 - "Main Radmin Vpn Adapter"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): RadminVpnAdapter, .constructor\(\), .getIp\(\)

### Community 41 - "Main Steam Auth"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SteamAuth, .getLoginArgs\(\), .isSteamGuardPrompt\(\)

### Community 42 - "Main Steam Cmd Setup"

Cohesion (entity basis within full-graph community): 0.67
Nodes (4): .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 43 - "Renderer Use Dayz Options"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): loadConfig\(\), parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 44 - "Renderer Use Dayz Workshop — Handle"

Cohesion (entity basis within full-graph community): 0.5
Nodes (4): handleToggleMap\(\), handleUninstall\(\), handleUninstallAll\(\), loadInstalledMods\(\)

### Community 45 - "Main Cache Manager — TypeScript"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 46 - "Main Dayz Log Parser — Log"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .parseLogLine\(\), .readNewLogs\(\), .tailLogFile\(\)

### Community 47 - "Main Dayz Log Parser — File"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForLogFile\(\), checkFile\(\), .setupLogWatcher\(\)

### Community 48 - "Main Dayz Mod Status Manager"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzModStatusManager, .rebuildModDependencies\(\), .toggleModStatus\(\)

### Community 49 - "Main Dayz Mod Status Manager — Exists"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .getInstalledMods\(\), .toggleMapMod\(\), exists\(\)

### Community 50 - "Main Icon"

Cohesion (entity basis within full-graph community): 1
Nodes (1): createWindow\(\)

### Community 51 - "Renderer List View Icon"

Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 52 - "Main Minecraft Process Manager — Bat"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .parseRunBat\(\), .sendPlayerUpdate\(\), .start\(\)

### Community 53 - "Main Minecraft Process Manager — Send"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .sendCommand\(\), .sendLog\(\), .updatePlayerStats\(\)

### Community 54 - "Renderer Motion Faqs Accordion"

Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 55 - "Renderer Motion Faqs Accordion — Accordion"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 56 - "Renderer Options Tab"

Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 57 - "Main Steam Cache"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .deleteCache\(\), .getCacheDir\(\), .isCached\(\)

### Community 58 - "Main System Ipc"

Cohesion (entity basis within full-graph community): 0
Nodes (2): exists\(\), registerSystemIpc\(\)

### Community 59 - "Renderer Use Dayz Options — Replace"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 60 - "Renderer Use Dayz Workshop — Handle \(2\)"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleInstallDependencies\(\), handleToggleModStatus\(\), saveCredentials\(\)

### Community 61 - "Renderer Use Ipc Listeners"

Cohesion (entity basis within full-graph community): 1
Nodes (2): useIpcListeners\(\), fetchServers\(\)

### Community 62 - "Renderer Use Minecraft Config"

Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 63 - "Renderer Use Stats Store"

Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 64 - "Renderer Dashboard Hub"

Cohesion (entity basis within full-graph community): 1
Nodes (2): DashboardHub\(\), DayzModStatus\(\)

### Community 65 - "Main Dayz Config Manager — Dayz"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 66 - "Main Dayz Mission Manager"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .extractLocalMission\(\), exists\(\)

### Community 67 - "Main Dayz Mission Manager — Dayz"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .fetchDayzMission\(\), findFolder\(\)

### Community 68 - "Preload Index D"

Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 69 - "Main Minecraft Downloader — Download"

Cohesion (entity basis within full-graph community): 1
Nodes (2): exists\(\), .downloadServerJar\(\)

### Community 70 - "Main Minecraft Ipc"

Cohesion (entity basis within full-graph community): 1
Nodes (1): registerMinecraftIpc\(\)

### Community 71 - "Main Radmin Vpn Adapter — Install"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 72 - "Main Radmin Vpn Adapter — Installed"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 73 - "Refactor Minecraft"

Cohesion (entity basis within full-graph community): 1
Nodes (1): extract\(\)

### Community 74 - "Main Steam Cache — Cache"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .copyFromCache\(\), .sendLog\(\)

### Community 75 - "Main Steam Downloader"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .installApp\(\), .updateCache\(\)

### Community 76 - "Main Steam Web API — Workshop"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 77 - "Main Steam Workshop Downloader — Download"

Cohesion (entity basis within full-graph community): 1
Nodes (2): .downloadWorkshopItem\(\), .downloadWorkshopItems\(\)

### Community 78 - "Renderer Use Dayz Files — Dayz"

Cohesion (entity basis within full-graph community): 1
Nodes (1): FileEntry

### Community 79 - "Renderer Use Dayz Files — Handle"

Cohesion (entity basis within full-graph community): 1
Nodes (2): handleFileClick\(\), handleNavigate\(\)

### Community 80 - "Renderer Use Dayz Mods — Handle"

Cohesion (entity basis within full-graph community): 1
Nodes (2): handleCategoryChange\(\), handleSearch\(\)

### Community 81 - "Renderer Versions"

Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 82 - "Electron Vite Config TypeScript"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 83 - "Env D TypeScript"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 84 - "Fix Steam Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 85 - "Main TSX"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 86 - "Minecraft SVG"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 87 - "Postcss Config Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 88 - "Refactor Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 89 - "Refactor Minecraft Ipc Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 90 - "Refactor Serveripc Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 91 - "Resolve Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 92 - "Tailwind Config Js"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

### Community 93 - "Wavy Lines SVG"

Cohesion (entity basis within full-graph community): n/a
Nodes (0):

## Knowledge Gaps

- **164 weakly connected node(s):** `calculateSize\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.getIp\(\)` (+159 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Renderer Dashboard Hub`** (2 nodes): `DashboardHub\(\)`, `DayzModStatus\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Config Manager — Dayz`** (2 nodes): `DayzConfigManager.ts`, `DayzEconomyManager.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager`** (2 nodes): `.extractLocalMission\(\)`, `exists\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager — Dayz`** (2 nodes): `.fetchDayzMission\(\)`, `findFolder\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preload Index D`** (2 nodes): `index.d.ts`, `Window`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Minecraft Downloader — Download`** (2 nodes): `exists\(\)`, `.downloadServerJar\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Minecraft Ipc`** (2 nodes): `MinecraftIpc.ts`, `registerMinecraftIpc\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Install`** (2 nodes): `.install\(\)`, `.sendLog\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Installed`** (2 nodes): `.isInstalled\(\)`, `.open\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Minecraft`** (2 nodes): `refactor\_minecraft.js`, `extract\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Cache — Cache`** (2 nodes): `.copyFromCache\(\)`, `.sendLog\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Downloader`** (2 nodes): `.installApp\(\)`, `.updateCache\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Web API — Workshop`** (2 nodes): `.getWorkshopItemDetails\(\)`, `.searchWorkshop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Workshop Downloader — Download`** (2 nodes): `.downloadWorkshopItem\(\)`, `.downloadWorkshopItems\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Files — Dayz`** (2 nodes): `useDayzFiles.ts`, `FileEntry`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Files — Handle`** (2 nodes): `handleFileClick\(\)`, `handleNavigate\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mods — Handle`** (2 nodes): `handleCategoryChange\(\)`, `handleSearch\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Versions`** (2 nodes): `Versions.tsx`, `Versions\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Electron Vite Config TypeScript`** (1 nodes): `electron.vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Env D TypeScript`** (1 nodes): `env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fix Steam Js`** (1 nodes): `fix\_steam.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main TSX`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Minecraft SVG`** (1 nodes): `minecraft.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Postcss Config Js`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Js`** (1 nodes): `refactor.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Minecraft Ipc Js`** (1 nodes): `refactor\_minecraft\_ipc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Serveripc Js`** (1 nodes): `refactor\_serveripc.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Resolve Js`** (1 nodes): `resolve.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config Js`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Wavy Lines SVG`** (1 nodes): `wavy-lines.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does \`SteamCMDManager\` connect \`Main Steam Cmd Manager\` to \`Main Steam Workshop Downloader\`?**
  _High betweenness centrality \(2353.000\) - this node is a cross-community bridge._
- **Why does \`useDayzWorkshop\(\)\` connect \`Renderer Use Dayz Workshop\` to \`Renderer Use Dayz Workshop — Handle\`, \`Renderer Use Dayz Workshop — Handle \(2\)\`, \`Renderer Dayz Hub Context\`?**
  _High betweenness centrality \(1992.250\) - this node is a cross-community bridge._
- **Why does \`MinecraftProcessManager\` connect \`Main Minecraft Process Manager\` to \`Main Minecraft Config Manager\`, \`Main Minecraft Process Manager — Send\`, \`Main Minecraft Process Manager — Bat\`, \`Main Wake Proxy\`, \`Main Db\`?**
  _High betweenness centrality \(1639.000\) - this node is a cross-community bridge._
- **What connects \`calculateSize\(\)\`, \`.constructor\(\)\`, \`.constructor\(\)\` to the rest of the system?**
  _164 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should \`Main Steam Cmd Manager\` be split into smaller, more focused modules?**
  _Cohesion score 0.14 across 14 entity nodes - this community may mix unrelated responsibilities._
