declare interface UBP_ParalyzedState_C extends UParalyzedStateComponent {
    readonly __static_UBP_ParalyzedState_C: {
        ReceiveStateEnter(): void;
        ReceiveStateExit(): void;
        ExecuteUbergraph_BP_ParalyzedState(EntryPoint: number): void;
    };
    readonly __properties_UBP_ParalyzedState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        StoredRotation: FRotator;
    };
    readonly __staticRegistry: 
        UBP_ParalyzedState_C['__static_UBP_ParalyzedState_C'] &
        UParalyzedStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_ParalyzedState_C['__properties_UBP_ParalyzedState_C'] &
        UParalyzedStateComponent['__propertyRegistry'];
}

