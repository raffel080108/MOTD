declare interface UBasic_ToolTip_RichText_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ToolTipSizer: USizeBox;
    ToolTip_RichText: URichTextBlock;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Intro: UWidgetAnimation;
    AnimFadeIn: UWidgetAnimation;
    Text: FText;
    position: FVector2D;
    Alignment: FVector2D;
    SetTextJustification(Justification: ETextJustify): void;
    FadeIn(duration: number, OutToolTip: UBasic_ToolTip_RichText_C): void;
    SetWidth(InWidthOverride: number): void;
    SetMaxWidth(MaxWidth: number): void;
    SetMinWidth(MinWidth: number): void;
    SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetText(InToolTip: FText, InTextStyle: UDataTable, InDecoratorClasses: TArray<TSubclassOf<URichTextBlockDecorator>>): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_ToolTip_RichText(EntryPoint: number): void;
}
declare const UBasic_ToolTip_RichText_C: UBasic_ToolTip_RichText_C;

