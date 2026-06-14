declare interface UTooltip_TreeOfVanityReward_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VBox_ToV_Info: UVerticalBox;
    TOOLTIP_Season_Reward: UTOOLTIP_TreeOfVanity_Reward_C;
    RichTextSizable_280: URichTextSizable;
    Image_NotEnoughTokens: UImage;
    Claim_Progress: UProgressBar;
    TurnRed: UWidgetAnimation;
    State: ERewardTreeNodeState;
    PreConstruct(IsDesignTime: boolean): void;
    SetState(State: ERewardTreeNodeState): void;
    UpdateHoldTime(InPercent: number): void;
    PlayNotEnoughTokens(): void;
    ExecuteUbergraph_Tooltip_TreeOfVanityReward(EntryPoint: number): void;
}
declare const UTooltip_TreeOfVanityReward_C: UTooltip_TreeOfVanityReward_C;

