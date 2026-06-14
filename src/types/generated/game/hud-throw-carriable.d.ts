declare interface UHUD_ThrowCarriable_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Invalidation: UInvalidationBox;
    HorizontalBox_0: UHorizontalBox;
    HoldingProgressR: UProgressBar;
    HoldingProgressL: UProgressBar;
    Construct(): void;
    OnThrowCarriableProgress_Event(Progress: number, timeToCancel: number, isDone: boolean): void;
    ExecuteUbergraph_HUD_ThrowCarriable(EntryPoint: number): void;
}
declare const UHUD_ThrowCarriable_C: UHUD_ThrowCarriable_C;

