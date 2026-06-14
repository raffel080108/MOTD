declare interface ABP_PointOfInterest_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Sphere: UStaticMeshComponent;
    FirstPersonWidget: UFirstPersonWidgetComponent;
    DefaultSceneRoot: USceneComponent;
    Icon: UTexture2D;
    Init(Texture: UTexture2D): void;
    ReceiveBeginPlay(): void;
    Finished_Event(): void;
    ExecuteUbergraph_BP_PointOfInterest(EntryPoint: number): void;
}
declare const ABP_PointOfInterest_C: ABP_PointOfInterest_C;

