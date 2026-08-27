# Graph Report - D:\\github\\OmniHost  (2026-08-27)

## Corpus Check
- 135 files · ~80,820 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 484 nodes · 731 edges · 125 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 355 non-file, non-concept node(s)
- Weakly connected components: 105
- Singleton components: 54
- Isolated nodes: 54
- Largest component: 36 node(s) (10% of the entity graph basis)
- Low-cohesion communities: 0
- Largest low-cohesion community: none on the entity graph basis

## Workspace Bridges
1. `DayzInstalledModsTab\(\)` - connects `Renderer Use Dayz Installed Mods`, `Renderer Use Dayz Missions`, `Renderer Use Dayz Mod Dependencies`, `Renderer Use Dayz Mod Operations`; home: `Renderer Dayz Installed Mods Tab`; degree 6; score 3864.71
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModModals.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzMissions.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModDependencies.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModOperations.ts`
2. `useDayzFiles\(\)` - connects `Renderer Dayz Files Tab`, `Renderer Use Dayz Files — Handle`; home: `Renderer Use Dayz Files`; degree 8; score 3143
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts`
3. `FileTailer` - connects `Main File Tailer — File`, `Main File Tailer — File \(2\)`; home: `Main File Tailer`; degree 6; score 3134.5
  source files: `D:/github/OmniHost/src/main/utils/FileTailer.ts`
