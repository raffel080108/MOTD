declare interface ABp_StartMenu_PlayerController_C extends AFSDPlayerControllerBase {
    readonly __static_ABp_StartMenu_PlayerController_C: {
        StartObjectPreloads(): void;
        ShowLoginSpinner(): void;
        RemoveActiveScreen(): void;
        CanShowInfoScreen(): boolean;
        Cleanup(): void;
        ShowJoinSessionUi(): void;
        ShowJoinInviteUi(AllowCancel: boolean): void;
        OnLoaded_D00A9C664A036E668491DDABF59E4161(Loaded: UObject): void;
        OnLoaded_D00A9C664A036E668491DDAB028A609E(Loaded: UObject): void;
        OnLoaded_D00A9C664A036E668491DDABBD7848BF(Loaded: UObject): void;
        InpActEvt_AnyKey_K2Node_InputKeyEvent_0(Key: FKey): void;
        OnFailure_A64EBA1647E90DBDF8B6D99030E3E0D5(): void;
        OnSuccess_A64EBA1647E90DBDF8B6D99030E3E0D5(): void;
        OnLoaded_5BEC96E84FBD6958EFD47D9A09FD96A9(Loaded: UClass): void;
        OnNotFound_0321386A4FF1B31965D5008F0F5F5A33(): void;
        OnFailure_0321386A4FF1B31965D5008F0F5F5A33(): void;
        OnSuccess_0321386A4FF1B31965D5008F0F5F5A33(Lobby: FServerListLobby): void;
        OnLoaded_D00A9C664A036E668491DDAB4A6C6940(Loaded: UObject): void;
        ReceiveBeginPlay(): void;
        PressStart(): void;
        OnInfoScreenClosed(Screen: UUI_InfoScreen_C): void;
        ReceiveTick(DeltaSeconds: number): void;
        OnDisconnectScreenClosed(): void;
        AttemptReconnect(Yes: boolean): void;
        ShowStartScreen(): void;
        OnTrailerCompleted(): void;
        ShowDisconnectScreen(): void;
        ShowPrompts(): void;
        ShowInfoScreen(): void;
        PlayNarrativeVideo(): void;
        ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
        ExecuteUbergraph_Bp_StartMenu_PlayerController(EntryPoint: number): void;
    };
    readonly __properties_ABp_StartMenu_PlayerController_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        StartScreen: UUI_StartScreen_C;
        ActiveScreen: UWidget;
        JoinWidget: UWND_Joining_C;
        AcceptInput: boolean;
        Disconnect: UUI_Disconnect_Screen_Base_C;
        Joining: boolean;
        SignInGate: boolean;
        SpawnedParticles: UNiagaraComponent[];
        RamrodLevel: TSoftObjectPtr<UWorld>;
        TutorialLevel: TSoftObjectPtr<UWorld>;
        RejoinLobby: FServerListLobby;
        HaveFinishedLogin: boolean;
        IsReadyForJoin: boolean;
    };
    readonly __staticRegistry: 
        ABp_StartMenu_PlayerController_C['__static_ABp_StartMenu_PlayerController_C'] &
        AFSDPlayerControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ABp_StartMenu_PlayerController_C['__properties_ABp_StartMenu_PlayerController_C'] &
        AFSDPlayerControllerBase['__propertyRegistry'];
}

