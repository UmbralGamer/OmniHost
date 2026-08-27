# Graph Report - D:\\github\\OmniHost  (2026-08-27)

## Corpus Check
- 123 files · ~77,683 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 450 nodes · 687 edges · 117 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 333 non-file, non-concept node(s)
- Weakly connected components: 96
- Singleton components: 46
- Isolated nodes: 46
- Largest component: 21 node(s) (6% of the entity graph basis)
- Low-cohesion communities: 0
- Largest low-cohesion community: none on the entity graph basis

## Workspace Bridges
1. `DayzInstalledModsTab\(\)` - connects `Renderer Use Dayz Installed Mods`, `Renderer Use Dayz Missions`, `Renderer Use Dayz Mod Dependencies`, `Renderer Use Dayz Mod Operations`; home: `Renderer Dayz Installed Mods Tab`; degree 6; score 318.5
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModModals.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzMissions.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModDependencies.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModOperations.ts`
2. `useDayzFiles\(\)` - connects `Renderer Dayz Files Tab`, `Renderer Use Dayz Files — Handle`; home: `Renderer Use Dayz Files`; degree 8; score 1477
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts`
3. `FileTailer` - connects `Main File Tailer — File`, `Main File Tailer — File \(2\)`; home: `Main File Tailer`; degree 6; score 1419.5
  source files: `D:/github/OmniHost/src/main/utils/FileTailer.ts`
4. `RadminVpnAdapter` - connects `Main Radmin Vpn Adapter — Install`, `Main Radmin Vpn Adapter — Installed`; home: `Main Radmin Vpn Adapter`; degree 6; score 1225
  source files: `D:/github/OmniHost/src/main/adapters/RadminVpnAdapter.ts`
5. `CurseForgeApiClient` - connects `Main Curse Forge API Client — Curseforge`, `Main Curse Forge API Client — Search`; home: `Main Curse Forge API Client`; degree 5; score 1028
  source files: `D:/github/OmniHost/src/main/minecraft/CurseForgeApiClient.ts`
