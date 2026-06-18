declare interface ABP_PostProcessing_EndScreen_C extends AFSDPostProcessingActor {
    readonly __properties_ABP_PostProcessing_EndScreen_C: {
        ExponentialHeightFog1: UExponentialHeightFogComponent;
        PostProcess: UPostProcessComponent;
        DefaultSceneRoot: USceneComponent;
    };
    readonly __staticRegistry: 
        AFSDPostProcessingActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_PostProcessing_EndScreen_C['__properties_ABP_PostProcessing_EndScreen_C'] &
        AFSDPostProcessingActor['__propertyRegistry'];
}

