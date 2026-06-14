declare interface UEEC_Irradiated_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    GetOrCreateBoilsComponent(BoilsComponent: URadiationBoilsComponent): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_EEC_Irradiated(EntryPoint: number): void;
}
declare const UEEC_Irradiated_C: UEEC_Irradiated_C;

