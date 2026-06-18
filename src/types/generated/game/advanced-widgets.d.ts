declare interface FColorGradingSpinBoxStyle extends FSlateWidgetStyle {
    BorderBrush: FSlateBrush;
    ActiveBorderBrush: FSlateBrush;
    HoveredBorderBrush: FSlateBrush;
    SelectorBrush: FSlateBrush;
    SelectorWidth: number;
}

declare interface URadialSlider extends UWidget {
    readonly __static_URadialSlider: {
        SetValueTags(InValueTags: number[]): void;
        SetValue(InValue: number): void;
        SetUseVerticalDrag(InUseVerticalDrag: boolean): void;
        SetStepSize(InValue: number): void;
        SetSliderRange(InSliderRange: FRuntimeFloatCurve): void;
        SetSliderProgressColor(InValue: FLinearColor): void;
        SetSliderHandleStartAngle(InValue: number): void;
        SetSliderHandleEndAngle(InValue: number): void;
        SetSliderHandleColor(InValue: FLinearColor): void;
        SetSliderBarColor(InValue: FLinearColor): void;
        SetShowSliderHandle(InShowSliderHandle: boolean): void;
        SetShowSliderHand(InShowSliderHand: boolean): void;
        SetLocked(InValue: boolean): void;
        SetHandStartEndRatio(InValue: FVector2D): void;
        SetCustomDefaultValue(InValue: number): void;
        SetCenterBackgroundColor(InValue: FLinearColor): void;
        SetAngularOffset(InValue: number): void;
        GetValue(): number;
        GetNormalizedSliderHandlePosition(): number;
        GetCustomDefaultValue(): number;
    };
    readonly __properties_URadialSlider: {
        Value: number;
        ValueDelegate: FRadialSliderValueDelegate;
        bUseCustomDefaultValue: boolean;
        CustomDefaultValue: number;
        SliderRange: FRuntimeFloatCurve;
        ValueTags: number[];
        SliderHandleStartAngle: number;
        SliderHandleEndAngle: number;
        AngularOffset: number;
        HandStartEndRatio: FVector2D;
        WidgetStyle: FSliderStyle;
        SliderBarColor: FLinearColor;
        SliderProgressColor: FLinearColor;
        SliderHandleColor: FLinearColor;
        CenterBackgroundColor: FLinearColor;
        Locked: boolean;
        MouseUsesStep: boolean;
        RequiresControllerLock: boolean;
        StepSize: number;
        IsFocusable: boolean;
        UseVerticalDrag: boolean;
        ShowSliderHandle: boolean;
        ShowSliderHand: boolean;
        OnMouseCaptureBegin: FRadialSliderOnMouseCaptureBegin;
        OnMouseCaptureEnd: FRadialSliderOnMouseCaptureEnd;
        OnControllerCaptureBegin: FRadialSliderOnControllerCaptureBegin;
        OnControllerCaptureEnd: FRadialSliderOnControllerCaptureEnd;
        OnValueChanged: FRadialSliderOnValueChanged;
    };
    readonly __staticRegistry: 
        URadialSlider['__static_URadialSlider'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        URadialSlider['__properties_URadialSlider'] &
        UWidget['__propertyRegistry'];
}

