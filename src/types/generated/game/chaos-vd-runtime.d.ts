declare interface FChaosVDAABBTreeDataWrapper extends FChaosVDAccelerationStructureBase {
    RootNodeIndex: number;
    TreeDepth: number;
    NodesNum: number;
    LeavesNum: number;
    bDynamicTree: boolean;
    MaxChildrenInLeaf: number;
    MaxTreeDepth: number;
    MaxPayloadBounds: number;
}
declare const FChaosVDAABBTreeDataWrapper: FChaosVDAABBTreeDataWrapper;

declare interface FChaosVDAABBTreeLeafDataWrapper extends FChaosVDWrapperDataBase {
    Elements: TArray<FChaosVDAABBTreePayloadBoundsElement>;
    Bounds: FBox;
}
declare const FChaosVDAABBTreeLeafDataWrapper: FChaosVDAABBTreeLeafDataWrapper;

declare interface FChaosVDAABBTreeNodeDataWrapper extends FChaosVDWrapperDataBase {
    ChildrenBounds: FBox;
    ChildrenNodes: number;
    ParentNode: number;
    bLeaf: boolean;
    bDirtyNode: boolean;
}
declare const FChaosVDAABBTreeNodeDataWrapper: FChaosVDAABBTreeNodeDataWrapper;

declare interface FChaosVDAABBTreePayloadBoundsElement extends FChaosVDWrapperDataBase {
    ParticleIndex: number;
    Bounds: FBox;
}
declare const FChaosVDAABBTreePayloadBoundsElement: FChaosVDAABBTreePayloadBoundsElement;

declare interface FChaosVDAccelerationStructureBase extends FChaosVDWrapperDataBase {
    SolverId: number;
    Type: EChaosVDAccelerationStructureType;
}
declare const FChaosVDAccelerationStructureBase: FChaosVDAccelerationStructureBase;

declare interface FChaosVDAccelerationStructureContainer {

}
declare const FChaosVDAccelerationStructureContainer: FChaosVDAccelerationStructureContainer;

declare interface FChaosVDBVCellElementDataWrapper extends FChaosVDWrapperDataBase {
    Bounds: FBox;
    ParticleIndex: number;
}
declare const FChaosVDBVCellElementDataWrapper: FChaosVDBVCellElementDataWrapper;

declare interface FChaosVDBoundingVolumeDataWrapper extends FChaosVDAccelerationStructureBase {
    MaxPayloadBounds: number;
}
declare const FChaosVDBoundingVolumeDataWrapper: FChaosVDBoundingVolumeDataWrapper;

declare interface FChaosVDCharacterGroundConstraint extends FChaosVDConstraintDataWrapperBase {
    ConstraintIndex: number;
    State: FChaosVDCharacterGroundConstraintStateDataWrapper;
    Settings: FChaosVDCharacterGroundConstraintSettingsDataWrapper;
    Data: FChaosVDCharacterGroundConstraintDataDataWrapper;
}
declare const FChaosVDCharacterGroundConstraint: FChaosVDCharacterGroundConstraint;

declare interface FChaosVDCharacterGroundConstraintDataDataWrapper extends FChaosVDWrapperDataBase {
    GroundNormal: FVector;
    TargetDeltaPosition: FVector;
    TargetDeltaFacing: number;
    GroundDistance: number;
    CosMaxWalkableSlopeAngle: number;
}
declare const FChaosVDCharacterGroundConstraintDataDataWrapper: FChaosVDCharacterGroundConstraintDataDataWrapper;

declare interface FChaosVDCharacterGroundConstraintSettingsDataWrapper extends FChaosVDWrapperDataBase {
    VerticalAxis: FVector;
    TargetHeight: number;
    RadialForceLimit: number;
    FrictionForceLimit: number;
    TwistTorqueLimit: number;
    SwingTorqueLimit: number;
    CosMaxWalkableSlopeAngle: number;
    DampingFactor: number;
    AssumedOnGroundHeight: number;
}
declare const FChaosVDCharacterGroundConstraintSettingsDataWrapper: FChaosVDCharacterGroundConstraintSettingsDataWrapper;

declare interface FChaosVDCharacterGroundConstraintStateDataWrapper extends FChaosVDWrapperDataBase {
    bDisabled: boolean;
    SolverAppliedForce: FVector;
    SolverAppliedTorque: FVector;
}
declare const FChaosVDCharacterGroundConstraintStateDataWrapper: FChaosVDCharacterGroundConstraintStateDataWrapper;

