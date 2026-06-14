declare interface UHUD_Resource_Bar_Health_C extends UHUD_Resource_Bar_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    HasLowHealth(): boolean;
    CheckPingPongAnim(): void;
    UpdateHealth(): void;
    SetBarPct(HealthPct: number): void;
    UnbindHealthComponent(): void;
    BindHealthComponent(InHealthComponent: UPlayerHealthComponent): void;
    OnHealthChanged_Event(Health: number): void;
    OnHealthRegeneratingChanged_Event(isRegenerating: boolean): void;
    ExecuteUbergraph_HUD_Resource_Bar_Health(EntryPoint: number): void;
}
declare const UHUD_Resource_Bar_Health_C: UHUD_Resource_Bar_Health_C;

