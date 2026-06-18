declare interface UICF_ReclaimComplexity3_C extends UIntelChallenge {
    readonly __static_UICF_ReclaimComplexity3_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnDiveRunComplete(): void;
        ExecuteUbergraph_ICF_ReclaimComplexity3(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReclaimComplexity3_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RequiredComplexity: UStageComplexity;
    };
    readonly __staticRegistry: 
        UICF_ReclaimComplexity3_C['__static_UICF_ReclaimComplexity3_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReclaimComplexity3_C['__properties_UICF_ReclaimComplexity3_C'] &
        UIntelChallenge['__propertyRegistry'];
}

