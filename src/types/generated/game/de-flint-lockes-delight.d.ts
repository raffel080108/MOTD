declare interface UDE_FlintLockesDelight_C extends UDrinkEffectComponent {
    readonly __static_UDE_FlintLockesDelight_C: {
        ReceiveTick(DeltaSeconds: number): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_FlintLockesDelight(EntryPoint: number): void;
    };
    readonly __properties_UDE_FlintLockesDelight_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        NextJump: number;
        ImpulseStrength: FVector;
        SmokeParticles: UParticleSystemComponent;
        ExplosionParticles: UParticleSystemComponent;
        ExplosionSound: UAudioComponent;
        SmokeFX: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        UDE_FlintLockesDelight_C['__static_UDE_FlintLockesDelight_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_FlintLockesDelight_C['__properties_UDE_FlintLockesDelight_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

