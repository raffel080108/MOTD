declare interface UWBP_RunMap_RunDepth_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DepthText: UTextBlock;
    DotImages: TArray<UImage>;
    SetRun(InRun: URun): void;
    SetDepth(Depth: ERunDepth): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunDepth(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunDepth_C: UWBP_RunMap_RunDepth_C;

