declare interface UICF_ReclaimLength5_C extends UIntelChallenge {
    readonly __static_UICF_ReclaimLength5_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnRunSucceded(): void;
        ExecuteUbergraph_ICF_ReclaimLength5(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReclaimLength5_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RequiredAmountOfStages: number;
    };
    readonly __staticRegistry: 
        UICF_ReclaimLength5_C['__static_UICF_ReclaimLength5_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReclaimLength5_C['__properties_UICF_ReclaimLength5_C'] &
        UIntelChallenge['__propertyRegistry'];
}

