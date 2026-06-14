declare interface UITM_MatrixCore_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RewardSizer: USizeBox;
    CoreIcon: UITM_Overclock_Icon_C;
    Category_CanisterBG: UImage;
    BackgroundImage: UImage;
    AnimatedStaticOverlay_WithScanlines_LightVersion: UAnimatedStaticOverlay_WithScanlines_LightVersion_C;
    AnimRewardSchematic: UWidgetAnimation;
    IconSize: number;
    ShowToolTip: boolean;
    Schematic: USchematic;
    GetMatrixCoreToolTip(): UWidget;
    FromReward(InReward: USchematic, InRewardType: ESchematicType): void;
    SetIconSize(IconSize: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_MatrixCore(EntryPoint: number): void;
}
declare const UITM_MatrixCore_C: UITM_MatrixCore_C;

