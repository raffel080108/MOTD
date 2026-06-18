declare interface UTSK_FindRandomPointFrom_C extends UBTTask_BlueprintBase {
    readonly __static_UTSK_FindRandomPointFrom_C: {
        GetBestFlatGround(Origin: FVector, Array_Element: FVector): void;
        GetLocation(): FVector;
        snap(SnapToCeiling: boolean, Pathfinder: UDeepPathfinderMovement, Location: FVector): void;
        ReceiveExecuteAI(OwnerController: AAIController, ControlledPawn: APawn): void;
        ExecuteUbergraph_TSK_FindRandomPointFrom(EntryPoint: number): void;
    };
    readonly __properties_UTSK_FindRandomPointFrom_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Distance: number;
        SnapToCeiling: boolean;
        FindAtDistance: boolean;
        FromLocationKey: FBlackboardKeySelector;
        NewLocationKey: FBlackboardKeySelector;
        FlatGroundRadius: number;
        maxPathLength: number;
        maxTries: number;
        CurrentTries: number;
    };
    readonly __staticRegistry: 
        UTSK_FindRandomPointFrom_C['__static_UTSK_FindRandomPointFrom_C'] &
        UBTTask_BlueprintBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UTSK_FindRandomPointFrom_C['__properties_UTSK_FindRandomPointFrom_C'] &
        UBTTask_BlueprintBase['__propertyRegistry'];
}

