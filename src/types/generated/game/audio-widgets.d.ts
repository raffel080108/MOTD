declare interface FAudioMaterialButtonStyle extends FAudioMaterialWidgetStyle {
    ButtonMainColor: FLinearColor;
    ButtonMainColorTint_1: FLinearColor;
    ButtonMainColorTint_2: FLinearColor;
    ButtonAccentColor: FLinearColor;
    ButtonShadowColor: FLinearColor;
    ButtonUnpressedOutlineColor: FLinearColor;
    ButtonPressedOutlineColor: FLinearColor;
}
declare const FAudioMaterialButtonStyle: FAudioMaterialButtonStyle;

declare interface FAudioMaterialEnvelopeSettings {
    EnvelopeType: EAudioMaterialEnvelopeType;
    AttackCurve: number;
    AttackValue: number;
    AttackTime: number;
    DecayCurve: number;
    DecayTime: number;
    SustainValue: number;
    ReleaseCurve: number;
    ReleaseTime: number;
}
declare const FAudioMaterialEnvelopeSettings: FAudioMaterialEnvelopeSettings;

declare interface FAudioMaterialEnvelopeStyle extends FAudioMaterialWidgetStyle {
    CurveColor: FLinearColor;
    BackgroundColor: FLinearColor;
    OutlineColor: FLinearColor;
}
declare const FAudioMaterialEnvelopeStyle: FAudioMaterialEnvelopeStyle;

declare interface FAudioMaterialKnobStyle extends FAudioMaterialWidgetStyle {
    KnobMainColor: FLinearColor;
    KnobAccentColor: FLinearColor;
    KnobShadowColor: FLinearColor;
    KnobSmoothBevelColor: FLinearColor;
    KnobIndicatorDotColor: FLinearColor;
    KnobEdgeFillColor: FLinearColor;
    KnobBarColor: FLinearColor;
    KnobBarShadowColor: FLinearColor;
    KnobBarFillMinColor: FLinearColor;
    KnobBarFillMidColor: FLinearColor;
    KnobBarFillMaxColor: FLinearColor;
    KnobBarFillTintColor: FLinearColor;
    TextBoxStyle: FAudioTextBoxStyle;
}
declare const FAudioMaterialKnobStyle: FAudioMaterialKnobStyle;

declare interface FAudioMaterialMeterStyle extends FAudioMaterialWidgetStyle {
    MeterFillMinColor: FLinearColor;
    MeterFillMidColor: FLinearColor;
    MeterFillMaxColor: FLinearColor;
    MeterFillBackgroundColor: FLinearColor;
    MeterPadding: FVector2D;
    ValueRangeDb: FVector2D;
    bShowScale: boolean;
    bScaleSide: boolean;
    ScaleHashOffset: number;
    ScaleHashWidth: number;
    ScaleHashHeight: number;
    DecibelsPerHash: number;
    Font: FSlateFontInfo;
}
declare const FAudioMaterialMeterStyle: FAudioMaterialMeterStyle;

declare interface FAudioMaterialSliderStyle extends FAudioMaterialWidgetStyle {
    SliderBackgroundColor: FLinearColor;
    SliderBackgroundAccentColor: FLinearColor;
    SliderValueMainColor: FLinearColor;
    SliderHandleMainColor: FLinearColor;
    SliderHandleOutlineColor: FLinearColor;
    TextBoxStyle: FAudioTextBoxStyle;
}
declare const FAudioMaterialSliderStyle: FAudioMaterialSliderStyle;

declare interface FAudioMaterialWidgetStyle extends FSlateWidgetStyle {
    Material: UMaterialInterface;
    DesiredSize: FVector2f;
}
declare const FAudioMaterialWidgetStyle: FAudioMaterialWidgetStyle;

declare interface FAudioMeterDefaultColorStyle extends FSlateWidgetStyle {
    MeterBackgroundColor: FLinearColor;
    MeterValueColor: FLinearColor;
    MeterPeakColor: FLinearColor;
    MeterClippingColor: FLinearColor;
    MeterScaleColor: FLinearColor;
    MeterScaleLabelColor: FLinearColor;
}
declare const FAudioMeterDefaultColorStyle: FAudioMeterDefaultColorStyle;

