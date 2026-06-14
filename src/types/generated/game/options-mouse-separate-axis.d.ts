declare interface UOptions_Mouse_SeparateAxis_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_Mouse_SeparateAxis(EntryPoint: number): void;
}
declare const UOptions_Mouse_SeparateAxis_C: UOptions_Mouse_SeparateAxis_C;

