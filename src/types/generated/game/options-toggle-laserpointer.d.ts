declare interface UOptions_ToggleLaserpointer_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_ToggleLaserpointer(EntryPoint: number): void;
}
declare const UOptions_ToggleLaserpointer_C: UOptions_ToggleLaserpointer_C;

