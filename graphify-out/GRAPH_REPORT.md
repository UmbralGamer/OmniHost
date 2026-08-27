# Graph Report - D:\\github\\OmniHost  (2026-08-27)

## Corpus Check
- 145 files · ~75,323 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 520 nodes · 822 edges · 127 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 382 non-file, non-concept node(s)
- Weakly connected components: 111
- Singleton components: 51
- Isolated nodes: 51
- Largest component: 28 node(s) (7% of the entity graph basis)
- Low-cohesion communities: 0
- Largest low-cohesion community: none on the entity graph basis

## Workspace Bridges
1. `DayzInstalledModsTab\(\)` - connects `Renderer Use Dayz Installed Mods`, `Renderer Use Dayz Missions`, `Renderer Use Dayz Mod Dependencies`, `Renderer Use Dayz Mod Operations`; home: `Renderer Dayz Installed Mods Tab`; degree 6; score 4435.2
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModModals.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzMissions.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModDependencies.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModOperations.ts`
2. `useDayzFiles\(\)` - connects `Renderer Dayz Files Tab`, `Renderer Use Dayz Files — Handle`; home: `Renderer Use Dayz Files`; degree 8; score 3255
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts`
3. `FileTailer` - connects `Main File Tailer — File`, `Main File Tailer — File \(2\)`; home: `Main File Tailer`; degree 6; score 3246.5
  source files: `D:/github/OmniHost/src/main/utils/FileTailer.ts`
4. `RadminVpnAdapter` - connects `Main Radmin Vpn Adapter — Install`, `Main Radmin Vpn Adapter — Installed`; home: `Main Radmin Vpn Adapter`; degree 6; score 2791
  source files: `D:/github/OmniHost/src/main/adapters/RadminVpnAdapter.ts`
5. `CurseForgeApiClient` - connects `Main Curse Forge API Client — Curseforge`, `Main Curse Forge API Client — Search`; home: `Main Curse Forge API Client`; degree 5; score 2333
  source files: `D:/github/OmniHost/src/main/minecraft/CurseForgeApiClient.ts`
6. `CreateServerModal\(\)` - connects `Renderer Dashboard Hub`, `Renderer Use Steam Login Modal`; home: `Renderer Create Server Modal`; degree 6; score 1876.33
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useSteamLoginModal.tsx`

## God Nodes
1. `useDayzModOperations\(\)` - 11 edges
2. `useMinecraftHubContext\(\)` - 11 edges
3. `useDayzFiles\(\)` - 10 edges
4. `DayzVppAdminTab\(\)` - 9 edges
5. `MinecraftDownloader` - 9 edges
6. `MinecraftPlayerManager` - 9 edges
7. `RadminVpnAdapter` - 9 edges
8. `useDayzHubContext\(\)` - 9 edges
9. `CacheManager` - 8 edges
10. `CreateServerModal\(\)` - 8 edges

## Surprising Connections
- `DayzFilesTab\(\)` --calls--> `useDayzFiles\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts  _bridges separate communities_
- `DayzEconomyTab\(\)` --calls--> `useDayzEconomy\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzEconomy.ts  _bridges separate communities_
- `DashboardHub\(\)` --renders--> `CreateServerModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx → D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx  _bridges separate communities_
- `App\(\)` --calls--> `useIpcListeners\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/hooks/useIpcListeners.ts  _bridges separate communities_
- `DashboardHub\(\)` --calls--> `useSteamLoginModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx → D:/github/OmniHost/src/renderer/src/hooks/useSteamLoginModal.tsx  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - DayzInstalledModsTab\(\) bridges Renderer Dayz Installed Mods Tab and Renderer Use Dayz Installed Mods, Renderer Use Dayz Missions, Renderer Use Dayz Mod Dependencies, Renderer Use Dayz Mod Operations, Renderer Dayz Hub Context.
  _High betweenness centrality \(4389.200\) across 6 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - RadminVpnAdapter bridges Main Radmin Vpn Adapter and Main Radmin Vpn Adapter — Install, Main Radmin Vpn Adapter — Installed, Main System Ipc, Main Db.
  _High betweenness centrality \(2765.000\) across 5 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - useDayzFiles\(\) bridges Renderer Use Dayz Files and Renderer Use Dayz Files — Dayz, Renderer Use Dayz Files — Handle, Renderer Dayz Files Tab.
  _High betweenness centrality \(3227.000\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - App\(\) → useIpcListeners\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - CreateServerModal\(\) → useSteamLoginModal\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Main Db"
Cohesion (entity basis within full-graph community): 0.08
Nodes (20): registerCacheIpc\(\), createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\), registerAllIpcs\(\), registerLogIpc\(\), MinecraftController (+12 more)

