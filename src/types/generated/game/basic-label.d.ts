declare interface UBasic_Label_C extends UUserWidget {
    readonly __static_UBasic_Label_C: {
        SetShadow(InShadowColorAndOpacity: FLinearColor, InShadowOffset: FVector2D): void;
        SelectTextColor(FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean): void;
        GetText(Text: string): void;
        SetWrappingPolicy(WrappingPolicy: ETextWrappingPolicy): void;
        SetWrapTextAt(WrapTextAt: number): void;
        SetAutoWrapText(AutoTextWrap: boolean): void;
        SetFontSize(InFontSize: number): void;
        SetMinDesiredWidth(MinDesiredWidth: number): void;
        SetJustification(Justification: ETextJustify): void;
        SetTextColor(TextColor: ENUM_MenuColors): void;
        SetTextAndFont(InText: string, InJustification: ETextJustify, InTextColor: ENUM_MenuColors, InFont: FSlateFontInfo): void;
        SetText(Text: string): void;
        SetMargin(New_Margin: FMargin): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_Basic_Label(EntryPoint: number): void;
    };
    readonly __properties_UBasic_Label_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Label: UFSDLabelWidget;
        Text: string;
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
        MaxLengthIndicator: string;
    };
    readonly __staticRegistry: 
        UBasic_Label_C['__static_UBasic_Label_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Label_C['__properties_UBasic_Label_C'] &
        UUserWidget['__propertyRegistry'];
}

