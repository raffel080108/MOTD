declare interface UOptions_MouseSmooting_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_MouseSmooting(EntryPoint: number): void;
}
declare const UOptions_MouseSmooting_C: UOptions_MouseSmooting_C;

