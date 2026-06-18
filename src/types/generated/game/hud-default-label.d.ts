declare interface UHUD_DefaultLabel_C extends UUserWidget {
    readonly __static_UHUD_DefaultLabel_C: {
        SetTextColor(ColorSelector: ENUM_MenuColors): void;
        SetOutlineSettings(InFontInfo_OutlineSettings: FFontOutlineSettings): void;
        SetJustification(InJustification: ETextJustify): void;
        SetTypeFace(Typeface: ENUM_AcuminCondensedTypeface): void;
        SetFontSize(InFontSize: number): void;
        SetText(NewText: string): void;
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_HUD_DefaultLabel(EntryPoint: number): void;
    };
    readonly __properties_UHUD_DefaultLabel_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Label: UTextBlock;
        Text: string;
        Typeface: ENUM_AcuminCondensedTypeface;
        Justification: ETextJustify;
        TextColor: ENUM_MenuColors;
    };
    readonly __staticRegistry: 
        UHUD_DefaultLabel_C['__static_UHUD_DefaultLabel_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_DefaultLabel_C['__properties_UHUD_DefaultLabel_C'] &
        UUserWidget['__propertyRegistry'];
}

