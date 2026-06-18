declare interface ABP_Portal_C extends AActor {
    readonly __static_ABP_Portal_C: {
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_Portal(EntryPoint: number): void;
    };
    readonly __properties_ABP_Portal_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SM_Prim_GeoSphere_20segments: UStaticMeshComponent;
        DefaultSceneRoot: USceneComponent;
        NewVar_0: USceneCaptureComponent2D;
        SceneReference: UObject;
    };
    readonly __staticRegistry: 
        ABP_Portal_C['__static_ABP_Portal_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_Portal_C['__properties_ABP_Portal_C'] &
        AActor['__propertyRegistry'];
}

