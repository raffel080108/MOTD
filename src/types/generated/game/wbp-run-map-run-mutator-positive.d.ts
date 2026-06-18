declare interface UWBP_RunMap_RunMutator_Positive_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunMutator_Positive_C: {
        SetRiskVector(RiskVector: URiskVector): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunMutator_Positive(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunMutator_Positive_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextBackground: UImage;
        MutatorText: UTextBlock;
        MutatorIcon: UWBP_RunMap_RunMutator_Positive_Icon_C;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunMutator_Positive_C['__static_UWBP_RunMap_RunMutator_Positive_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunMutator_Positive_C['__properties_UWBP_RunMap_RunMutator_Positive_C'] &
        UUserWidget['__propertyRegistry'];
}

