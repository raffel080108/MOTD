declare interface UOptions_UIScale_Slider_C extends USoundClassWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    OnVolumeChanged: FOptions_UIScale_Slider_COnVolumeChanged;
    Construct(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_9_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_UIScale_Slider(EntryPoint: number): void;
    OnVolumeChanged__DelegateSignature(Volume: number): void;
}
declare const UOptions_UIScale_Slider_C: UOptions_UIScale_Slider_C;