4. `DayzVppAdminTab\(\)` - connects `Renderer Dayz Hub Context`, `Renderer Use Dayz Installed Mods`; home: `Renderer Dayz Vpp Admin Tab`; degree 8; score 2774.15
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzVppAdminTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`
5. `RadminVpnAdapter` - connects `Main Radmin Vpn Adapter — Install`, `Main Radmin Vpn Adapter — Installed`; home: `Main Radmin Vpn Adapter`; degree 6; score 2695
  source files: `D:/github/OmniHost/src/main/adapters/RadminVpnAdapter.ts`
6. `CurseForgeApiClient` - connects `Main Curse Forge API Client — Curseforge`, `Main Curse Forge API Client — Search`; home: `Main Curse Forge API Client`; degree 5; score 2253
  source files: `D:/github/OmniHost/src/main/minecraft/CurseForgeApiClient.ts`

## God Nodes
1. `useDayzModOperations\(\)` - 11 edges
2. `DayzVppAdminTab\(\)` - 10 edges
3. `useDayzFiles\(\)` - 10 edges
4. `MinecraftDownloader` - 9 edges
5. `MinecraftPlayerManager` - 9 edges
6. `RadminVpnAdapter` - 9 edges
7. `CacheManager` - 8 edges
8. `CreateServerModal\(\)` - 8 edges
9. `DayzInstalledModsTab\(\)` - 8 edges
10. `ErrorBoundary` - 8 edges

## Surprising Connections
- `DayzFilesTab\(\)` --calls--> `useDayzFiles\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts  _bridges separate communities_
- `DayzEconomyTab\(\)` --calls--> `useDayzEconomy\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzEconomy.ts  _bridges separate communities_
- `DashboardHub\(\)` --renders--> `CreateServerModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx → D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx  _bridges separate communities_
- `MinecraftHub\(\)` --renders--> `TunnelModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/MinecraftHub/MinecraftHub.tsx → D:/github/OmniHost/src/renderer/src/components/modals/TunnelModal.tsx  _bridges separate communities_
- `DashboardHub\(\)` --calls--> `useSteamLoginModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx → D:/github/OmniHost/src/renderer/src/hooks/useSteamLoginModal.tsx  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - ErrorBoundary bridges Renderer Error Boundary and Renderer Error Boundary — Boundary, Renderer Hub Router, Main TSX.
  _High betweenness centrality \(8945.150\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - DayzInstalledModsTab\(\) bridges Renderer Dayz Installed Mods Tab and Renderer Use Dayz Installed Mods, Renderer Use Dayz Missions, Renderer Use Dayz Mod Dependencies, Renderer Use Dayz Mod Operations, Renderer Dayz Hub Context.
  _High betweenness centrality \(3818.715\) across 6 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - useDayzFiles\(\) bridges Renderer Use Dayz Files and Renderer Use Dayz Files — Dayz, Renderer Use Dayz Files — Handle, Renderer Dayz Files Tab.
  _High betweenness centrality \(3115.000\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - CreateServerModal\(\) → useSteamLoginModal\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - DashboardHub\(\) → CreateServerModal\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.07
Nodes (8): createWindow\(\), initializeLogger\(\), registerLogIpc\(\), RadminVpnAdapter, .constructor\(\), .getIp\(\), exists\(\), registerSystemIpc\(\)

### Community 1 - "Renderer Dayz Hub Context"
Cohesion (entity basis within full-graph community): 0.24
Nodes (7): DayzHub\(\), DayzHubContent\(\), DayzHubContextType, DayzHubProvider\(\), handleTabChange\(\), useDayzHubContext\(\), useDayzModDownloader\(\)

### Community 2 - "Main Steam Cache"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): SteamCache, .copyFromCache\(\), .deleteCache\(\), .getCacheDir\(\), .isCached\(\), .sendLog\(\), registerSteamCMDIpc\(\)

### Community 3 - "Renderer App"
Cohesion (entity basis within full-graph community): 0.27
Nodes (6): App\(\), checkCache\(\), MainLayout\(\), MainLayoutProps, useIpcListeners\(\), fetchServers\(\)

### Community 4 - "Renderer Use Dayz Mod Operations"
Cohesion (entity basis within full-graph community): 0.22
Nodes (9): useDayzModOperations\(\), executeRebuildLoadOrder\(\), executeUninstall\(\), executeUninstallAll\(\), handleRebuildLoadOrder\(\), handleToggleMap\(\), handleToggleModStatus\(\), handleUninstall\(\) (+1 more)

### Community 5 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 6 - "Renderer Dayz Mods Tab"
Cohesion (entity basis within full-graph community): 0.27
Nodes (6): DayzModsTab\(\), handleClickOutside\(\), DayzModsTabProps, useDayzModInstallation\(\), handleInstall\(\), handleUninstall\(\)

### Community 7 - "Main Minecraft Player Manager"
Cohesion (entity basis within full-graph community): 0.39
Nodes (8): MinecraftPlayerManager, .clearOnlinePlayers\(\), .constructor\(\), .getOnlinePlayers\(\), .handlePlayerJoin\(\), .handlePlayerLeave\(\), .handleServerStop\(\), .sendPlayerUpdate\(\)

### Community 8 - "Renderer Hub Router"
Cohesion (entity basis within full-graph community): 0
Nodes (2): getGameImageUrl\(\), isGameSupported\(\)

### Community 9 - "Main Dayz Adapter"
Cohesion (entity basis within full-graph community): 0.3
Nodes (5): DayzAdapter, .constructor\(\), .start\(\), .stop\(\), exists\(\)

### Community 10 - "Main Dayz Process Manager"
Cohesion (entity basis within full-graph community): 0.48
Nodes (7): DayzProcessManager, .constructor\(\), .sendCommand\(\), .sendLog\(\), .sendPlayerUpdate\(\), .start\(\), .stop\(\)

### Community 11 - "Renderer Dayz Vpp Admin Tab"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): DayzVppAdminTab\(\), handleAddAdmin\(\), handleClearCredential\(\), handleRemoveAdmin\(\), handleSetCredential\(\), handleToggleDisablePassword\(\), loadVppData\(\)

### Community 12 - "Main Minecraft Downloader"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): MinecraftDownloader, .getFabricVersions\(\), .getForgeVersions\(\), .getLoaderVersions\(\), .getNeoForgeVersions\(\), .getPaperVersions\(\), .getVanillaVersions\(\)

### Community 13 - "Renderer Use Dayz Mod Import"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): useDayzModImport\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\), useDayzMods\(\), loadInstalledMods\(\)

### Community 14 - "Renderer Tunnel Modal"
Cohesion (entity basis within full-graph community): 0
Nodes (2): TunnelModal\(\), UiStore

### Community 15 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): BackupsTab\(\), fetchBackups\(\), formatBytes\(\), handleCreate\(\), handleDelete\(\), handleRestore\(\)

### Community 16 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DashboardHub\(\), DayzModStatus\(\), DeleteConfirmationModal\(\), confirmDeleteServer\(\)

### Community 17 - "Renderer Dayz Installed Mods Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): DayzInstalledModsTab\(\), openWorkshopPage\(\), DayzModModals\(\), DayzModModalsProps

### Community 18 - "Main Dayz Mission Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (5): DayzMissionManager, .extractLocalMission\(\), .fetchDayzMission\(\), findFolder\(\), exists\(\)

### Community 19 - "Renderer Error Boundary"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): Component, ErrorBoundary, .componentDidCatch\(\), .getDerivedStateFromError\(\), .handleReset\(\), .render\(\)

### Community 20 - "Main Minecraft Mod Manager"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftModManager, .deleteMod\(\), .getInstalledMods\(\), .installCurseforgeMod\(\), .installCurseforgeModpack\(\)

### Community 21 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 22 - "Renderer Use Minecraft Software"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): SoftwareTabProps, useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 23 - "Renderer Use Dayz Files"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useDayzFiles\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleNavigateUp\(\), handleSaveFile\(\)

### Community 24 - "Renderer Use Dayz Options"
Cohesion (entity basis within full-graph community): 0.5
Nodes (5): useDayzOptions\(\), loadConfig\(\), parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 25 - "Renderer Use Minecraft Mods"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): useMinecraftMods\(\), fetchMods\(\), handleDeleteMod\(\), handleInstallMod\(\), installWithDeps\(\), handleSearchMods\(\)

### Community 26 - "Renderer Use Minecraft Players"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useMinecraftPlayers\(\), fetchInv\(\), handleAddPlayer\(\), handleRemovePlayer\(\), loadPlayers\(\), sendPlayerCommand\(\)

### Community 27 - "Renderer Create Server Modal"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 28 - "Main Curse Forge API Client"
Cohesion (entity basis within full-graph community): 0.33
Nodes (3): CurseForgeApiClient, .getCurseforgeFile\(\), registerMinecraftIpc\(\)

### Community 29 - "Main Dayz Config Manager"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): DayzConfigManager, .ensureDefaultConfig\(\), .exists\(\), .readConfig\(\), .writeConfig\(\)

### Community 30 - "Main Dayz Log Parser"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzLogParser, .cleanup\(\), .constructor\(\), .parseLogLine\(\), .setupLogWatcher\(\)

### Community 31 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\)

### Community 32 - "Main Db"
Cohesion (entity basis within full-graph community): 0
Nodes (4): createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\)

