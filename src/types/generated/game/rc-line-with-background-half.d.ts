declare interface URC_LineWithBackgroundHalf_C extends UUserWidget {
    readonly __static_URC_LineWithBackgroundHalf_C: {
        PreConstruct(IsDesignTime: boolean): void;
        ExecuteUbergraph_RC_LineWithBackgroundHalf(EntryPoint: number): void;
    };
    readonly __properties_URC_LineWithBackgroundHalf_C: {
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
    };
    readonly __staticRegistry: 
        URC_LineWithBackgroundHalf_C['__static_URC_LineWithBackgroundHalf_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        URC_LineWithBackgroundHalf_C['__properties_URC_LineWithBackgroundHalf_C'] &
        UUserWidget['__propertyRegistry'];
}

