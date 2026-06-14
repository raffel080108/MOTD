declare interface UDE_BlacklockLager_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    FogParticles: UNiagaraComponent;
    SoundEffect: UAudioComponent;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ExecuteUbergraph_DE_BlacklockLager(EntryPoint: number): void;
}
declare const UDE_BlacklockLager_C: UDE_BlacklockLager_C;

