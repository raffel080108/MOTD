declare interface UICF_ReachLastStageComplexity3_C extends UIntelChallenge {
    readonly __static_UICF_ReachLastStageComplexity3_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnActiveStageChanged_Event(Stage: UStage): void;
        ExecuteUbergraph_ICF_ReachLastStageComplexity3(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReachLastStageComplexity3_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RequiredComplexity: UStageComplexity;
    };
    readonly __staticRegistry: 
        UICF_ReachLastStageComplexity3_C['__static_UICF_ReachLastStageComplexity3_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReachLastStageComplexity3_C['__properties_UICF_ReachLastStageComplexity3_C'] &
        UIntelChallenge['__propertyRegistry'];
}

