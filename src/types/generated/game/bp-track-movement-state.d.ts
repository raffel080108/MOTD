declare interface UBP_TrackMovementState_C extends UTrackMovementStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveTick(DeltaSeconds: number): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_TrackMovementState(EntryPoint: number): void;
}
declare const UBP_TrackMovementState_C: UBP_TrackMovementState_C;

