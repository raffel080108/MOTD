declare interface UUI_RoundedCanvas_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    MaskRetainer: URetainerBox;
    Content: UNamedSlot;
    Material: UMaterialInstanceDynamic;
    Radius: number;
    EdgeSharpness: number;
    OnPaint(Context: FPaintContext): void;
    UpdateMaterial(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_RoundedCanvas(EntryPoint: number): void;
}
declare const UUI_RoundedCanvas_C: UUI_RoundedCanvas_C;

