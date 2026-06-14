declare interface UOptions_ShowFPS_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    OnShowFPSChanged(NewValue: boolean): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_ShowFPS(EntryPoint: number): void;
}
declare const UOptions_ShowFPS_C: UOptions_ShowFPS_C;

