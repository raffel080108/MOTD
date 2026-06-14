declare interface ABP_LaserPointerWaypoint_C extends ALaserPointerWaypoint {
    UberGraphFrame: FPointerToUberGraphFrame;
    ShowOnScanner: UStaticMeshComponent;
    RotatorNode: USceneComponent;
    Sphere: UStaticMeshComponent;
    ActorTracking: UActorTrackingComponent;
    ShowInGame: USceneComponent;
    SimpleObjectInfo: USimpleObjectInfoComponent;
    DefaultSceneRoot: USceneComponent;
    Scanner_Object_Timeline_Time_EC07CDDA40AC89EA6875FCB53F3F2A41: number;
    Scanner_Object_Timeline__Direction_EC07CDDA40AC89EA6875FCB53F3F2A41: ETimelineDirection;
    OnShow(): void;
    OnHide(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_LaserPointerWaypoint(EntryPoint: number): void;
}
declare const ABP_LaserPointerWaypoint_C: ABP_LaserPointerWaypoint_C;

