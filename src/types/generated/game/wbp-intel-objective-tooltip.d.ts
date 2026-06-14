declare interface UWBP_Intel_ObjectiveTooltip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TitleText: UTextBlock;
    DescriptionText: UTextBlock;
    Intro: UWidgetAnimation;
    IntelObjective: UIntelObjective;
    ShowTitle: boolean;
    ShowDescription: boolean;
    Construct(): void;
    ExecuteUbergraph_WBP_Intel_ObjectiveTooltip(EntryPoint: number): void;
}
declare const UWBP_Intel_ObjectiveTooltip_C: UWBP_Intel_ObjectiveTooltip_C;

