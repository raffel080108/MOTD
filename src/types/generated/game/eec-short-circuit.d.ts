declare interface UEEC_ShortCircuit_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ElementComponent: UElementComponent;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_EEC_ShortCircuit(EntryPoint: number): void;
}
declare const UEEC_ShortCircuit_C: UEEC_ShortCircuit_C;

