declare interface UBP_StoredState_C extends UStoredState {
    readonly __static_UBP_StoredState_C: {
        ReceiveStateExit(): void;
        ExecuteUbergraph_BP_StoredState(EntryPoint: number): void;
    };
    readonly __properties_UBP_StoredState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UBP_StoredState_C['__static_UBP_StoredState_C'] &
        UStoredState['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_StoredState_C['__properties_UBP_StoredState_C'] &
        UStoredState['__propertyRegistry'];
}

