declare interface UDE_DiscoLight_C extends UDrinkEffectComponent {
    readonly __static_UDE_DiscoLight_C: {
        OnRep_Light(): void;
        OnLoaded_9A4F10A04AD1DAA8BA45FFA4A7DB3EEC(Loaded: UObject): void;
        ReceiveBeginPlay(): void;
        ReceiveTick(DeltaSeconds: number): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_DiscoLight(EntryPoint: number): void;
    };
    readonly __properties_UDE_DiscoLight_C: {
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
    };
    readonly __staticRegistry: 
        UDE_DiscoLight_C['__static_UDE_DiscoLight_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_DiscoLight_C['__properties_UDE_DiscoLight_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

