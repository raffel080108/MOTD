declare interface UWBP_IntelTasks_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VBox_IntelObjectives: UVerticalBox;
    ScrollBox: UScrollBox;
    IntelOverlay: UOverlay;
    IntelImage: UImage;
    IntelBox: UHorizontalBox;
    IntelAmountText: UTextBlock;
    ChangeIntelAnimation: UWidgetAnimation;
    IntelObjectiveWidgets: TArray<UWBP_IntelObjective_BoxWrapper_C>;
    OnRequestClaimObjective: FWBP_IntelTasks_COnRequestClaimObjective;
    SequenceEvent__ENTRYPOINTWBP_IntelTasks(): void;
    SetAboutToClaimObjective(Objective: UIntelObjective): void;
    ScrollIntoView(Objective: UIntelObjective): void;
    RequestClaimObjective(Objective: UIntelObjective): void;
    NotifyPointsChanged(): void;
    NotifyChallengeComplete(Challenge: TSubclassOf<UIntelChallenge>): void;
    NotifyChallengeClaimed(Challenge: TSubclassOf<UIntelChallenge>): void;
    NotifyObjectiveClaimed(Objective: UIntelObjective): void;
    GetNextObjective(CurrentObjective: number, AllObjectives: TArray<UIntelObjective>, NextObjective: UIntelObjective): void;
    GetPreviousObjective(CurrentObjective: number, AllObjectives: TArray<UIntelObjective>, NextObjective: UIntelObjective): void;
    UpdateObjectives(): void;
    UpdateIntelAmount(IntelAmount: number): void;
    Update(): void;
    Finished_6F42DF2B47E326D8FA1A29994B2C69F1(): void;
    ChangeIntelText(): void;
    Construct(): void;
    RefreshIntelAmount(): void;
    ExecuteUbergraph_WBP_IntelTasks(EntryPoint: number): void;
    OnRequestClaimObjective__DelegateSignature(Objective: UIntelObjective): void;
}
declare const UWBP_IntelTasks_C: UWBP_IntelTasks_C;

