declare interface UICF_REclaimComplexity2_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    CompletedComplexity: UStageComplexity;
    AverageComplexity: UStageComplexity;
    ComplexComplexity: UStageComplexity;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnDiveRunComplete(): void;
    ExecuteUbergraph_ICF_REclaimComplexity2(EntryPoint: number): void;
}
declare const UICF_REclaimComplexity2_C: UICF_REclaimComplexity2_C;

