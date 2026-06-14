declare interface UWBP_IntelObjective_BoxWrapper_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_IntelObjective: UWBP_IntelObjective_C;
    HoverBackground: UBorder;
    HoverBackgroundFade: UWidgetAnimation;
    OnRequestClaimObjective: FWBP_IntelObjective_BoxWrapper_COnRequestClaimObjective;
    IsPlayingFoldoutAnimation: boolean;
    OnHasBecomeClaimable: FWBP_IntelObjective_BoxWrapper_COnHasBecomeClaimable;
    NotifyPointsChanged(): void;
    NotifyChallengeClaimed(ClaimedChallenge: TSubclassOf<UIntelChallenge>): void;
    NotifyObjectiveClaimed(ClaimedObjective: UIntelObjective): void;
    UpdateHoverBackground(): void;
    TryUpdateHoverBackground(): void;
    SetObjective(PreviousObjective: UIntelObjective, Objective: UIntelObjective, NextObjective: UIntelObjective): void;
    GetObjective(Objective: UIntelObjective): void;
    Construct(): void;
    BndEvt__ITM_IntelObjective_Item_ITM_IntelObjective_K2Node_ComponentBoundEvent_2_OnRequestClaimObjective__DelegateSignature(Objective: UIntelObjective): void;
    BndEvt__ITM_IntelObjective_Item_ITM_IntelObjective_K2Node_ComponentBoundEvent_4_OnHoverBackgroundChanged__DelegateSignature(): void;
    BndEvt__WBP_IntelObjective_Item_ITM_IntelObjective_K2Node_ComponentBoundEvent_0_OnHasBecomeClaimable__DelegateSignature(): void;
    ExecuteUbergraph_WBP_IntelObjective_BoxWrapper(EntryPoint: number): void;
    OnHasBecomeClaimable__DelegateSignature(Objective: UIntelObjective): void;
    OnRequestClaimObjective__DelegateSignature(Objective: UIntelObjective): void;
}
declare const UWBP_IntelObjective_BoxWrapper_C: UWBP_IntelObjective_BoxWrapper_C;

