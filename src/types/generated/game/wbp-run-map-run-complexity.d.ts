declare interface UWBP_RunMap_RunComplexity_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Text: UTextBlock;
    LockedOverlay: UOverlay;
    DotMarker: UITM_MisSel_DotMarker_CaveDifficulty_C;
    DividerImage: UImage;
    ShowText: boolean;
    HideDots: boolean;
    UpdateFromRun(InRun: URun): void;
    SetNumberOfDots(Amount: number): void;
    ShowLocked(IsLocked: boolean): void;
    SetComplexity(Complexity: UStageComplexity): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunComplexity(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunComplexity_C: UWBP_RunMap_RunComplexity_C;

