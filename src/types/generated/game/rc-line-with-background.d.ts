declare interface URC_LineWithBackground_C extends UUserWidget {
    readonly __static_URC_LineWithBackground_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_RC_LineWithBackground(EntryPoint: number): void;
    };
    readonly __properties_URC_LineWithBackground_C: {
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
    };
    readonly __staticRegistry: 
        URC_LineWithBackground_C['__static_URC_LineWithBackground_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        URC_LineWithBackground_C['__properties_URC_LineWithBackground_C'] &
        UUserWidget['__propertyRegistry'];
}

