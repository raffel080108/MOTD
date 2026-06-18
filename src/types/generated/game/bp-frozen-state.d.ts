declare interface UBP_FrozenState_C extends UFrozenStateComponent {
    readonly __static_UBP_FrozenState_C: {
        ReceiveStateEnter(): void;
        ReceiveStateExit(): void;
        ReceiveOnDefrosting(): void;
        ExecuteUbergraph_BP_FrozenState(EntryPoint: number): void;
    };
    readonly __properties_UBP_FrozenState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UBP_FrozenState_C['__static_UBP_FrozenState_C'] &
        UFrozenStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_FrozenState_C['__properties_UBP_FrozenState_C'] &
        UFrozenStateComponent['__propertyRegistry'];
}

