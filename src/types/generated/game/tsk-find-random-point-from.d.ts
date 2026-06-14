declare interface UTSK_FindRandomPointFrom_C extends UBTTask_BlueprintBase {
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
    GetBestFlatGround(Origin: FVector, Array_Element: FVector): void;
    GetLocation(): FVector;
    snap(SnapToCeiling: boolean, Pathfinder: UDeepPathfinderMovement, Location: FVector): void;
    ReceiveExecuteAI(OwnerController: AAIController, ControlledPawn: APawn): void;
    ExecuteUbergraph_TSK_FindRandomPointFrom(EntryPoint: number): void;
}
declare const UTSK_FindRandomPointFrom_C: UTSK_FindRandomPointFrom_C;

