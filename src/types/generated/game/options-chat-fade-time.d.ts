declare interface UOptions_Chat_FadeTime_C extends USoundClassWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    OnVolumeChanged: FOptions_Chat_FadeTime_COnVolumeChanged;
    Construct(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_9_OnValueChanged__DelegateSignature(Value: number): void;
    ExecuteUbergraph_Options_Chat_FadeTime(EntryPoint: number): void;
    OnVolumeChanged__DelegateSignature(Volume: number): void;
}
declare const UOptions_Chat_FadeTime_C: UOptions_Chat_FadeTime_C;

