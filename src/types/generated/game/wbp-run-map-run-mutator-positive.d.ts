declare interface UWBP_RunMap_RunMutator_Positive_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBackground: UImage;
    MutatorText: UTextBlock;
    MutatorIcon: UWBP_RunMap_RunMutator_Positive_Icon_C;
    SetRiskVector(RiskVector: URiskVector): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunMutator_Positive(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunMutator_Positive_C: UWBP_RunMap_RunMutator_Positive_C;

