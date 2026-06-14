declare interface UBP_ParalyzedState_C extends UParalyzedStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    StoredRotation: FRotator;
    ReceiveStateEnter(): void;
    ReceiveStateExit(): void;
    ExecuteUbergraph_BP_ParalyzedState(EntryPoint: number): void;
}
declare const UBP_ParalyzedState_C: UBP_ParalyzedState_C;

