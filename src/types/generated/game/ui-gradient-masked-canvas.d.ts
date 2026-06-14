declare interface UUI_GradientMasked_Canvas_C extends UUI_GradientMasked_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    Retainer: URetainerBox;
    Content: UNamedSlot;
    OnMaterialRefreshed(): void;
    ExecuteUbergraph_UI_GradientMasked_Canvas(EntryPoint: number): void;
}
declare const UUI_GradientMasked_Canvas_C: UUI_GradientMasked_Canvas_C;

