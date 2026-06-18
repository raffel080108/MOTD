declare interface UDE_WormholeSpecial_C extends UDrinkEffectComponent {
    readonly __static_UDE_WormholeSpecial_C: {
        IsLastActiveWormholeEffect(was_last_effect: boolean): void;
        ReceiveTick(DeltaSeconds: number): void;
        OnStartEffect(Character: APlayerCharacter): void;
        OnStopEffect(): void;
        ExecuteUbergraph_DE_WormholeSpecial(EntryPoint: number): void;
    };
    readonly __properties_UDE_WormholeSpecial_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        ActiveWormhole: ABP_WormholeLocation_Base_C;
    };
    readonly __staticRegistry: 
        UDE_WormholeSpecial_C['__static_UDE_WormholeSpecial_C'] &
        UDrinkEffectComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDE_WormholeSpecial_C['__properties_UDE_WormholeSpecial_C'] &
        UDrinkEffectComponent['__propertyRegistry'];
}

