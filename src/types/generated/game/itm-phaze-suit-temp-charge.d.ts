declare interface UITM_PhazeSuit_TempCharge_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ProgressBar_Middle: UProgressBar;
    Flash: UWidgetAnimation;
    Index: number;
    Total: number;
    SetPercent(InPercent: number): void;
    SetUsed(IsChargeUsed: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_ITM_PhazeSuit_TempCharge(EntryPoint: number): void;
}
declare const UITM_PhazeSuit_TempCharge_C: UITM_PhazeSuit_TempCharge_C;

