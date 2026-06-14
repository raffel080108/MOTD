declare interface UUI_ClaimableRewards_View_C extends UClaimableRewardViewWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    MissionControl_MainDialogue: UMissionControl_MainDialogue_C;
    LinesBox: UVerticalBox;
    EntryBox: UHorizontalBox;
    BlurBackground: UBlurBackground_C;
    BackgroundCanvas: UCanvasPanel;
    AnimBlurIn: UWidgetAnimation;
    ShowBackgroundBlur: boolean;
    AudioSpeak: UAudioComponent;
    OnMissionControlStarted: FUI_ClaimableRewards_View_COnMissionControlStarted;
    OnMissionControlFinished: FUI_ClaimableRewards_View_COnMissionControlFinished;
    RewardsClaimed: number;
    OnRewardsClaimed: FUI_ClaimableRewards_View_COnRewardsClaimed;
    OnRewardsAndMissionControlFinished: FUI_ClaimableRewards_View_COnRewardsAndMissionControlFinished;
    RewardsAndMissionControlFinished: boolean;
    RewardEntries: TArray<UClaimableRewardEntryWidget>;
    GetEntryWidgetClass(InOverridetClass: TSoftClassPtr<UUserWidget>, OutWidgetClass: TSubclassOf<UClaimableRewardEntryWidget>): void;
    GetLine(EntryBox: UHorizontalBox): void;
    SetupView(InViewData: FClaimableRewardView): void;
    TryFinish(): void;
    StopAudio(): void;
    OnAudioFinished_Event(): void;
    ShowBlur(): void;
    ShowMouseCursor(): void;
    OnRewardClaimed(InEntryWidget: UClaimableRewardEntryWidget): void;
    ReceiveEndFlow(): void;
    ReceiveDataChanged(): void;
    ReceiveBeginFlow(): void;
    ExecuteUbergraph_UI_ClaimableRewards_View(EntryPoint: number): void;
    OnRewardsAndMissionControlFinished__DelegateSignature(): void;
    OnRewardsClaimed__DelegateSignature(): void;
    OnMissionControlFinished__DelegateSignature(): void;
    OnMissionControlStarted__DelegateSignature(MissionControlAudio: UAudioComponent): void;
}
declare const UUI_ClaimableRewards_View_C: UUI_ClaimableRewards_View_C;

