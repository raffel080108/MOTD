declare interface UOptions_MouseKeyboard_CustomizeControls_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ContentBox: UVerticalBox;
    Btn_Toggle: UBasic_ButtonCutCorner_C;
    BTN_ResetToDefaults: UBasic_ButtonWithControls_C;
    BindingsBox: UVerticalBox;
    Basic_Option: UBasic_Option_C;
    IsOpen: boolean;
    ContainsAnyName(Button: FCustomKeySetting, ActionNames: TArray<FName>, Result: boolean): void;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    SetOpen(Index: boolean): void;
    CreateBindingWidgets(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__BTN_ResetToDefaults_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    Construct(): void;
    BndEvt__Btn_Toggle_K2Node_ComponentBoundEvent_3_OnClicked__DelegateSignature(Button: UBasic_ButtonCutCorner_C): void;
    ExecuteUbergraph_Options_MouseKeyboard_CustomizeControls(EntryPoint: number): void;
}
declare const UOptions_MouseKeyboard_CustomizeControls_C: UOptions_MouseKeyboard_CustomizeControls_C;

