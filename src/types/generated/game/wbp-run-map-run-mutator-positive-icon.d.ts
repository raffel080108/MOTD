declare interface UWBP_RunMap_RunMutator_Positive_Icon_C extends UUserWidget {
    readonly __static_UWBP_RunMap_RunMutator_Positive_Icon_C: {
        SetRiskVector(RiskVector: URiskVector): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_WBP_RunMap_RunMutator_Positive_Icon(EntryPoint: number): void;
    };
    readonly __properties_UWBP_RunMap_RunMutator_Positive_Icon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        MutatorIcon: UImage;
        Background_2: UImage;
        Background_1: UImage;
    };
    readonly __staticRegistry: 
        UWBP_RunMap_RunMutator_Positive_Icon_C['__static_UWBP_RunMap_RunMutator_Positive_Icon_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_RunMap_RunMutator_Positive_Icon_C['__properties_UWBP_RunMap_RunMutator_Positive_Icon_C'] &
        UUserWidget['__propertyRegistry'];
}

