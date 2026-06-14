declare interface AChaosSolverActor extends AActor {
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
    SetSolverActive(bActive: boolean): void;
    SetAsCurrentWorldSolver(): void;
}
declare const AChaosSolverActor: AChaosSolverActor;

declare interface FBreakEventCallbackWrapper {

}
declare const FBreakEventCallbackWrapper: FBreakEventCallbackWrapper;

declare interface FChaosDebugSubstepControl {
    bPause: boolean;
    bSubstep: boolean;
    bStep: boolean;
}
declare const FChaosDebugSubstepControl: FChaosDebugSubstepControl;

declare interface FChaosHandlerSet {
    ChaosHandlers: TSet<UObject>;
}
declare const FChaosHandlerSet: FChaosHandlerSet;

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
declare const FChaosPhysicsCollisionInfo: FChaosPhysicsCollisionInfo;

declare interface FChaosVDChannelStateChangeCommandMessage {
    NewState: FChaosVDDataChannelState;
}
declare const FChaosVDChannelStateChangeCommandMessage: FChaosVDChannelStateChangeCommandMessage;

declare interface FChaosVDChannelStateChangeResponseMessage {
    InstanceId: FGuid;
    NewState: FChaosVDDataChannelState;
}
declare const FChaosVDChannelStateChangeResponseMessage: FChaosVDChannelStateChangeResponseMessage;

declare interface FChaosVDDataChannelState {
    ChannelName: FString;
    bIsEnabled: boolean;
    bCanChangeChannelState: boolean;
}
declare const FChaosVDDataChannelState: FChaosVDDataChannelState;

declare interface FChaosVDFullSessionInfoRequestMessage {

}
declare const FChaosVDFullSessionInfoRequestMessage: FChaosVDFullSessionInfoRequestMessage;

declare interface FChaosVDFullSessionInfoResponseMessage {
    InstanceId: FGuid;
    DataChannelsStates: TArray<FChaosVDDataChannelState>;
    bIsRecording: boolean;
}
declare const FChaosVDFullSessionInfoResponseMessage: FChaosVDFullSessionInfoResponseMessage;

declare interface FChaosVDRecordingStatusMessage {
    InstanceId: FGuid;
    bIsRecording: boolean;
    ElapsedTime: number;
    TraceDetails: FChaosVDTraceDetails;
}
declare const FChaosVDRecordingStatusMessage: FChaosVDRecordingStatusMessage;

declare interface FChaosVDSessionPing {
    ControllerInstanceId: FGuid;
}
declare const FChaosVDSessionPing: FChaosVDSessionPing;

declare interface FChaosVDSessionPong {
    InstanceId: FGuid;
    SessionId: FGuid;
    SessionName: FString;
    BuildTargetType: uint8;
}
declare const FChaosVDSessionPong: FChaosVDSessionPong;

declare interface FChaosVDStartRecordingCommandMessage {
    RecordingMode: EChaosVDRecordingMode;
    Target: FString;
}
declare const FChaosVDStartRecordingCommandMessage: FChaosVDStartRecordingCommandMessage;

declare interface FChaosVDStopRecordingCommandMessage {

}
declare const FChaosVDStopRecordingCommandMessage: FChaosVDStopRecordingCommandMessage;

declare interface FCrumblingEventCallbackWrapper {

}
declare const FCrumblingEventCallbackWrapper: FCrumblingEventCallbackWrapper;

declare interface FDataflowRigidSolverProxy extends FDataflowPhysicsSolverProxy {

}
declare const FDataflowRigidSolverProxy: FDataflowRigidSolverProxy;

declare interface FRemovalEventCallbackWrapper {

}
declare const FRemovalEventCallbackWrapper: FRemovalEventCallbackWrapper;

declare interface IChaosNotifyHandlerInterface extends IInterface {

}
declare const IChaosNotifyHandlerInterface: IChaosNotifyHandlerInterface;

declare interface UChaosDebugDrawComponent extends UActorComponent {

}
declare const UChaosDebugDrawComponent: UChaosDebugDrawComponent;

declare interface UChaosDebugDrawSubsystem extends UWorldSubsystem {

}
declare const UChaosDebugDrawSubsystem: UChaosDebugDrawSubsystem;

declare interface UChaosEventListenerComponent extends UActorComponent {

}
declare const UChaosEventListenerComponent: UChaosEventListenerComponent;

declare interface UChaosGameplayEventDispatcher extends UChaosEventListenerComponent {
    CollisionEventRegistrations: Record<string | number | symbol, FChaosHandlerSet>;
    BreakEventRegistrations: Record<string | number | symbol, FBreakEventCallbackWrapper>;
    RemovalEventRegistrations: Record<string | number | symbol, FRemovalEventCallbackWrapper>;
    CrumblingEventRegistrations: Record<string | number | symbol, FCrumblingEventCallbackWrapper>;
}
declare const UChaosGameplayEventDispatcher: UChaosGameplayEventDispatcher;

declare interface UChaosSolver extends UObject {

}
declare const UChaosSolver: UChaosSolver;

declare interface UChaosSolverEngineBlueprintLibrary extends UBlueprintFunctionLibrary {
    ConvertPhysicsCollisionToHitResult(PhysicsCollision: FChaosPhysicsCollisionInfo): FHitResult;
}
declare const UChaosSolverEngineBlueprintLibrary: UChaosSolverEngineBlueprintLibrary;

declare interface UChaosSolverSettings extends UDeveloperSettings {
    DefaultChaosSolverActorClass: FSoftClassPath;
}
declare const UChaosSolverSettings: UChaosSolverSettings;