declare interface FAudioMeterStyle extends FSlateWidgetStyle {
    MeterValueImage: FSlateBrush;
    BackgroundImage: FSlateBrush;
    MeterBackgroundImage: FSlateBrush;
    MeterValueBackgroundImage: FSlateBrush;
    MeterPeakImage: FSlateBrush;
    MeterSize: FVector2D;
    MeterPadding: FVector2D;
    MeterValuePadding: number;
    PeakValueWidth: number;
    ValueRangeDb: FVector2D;
    bShowScale: boolean;
    bScaleSide: boolean;
    ScaleHashOffset: number;
    ScaleHashWidth: number;
    ScaleHashHeight: number;
    DecibelsPerHash: number;
    Font: FSlateFontInfo;
}
declare const FAudioMeterStyle: FAudioMeterStyle;

declare interface FAudioOscilloscopePanelStyle extends FSlateWidgetStyle {
    TimeRulerStyle: FFixedSampleSequenceRulerStyle;
    ValueGridStyle: FSampledSequenceValueGridOverlayStyle;
    WaveViewerStyle: FSampledSequenceViewerStyle;
    TriggerThresholdLineStyle: FTriggerThresholdLineStyle;
}
declare const FAudioOscilloscopePanelStyle: FAudioOscilloscopePanelStyle;

declare interface FAudioRadialSliderStyle extends FSlateWidgetStyle {
    TextBoxStyle: FAudioTextBoxStyle;
    CenterBackgroundColor: FSlateColor;
    SliderBarColor: FSlateColor;
    SliderProgressColor: FSlateColor;
    LabelPadding: number;
    DefaultSliderRadius: number;
}
declare const FAudioRadialSliderStyle: FAudioRadialSliderStyle;

declare interface FAudioSliderStyle extends FSlateWidgetStyle {
    SliderStyle: FSliderStyle;
    TextBoxStyle: FAudioTextBoxStyle;
    WidgetBackgroundImage: FSlateBrush;
    SliderBackgroundColor: FSlateColor;
    SliderBackgroundSize: FVector2D;
    LabelPadding: number;
    SliderBarColor: FSlateColor;
    SliderThumbColor: FSlateColor;
    WidgetBackgroundColor: FSlateColor;
}
declare const FAudioSliderStyle: FAudioSliderStyle;

declare interface FAudioSpectrumPlotStyle extends FSlateWidgetStyle {
    BackgroundColor: FSlateColor;
    GridColor: FSlateColor;
    AxisLabelColor: FSlateColor;
    AxisLabelFont: FSlateFontInfo;
    SpectrumColor: FSlateColor;
    CrosshairColor: FSlateColor;
    CrosshairLabelFont: FSlateFontInfo;
}
declare const FAudioSpectrumPlotStyle: FAudioSpectrumPlotStyle;

declare interface FAudioTextBoxStyle extends FSlateWidgetStyle {
    BackgroundImage: FSlateBrush;
    BackgroundColor: FSlateColor;
}
declare const FAudioTextBoxStyle: FAudioTextBoxStyle;

declare interface FAudioVectorscopePanelStyle extends FSlateWidgetStyle {
    ValueGridStyle: FSampledSequenceValueGridOverlayStyle;
    VectorViewerStyle: FSampledSequenceVectorViewerStyle;
}
declare const FAudioVectorscopePanelStyle: FAudioVectorscopePanelStyle;

declare interface FFixedSampleSequenceRulerStyle extends FSlateWidgetStyle {
    HandleWidth: number;
    HandleColor: FSlateColor;
    HandleBrush: FSlateBrush;
    TicksColor: FSlateColor;
    TicksTextColor: FSlateColor;
    TicksTextFont: FSlateFontInfo;
    TicksTextOffset: number;
    BackgroundColor: FSlateColor;
    BackgroundBrush: FSlateBrush;
    DesiredWidth: number;
    DesiredHeight: number;
}
declare const FFixedSampleSequenceRulerStyle: FFixedSampleSequenceRulerStyle;

