declare interface UBP_StoredState_C extends UStoredState {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveStateExit(): void;
    ExecuteUbergraph_BP_StoredState(EntryPoint: number): void;
}
declare const UBP_StoredState_C: UBP_StoredState_C;

