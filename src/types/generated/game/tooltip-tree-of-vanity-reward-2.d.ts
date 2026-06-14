declare interface UTOOLTIP_TreeOfVanity_Reward_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Title: UTextBlock;
    TextBlock_Description: UTextBlock;
    TextBlock_Category: UTextBlock;
    Text_Count: UTextBlock;
    Text_Cost: UTextBlock;
    Overlay_Skin: UOverlay;
    ITM_Season_RewardImageSingle: UITM_Season_RewardImageSingle_C;
    Image_CurrencyIcon: UImage;
    Image_Background: UImage;
    HorizontalBox_Cost: UHorizontalBox;
    BottomSlot: UNamedSlot;
    BelowTooltipSlot: UNamedSlot;
    Intro: UWidgetAnimation;
    Reward: UReward;
    SetInfo(InTitle: FText, InCategory: FText, InDescription: FText, InCharacterID: UPlayerCharacterID, inShowIcon: boolean): void;
    SetData(DynMat: UMaterialInstanceDynamic, Reward: UReward, ShowCost: boolean, Cost: number, CanAfford: boolean): void;
    SetCount(count: number): void;
    SetDataFromReward(Reward: UReward, ShowCost: boolean, Cost: number, CanAfford: boolean): void;
    setup(ShowCost: boolean, Cost: number, CanAfford: boolean): void;
    ExecuteUbergraph_TOOLTIP_TreeOfVanity_Reward(EntryPoint: number): void;
}
declare const UTOOLTIP_TreeOfVanity_Reward_C: UTOOLTIP_TreeOfVanity_Reward_C;

