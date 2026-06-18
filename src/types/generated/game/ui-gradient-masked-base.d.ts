declare interface UUI_GradientMasked_Base_C extends UUserWidget {
    readonly __static_UUI_GradientMasked_Base_C: {
        GetDynamicMaterial(Material: UMaterialInstanceDynamic): void;
        Refresh(): void;
        GetMaterialTemplate(GradientType: ENUM_MaskedGradientTypes, OutTemplate: UMaterialInterface): void;
        PreConstruct(IsDesignTime: boolean): void;
        OnMaterialRefreshed(): void;
        ExecuteUbergraph_UI_GradientMasked_Base(EntryPoint: number): void;
    };
    readonly __properties_UUI_GradientMasked_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GradientType: ENUM_MaskedGradientTypes;
        Material: UMaterialInstanceDynamic;
        MaterialTemplate: UMaterialInterface;
    };
    readonly __staticRegistry: 
        UUI_GradientMasked_Base_C['__static_UUI_GradientMasked_Base_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_GradientMasked_Base_C['__properties_UUI_GradientMasked_Base_C'] &
        UUserWidget['__propertyRegistry'];
}

