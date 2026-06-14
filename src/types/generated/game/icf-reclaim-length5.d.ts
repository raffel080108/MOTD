declare interface UICF_ReclaimLength5_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredAmountOfStages: number;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnRunSucceded(): void;
    ExecuteUbergraph_ICF_ReclaimLength5(EntryPoint: number): void;
}
declare const UICF_ReclaimLength5_C: UICF_ReclaimLength5_C;

