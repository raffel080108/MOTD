declare interface UWBP_RunMap_Biome_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ZoneNotUnlockedText: UTextBlock;
    TextBlock_BiomeName: UTextBlock;
    Overlay_Outer: UOverlay;
    LockedImage: UImage;
    IMG_Shadow: UImage;
    Image_BackgroundBottomArrow: UImage;
    Image_Background_Outline: UImage;
    Image_Background: UImage;
    HoverButton: UButton;
    FadeIn: UWidgetAnimation;
    Biome: UBiome;
    AvailableRuns: FGeneratedRunsForBiome;
    bIsFadedIn: boolean;
    OnHoverStarted: FWBP_RunMap_Biome_COnHoverStarted;
    OnHoverEnded: FWBP_RunMap_Biome_COnHoverEnded;
    IsFadedIn(FadedIn: boolean): void;
    UpdateHovered(): void;
    IsBiomeUnlocked(): boolean;
    IsBiomeHovered(IsHovered: boolean): void;
    GetBiome(Biome: UBiome): void;
    SetData(GeneratedRuns: FGeneratedRunsForBiome): void;
    PreConstruct(IsDesignTime: boolean): void;
    FadePoint(FadeIn: boolean, PlayAnimation: boolean): void;
    BndEvt__WBP_RunMap_Biome_HoverButton_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__WBP_RunMap_Biome_HoverButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_WBP_RunMap_Biome(EntryPoint: number): void;
    OnHoverEnded__DelegateSignature(Widget: UWBP_RunMap_Biome_C): void;
    OnHoverStarted__DelegateSignature(Widget: UWBP_RunMap_Biome_C): void;
}
declare const UWBP_RunMap_Biome_C: UWBP_RunMap_Biome_C;

