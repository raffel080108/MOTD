declare interface UUI_RoundedImage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RoundedImage: UImage;
    Material: UMaterialInstanceDynamic;
    Texture: UTexture2D;
    Radius: number;
    EdgeSharpness: number;
    SetImage(Texture: UTexture2D): void;
    OnPaint(Context: FPaintContext): void;
    UpdateMaterial(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_RoundedImage(EntryPoint: number): void;
}
declare const UUI_RoundedImage_C: UUI_RoundedImage_C;

