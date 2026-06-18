declare interface UDE_GutWrecker_C extends UDrinkEffectComponent {
    readonly __static_UDE_GutWrecker_C: {
        ReceiveTick(DeltaSeconds: number): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_GutWrecker(EntryPoint: number): void;
    };
    readonly __properties_UDE_GutWrecker_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
    };
    readonly __staticRegistry: 
        UDE_GutWrecker_C['__static_UDE_GutWrecker_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_GutWrecker_C['__properties_UDE_GutWrecker_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

