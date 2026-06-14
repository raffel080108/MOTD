declare interface UOptions_InvertMouseWheel_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_1_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_InvertMouseWheel(EntryPoint: number): void;
}
declare const UOptions_InvertMouseWheel_C: UOptions_InvertMouseWheel_C;

