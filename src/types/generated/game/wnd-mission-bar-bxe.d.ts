declare interface UWND_MissionBar_BXE_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_RunMap_RunMutators: UWBP_RunMap_RunMutators_C;
    WBP_RunMap_RunLength: UWBP_RunMap_RunLength_C;
    WBP_RunMap_RunDepth: UWBP_RunMap_RunDepth_C;
    WBP_RunMap_RunComplexity: UWBP_RunMap_RunComplexity_C;
    RetainerBox_1: URetainerBox;
    RC_LineWithBackground_1: URC_LineWithBackground_C;
    RC_LineWithBackground: URC_LineWithBackground_C;
    Overlay_Root: UOverlay;
    ITEM_Header: UWBP_RunMap_RunHeader_C;
    Image_146: UImage;
    BiomeBorder: UBorder;
    Intro: UWidgetAnimation;
    UpdateDepth(Run: URun): void;
    UpdateBiome(Run: URun): void;
    UpdateDNA(Run: URun): void;
    UpdateMutators(Run: URun): void;
    Update(): void;
    Construct(): void;
    OnRunChanged(): void;
    ExecuteUbergraph_WND_MissionBar_BXE(EntryPoint: number): void;
}
declare const UWND_MissionBar_BXE_C: UWND_MissionBar_BXE_C;