declare interface FMeterChannelInfo {
    MeterValue: number;
    PeakValue: number;
    ClippingValue: number;
}
declare const FMeterChannelInfo: FMeterChannelInfo;

declare interface FPlayheadOverlayStyle extends FSlateWidgetStyle {
    PlayheadColor: FSlateColor;
    PlayheadWidth: number;
    DesiredWidth: number;
    DesiredHeight: number;
}
declare const FPlayheadOverlayStyle: FPlayheadOverlayStyle;

declare interface FSampledSequenceValueGridOverlayStyle extends FSlateWidgetStyle {
    GridColor: FSlateColor;
    GridThickness: number;
    LabelTextColor: FSlateColor;
    LabelTextFont: FSlateFontInfo;
    DesiredWidth: number;
    DesiredHeight: number;
}
declare const FSampledSequenceValueGridOverlayStyle: FSampledSequenceValueGridOverlayStyle;

declare interface FSampledSequenceVectorViewerStyle extends FSlateWidgetStyle {
    BackgroundColor: FSlateColor;
    BackgroundBrush: FSlateBrush;
    LineColor: FLinearColor;
    LineThickness: number;
}
declare const FSampledSequenceVectorViewerStyle: FSampledSequenceVectorViewerStyle;

declare interface FSampledSequenceViewerStyle extends FSlateWidgetStyle {
    SequenceColor: FSlateColor;
    SequenceLineThickness: number;
    MajorGridLineColor: FSlateColor;
    MinorGridLineColor: FSlateColor;
    ZeroCrossingLineColor: FSlateColor;
    ZeroCrossingLineThickness: number;
    SampleMarkersSize: number;
    SequenceBackgroundColor: FSlateColor;
    BackgroundBrush: FSlateBrush;
    DesiredWidth: number;
    DesiredHeight: number;
}
declare const FSampledSequenceViewerStyle: FSampledSequenceViewerStyle;

declare interface FSpectrogramRackUnitSettings {
    AnalyzerType: EAudioSpectrumAnalyzerType;
    FFTAnalyzerFFTSize: EFFTSize;
    CQTAnalyzerFFTSize: EConstantQFFTSizeEnum;
    PixelPlotMode: EAudioSpectrogramFrequencyAxisPixelBucketMode;
    FrequencyScale: EAudioSpectrogramFrequencyAxisScale;
    ColorMap: EAudioColorGradient;
    orientation: EOrientation;
}
declare const FSpectrogramRackUnitSettings: FSpectrogramRackUnitSettings;

declare interface FSpectrumAnalyzerRackUnitSettings {
    Ballistics: EAudioSpectrumAnalyzerBallistics;
    AnalyzerType: EAudioSpectrumAnalyzerType;
    FFTAnalyzerFFTSize: EFFTSize;
    CQTAnalyzerFFTSize: EConstantQFFTSizeEnum;
    TiltSpectrum: EAudioSpectrumPlotTilt;
    PixelPlotMode: EAudioSpectrumPlotFrequencyAxisPixelBucketMode;
    FrequencyScale: EAudioSpectrumPlotFrequencyAxisScale;
    bDisplayFrequencyAxisLabels: boolean;
    bDisplaySoundLevelAxisLabels: boolean;
}
declare const FSpectrumAnalyzerRackUnitSettings: FSpectrumAnalyzerRackUnitSettings;

declare interface FTriggerThresholdLineStyle extends FSlateWidgetStyle {
    LineColor: FLinearColor;
}
declare const FTriggerThresholdLineStyle: FTriggerThresholdLineStyle;

declare interface UAudioFrequencyRadialSlider extends UAudioRadialSlider {

}
declare const UAudioFrequencyRadialSlider: UAudioFrequencyRadialSlider;

declare interface UAudioFrequencySlider extends UAudioSliderBase {
    OutputRange: FVector2D;
}
declare const UAudioFrequencySlider: UAudioFrequencySlider;

