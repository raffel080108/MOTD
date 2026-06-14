declare interface UICF_ReachLastStageComplexity3_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredComplexity: UStageComplexity;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnActiveStageChanged_Event(Stage: UStage): void;
    ExecuteUbergraph_ICF_ReachLastStageComplexity3(EntryPoint: number): void;
}
declare const UICF_ReachLastStageComplexity3_C: UICF_ReachLastStageComplexity3_C;

