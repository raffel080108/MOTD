declare interface UCategoryImage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_MisSel_MissionIconBasic: UITM_MisSel_MissionIconBasic_C;
    Basic_BG_CutCorner_W_Image: UBasic_BG_CutCorner_W_Image_C;
    CornerSize: number;
    DynBackgroundMaterial: UMaterialInstanceDynamic;
    PreConstruct(IsDesignTime: boolean): void;
    SetImage(Image: UTexture2D, BackgroundColor: FLinearColor, OptionalMaskedImage: UTexture2D, StretchMaskedImage: boolean): void;
    SetOutlineColor(Color: FLinearColor): void;
    SetMissionIcon(MissionIcon: FObjectiveMissionIcon): void;
    SetStyle(IsEnabled: E_MM_ButtonStyle): void;
    ExecuteUbergraph_CategoryImage(EntryPoint: number): void;
}
declare const UCategoryImage_C: UCategoryImage_C;

