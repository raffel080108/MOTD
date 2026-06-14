declare interface ABP_HandheldTablet_3P_C extends AActor {
    StaticMesh: UStaticMeshComponent;
    DefaultRoot: USceneComponent;
    MonitorMaterial: UMaterialInstanceDynamic;
    OnSpawnRelease_Attached(Parent: AActor): boolean;
    OnSpawnRelease_Released(From: AActor): boolean;
    SetBackgroundColor(Value: FLinearColor): void;
    UserConstructionScript(): void;
}
declare const ABP_HandheldTablet_3P_C: ABP_HandheldTablet_3P_C;

