declare interface UDE_BlacklockLager_C extends UDrinkEffectComponent {
    readonly __static_UDE_BlacklockLager_C: {
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ReceiveTick(DeltaSeconds: number): void;
        ExecuteUbergraph_DE_BlacklockLager(EntryPoint: number): void;
    };
    readonly __properties_UDE_BlacklockLager_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        FogParticles: UNiagaraComponent;
        SoundEffect: UAudioComponent;
    };
    readonly __staticRegistry: 
        UDE_BlacklockLager_C['__static_UDE_BlacklockLager_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_BlacklockLager_C['__properties_UDE_BlacklockLager_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

