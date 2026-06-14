declare interface UDE_FlintLockesDelight_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    NextJump: number;
    ImpulseStrength: FVector;
    SmokeParticles: UParticleSystemComponent;
    ExplosionParticles: UParticleSystemComponent;
    ExplosionSound: UAudioComponent;
    SmokeFX: UNiagaraComponent;
    ReceiveTick(DeltaSeconds: number): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_FlintLockesDelight(EntryPoint: number): void;
}
declare const UDE_FlintLockesDelight_C: UDE_FlintLockesDelight_C;

