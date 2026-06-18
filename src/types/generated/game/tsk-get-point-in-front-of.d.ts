declare interface UTSK_GetPointInFrontOf_C extends UBTTask_BlueprintBase {
    readonly __static_UTSK_GetPointInFrontOf_C: {
        ReceiveExecuteAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ExecuteUbergraph_TSK_GetPointInFrontOf(EntryPoint: number): void;
    };
    readonly __properties_UTSK_GetPointInFrontOf_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Target: FBlackboardKeySelector;
        Destination: FBlackboardKeySelector;
        Range: number;
        Forward: number;
    };
    readonly __staticRegistry: 
        UTSK_GetPointInFrontOf_C['__static_UTSK_GetPointInFrontOf_C'] &
        UBTTask_BlueprintBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UTSK_GetPointInFrontOf_C['__properties_UTSK_GetPointInFrontOf_C'] &
        UBTTask_BlueprintBase['__propertyRegistry'];
}

