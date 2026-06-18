declare interface UICF_REclaimComplexity2_C extends UIntelChallenge {
    readonly __static_UICF_REclaimComplexity2_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnDiveRunComplete(): void;
        ExecuteUbergraph_ICF_REclaimComplexity2(EntryPoint: number): void;
    };
    readonly __properties_UICF_REclaimComplexity2_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        CompletedComplexity: UStageComplexity;
        AverageComplexity: UStageComplexity;
        ComplexComplexity: UStageComplexity;
    };
    readonly __staticRegistry: 
        UICF_REclaimComplexity2_C['__static_UICF_REclaimComplexity2_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_REclaimComplexity2_C['__properties_UICF_REclaimComplexity2_C'] &
        UIntelChallenge['__propertyRegistry'];
}

