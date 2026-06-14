declare interface ABP_LaserPointer_Marker_C extends ALaserPointerMarker {
    UberGraphFrame: FPointerToUberGraphFrame;
    StaticMesh3: UStaticMeshComponent;
    StaticMesh2: UStaticMeshComponent;
    StaticMesh1: UStaticMeshComponent;
    StaticMesh: UStaticMeshComponent;
    ActorTracking: UActorTrackingComponent;
    Sphere: UStaticMeshComponent;
    DefaultSceneRoot: USceneComponent;
    ComponentToBeOutlined: UOutlineComponent;
    IsBallVisible: boolean;
    ComponentThatIsOutlined: UOutlineComponent;
    PingLocation: FVector;
    OnRep_PingLocation(): void;
    UpdateBallVisible(): void;
    OnRep_IsBallVisible(): void;
    SetOutlinedComponent(ComponentToLock: UOutlineComponent): void;
    OnRep_ComponentToBeOutlined(): void;
    OnTargetDeath(HealthComponent: UHealthComponentBase): void;
    ConnectToTargetHealth(): void;
    OnTargetDestroyed(Actor: AActor): void;
    ConnectToTargetActor(): void;
    UpdateMaterial(): void;
    GetMaterial(Material: TSoftObjectPtr<UMaterialInterface>): void;
    ReceiveBeginPlay(): void;
    LoadMaterial(): void;
    OnMaterialLoaded(): void;
    ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
    ExecuteUbergraph_BP_LaserPointer_Marker(EntryPoint: number): void;
}
declare const ABP_LaserPointer_Marker_C: ABP_LaserPointer_Marker_C;

