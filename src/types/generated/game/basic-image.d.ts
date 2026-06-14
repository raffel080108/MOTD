declare interface UBasic_Image_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ImageComponent: UImage;
    AnimFadeIn: UWidgetAnimation;
    Brush: FSlateBrush;
    Tint: ENUM_MenuColors;
    TintOpacity: number;
    Scalars: Record<FName, number>;
    Vectors: Record<FName, FLinearColor>;
    Textures: Record<FName, TSoftObjectPtr<UTexture>>;
    MenuColors: Record<FName, FMenuColorAndOpacity>;
    BasicToolTipText: FText;
    BasicToolTipPosition: FVector2D;
    BasicToolTipAlignment: FVector2D;
    SetBasicToolTip(BasicToolTipText: FText, BasicToolTipPosition: FVector2D, BasicToolTipAlignment: FVector2D): void;
    GetBasicToolTip(): UWidget;
    SetDynamicMaterialValues(): void;
    SetDynamicMaterialTexture(ParameterName: FName, Value: UTexture): void;
    SetDynamicMaterialVector(ParameterName: FName, Value: FLinearColor): void;
    SetDynamicMaterialScalar(ParameterName: FName, Value: number): void;
    FadeOut(InDuration: number): void;
    FadeIn(InDuration: number): void;
    GetBrushSize(Brush_Image_Size: FVector2D): void;
    SetBrushSize(DesiredSize: FVector2D): void;
    SetBrushFromSoftTexture(Texture: TSoftObjectPtr<UTexture2D>, bMatchSize: boolean): void;
    GetDynamicMaterial(): UMaterialInstanceDynamic;
    SetTintAndOpacity(InTint: ENUM_MenuColors, InTintOpacity: number): void;
    SetTintOpacity(InOpacity: number): void;
    SetTint(InTint: ENUM_MenuColors): void;
    SelectTint(FALSE: ENUM_MenuColors, TRUE: ENUM_MenuColors, Condition: boolean, SelectedTint: ENUM_MenuColors): void;
    SetBrushFromTexture(Texture: UTexture2D, bMatchSize: boolean): void;
    SetBrush(InBrush: FSlateBrush): void;
    GetBrush(Brush: FSlateBrush): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_Basic_Image(EntryPoint: number): void;
}
declare const UBasic_Image_C: UBasic_Image_C;

