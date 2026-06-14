declare interface UDE_MacteraBrew_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    PEffect: boolean;
    soundComp: UAudioComponent;
    Poison: UNiagaraComponent;
    OnStopEffect(): void;
    OnStartEffect(Character: APlayerCharacter): void;
    ExecuteUbergraph_DE_MacteraBrew(EntryPoint: number): void;
}
declare const UDE_MacteraBrew_C: UDE_MacteraBrew_C;

