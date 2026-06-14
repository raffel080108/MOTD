declare interface UICF_ReclaimComplexity3_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredComplexity: UStageComplexity;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnDiveRunComplete(): void;
    ExecuteUbergraph_ICF_ReclaimComplexity3(EntryPoint: number): void;
}
declare const UICF_ReclaimComplexity3_C: UICF_ReclaimComplexity3_C;

