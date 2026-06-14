declare interface UOptions_SonyInputBoolOption_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Option: ESonyInputSettingsBools;
    StateChanged: FOptions_SonyInputBoolOption_CStateChanged;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_SonyInputBoolOption(EntryPoint: number): void;
    StateChanged__DelegateSignature(IsChecked: boolean): void;
}
declare const UOptions_SonyInputBoolOption_C: UOptions_SonyInputBoolOption_C;

