declare interface UITM_SkinIcon_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SkinIcon: UImage;
    PaintBucketOverlay: UImage;
    IconSizer: USizeBox;
    DLC_Indicator: UUI_DLC_Indicator_C;
    DefaultItem: UImage;
    Skin: UItemSkin;
    Size: number;
    IsLocked: boolean;
    IsDefault: boolean;
    ShowBucket: boolean;
    Material: UMaterialInstanceDynamic;
    OutlineTint: FLinearColor;
    BucketIcon: ENUM_SkinWidgetTypes;
    ShowDLC: boolean;
    SetIconColor(InColorAndOpacity: FLinearColor): void;
    SetBucketVisibility(ShowBucket: boolean): void;
    SetOutlineTint(Color: FLinearColor): void;
    GetIsLocked(IsLocked: boolean): void;
    SetSize(InSize: number): void;
    SetFromMaterial(InMaterial: UMaterialInterface, InIsLocked: boolean, InIsDefault: boolean, InBucketIcon: ENUM_SkinWidgetTypes): void;
    SetSkin(inSkin: UItemSkin, InIsLocked: boolean, InIsDefault: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_SkinIcon(EntryPoint: number): void;
}
declare const UITM_SkinIcon_C: UITM_SkinIcon_C;

