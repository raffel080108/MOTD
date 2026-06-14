declare interface UDE_SeasonedMoonrider_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    MoonriderSound: UAudioComponent;
    ParticleEffect: UParticleSystemComponent;
    particle: UNiagaraComponent;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_SeasonedMoonrider(EntryPoint: number): void;
}
declare const UDE_SeasonedMoonrider_C: UDE_SeasonedMoonrider_C;

