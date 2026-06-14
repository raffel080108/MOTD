declare interface ULIB_MenuColors_C extends UBlueprintFunctionLibrary {
    MenuColorAndTint(InValue: FMenuColorAndTint, __WorldContext: UObject, OutResult: FLinearColor): void;
    WindowColors(InColor: ENUM_WindowColors, __WorldContext: UObject, Color1: FLinearColor, Color2: FLinearColor): void;
    SelectTextColor(Text: UTextBlock, FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean, __WorldContext: UObject): void;
    SetTextColor(Text: UTextBlock, Color: ENUM_MenuColors, __WorldContext: UObject): void;
    SelectMenuColor(FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean, __WorldContext: UObject, OutputColor: FLinearColor): void;
    MenuColorsAndOpacity(ColorSelector: ENUM_MenuColors, Opacity: number, __WorldContext: UObject, OutputColor: FLinearColor): void;
    MenuColors(ColorSelector: ENUM_MenuColors, __WorldContext: UObject, OutputColor: FLinearColor): void;
}
declare const ULIB_MenuColors_C: ULIB_MenuColors_C;

