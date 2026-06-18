declare interface ABP_Flashover_StickyFlame_C extends AStickyFlame {
    readonly __properties_ABP_Flashover_StickyFlame_C: {
        Sphere: USphereComponent;
        PathfinderCollision: UPathfinderCollisionComponent;
        PointLight: UPointLightComponent;
    };
    readonly __staticRegistry: 
        AStickyFlame['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Flashover_StickyFlame_C['__properties_ABP_Flashover_StickyFlame_C'] &
        AStickyFlame['__propertyRegistry'];
}

