declare interface FAudioMaterialButtonStyle extends FAudioMaterialWidgetStyle {
    ButtonMainColor: FLinearColor;
    ButtonMainColorTint_1: FLinearColor;
    ButtonMainColorTint_2: FLinearColor;
    ButtonAccentColor: FLinearColor;
    ButtonShadowColor: FLinearColor;
    ButtonUnpressedOutlineColor: FLinearColor;
    ButtonPressedOutlineColor: FLinearColor;
}

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

declare interface FAudioMaterialEnvelopeStyle extends FAudioMaterialWidgetStyle {
    CurveColor: FLinearColor;
    BackgroundColor: FLinearColor;
    OutlineColor: FLinearColor;
}

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

declare interface FAudioMaterialSliderStyle extends FAudioMaterialWidgetStyle {
    SliderBackgroundColor: FLinearColor;
    SliderBackgroundAccentColor: FLinearColor;
    SliderValueMainColor: FLinearColor;
    SliderHandleMainColor: FLinearColor;
    SliderHandleOutlineColor: FLinearColor;
    TextBoxStyle: FAudioTextBoxStyle;
}

declare interface FAudioMaterialWidgetStyle extends FSlateWidgetStyle {
    Material: UMaterialInterface;
    DesiredSize: FVector2f;
}

declare interface FAudioMeterDefaultColorStyle extends FSlateWidgetStyle {
    MeterBackgroundColor: FLinearColor;
    MeterValueColor: FLinearColor;
    MeterPeakColor: FLinearColor;
    MeterClippingColor: FLinearColor;
    MeterScaleColor: FLinearColor;
    MeterScaleLabelColor: FLinearColor;
}

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

declare interface FAudioOscilloscopePanelStyle extends FSlateWidgetStyle {
    TimeRulerStyle: FFixedSampleSequenceRulerStyle;
    ValueGridStyle: FSampledSequenceValueGridOverlayStyle;
    WaveViewerStyle: FSampledSequenceViewerStyle;
    TriggerThresholdLineStyle: FTriggerThresholdLineStyle;
}

declare interface FAudioRadialSliderStyle extends FSlateWidgetStyle {
    TextBoxStyle: FAudioTextBoxStyle;
    CenterBackgroundColor: FSlateColor;
    SliderBarColor: FSlateColor;
    SliderProgressColor: FSlateColor;
    LabelPadding: number;
    DefaultSliderRadius: number;
}

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

declare interface FAudioSpectrumPlotStyle extends FSlateWidgetStyle {
    BackgroundColor: FSlateColor;
    GridColor: FSlateColor;
    AxisLabelColor: FSlateColor;
    AxisLabelFont: FSlateFontInfo;
    SpectrumColor: FSlateColor;
    CrosshairColor: FSlateColor;
    CrosshairLabelFont: FSlateFontInfo;
}

declare interface FAudioTextBoxStyle extends FSlateWidgetStyle {
    BackgroundImage: FSlateBrush;
    BackgroundColor: FSlateColor;
}

declare interface FAudioVectorscopePanelStyle extends FSlateWidgetStyle {
    ValueGridStyle: FSampledSequenceValueGridOverlayStyle;
    VectorViewerStyle: FSampledSequenceVectorViewerStyle;
}

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

declare interface FMeterChannelInfo {
    MeterValue: number;
    PeakValue: number;
    ClippingValue: number;
}

declare interface FPlayheadOverlayStyle extends FSlateWidgetStyle {
    PlayheadColor: FSlateColor;
    PlayheadWidth: number;
    DesiredWidth: number;
    DesiredHeight: number;
}

declare interface FSampledSequenceValueGridOverlayStyle extends FSlateWidgetStyle {
    GridColor: FSlateColor;
    GridThickness: number;
    LabelTextColor: FSlateColor;
    LabelTextFont: FSlateFontInfo;
    DesiredWidth: number;
    DesiredHeight: number;
}

declare interface FSampledSequenceVectorViewerStyle extends FSlateWidgetStyle {
    BackgroundColor: FSlateColor;
    BackgroundBrush: FSlateBrush;
    LineColor: FLinearColor;
    LineThickness: number;
}

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

declare interface FSpectrogramRackUnitSettings {
    AnalyzerType: EAudioSpectrumAnalyzerType;
    FFTAnalyzerFFTSize: EFFTSize;
    CQTAnalyzerFFTSize: EConstantQFFTSizeEnum;
    PixelPlotMode: EAudioSpectrogramFrequencyAxisPixelBucketMode;
    FrequencyScale: EAudioSpectrogramFrequencyAxisScale;
    ColorMap: EAudioColorGradient;
    orientation: EOrientation;
}

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

declare interface FTriggerThresholdLineStyle extends FSlateWidgetStyle {
    LineColor: FLinearColor;
}

