declare interface UOptions_MouseKeyboard_KeyBinding_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_KeyCapture_Secondary: UOptions_MouseKeyboard_KeyCapture_C;
    UI_KeyCapture_Primary: UOptions_MouseKeyboard_KeyCapture_C;
    ErrorLabel: UTextBlock;
    Basic_Option: UBasic_Option_C;
    Error: UWidgetAnimation;
    KeySettings: FCustomKeySetting;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_KeyCapture_K2Node_ComponentBoundEvent_0_OnKeyCaptureFinished__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_K2Node_ComponentBoundEvent_0_OnKeyCaptureError__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_K2Node_ComponentBoundEvent_1_OnKeyCaptureChanged__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_K2Node_ComponentBoundEvent_2_OnKeyCaptureCancelled__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_Secondary_K2Node_ComponentBoundEvent_0_OnKeyCaptureFinished__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_Secondary_K2Node_ComponentBoundEvent_8_OnKeyCaptureError__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_Secondary_K2Node_ComponentBoundEvent_27_OnKeyCaptureChanged__DelegateSignature(): void;
    BndEvt__UI_KeyCapture_Secondary_K2Node_ComponentBoundEvent_38_OnKeyCaptureCancelled__DelegateSignature(): void;
    Construct(): void;
    ExecuteUbergraph_Options_MouseKeyboard_KeyBinding(EntryPoint: number): void;
}
declare const UOptions_MouseKeyboard_KeyBinding_C: UOptions_MouseKeyboard_KeyBinding_C;

