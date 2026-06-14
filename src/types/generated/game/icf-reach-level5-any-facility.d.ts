declare interface UICF_ReachLevel5_AnyFacility_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredStageIndex: number;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnActiveStageChanged_Event(Stage: UStage): void;
    ExecuteUbergraph_ICF_ReachLevel5_AnyFacility(EntryPoint: number): void;
}
declare const UICF_ReachLevel5_AnyFacility_C: UICF_ReachLevel5_AnyFacility_C;