6. `CreateServerModal\(\)` - connects `Renderer Dashboard Hub`, `Renderer Use Steam Login Modal`; home: `Renderer Create Server Modal`; degree 6; score 860.33
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useSteamLoginModal.tsx`

## God Nodes
1. `useDayzModOperations\(\)` - 11 edges
2. `useDayzFiles\(\)` - 10 edges
3. `MinecraftDownloader` - 9 edges
4. `MinecraftPlayerManager` - 9 edges
5. `RadminVpnAdapter` - 9 edges
6. `CacheManager` - 8 edges
7. `CreateServerModal\(\)` - 8 edges
8. `FileTailer` - 8 edges
9. `SteamCache` - 8 edges
10. `SteamCMDSetup` - 8 edges

## Surprising Connections
- `DayzFilesTab\(\)` --calls--> `useDayzFiles\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzFiles.ts  _bridges separate communities_
- `DayzEconomyTab\(\)` --calls--> `useDayzEconomy\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzEconomy.ts  _bridges separate communities_
- `DashboardHub\(\)` --renders--> `CreateServerModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DashboardHub/DashboardHub.tsx → D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx  _bridges separate communities_
- `DayzHubContent\(\)` --renders--> `DayzModsTab\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx → D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModsTab.tsx  _bridges separate communities_
- `DayzHubContent\(\)` --renders--> `TunnelModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx → D:/github/OmniHost/src/renderer/src/components/modals/TunnelModal.tsx  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - useDayzFiles\(\) bridges Renderer Use Dayz Files and Renderer Use Dayz Files — Dayz, Renderer Use Dayz Files — Handle, Renderer Dayz Files Tab.
  _High betweenness centrality \(1449.000\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - FileTailer bridges Main File Tailer and Main Dayz Log Parser — TypeScript, Main File Tailer — File, Main File Tailer — File \(2\).
  _High betweenness centrality \(1393.500\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - useDayzModOperations\(\) bridges Renderer Use Dayz Mod Operations and Renderer Use Dayz Mod Operations — Dayz, Renderer Dayz Installed Mods Tab.
  _High betweenness centrality \(1654.000\) across 3 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - App\(\) → useIpcListeners\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - CreateServerModal\(\) → useSteamLoginModal\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.13
Nodes (6): createWindow\(\), RadminVpnAdapter, .constructor\(\), .getIp\(\), exists\(\), registerSystemIpc\(\)

### Community 1 - "Renderer Dayz Hub Context"
Cohesion (entity basis within full-graph community): 0.19
Nodes (7): DayzHub\(\), DayzHubContent\(\), DayzHubContextType, DayzHubProvider\(\), handleTabChange\(\), useDayzHubContext\(\), useDayzModDownloader\(\)

### Community 2 - "Main Steam Cache"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): SteamCache, .copyFromCache\(\), .deleteCache\(\), .getCacheDir\(\), .isCached\(\), .sendLog\(\), registerSteamCMDIpc\(\)

### Community 3 - "Main Db"
Cohesion (entity basis within full-graph community): 0.24
Nodes (7): createServer\(\), deleteServer\(\), getServers\(\), updateServerSoftware\(\), exists\(\), registerServerIpc\(\), getServerPath\(\)

### Community 4 - "Renderer Use Dayz Mod Operations"
Cohesion (entity basis within full-graph community): 0.22
Nodes (9): useDayzModOperations\(\), executeRebuildLoadOrder\(\), executeUninstall\(\), executeUninstallAll\(\), handleRebuildLoadOrder\(\), handleToggleMap\(\), handleToggleModStatus\(\), handleUninstall\(\) (+1 more)

### Community 5 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 6 - "Renderer Hub Router"
Cohesion (entity basis within full-graph community): 0
Nodes (3): getGameImageUrl\(\), HubRouter\(\), isGameSupported\(\)

### Community 7 - "Renderer Dayz Mods Tab"
Cohesion (entity basis within full-graph community): 0.27
Nodes (6): DayzModsTab\(\), handleClickOutside\(\), DayzModsTabProps, useDayzModInstallation\(\), handleInstall\(\), handleUninstall\(\)

### Community 8 - "Main Minecraft Player Manager"
Cohesion (entity basis within full-graph community): 0.39
Nodes (8): MinecraftPlayerManager, .clearOnlinePlayers\(\), .constructor\(\), .getOnlinePlayers\(\), .handlePlayerJoin\(\), .handlePlayerLeave\(\), .handleServerStop\(\), .sendPlayerUpdate\(\)

### Community 9 - "Main Dayz Process Manager"
Cohesion (entity basis within full-graph community): 0.48
Nodes (7): DayzProcessManager, .constructor\(\), .sendCommand\(\), .sendLog\(\), .sendPlayerUpdate\(\), .start\(\), .stop\(\)

### Community 10 - "Main Minecraft Downloader"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): MinecraftDownloader, .getFabricVersions\(\), .getForgeVersions\(\), .getLoaderVersions\(\), .getNeoForgeVersions\(\), .getPaperVersions\(\), .getVanillaVersions\(\)

### Community 11 - "Renderer Tunnel Modal"
Cohesion (entity basis within full-graph community): 0
Nodes (2): TunnelModal\(\), UiStore

### Community 12 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): BackupsTab\(\), fetchBackups\(\), formatBytes\(\), handleCreate\(\), handleDelete\(\), handleRestore\(\)

### Community 13 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DashboardHub\(\), DayzModStatus\(\), DeleteConfirmationModal\(\), confirmDeleteServer\(\)

### Community 14 - "Renderer Dayz Installed Mods Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): DayzInstalledModsTab\(\), openWorkshopPage\(\), DayzModModals\(\), DayzModModalsProps

### Community 15 - "Main Dayz Mission Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (5): DayzMissionManager, .extractLocalMission\(\), .fetchDayzMission\(\), findFolder\(\), exists\(\)

### Community 16 - "Main Minecraft Mod Manager"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftModManager, .deleteMod\(\), .getInstalledMods\(\), .installCurseforgeMod\(\), .installCurseforgeModpack\(\)

### Community 17 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 18 - "Renderer Use Minecraft Software"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): SoftwareTabProps, useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 19 - "Renderer Use Dayz Files"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useDayzFiles\(\), formatSize\(\), handleCreateFolder\(\), handleDelete\(\), handleNavigateUp\(\), handleSaveFile\(\)

### Community 20 - "Renderer Use Dayz Mod Search"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzMods\(\), loadInstalledMods\(\), useDayzModSearch\(\), stripBBCode\(\)

### Community 21 - "Renderer Use Dayz Options"
Cohesion (entity basis within full-graph community): 0.5
Nodes (5): useDayzOptions\(\), loadConfig\(\), parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 22 - "Renderer Use Minecraft Mods"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): useMinecraftMods\(\), fetchMods\(\), handleDeleteMod\(\), handleInstallMod\(\), installWithDeps\(\), handleSearchMods\(\)

### Community 23 - "Renderer Use Minecraft Players"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useMinecraftPlayers\(\), fetchInv\(\), handleAddPlayer\(\), handleRemovePlayer\(\), loadPlayers\(\), sendPlayerCommand\(\)

### Community 24 - "Renderer Create Server Modal"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 25 - "Main Curse Forge API Client"
Cohesion (entity basis within full-graph community): 0.33
Nodes (3): CurseForgeApiClient, .getCurseforgeFile\(\), registerMinecraftIpc\(\)

### Community 26 - "Main Dayz Adapter"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzAdapter, .constructor\(\), .start\(\), .stop\(\)

### Community 27 - "Main Dayz Config Manager"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): DayzConfigManager, .ensureDefaultConfig\(\), .exists\(\), .readConfig\(\), .writeConfig\(\)

### Community 28 - "Main Dayz Log Parser"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzLogParser, .cleanup\(\), .constructor\(\), .parseLogLine\(\), .setupLogWatcher\(\)

### Community 29 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\)

### Community 30 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 31 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftHub\(\), fetchServerMeta\(\), handleTabChange\(\), handleTunnel\(\), onRedirectToCreateModpack\(\)

### Community 32 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 33 - "Main Steam Cmd Setup"
Cohesion (entity basis within full-graph community): 0.8
Nodes (5): SteamCMDSetup, .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 34 - "Renderer Top Navbar"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): formatBytes\(\), getGameThemeColor\(\), TopNavbar\(\), handleClearCache\(\)

