declare interface UAFE_PowerAttack_C extends UAfflictionEffect {
    readonly __static_UAFE_PowerAttack_C: {
        ReceiveBeginEffect(Target: UPawnAfflictionComponent): void;
        ReceiveEndEffect(Target: UPawnAfflictionComponent): void;
        ExecuteUbergraph_AFE_PowerAttack(EntryPoint: number): void;
    };
    readonly __properties_UAFE_PowerAttack_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UAFE_PowerAttack_C['__static_UAFE_PowerAttack_C'] &
        UAfflictionEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        UAFE_PowerAttack_C['__properties_UAFE_PowerAttack_C'] &
        UAfflictionEffect['__propertyRegistry'];
}

