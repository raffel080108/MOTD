declare interface UOptions_Controller_AimSensitivity_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_3_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_Controller_AimSensitivity(EntryPoint: number): void;
}
declare const UOptions_Controller_AimSensitivity_C: UOptions_Controller_AimSensitivity_C;

