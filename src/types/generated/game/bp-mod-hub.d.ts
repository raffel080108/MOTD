declare interface ABP_ModHub_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    LocalPlayer: APlayerController;
    FriendlyLevels: TArray<FString>;
    HubWidget: UUI_ModHub_C;
    ToastWidget: UUI_Toaster_C;
    SavePath: FString;
    Settings: USAV_Settings_C;
    InitModName: FString;
    RegisteredMods: TArray<TScriptInterface<IIUserMod_C>>;
    IsHubOpen(): boolean;
    GetModsList(Mods: TArray<TScriptInterface<IIUserMod_C>>): void;
    SaveSettings(): void;
    LoadSettings(): void;
    IsHubFriendlyLevel(): boolean;
    FindLocalPlayer(): APlayerController;
    InpActEvt_Ctrl_H_K2Node_InputKeyEvent_0(Key: FKey): void;
    OnLoaded_2642EDE34DF37D2564038E91520BF14A(Loaded: UClass): void;
    OnLoaded_9522209844540A0B9E45D4BB43EDC701(Loaded: UClass): void;
    ReceiveBeginPlay(): void;
    OpenPage(page: TScriptInterface<IIModPage_C>): void;
    OpenHub(): void;
    CloseHub(): void;
    ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
    SetupEvents(): void;
    Hub_OnOpened(): void;
    Hub_OnClosed(): void;
    RegisterMod(Mod: TScriptInterface<IIUserMod_C>): void;
    ShowNotification(Title: FText, Message: FText, DisplayTime: number): void;
    LoadMod(UserMod: TSoftClassPtr<AActor>): void;
    UnloadMod(RogueMod: TScriptInterface<IIUserMod_C>): void;
    ScanForMods(): void;
    LoadMods(): void;
    ExecuteUbergraph_BP_ModHub(EntryPoint: number): void;
}
declare const ABP_ModHub_C: ABP_ModHub_C;

