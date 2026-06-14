declare interface UBasic_BG_CutCorner_W_Image_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Front: UImage;
    Image_Background: UImage;
    I_O2: UImage;
    I_BG2: UImage;
    HorizontalBox_Border: UHorizontalBox;
    CornerSize: number;
    DynBackgroundMaterial: UMaterialInstanceDynamic;
    BackgroundColor: ENUM_MenuColors;
    PreConstruct(IsDesignTime: boolean): void;
    SetImage(ImageBackground: UTexture2D, BackgroundColor: FLinearColor, front: UTexture2D, FrontStretch: boolean): void;
    SetOutlineColor(Color: FLinearColor): void;
    SetBackgroundColor(Color: FLinearColor): void;
    UpdateCornorSize(Size: number): void;
    SetStyle(IsEnabled: E_MM_ButtonStyle): void;
    ExecuteUbergraph_Basic_BG_CutCorner_W_Image(EntryPoint: number): void;
}
declare const UBasic_BG_CutCorner_W_Image_C: UBasic_BG_CutCorner_W_Image_C;

