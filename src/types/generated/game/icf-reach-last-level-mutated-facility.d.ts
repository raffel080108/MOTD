declare interface UICF_ReachLastLevel_MutatedFacility_C extends UIntelChallenge {
    readonly __static_UICF_ReachLastLevel_MutatedFacility_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnActiveStageChanged_Event(Stage: UStage): void;
        ExecuteUbergraph_ICF_ReachLastLevel_MutatedFacility(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReachLastLevel_MutatedFacility_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UICF_ReachLastLevel_MutatedFacility_C['__static_UICF_ReachLastLevel_MutatedFacility_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReachLastLevel_MutatedFacility_C['__properties_UICF_ReachLastLevel_MutatedFacility_C'] &
        UIntelChallenge['__propertyRegistry'];
}

