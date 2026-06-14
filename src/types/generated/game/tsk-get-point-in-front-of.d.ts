declare interface UTSK_GetPointInFrontOf_C extends UBTTask_BlueprintBase {
    UberGraphFrame: FPointerToUberGraphFrame;
    Target: FBlackboardKeySelector;
    Destination: FBlackboardKeySelector;
    Range: number;
    Forward: number;
    ReceiveExecuteAI(OwnerController: AAIController, ControlledPawn: APawn): void;
    ExecuteUbergraph_TSK_GetPointInFrontOf(EntryPoint: number): void;
}
declare const UTSK_GetPointInFrontOf_C: UTSK_GetPointInFrontOf_C;

