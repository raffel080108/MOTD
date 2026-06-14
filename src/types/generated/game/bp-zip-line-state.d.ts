declare interface UBP_ZipLineState_C extends UZipLineStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    GetJumpVector(LookVector: FVector, CurrentVelocity: FVector): FVector;
    ReceiveSpeedBoostActivated(): void;
    ReceiveSpeedBoostDeactivated(): void;
    ExecuteUbergraph_BP_ZipLineState(EntryPoint: number): void;
}
declare const UBP_ZipLineState_C: UBP_ZipLineState_C;

