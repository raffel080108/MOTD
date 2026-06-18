declare interface UUI_MaskedImage_C extends UUserWidget {
    readonly __static_UUI_MaskedImage_C: {
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
    };
    readonly __properties_UUI_MaskedImage_C: {
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
    };
    readonly __staticRegistry: 
        UUI_MaskedImage_C['__static_UUI_MaskedImage_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_MaskedImage_C['__properties_UUI_MaskedImage_C'] &
        UUserWidget['__propertyRegistry'];
}

