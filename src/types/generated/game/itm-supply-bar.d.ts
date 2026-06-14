declare interface UITM_SupplyBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ProgressChunks: UHorizontalBox;
    ProgressBar: UProgressBar;
    ITM_SupplyBarItem_4: UITM_SupplyBarItem_C;
    ITM_SupplyBarItem_3: UITM_SupplyBarItem_C;
    ITM_SupplyBarItem_2: UITM_SupplyBarItem_C;
    ITM_SupplyBarItem_1: UITM_SupplyBarItem_C;
    Image_SupplyType: UUI_ImageTinted_C;
    ShowAsProgressBar: boolean;
    ShowBlinkingSegments: boolean;
    SupplyIcon: UTexture2D;
    IconTint: ENUM_MenuColors;
    ProgressBarTint: ENUM_MenuColors;
    SegmentBorderTint: ENUM_MenuColors;
    SegmentInnerTint: ENUM_MenuColors;
    SegmentLowTint: ENUM_MenuColors;
    SetProgress(Progress__0_1_: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_SupplyBar(EntryPoint: number): void;
}
declare const UITM_SupplyBar_C: UITM_SupplyBar_C;

