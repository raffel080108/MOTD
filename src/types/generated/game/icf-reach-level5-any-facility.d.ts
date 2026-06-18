declare interface UICF_ReachLevel5_AnyFacility_C extends UIntelChallenge {
    readonly __static_UICF_ReachLevel5_AnyFacility_C: {
        OnStartTracking(): void;
        OnStopTracking(): void;
        OnActiveStageChanged_Event(Stage: UStage): void;
        ExecuteUbergraph_ICF_ReachLevel5_AnyFacility(EntryPoint: number): void;
    };
    readonly __properties_UICF_ReachLevel5_AnyFacility_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RequiredStageIndex: number;
    };
    readonly __staticRegistry: 
        UICF_ReachLevel5_AnyFacility_C['__static_UICF_ReachLevel5_AnyFacility_C'] &
        UIntelChallenge['__staticRegistry'];
    readonly __propertyRegistry: 
        UICF_ReachLevel5_AnyFacility_C['__properties_UICF_ReachLevel5_AnyFacility_C'] &
        UIntelChallenge['__propertyRegistry'];
}