### Community 1 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.17
Nodes (12): ConsoleTabProps, MinecraftHub\(\), MinecraftHubContent\(\), MinecraftHubContextType, useMinecraftHubContext\(\), MinecraftHubHeader\(\), handleTunnel\(\), MinecraftHubNavigation\(\) (+4 more)

### Community 2 - "Renderer Dayz Hub Context"
Cohesion (entity basis within full-graph community): 0.22
Nodes (10): DayzHub\(\), DayzHubContent\(\), DayzHubContextType, DayzHubProvider\(\), handleTabChange\(\), useDayzHubContext\(\), DayzHubHeader\(\), DayzHubNavigation\(\) (+2 more)

### Community 3 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 0.17
Nodes (4): exists\(\), DayzMissionManager, SteamWebAPI, .getModDependencies\(\)

### Community 4 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 5 - "Main Steam Cache"
Cohesion (entity basis within full-graph community): 0.6
Nodes (6): SteamCache, .copyFromCache\(\), .deleteCache\(\), .getCacheDir\(\), .isCached\(\), .sendLog\(\)

### Community 6 - "Renderer Use Dayz Mod Operations"
Cohesion (entity basis within full-graph community): 0.22
Nodes (9): useDayzModOperations\(\), executeRebuildLoadOrder\(\), executeUninstall\(\), executeUninstallAll\(\), handleRebuildLoadOrder\(\), handleToggleMap\(\), handleToggleModStatus\(\), handleUninstall\(\) (+1 more)

### Community 7 - "Renderer Dayz Mods Tab"
Cohesion (entity basis within full-graph community): 0.27
Nodes (6): DayzModsTab\(\), handleClickOutside\(\), DayzModsTabProps, useDayzModInstallation\(\), handleInstall\(\), handleUninstall\(\)

### Community 8 - "Main Minecraft Player Manager"
Cohesion (entity basis within full-graph community): 0.39
Nodes (8): MinecraftPlayerManager, .clearOnlinePlayers\(\), .constructor\(\), .getOnlinePlayers\(\), .handlePlayerJoin\(\), .handlePlayerLeave\(\), .handleServerStop\(\), .sendPlayerUpdate\(\)

### Community 9 - "Renderer Hub Router"
Cohesion (entity basis within full-graph community): 0
Nodes (2): getGameImageUrl\(\), isGameSupported\(\)

### Community 10 - "Main Dayz Mod Installer"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): DayzModInstaller, .importLocalWorkshop\(\), .installMod\(\), .installMods\(\), .selectWorkshopFolder\(\), .uninstallMod\(\), exists\(\)

### Community 11 - "Main Dayz Process Manager"
Cohesion (entity basis within full-graph community): 0.48
Nodes (7): DayzProcessManager, .constructor\(\), .sendCommand\(\), .sendLog\(\), .sendPlayerUpdate\(\), .start\(\), .stop\(\)

### Community 12 - "Renderer Dayz Vpp Admin Tab"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): DayzVppAdminTab\(\), handleAddAdmin\(\), handleClearCredential\(\), handleRemoveAdmin\(\), handleSetCredential\(\), handleToggleDisablePassword\(\), loadVppData\(\)

### Community 13 - "Main Minecraft Downloader"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): MinecraftDownloader, .getFabricVersions\(\), .getForgeVersions\(\), .getLoaderVersions\(\), .getNeoForgeVersions\(\), .getPaperVersions\(\), .getVanillaVersions\(\)

### Community 14 - "Main App"
Cohesion (entity basis within full-graph community): 0.33
Nodes (3): setupAppPostload\(\), setupAppPreload\(\), initializeLogger\(\)

### Community 15 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DashboardHub\(\), DayzModStatus\(\), DeleteConfirmationModal\(\), confirmDeleteServer\(\)

### Community 16 - "Renderer Dayz Installed Mods Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): DayzInstalledModsTab\(\), openWorkshopPage\(\), DayzModModals\(\), DayzModModalsProps

### Community 17 - "Renderer Error Boundary"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): Component, ErrorBoundary, .componentDidCatch\(\), .getDerivedStateFromError\(\), .handleReset\(\), .render\(\)

### Community 18 - "Main Minecraft Mod Manager"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftModManager, .deleteMod\(\), .getInstalledMods\(\), .installCurseforgeMod\(\), .installCurseforgeModpack\(\)