declare interface UAudioMaterialButton extends UWidget {
    WidgetStyle: FAudioMaterialButtonStyle;
    OnButtonPressedChangedEvent: FAudioMaterialButtonOnButtonPressedChangedEvent;
    bIsPressed: boolean;
    SetIsPressed(InPressed: boolean): void;
    GetIsPressed(): boolean;
}
declare const UAudioMaterialButton: UAudioMaterialButton;

declare interface UAudioMaterialButtonWidgetStyle extends USlateWidgetStyleContainerBase {
    ButtonStyle: FAudioMaterialButtonStyle;
}
declare const UAudioMaterialButtonWidgetStyle: UAudioMaterialButtonWidgetStyle;

declare interface UAudioMaterialEnvelope extends UWidget {
    WidgetStyle: FAudioMaterialEnvelopeStyle;
    EnvelopeSettings: FAudioMaterialEnvelopeSettings;
}
declare const UAudioMaterialEnvelope: UAudioMaterialEnvelope;

declare interface UAudioMaterialKnob extends UWidget {
    WidgetStyle: FAudioMaterialKnobStyle;
    OnKnobValueChanged: FAudioMaterialKnobOnKnobValueChanged;
    Value: number;
    TuneSpeed: number;
    FineTuneSpeed: number;
    bLocked: boolean;
    bMouseUsesStep: boolean;
    StepSize: number;
    SetValue(InValue: number): void;
    SetTuneSpeed(InValue: number): void;
    SetStepSize(InValue: number): void;
    SetMouseUsesStep(InUsesStep: boolean): void;
    SetLocked(InLocked: boolean): void;
    SetFineTuneSpeed(InValue: number): void;
    GetValue(): number;
    GetTuneSpeed(): number;
    GetStepSize(): number;
    GetMouseUsesStep(): boolean;
    GetIsLocked(): boolean;
    GetFineTuneSpeed(): number;
}
declare const UAudioMaterialKnob: UAudioMaterialKnob;

declare interface UAudioMaterialKnobWidgetStyle extends USlateWidgetStyleContainerBase {
    KnobStyle: FAudioMaterialKnobStyle;
}
declare const UAudioMaterialKnobWidgetStyle: UAudioMaterialKnobWidgetStyle;

declare interface UAudioMaterialMeter extends UWidget {
    WidgetStyle: FAudioMaterialMeterStyle;
    orientation: EOrientation;
    MeterChannelInfoDelegate: FAudioMaterialMeterMeterChannelInfoDelegate;
    MeterChannelInfo: TArray<FMeterChannelInfo>;
    SetMeterChannelInfo(InMeterChannelInfo: TArray<FMeterChannelInfo>): void;
    GetMeterChannelInfo__DelegateSignature(): TArray<FMeterChannelInfo>;
    GetMeterChannelInfo(): TArray<FMeterChannelInfo>;
}
declare const UAudioMaterialMeter: UAudioMaterialMeter;

declare interface UAudioMaterialMeterWidgetStyle extends USlateWidgetStyleContainerBase {
    MeterStyle: FAudioMaterialMeterStyle;
}
declare const UAudioMaterialMeterWidgetStyle: UAudioMaterialMeterWidgetStyle;

declare interface UAudioMaterialSlider extends UWidget {
    WidgetStyle: FAudioMaterialSliderStyle;
    OnValueChanged: FAudioMaterialSliderOnValueChanged;
    Value: number;
    orientation: EOrientation;
    TuneSpeed: number;
    FineTuneSpeed: number;
    bLocked: boolean;
    bMouseUsesStep: boolean;
    StepSize: number;
    SetValue(InValue: number): void;
    SetTuneSpeed(InValue: number): void;
    SetStepSize(InValue: number): void;
    SetMouseUsesStep(bInUsesStep: boolean): void;
    SetLocked(bInLocked: boolean): void;
    SetFineTuneSpeed(InValue: number): void;
    GetValue(): number;
    GetTuneSpeed(): number;
    GetStepSize(): number;
    GetMouseUsesStep(): boolean;
    GetIsLocked(): boolean;
    GetFineTuneSpeed(): number;
}
declare const UAudioMaterialSlider: UAudioMaterialSlider;

