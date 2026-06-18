declare interface UWBP_RunMap_RunMutators_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunMutators_C: {
        UpdateFromRun(InRun: URun): void;
        ShowLocked(IsLocked: boolean): void;
        SetPrimaryMutator(Mutator: UPrimaryMutator): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunMutators(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunMutators_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        RootOverlay: UOverlay;
        MutatorName: UTextBlock;
        LockedOverlay: UOverlay;
        ITEM_RunSelection_MissionMutator_Positive: UWBP_RunMap_RunMutator_Positive_C;
        ITEM_RunSelection_MissionMutator_Negative: UWBP_RunMap_RunMutator_Negative_C;
        ContentOverlay: UOverlay;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunMutators_C['__static_UWBP_RunMap_RunMutators_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunMutators_C['__properties_UWBP_RunMap_RunMutators_C'] &
        UUserWidget['__propertyRegistry'];
}

