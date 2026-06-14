declare interface UBasic_MenuLabel_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Label: UTextBlock;
    Text: FText;
    Typeface: ENUM_CarbonTypeface;
    Justification: ETextJustify;
    UpperCase: boolean;
    SetJustification(InJustification: ETextJustify): void;
    SetTypeFace(Typeface: ENUM_CarbonTypeface): void;
    SetFontSize(InFontSize: number): void;
    SetText(NewText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_MenuLabel(EntryPoint: number): void;
}
declare const UBasic_MenuLabel_C: UBasic_MenuLabel_C;

