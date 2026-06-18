declare interface UDE_BurningLove_C extends UDrinkEffectComponent {
    readonly __static_UDE_BurningLove_C: {
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_BurningLove(EntryPoint: number): void;
    };
    readonly __properties_UDE_BurningLove_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        BurningSoundEffect: UAudioComponent;
        NiagaraFireEffect: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        UDE_BurningLove_C['__static_UDE_BurningLove_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_BurningLove_C['__properties_UDE_BurningLove_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

