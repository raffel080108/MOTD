declare interface ABP_Portal_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    SM_Prim_GeoSphere_20segments: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    NewVar_0: USceneCaptureComponent2D;
    SceneReference: UObject;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Portal(EntryPoint: number): void;
}
declare const ABP_Portal_C: ABP_Portal_C;

