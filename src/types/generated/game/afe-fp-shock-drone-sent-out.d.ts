declare interface UAFE_FP_ShockDroneSentOut_C extends UAttachMeshesAfflictionEffect {
    readonly __static_UAFE_FP_ShockDroneSentOut_C: {
        ReceiveBeginEffect(Target: UPawnAfflictionComponent): void;
        ExecuteUbergraph_AFE_FP_ShockDroneSentOut(EntryPoint: number): void;
    };
    readonly __properties_UAFE_FP_ShockDroneSentOut_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UAFE_FP_ShockDroneSentOut_C['__static_UAFE_FP_ShockDroneSentOut_C'] &
        UAttachMeshesAfflictionEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        UAFE_FP_ShockDroneSentOut_C['__properties_UAFE_FP_ShockDroneSentOut_C'] &
        UAttachMeshesAfflictionEffect['__propertyRegistry'];
}

