declare interface UOptions_Gamepad_CustomizeControls_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ContentBox: UVerticalBox;
    Btn_Toggle: UBasic_ButtonCutCorner_C;
    BTN_ResetToDefaults: UBasic_ButtonWithControls_C;
    BindingsBox: UVerticalBox;
    Basic_Option: UBasic_Option_C;
    IsOpen: boolean;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    SetOpen(Index: boolean): void;
    CreateBindingWidgets(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    BndEvt__Btn_Toggle_K2Node_ComponentBoundEvent_3_OnClicked__DelegateSignature(Button: UBasic_ButtonCutCorner_C): void;
    BndEvt__BTN_ResetToDefaults_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_Options_Gamepad_CustomizeControls(EntryPoint: number): void;
}
declare const UOptions_Gamepad_CustomizeControls_C: UOptions_Gamepad_CustomizeControls_C;

