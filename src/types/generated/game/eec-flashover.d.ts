declare interface UEEC_Flashover_C extends UElementEventComponent {
    readonly __static_UEEC_Flashover_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_EEC_Flashover(EntryPoint: number): void;
    };
    readonly __properties_UEEC_Flashover_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        HeatAmount: number;
        SpawnLocations: FVector[];
    };
    readonly __staticRegistry: 
        UEEC_Flashover_C['__static_UEEC_Flashover_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_Flashover_C['__properties_UEEC_Flashover_C'] &
        UElementEventComponent['__propertyRegistry'];
}

