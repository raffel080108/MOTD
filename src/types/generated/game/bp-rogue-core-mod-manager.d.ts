declare interface ABP_RogueCoreModManager_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    LocalPlayerController: APlayerController;
    saveFileName: FString;
    Data: URogueCoreModManager_SaveData_C;
    modManagerConfigUI: UWBP_ModManagerConfigUI_C;
    settingPage: UWBP_SettingPage_C;
    notificationUI: UWBP_NotificationUI_C;
    ActionName: FName;
    loadedMods: TSet<AActor>;
    GetModUI(modUI: TArray<TScriptInterface<IBPI_RCModUI_C>>): void;
    GetModInfo(modName: FText, modAnthor: FText, modVersion: FText): void;
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
}
declare const ABP_RogueCoreModManager_C: ABP_RogueCoreModManager_C;

