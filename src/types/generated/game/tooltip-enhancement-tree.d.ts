declare interface UTooltip_EnhancementTree_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VBox_ToV_Info: UVerticalBox;
    TOOLTIP_Season_Reward: UTOOLTIP_TreeOfVanity_Reward_C;
    Image_NotEnoughTokens: UImage;
    Claim_Progress: UProgressBar;
    TurnRed: UWidgetAnimation;
    State: ERewardTreeNodeState;
    PreConstruct(IsDesignTime: boolean): void;
    SetState(State: ERewardTreeNodeState): void;
    UpdateHoldTime(InPercent: number): void;
    PlayNotEnoughTokens(): void;
    ExecuteUbergraph_Tooltip_EnhancementTree(EntryPoint: number): void;
}
declare const UTooltip_EnhancementTree_C: UTooltip_EnhancementTree_C;

