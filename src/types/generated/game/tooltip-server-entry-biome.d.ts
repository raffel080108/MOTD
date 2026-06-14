declare interface UTOOLTIP_ServerEntry_Biome_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ShowProfileText: URichTextSizable;
    PlanetZoneImage: UImage;
    ContentBox: UVerticalBox;
    BiomeName: UTextBlock;
    BiomeImage: UImage;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    ResourceFont: FSlateFontInfo;
    Biome: UBiome;
    SetData(InBiome: UBiome): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_TOOLTIP_ServerEntry_Biome(EntryPoint: number): void;
}
declare const UTOOLTIP_ServerEntry_Biome_C: UTOOLTIP_ServerEntry_Biome_C;

