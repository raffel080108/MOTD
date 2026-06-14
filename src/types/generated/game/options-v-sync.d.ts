declare interface UOptions_VSync_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_15_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_VSync(EntryPoint: number): void;
}
declare const UOptions_VSync_C: UOptions_VSync_C;