declare interface FChaosVDCollisionChannelInfo {
    DisplayName: FString;
    CollisionChannel: number;
    bIsTraceType: boolean;
}
declare const FChaosVDCollisionChannelInfo: FChaosVDCollisionChannelInfo;

declare interface FChaosVDCollisionChannelsInfoContainer {
    CustomChannelsNames: FChaosVDCollisionChannelInfo;
}
declare const FChaosVDCollisionChannelsInfoContainer: FChaosVDCollisionChannelsInfoContainer;

declare interface FChaosVDCollisionFilterData {
    Word0: uint32;
    Word1: uint32;
    Word2: uint32;
    Word3: uint32;
}
declare const FChaosVDCollisionFilterData: FChaosVDCollisionFilterData;

declare interface FChaosVDCollisionMaterial {
    FaceIndex: number;
    MaterialDynamicFriction: number;
    MaterialStaticFriction: number;
    MaterialRestitution: number;
    DynamicFriction: number;
    StaticFriction: number;
    Restitution: number;
    RestitutionThreshold: number;
    InvMassScale0: number;
    InvMassScale1: number;
    InvInertiaScale0: number;
    InvInertiaScale1: number;
}
declare const FChaosVDCollisionMaterial: FChaosVDCollisionMaterial;

declare interface FChaosVDCollisionObjectQueryParams extends FChaosVDWrapperDataBase {
    ObjectTypesToQuery: uint8;
    IgnoreMask: uint8;
}
declare const FChaosVDCollisionObjectQueryParams: FChaosVDCollisionObjectQueryParams;

declare interface FChaosVDCollisionQueryParams extends FChaosVDWrapperDataBase {
    TraceTag: FName;
    OwnerTag: FName;
    bTraceComplex: boolean;
    bFindInitialOverlaps: boolean;
    bReturnFaceIndex: boolean;
    bReturnPhysicalMaterial: boolean;
    bIgnoreBlocks: boolean;
    bIgnoreTouches: boolean;
    bSkipNarrowPhase: boolean;
    bTraceIntoSubComponents: boolean;
    bReplaceHitWithSubComponents: boolean;
    IgnoreMask: uint8;
    IgnoredActorsNames: TArray<FName>;
    IgnoredComponentsNames: TArray<FName>;
}
declare const FChaosVDCollisionQueryParams: FChaosVDCollisionQueryParams;

declare interface FChaosVDCollisionResponseParams extends FChaosVDWrapperDataBase {

}
declare const FChaosVDCollisionResponseParams: FChaosVDCollisionResponseParams;

declare interface FChaosVDConnectivityEdge {
    SiblingParticleID: number;
    Strain: number;
}
declare const FChaosVDConnectivityEdge: FChaosVDConnectivityEdge;

declare interface FChaosVDConstraint {
    bIsCurrent: boolean;
    bDisabled: boolean;
    bUseManifold: boolean;
    bUseIncrementalManifold: boolean;
    bCanRestoreManifold: boolean;
    bWasManifoldRestored: boolean;
    bIsQuadratic0: boolean;
    bIsQuadratic1: boolean;
    bIsProbe: boolean;
    bCCDEnabled: boolean;
    bCCDSweepEnabled: boolean;
    bModifierApplied: boolean;
    bMaterialSet: boolean;
    Material: FChaosVDCollisionMaterial;
    AccumulatedImpulse: FVector;
    ShapesType: EChaosVDContactShapesType;
    ShapeWorldTransforms: FTransform;
    ImplicitTransforms: FTransform;
    CullDistance: number;
    CollisionMargins: TArray<number>;
    CollisionTolerance: number;
    ClosestManifoldPointIndex: number;
    ExpectedNumManifoldPoints: number;
    LastShapeWorldPositionDelta: FVector;
    LastShapeWorldRotationDelta: FQuat;
    Stiffness: number;
    MinInitialPhi: number;
    InitialOverlapDepenetrationVelocity: number;
    CCDTimeOfImpact: number;
    CCDEnablePenetration: number;
    CCDTargetPenetration: number;
    ManifoldPoints: TArray<FChaosVDManifoldPoint>;
    Particle0Index: number;
    Particle1Index: number;
    SolverId: number;
}
declare const FChaosVDConstraint: FChaosVDConstraint;

declare interface FChaosVDConstraintDataWrapperBase extends FChaosVDWrapperDataBase {

}
declare const FChaosVDConstraintDataWrapperBase: FChaosVDConstraintDataWrapperBase;

