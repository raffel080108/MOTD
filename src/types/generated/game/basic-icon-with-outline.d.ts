declare interface UBasic_IconWithOutline_C extends UUserWidget {
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
    SetData(InIcon: UTexture2D, InOutlineColor: FLinearColor, InIconColor: FLinearColor, InUseOutline: boolean, InOutlineThicknes: boolean, IconScale: number, IconShape: M_IconShapes): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetOutlineColor(Color: FLinearColor): void;
    SetTintColor(Color: FLinearColor): void;
    SetIcon(Texture: UTexture2D): void;
    ExecuteUbergraph_Basic_IconWithOutline(EntryPoint: number): void;
}
declare const UBasic_IconWithOutline_C: UBasic_IconWithOutline_C;

