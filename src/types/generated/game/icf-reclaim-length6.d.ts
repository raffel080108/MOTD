declare interface UICF_ReclaimLength6_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredAmountOfStages: number;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnDiveRunComplete(): void;
    ExecuteUbergraph_ICF_ReclaimLength6(EntryPoint: number): void;
}
declare const UICF_ReclaimLength6_C: UICF_ReclaimLength6_C;