### Community 35 - "Renderer Use Create Server Data"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useCreateServerData\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\)

### Community 36 - "Main Wake Proxy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 37 - "Renderer App"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): App\(\), checkCache\(\), MainLayout\(\)

### Community 38 - "Renderer Use Steam Login Modal"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useSteamLoginModal\(\), closeModal\(\), openModal\(\)

### Community 39 - "Renderer Use Log Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 40 - "Main Dayz Economy Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzEconomyManager, .getEconomy\(\), .updateEconomy\(\), .wipeLoot\(\)

### Community 41 - "Main Dayz Mod Graph"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzModGraph, .resolveMods\(\)

### Community 42 - "Main Dayz Mod Installer"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzModInstaller, .installMod\(\), .selectWorkshopFolder\(\), .uninstallMod\(\)

### Community 43 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamWebAPI, .getModDependencies\(\)

### Community 44 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 45 - "Renderer Game Backgrounds"
Cohesion (entity basis within full-graph community): 0
Nodes (2): GameBackgrounds\(\), MainLayoutProps

### Community 46 - "Main Java Manager"
Cohesion (entity basis within full-graph community): 0.83
Nodes (4): JavaManager, .downloadAndExtractJava\(\), .findJavaExecutable\(\), .getJavaPath\(\)

### Community 47 - "Main Minecraft Config Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftConfigManager, .init\(\)

