declare interface UDE_ArkenStout_C extends UDrinkEffectComponent {
    readonly __static_UDE_ArkenStout_C: {
        OnLoaded_6720846C4CD973CF4158F2B171D4875F(Loaded: UObject): void;
        OnLoaded_6720846C4CD973CF4158F2B1FFC27104(Loaded: UObject): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_ArkenStout(EntryPoint: number): void;
    };
    readonly __properties_UDE_ArkenStout_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
    };
    readonly __staticRegistry: 
        UDE_ArkenStout_C['__static_UDE_ArkenStout_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_ArkenStout_C['__properties_UDE_ArkenStout_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