declare interface UAudioFrequencyRadialSlider extends UAudioRadialSlider {
    readonly __staticRegistry: 
        UAudioRadialSlider['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioRadialSlider['__propertyRegistry'];
}

declare interface UAudioFrequencySlider extends UAudioSliderBase {
    readonly __properties_UAudioFrequencySlider: {
        OutputRange: FVector2D;
    };
    readonly __staticRegistry: 
        UAudioSliderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioFrequencySlider['__properties_UAudioFrequencySlider'] &
        UAudioSliderBase['__propertyRegistry'];
}

declare interface UAudioMaterialButton extends UWidget {
    readonly __static_UAudioMaterialButton: {
        SetIsPressed(InPressed: boolean): void;
        GetIsPressed(): boolean;
    };
    readonly __properties_UAudioMaterialButton: {
        WidgetStyle: FAudioMaterialButtonStyle;
        OnButtonPressedChangedEvent: FAudioMaterialButtonOnButtonPressedChangedEvent;
        bIsPressed: boolean;
    };
    readonly __staticRegistry: 
        UAudioMaterialButton['__static_UAudioMaterialButton'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialButton['__properties_UAudioMaterialButton'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioMaterialButtonWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UAudioMaterialButtonWidgetStyle: {
        ButtonStyle: FAudioMaterialButtonStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialButtonWidgetStyle['__properties_UAudioMaterialButtonWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UAudioMaterialEnvelope extends UWidget {
    readonly __properties_UAudioMaterialEnvelope: {
        WidgetStyle: FAudioMaterialEnvelopeStyle;
        EnvelopeSettings: FAudioMaterialEnvelopeSettings;
    };
    readonly __staticRegistry: 
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialEnvelope['__properties_UAudioMaterialEnvelope'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioMaterialKnob extends UWidget {
    readonly __static_UAudioMaterialKnob: {
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
    };
    readonly __properties_UAudioMaterialKnob: {
        WidgetStyle: FAudioMaterialKnobStyle;
        OnKnobValueChanged: FAudioMaterialKnobOnKnobValueChanged;
        Value: number;
        TuneSpeed: number;
        FineTuneSpeed: number;
        bLocked: boolean;
        bMouseUsesStep: boolean;
        StepSize: number;
    };
    readonly __staticRegistry: 
        UAudioMaterialKnob['__static_UAudioMaterialKnob'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialKnob['__properties_UAudioMaterialKnob'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioMaterialKnobWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UAudioMaterialKnobWidgetStyle: {
        KnobStyle: FAudioMaterialKnobStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialKnobWidgetStyle['__properties_UAudioMaterialKnobWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UAudioMaterialMeter extends UWidget {
    readonly __static_UAudioMaterialMeter: {
        SetMeterChannelInfo(InMeterChannelInfo: FMeterChannelInfo[]): void;
        GetMeterChannelInfo__DelegateSignature(): FMeterChannelInfo[];
        GetMeterChannelInfo(): FMeterChannelInfo[];
    };
    readonly __properties_UAudioMaterialMeter: {
        WidgetStyle: FAudioMaterialMeterStyle;
        orientation: EOrientation;
        MeterChannelInfoDelegate: FAudioMaterialMeterMeterChannelInfoDelegate;
        MeterChannelInfo: FMeterChannelInfo[];
    };
    readonly __staticRegistry: 
        UAudioMaterialMeter['__static_UAudioMaterialMeter'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialMeter['__properties_UAudioMaterialMeter'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioMaterialMeterWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UAudioMaterialMeterWidgetStyle: {
        MeterStyle: FAudioMaterialMeterStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialMeterWidgetStyle['__properties_UAudioMaterialMeterWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UAudioMaterialSlider extends UWidget {
    readonly __static_UAudioMaterialSlider: {
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
    };
    readonly __properties_UAudioMaterialSlider: {
        WidgetStyle: FAudioMaterialSliderStyle;
        OnValueChanged: FAudioMaterialSliderOnValueChanged;
        Value: number;
        orientation: EOrientation;
        TuneSpeed: number;
        FineTuneSpeed: number;
        bLocked: boolean;
        bMouseUsesStep: boolean;
        StepSize: number;
    };
    readonly __staticRegistry: 
        UAudioMaterialSlider['__static_UAudioMaterialSlider'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialSlider['__properties_UAudioMaterialSlider'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioMaterialSliderWidgetStyle extends USlateWidgetStyleContainerBase {
    readonly __properties_UAudioMaterialSliderWidgetStyle: {
        SliderStyle: FAudioMaterialSliderStyle;
    };
    readonly __staticRegistry: 
        USlateWidgetStyleContainerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMaterialSliderWidgetStyle['__properties_UAudioMaterialSliderWidgetStyle'] &
        USlateWidgetStyleContainerBase['__propertyRegistry'];
}

declare interface UAudioMeter extends UWidget {
    readonly __static_UAudioMeter: {
        SetMeterValueColor(InValue: FLinearColor): void;
        SetMeterScaleLabelColor(InValue: FLinearColor): void;
        SetMeterScaleColor(InValue: FLinearColor): void;
        SetMeterPeakColor(InValue: FLinearColor): void;
        SetMeterClippingColor(InValue: FLinearColor): void;
        SetMeterChannelInfo(InMeterChannelInfo: FMeterChannelInfo[]): void;
        SetMeterBackgroundColor(InValue: FLinearColor): void;
        SetBackgroundColor(InValue: FLinearColor): void;
        GetMeterChannelInfo__DelegateSignature(): FMeterChannelInfo[];
        GetMeterChannelInfo(): FMeterChannelInfo[];
    };
    readonly __properties_UAudioMeter: {
        MeterChannelInfo: FMeterChannelInfo[];
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
    };
    readonly __staticRegistry: 
        UAudioMeter['__static_UAudioMeter'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioMeter['__properties_UAudioMeter'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioOscilloscope extends UWidget {
    readonly __static_UAudioOscilloscope: {
        StopProcessing(): void;
        StartProcessing(): void;
        GetOscilloscopeAudioSamples__DelegateSignature(): number[];
        CanTriggeringBeSet(): boolean;
    };
    readonly __properties_UAudioOscilloscope: {
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
    };
    readonly __staticRegistry: 
        UAudioOscilloscope['__static_UAudioOscilloscope'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioOscilloscope['__properties_UAudioOscilloscope'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioRadialSlider extends UWidget {
    readonly __static_UAudioRadialSlider: {
        SetWidgetLayout(InLayout: EAudioRadialSliderLayout): void;
        SetValueTextReadOnly(bIsReadOnly: boolean): void;
        SetUnitsTextReadOnly(bIsReadOnly: boolean): void;
        SetUnitsText(Units: string): void;
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
    };
    readonly __properties_UAudioRadialSlider: {
        Value: number;
        ValueDelegate: FAudioRadialSliderValueDelegate;
        WidgetLayout: EAudioRadialSliderLayout;
        CenterBackgroundColor: FLinearColor;
        SliderProgressColor: FLinearColor;
        SliderBarColor: FLinearColor;
        HandStartEndRatio: FVector2D;
        UnitsText: string;
        TextLabelBackgroundColor: FLinearColor;
        ShowLabelOnlyOnHover: boolean;
        ShowUnitsText: boolean;
        IsUnitsTextReadOnly: boolean;
        IsValueTextReadOnly: boolean;
        SliderThickness: number;
        OutputRange: FVector2D;
        OnValueChanged: FAudioRadialSliderOnValueChanged;
    };
    readonly __staticRegistry: 
        UAudioRadialSlider['__static_UAudioRadialSlider'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioRadialSlider['__properties_UAudioRadialSlider'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioSlider extends UAudioSliderBase {
    readonly __properties_UAudioSlider: {
        LinToOutputCurve: TWeakObjectPtr<UCurveFloat>;
        OutputToLinCurve: TWeakObjectPtr<UCurveFloat>;
    };
    readonly __staticRegistry: 
        UAudioSliderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioSlider['__properties_UAudioSlider'] &
        UAudioSliderBase['__propertyRegistry'];
}

declare interface UAudioSliderBase extends UWidget {
    readonly __static_UAudioSliderBase: {
        SetWidgetBackgroundColor(InValue: FLinearColor): void;
        SetValueTextReadOnly(bIsReadOnly: boolean): void;
        SetUnitsTextReadOnly(bIsReadOnly: boolean): void;
        SetUnitsText(Units: string): void;
        SetTextLabelBackgroundColor(InColor: FSlateColor): void;
        SetSliderThumbColor(InValue: FLinearColor): void;
        SetSliderBarColor(InValue: FLinearColor): void;
        SetSliderBackgroundColor(InValue: FLinearColor): void;
        SetShowUnitsText(bShowUnitsText: boolean): void;
        SetShowLabelOnlyOnHover(bShowLabelOnlyOnHover: boolean): void;
        GetSliderValue(OutputValue: number): number;
        GetOutputValue(InSliderValue: number): number;
        GetLinValue(OutputValue: number): number;
    };
    readonly __properties_UAudioSliderBase: {
        Value: number;
        UnitsText: string;
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
    };
    readonly __staticRegistry: 
        UAudioSliderBase['__static_UAudioSliderBase'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioSliderBase['__properties_UAudioSliderBase'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioVectorscope extends UWidget {
    readonly __static_UAudioVectorscope: {
        StopProcessing(): void;
        StartProcessing(): void;
        GetVectorscopeAudioSamples__DelegateSignature(): number[];
    };
    readonly __properties_UAudioVectorscope: {
        VectorscopeStyle: FAudioVectorscopePanelStyle;
        AudioBus: UAudioBus;
        bShowGrid: boolean;
        GridDivisions: number;
        MaxDisplayPersistenceMs: number;
        DisplayPersistenceMs: number;
        Scale: number;
        PanelLayoutType: EAudioPanelLayoutType;
    };
    readonly __staticRegistry: 
        UAudioVectorscope['__static_UAudioVectorscope'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioVectorscope['__properties_UAudioVectorscope'] &
        UWidget['__propertyRegistry'];
}

declare interface UAudioVolumeRadialSlider extends UAudioRadialSlider {
    readonly __staticRegistry: 
        UAudioRadialSlider['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioRadialSlider['__propertyRegistry'];
}

declare interface UAudioVolumeSlider extends UAudioSlider {
    readonly __staticRegistry: 
        UAudioSlider['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioSlider['__propertyRegistry'];
}

