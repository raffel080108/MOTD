declare interface UOptions_EnableDamageNumbers_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    OnDamageNumbersEnabledChanged(NewValue: boolean): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_EnableDamageNumbers(EntryPoint: number): void;
}
declare const UOptions_EnableDamageNumbers_C: UOptions_EnableDamageNumbers_C;

