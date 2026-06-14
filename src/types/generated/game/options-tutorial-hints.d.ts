declare interface UOptions_TutorialHints_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Button_Reset: UBasic_ButtonScalable_C;
    Basic_CheckBox: UBasic_CheckBox_C;
    Construct(): void;
    OnEnableTutorialHintsChanged(NewValue: boolean): void;
    BndEvt__Button_Reset_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__Basic_CheckBox_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_Options_TutorialHints(EntryPoint: number): void;
}
declare const UOptions_TutorialHints_C: UOptions_TutorialHints_C;

