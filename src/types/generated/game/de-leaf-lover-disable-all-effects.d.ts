declare interface UDE_LeafLoverDisableAllEffects_C extends UDrinkEffectComponent {
    readonly __static_UDE_LeafLoverDisableAllEffects_C: {
        OnStartEffect(Character: APlayerCharacter): void;
        ExecuteUbergraph_DE_LeafLoverDisableAllEffects(EntryPoint: number): void;
    };
    readonly __properties_UDE_LeafLoverDisableAllEffects_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TargetScale: number;
        Character: APlayerCharacter;
        StartScale: number;
        Progress: number;
    };
    readonly __staticRegistry: 
        UDE_LeafLoverDisableAllEffects_C['__static_UDE_LeafLoverDisableAllEffects_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_LeafLoverDisableAllEffects_C['__properties_UDE_LeafLoverDisableAllEffects_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

