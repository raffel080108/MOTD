declare interface UWND_Season_RewardClaimed_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Unlocked: UTextBlock;
    TextBlock_Title: UTextBlock;
    TextBlock_Category: UTextBlock;
    Overlay_Skin: UOverlay;
    ITM_Season_RewardImageSingle: UITM_Season_RewardImageSingle_C;
    Image_SelectedArrow: UImage;
    Image_Background_Smoke: UImage;
    Image_Background_Black: UImage;
    Button_0: UButton;
    Border_Glow: UBorder;
    Basic_Menu_ColorBar_3: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar_2: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar_1: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    Intro: UWidgetAnimation;
    Zoom: UWidgetAnimation;
    Glow: UWidgetAnimation;
    Reward: UReward;
    OnWindowClose: FWND_Season_RewardClaimed_COnWindowClose;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    setup(): void;
    SetDataFromReward(Reward: UReward): void;
    ExecuteUbergraph_WND_Season_RewardClaimed(EntryPoint: number): void;
    OnWindowClose__DelegateSignature(): void;
}
declare const UWND_Season_RewardClaimed_C: UWND_Season_RewardClaimed_C;

