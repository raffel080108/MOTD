declare interface UMENU_GauntletChallengeTerminal_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SeedTimeText: UTextBlock;
    MENU_SpaceRigTemplate: UMENU_SpaceRigTemplate_C;
    Gradient: UImage;
    ChallengeWidgetNormal: UMENU_GauntletChallengeWidget_C;
    ChallengeWidgetElite: UMENU_GauntletChallengeWidget_C;
    Background: UImage;
    AscensionLock: UOverlay;
    FadeInAnimation: UWidgetAnimation;
    HaveFetchedSeed: boolean;
    FetchedSeed: FChallengeModeSeedResponse;
    IsFetchingSeed: boolean;
    UpdateAll(): void;
    UpdateButtons(): void;
    UpdateAnimation(): void;
    UpdateSeedTime(): void;
    UpdateStages(): void;
    ConstructServerListFilter(ServerListFilter: FFSDServerListFilter): void;
    OnRequestedHostRun(Run: FGeneratedRunForBiome, HostType: EOnlineSessionType): void;
    GetSpacerigController(SpaceRigController: ABP_PlayerController_SpaceRig_C): void;
    OnFailure_F151BBA54CF6E5F68C1B05AFE27967A5(): void;
    OnSuccess_F151BBA54CF6E5F68C1B05AFE27967A5(): void;
    OnFailure_4A5A32034EB6A4E715F4F195890389EC(): void;
    OnSuccess_4A5A32034EB6A4E715F4F195890389EC(Response: FChallengeModeSeedResponse): void;
    OnShown(): void;
    StartSeedFetch(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    OnClosed(): void;
    BndEvt__MENU_WeeklyChallengeTerminal_ChallengeWidgetNormal_K2Node_ComponentBoundEvent_0_RequestClose__DelegateSignature(): void;
    BndEvt__MENU_WeeklyChallengeTerminal_ChallengeWidgetElite_K2Node_ComponentBoundEvent_1_RequestClose__DelegateSignature(): void;
    UpdateAscensionLock(): void;
    ExecuteUbergraph_MENU_GauntletChallengeTerminal(EntryPoint: number): void;
}
declare const UMENU_GauntletChallengeTerminal_C: UMENU_GauntletChallengeTerminal_C;

