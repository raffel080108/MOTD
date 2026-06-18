declare interface UEEC_Frozen_C extends UElementEventComponent {
    readonly __static_UEEC_Frozen_C: {
        ReceiveBeginPlay(): void;
        ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
        ExecuteUbergraph_EEC_Frozen(EntryPoint: number): void;
    };
    readonly __properties_UEEC_Frozen_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UEEC_Frozen_C['__static_UEEC_Frozen_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_Frozen_C['__properties_UEEC_Frozen_C'] &
        UElementEventComponent['__propertyRegistry'];
}

