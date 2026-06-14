declare interface UBasic_FlatGradientButton_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Button_TextScale: UScaleBox;
    Button_Text: UUI_AdvancedLabel_C;
    Button_SizeBox: USizeBox;
    Button_Overlay: UOverlay;
    Button_Border: UBorder;
    Button_Background: UBasic_Image_C;
    Button: UButton;
    TextTint: ENUM_MenuColors;
    ButtonTint: ENUM_MenuColors;
    BorderTint: ENUM_MenuColors;
    ButtonHoveredTint: ENUM_MenuColors;
    BorderHoverdTint: ENUM_MenuColors;
    ContentHorizontalAlignment: EHorizontalAlignment;
    Text: FText;
    TextControllerOverride: FText;
    TextFont: FSlateFontInfo;
    ButtonSize: FSizeBoxSettings;
    TextPadding: FMargin;
    TextScale: EStretch;
    OnClicked: FBasic_FlatGradientButton_COnClicked;
    SetFontSize(InFontSize: number): void;
    SetText(NewText: FText, OverrideControllerText: FText): void;
    Update(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_FlatGradientButton(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UBasic_FlatGradientButton_C: UBasic_FlatGradientButton_C;

