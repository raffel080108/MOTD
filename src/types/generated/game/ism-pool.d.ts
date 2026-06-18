declare interface AISMPoolActor extends AActor {
    readonly __properties_AISMPoolActor: {
        ISMPoolComp: UISMPoolComponent;
        ISMPoolDebugDrawComp: UISMPoolDebugDrawComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AISMPoolActor['__properties_AISMPoolActor'] &
        AActor['__propertyRegistry'];
}

declare interface UISMPoolComponent extends USceneComponent {
    readonly __staticRegistry: 
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USceneComponent['__propertyRegistry'];
}

declare interface UISMPoolDebugDrawComponent extends UDebugDrawComponent {
    readonly __properties_UISMPoolDebugDrawComponent: {
        bShowGlobalStats: boolean;
        bShowStats: boolean;
        bShowBounds: boolean;
        SelectedComponent: UInstancedStaticMeshComponent;
    };
    readonly __staticRegistry: 
        UDebugDrawComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UISMPoolDebugDrawComponent['__properties_UISMPoolDebugDrawComponent'] &
        UDebugDrawComponent['__propertyRegistry'];
}

declare interface UISMPoolSubSystem extends UWorldSubsystem {
    readonly __static_UISMPoolSubSystem: {
        OnActorEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
    };
    readonly __staticRegistry: 
        UISMPoolSubSystem['__static_UISMPoolSubSystem'] &
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

