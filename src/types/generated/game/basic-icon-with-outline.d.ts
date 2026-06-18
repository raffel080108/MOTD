declare interface UBasic_IconWithOutline_C extends UUserWidget {
    readonly __static_UBasic_IconWithOutline_C: {
        SetData(InIcon: UTexture2D, InOutlineColor: FLinearColor, InIconColor: FLinearColor, InUseOutline: boolean, InOutlineThicknes: boolean, IconScale: number, IconShape: M_IconShapes): void;
        PreConstruct(IsDesignTime: boolean): void;
        SetOutlineColor(Color: FLinearColor): void;
        SetTintColor(Color: FLinearColor): void;
        SetIcon(Texture: UTexture2D): void;
        ExecuteUbergraph_Basic_IconWithOutline(EntryPoint: number): void;
    };
    readonly __properties_UBasic_IconWithOutline_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        IconSize: USizeBox;
        ICON_MATERIAL: UImage;
        Size: number;
        Icon: UTexture2D;
        OutlineColor: FLinearColor;
        IconColor: FLinearColor;
        UseOutline: boolean;
        ThickOutline: boolean;
        DynMaterial: UMaterialInstanceDynamic;
        Shape: M_IconShapes;
        IconScale: number;
        Shape_Hexagon: TSoftObjectPtr<UTexture2D>;
        Shape_Warning: TSoftObjectPtr<UTexture2D>;
        Shape_Anomaly: TSoftObjectPtr<UTexture2D>;
    };
    readonly __staticRegistry: 
        UBasic_IconWithOutline_C['__static_UBasic_IconWithOutline_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_IconWithOutline_C['__properties_UBasic_IconWithOutline_C'] &
        UUserWidget['__propertyRegistry'];
}

