declare interface UDE_MacteraBrew_C extends UDrinkEffectComponent {
    readonly __static_UDE_MacteraBrew_C: {
        OnStopEffect(): void;
        OnStartEffect(Character: APlayerCharacter): void;
        ExecuteUbergraph_DE_MacteraBrew(EntryPoint: number): void;
    };
    readonly __properties_UDE_MacteraBrew_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        PEffect: boolean;
        soundComp: UAudioComponent;
        Poison: UNiagaraComponent;
    };
    readonly __staticRegistry: 
        UDE_MacteraBrew_C['__static_UDE_MacteraBrew_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_MacteraBrew_C['__properties_UDE_MacteraBrew_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

