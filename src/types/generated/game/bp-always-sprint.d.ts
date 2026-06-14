declare interface ABP_AlwaysSprint_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    DefaultSceneRoot: USceneComponent;
    playerRef: APlayerCharacter;
    playerControllerRef: AFSDPlayerController;
    inventoryComponentRef: UInventoryComponent;
    userSettingsRef: UFSDGameUserSettings;
    firingMiningCount: number;
    bIsFiringMining: boolean;
    delayTimerHandle: FTimerHandle;
    bIsOnSpaceRig: boolean;
    GetModPages(Pages: TArray<TScriptInterface<IIModPage_C>>): void;
    GetModInfo(Name: FText, Author: FText, Version: FText, ShowInModsList: boolean): void;
    InpActEvt_Mine_K2Node_InputActionEvent_3(Key: FKey): void;
    InpActEvt_Mine_K2Node_InputActionEvent_2(Key: FKey): void;
    InpActEvt_Fire_K2Node_InputActionEvent_1(Key: FKey): void;
    InpActEvt_Fire_K2Node_InputActionEvent_0(Key: FKey): void;
    OnHubClosed(): void;
    OnHubOpened(): void;
    OnModClosed(): void;
    OnModOpened(): void;
    InpAxisEvt_MoveForward_K2Node_InputAxisEvent_0(AxisValue: number): void;
    Pressed(): void;
    Released(): void;
    Wait(): void;
    InpAxisEvt_MoveForwardRate_K2Node_InputAxisEvent_1(AxisValue: number): void;
    Reset(PlayerCharacter: APlayerCharacter): void;
    OnModLoaded(ModHub: TScriptInterface<IIModHub_C>, LocalPlayer: APlayerController): void;
    ExecuteUbergraph_BP_AlwaysSprint(EntryPoint: number): void;
}
declare const ABP_AlwaysSprint_C: ABP_AlwaysSprint_C;