### Community 33 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 34 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftHub\(\), fetchServerMeta\(\), handleTabChange\(\), handleTunnel\(\), onRedirectToCreateModpack\(\)

### Community 35 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 36 - "Main Steam Cmd Setup"
Cohesion (entity basis within full-graph community): 0.8
Nodes (5): SteamCMDSetup, .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 37 - "Renderer Top Navbar"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): formatBytes\(\), getGameThemeColor\(\), TopNavbar\(\), handleClearCache\(\)

### Community 38 - "Renderer Use Create Server Data"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useCreateServerData\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\)

### Community 39 - "Main Wake Proxy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 40 - "Renderer Use Steam Login Modal"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useSteamLoginModal\(\), closeModal\(\), openModal\(\)

### Community 41 - "Renderer Use Log Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 42 - "Main Dayz Economy Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzEconomyManager, .getEconomy\(\), .updateEconomy\(\), .wipeLoot\(\)

### Community 43 - "Main Dayz Mod Graph"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzModGraph, .resolveMods\(\)

### Community 44 - "Main Dayz Mod Installer"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzModInstaller, .installMod\(\), .selectWorkshopFolder\(\), .uninstallMod\(\)

### Community 45 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamWebAPI, .getModDependencies\(\)

### Community 46 - "Renderer Use Dayz Installed Mods"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzInstalledMods\(\), loadInstalledMods\(\)

### Community 47 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 48 - "Main Java Manager"
Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 49 - "Main Minecraft Config Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftConfigManager, .init\(\)

### Community 50 - "Main Minecraft Stats Service"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftStatsService, .updatePlayerStats\(\)

### Community 51 - "Main Minecraft Process Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): MinecraftProcessManager, .constructor\(\), .getActualPid\(\), .stop\(\)

### Community 52 - "Renderer Settings Modal"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SettingsModal\(\), copyToClipboard\(\), loadLogs\(\)

### Community 53 - "Main Steam Auth"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SteamAuth, .getLoginArgs\(\), .isSteamGuardPrompt\(\)

### Community 54 - "Renderer Steam Login Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamLoginModal\(\), handleUpdateSteamCache\(\)

### Community 55 - "Main Steam Workshop Downloader"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): SteamWorkshopDownloader, .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .sendInput\(\)

### Community 56 - "Renderer Use Dayz Economy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzEconomy\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\)

### Community 57 - "Renderer Use Dayz Missions"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzMissions\(\), handleDownloadMission\(\), handleExtractLocalMission\(\)

