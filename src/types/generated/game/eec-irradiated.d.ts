declare interface UEEC_Irradiated_C extends UElementEventComponent {
    readonly __static_UEEC_Irradiated_C: {
        GetOrCreateBoilsComponent(BoilsComponent: URadiationBoilsComponent): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_EEC_Irradiated(EntryPoint: number): void;
    };
    readonly __properties_UEEC_Irradiated_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UEEC_Irradiated_C['__static_UEEC_Irradiated_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_Irradiated_C['__properties_UEEC_Irradiated_C'] &
        UElementEventComponent['__propertyRegistry'];
}

