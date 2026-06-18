declare interface ACableActor extends AActor {
    readonly __properties_ACableActor: {
        CableComponent: UCableComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACableActor['__properties_ACableActor'] &
        AActor['__propertyRegistry'];
}

declare interface UCableComponent extends UMeshComponent {
    readonly __static_UCableComponent: {
        SetAttachEndToComponent(Component: USceneComponent, SocketName: string): void;
        SetAttachEndTo(Actor: AActor, ComponentProperty: string, SocketName: string): void;
        GetCableParticleLocations(Locations: FVector[]): void;
        GetAttachedComponent(): USceneComponent;
        GetAttachedActor(): AActor;
    };
    readonly __properties_UCableComponent: {
        bAttachStart: boolean;
        bAttachEnd: boolean;
        AttachEndTo: FComponentReference;
        AttachEndToSocketName: string;
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
    };
    readonly __staticRegistry: 
        UCableComponent['__static_UCableComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCableComponent['__properties_UCableComponent'] &
        UMeshComponent['__propertyRegistry'];
}