declare interface FChaosVDContactPoint {
    ShapeContactPoints: FVector;
    ShapeContactNormal: FVector;
    Phi: number;
    FaceIndex: number;
    ContactType: EChaosVDContactPointType;
}
declare const FChaosVDContactPoint: FChaosVDContactPoint;

declare interface FChaosVDDebugDrawBoxDataWrapper extends FChaosVDDebugDrawShapeBase {
    Box: FBox;
}
declare const FChaosVDDebugDrawBoxDataWrapper: FChaosVDDebugDrawBoxDataWrapper;

declare interface FChaosVDDebugDrawImplicitObjectDataWrapper extends FChaosVDDebugDrawShapeBase {

}
declare const FChaosVDDebugDrawImplicitObjectDataWrapper: FChaosVDDebugDrawImplicitObjectDataWrapper;

declare interface FChaosVDDebugDrawLineDataWrapper extends FChaosVDDebugDrawShapeBase {
    StartLocation: FVector;
    EndLocation: FVector;
    bIsArrow: boolean;
}
declare const FChaosVDDebugDrawLineDataWrapper: FChaosVDDebugDrawLineDataWrapper;

declare interface FChaosVDDebugDrawShapeBase extends FChaosVDWrapperDataBase {
    SolverId: number;
    Tag: FName;
    Color: FColor;
    ThreadContext: EChaosVDParticleContext;
}
declare const FChaosVDDebugDrawShapeBase: FChaosVDDebugDrawShapeBase;

declare interface FChaosVDDebugDrawSphereDataWrapper extends FChaosVDDebugDrawShapeBase {
    Origin: FVector;
    Radius: number;
}
declare const FChaosVDDebugDrawSphereDataWrapper: FChaosVDDebugDrawSphereDataWrapper;

declare interface FChaosVDDebugShapeDataContainer {

}
declare const FChaosVDDebugShapeDataContainer: FChaosVDDebugShapeDataContainer;

declare interface FChaosVDFRigidParticleControlFlags extends FChaosVDWrapperDataBase {
    bGravityEnabled: boolean;
    bCCDEnabled: boolean;
    bOneWayInteractionEnabled: boolean;
    bInertiaConditioningEnabled: boolean;
    GravityGroupIndex: number;
    bMACDEnabled: boolean;
    bGyroscopicTorqueEnabled: boolean;
    PositionSolverIterationCount: uint8;
    VelocitySolverIterationCount: uint8;
    ProjectionSolverIterationCount: uint8;
}
declare const FChaosVDFRigidParticleControlFlags: FChaosVDFRigidParticleControlFlags;

declare interface FChaosVDGTJointStateDataWrapper extends FChaosVDWrapperDataBase {
    bIsBreaking: boolean;
    bIsBroken: boolean;
    bDriveTargetChanged: boolean;
    bIsViolating: boolean;
    Force: FVector;
    Torque: FVector;
    LinearViolation: number;
    AngularViolation: number;
}
declare const FChaosVDGTJointStateDataWrapper: FChaosVDGTJointStateDataWrapper;

declare interface FChaosVDJointConstraint extends FChaosVDConstraintDataWrapperBase {
    ConstraintIndex: number;
    PhysicsThreadJointState: FChaosVDJointStateDataWrapper;
    GameThreadJointState: FChaosVDGTJointStateDataWrapper;
    JointSettings: FChaosVDJointSettingsDataWrapper;
}
declare const FChaosVDJointConstraint: FChaosVDJointConstraint;

