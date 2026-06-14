declare interface UBasic_Window_CutCorner_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Content: UNamedSlot;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    Basic_BG_Window: UBasic_BG_CutCorner_C;
    ContentPadding: FMargin;
    BackgroundOpacity: number;
    ColorbarTint: ENUM_MenuColors;
    PreConstruct(IsDesignTime: boolean): void;
    SetBackgroundTint(InColorAndOpacity: FLinearColor): void;
    SetColorbarColor(Colorbar_Tint: ENUM_MenuColors): void;
    ExecuteUbergraph_Basic_Window_CutCorner(EntryPoint: number): void;
}
declare const UBasic_Window_CutCorner_C: UBasic_Window_CutCorner_C;

