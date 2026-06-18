declare interface UBasic_ToolTip_C extends UUserWidget {
    readonly __static_UBasic_ToolTip_C: {
        SetTextJustification(Justification: ETextJustify): void;
        FadeIn(duration: number): void;
        SetWidth(InWidthOverride: number): void;
        SetMaxWidth(MaxWidth: number): void;
        SetMinWidth(MinWidth: number): void;
        SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
        SetText(ToolTip: string): void;
        SetTarget(Target_Widget: UWidget): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_ToolTip(EntryPoint: number): void;
    };
    readonly __properties_UBasic_ToolTip_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ToolTipSizer: USizeBox;
        DATA_ToolTip: UTextBlock;
        Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
        Intro: UWidgetAnimation;
        AnimFadeIn: UWidgetAnimation;
        Text: string;
        position: FVector2D;
        Alignment: FVector2D;
    };
    readonly __staticRegistry: 
        UBasic_ToolTip_C['__static_UBasic_ToolTip_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ToolTip_C['__properties_UBasic_ToolTip_C'] &
        UUserWidget['__propertyRegistry'];
}

