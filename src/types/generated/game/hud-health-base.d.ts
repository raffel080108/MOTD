declare interface UHUD_Health_Base_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    IconSizeBox: USizeBox;
    IconImage: UImage;
    HUD_Resource_Bar_Health_Bonus: UHUD_Resource_Bar_Health_C;
    HUD_Resource_Bar_Health_Base: UHUD_Resource_Bar_Health_C;
    HealthComponent: UPlayerHealthComponent;
    RegenTint: FSlateColor;
    isRegenerating: boolean;
    AlphaHealthbar: number;
    IconSize: FVector2D;
    ShouldDisplayTotalHealth: boolean;
    AllowTextDisplay: boolean;
    OnMaxHealthChanged(InHealth: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnMaxHealthChanged_Event(Health: number): void;
    ExecuteUbergraph_HUD_Health_Base(EntryPoint: number): void;
}
declare const UHUD_Health_Base_C: UHUD_Health_Base_C;

