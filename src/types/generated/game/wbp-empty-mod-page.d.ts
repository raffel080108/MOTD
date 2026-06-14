declare interface UWBP_EmptyModPage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    GetPageInfo(PageName: FText): void;
    ExecuteUbergraph_WBP_EmptyModPage(EntryPoint: number): void;
}
declare const UWBP_EmptyModPage_C: UWBP_EmptyModPage_C;

