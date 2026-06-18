declare interface ABP_Element_ElectricBeam_C extends AMovingElectroBeam {
    readonly __static_ABP_Element_ElectricBeam_C: {
        ReceiveBeginPlay(): void;
        Receive_SourceActorSet_Server(NewSource: AActor): void;
        Receive_TargetActorSet_Server(NewTarget: AActor): void;
        ExecuteUbergraph_BP_Element_ElectricBeam(EntryPoint: number): void;
    };
    readonly __properties_ABP_Element_ElectricBeam_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        ABP_Element_ElectricBeam_C['__static_ABP_Element_ElectricBeam_C'] &
        AMovingElectroBeam['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Element_ElectricBeam_C['__properties_ABP_Element_ElectricBeam_C'] &
        AMovingElectroBeam['__propertyRegistry'];
}

