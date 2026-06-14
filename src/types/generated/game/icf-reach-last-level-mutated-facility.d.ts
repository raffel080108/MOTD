declare interface UICF_ReachLastLevel_MutatedFacility_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnActiveStageChanged_Event(Stage: UStage): void;
    ExecuteUbergraph_ICF_ReachLastLevel_MutatedFacility(EntryPoint: number): void;
}
declare const UICF_ReachLastLevel_MutatedFacility_C: UICF_ReachLastLevel_MutatedFacility_C;

