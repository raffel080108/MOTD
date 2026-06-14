declare interface UOptions_SonyInputFloatOption_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Basic_Slider: UBasic_Slider_C;
    Option: ESonyInputSettingsFloats;
    StateChanged: FOptions_SonyInputFloatOption_CStateChanged;
    MaxValue: number;
    Construct(): void;
    UINeedsUpdate(): void;
    ShowOptions(): void;
    BndEvt__Basic_Slider_K2Node_ComponentBoundEvent_4_OnValueChanged__DelegateSignature(Value: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_SonyInputFloatOption(EntryPoint: number): void;
    StateChanged__DelegateSignature(NewValue: number): void;
}
declare const UOptions_SonyInputFloatOption_C: UOptions_SonyInputFloatOption_C;

