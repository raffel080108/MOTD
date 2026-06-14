declare interface URC_LineWithBackgroundHalf_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_Shapes_Line_2: UUI_Shapes_Line_C;
    UI_Shapes_Line_1: UUI_Shapes_Line_C;
    UI_Shapes_Line: UUI_Shapes_Line_C;
    UI_GradientMasked_Canvas_189: UUI_GradientMasked_Canvas_C;
    Overlay_Right: UOverlay;
    Image_Background: UImage;
    Line_Height: number;
    LineColor: FBasicColor;
    Line_Tint: ENUM_MenuColors;
    Line_Opacity: number;
    Material: UMaterialInterface;
    MiddleLineFill: number;
    GradientPower: number;
    BackgroundColor_Left: FLinearColor;
    BackgroundColor_Right: FLinearColor;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_RC_LineWithBackgroundHalf(EntryPoint: number): void;
}
declare const URC_LineWithBackgroundHalf_C: URC_LineWithBackgroundHalf_C;

