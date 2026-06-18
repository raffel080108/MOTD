declare interface UMissionControl_TextAnimator_C extends UUserWidget {
    readonly __static_UMissionControl_TextAnimator_C: {
        SetTextStyle(NewTextStyleSet: UDataTable, InJustification: ETextJustify, InAutoTextWrap: boolean): void;
        GetFirstWord(InString: string, OutWord: string): void;
        SetAnimProgress(AnimProgress: number): void;
        SetText(InText: string, Unformatted_Length: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        Play(InDuration: number): void;
        ExecuteUbergraph_MissionControl_TextAnimator(EntryPoint: number): void;
    };
    readonly __properties_UMissionControl_TextAnimator_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBlock: URichTextBlock;
        AnimTextRun: UWidgetAnimation;
        Text: string;
        Parser: FRichTextParseResult;
        AnimProgress: number;
        Justification: ETextJustify;
    };
    readonly __staticRegistry: 
        UMissionControl_TextAnimator_C['__static_UMissionControl_TextAnimator_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UMissionControl_TextAnimator_C['__properties_UMissionControl_TextAnimator_C'] &
        UUserWidget['__propertyRegistry'];
}

