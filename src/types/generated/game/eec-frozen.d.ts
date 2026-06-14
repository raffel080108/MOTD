declare interface UEEC_Frozen_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveBeginPlay(): void;
    ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
    ExecuteUbergraph_EEC_Frozen(EntryPoint: number): void;
}
declare const UEEC_Frozen_C: UEEC_Frozen_C;

