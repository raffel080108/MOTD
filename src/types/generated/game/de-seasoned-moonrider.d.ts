declare interface UDE_SeasonedMoonrider_C extends UDrinkEffectComponent {
    readonly __static_UDE_SeasonedMoonrider_C: {
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_SeasonedMoonrider(EntryPoint: number): void;
    };
    readonly __properties_UDE_SeasonedMoonrider_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        MoonriderSound: UAudioComponent;
        ParticleEffect: UParticleSystemComponent;
        particle: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        UDE_SeasonedMoonrider_C['__static_UDE_SeasonedMoonrider_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_SeasonedMoonrider_C['__properties_UDE_SeasonedMoonrider_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

