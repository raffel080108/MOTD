declare interface UITM_MenuDamageIndicator_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Image_Damage: UImage;
    damageTaken: UWidgetAnimation;
    Menu: UUserWidget;
    PreConstruct(IsDesignTime: boolean): void;
    OnHit(Damage: number, DamageData: FDamageData, anyHealthLost: boolean, HealthComponent: UHealthComponentBase): void;
    OnAnimFinished(): void;
    SetMenu(EscapeMenu: UUserWidget): void;
    ExecuteUbergraph_ITM_MenuDamageIndicator(EntryPoint: number): void;
}
declare const UITM_MenuDamageIndicator_C: UITM_MenuDamageIndicator_C;

