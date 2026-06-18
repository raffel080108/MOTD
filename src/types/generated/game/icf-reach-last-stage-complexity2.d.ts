declare interface UICF_ReachLastStageComplexity2_C extends UIntelChallenge {
    readonly __static_UICF_ReachLastStageComplexity2_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnActiveStageChanged_Event(Stage: UStage): void;
        ExecuteUbergraph_ICF_ReachLastStageComplexity2(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReachLastStageComplexity2_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        AverageComplexity: UStageComplexity;
        ComplexComplexity: UStageComplexity;
        CompletedComplexity: UStageComplexity;
    };
    readonly __staticRegistry: 
        UICF_ReachLastStageComplexity2_C['__static_UICF_ReachLastStageComplexity2_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReachLastStageComplexity2_C['__properties_UICF_ReachLastStageComplexity2_C'] &
        UIntelChallenge['__propertyRegistry'];
}

