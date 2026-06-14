declare interface UBasic_ToolTip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ToolTipSizer: USizeBox;
    DATA_ToolTip: UTextBlock;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Intro: UWidgetAnimation;
    AnimFadeIn: UWidgetAnimation;
    Text: FText;
    position: FVector2D;
    Alignment: FVector2D;
    SetTextJustification(Justification: ETextJustify): void;
    FadeIn(duration: number): void;
    SetWidth(InWidthOverride: number): void;
    SetMaxWidth(MaxWidth: number): void;
    SetMinWidth(MinWidth: number): void;
    SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetText(ToolTip: FText): void;
    SetTarget(Target_Widget: UWidget): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_ToolTip(EntryPoint: number): void;
}
declare const UBasic_ToolTip_C: UBasic_ToolTip_C;

