declare interface UUI_GradientMasked_Base_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    GradientType: ENUM_MaskedGradientTypes;
    Material: UMaterialInstanceDynamic;
    MaterialTemplate: UMaterialInterface;
    GetDynamicMaterial(Material: UMaterialInstanceDynamic): void;
    Refresh(): void;
    GetMaterialTemplate(GradientType: ENUM_MaskedGradientTypes, OutTemplate: UMaterialInterface): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnMaterialRefreshed(): void;
    ExecuteUbergraph_UI_GradientMasked_Base(EntryPoint: number): void;
}
declare const UUI_GradientMasked_Base_C: UUI_GradientMasked_Base_C;

