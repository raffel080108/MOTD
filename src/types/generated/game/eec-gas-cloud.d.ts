declare interface UEEC_GasCloud_C extends UElementEventComponent {
    readonly __static_UEEC_GasCloud_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_EEC_GasCloud(EntryPoint: number): void;
    };
    readonly __properties_UEEC_GasCloud_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UEEC_GasCloud_C['__static_UEEC_GasCloud_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_GasCloud_C['__properties_UEEC_GasCloud_C'] &
        UElementEventComponent['__propertyRegistry'];
}