declare interface FChaosVDJointSettingsDataWrapper extends FChaosVDWrapperDataBase {
    ConnectorTransforms: FTransform;
    Stiffness: number;
    LinearProjection: number;
    AngularProjection: number;
    ShockPropagation: number;
    TeleportDistance: number;
    TeleportAngle: number;
    ParentInvMassScale: number;
    bCollisionEnabled: boolean;
    bMassConditioningEnabled: boolean;
    bUseLinearSolver: boolean;
    bSoftLinearLimitsEnabled: boolean;
    bSoftTwistLimitsEnabled: boolean;
    bSoftSwingLimitsEnabled: boolean;
    bAngularSLerpPositionDriveEnabled: boolean;
    bAngularSLerpVelocityDriveEnabled: boolean;
    bAngularTwistPositionDriveEnabled: boolean;
    bAngularTwistVelocityDriveEnabled: boolean;
    bAngularSwingPositionDriveEnabled: boolean;
    bAngularSwingVelocityDriveEnabled: boolean;
    LinearMotionTypes: EChaosVDJointMotionType;
    LinearLimit: number;
    AngularMotionTypes: EChaosVDJointMotionType;
    AngularLimits: FVector;
    LinearSoftForceMode: EChaosVDJointForceMode;
    AngularSoftForceMode: EChaosVDJointForceMode;
    SoftLinearStiffness: number;
    SoftLinearDamping: number;
    SoftTwistStiffness: number;
    SoftTwistDamping: number;
    SoftSwingStiffness: number;
    SoftSwingDamping: number;
    LinearRestitution: number;
    TwistRestitution: number;
    SwingRestitution: number;
    LinearContactDistance: number;
    TwistContactDistance: number;
    SwingContactDistance: number;
    LinearDrivePositionTarget: FVector;
    LinearDriveVelocityTarget: FVector;
    bLinearPositionDriveEnabled0: boolean;
    bLinearPositionDriveEnabled1: boolean;
    bLinearPositionDriveEnabled2: boolean;
    bLinearVelocityDriveEnabled0: boolean;
    bLinearVelocityDriveEnabled1: boolean;
    bLinearVelocityDriveEnabled2: boolean;
    LinearDriveForceMode: EChaosVDJointForceMode;
    LinearDriveStiffness: FVector;
    LinearDriveDamping: FVector;
    LinearDriveMaxForce: FVector;
    AngularDrivePositionTarget: FQuat;
    AngularDriveVelocityTarget: FVector;
    AngularDriveForceMode: EChaosVDJointForceMode;
    AngularDriveStiffness: FVector;
    AngularDriveDamping: FVector;
    AngularDriveMaxTorque: FVector;
    LinearBreakForce: number;
    LinearPlasticityLimit: number;
    LinearPlasticityType: EChaosVDPlasticityType;
    LinearPlasticityInitialDistanceSquared: number;
    AngularBreakTorque: number;
    AngularPlasticityLimit: number;
    ContactTransferScale: number;
}
declare const FChaosVDJointSettingsDataWrapper: FChaosVDJointSettingsDataWrapper;

declare interface FChaosVDJointSolverSettingsDataWrapper extends FChaosVDWrapperDataBase {
    SwingTwistAngleTolerance: number;
    PositionTolerance: number;
    AngleTolerance: number;
    MinParentMassRatio: number;
    MaxInertiaRatio: number;
    MinSolverStiffness: number;
    MaxSolverStiffness: number;
    NumIterationsAtMaxSolverStiffness: number;
    NumShockPropagationIterations: number;
    bUseLinearSolver: boolean;
    bSortEnabled: boolean;
    bSolvePositionLast: boolean;
    bUsePositionBasedDrives: boolean;
    bEnableTwistLimits: boolean;
    bEnableSwingLimits: boolean;
    bEnableDrives: boolean;
    LinearStiffnessOverride: number;
    TwistStiffnessOverride: number;
    SwingStiffnessOverride: number;
    LinearProjectionOverride: number;
    AngularProjectionOverride: number;
    ShockPropagationOverride: number;
    LinearDriveStiffnessOverride: number;
    LinearDriveDampingOverride: number;
    AngularDriveStiffnessOverride: number;
    AngularDriveDampingOverride: number;
    SoftLinearStiffnessOverride: number;
    SoftLinearDampingOverride: number;
    SoftTwistStiffnessOverride: number;
    SoftTwistDampingOverride: number;
    SoftSwingStiffnessOverride: number;
    SoftSwingDampingOverride: number;
}
declare const FChaosVDJointSolverSettingsDataWrapper: FChaosVDJointSolverSettingsDataWrapper;

declare interface FChaosVDJointStateDataWrapper extends FChaosVDWrapperDataBase {
    bDisabled: boolean;
    bBroken: boolean;
    bBreaking: boolean;
    bDriveTargetChanged: boolean;
    bEnabledDuringResim: boolean;
    LinearImpulse: FVector;
    AngularImpulse: FVector;
    ResimType: EChaosVDJointReSimType;
    SyncState: EChaosVDJointSyncType;
}
declare const FChaosVDJointStateDataWrapper: FChaosVDJointStateDataWrapper;

