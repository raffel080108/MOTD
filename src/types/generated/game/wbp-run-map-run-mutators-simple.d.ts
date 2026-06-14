declare interface UWBP_RunMap_RunMutators_Simple_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_RunMap_RunMutator_Positive_Icon: UWBP_RunMap_RunMutator_Positive_Icon_C;
    Text: UTextBlock;
    LockedOverlay: UOverlay;
    Image_58: UImage;
    HBox_Icons: UHorizontalBox;
    UpdateFromRun(InRun: URun): void;
    ShowLocked(IsLocked: boolean): void;
    SetPrimaryMutator(Mutator: UPrimaryMutator): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_WBP_RunMap_RunMutators_Simple(EntryPoint: number): void;
}
declare const UWBP_RunMap_RunMutators_Simple_C: UWBP_RunMap_RunMutators_Simple_C;

