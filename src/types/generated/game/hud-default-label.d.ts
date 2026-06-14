declare interface UHUD_DefaultLabel_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Label: UTextBlock;
    Text: FText;
    Typeface: ENUM_AcuminCondensedTypeface;
    Justification: ETextJustify;
    TextColor: ENUM_MenuColors;
    SetTextColor(ColorSelector: ENUM_MenuColors): void;
    SetOutlineSettings(InFontInfo_OutlineSettings: FFontOutlineSettings): void;
    SetJustification(InJustification: ETextJustify): void;
    SetTypeFace(Typeface: ENUM_AcuminCondensedTypeface): void;
    SetFontSize(InFontSize: number): void;
    SetText(NewText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_DefaultLabel(EntryPoint: number): void;
}
declare const UHUD_DefaultLabel_C: UHUD_DefaultLabel_C;

