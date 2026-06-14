declare interface UMENU_GauntletChallengeWidget_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_Stages: UUI_LoadingScreen_StageStatus_C;
    TitleText: UTextBlock;
    BTN_Solo: UBasic_ButtonScalable2_C;
    BTN_Join: UBasic_ButtonScalable2_C;
    BTN_HostPublic: UBasic_ButtonScalable2_C;
    BTN_HostPrivate: UBasic_ButtonScalable2_C;
    FadeInAnimation: UWidgetAnimation;
    Run: FGeneratedRunForBiome;
    RequestClose: FMENU_GauntletChallengeWidget_CRequestClose;
    IsElite: boolean;
    UpdateButtons(): void;
    UpdateStages(): void;
    ConstructServerListFilter(ServerListFilter: FFSDServerListFilter): void;
    OnRequestedHostRun(Run: FGeneratedRunForBiome, HostType: EOnlineSessionType): void;
    GetSpacerigController(SpaceRigController: ABP_PlayerController_SpaceRig_C): void;
    SetRun(Run: FGeneratedRunForBiome): void;
    OnFailure_10559D7F48BA2A6F2620F1AEE323285A(): void;
    OnSuccess_10559D7F48BA2A6F2620F1AEE323285A(): void;
    BndEvt__BTN_Join_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__BTN_Host_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    BndEvt__BTN_Solo_K2Node_ComponentBoundEvent_2_OnClicked__DelegateSignature(): void;
    BndEvt__BTN_HostPublic_K2Node_ComponentBoundEvent_48_OnClicked__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_MENU_GauntletChallengeWidget(EntryPoint: number): void;
    RequestClose__DelegateSignature(): void;
}
declare const UMENU_GauntletChallengeWidget_C: UMENU_GauntletChallengeWidget_C;

