declare interface ABP_RogueCoreModManager_C extends AActor {
    readonly __static_ABP_RogueCoreModManager_C: {
        GetModUI(modUI: TScriptInterface<IBPI_RCModUI_C>[]): void;
        GetModInfo(modName: string, modAnthor: string, modVersion: string): void;
        CloseModManager(): void;
        OpenModManager(): void;
        Save(): void;
        LoadSelf(): void;
        IsModLoaded(Object: AActor): boolean;
        LoadMods(): void;
        ResetManagerKeybinding(NewKey: FInputChord): void;
        LoadModData(): void;
        GetLocalController(): APlayerController;
        InpActEvt_OpenManagerUI_K2Node_InputActionEvent_0(Key: FKey): void;
        OnManagerOpened(): void;
        OnInitialise(modManager: TScriptInterface<IBPI_RCModManager_C>, LocalPlayerController: APlayerController): void;
        ReceiveBeginPlay(): void;
        SaveModData(): void;
        ManagerOpened(): void;
        ManagerClosed(): void;
        OpenUI(): void;
        CloseUI(): void;
        OnManagerClosed(): void;
        ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
        ReceiveDestroyed(): void;
        ExecuteUbergraph_BP_RogueCoreModManager(EntryPoint: number): void;
    };
    readonly __properties_ABP_RogueCoreModManager_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
        LocalPlayerController: APlayerController;
        saveFileName: string;
        Data: URogueCoreModManager_SaveData_C;
        modManagerConfigUI: UWBP_ModManagerConfigUI_C;
        settingPage: UWBP_SettingPage_C;
        notificationUI: UWBP_NotificationUI_C;
        ActionName: string;
        loadedMods: AActor[];
    };
    readonly __staticRegistry: 
        ABP_RogueCoreModManager_C['__static_ABP_RogueCoreModManager_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_RogueCoreModManager_C['__properties_ABP_RogueCoreModManager_C'] &
        AActor['__propertyRegistry'];
}

