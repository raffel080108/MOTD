declare interface UOnScreen_BoscoRevivesCounter_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HUD_BoscoRevivesLable: UHUD_BoscoRevivesLable_C;
    HUD_BoscoAmmoRefillsLable: UHUD_BoscoAmmoRefillsLable_C;
    SetViewAmmoCounter(ViewAmmo: boolean): void;
    Construct(): void;
    ExecuteUbergraph_OnScreen_BoscoRevivesCounter(EntryPoint: number): void;
}
declare const UOnScreen_BoscoRevivesCounter_C: UOnScreen_BoscoRevivesCounter_C;

