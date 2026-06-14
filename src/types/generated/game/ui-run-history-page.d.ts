declare interface UUI_RunHistoryPage_C extends UUserWidget {
    Swap: FUI_RunHistoryPage_CSwap;
    Index: number;
    SwapToIndex(toIndex: number, OutSuccess: boolean): void;
    Swap__DelegateSignature(toIndex: number): void;
}
declare const UUI_RunHistoryPage_C: UUI_RunHistoryPage_C;

