declare interface URC_LineWithBackground_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_Shapes_Line_4: UUI_Shapes_Line_C;
    UI_Shapes_Line_3: UUI_Shapes_Line_C;
    UI_Shapes_Line_2: UUI_Shapes_Line_C;
    UI_Shapes_Line_1: UUI_Shapes_Line_C;
    UI_Shapes_Line: UUI_Shapes_Line_C;
    UI_GradientMasked_Canvas_189: UUI_GradientMasked_Canvas_C;
    UI_GradientMasked_Canvas: UUI_GradientMasked_Canvas_C;
    Line_Height: number;
    LineColor: FBasicColor;
    MiddleLineFill: number;
    BackgroundColor_Left: FLinearColor;
    BackgroundColor_Right: FLinearColor;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_RC_LineWithBackground(EntryPoint: number): void;
}
declare const URC_LineWithBackground_C: URC_LineWithBackground_C;