### Community 19 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 20 - "Renderer Use Dayz Files"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useDayzFiles\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleNavigateUp\(\), handleSaveFile\(\)

### Community 21 - "Renderer Use Minecraft Mods"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): useMinecraftMods\(\), fetchMods\(\), handleDeleteMod\(\), handleInstallMod\(\), installWithDeps\(\), handleSearchMods\(\)

### Community 22 - "Renderer Use Minecraft Players"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useMinecraftPlayers\(\), fetchInv\(\), handleAddPlayer\(\), handleRemovePlayer\(\), loadPlayers\(\), sendPlayerCommand\(\)

### Community 23 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): BackupsTab\(\), formatBytes\(\), handleRestore\(\), BackupsTabProps

### Community 24 - "Renderer Create Server Modal"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 25 - "Main Dayz Adapter"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzAdapter, .constructor\(\), .start\(\), .stop\(\)

### Community 26 - "Main Dayz Config Manager"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): DayzConfigManager, .ensureDefaultConfig\(\), .exists\(\), .readConfig\(\), .writeConfig\(\)

### Community 27 - "Main Dayz Log Parser"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzLogParser, .cleanup\(\), .constructor\(\), .parseLogLine\(\), .setupLogWatcher\(\)

### Community 28 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\)

### Community 29 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 30 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 31 - "Main Steam Cmd Setup"
Cohesion (entity basis within full-graph community): 0.8
Nodes (5): SteamCMDSetup, .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 32 - "Main Steam Workshop Downloader"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): SteamWorkshopDownloader, .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .sendInput\(\)

### Community 33 - "Renderer Top Navbar"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): formatBytes\(\), getGameThemeColor\(\), TopNavbar\(\), handleClearCache\(\)

### Community 34 - "Renderer Use Create Server Data"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useCreateServerData\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\)

### Community 35 - "Renderer Use Steam Login Modal"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useSteamLoginModal\(\), closeModal\(\), openModal\(\)

### Community 36 - "Main Curse Forge API Client"
Cohesion (entity basis within full-graph community): 1
Nodes (2): CurseForgeApiClient, .getCurseforgeFile\(\)

### Community 37 - "Renderer Use Log Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 38 - "Main Dayz Economy Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzEconomyManager, .getEconomy\(\), .updateEconomy\(\), .wipeLoot\(\)

### Community 39 - "Main Dayz Mod Graph"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzModGraph, .resolveMods\(\)

### Community 40 - "Renderer Use Dayz Installed Mods"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzInstalledMods\(\), loadInstalledMods\(\)

### Community 41 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 42 - "Renderer Game Backgrounds"
Cohesion (entity basis within full-graph community): 0
Nodes (2): GameBackgrounds\(\), MainLayoutProps

### Community 43 - "Main Window"
Cohesion (entity basis within full-graph community): 1
Nodes (2): createWindow\(\), setupWindowLifecycle\(\)

### Community 44 - "Main Java Manager"
Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 45 - "Main Minecraft Config Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftConfigManager, .init\(\)

### Community 46 - "Renderer Minecraft Hub Context"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): MinecraftHubProvider\(\), fetchServerMeta\(\), handleTabChange\(\), onRedirectToCreateModpack\(\)

### Community 47 - "Main Minecraft Stats Service"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftStatsService, .updatePlayerStats\(\)

### Community 48 - "Main Minecraft Process Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): MinecraftProcessManager, .constructor\(\), .getActualPid\(\), .stop\(\)

### Community 49 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): RadminVpnAdapter, .constructor\(\), .getIp\(\)

### Community 50 - "Renderer Settings Modal"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SettingsModal\(\), copyToClipboard\(\), loadLogs\(\)

### Community 51 - "Main Steam Auth"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SteamAuth, .getLoginArgs\(\), .isSteamGuardPrompt\(\)

### Community 52 - "Renderer Steam Login Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamLoginModal\(\), handleUpdateSteamCache\(\)

### Community 53 - "Renderer Use Dayz Economy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzEconomy\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\)

### Community 54 - "Renderer Use Dayz Missions"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzMissions\(\), handleDownloadMission\(\), handleExtractLocalMission\(\)

### Community 55 - "Renderer Use Dayz Mod Search"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): useDayzModSearch\(\), handleCategoryChange\(\), handleSearch\(\), stripBBCode\(\)

### Community 56 - "Renderer App"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): App\(\), checkCache\(\), MainLayout\(\)

