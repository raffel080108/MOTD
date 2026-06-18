declare interface UUI_GradientMasked_Canvas_C extends UUI_GradientMasked_Base_C {
    readonly __static_UUI_GradientMasked_Canvas_C: {
        OnMaterialRefreshed(): void;
        ExecuteUbergraph_UI_GradientMasked_Canvas(EntryPoint: number): void;
    };
    readonly __properties_UUI_GradientMasked_Canvas_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Retainer: URetainerBox;
        Content: UNamedSlot;
    };
    readonly __staticRegistry: 
        UUI_GradientMasked_Canvas_C['__static_UUI_GradientMasked_Canvas_C'] &
        UUI_GradientMasked_Base_C['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_GradientMasked_Canvas_C['__properties_UUI_GradientMasked_Canvas_C'] &
        UUI_GradientMasked_Base_C['__propertyRegistry'];
}

