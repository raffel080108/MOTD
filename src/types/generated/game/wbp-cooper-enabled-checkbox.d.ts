declare interface UWBP_CooperEnabledCheckbox_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_15_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    UpdateState(): void;
    Construct(): void;
    ExecuteUbergraph_WBP_CooperEnabledCheckbox(EntryPoint: number): void;
}
declare const UWBP_CooperEnabledCheckbox_C: UWBP_CooperEnabledCheckbox_C;

