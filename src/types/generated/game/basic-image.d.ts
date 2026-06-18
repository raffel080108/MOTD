declare interface UBasic_Image_C extends UUserWidget {
    readonly __static_UBasic_Image_C: {
        SetBasicToolTip(BasicToolTipText: string, BasicToolTipPosition: FVector2D, BasicToolTipAlignment: FVector2D): void;
        GetBasicToolTip(): UWidget;
        SetDynamicMaterialValues(): void;
        SetDynamicMaterialTexture(ParameterName: string, Value: UTexture): void;
        SetDynamicMaterialVector(ParameterName: string, Value: FLinearColor): void;
        SetDynamicMaterialScalar(ParameterName: string, Value: number): void;
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
    };
    readonly __properties_UBasic_Image_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ImageComponent: UImage;
        AnimFadeIn: UWidgetAnimation;
        Brush: FSlateBrush;
        Tint: ENUM_MenuColors;
        TintOpacity: number;
        Scalars: TMap<string, number>;
        Vectors: TMap<string, FLinearColor>;
        Textures: TMap<string, TSoftObjectPtr<UTexture>>;
        MenuColors: TMap<string, FMenuColorAndOpacity>;
        BasicToolTipText: string;
        BasicToolTipPosition: FVector2D;
        BasicToolTipAlignment: FVector2D;
    };
    readonly __staticRegistry: 
        UBasic_Image_C['__static_UBasic_Image_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_Image_C['__properties_UBasic_Image_C'] &
        UUserWidget['__propertyRegistry'];
}

