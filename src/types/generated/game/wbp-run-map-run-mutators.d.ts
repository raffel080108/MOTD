declare interface UWBP_RunMap_RunMutators_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RootOverlay: UOverlay;
    MutatorName: UTextBlock;
    LockedOverlay: UOverlay;
    ITEM_RunSelection_MissionMutator_Positive: UWBP_RunMap_RunMutator_Positive_C;
    ITEM_RunSelection_MissionMutator_Negative: UWBP_RunMap_RunMutator_Negative_C;
    ContentOverlay: UOverlay;
    UpdateFromRun(InRun: URun): void;
    ShowLocked(IsLocked: boolean): void;
    SetPrimaryMutator(Mutator: UPrimaryMutator): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunMutators(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunMutators_C: UWBP_RunMap_RunMutators_C;

