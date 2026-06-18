declare interface UBasic_ToolTip_HeadlineAndText_C extends UUserWidget {
    readonly __static_UBasic_ToolTip_HeadlineAndText_C: {
        FadeIn(duration: number): void;
        SetWidth(InWidthOverride: number): void;
        SetMaxWidth(MaxWidth: number): void;
        SetMinWidth(MinWidth: number): void;
        SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
        SetText(Headline: string, Text: string): void;
        SetTarget(Target_Widget: UWidget): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_ToolTip_HeadlineAndText(EntryPoint: number): void;
    };
    readonly __properties_UBasic_ToolTip_HeadlineAndText_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ToolTipSizer: USizeBox;
        DATA_TooltipText: UTextBlock;
        DATA_ToolTipHeadline: UTextBlock;
        Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
        Intro: UWidgetAnimation;
        AnimFadeIn: UWidgetAnimation;
        Headline: string;
        Text: string;
        position: FVector2D;
        Alignment: FVector2D;
    };
    readonly __staticRegistry: 
        UBasic_ToolTip_HeadlineAndText_C['__static_UBasic_ToolTip_HeadlineAndText_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ToolTip_HeadlineAndText_C['__properties_UBasic_ToolTip_HeadlineAndText_C'] &
        UUserWidget['__propertyRegistry'];
}