### Community 48 - "Main Minecraft Stats Service"
Cohesion (entity basis within full-graph community): 1
Nodes (2): MinecraftStatsService, .updatePlayerStats\(\)

### Community 49 - "Main Minecraft Process Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): MinecraftProcessManager, .constructor\(\), .getActualPid\(\), .stop\(\)

### Community 50 - "Main Steam Auth"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SteamAuth, .getLoginArgs\(\), .isSteamGuardPrompt\(\)

### Community 51 - "Renderer Steam Login Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamLoginModal\(\), handleUpdateSteamCache\(\)

### Community 52 - "Main Steam Workshop Downloader"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): SteamWorkshopDownloader, .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .sendInput\(\)

### Community 53 - "Renderer Use Dayz Economy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzEconomy\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\)

### Community 54 - "Renderer Use Dayz Missions"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzMissions\(\), handleDownloadMission\(\), handleExtractLocalMission\(\)

### Community 55 - "Renderer Use Dayz Mod Import"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzModImport\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\)

### Community 56 - "Main Cache Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): registerCacheIpc\(\)

### Community 57 - "Main Dayz Mod Installer — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 58 - "Main Dayz Mod Installer — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .importLocalWorkshop\(\), .installMods\(\), exists\(\)

### Community 59 - "Main Dayz Mod Status Manager"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzModStatusManager, .rebuildModDependencies\(\), .toggleModStatus\(\)

### Community 60 - "Main Dayz Mod Status Manager — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .getInstalledMods\(\), .toggleMapMod\(\), exists\(\)

### Community 61 - "Main File Tailer"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): FileTailer, .constructor\(\), .stop\(\)

### Community 62 - "Main File Tailer — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForFile\(\), checkFile\(\), .start\(\)

### Community 63 - "Renderer List View Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 64 - "Main Minecraft Command Builder"
Cohesion (entity basis within full-graph community): 1
Nodes (3): MinecraftCommandBuilder, .buildCommand\(\), .parseRunBat\(\)

### Community 65 - "Main Minecraft Downloader — Download"
Cohesion (entity basis within full-graph community): 1
Nodes (2): exists\(\), .downloadServerJar\(\)

### Community 66 - "Main Minecraft Process Manager — Send"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .sendCommand\(\), .sendLog\(\), .start\(\)

### Community 67 - "Renderer Mods Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ModsTabProps

### Community 68 - "Renderer Motion Faqs Accordion"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 69 - "Renderer Motion Faqs Accordion — Accordion"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 70 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 71 - "Main Steam Downloader"
Cohesion (entity basis within full-graph community): 1
Nodes (3): SteamDownloader, .installApp\(\), .updateCache\(\)

### Community 72 - "Renderer Use Dayz Installed Mods"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzInstalledMods\(\), loadInstalledMods\(\)

### Community 73 - "Renderer Use Dayz Mod Dependencies"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzModDependencies\(\), handleCheckDependencies\(\)

### Community 74 - "Renderer Use Dayz Mod Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzModStore, PendingDownload

### Community 75 - "Renderer Use Dayz Options — Replace"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 76 - "Renderer Use Ipc Listeners"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useIpcListeners\(\), fetchServers\(\)

### Community 77 - "Renderer Use Minecraft Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 78 - "Renderer Use Server Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Server, ServerStore

### Community 79 - "Renderer Use Stats Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 80 - "Renderer Use Toast Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Toast, ToastStore

### Community 81 - "Renderer Backups Tab — Backups"
Cohesion (entity basis within full-graph community): 1
Nodes (1): BackupsTabProps

### Community 82 - "Renderer Console Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ConsoleTabProps

### Community 83 - "Main Curse Forge API Client — Curseforge"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getCurseforgeMod\(\), .getModpackDetails\(\)

### Community 84 - "Main Curse Forge API Client — Search"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .searchCurseforgeMods\(\), .searchModpacks\(\)

