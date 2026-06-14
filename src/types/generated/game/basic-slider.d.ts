declare interface UBasic_Slider_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Slider: USlider;
    SizeBox_1: USizeBox;
    ProgressBar_0: UProgressBar;
    DATA_Percentage: UTextBlock;
    ColorOverlay: UBorder;
    OnValueChanged: FBasic_Slider_COnValueChanged;
    MinValue: number;
    MaxValue: number;
    OnPercentChanged: FBasic_Slider_COnPercentChanged;
    TextFormat: FText;
    MaxFractionalDigits: number;
    MinDesiredWidth: number;
    MinFractionalDigits: number;
    MappedMinValue: number;
    MappedMaxValue: number;
    PreviewPercent: number;
    BndEvt__Slider_K2Node_ComponentBoundEvent_4_OnFloatValueChangedEvent__DelegateSignature(Value: number): void;
    BndEvt__Slider_K2Node_ComponentBoundEvent_5_OnMouseCaptureBeginEvent__DelegateSignature(): void;
    BndEvt__Slider_K2Node_ComponentBoundEvent_6_OnMouseCaptureEndEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_Slider(EntryPoint: number): void;
    OnPercentChanged__DelegateSignature(Percent: number): void;
    OnValueChanged__DelegateSignature(Value: number): void;
}
declare const UBasic_Slider_C: UBasic_Slider_C;