### Community 58 - "Renderer Use Dayz Mod Search"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): useDayzModSearch\(\), handleCategoryChange\(\), handleSearch\(\), stripBBCode\(\)

### Community 59 - "Main Cache Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): registerCacheIpc\(\)

### Community 60 - "Main Dayz Log Parser — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 61 - "Main Dayz Mod Installer — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 62 - "Main Dayz Mod Installer — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .importLocalWorkshop\(\), .installMods\(\), exists\(\)

### Community 63 - "Main Dayz Mod Status Manager"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzModStatusManager, .rebuildModDependencies\(\), .toggleModStatus\(\)

### Community 64 - "Main Dayz Mod Status Manager — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .getInstalledMods\(\), .toggleMapMod\(\), exists\(\)

### Community 65 - "Renderer Error Boundary — Boundary"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Props, State

### Community 66 - "Main File Tailer"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): FileTailer, .constructor\(\), .stop\(\)

### Community 67 - "Main File Tailer — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForFile\(\), checkFile\(\), .start\(\)

### Community 68 - "Main Java Manager — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 69 - "Renderer List View Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 70 - "Main Minecraft Command Builder"
Cohesion (entity basis within full-graph community): 1
Nodes (3): MinecraftCommandBuilder, .buildCommand\(\), .parseRunBat\(\)

### Community 71 - "Main Minecraft Downloader — Download"
Cohesion (entity basis within full-graph community): 1
Nodes (2): exists\(\), .downloadServerJar\(\)

### Community 72 - "Main Minecraft Process Manager — Send"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .sendCommand\(\), .sendLog\(\), .start\(\)

### Community 73 - "Renderer Mods Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ModsTabProps

### Community 74 - "Renderer Motion Faqs Accordion"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 75 - "Renderer Motion Faqs Accordion — Accordion"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 76 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 77 - "Renderer Setup Tests"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 78 - "Main Steam Downloader"
Cohesion (entity basis within full-graph community): 1
Nodes (3): SteamDownloader, .installApp\(\), .updateCache\(\)

### Community 79 - "Renderer Use Dayz Mod Dependencies"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzModDependencies\(\), handleCheckDependencies\(\)

### Community 80 - "Renderer Use Dayz Mod Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzModStore, PendingDownload

### Community 81 - "Renderer Use Dayz Options — Replace"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 82 - "Renderer Use Minecraft Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 83 - "Renderer Use Server Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Server, ServerStore

### Community 84 - "Renderer Use Stats Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 85 - "Renderer Use Toast Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Toast, ToastStore

### Community 86 - "Renderer Backups Tab — Backups"
Cohesion (entity basis within full-graph community): 1
Nodes (1): BackupsTabProps

### Community 87 - "Renderer Console Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ConsoleTabProps

### Community 88 - "Main Curse Forge API Client — Curseforge"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getCurseforgeMod\(\), .getModpackDetails\(\)

### Community 89 - "Main Curse Forge API Client — Search"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .searchCurseforgeMods\(\), .searchModpacks\(\)

### Community 90 - "Main Dayz Config Manager — Dayz"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 91 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 92 - "Renderer Dayz Economy Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzEconomyTab\(\), renderSlider\(\)

### Community 93 - "Renderer Dayz Files Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzFilesTab\(\)

### Community 94 - "Main File Tailer — File \(2\)"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .readNewLogs\(\), .tailLogFile\(\)

### Community 95 - "Renderer Game Backgrounds"
Cohesion (entity basis within full-graph community): 1
Nodes (1): GameBackgrounds\(\)

### Community 96 - "Renderer Hub Router — Hub"
Cohesion (entity basis within full-graph community): 1
Nodes (2): HubLoader\(\), HubRouter\(\)

### Community 97 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 98 - "Renderer Overview Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OverviewTabProps

### Community 99 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 100 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 101 - "Refactor Minecraft"
Cohesion (entity basis within full-graph community): 1
Nodes (1): extract\(\)

### Community 102 - "Renderer Renderer Logger"
Cohesion (entity basis within full-graph community): 1
Nodes (1): setupRendererLogger\(\)

### Community 103 - "Main Server Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (2): registerServerIpc\(\), getServerPath\(\)

### Community 104 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 105 - "Renderer Use Dayz Files — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): FileEntry

### Community 106 - "Renderer Use Dayz Files — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleFileClick\(\), handleNavigate\(\)

### Community 107 - "Renderer Use Dayz Mod Dependencies — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): executeMissingDepsInstall\(\), handleInstallDependencies\(\)

