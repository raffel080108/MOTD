declare interface UDE_BurningLove_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    BurningSoundEffect: UAudioComponent;
    NiagaraFireEffect: UNiagaraComponent;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_BurningLove(EntryPoint: number): void;
}
declare const UDE_BurningLove_C: UDE_BurningLove_C;