declare interface UAudioMaterialSliderWidgetStyle extends USlateWidgetStyleContainerBase {
    SliderStyle: FAudioMaterialSliderStyle;
}
declare const UAudioMaterialSliderWidgetStyle: UAudioMaterialSliderWidgetStyle;

declare interface UAudioMeter extends UWidget {
    MeterChannelInfo: TArray<FMeterChannelInfo>;
    MeterChannelInfoDelegate: FAudioMeterMeterChannelInfoDelegate;
    WidgetStyle: FAudioMeterStyle;
    orientation: EOrientation;
    BackgroundColor: FLinearColor;
    MeterBackgroundColor: FLinearColor;
    MeterValueColor: FLinearColor;
    MeterPeakColor: FLinearColor;
    MeterClippingColor: FLinearColor;
    MeterScaleColor: FLinearColor;
    MeterScaleLabelColor: FLinearColor;
    SetMeterValueColor(InValue: FLinearColor): void;
    SetMeterScaleLabelColor(InValue: FLinearColor): void;
    SetMeterScaleColor(InValue: FLinearColor): void;
    SetMeterPeakColor(InValue: FLinearColor): void;
    SetMeterClippingColor(InValue: FLinearColor): void;
    SetMeterChannelInfo(InMeterChannelInfo: TArray<FMeterChannelInfo>): void;
    SetMeterBackgroundColor(InValue: FLinearColor): void;
    SetBackgroundColor(InValue: FLinearColor): void;
    GetMeterChannelInfo__DelegateSignature(): TArray<FMeterChannelInfo>;
    GetMeterChannelInfo(): TArray<FMeterChannelInfo>;
}
declare const UAudioMeter: UAudioMeter;

declare interface UAudioOscilloscope extends UWidget {
    OscilloscopeStyle: FAudioOscilloscopePanelStyle;
    AudioBus: UAudioBus;
    MaxTimeWindowMs: number;
    TimeWindowMs: number;
    AnalysisPeriodMs: number;
    bShowTimeGrid: boolean;
    TimeGridLabelsUnit: EXAxisLabelsUnit;
    bShowAmplitudeGrid: boolean;
    bShowAmplitudeLabels: boolean;
    AmplitudeGridLabelsUnit: EYAxisLabelsUnit;
    TriggerMode: EAudioOscilloscopeTriggerMode;
    TriggerThreshold: number;
    PanelLayoutType: EAudioPanelLayoutType;
    ChannelToAnalyze: number;
    StopProcessing(): void;
    StartProcessing(): void;
    GetOscilloscopeAudioSamples__DelegateSignature(): TArray<number>;
    CanTriggeringBeSet(): boolean;
}
declare const UAudioOscilloscope: UAudioOscilloscope;

declare interface UAudioRadialSlider extends UWidget {
    Value: number;
    ValueDelegate: FAudioRadialSliderValueDelegate;
    WidgetLayout: EAudioRadialSliderLayout;
    CenterBackgroundColor: FLinearColor;
    SliderProgressColor: FLinearColor;
    SliderBarColor: FLinearColor;
    HandStartEndRatio: FVector2D;
    UnitsText: FText;
    TextLabelBackgroundColor: FLinearColor;
    ShowLabelOnlyOnHover: boolean;
    ShowUnitsText: boolean;
    IsUnitsTextReadOnly: boolean;
    IsValueTextReadOnly: boolean;
    SliderThickness: number;
    OutputRange: FVector2D;
    OnValueChanged: FAudioRadialSliderOnValueChanged;
    SetWidgetLayout(InLayout: EAudioRadialSliderLayout): void;
    SetValueTextReadOnly(bIsReadOnly: boolean): void;
    SetUnitsTextReadOnly(bIsReadOnly: boolean): void;
    SetUnitsText(Units: FText): void;
    SetTextLabelBackgroundColor(InColor: FSlateColor): void;
    SetSliderThickness(InThickness: number): void;
    SetSliderProgressColor(InValue: FLinearColor): void;
    SetSliderBarColor(InValue: FLinearColor): void;
    SetShowUnitsText(bShowUnitsText: boolean): void;
    SetShowLabelOnlyOnHover(bShowLabelOnlyOnHover: boolean): void;
    SetOutputRange(InOutputRange: FVector2D): void;
    SetHandStartEndRatio(InHandStartEndRatio: FVector2D): void;
    SetCenterBackgroundColor(InValue: FLinearColor): void;
    GetSliderValue(OutputValue: number): number;
    GetOutputValue(InSliderValue: number): number;
}
declare const UAudioRadialSlider: UAudioRadialSlider;

