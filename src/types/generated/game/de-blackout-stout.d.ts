declare interface UDE_BlackoutStout_C extends UDrinkEffectComponent {
    readonly __static_UDE_BlackoutStout_C: {
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_BlackoutStout(EntryPoint: number): void;
    };
    readonly __properties_UDE_BlackoutStout_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        PEffect: boolean;
        soundComp: UAudioComponent;
        soundCompDown: UAudioComponent;
        particle: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        UDE_BlackoutStout_C['__static_UDE_BlackoutStout_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_BlackoutStout_C['__properties_UDE_BlackoutStout_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

