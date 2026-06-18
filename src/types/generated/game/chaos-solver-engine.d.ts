declare interface AChaosSolverActor extends AActor {
    readonly __static_AChaosSolverActor: {
        SetSolverActive(bActive: boolean): void;
        SetAsCurrentWorldSolver(): void;
    };
    readonly __properties_AChaosSolverActor: {
        Properties: FChaosSolverConfiguration;
        TimeStepMultiplier: number;
        CollisionIterations: number;
        PushOutIterations: number;
        PushOutPairIterations: number;
        ClusterConnectionFactor: number;
        ClusterUnionConnectionType: EClusterConnectionTypeEnum;
        DoGenerateCollisionData: boolean;
        CollisionFilterSettings: FSolverCollisionFilterSettings;
        DoGenerateBreakingData: boolean;
        BreakingFilterSettings: FSolverBreakingFilterSettings;
        DoGenerateTrailingData: boolean;
        TrailingFilterSettings: FSolverTrailingFilterSettings;
        MassScale: number;
        bHasFloor: boolean;
        FloorHeight: number;
        ChaosDebugSubstepControl: FChaosDebugSubstepControl;
        SpriteComponent: UBillboardComponent;
        SimulationAsset: FDataflowSimulationAsset;
        GameplayEventDispatcherComponent: UChaosGameplayEventDispatcher;
    };
    readonly __staticRegistry: 
        AChaosSolverActor['__static_AChaosSolverActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AChaosSolverActor['__properties_AChaosSolverActor'] &
        AActor['__propertyRegistry'];
}

declare type FBreakEventCallbackWrapper = object;

declare interface FChaosDebugSubstepControl {
    bPause: boolean;
    bSubstep: boolean;
    bStep: boolean;
}

declare interface FChaosHandlerSet {
    ChaosHandlers: UObject[];
}

declare interface FChaosPhysicsCollisionInfo {
    Component: UPrimitiveComponent;
    OtherComponent: UPrimitiveComponent;
    Location: FVector;
    Normal: FVector;
    AccumulatedImpulse: FVector;
    Velocity: FVector;
    OtherVelocity: FVector;
    AngularVelocity: FVector;
    OtherAngularVelocity: FVector;
    Mass: number;
    OtherMass: number;
}

declare interface FChaosVDChannelStateChangeCommandMessage {
    NewState: FChaosVDDataChannelState;
}

declare interface FChaosVDChannelStateChangeResponseMessage {
    InstanceId: FGuid;
    NewState: FChaosVDDataChannelState;
}

declare interface FChaosVDDataChannelState {
    ChannelName: string;
    bIsEnabled: boolean;
    bCanChangeChannelState: boolean;
}

declare type FChaosVDFullSessionInfoRequestMessage = object;

declare interface FChaosVDFullSessionInfoResponseMessage {
    InstanceId: FGuid;
    DataChannelsStates: FChaosVDDataChannelState[];
    bIsRecording: boolean;
}

declare interface FChaosVDRecordingStatusMessage {
    InstanceId: FGuid;
    bIsRecording: boolean;
    ElapsedTime: number;
    TraceDetails: FChaosVDTraceDetails;
}

declare interface FChaosVDSessionPing {
    ControllerInstanceId: FGuid;
}

declare interface FChaosVDSessionPong {
    InstanceId: FGuid;
    SessionId: FGuid;
    SessionName: string;
    BuildTargetType: number;
}

declare interface FChaosVDStartRecordingCommandMessage {
    RecordingMode: EChaosVDRecordingMode;
    Target: string;
}

declare type FChaosVDStopRecordingCommandMessage = object;

declare type FCrumblingEventCallbackWrapper = object;

declare interface FDataflowRigidSolverProxy extends FDataflowPhysicsSolverProxy {

}

declare type FRemovalEventCallbackWrapper = object;

declare interface IChaosNotifyHandlerInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UChaosDebugDrawComponent extends UActorComponent {
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorComponent['__propertyRegistry'];
}

declare interface UChaosDebugDrawSubsystem extends UWorldSubsystem {
    readonly __staticRegistry: 
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UChaosEventListenerComponent extends UActorComponent {
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorComponent['__propertyRegistry'];
}

declare interface UChaosGameplayEventDispatcher extends UChaosEventListenerComponent {
    readonly __properties_UChaosGameplayEventDispatcher: {
        CollisionEventRegistrations: TMap<UPrimitiveComponent, FChaosHandlerSet>;
        BreakEventRegistrations: TMap<UPrimitiveComponent, FBreakEventCallbackWrapper>;
        RemovalEventRegistrations: TMap<UPrimitiveComponent, FRemovalEventCallbackWrapper>;
        CrumblingEventRegistrations: TMap<UPrimitiveComponent, FCrumblingEventCallbackWrapper>;
    };
    readonly __staticRegistry: 
        UChaosEventListenerComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosGameplayEventDispatcher['__properties_UChaosGameplayEventDispatcher'] &
        UChaosEventListenerComponent['__propertyRegistry'];
}

declare interface UChaosSolver extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UChaosSolverEngineBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UChaosSolverEngineBlueprintLibrary: {
        ConvertPhysicsCollisionToHitResult(PhysicsCollision: FChaosPhysicsCollisionInfo): FHitResult;
    };
    readonly __staticRegistry: 
        UChaosSolverEngineBlueprintLibrary['__static_UChaosSolverEngineBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UChaosSolverSettings extends UDeveloperSettings {
    readonly __properties_UChaosSolverSettings: {
        DefaultChaosSolverActorClass: FSoftClassPath;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosSolverSettings['__properties_UChaosSolverSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

