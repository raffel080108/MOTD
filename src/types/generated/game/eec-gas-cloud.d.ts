declare interface UEEC_GasCloud_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_EEC_GasCloud(EntryPoint: number): void;
}
declare const UEEC_GasCloud_C: UEEC_GasCloud_C;

