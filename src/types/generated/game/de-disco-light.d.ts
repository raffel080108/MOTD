declare interface UDE_DiscoLight_C extends UDrinkEffectComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    Light: APointLight;
    LightColorCurve: UCurveLinearColor;
    TimeSinceStart: number;
    curvelength: number;
    MusicPlayer: UAudioComponent;
    StarburstParticles: UParticleSystemComponent;
    EnabledEffect: boolean;
    DiscorParticle: UNiagaraComponent;
    OnRep_Light(): void;
    OnLoaded_9A4F10A04AD1DAA8BA45FFA4A7DB3EEC(Loaded: UObject): void;
    ReceiveBeginPlay(): void;
    ReceiveTick(DeltaSeconds: number): void;
    OnStartEffect(Character: APlayerCharacter): void;
    OnStopEffect(): void;
    ExecuteUbergraph_DE_DiscoLight(EntryPoint: number): void;
}
declare const UDE_DiscoLight_C: UDE_DiscoLight_C;