### Community 57 - "Renderer Background Worker"
Cohesion (entity basis within full-graph community): 0
Nodes (2): compileShader\(\), render\(\)

### Community 58 - "Renderer Backups Tab — Handle"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): fetchBackups\(\), handleCreate\(\), handleDelete\(\)

### Community 59 - "Main Dayz Log Parser — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 60 - "Main Dayz Mod Status Manager"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzModStatusManager, .rebuildModDependencies\(\), .toggleModStatus\(\)

### Community 61 - "Main Dayz Mod Status Manager — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .getInstalledMods\(\), .toggleMapMod\(\), exists\(\)

### Community 62 - "Renderer Error Boundary — Boundary"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Props, State

### Community 63 - "Main File System Controller"
Cohesion (entity basis within full-graph community): 0
Nodes (2): exists\(\), getServerPath\(\)

### Community 64 - "Main File Tailer"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): FileTailer, .constructor\(\), .stop\(\)

### Community 65 - "Main File Tailer — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForFile\(\), checkFile\(\), .start\(\)

### Community 66 - "Main System Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): exists\(\)

### Community 67 - "Main Java Manager — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 68 - "Renderer List View Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 69 - "Main Minecraft Command Builder"
Cohesion (entity basis within full-graph community): 1
Nodes (3): MinecraftCommandBuilder, .buildCommand\(\), .parseRunBat\(\)

### Community 70 - "Main Minecraft Downloader — Download"
Cohesion (entity basis within full-graph community): 1
Nodes (2): exists\(\), .downloadServerJar\(\)

### Community 71 - "Main Minecraft Process Manager — Send"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .sendCommand\(\), .sendLog\(\), .start\(\)

### Community 72 - "Renderer Mods Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ModsTabProps

### Community 73 - "Renderer Motion Faqs Accordion"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 74 - "Renderer Motion Faqs Accordion — Accordion"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 75 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 76 - "Renderer Setup Tests"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 77 - "Renderer Software Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): SoftwareTabProps

### Community 78 - "Main Steam Downloader"
Cohesion (entity basis within full-graph community): 1
Nodes (3): SteamDownloader, .installApp\(\), .updateCache\(\)

### Community 79 - "Renderer Use Dayz Mod Dependencies"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzModDependencies\(\), handleCheckDependencies\(\)

### Community 80 - "Renderer Use Dayz Mod Import"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzModImport\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\)

### Community 81 - "Renderer Use Dayz Mod Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzModStore, PendingDownload

### Community 82 - "Renderer Use Dayz Options"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzOptions\(\), loadConfig\(\)

### Community 83 - "Renderer Use Dayz Options — Replace"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 84 - "Renderer Use Dayz Options — Extract"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 85 - "Renderer Use Ipc Listeners"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useIpcListeners\(\), fetchServers\(\)

### Community 86 - "Renderer Use Minecraft Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 87 - "Renderer Use Minecraft Software"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 88 - "Renderer Use Stats Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 89 - "Renderer Use Toast Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Toast, ToastStore

### Community 90 - "Main Curse Forge API Client — Curseforge"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getCurseforgeMod\(\), .getModpackDetails\(\)

### Community 91 - "Main Curse Forge API Client — Search"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .searchCurseforgeMods\(\), .searchModpacks\(\)

### Community 92 - "Main Dayz Config Manager — Dayz"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 93 - "Main Dayz Controller"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzController, .register\(\)

### Community 94 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 95 - "Renderer Dayz Economy Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzEconomyTab\(\), renderSlider\(\)

### Community 96 - "Renderer Dayz Files Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzFilesTab\(\)

### Community 97 - "Main Dayz Mission Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .extractLocalMission\(\), exists\(\)

### Community 98 - "Main Dayz Mission Manager — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .fetchDayzMission\(\), findFolder\(\)

### Community 99 - "Main File System Controller — Controller"
Cohesion (entity basis within full-graph community): 1
Nodes (2): FileSystemController, .register\(\)

### Community 100 - "Main File Tailer — File \(2\)"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .readNewLogs\(\), .tailLogFile\(\)

### Community 101 - "Renderer Hub Router — Hub"
Cohesion (entity basis within full-graph community): 1
Nodes (2): HubLoader\(\), HubRouter\(\)

### Community 102 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 103 - "Renderer Overview Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OverviewTabProps

### Community 104 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 105 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 106 - "Refactor Minecraft"
Cohesion (entity basis within full-graph community): 1
Nodes (1): extract\(\)