declare interface UAudioSlider extends UAudioSliderBase {
    LinToOutputCurve: TWeakObjectPtr<UCurveFloat>;
    OutputToLinCurve: TWeakObjectPtr<UCurveFloat>;
}
declare const UAudioSlider: UAudioSlider;

declare interface UAudioSliderBase extends UWidget {
    Value: number;
    UnitsText: FText;
    TextLabelBackgroundColor: FLinearColor;
    TextLabelBackgroundColorDelegate: FAudioSliderBaseTextLabelBackgroundColorDelegate;
    ShowLabelOnlyOnHover: boolean;
    ShowUnitsText: boolean;
    IsUnitsTextReadOnly: boolean;
    IsValueTextReadOnly: boolean;
    ValueDelegate: FAudioSliderBaseValueDelegate;
    SliderBackgroundColor: FLinearColor;
    SliderBackgroundColorDelegate: FAudioSliderBaseSliderBackgroundColorDelegate;
    SliderBarColor: FLinearColor;
    SliderBarColorDelegate: FAudioSliderBaseSliderBarColorDelegate;
    SliderThumbColor: FLinearColor;
    SliderThumbColorDelegate: FAudioSliderBaseSliderThumbColorDelegate;
    WidgetBackgroundColor: FLinearColor;
    WidgetBackgroundColorDelegate: FAudioSliderBaseWidgetBackgroundColorDelegate;
    orientation: EOrientation;
    OnValueChanged: FAudioSliderBaseOnValueChanged;
    SetWidgetBackgroundColor(InValue: FLinearColor): void;
    SetValueTextReadOnly(bIsReadOnly: boolean): void;
    SetUnitsTextReadOnly(bIsReadOnly: boolean): void;
    SetUnitsText(Units: FText): void;
    SetTextLabelBackgroundColor(InColor: FSlateColor): void;
    SetSliderThumbColor(InValue: FLinearColor): void;
    SetSliderBarColor(InValue: FLinearColor): void;
    SetSliderBackgroundColor(InValue: FLinearColor): void;
    SetShowUnitsText(bShowUnitsText: boolean): void;
    SetShowLabelOnlyOnHover(bShowLabelOnlyOnHover: boolean): void;
    GetSliderValue(OutputValue: number): number;
    GetOutputValue(InSliderValue: number): number;
    GetLinValue(OutputValue: number): number;
}
declare const UAudioSliderBase: UAudioSliderBase;

declare interface UAudioVectorscope extends UWidget {
    VectorscopeStyle: FAudioVectorscopePanelStyle;
    AudioBus: UAudioBus;
    bShowGrid: boolean;
    GridDivisions: number;
    MaxDisplayPersistenceMs: number;
    DisplayPersistenceMs: number;
    Scale: number;
    PanelLayoutType: EAudioPanelLayoutType;
    StopProcessing(): void;
    StartProcessing(): void;
    GetVectorscopeAudioSamples__DelegateSignature(): TArray<number>;
}
declare const UAudioVectorscope: UAudioVectorscope;

declare interface UAudioVolumeRadialSlider extends UAudioRadialSlider {

}
declare const UAudioVolumeRadialSlider: UAudioVolumeRadialSlider;

declare interface UAudioVolumeSlider extends UAudioSlider {

}
declare const UAudioVolumeSlider: UAudioVolumeSlider;

