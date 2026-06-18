declare interface UWidget_DropPod_BiomeRadar_bxe_C extends UUserWidget {
    readonly __static_UWidget_DropPod_BiomeRadar_bxe_C: {
        SetGeneratedMission(In_Mission: UStage): void;
        Construct(): void;
        OnGeneratedMissionChanged(OutGeneratedMission: UStage): void;
        ExecuteUbergraph_Widget_DropPod_BiomeRadar_bxe(EntryPoint: number): void;
    };
    readonly __properties_UWidget_DropPod_BiomeRadar_bxe_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WidgetSwitcher_1: UWidgetSwitcher;
        VerticalBox_MissionData: UVerticalBox;
        UI_MaskedImage: UUI_MaskedImage_C;
        TextBlock_0: UTextBlock;
        RadarSweep: UImage;
        RadarOutline: UImage;
        NoDeepDive: UVerticalBox;
        Gradient: UImage;
        DeepDive: UVerticalBox;
        DATA_PlanetaryRegionName: UTextBlock;
        Basic_ResourceIcon_0: UBasic_ResourceIcon_C;
        Basic_ResourceIcon: UBasic_ResourceIcon_C;
        Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
        RadarRotation: UWidgetAnimation;
        Depth: number;
        Angle: number;
        Biome: UBiome;
    };
    readonly __staticRegistry: 
        UWidget_DropPod_BiomeRadar_bxe_C['__static_UWidget_DropPod_BiomeRadar_bxe_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWidget_DropPod_BiomeRadar_bxe_C['__properties_UWidget_DropPod_BiomeRadar_bxe_C'] &
        UUserWidget['__propertyRegistry'];
}

