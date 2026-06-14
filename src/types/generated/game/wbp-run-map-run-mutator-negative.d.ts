declare interface UWBP_RunMap_RunMutator_Negative_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBackground: UImage;
    MutatorText: UTextBlock;
    MutatorIcon: UWBP_RunMap_RunMutator_Negative_Icon_C;
    SetRiskVector(RiskVector: URiskVector): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunMutator_Negative(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunMutator_Negative_C: UWBP_RunMap_RunMutator_Negative_C;

