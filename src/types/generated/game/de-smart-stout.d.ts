declare interface UDE_SmartStout_C extends UDrinkEffectComponent {
    readonly __static_UDE_SmartStout_C: {
        OnStartEffect(Character: APlayerCharacter): void;
        ExecuteUbergraph_DE_SmartStout(EntryPoint: number): void;
    };
    readonly __properties_UDE_SmartStout_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        MoonriderSound: UAudioComponent;
        ParticleEffect: UParticleSystemComponent;
    };
    readonly __staticRegistry: 
        UDE_SmartStout_C['__static_UDE_SmartStout_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_SmartStout_C['__properties_UDE_SmartStout_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

