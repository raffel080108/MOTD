declare interface UEEC_Corrosion_Puddle_C extends UElementEventComponent {
    readonly __static_UEEC_Corrosion_Puddle_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_EEC_Corrosion_Puddle(EntryPoint: number): void;
    };
    readonly __properties_UEEC_Corrosion_Puddle_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UEEC_Corrosion_Puddle_C['__static_UEEC_Corrosion_Puddle_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_Corrosion_Puddle_C['__properties_UEEC_Corrosion_Puddle_C'] &
        UElementEventComponent['__propertyRegistry'];
}

