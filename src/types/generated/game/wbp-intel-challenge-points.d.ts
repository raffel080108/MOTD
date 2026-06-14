declare interface UWBP_IntelChallengePoints_C extends UUserWidget {
    IntelImage_Animated: UImage;
    IntelImage: UImage;
    IntelBox: UHorizontalBox;
    IntelAmountText: UTextBlock;
    ClickToClaimAnimation: UWidgetAnimation;
    ClaimedAnimation: UWidgetAnimation;
    AllowClaiming: boolean;
    Challenge: TSubclassOf<UIntelChallenge>;
    SetAllowClaim(Allow: boolean): void;
    UpdateClaim(): void;
    UpdateText(): void;
    IsMouseAbove(IsHovering: boolean): void;
    SetChallenge(Challenge: TSubclassOf<UIntelChallenge>): void;
}
declare const UWBP_IntelChallengePoints_C: UWBP_IntelChallengePoints_C;

