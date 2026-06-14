declare interface UBasic_Label_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Label: UFSDLabelWidget;
    Text: FText;
    ToUpper: boolean;
    Font: FSlateFontInfo;
    TextColor: ENUM_MenuColors;
    Justification: ETextJustify;
    MinDesiredWidth: number;
    TextMargin: FMargin;
    AutoTextWrap: boolean;
    WrapTextAt: number;
    WrappingPolicy: ETextWrappingPolicy;
    MaxLength: number;
    MaxLengthIndicator: FText;
    SetShadow(InShadowColorAndOpacity: FLinearColor, InShadowOffset: FVector2D): void;
    SelectTextColor(FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean): void;
    GetText(Text: FText): void;
    SetWrappingPolicy(WrappingPolicy: ETextWrappingPolicy): void;
    SetWrapTextAt(WrapTextAt: number): void;
    SetAutoWrapText(AutoTextWrap: boolean): void;
    SetFontSize(InFontSize: number): void;
    SetMinDesiredWidth(MinDesiredWidth: number): void;
    SetJustification(Justification: ETextJustify): void;
    SetTextColor(TextColor: ENUM_MenuColors): void;
    SetTextAndFont(InText: FText, InJustification: ETextJustify, InTextColor: ENUM_MenuColors, InFont: FSlateFontInfo): void;
    SetText(Text: FText): void;
    SetMargin(New_Margin: FMargin): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_Label(EntryPoint: number): void;
}
declare const UBasic_Label_C: UBasic_Label_C;

