declare interface UAFE_PowerAttack_C extends UAfflictionEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveBeginEffect(Target: UPawnAfflictionComponent): void;
    ReceiveEndEffect(Target: UPawnAfflictionComponent): void;
    ExecuteUbergraph_AFE_PowerAttack(EntryPoint: number): void;
}
declare const UAFE_PowerAttack_C: UAFE_PowerAttack_C;