### Community 108 - "Renderer Use Dayz Mod Operations — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzModOperationCallbacks

### Community 109 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 110 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 111 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 112 - "Fix Steam Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 113 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 114 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 115 - "Old Manager TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 116 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 117 - "Refactor Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 118 - "Refactor Minecraft Ipc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 119 - "Refactor Serveripc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 120 - "Resolve Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 121 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 122 - "Vitest Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 123 - "Vitest Workspace TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 124 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **200 weakly connected node(s):** `.constructor\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.getIp\(\)`, `.getModDependencies\(\)` (+195 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Renderer Backups Tab — Backups`** (2 nodes): `BackupsTab.tsx`, `BackupsTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Console Tab`** (2 nodes): `ConsoleTab.tsx`, `ConsoleTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Curse Forge API Client — Curseforge`** (2 nodes): `.getCurseforgeMod\(\)`, `.getModpackDetails\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Curse Forge API Client — Search`** (2 nodes): `.searchCurseforgeMods\(\)`, `.searchModpacks\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Config Manager — Dayz`** (2 nodes): `DayzConfigManager.ts`, `DayzEconomyManager.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab`** (2 nodes): `DayzEconomyTab.tsx`, `useDayzEconomy.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab — Dayz`** (2 nodes): `DayzEconomyTab\(\)`, `renderSlider\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Files Tab`** (2 nodes): `DayzFilesTab.tsx`, `DayzFilesTab\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main File Tailer — File \(2\)`** (2 nodes): `.readNewLogs\(\)`, `.tailLogFile\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Game Backgrounds`** (2 nodes): `GameBackgrounds.tsx`, `GameBackgrounds\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Hub Router — Hub`** (2 nodes): `HubLoader\(\)`, `HubRouter\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preload Index D`** (2 nodes): `index.d.ts`, `Window`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Overview Tab`** (2 nodes): `OverviewTab.tsx`, `OverviewTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Install`** (2 nodes): `.install\(\)`, `.sendLog\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Installed`** (2 nodes): `.isInstalled\(\)`, `.open\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Minecraft`** (2 nodes): `refactor\_minecraft.js`, `extract\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Renderer Logger`** (2 nodes): `rendererLogger.ts`, `setupRendererLogger\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Server Ipc`** (2 nodes): `registerServerIpc\(\)`, `getServerPath\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Steam Web API — Workshop`** (2 nodes): `.getWorkshopItemDetails\(\)`, `.searchWorkshop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Files — Dayz`** (2 nodes): `useDayzFiles.ts`, `FileEntry`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Files — Handle`** (2 nodes): `handleFileClick\(\)`, `handleNavigate\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mod Dependencies — Install`** (2 nodes): `executeMissingDepsInstall\(\)`, `handleInstallDependencies\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mod Operations — Dayz`** (2 nodes): `useDayzModOperations.ts`, `DayzModOperationCallbacks`
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
- **Thin community `Old Manager TypeScript`** (1 nodes): `old\_manager.ts`
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
- **Thin community `Vitest Config TypeScript`** (1 nodes): `vitest.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vitest Workspace TypeScript`** (1 nodes): `vitest.workspace.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Wavy Lines SVG`** (1 nodes): `wavy-lines.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does \`ErrorBoundary\` connect \`Renderer Error Boundary\` to \`Renderer Error Boundary — Boundary\`, \`Renderer Hub Router\`, \`Main TSX\`?**
  _High betweenness centrality \(8945.150\) - this node is a cross-community bridge._
- **Why does \`DayzInstalledModsTab\(\)\` connect \`Renderer Dayz Installed Mods Tab\` to \`Renderer Use Dayz Installed Mods\`, \`Renderer Use Dayz Missions\`, \`Renderer Use Dayz Mod Dependencies\`, \`Renderer Use Dayz Mod Operations\`, \`Renderer Dayz Hub Context\`?**
  _High betweenness centrality \(3818.715\) - this node is a cross-community bridge._
- **Why does \`useDayzModOperations\(\)\` connect \`Renderer Use Dayz Mod Operations\` to \`Renderer Use Dayz Mod Operations — Dayz\`, \`Renderer Dayz Installed Mods Tab\`?**
  _High betweenness centrality \(3558.000\) - this node is a cross-community bridge._
- **What connects \`.constructor\(\)\`, \`.constructor\(\)\`, \`.constructor\(\)\` to the rest of the system?**
  _200 weakly-connected nodes found - possible documentation gaps or missing edges._
