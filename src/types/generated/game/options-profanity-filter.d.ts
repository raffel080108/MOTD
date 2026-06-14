declare interface UOptions_ProfanityFilter_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    OnGameUserSettingsChanged(): void;
    ExecuteUbergraph_Options_ProfanityFilter(EntryPoint: number): void;
}
declare const UOptions_ProfanityFilter_C: UOptions_ProfanityFilter_C;

