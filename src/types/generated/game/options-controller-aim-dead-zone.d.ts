declare interface UOptions_Controller_AimDeadZone_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_2_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_Controller_AimDeadZone(EntryPoint: number): void;
}
declare const UOptions_Controller_AimDeadZone_C: UOptions_Controller_AimDeadZone_C;

