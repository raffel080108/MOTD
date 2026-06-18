declare interface UEEC_ShortCircuit_C extends UElementEventComponent {
    readonly __static_UEEC_ShortCircuit_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_EEC_ShortCircuit(EntryPoint: number): void;
    };
    readonly __properties_UEEC_ShortCircuit_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ElementComponent: UElementComponent;
    };
    readonly __staticRegistry: 
        UEEC_ShortCircuit_C['__static_UEEC_ShortCircuit_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_ShortCircuit_C['__properties_UEEC_ShortCircuit_C'] &
        UElementEventComponent['__propertyRegistry'];
}