### Community 107 - "Renderer Renderer Logger"
Cohesion (entity basis within full-graph community): 1
Nodes (1): setupRendererLogger\(\)

### Community 108 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 109 - "Renderer Tunnel Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (1): TunnelModal\(\)

### Community 110 - "Renderer Use Dayz Files — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): FileEntry

### Community 111 - "Renderer Use Dayz Files — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleFileClick\(\), handleNavigate\(\)

### Community 112 - "Renderer Use Dayz Mod Dependencies — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): executeMissingDepsInstall\(\), handleInstallDependencies\(\)

### Community 113 - "Renderer Use Dayz Mod Import — Dayz"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 114 - "Renderer Use Dayz Mod Operations — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzModOperationCallbacks

### Community 115 - "Renderer Use Dayz Mods"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzMods\(\), loadInstalledMods\(\)

### Community 116 - "Renderer Use UI Store"
Cohesion (entity basis within full-graph community): 1
Nodes (1): UiStore

### Community 117 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 118 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 119 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 120 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 121 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 122 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 123 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 124 - "Vitest Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 125 - "Vitest Workspace TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 126 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **216 weakly connected node(s):** `.constructor\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.getIp\(\)`, `.getModDependencies\(\)` (+211 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Main Curse Forge API Client — Curseforge`** (2 nodes): `.getCurseforgeMod\(\)`, `.getModpackDetails\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Curse Forge API Client — Search`** (2 nodes): `.searchCurseforgeMods\(\)`, `.searchModpacks\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Config Manager — Dayz`** (2 nodes): `DayzConfigManager.ts`, `DayzEconomyManager.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Controller`** (2 nodes): `DayzController`, `.register\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab`** (2 nodes): `DayzEconomyTab.tsx`, `useDayzEconomy.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Economy Tab — Dayz`** (2 nodes): `DayzEconomyTab\(\)`, `renderSlider\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Dayz Files Tab`** (2 nodes): `DayzFilesTab.tsx`, `DayzFilesTab\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager`** (2 nodes): `.extractLocalMission\(\)`, `exists\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager — Dayz`** (2 nodes): `.fetchDayzMission\(\)`, `findFolder\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main File System Controller — Controller`** (2 nodes): `FileSystemController`, `.register\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main File Tailer — File \(2\)`** (2 nodes): `.readNewLogs\(\)`, `.tailLogFile\(\)`
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
- **Thin community `Main Steam Web API — Workshop`** (2 nodes): `.getWorkshopItemDetails\(\)`, `.searchWorkshop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Tunnel Modal`** (2 nodes): `TunnelModal.tsx`, `TunnelModal\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Files — Dayz`** (2 nodes): `useDayzFiles.ts`, `FileEntry`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Files — Handle`** (2 nodes): `handleFileClick\(\)`, `handleNavigate\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mod Dependencies — Install`** (2 nodes): `executeMissingDepsInstall\(\)`, `handleInstallDependencies\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mod Import — Dayz`** (2 nodes): `useDayzModImport.ts`, `useDayzMods.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mod Operations — Dayz`** (2 nodes): `useDayzModOperations.ts`, `DayzModOperationCallbacks`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Mods`** (2 nodes): `useDayzMods\(\)`, `loadInstalledMods\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use UI Store`** (2 nodes): `useUiStore.ts`, `UiStore`
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
- **Thin community `Vitest Config TypeScript`** (1 nodes): `vitest.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vitest Workspace TypeScript`** (1 nodes): `vitest.workspace.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Wavy Lines SVG`** (1 nodes): `wavy-lines.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does \`DayzInstalledModsTab\(\)\` connect \`Renderer Dayz Installed Mods Tab\` to \`Renderer Use Dayz Installed Mods\`, \`Renderer Use Dayz Missions\`, \`Renderer Use Dayz Mod Dependencies\`, \`Renderer Use Dayz Mod Operations\`, \`Renderer Dayz Hub Context\`?**
  _High betweenness centrality \(4389.200\) - this node is a cross-community bridge._
- **Why does \`useDayzModOperations\(\)\` connect \`Renderer Use Dayz Mod Operations\` to \`Renderer Use Dayz Mod Operations — Dayz\`, \`Renderer Dayz Installed Mods Tab\`?**
  _High betweenness centrality \(3686.000\) - this node is a cross-community bridge._
- **What connects \`.constructor\(\)\`, \`.constructor\(\)\`, \`.constructor\(\)\` to the rest of the system?**
  _216 weakly-connected nodes found - possible documentation gaps or missing edges._
