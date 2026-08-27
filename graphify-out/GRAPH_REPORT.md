# Graph Report - D:\\github\\OmniHost  (2026-08-27)

## Corpus Check
- 110 files · ~71,705 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 419 nodes · 664 edges · 106 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 315 non-file, non-concept node(s)
- Weakly connected components: 83
- Singleton components: 41
- Isolated nodes: 41
- Largest component: 43 node(s) (14% of the entity graph basis)
- Low-cohesion communities: 1
- Largest low-cohesion community: 14 node(s) (cohesion 0.14)

## Workspace Bridges
1. `useDayzWorkshop\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Workshop — Handle`, `Renderer Use Dayz Workshop — Handle \(2\)`; home: `Renderer Use Dayz Workshop`; degree 12; score 2034.25
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzWorkshop.ts`
2. `MinecraftModManager` - connects `Main Minecraft Mod Manager — Curseforge`, `Main Minecraft Mod Manager — Search`; home: `Main Minecraft Mod Manager`; degree 9; score 1737
  source files: `D:/github/OmniHost/src/main/minecraft/MinecraftModManager.ts`
3. `MinecraftProcessManager` - connects `Main Minecraft Process Manager — Bat`, `Main Minecraft Process Manager — Send`; home: `Main Minecraft Process Manager`; degree 9; score 1731
  source files: `D:/github/OmniHost/src/main/minecraft/MinecraftProcessManager.ts`
4. `DayzLogParser` - connects `Main Dayz Log Parser — File`, `Main Dayz Log Parser — Log`; home: `Main Dayz Log Parser`; degree 7; score 1542.67
  source files: `D:/github/OmniHost/src/main/adapters/DayzLogParser.ts`
5. `useDayzMods\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Mods — Handle`; home: `Renderer Use Dayz Mods`; degree 9; score 1492.25
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzMods.ts`
6. `useDayzFiles\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Files — Handle`; home: `Renderer Use Dayz Files`; degree 8; score 1316.5
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts`

## God Nodes
1. `SteamCMDManager` - 15 edges
2. `useDayzWorkshop\(\)` - 14 edges
3. `MinecraftProcessManager` - 12 edges
4. `CacheManager` - 11 edges
5. `MinecraftModManager` - 11 edges
6. `useDayzMods\(\)` - 11 edges
7. `useDayzFiles\(\)` - 10 edges
8. `DayzLogParser` - 9 edges
9. `MinecraftDownloader` - 9 edges
10. `SteamCache` - 9 edges

## Surprising Connections
- `registerSystemIpc\(\)` --calls--> `getServers\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/main/ipc/SystemIpc.ts → D:/github/OmniHost/src/main/db.ts  _bridges separate communities; peripheral node \`registerSystemIpc\(\)\` unexpectedly reaches hub \`getServers\(\)\`_
- `DayzHubContent\(\)` --renders--> `DayzOptionsTab\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx → D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzOptionsTab.tsx  _bridges separate communities_
- `MinecraftHub\(\)` --renders--> `BackupsTab\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx → D:/github/OmniHost/src/renderer/src/components/tabs/BackupsTab.tsx  _bridges separate communities_
- `DayzFilesTab\(\)` --calls--> `useDayzFiles\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts  _bridges separate communities_
- `DayzInstalledModsTab\(\)` --calls--> `useDayzWorkshop\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzWorkshop.ts  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - MinecraftProcessManager bridges Main Minecraft Process Manager and Main Minecraft Config Manager, Main Minecraft Process Manager — Send, Main Minecraft Process Manager — Bat, Main Wake Proxy, Main Db.
  _High betweenness centrality \(1702.000\) across 6 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - useDayzWorkshop\(\) bridges Renderer Use Dayz Workshop and Renderer Use Dayz Workshop — Handle, Renderer Use Dayz Workshop — Handle \(2\), Renderer Dayz Hub Context.
  _High betweenness centrality \(1992.250\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - MinecraftModManager bridges Main Minecraft Mod Manager and Main Minecraft Ipc, Main Minecraft Mod Manager — Search, Main Minecraft Mod Manager — Curseforge.
  _High betweenness centrality \(1708.000\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - App\(\) → GameBackgrounds\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - App\(\) → TopNavbar\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Main Steam Workshop Downloader"
Cohesion (entity basis within full-graph community): 0.05
Nodes (7): DayzMissionManager, SteamCache, registerSteamCMDIpc\(\), SteamCMDSetup, SteamDownloader, SteamWorkshopDownloader, .sendInput\(\)

### Community 1 - "Renderer Dayz Hub Context"
Cohesion (entity basis within full-graph community): 0.16
Nodes (11): DayzFilesTab\(\), DayzHub\(\), DayzHubContent\(\), DayzHubContextType, DayzHubProvider\(\), handleTabChange\(\), useDayzHubContext\(\), DayzInstalledModsTab\(\) (+3 more)

### Community 2 - "Renderer Delete Confirmation Modal"
Cohesion (entity basis within full-graph community): 0.07
Nodes (8): DeleteConfirmationModal\(\), confirmDeleteServer\(\), SteamLoginModal\(\), handleUpdateSteamCache\(\), TunnelModal\(\), ModalStore, Toast, ToastStore

### Community 3 - "Main Steam Cmd Manager"
Cohesion (entity basis within full-graph community): 0.14
Nodes (14): SteamCMDManager, .copyFromCache\(\), .deleteCache\(\), .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .ensureInstalled\(\), .getCacheDir\(\), .getExePath\(\) (+6 more)

### Community 4 - "Renderer Top Navbar"
Cohesion (entity basis within full-graph community): 0.2
Nodes (6): GameBackgrounds\(\), formatBytes\(\), getGameThemeColor\(\), TopNavbar\(\), handleClearCache\(\), UiStore

### Community 5 - "Main Db"
Cohesion (entity basis within full-graph community): 0.24
Nodes (7): createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\), exists\(\), registerServerIpc\(\), getServerPath\(\)

### Community 6 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 7 - "Renderer Hub Router"
Cohesion (entity basis within full-graph community): 0
Nodes (2): getGameImageUrl\(\), isGameSupported\(\)

### Community 8 - "Renderer Use Dayz Workshop"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): useDayzWorkshop\(\), handleCheckDependencies\(\), handleDownloadMission\(\), handleExtractLocalMission\(\), handleRebuildLoadOrder\(\)

### Community 9 - "Main Dayz Mod Installer"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): DayzModInstaller, .importLocalWorkshop\(\), .installMod\(\), .installMods\(\), .selectWorkshopFolder\(\), .uninstallMod\(\), exists\(\)

### Community 10 - "Main Dayz Process Manager"
Cohesion (entity basis within full-graph community): 0.48
Nodes (7): DayzProcessManager, .constructor\(\), .sendCommand\(\), .sendLog\(\), .sendPlayerUpdate\(\), .start\(\), .stop\(\)

### Community 11 - "Main Minecraft Downloader"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): MinecraftDownloader, .getFabricVersions\(\), .getForgeVersions\(\), .getLoaderVersions\(\), .getNeoForgeVersions\(\), .getPaperVersions\(\), .getVanillaVersions\(\)

### Community 12 - "Renderer Use Dayz Mods"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): useDayzMods\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\), handleInstall\(\), handleUninstall\(\), loadInstalledMods\(\), stripBBCode\(\)

### Community 13 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): BackupsTab\(\), fetchBackups\(\), formatBytes\(\), handleCreate\(\), handleDelete\(\), handleRestore\(\)

### Community 14 - "Renderer Use Dayz Mod Store"
Cohesion (entity basis within full-graph community): 0
Nodes (3): DayzModsTabProps, DayzModStore, PendingDownload

### Community 15 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 16 - "Main Minecraft Mod Manager"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): MinecraftModManager, .deleteMod\(\), .getCurseforgeFile\(\), .getInstalledMods\(\), .installCurseforgeMod\(\), .installCurseforgeModpack\(\)

### Community 17 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 18 - "Renderer Use Minecraft Software"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): SoftwareTabProps, useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 19 - "Renderer Use Dayz Files"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useDayzFiles\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleNavigateUp\(\), handleSaveFile\(\)

### Community 20 - "Renderer Use Dayz Options"
Cohesion (entity basis within full-graph community): 0.5
Nodes (5): useDayzOptions\(\), loadConfig\(\), parseConfig\(\), extractNumber\(\), extractString\(\)

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

### Community 26 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\)

### Community 27 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftHub\(\), fetchServerMeta\(\), handleTabChange\(\), handleTunnel\(\), onRedirectToCreateModpack\(\)

### Community 28 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 29 - "Renderer Use Create Server Data"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useCreateServerData\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\)

### Community 30 - "Main Wake Proxy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 31 - "Renderer App"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): App\(\), checkCache\(\), HubRouter\(\), ModalsContainer\(\)

### Community 32 - "Renderer Use Log Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 33 - "Main Dayz Economy Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzEconomyManager, .getEconomy\(\), .updateEconomy\(\), .wipeLoot\(\)

### Community 34 - "Main Dayz Log Parser"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzLogParser, .cleanup\(\), .constructor\(\)

### Community 35 - "Main Dayz Mod Graph"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzModGraph, .resolveMods\(\)

### Community 36 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamWebAPI, .getModDependencies\(\)

### Community 37 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 38 - "Main Java Manager"
Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 39 - "Main Minecraft Config Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftConfigManager, .init\(\)

### Community 40 - "Main Minecraft Process Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): MinecraftProcessManager, .constructor\(\), .getActualPid\(\), .stop\(\)

### Community 41 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): RadminVpnAdapter, .constructor\(\), .getIp\(\)

### Community 42 - "Main Steam Auth"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SteamAuth, .getLoginArgs\(\), .isSteamGuardPrompt\(\)

### Community 43 - "Main Steam Cmd Setup"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 44 - "Renderer Use Dayz Economy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzEconomy\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\)

### Community 45 - "Renderer Use Dayz Workshop — Handle"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): handleToggleMap\(\), handleUninstall\(\), handleUninstallAll\(\), loadInstalledMods\(\)

### Community 46 - "Main Cache Manager — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 47 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DashboardHub\(\), DayzModStatus\(\)

### Community 48 - "Main Dayz Log Parser — Log"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .parseLogLine\(\), .readNewLogs\(\), .tailLogFile\(\)

### Community 49 - "Main Dayz Log Parser — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForLogFile\(\), checkFile\(\), .setupLogWatcher\(\)

### Community 50 - "Main Dayz Mod Status Manager"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzModStatusManager, .rebuildModDependencies\(\), .toggleModStatus\(\)

### Community 51 - "Main Dayz Mod Status Manager — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .getInstalledMods\(\), .toggleMapMod\(\), exists\(\)

### Community 52 - "Renderer List View Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 53 - "Main Minecraft Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): registerMinecraftIpc\(\)

### Community 54 - "Main Minecraft Process Manager — Bat"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .parseRunBat\(\), .sendPlayerUpdate\(\), .start\(\)

### Community 55 - "Main Minecraft Process Manager — Send"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .sendCommand\(\), .sendLog\(\), .updatePlayerStats\(\)

### Community 56 - "Renderer Mods Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ModsTabProps

### Community 57 - "Renderer Motion Faqs Accordion"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 58 - "Renderer Motion Faqs Accordion — Accordion"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 59 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 60 - "Main Steam Cache"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .deleteCache\(\), .getCacheDir\(\), .isCached\(\)

### Community 61 - "Main System Ipc"
Cohesion (entity basis within full-graph community): 0
Nodes (2): exists\(\), registerSystemIpc\(\)

### Community 62 - "Renderer Use Dayz Options — Replace"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 63 - "Renderer Use Dayz Workshop — Handle \(2\)"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleInstallDependencies\(\), handleToggleModStatus\(\), saveCredentials\(\)

### Community 64 - "Renderer Use Ipc Listeners"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useIpcListeners\(\), fetchServers\(\)

### Community 65 - "Renderer Use Minecraft Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 66 - "Renderer Use Server Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Server, ServerStore

### Community 67 - "Renderer Use Stats Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 68 - "Renderer Animated Background"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 69 - "Renderer Backups Tab — Backups"
Cohesion (entity basis within full-graph community): 1
Nodes (1): BackupsTabProps

### Community 70 - "Renderer Console Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ConsoleTabProps

### Community 71 - "Main Dayz Config Manager — Dayz"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 72 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 73 - "Renderer Dayz Economy Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzEconomyTab\(\), renderSlider\(\)

### Community 74 - "Main Dayz Mission Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .extractLocalMission\(\), exists\(\)

### Community 75 - "Main Dayz Mission Manager — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .fetchDayzMission\(\), findFolder\(\)

### Community 76 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 77 - "Main Minecraft Downloader — Download"
Cohesion (entity basis within full-graph community): 1
Nodes (2): exists\(\), .downloadServerJar\(\)

### Community 78 - "Main Minecraft Mod Manager — Curseforge"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getCurseforgeMod\(\), .getModpackDetails\(\)

### Community 79 - "Main Minecraft Mod Manager — Search"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .searchCurseforgeMods\(\), .searchModpacks\(\)

### Community 80 - "Renderer Overview Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OverviewTabProps

### Community 81 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 82 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 83 - "Refactor Minecraft"
Cohesion (entity basis within full-graph community): 1
Nodes (1): extract\(\)

### Community 84 - "Main Steam Cache — Cache"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .copyFromCache\(\), .sendLog\(\)

### Community 85 - "Main Steam Downloader"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .installApp\(\), .updateCache\(\)

### Community 86 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 87 - "Main Steam Workshop Downloader — Download"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .downloadWorkshopItem\(\), .downloadWorkshopItems\(\)

### Community 88 - "Renderer Use Dayz Files — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): FileEntry

### Community 89 - "Renderer Use Dayz Files — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleFileClick\(\), handleNavigate\(\)

### Community 90 - "Renderer Use Dayz Mods — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleCategoryChange\(\), handleSearch\(\)

### Community 91 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 92 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 93 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 94 - "Fix Steam Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 95 - "Icon Png"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 96 - "Create Window"
Cohesion (entity basis within full-graph community): 1
Nodes (1): createWindow\(\)

### Community 97 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 98 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 99 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 100 - "Refactor Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 101 - "Refactor Minecraft Ipc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 102 - "Refactor Serveripc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 103 - "Resolve Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 104 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 105 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **167 weakly connected node(s):** `calculateSize\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.getIp\(\)` (+162 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Renderer Animated Background`** (2 nodes): `AnimatedBackground.tsx`, `MinecraftHub.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Backups Tab — Backups`** (2 nodes): `BackupsTab.tsx`, `BackupsTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Console Tab`** (2 nodes): `ConsoleTab.tsx`, `ConsoleTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Config Manager — Dayz`** (2 nodes): `DayzConfigManager.ts`, `DayzEconomyManager.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab`** (2 nodes): `DayzEconomyTab.tsx`, `useDayzEconomy.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab — Dayz`** (2 nodes): `DayzEconomyTab\(\)`, `renderSlider\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager`** (2 nodes): `.extractLocalMission\(\)`, `exists\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager — Dayz`** (2 nodes): `.fetchDayzMission\(\)`, `findFolder\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preload Index D`** (2 nodes): `index.d.ts`, `Window`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Minecraft Downloader — Download`** (2 nodes): `exists\(\)`, `.downloadServerJar\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Minecraft Mod Manager — Curseforge`** (2 nodes): `.getCurseforgeMod\(\)`, `.getModpackDetails\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Minecraft Mod Manager — Search`** (2 nodes): `.searchCurseforgeMods\(\)`, `.searchModpacks\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Overview Tab`** (2 nodes): `OverviewTab.tsx`, `OverviewTabProps`
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
- **Thin community `Icon Png`** (1 nodes): `icon.png`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Create Window`** (1 nodes): `createWindow\(\)`
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
  _High betweenness centrality \(2444.000\) - this node is a cross-community bridge._
- **Why does \`useDayzWorkshop\(\)\` connect \`Renderer Use Dayz Workshop\` to \`Renderer Use Dayz Workshop — Handle\`, \`Renderer Use Dayz Workshop — Handle \(2\)\`, \`Renderer Dayz Hub Context\`?**
  _High betweenness centrality \(1992.250\) - this node is a cross-community bridge._
- **Why does \`MinecraftModManager\` connect \`Main Minecraft Mod Manager\` to \`Main Minecraft Ipc\`, \`Main Minecraft Mod Manager — Search\`, \`Main Minecraft Mod Manager — Curseforge\`?**
  _High betweenness centrality \(1708.000\) - this node is a cross-community bridge._
- **What connects \`calculateSize\(\)\`, \`.constructor\(\)\`, \`.constructor\(\)\` to the rest of the system?**
  _167 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should \`Main Steam Cmd Manager\` be split into smaller, more focused modules?**
  _Cohesion score 0.14 across 14 entity nodes - this community may mix unrelated responsibilities._