declare interface FChaosVDKinematicTarget extends FChaosVDWrapperDataBase {
    Rotation: FQuat;
    position: FVector;
    Mode: EChaosVDKinematicTargetMode;
}
declare const FChaosVDKinematicTarget: FChaosVDKinematicTarget;

declare interface FChaosVDManifoldPoint {
    bDisabled: boolean;
    bWasRestored: boolean;
    bWasReplaced: boolean;
    bHasStaticFrictionAnchor: boolean;
    bIsValid: boolean;
    bInsideStaticFrictionCone: boolean;
    NetPushOut: FVector;
    NetImpulse: FVector;
    TargetPhi: number;
    InitialPhi: number;
    ShapeAnchorPoints: FVector;
    InitialShapeContactPoints: FVector;
    ContactPoint: FChaosVDContactPoint;
    ShapeContactPoints: FVector;
}
declare const FChaosVDManifoldPoint: FChaosVDManifoldPoint;

declare interface FChaosVDMultiSolverDebugShapeDataContainer {

}
declare const FChaosVDMultiSolverDebugShapeDataContainer: FChaosVDMultiSolverDebugShapeDataContainer;

declare interface FChaosVDParticleBounds extends FChaosVDWrapperDataBase {
    MMin: FVector;
    MMax: FVector;
}
declare const FChaosVDParticleBounds: FChaosVDParticleBounds;

declare interface FChaosVDParticleCluster extends FChaosVDWrapperDataBase {
    ParentParticleID: number;
    NumChildren: number;
    ChildToParent: FTransform;
    ClusterGroupIndex: number;
    bInternalCluster: boolean;
    CollisionImpulse: number;
    ExternalStrains: number;
    InternalStrains: number;
    Strain: number;
    ConnectivityEdges: TArray<FChaosVDConnectivityEdge>;
    bIsAnchored: boolean;
    bUnbreakable: boolean;
    bIsChildToParentLocked: boolean;
}
declare const FChaosVDParticleCluster: FChaosVDParticleCluster;

declare interface FChaosVDParticleDataWrapper extends FChaosVDWrapperDataBase {
    DirtyFlagsBits: number;
    ParticleContext: EChaosVDParticleContext;
    GeometryHash: uint32;
    DebugName: FString;
    ParticleIndex: number;
    SolverId: number;
    Type: EChaosVDParticleType;
    ParticlePositionRotation: FChaosVDParticlePositionRotation;
    ParticleVelocities: FChaosVDParticleVelocities;
    ParticleInflatedBounds: FChaosVDParticleBounds;
    ParticleKinematicTarget: FChaosVDKinematicTarget;
    ParticleVWSmooth: FChaosVDVSmooth;
    ParticleDynamics: FChaosVDParticleDynamics;
    ParticleDynamicsMisc: FChaosVDParticleDynamicMisc;
    ParticleMassProps: FChaosVDParticleMassProps;
    ParticleCluster: FChaosVDParticleCluster;
    CollisionDataPerShape: TArray<FChaosVDShapeCollisionData>;
}
declare const FChaosVDParticleDataWrapper: FChaosVDParticleDataWrapper;

declare interface FChaosVDParticleDynamicMisc extends FChaosVDWrapperDataBase {
    MLinearEtherDrag: number;
    MAngularEtherDrag: number;
    MMaxLinearSpeedSq: number;
    MMaxAngularSpeedSq: number;
    MInitialOverlapDepenetrationVelocity: number;
    MSleepThresholdMultiplier: number;
    MCollisionGroup: number;
    MObjectState: EChaosVDObjectStateType;
    MSleepType: EChaosVDSleepType;
    MCollisionConstraintFlag: uint32;
    MControlFlags: FChaosVDFRigidParticleControlFlags;
    bDisabled: boolean;
}
declare const FChaosVDParticleDynamicMisc: FChaosVDParticleDynamicMisc;

declare interface FChaosVDParticleDynamics extends FChaosVDWrapperDataBase {
    MAcceleration: FVector;
    MAngularAcceleration: FVector;
    MLinearImpulseVelocity: FVector;
    MAngularImpulseVelocity: FVector;
}
declare const FChaosVDParticleDynamics: FChaosVDParticleDynamics;

declare interface FChaosVDParticleMassProps extends FChaosVDWrapperDataBase {
    MCenterOfMass: FVector;
    MRotationOfMass: FQuat;
    MI: FVector;
    MInvI: FVector;
    MM: number;
    MInvM: number;
}
declare const FChaosVDParticleMassProps: FChaosVDParticleMassProps;

