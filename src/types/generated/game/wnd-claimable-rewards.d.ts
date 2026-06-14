declare interface UWND_ClaimableRewards_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RewardView: UUI_ClaimableRewards_View_C;
    ContinueButton: UBasic_ButtonScalable2_C;
    CloseAnimation: UWidgetAnimation;
    AudioSpeak: UAudioComponent;
    Data: FClaimableRewardView;
    GetData(OutData: FClaimableRewardView): void;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    Finished_0EFF461C4382E9453AFE958BF246DE9B(): void;
    OnShown(): void;
    BndEvt__RewardView_K2Node_ComponentBoundEvent_1_OnRewardsClaimed__DelegateSignature(): void;
    DoClose(): void;
    BndEvt__ContinueButton_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WND_ClaimableRewards(EntryPoint: number): void;
}
declare const UWND_ClaimableRewards_C: UWND_ClaimableRewards_C;

