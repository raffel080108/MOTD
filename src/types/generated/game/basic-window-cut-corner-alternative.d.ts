declare interface UBasic_Window_CutCorner_Alternative_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Content: UNamedSlot;
    Basic_BG_Window: UBasic_BG_CutCorner_C;
    ContentPadding: FMargin;
    BackgroundOpacity: number;
    ColorbarTint: ENUM_MenuColors;
    SetBackgroundTint(InColorAndOpacity: FLinearColor): void;
    SetColorbarColor(Colorbar_Tint: ENUM_MenuColors): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_Window_CutCorner_Alternative(EntryPoint: number): void;
}
declare const UBasic_Window_CutCorner_Alternative_C: UBasic_Window_CutCorner_Alternative_C;

