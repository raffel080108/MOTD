declare interface UOptions_ShowStartupScreenWhenBootingGame_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_8_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_ShowStartupScreenWhenBootingGame(EntryPoint: number): void;
}
declare const UOptions_ShowStartupScreenWhenBootingGame_C: UOptions_ShowStartupScreenWhenBootingGame_C;

