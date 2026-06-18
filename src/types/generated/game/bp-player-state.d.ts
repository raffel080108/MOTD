declare interface ABP_PlayerState_C extends AFSDPlayerState {
    readonly __static_ABP_PlayerState_C: {
        GetLoadingScreenSaluteVoice(): TSoftObjectPtr<USoundBase>;
        TryCloseServersEscapeMenu(): void;
        LogPlayerState(): void;
        ApplyUnlockFromPool(UnlockTag: UUnlockCollectionTag, SlotIndex: FItemSlotIndex, AmountOfUnlocks: number, ExcludedUnlocks: UBXEUnlockBase[]): void;
        ApplyLateJoinPlayerUnlocks(): void;
        SpawnPlayerForReJoin(): void;
        SpawnPlayerForLateJoin(IsDropPod: boolean): void;
        OnLoaded_AD94BCEE43721E4F4853BFADF4DE9400(Loaded: UClass): void;
        OnLateJoinFinished(): void;
        StartLateJoinSequence(): void;
        HideWaitMessage(): void;
        StartReJoinSequence(): void;
        CharacterSelected(): void;
        ShowWaitMessage(): void;
        ServerSpawnPlayerForLateJoin(): void;
        ServerSpawnPlayerForRejoin(): void;
        DebugTriggerLateJoinSequence(): void;
        DebugTriggerReJoinSequence(): void;
        ServerDebugTriggerLateJoinSequence(): void;
        ServerDebugTriggerReJoinSequence(): void;
        ServerApplyLateJoinPlayerUnlocks(): void;
        ShoutLateJoinForAll(IsDropPod: boolean): void;
        TriggerLateJoinStartForClient(): void;
        TriggerLateJoinStart(LateJoinStart: ALateJoinPlayerStart): void;
        ServerTriggerLoadingScreenSalute(): void;
        AllTriggerLoadingScreenSalute(Dialog: FDialogStruct, VoiceSettings: FDialogVoiceSettings): void;
        TriggerLoadingScreenSalute(): void;
        OnLoadingScreenSaluteLoaded(): void;
        ExecuteUbergraph_BP_PlayerState(EntryPoint: number): void;
    };
    readonly __properties_ABP_PlayerState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        PlayerResource: UPlayerResourceComponent;
        DefaultSceneRoot: USceneComponent;
        LateJoinFinished: boolean;
        IsShowingWaitMessage: boolean;
        WaitMessageWidgetClass: TSoftClassPtr<UUserWidget>;
        WaitMessageWidget: UUserWidget;
        LateJoinPlayerStart: ALateJoinPlayerStart;
        SaluteAsset: UDialogDataAsset;
        LoadingScreenDialog: FDialogStruct;
        LoadingScreenVoice: FDialogVoiceSettings;
        LoadingScreenSaluteSound: USoundBase;
    };
    readonly __staticRegistry: 
        ABP_PlayerState_C['__static_ABP_PlayerState_C'] &
        AFSDPlayerState['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_PlayerState_C['__properties_ABP_PlayerState_C'] &
        AFSDPlayerState['__propertyRegistry'];
}

