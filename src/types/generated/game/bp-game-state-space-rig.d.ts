declare interface ABP_GameState_SpaceRig_C extends ABP_GameState_C {
    readonly __static_ABP_GameState_SpaceRig_C: {
        IsGauntletRunAllowedToStart(CanStart: boolean): void;
        PlayHostStartShouts(): void;
        UpdateCountdownState(): void;
        DoesAllPlayersHaveCharacterClass(Return_Value: boolean): void;
        OnRep_HostCountdown(): void;
        OnRep_HostCountdownActive(): void;
        OnRep_MissionCountdown(): void;
        OnRep_MissionCountdownActive(): void;
        GetLaunchCountdownTime(CountdownSeconds: number): void;
        IsLaunchCountdownActive(IsActive: boolean): void;
        ReceiveTick(DeltaSeconds: number): void;
        StartMissionTimer(): void;
        StopMissionTimer(): void;
        StartHostTimer(): void;
        StopHostTimer(): void;
        CountDownCompleted(): void;
        ReceiveBeginPlay(): void;
        Search(): void;
        ManualRefreshServerlist(): void;
        Shout_Cooldown_Started(): void;
        CustomEvent(success: boolean): void;
        SetAscensionInProgress(InProgress: boolean): void;
        ExecuteUbergraph_BP_GameState_SpaceRig(EntryPoint: number): void;
        OnLaunchCountdownChanged__DelegateSignature(): void;
        OnServerListChanged__DelegateSignature(): void;
        OnCountdownCompleted__DelegateSignature(): void;
    };
    readonly __properties_ABP_GameState_SpaceRig_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        MissionCountdownActive: boolean;
        MissionCountdown: number;
        HostCountdownActive: boolean;
        HostCountdown: number;
        HostReady: boolean;
        OnCountdownCompleted: FBP_GameState_SpaceRig_COnCountdownCompleted;
        AllReady: boolean;
        OnServerListChanged: FBP_GameState_SpaceRig_COnServerListChanged;
        SearchingInProgress: boolean;
        ForceQuickJoinSearch: boolean;
        IsCountdownComplete: boolean;
        NeedsBroadcast: boolean;
        OnLaunchCountdownChanged: FBP_GameState_SpaceRig_COnLaunchCountdownChanged;
        AscensionInProgress: boolean;
        PromotionInProgress_Shout: UDialogDataAsset;
        GuantletUnavailable_Solo: UDialogDataAsset;
        GuantletUnavailable_Multiplayer: UDialogDataAsset;
    };
    readonly __staticRegistry: 
        ABP_GameState_SpaceRig_C['__static_ABP_GameState_SpaceRig_C'] &
        ABP_GameState_C['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_GameState_SpaceRig_C['__properties_ABP_GameState_SpaceRig_C'] &
        ABP_GameState_C['__propertyRegistry'];
}

