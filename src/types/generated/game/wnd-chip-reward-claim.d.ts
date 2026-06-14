declare interface UWND_ChipRewardClaim_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WND_RewardSplash_Container: UWND_RewardSplash_Container_C;
    Text_Amount: UTextBlock;
    Image_130: UImage;
    Intro: UWidgetAnimation;
    OnClaimed: FWND_ChipRewardClaim_COnClaimed;
    SetDataAndPlay(ChipAmount: number): void;
    BndEvt__WND_ChipRewardClaim_WND_RewardSplash_Container_K2Node_ComponentBoundEvent_0_OnClaimed__DelegateSignature(): void;
    ExecuteUbergraph_WND_ChipRewardClaim(EntryPoint: number): void;
    OnClaimed__DelegateSignature(ChipsClaimed: number): void;
}
declare const UWND_ChipRewardClaim_C: UWND_ChipRewardClaim_C;

