declare interface UMissionControl_TextAnimator_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock: URichTextBlock;
    AnimTextRun: UWidgetAnimation;
    Text: FText;
    Parser: FRichTextParseResult;
    AnimProgress: number;
    Justification: ETextJustify;
    SetTextStyle(NewTextStyleSet: UDataTable, InJustification: ETextJustify, InAutoTextWrap: boolean): void;
    GetFirstWord(InString: string | FString, OutWord: string | FString): void;
    SetAnimProgress(AnimProgress: number): void;
    SetText(InText: FText, Unformatted_Length: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Play(InDuration: number): void;
    ExecuteUbergraph_MissionControl_TextAnimator(EntryPoint: number): void;
}
declare const UMissionControl_TextAnimator_C: UMissionControl_TextAnimator_C;

