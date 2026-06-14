declare interface ABP_Element_ElectricBeam_C extends AMovingElectroBeam {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveBeginPlay(): void;
    Receive_SourceActorSet_Server(NewSource: AActor): void;
    Receive_TargetActorSet_Server(NewTarget: AActor): void;
    ExecuteUbergraph_BP_Element_ElectricBeam(EntryPoint: number): void;
}
declare const ABP_Element_ElectricBeam_C: ABP_Element_ElectricBeam_C;

