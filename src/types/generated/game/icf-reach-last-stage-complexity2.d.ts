declare interface UICF_ReachLastStageComplexity2_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    AverageComplexity: UStageComplexity;
    ComplexComplexity: UStageComplexity;
    CompletedComplexity: UStageComplexity;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnActiveStageChanged_Event(Stage: UStage): void;
    ExecuteUbergraph_ICF_ReachLastStageComplexity2(EntryPoint: number): void;
}
declare const UICF_ReachLastStageComplexity2_C: UICF_ReachLastStageComplexity2_C;

