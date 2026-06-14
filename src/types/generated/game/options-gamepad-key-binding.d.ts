declare interface UOptions_Gamepad_KeyBinding_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_KeyCapture_Primary: UOptions_Gamepad_KeyCapture_C;
    LabelInfo: UUI_AdvancedLabel_C;
    Basic_Option: UBasic_Option_C;
    Error: UWidgetAnimation;
    ButtonSettings: FCustomKeySetting;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_KeyCapture_Primary_K2Node_ComponentBoundEvent_0_OnCapturingChanged__DelegateSignature(InCapturing: boolean): void;
    ExecuteUbergraph_Options_Gamepad_KeyBinding(EntryPoint: number): void;
}
declare const UOptions_Gamepad_KeyBinding_C: UOptions_Gamepad_KeyBinding_C;

