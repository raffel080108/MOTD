declare interface UBasic_ToolTip_HeadlineAndText_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ToolTipSizer: USizeBox;
    DATA_TooltipText: UTextBlock;
    DATA_ToolTipHeadline: UTextBlock;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Intro: UWidgetAnimation;
    AnimFadeIn: UWidgetAnimation;
    Headline: FText;
    Text: FText;
    position: FVector2D;
    Alignment: FVector2D;
    FadeIn(duration: number): void;
    SetWidth(InWidthOverride: number): void;
    SetMaxWidth(MaxWidth: number): void;
    SetMinWidth(MinWidth: number): void;
    SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetText(Headline: FText, Text: FText): void;
    SetTarget(Target_Widget: UWidget): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_ToolTip_HeadlineAndText(EntryPoint: number): void;
}
declare const UBasic_ToolTip_HeadlineAndText_C: UBasic_ToolTip_HeadlineAndText_C;

