declare interface UICF_ReachLevel6_AnyFacility_C extends UIntelChallenge {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequiredStageIndex: number;
    OnStartTracking(): void;
    OnStopTracking(): void;
    OnActiveStageChanged_Event(Stage: UStage): void;
    ExecuteUbergraph_ICF_ReachLevel6_AnyFacility(EntryPoint: number): void;
}
declare const UICF_ReachLevel6_AnyFacility_C: UICF_ReachLevel6_AnyFacility_C;

