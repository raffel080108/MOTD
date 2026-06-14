declare interface ACableActor extends AActor {
    CableComponent: UCableComponent;
}
declare const ACableActor: ACableActor;

declare interface UCableComponent extends UMeshComponent {
    bAttachStart: boolean;
    bAttachEnd: boolean;
    AttachEndTo: FComponentReference;
    AttachEndToSocketName: FName;
    EndLocation: FVector;
    CableLength: number;
    NumSegments: number;
    SubstepTime: number;
    SolverIterations: number;
    bEnableStiffness: boolean;
    bUseSubstepping: boolean;
    bSkipCableUpdateWhenNotVisible: boolean;
    bSkipCableUpdateWhenNotOwnerRecentlyRendered: boolean;
    bEnableCollision: boolean;
    CollisionFriction: number;
    CableForce: FVector;
    CableGravityScale: number;
    CableWidth: number;
    NumSides: number;
    TileMaterial: number;
    bResetAfterTeleport: boolean;
    TeleportDistanceThreshold: number;
    TeleportRotationThreshold: number;
    bTeleportAfterReattach: boolean;
    SetAttachEndToComponent(Component: USceneComponent, SocketName: FName): void;
    SetAttachEndTo(Actor: AActor, ComponentProperty: FName, SocketName: FName): void;
    GetCableParticleLocations(Locations: TArray<FVector>): void;
    GetAttachedComponent(): USceneComponent;
    GetAttachedActor(): AActor;
}
declare const UCableComponent: UCableComponent;

