declare interface UOptions_MouseY_Sensitivity_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher_207: UWidgetSwitcher;
    TXT_ButtonText: UTextBlock;
    ToggleManualinput: UButton;
    SensitivityInput: USpinBox;
    ManualSensitivityInput: UHorizontalBox;
    Basic_Slider: UBasic_Slider_C;
    BaseMid: UBorder;
    UseSpinboxInput: boolean;
    CurrentSpinboxValue: number;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_1_OnValueChanged__DelegateSignature(Value: number): void;
    BndEvt__SensitivityInput_K2Node_ComponentBoundEvent_0_OnSpinBoxValueChangedEvent__DelegateSignature(InValue: number): void;
    BndEvt__Button_152_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Options_MouseY_Sensitivity(EntryPoint: number): void;
}
declare const UOptions_MouseY_Sensitivity_C: UOptions_MouseY_Sensitivity_C;

