declare interface UBasic_ButtonScalable2_C extends UFSDAdvancedLabel {
    readonly __static_UBasic_ButtonScalable2_C: {
        SetButtonColor(InMenuColor: ENUM_MenuColors, InLinearColor: FLinearColor): void;
        HideCountDown(): void;
        SetCountDown(SecondsRemaining: number, MinimumIntegralDigits: number): void;
        SetBackgroundColor(ColorSelector: ENUM_MenuColors): void;
        SetIconBrush(Icon: UImage, InBrush: FSlateBrush, InPadding: FMargin): void;
        SetTints(PC__Icon_Tint: FLinearColor, Controller_Icon_Tint: FLinearColor): void;
        SetIconTint(PC__Icon_Tint: FLinearColor, Controller_Icon_Tint: FLinearColor): void;
        OnReset(): void;
        OnNewLine(Index: number): void;
        OnAddString(Value: string): void;
        OnAddKeyName(Name: string): void;
        OnAddIcon(Name: string, Icon: FActionIconMapping): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        Toggle(IsToggledOn: boolean): void;
        SetToggled(): void;
        SetUntoggled(): void;
        Click(): void;
        SetIcon(Icon: UImage, InBrush: FSlateBrush, InPadding: FMargin, InVisibility: ESlateVisibility): void;
        UpdateLook(): void;
        ExecuteUbergraph_Basic_ButtonScalable2(EntryPoint: number): void;
        OnUnhovered__DelegateSignature(): void;
        OnHovered__DelegateSignature(): void;
        OnClicked__DelegateSignature(): void;
    };
    readonly __properties_UBasic_ButtonScalable2_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Sizer: USizeBox;
        RightIcon: UImage;
        Lines: UVerticalBox;
        LeftIcon: UImage;
        InnerButton: UButton;
        Image_147: UImage;
        Image: UImage;
        CountDownLabel: UTextBlock;
        Border_BaseMid: UBorder;
        Anim_Hovering: UWidgetAnimation;
        Anim_Clicked: UWidgetAnimation;
        CurrentLine: UHorizontalBox;
        Font: FSlateFontInfo;
        OnClicked: FBasic_ButtonScalable2_COnClicked;
        LeftIconBrush: FSlateBrush;
        LeftIconPadding: FMargin;
        LeftIconVisibility: ESlateVisibility;
        RightIconBrush: FSlateBrush;
        RightIconPadding: FMargin;
        BackgroundNormal: ENUM_MenuColors;
        BackgroundHover: ENUM_MenuColors;
        Width2: number;
        Width4: number;
        ToggledOn: boolean;
        OnHovered: FBasic_ButtonScalable2_COnHovered;
        OnUnhovered: FBasic_ButtonScalable2_COnUnhovered;
        Sound_Hovering: USoundBase;
        Sound_Clicked: USoundBase;
        RightIconVisibility: ESlateVisibility;
    };
    readonly __staticRegistry: 
        UBasic_ButtonScalable2_C['__static_UBasic_ButtonScalable2_C'] &
        UFSDAdvancedLabel['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_ButtonScalable2_C['__properties_UBasic_ButtonScalable2_C'] &
        UFSDAdvancedLabel['__propertyRegistry'];
}

