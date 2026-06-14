declare interface UBiome_ToolTip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ResourceBName: UFSDLabelWidget;
    ResourceAName: UFSDLabelWidget;
    Basic_ResourceIconB: UBasic_ResourceIcon_C;
    Basic_ResourceIconA: UBasic_ResourceIcon_C;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Intro: UWidgetAnimation;
    position: FVector2D;
    Alignment: FVector2D;
    Owner: UWidget;
    SetData(ResourceA: UResourceData, ResourceB: UResourceData): void;
    SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
    SetTarget(Target_Widget: UWidget): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Biome_ToolTip(EntryPoint: number): void;
}
declare const UBiome_ToolTip_C: UBiome_ToolTip_C;

