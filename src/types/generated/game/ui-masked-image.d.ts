declare interface UUI_MaskedImage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    MaskedImage: UImage;
    Image: UTexture2D;
    ImageSize: FVector2D;
    AutoSize: boolean;
    ImageTint: FSlateColor;
    Mask: UTexture;
    DrawAs: ESlateBrushDrawType;
    Material: UMaterialInstanceDynamic;
    BrushImage: UObject;
    Zoom: number;
    Offset: FVector2D;
    SetOffset(InOffset: FVector2D): void;
    SetZoom(InZoom: number): void;
    SetMaskBlack(Index: boolean): void;
    UpdateMaterial(): void;
    SetDrawAs(InBrush_DrawAs: ESlateBrushDrawType): void;
    SetMaskInverted(Invert: boolean): void;
    SetMask(Value: UTexture): void;
    SetImageTint(TintColor: FSlateColor): void;
    SetImageSize(DesiredSize: FVector2D): void;
    SetSoftImage(InTexture: TSoftObjectPtr<UTexture2D>, InMatchSize: boolean): void;
    SetImage(Value: UTexture2D, Match_Size: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_MaskedImage(EntryPoint: number): void;
}
declare const UUI_MaskedImage_C: UUI_MaskedImage_C;

