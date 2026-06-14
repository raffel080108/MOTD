declare interface UWBP_RunMap_ClaimObjectivePopup_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SplashContainer: UWND_RewardSplash_Container_C;
    ObjectiveTitle: UTextBlock;
    ObjectiveIcon: UWBP_IntelObjective_Icon_C;
    ObjectiveDescription: UTextBlock;
    Intro: UWidgetAnimation;
    Outro: UWidgetAnimation;
    Objective: UIntelObjective;
    OnRequestClaimObjective: FWBP_RunMap_ClaimObjectivePopup_COnRequestClaimObjective;
    UpdateDescription(): void;
    UpdateIcon(): void;
    UpdateTitle(): void;
    ShowObjective(ObjectiveToShow: UIntelObjective): void;
    Finished_34B9F5184B127C359C4BFFBE69E1A088(): void;
    BndEvt__WND_ChipRewardClaim_WND_RewardSplash_Container_K2Node_ComponentBoundEvent_0_OnClaimed__DelegateSignature(): void;
    PlayIntroduction(): void;
    Construct(): void;
    ExecuteUbergraph_WBP_RunMap_ClaimObjectivePopup(EntryPoint: number): void;
    OnRequestClaimObjective__DelegateSignature(Objective: UIntelObjective): void;
}
declare const UWBP_RunMap_ClaimObjectivePopup_C: UWBP_RunMap_ClaimObjectivePopup_C;

