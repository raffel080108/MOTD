declare interface UOptions_EnableMinionDamageNumbers_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    OnDamageNumbersEnabledChanged(NewValue: boolean): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_EnableMinionDamageNumbers(EntryPoint: number): void;
}
declare const UOptions_EnableMinionDamageNumbers_C: UOptions_EnableMinionDamageNumbers_C;