declare interface FChaosVDParticlePairMidPhase {
    SolverId: number;
    MidPhaseType: EChaosVDMidPhaseType;
    bIsActive: boolean;
    bIsCCD: boolean;
    bIsCCDActive: boolean;
    bIsSleeping: boolean;
    bIsModified: boolean;
    LastUsedEpoch: number;
    Particle0Idx: number;
    Particle1Idx: number;
    Constraints: TArray<FChaosVDConstraint>;
}
declare const FChaosVDParticlePairMidPhase: FChaosVDParticlePairMidPhase;

declare interface FChaosVDParticlePositionRotation extends FChaosVDWrapperDataBase {
    MX: FVector;
    MR: FQuat;
}
declare const FChaosVDParticlePositionRotation: FChaosVDParticlePositionRotation;

declare interface FChaosVDParticleVelocities extends FChaosVDWrapperDataBase {
    MV: FVector;
    MW: FVector;
}
declare const FChaosVDParticleVelocities: FChaosVDParticleVelocities;

declare interface FChaosVDQueryDataWrapper {
    ID: number;
    ParentQueryID: number;
    WorldSolverID: number;
    bIsRetryQuery: boolean;
    GeometryOrientation: FQuat;
    Type: EChaosVDSceneQueryType;
    Mode: EChaosVDSceneQueryMode;
    StartLocation: FVector;
    EndLocation: FVector;
    CollisionChannel: number;
    CollisionQueryParams: FChaosVDCollisionQueryParams;
    CollisionResponseParams: FChaosVDCollisionResponseParams;
    CollisionObjectQueryParams: FChaosVDCollisionObjectQueryParams;
    Hits: TArray<FChaosVDQueryVisitStep>;
}
declare const FChaosVDQueryDataWrapper: FChaosVDQueryDataWrapper;

declare interface FChaosVDQueryFastData extends FChaosVDWrapperDataBase {
    Dir: FVector;
    InvDir: FVector;
    CurrentLength: number;
    InvCurrentLength: number;
    bParallel0: boolean;
    bParallel1: boolean;
    bParallel2: boolean;
}
declare const FChaosVDQueryFastData: FChaosVDQueryFastData;

declare interface FChaosVDQueryHitData extends FChaosVDWrapperDataBase {
    Distance: number;
    FaceIdx: number;
    Flags: uint16;
    WorldPosition: FVector;
    WorldNormal: FVector;
    FaceNormal: FVector;
}
declare const FChaosVDQueryHitData: FChaosVDQueryHitData;

declare interface FChaosVDQueryVisitStep extends FChaosVDWrapperDataBase {
    Type: EChaosVDSceneQueryVisitorType;
    ShapeIndex: uint32;
    ParticleIndex: number;
    ParticleTransform: FTransform;
    QueryFastData: FChaosVDQueryFastData;
    HitType: EChaosVDCollisionQueryHitType;
    HitData: FChaosVDQueryHitData;
    RejectReason: EChaosVDSQVisitRejectReason;
}
declare const FChaosVDQueryVisitStep: FChaosVDQueryVisitStep;

declare interface FChaosVDSceneQueriesDataContainer {

}
declare const FChaosVDSceneQueriesDataContainer: FChaosVDSceneQueriesDataContainer;

declare interface FChaosVDShapeCollisionData {
    CollisionTraceType: EChaosVDCollisionTraceFlag;
    bSimCollision: boolean;
    bQueryCollision: boolean;
    bIsProbe: boolean;
    QueryData: FChaosVDCollisionFilterData;
    SimData: FChaosVDCollisionFilterData;
    bIsComplex: boolean;
    bIsValid: boolean;
}
declare const FChaosVDShapeCollisionData: FChaosVDShapeCollisionData;

declare interface FChaosVDTraceDetails {
    TraceGuid: FGuid;
    SessionGuid: FGuid;
    TraceTarget: FString;
    bIsConnected: boolean;
    Mode: EChaosVDRecordingMode;
}
declare const FChaosVDTraceDetails: FChaosVDTraceDetails;

declare interface FChaosVDVSmooth extends FChaosVDWrapperDataBase {
    MV: FVector;
    MW: FVector;
}
declare const FChaosVDVSmooth: FChaosVDVSmooth;

declare interface FChaosVDWrapperDataBase {
    bHasValidData: boolean;
}
declare const FChaosVDWrapperDataBase: FChaosVDWrapperDataBase;

