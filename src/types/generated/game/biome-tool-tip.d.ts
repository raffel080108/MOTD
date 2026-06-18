declare interface UBiome_ToolTip_C extends UUserWidget {
    readonly __static_UBiome_ToolTip_C: {
        SetData(ResourceA: UResourceData, ResourceB: UResourceData): void;
        SetPostionAndAlignment(InPosition: FVector2D, InAlignment: FVector2D): void;
        SetTarget(Target_Widget: UWidget): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Biome_ToolTip(EntryPoint: number): void;
    };
    readonly __properties_UBiome_ToolTip_C: {
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
    };
    readonly __staticRegistry: 
        UBiome_ToolTip_C['__static_UBiome_ToolTip_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBiome_ToolTip_C['__properties_UBiome_ToolTip_C'] &
        UUserWidget['__propertyRegistry'];
}

