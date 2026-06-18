declare interface UICF_ReclaimLength6_C extends UIntelChallenge {
    readonly __static_UICF_ReclaimLength6_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnDiveRunComplete(): void;
        ExecuteUbergraph_ICF_ReclaimLength6(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReclaimLength6_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RequiredAmountOfStages: number;
    };
    readonly __staticRegistry: 
        UICF_ReclaimLength6_C['__static_UICF_ReclaimLength6_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReclaimLength6_C['__properties_UICF_ReclaimLength6_C'] &
        UIntelChallenge['__propertyRegistry'];
}

