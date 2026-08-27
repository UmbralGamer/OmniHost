# Graph Report - D:\\github\\OmniHost  (2026-08-27)

## Corpus Check
- 163 files · ~75,616 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 545 nodes · 875 edges · 136 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 389 non-file, non-concept node(s)
- Weakly connected components: 114
- Singleton components: 56
- Isolated nodes: 56
- Largest component: 64 node(s) (16% of the entity graph basis)
- Low-cohesion communities: 0
- Largest low-cohesion community: none on the entity graph basis

## Workspace Bridges
1. `DayzInstalledModsGridPanel\(\)` - connects `Renderer Use Dayz Installed Mods`, `Renderer Use Dayz Missions`, `Renderer Use Dayz Mod Dependencies`, `Renderer Use Dayz Mod Status`, `Renderer Use Dayz Mod Uninstall`; home: `Renderer Dayz Installed Mods Grid Panel`; degree 7; score 2584.36
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/components/DayzInstalledModsGridPanel.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzMissions.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModDependencies.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModStatus.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModUninstall.ts`
2. `useDayzInstalledMods\(\)` - connects `Renderer Dayz Installed Mods Grid Panel`, `Renderer Dayz Vpp Admin Tab`, `Renderer Use Dayz Mod Rebuild`; home: `Renderer Use Dayz Installed Mods`; degree 4; score 5380.55
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/components/DayzInstalledModsGridPanel.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/components/DayzInstalledModsHeaderPanel.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzVppAdminTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`
3. `DayzInstalledModsHeaderPanel\(\)` - connects `Renderer Dayz Installed Mods Grid Panel`, `Renderer Use Dayz Installed Mods`, `Renderer Use Dayz Mod Uninstall`; home: `Renderer Use Dayz Mod Rebuild`; degree 4; score 1151.36
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/components/DayzInstalledModsHeaderPanel.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzInstalledMods.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModRebuild.ts`, `D:/github/OmniHost/src/renderer/src/hooks/useDayzModUninstall.ts`
4. `DayzHubTabContent\(\)` - connects `Renderer Dayz Installed Mods Grid Panel`, `Renderer Dayz Mods Tab`, `Renderer Use Dayz File Editor`; home: `Renderer Dayz Hub`; degree 4; score 822.17
  source files: `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHub.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/DayzHubTabContent.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzFilesTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzInstalledModsTab.tsx`, `D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzModsTab.tsx`
5. `RadminVpnAdapter` - connects `Main Radmin Vpn Adapter — Install`, `Main Radmin Vpn Adapter — Installed`; home: `Main Radmin Vpn Adapter`; degree 6; score 2899
  source files: `D:/github/OmniHost/src/main/adapters/RadminVpnAdapter.ts`
6. `CurseForgeApiClient` - connects `Main Curse Forge API Client — Curseforge`, `Main Curse Forge API Client — Search`; home: `Main Curse Forge API Client`; degree 5; score 2423
  source files: `D:/github/OmniHost/src/main/minecraft/CurseForgeApiClient.ts`

## God Nodes
1. `DayzInstalledModsGridPanel\(\)` - 9 edges
2. `FileTailer` - 9 edges
3. `MinecraftDownloader` - 9 edges
4. `MinecraftPlayerManager` - 9 edges
5. `useDayzFileNavigation\(\)` - 9 edges
6. `useDayzModUninstall\(\)` - 9 edges
7. `CacheManager` - 8 edges
8. `ErrorBoundary` - 8 edges
9. `MinecraftProcessManager` - 8 edges
10. `RadminVpnAdapter` - 8 edges

## Surprising Connections
- `DayzEconomyTab\(\)` --calls--> `useDayzEconomy\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/hubs/DayzHub/tabs/DayzEconomyTab.tsx → D:/github/OmniHost/src/renderer/src/hooks/useDayzEconomy.ts  _bridges separate communities_
- `useDayzMods\(\)` --calls--> `useDayzModSearch\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/hooks/useDayzMods.ts → D:/github/OmniHost/src/renderer/src/hooks/useDayzModSearch.ts  _bridges separate communities_
- `TopNavbar\(\)` --renders--> `SettingsModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/layout/TopNavbar.tsx → D:/github/OmniHost/src/renderer/src/components/modals/SettingsModal.tsx  _bridges separate communities_
- `GlobalModalManager\(\)` --renders--> `CreateServerModal\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/components/modals/GlobalModalManager.tsx → D:/github/OmniHost/src/renderer/src/components/modals/CreateServerModal.tsx  _bridges separate communities_
- `App\(\)` --calls--> `useIpcListeners\(\)`  [EXTRACTED]
  D:/github/OmniHost/src/renderer/src/App.tsx → D:/github/OmniHost/src/renderer/src/hooks/useIpcListeners.ts  _bridges separate communities_

## Semantic Anomalies
- **[HIGH] Bridge node** - useDayzInstalledMods\(\) bridges Renderer Use Dayz Installed Mods and Renderer Dayz Vpp Admin Tab, Renderer Dayz Pending Download Card, Renderer Dayz Installed Mods Grid Panel, Renderer Use Dayz Mod Rebuild.
  _High betweenness centrality \(5346.551\) across 5 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - DayzInstalledModsGridPanel\(\) bridges Renderer Dayz Installed Mods Grid Panel and Renderer Dayz Pending Download Card, Renderer Use Dayz Installed Mods, Renderer Use Dayz Missions, Renderer Use Dayz Mod Dependencies, Renderer Use Dayz Mod Status, Renderer Use Dayz Mod Uninstall.
  _High betweenness centrality \(2527.361\) across 7 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - MinecraftProcessManager bridges Main Minecraft Process Manager and Main Minecraft Config Manager, Main Minecraft Process Manager — Send, Main Db.
  _High betweenness centrality \(2874.500\) across 4 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - App\(\) → useIpcListeners\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_
- **[HIGH] Cross-boundary edge** - DayzEconomyTab\(\) → useDayzEconomy\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Renderer Use Dayz File Editor"
Cohesion (entity basis within full-graph community): 0.14
Nodes (16): DayzFileBrowserHeader\(\), DayzFileEditorModal\(\), DayzFileGrid\(\), DayzFilesTab\(\), formatSize\(\), useDayzFileEditor\(\), handleFileClick\(\), handleSaveFile\(\) (+8 more)

### Community 1 - "Renderer Minecraft Hub"
Cohesion (entity basis within full-graph community): 0.3
Nodes (5): MinecraftHubContent\(\), MinecraftHubNavigation\(\), MinecraftHubTabContent\(\), MinecraftModpackPrompt\(\), MinecraftHubState

### Community 2 - "Main Steam Web API"
Cohesion (entity basis within full-graph community): 0.17
Nodes (4): exists\(\), DayzMissionManager, SteamWebAPI, .getModDependencies\(\)

### Community 3 - "Main Cache Manager"
Cohesion (entity basis within full-graph community): 0.43
Nodes (8): CacheManager, .clearCache\(\), .getCacheDir\(\), .getCacheSize\(\), calculateSize\(\), .getCategoryDir\(\), .getOrDownload\(\), .getSafeFilename\(\)

### Community 4 - "Main Ipc"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): registerCacheIpc\(\), registerAllIpcs\(\), registerLogIpc\(\), registerMinecraftIpc\(\), registerServerIpc\(\), registerSteamCMDIpc\(\), registerSystemIpc\(\)

### Community 5 - "Main Steam Cache"
Cohesion (entity basis within full-graph community): 0.6
Nodes (6): SteamCache, .copyFromCache\(\), .deleteCache\(\), .getCacheDir\(\), .isCached\(\), .sendLog\(\)

### Community 6 - "Renderer Dayz Hub"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzHubContent\(\), DayzHubNavigation\(\), DayzHubTabContent\(\), useDayzModDownloader\(\)

### Community 7 - "Renderer Dayz Mods Tab"
Cohesion (entity basis within full-graph community): 0.27
Nodes (6): DayzModsTab\(\), handleClickOutside\(\), DayzModsTabProps, useDayzModInstallation\(\), handleInstall\(\), handleUninstall\(\)

### Community 8 - "Main Db"
Cohesion (entity basis within full-graph community): 0.27
Nodes (6): createServer\(\), deleteServer\(\), getServers\(\), exists\(\), ServerLifecycleController, .register\(\)

### Community 9 - "Main Minecraft Player Manager"
Cohesion (entity basis within full-graph community): 0.39
Nodes (8): MinecraftPlayerManager, .clearOnlinePlayers\(\), .constructor\(\), .getOnlinePlayers\(\), .handlePlayerJoin\(\), .handlePlayerLeave\(\), .handleServerStop\(\), .sendPlayerUpdate\(\)

### Community 10 - "Renderer Hub Router"
Cohesion (entity basis within full-graph community): 0
Nodes (2): getGameImageUrl\(\), isGameSupported\(\)

### Community 11 - "Main Dayz Mod Installer"
Cohesion (entity basis within full-graph community): 0.43
Nodes (7): DayzModInstaller, .importLocalWorkshop\(\), .installMod\(\), .installMods\(\), .selectWorkshopFolder\(\), .uninstallMod\(\), exists\(\)

### Community 12 - "Main Dayz Process Manager"
Cohesion (entity basis within full-graph community): 0.48
Nodes (7): DayzProcessManager, .constructor\(\), .sendCommand\(\), .sendLog\(\), .sendPlayerUpdate\(\), .start\(\), .stop\(\)

### Community 13 - "Main Minecraft Downloader"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): MinecraftDownloader, .getFabricVersions\(\), .getForgeVersions\(\), .getLoaderVersions\(\), .getNeoForgeVersions\(\), .getPaperVersions\(\), .getVanillaVersions\(\)

### Community 14 - "Renderer Minecraft Hub Header"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): MinecraftHubHeader\(\), handleTunnel\(\), TunnelModal\(\), UiStore

### Community 15 - "Renderer Use Dayz Mod Import"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): useDayzModImport\(\), handleBrowseWorkshop\(\), handleImportWorkshop\(\), useDayzMods\(\), loadInstalledMods\(\)

### Community 16 - "Main App"
Cohesion (entity basis within full-graph community): 0.33
Nodes (3): setupAppPostload\(\), setupAppPreload\(\), initializeLogger\(\)

### Community 17 - "Renderer Create Server Modal"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): CreateServerModal\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\), handleCreateServer\(\)

### Community 18 - "Renderer Dayz Options Tab"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): CustomNumberInput\(\), CustomSelect\(\), handleClickOutside\(\), DayzOptionsTab\(\)

### Community 19 - "Renderer Use Dayz Mod Rebuild"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzInstalledModsHeaderPanel\(\), useDayzModRebuild\(\), executeRebuildLoadOrder\(\), handleRebuildLoadOrder\(\)

### Community 20 - "Main File Tailer"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): FileTailer, .constructor\(\), .stop\(\), IFileTailer

### Community 21 - "Renderer Error Boundary"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): Component, ErrorBoundary, .componentDidCatch\(\), .getDerivedStateFromError\(\), .handleReset\(\), .render\(\)

### Community 22 - "Main Minecraft Mod Manager"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): MinecraftModManager, .deleteMod\(\), .getInstalledMods\(\), .installCurseforgeMod\(\), .installCurseforgeModpack\(\)

### Community 23 - "Main Playit Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): PlayitAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 24 - "Renderer Use Dayz Mod Uninstall"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): useDayzModUninstall\(\), executeUninstall\(\), executeUninstallAll\(\), handleUninstall\(\), handleUninstallAll\(\)

### Community 25 - "Renderer Use Minecraft Mods"
Cohesion (entity basis within full-graph community): 0.47
Nodes (6): useMinecraftMods\(\), fetchMods\(\), handleDeleteMod\(\), handleInstallMod\(\), installWithDeps\(\), handleSearchMods\(\)

### Community 26 - "Renderer Use Minecraft Players"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): useMinecraftPlayers\(\), fetchInv\(\), handleAddPlayer\(\), handleRemovePlayer\(\), loadPlayers\(\), sendPlayerCommand\(\)

### Community 27 - "Renderer Backups Tab"
Cohesion (entity basis within full-graph community): 0.33
Nodes (4): BackupsTab\(\), formatBytes\(\), handleRestore\(\), BackupsTabProps

### Community 28 - "Main Dayz Adapter"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzAdapter, .constructor\(\), .start\(\), .stop\(\)

### Community 29 - "Main Dayz Config Manager"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): DayzConfigManager, .ensureDefaultConfig\(\), .exists\(\), .readConfig\(\), .writeConfig\(\)

### Community 30 - "Main Dayz Log Parser"
Cohesion (entity basis within full-graph community): 0.4
Nodes (5): DayzLogParser, .cleanup\(\), .constructor\(\), .parseLogLine\(\), .setupLogWatcher\(\)

### Community 31 - "Main Frp Adapter"
Cohesion (entity basis within full-graph community): 0.6
Nodes (5): FrpAdapter, .constructor\(\), .sendLog\(\), .start\(\), .stop\(\)

### Community 32 - "Renderer Players Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (2): PlayersTabProps, PlayerStore

### Community 33 - "Main Steam Cmd Setup"
Cohesion (entity basis within full-graph community): 0.8
Nodes (5): SteamCMDSetup, .ensureInstalled\(\), .getExePath\(\), .getSteamCMDDir\(\), .sendLog\(\)

### Community 34 - "Main Steam Workshop Downloader"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): SteamWorkshopDownloader, .downloadWorkshopItem\(\), .downloadWorkshopItems\(\), .sendInput\(\)

### Community 35 - "Renderer Top Navbar"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): formatBytes\(\), getGameThemeColor\(\), TopNavbar\(\), handleClearCache\(\)

### Community 36 - "Renderer Use Create Server Data"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useCreateServerData\(\), fetchLoaderVersions\(\), fetchModpacks\(\), fetchVersions\(\)

### Community 37 - "Main Wake Proxy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): WakeProxy, .constructor\(\), .startListening\(\), .stopListening\(\)

### Community 38 - "Main Curse Forge API Client"
Cohesion (entity basis within full-graph community): 1
Nodes (2): CurseForgeApiClient, .getCurseforgeFile\(\)

### Community 39 - "Renderer Use Log Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): LogMessage, LogStore

### Community 40 - "Renderer Dayz Dependency Result Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzDependencyResultModal\(\), DayzModals\(\)

### Community 41 - "Main Dayz Economy Manager"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): DayzEconomyManager, .getEconomy\(\), .updateEconomy\(\), .wipeLoot\(\)

### Community 42 - "Renderer Dayz Pending Download Card"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzPendingDownloadCard\(\), DayzPendingDownloadCardProps

### Community 43 - "Renderer Dayz Installed Mods Grid Panel"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzInstalledModsGridPanel\(\), openWorkshopPage\(\), DayzInstalledModsTab\(\)

### Community 44 - "Main Dayz Mod Graph"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzModGraph, .resolveMods\(\)

### Community 45 - "Renderer Delete Confirmation Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DeleteConfirmationModal\(\), confirmDeleteServer\(\)

### Community 46 - "Renderer Files Tab"
Cohesion (entity basis within full-graph community): 0
Nodes (3): FileInfo, FilesTabProps, formatSize\(\)

### Community 47 - "Main Window"
Cohesion (entity basis within full-graph community): 1
Nodes (2): createWindow\(\), setupWindowLifecycle\(\)

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

### Community 52 - "Main Radmin Vpn Adapter"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): RadminVpnAdapter, .constructor\(\), .getIp\(\)

### Community 53 - "Renderer Settings Modal"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SettingsModal\(\), copyToClipboard\(\), loadLogs\(\)

### Community 54 - "Main Steam Auth"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): SteamAuth, .getLoginArgs\(\), .isSteamGuardPrompt\(\)

### Community 55 - "Renderer Use Dayz Economy"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzEconomy\(\), handleMultiplierChange\(\), handleSave\(\), loadEconomy\(\)

### Community 56 - "Renderer Use Dayz Missions"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzMissions\(\), handleDownloadMission\(\), handleExtractLocalMission\(\)

### Community 57 - "Renderer Use Dayz Mod Dependencies"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): useDayzModDependencies\(\), executeMissingDepsInstall\(\), handleCheckDependencies\(\), handleInstallDependencies\(\)

### Community 58 - "Renderer Use Dayz Mod Search"
Cohesion (entity basis within full-graph community): 0.67
Nodes (4): useDayzModSearch\(\), handleCategoryChange\(\), handleSearch\(\), stripBBCode\(\)

### Community 59 - "Renderer Use Dayz Mod Status"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzModStatus\(\), handleToggleMap\(\), handleToggleModStatus\(\)

### Community 60 - "Renderer Use Dayz Vpp Admins"
Cohesion (entity basis within full-graph community): 0.5
Nodes (4): useDayzVppAdmins\(\), handleAddAdmin\(\), handleRemoveAdmin\(\), loadAdmins\(\)

### Community 61 - "Renderer Use Dayz Vpp Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useDayzVppConfig\(\), handleToggleDisablePassword\(\), loadConfig\(\)

### Community 62 - "Renderer App"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): App\(\), checkCache\(\), GlobalModalManager\(\)

### Community 63 - "Renderer Background Worker"
Cohesion (entity basis within full-graph community): 0
Nodes (2): compileShader\(\), render\(\)

### Community 64 - "Renderer Backups Tab — Handle"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): fetchBackups\(\), handleCreate\(\), handleDelete\(\)

### Community 65 - "Renderer Dashboard Hub"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DashboardHub\(\), DayzModStatus\(\)

### Community 66 - "Renderer Dayz Hub Header"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzHubHeader\(\), handleRadminClick\(\)

### Community 67 - "Renderer Dayz Installed Mod Card"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzInstalledModCard\(\), DayzInstalledModCardProps

### Community 68 - "Main Dayz Mod Status Manager"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DayzModStatusManager, .rebuildModDependencies\(\), .toggleModStatus\(\)

### Community 69 - "Main Dayz Mod Status Manager — Exists"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .getInstalledMods\(\), .toggleMapMod\(\), exists\(\)

### Community 70 - "Renderer Dayz Vpp Admin Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzVppAdminTab\(\), DayzVppSuperAdminsPanel\(\)

### Community 71 - "Renderer Dayz Vpp Super Admins Panel"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzVppSuperAdminsPanelProps

### Community 72 - "Renderer Error Boundary — Boundary"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Props, State

### Community 73 - "Main File System Controller"
Cohesion (entity basis within full-graph community): 0
Nodes (2): exists\(\), getServerPath\(\)

### Community 74 - "Main File Tailer — File"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .pollForFile\(\), checkFile\(\), .start\(\)

### Community 75 - "Main System Ipc"
Cohesion (entity basis within full-graph community): 1
Nodes (1): exists\(\)

### Community 76 - "Main Java Manager — TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 77 - "Renderer List View Icon"
Cohesion (entity basis within full-graph community): 0
Nodes (2): ListViewIcon\(\), ListViewIconProps

### Community 78 - "Renderer Main Layout"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MainLayout\(\), MainLayoutProps

### Community 79 - "Main Minecraft Command Builder"
Cohesion (entity basis within full-graph community): 1
Nodes (3): MinecraftCommandBuilder, .buildCommand\(\), .parseRunBat\(\)

### Community 80 - "Main Minecraft Controller"
Cohesion (entity basis within full-graph community): 1
Nodes (1): MinecraftController

### Community 81 - "Main Minecraft Downloader — Download"
Cohesion (entity basis within full-graph community): 1
Nodes (2): exists\(\), .downloadServerJar\(\)

### Community 82 - "Main Minecraft Process Manager — Send"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): .sendCommand\(\), .sendLog\(\), .start\(\)

### Community 83 - "Renderer Mods Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ModsTabProps

### Community 84 - "Renderer Motion Faqs Accordion"
Cohesion (entity basis within full-graph community): 0
Nodes (2): MotionAccordionItem, MotionAccordionProps

### Community 85 - "Renderer Motion Faqs Accordion — Accordion"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): AccordionItem\(\), MotionAccordion\(\), toggle\(\)

### Community 86 - "Renderer Options Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OptionsTabProps

### Community 87 - "Renderer Setup Tests"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 88 - "Renderer Software Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): SoftwareTabProps

### Community 89 - "Main Steam Downloader"
Cohesion (entity basis within full-graph community): 1
Nodes (3): SteamDownloader, .installApp\(\), .updateCache\(\)

### Community 90 - "Renderer Steam Login Modal"
Cohesion (entity basis within full-graph community): 1
Nodes (2): SteamLoginModal\(\), handleUpdateSteamCache\(\)

### Community 91 - "Renderer Use Dayz Installed Mods"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzInstalledMods\(\), loadInstalledMods\(\)

### Community 92 - "Renderer Use Modal Store"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ModalStore

### Community 93 - "Renderer Use Dayz Mod Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DayzModStore, PendingDownload

### Community 94 - "Renderer Use Dayz Options"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useDayzOptions\(\), loadConfig\(\)

### Community 95 - "Renderer Use Dayz Options — Replace"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): handleSave\(\), replaceNumber\(\), replaceString\(\)

### Community 96 - "Renderer Use Dayz Options — Extract"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): parseConfig\(\), extractNumber\(\), extractString\(\)

### Community 97 - "Renderer Use Ipc Listeners"
Cohesion (entity basis within full-graph community): 1
Nodes (2): useIpcListeners\(\), fetchServers\(\)

### Community 98 - "Renderer Use Minecraft Config"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftConfig\(\), handleSaveConfig\(\), loadConfig\(\)

### Community 99 - "Renderer Use Minecraft Software"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): useMinecraftSoftware\(\), fetchLoaderVersions\(\), fetchVersions\(\)

### Community 100 - "Renderer Use Server Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Server, ServerStore

### Community 101 - "Renderer Use Stats Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): StatPoint, StatsStore

### Community 102 - "Renderer Use Toast Store"
Cohesion (entity basis within full-graph community): 0
Nodes (2): Toast, ToastStore

### Community 103 - "Renderer Console Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): ConsoleTabProps

### Community 104 - "Main Curse Forge API Client — Curseforge"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getCurseforgeMod\(\), .getModpackDetails\(\)

### Community 105 - "Main Curse Forge API Client — Search"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .searchCurseforgeMods\(\), .searchModpacks\(\)

### Community 106 - "Main Dayz Config Manager — Dayz"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 107 - "Main Dayz Controller"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzController, .register\(\)

### Community 108 - "Renderer Dayz Economy Tab"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 109 - "Renderer Dayz Economy Tab — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): DayzEconomyTab\(\), renderSlider\(\)

### Community 110 - "Main Dayz Mission Manager"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .extractLocalMission\(\), exists\(\)

### Community 111 - "Main Dayz Mission Manager — Dayz"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .fetchDayzMission\(\), findFolder\(\)

### Community 112 - "Main Db — Register"
Cohesion (entity basis within full-graph community): 1
Nodes (2): updateServerSoftware\(\), .register\(\)

### Community 113 - "Main File System Controller — Controller"
Cohesion (entity basis within full-graph community): 1
Nodes (2): FileSystemController, .register\(\)

### Community 114 - "Main File Tailer — File \(2\)"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .readNewLogs\(\), .tailLogFile\(\)

### Community 115 - "Renderer Game Backgrounds"
Cohesion (entity basis within full-graph community): 1
Nodes (1): GameBackgrounds\(\)

### Community 116 - "Renderer Hub Router — Hub"
Cohesion (entity basis within full-graph community): 1
Nodes (2): HubLoader\(\), HubRouter\(\)

### Community 117 - "Preload Index D"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Window

### Community 118 - "Renderer Overview Tab"
Cohesion (entity basis within full-graph community): 1
Nodes (1): OverviewTabProps

### Community 119 - "Main Radmin Vpn Adapter — Install"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .install\(\), .sendLog\(\)

### Community 120 - "Main Radmin Vpn Adapter — Installed"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .isInstalled\(\), .open\(\)

### Community 121 - "Refactor Minecraft"
Cohesion (entity basis within full-graph community): 1
Nodes (1): extract\(\)

### Community 122 - "Renderer Renderer Logger"
Cohesion (entity basis within full-graph community): 1
Nodes (1): setupRendererLogger\(\)

### Community 123 - "Main Steam Web API — Workshop"
Cohesion (entity basis within full-graph community): 1
Nodes (2): .getWorkshopItemDetails\(\), .searchWorkshop\(\)

### Community 124 - "Renderer Use Dayz Hub Store"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DayzHubState

### Community 125 - "Renderer Versions"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Versions\(\)

### Community 126 - "Electron Vite Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 127 - "Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 128 - "File Tailer Test TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 129 - "Main TSX"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 130 - "Minecraft SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 131 - "Postcss Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 132 - "Tailwind Config Js"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 133 - "Vitest Config TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 134 - "Vitest Workspace TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 135 - "Wavy Lines SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **222 weakly connected node(s):** `.constructor\(\)`, `.constructor\(\)`, `.getModDependencies\(\)`, `Window`, `Versions\(\)` (+217 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Renderer Console Tab`** (2 nodes): `ConsoleTab.tsx`, `ConsoleTabProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
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
- **Thin community `Main Dayz Mission Manager`** (2 nodes): `.extractLocalMission\(\)`, `exists\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Dayz Mission Manager — Dayz`** (2 nodes): `.fetchDayzMission\(\)`, `findFolder\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Db — Register`** (2 nodes): `updateServerSoftware\(\)`, `.register\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main File System Controller — Controller`** (2 nodes): `FileSystemController`, `.register\(\)`
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
- **Thin community `Main Steam Web API — Workshop`** (2 nodes): `.getWorkshopItemDetails\(\)`, `.searchWorkshop\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Use Dayz Hub Store`** (2 nodes): `useDayzHubStore.ts`, `DayzHubState`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Versions`** (2 nodes): `Versions.tsx`, `Versions\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Electron Vite Config TypeScript`** (1 nodes): `electron.vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Env D TypeScript`** (1 nodes): `env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `File Tailer Test TypeScript`** (1 nodes): `FileTailer.test.ts`
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

- **Why does \`useDayzInstalledMods\(\)\` connect \`Renderer Use Dayz Installed Mods\` to \`Renderer Dayz Vpp Admin Tab\`, \`Renderer Dayz Pending Download Card\`, \`Renderer Dayz Installed Mods Grid Panel\`, \`Renderer Use Dayz Mod Rebuild\`?**
  _High betweenness centrality \(5346.551\) - this node is a cross-community bridge._
- **Why does \`MinecraftPlayerManager\` connect \`Main Minecraft Player Manager\` to \`Main Minecraft Stats Service\`, \`Main Minecraft Config Manager\`?**
  _High betweenness centrality \(3347.000\) - this node is a cross-community bridge._
- **What connects \`.constructor\(\)\`, \`.constructor\(\)\`, \`.getModDependencies\(\)\` to the rest of the system?**
  _222 weakly-connected nodes found - possible documentation gaps or missing edges._
