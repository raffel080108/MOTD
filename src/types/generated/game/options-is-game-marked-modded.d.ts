declare interface UOptions_IsGameMarkedModded_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    IsInitializing: boolean;
    Construct(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    OnGameUserSettingsChanged(): void;
    ExecuteUbergraph_Options_IsGameMarkedModded(EntryPoint: number): void;
}
declare const UOptions_IsGameMarkedModded_C: UOptions_IsGameMarkedModded_C;

