declare interface UBasic_ToolTip_RichText_C extends UUserWidget {
    readonly __static_UBasic_ToolTip_RichText_C: {
        SetTextJustification(Justification: ETextJustify): void;
        FadeIn(duration: number, OutToolTip: UBasic_ToolTip_RichText_C): void;
        SetWidth(InWidthOverride: number): void;
        SetMaxWidth(MaxWidth: number): void;
        SetMinWidth(MinWidth: number): void;
        SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
        SetText(InToolTip: string, InTextStyle: UDataTable, InDecoratorClasses: TSubclassOf<URichTextBlockDecorator>[]): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_ToolTip_RichText(EntryPoint: number): void;
    };
    readonly __properties_UBasic_ToolTip_RichText_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ToolTipSizer: USizeBox;
        ToolTip_RichText: URichTextBlock;
        Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
        Intro: UWidgetAnimation;
        AnimFadeIn: UWidgetAnimation;
        Text: string;
        position: FVector2D;
        Alignment: FVector2D;
    };
    readonly __staticRegistry: 
        UBasic_ToolTip_RichText_C['__static_UBasic_ToolTip_RichText_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ToolTip_RichText_C['__properties_UBasic_ToolTip_RichText_C'] &
        UUserWidget['__propertyRegistry'];
}

