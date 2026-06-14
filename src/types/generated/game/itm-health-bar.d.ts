declare interface UITM_HealthBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Health: UUI_ImageTinted_C;
    HealthProgress: UProgressBar;
    SegmentInnerTint: ENUM_MenuColors;
    PreConstruct(IsDesignTime: boolean): void;
    SetHealth(Percent: number): void;
    ExecuteUbergraph_ITM_HealthBar(EntryPoint: number): void;
}
declare const UITM_HealthBar_C: UITM_HealthBar_C;

