declare interface ABP_WormholeLocation_Base_C extends AActor {
    readonly __static_ABP_WormholeLocation_Base_C: {
        OnPlayerEnterLocation(Character: APlayerCharacter): void;
        OnPlayerLeaveLocation(Character: APlayerCharacter): void;
        ExecuteUbergraph_BP_WormholeLocation_Base(EntryPoint: number): void;
    };
    readonly __properties_ABP_WormholeLocation_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        DefaultSceneRoot: USceneComponent;
    };
    readonly __staticRegistry: 
        ABP_WormholeLocation_Base_C['__static_ABP_WormholeLocation_Base_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_WormholeLocation_Base_C['__properties_ABP_WormholeLocation_Base_C'] &
        AActor['__propertyRegistry'];
}

