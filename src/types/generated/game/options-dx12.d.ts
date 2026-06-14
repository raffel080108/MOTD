declare interface UOptions_DX12_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_1_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ShowOptions(): void;
    UINeedsUpdate(): void;
    ExecuteUbergraph_Options_DX12(EntryPoint: number): void;
}
declare const UOptions_DX12_C: UOptions_DX12_C;