### Community 85 - "Main Dayz Config Manager — Dayz"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 86 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 87 - "Renderer Dayz Economy Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzEconomyTab\(\), renderSlider\(\)

### Community 88 - "Renderer Dayz Files Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzFilesTab\(\)

### Community 89 - "Main Dayz Log Parser — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 90 - "Main File Tailer — File \(2\)"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .readNewLogs\(\), .tailLogFile\(\)

### Community 91 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 92 - "Main Java Manager — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 93 - "Renderer Overview Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OverviewTabProps

### Community 94 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 95 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 96 - "Refactor Minecraft"
Cohesion (entity basis within full-graph community): 1
Nodes (1): extract\(\)

### Community 97 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 98 - "Renderer Use Dayz Files — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): FileEntry

### Community 99 - "Renderer Use Dayz Files — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleFileClick\(\), handleNavigate\(\)

### Community 100 - "Renderer Use Dayz Mod Dependencies — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): executeMissingDepsInstall\(\), handleInstallDependencies\(\)

### Community 101 - "Renderer Use Dayz Mod Operations — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzModOperationCallbacks

### Community 102 - "Renderer Use Dayz Mod Search — Handle"
Cohesion (entity basis within full-graph community): 1
Nodes (2): handleCategoryChange\(\), handleSearch\(\)

### Community 103 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 104 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 105 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 106 - "Fix Steam Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 107 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 108 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 109 - "Old Manager TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 110 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 111 - "Refactor Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 112 - "Refactor Minecraft Ipc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 113 - "Refactor Serveripc Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 114 - "Resolve Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 115 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 116 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **182 weakly connected node(s):** `.constructor\(\)`, `.constructor\(\)`, `.constructor\(\)`, `.getIp\(\)`, `.getModDependencies\(\)` (+177 more)
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
- **Thin community `Main Dayz Log Parser — TypeScript`** (2 nodes): `DayzLogParser.ts`, `FileTailer.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main File Tailer — File \(2\)`** (2 nodes): `.readNewLogs\(\)`, `.tailLogFile\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preload Index D`** (2 nodes): `index.d.ts`, `Window`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Java Manager — TypeScript`** (2 nodes): `JavaManager.ts`, `MinecraftCommandBuilder.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Overview Tab`** (2 nodes): `OverviewTab.tsx`, `OverviewTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Install`** (2 nodes): `.install\(\)`, `.sendLog\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Radmin Vpn Adapter — Installed`** (2 nodes): `.isInstalled\(\)`, `.open\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Refactor Minecraft`** (2 nodes): `refactor\_minecraft.js`, `extract\(\)`
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
- **Thin community `Renderer Use Dayz Mod Search — Handle`** (2 nodes): `handleCategoryChange\(\)`, `handleSearch\(\)`
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
- **Thin community `Wavy Lines SVG`** (1 nodes): `wavy-lines.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does \`useDayzModOperations\(\)\` connect \`Renderer Use Dayz Mod Operations\` to \`Renderer Use Dayz Mod Operations — Dayz\`, \`Renderer Dayz Installed Mods Tab\`?**
  _High betweenness centrality \(1654.000\) - this node is a cross-community bridge._
- **Why does \`useDayzFiles\(\)\` connect \`Renderer Use Dayz Files\` to \`Renderer Use Dayz Files — Dayz\`, \`Renderer Use Dayz Files — Handle\`, \`Renderer Dayz Files Tab\`?**
  _High betweenness centrality \(1449.000\) - this node is a cross-community bridge._
- **Why does \`useDayzOptions\(\)\` connect \`Renderer Use Dayz Options\` to \`Renderer Use Dayz Options — Replace\`?**
  _High betweenness centrality \(1440.000\) - this node is a cross-community bridge._
- **What connects \`.constructor\(\)\`, \`.constructor\(\)\`, \`.constructor\(\)\` to the rest of the system?**
  _182 weakly-connected nodes found - possible documentation gaps or missing edges._
