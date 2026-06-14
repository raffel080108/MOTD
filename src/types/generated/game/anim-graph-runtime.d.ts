declare interface FAngularRangeLimit {
    LimitMin: FVector;
    LimitMax: FVector;
    bone: FBoneReference;
}
declare const FAngularRangeLimit: FAngularRangeLimit;

declare interface FAnimLegIKData {

}
declare const FAnimLegIKData: FAnimLegIKData;

declare interface FAnimLegIKDefinition {
    IKFootBone: FBoneReference;
    FKFootBone: FBoneReference;
    NumBonesInLimb: number;
    MinRotationAngle: number;
    FootBoneForwardAxis: EAxis;
    HingeRotationAxis: EAxis;
    bEnableRotationLimit: boolean;
    bEnableKneeTwistCorrection: boolean;
    TwistOffsetCurveName: FName;
}
declare const FAnimLegIKDefinition: FAnimLegIKDefinition;

declare interface FAnimNode_AimOffsetLookAt extends FAnimNode_BlendSpacePlayer {
    BasePose: FPoseLink;
    LODThreshold: number;
    SourceSocketName: FName;
    PivotSocketName: FName;
    LookAtLocation: FVector;
    SocketAxis: FVector;
    alpha: number;
}
declare const FAnimNode_AimOffsetLookAt: FAnimNode_AimOffsetLookAt;

declare interface FAnimNode_AnimDynamics extends FAnimNode_SkeletalControlBase {
    LinearDampingOverride: number;
    AngularDampingOverride: number;
    RelativeSpaceBone: FBoneReference;
    BoundBone: FBoneReference;
    ChainEnd: FBoneReference;
    PhysicsBodyDefinitions: TArray<FAnimPhysBodyDefinition>;
    GravityScale: number;
    GravityOverride: FVector;
    LinearSpringConstant: number;
    AngularSpringConstant: number;
    WindScale: number;
    ComponentLinearAccScale: FVector;
    ComponentLinearVelScale: FVector;
    ComponentAppliedLinearAccClamp: FVector;
    AngularBiasOverride: number;
    NumSolverIterationsPreUpdate: number;
    NumSolverIterationsPostUpdate: number;
    SphericalLimits: TArray<FAnimPhysSphericalLimit>;
    ExternalForce: FVector;
    PlanarLimits: TArray<FAnimPhysPlanarLimit>;
    SimulationSpace: AnimPhysSimSpaceType;
    bUseSphericalLimits: boolean;
    bUsePlanarLimit: boolean;
    bDoUpdate: boolean;
    bDoEval: boolean;
    bOverrideLinearDamping: boolean;
    bOverrideAngularBias: boolean;
    bOverrideAngularDamping: boolean;
    bEnableWind: boolean;
    bUseGravityOverride: boolean;
    bGravityOverrideInSimSpace: boolean;
    bLinearSpring: boolean;
    bAngularSpring: boolean;
    bChain: boolean;
    RetargetingSettings: FRotationRetargetingInfo;
}
declare const FAnimNode_AnimDynamics: FAnimNode_AnimDynamics;

declare interface FAnimNode_ApplyAdditive extends FAnimNode_Base {
    base: FPoseLink;
    Additive: FPoseLink;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    LODThreshold: number;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
}
declare const FAnimNode_ApplyAdditive: FAnimNode_ApplyAdditive;

declare interface FAnimNode_ApplyLimits extends FAnimNode_SkeletalControlBase {
    AngularRangeLimits: TArray<FAngularRangeLimit>;
    AngularOffsets: TArray<FVector>;
}
declare const FAnimNode_ApplyLimits: FAnimNode_ApplyLimits;

declare interface FAnimNode_BlendBoneByChannel extends FAnimNode_Base {
    A: FPoseLink;
    B: FPoseLink;
    BoneDefinitions: TArray<FBlendBoneByChannelEntry>;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    TransformsSpace: EBoneControlSpace;
}
declare const FAnimNode_BlendBoneByChannel: FAnimNode_BlendBoneByChannel;

declare interface FAnimNode_BlendListBase extends FAnimNode_Base {
    BlendPose: TArray<FPoseLink>;
}
declare const FAnimNode_BlendListBase: FAnimNode_BlendListBase;

declare interface FAnimNode_BlendListByBool extends FAnimNode_BlendListBase {

}
declare const FAnimNode_BlendListByBool: FAnimNode_BlendListByBool;

declare interface FAnimNode_BlendListByEnum extends FAnimNode_BlendListBase {

}
declare const FAnimNode_BlendListByEnum: FAnimNode_BlendListByEnum;

declare interface FAnimNode_BlendListByInt extends FAnimNode_BlendListBase {

}
declare const FAnimNode_BlendListByInt: FAnimNode_BlendListByInt;

declare interface FAnimNode_BlendSpaceEvaluator extends FAnimNode_BlendSpacePlayer {
    NormalizedTime: number;
    bTeleportToNormalizedTime: boolean;
}
declare const FAnimNode_BlendSpaceEvaluator: FAnimNode_BlendSpaceEvaluator;

declare interface FAnimNode_BlendSpaceGraph extends FAnimNode_BlendSpaceGraphBase {

}
declare const FAnimNode_BlendSpaceGraph: FAnimNode_BlendSpaceGraph;

declare interface FAnimNode_BlendSpaceGraphBase extends FAnimNode_Base {
    X: number;
    Y: number;
    GroupName: FName;
    GroupRole: EAnimGroupRole;
    BlendSpace: UBlendSpace;
    SamplePoseLinks: TArray<FPoseLink>;
}
declare const FAnimNode_BlendSpaceGraphBase: FAnimNode_BlendSpaceGraphBase;

declare interface FAnimNode_BlendSpacePlayer extends FAnimNode_BlendSpacePlayerBase {
    BlendSpace: UBlendSpace;
}
declare const FAnimNode_BlendSpacePlayer: FAnimNode_BlendSpacePlayer;

declare interface FAnimNode_BlendSpacePlayerBase extends FAnimNode_AssetPlayerBase {
    PreviousBlendSpace: UBlendSpace;
}
declare const FAnimNode_BlendSpacePlayerBase: FAnimNode_BlendSpacePlayerBase;

declare interface FAnimNode_BlendSpacePlayer_Standalone extends FAnimNode_BlendSpacePlayerBase {
    GroupName: FName;
    GroupRole: EAnimGroupRole;
    bOverridePositionWhenJoiningSyncGroupAsLeader: boolean;
    Method: EAnimSyncMethod;
    bIgnoreForRelevancyTest: boolean;
    X: number;
    Y: number;
    PlayRate: number;
    bLoop: boolean;
    bResetPlayTimeWhenBlendSpaceChanges: boolean;
    StartPosition: number;
    BlendSpace: UBlendSpace;
}
declare const FAnimNode_BlendSpacePlayer_Standalone: FAnimNode_BlendSpacePlayer_Standalone;

declare interface FAnimNode_BlendSpaceSampleResult extends FAnimNode_Root {

}
declare const FAnimNode_BlendSpaceSampleResult: FAnimNode_BlendSpaceSampleResult;

declare interface FAnimNode_BoneDrivenController extends FAnimNode_SkeletalControlBase {
    SourceBone: FBoneReference;
    DrivingCurve: UCurveFloat;
    Multiplier: number;
    RangeMin: number;
    RangeMax: number;
    RemappedMin: number;
    RemappedMax: number;
    ParameterName: FName;
    TargetBone: FBoneReference;
    DestinationMode: EDrivenDestinationMode;
    ModificationMode: EDrivenBoneModificationMode;
    SourceComponent: EComponentType;
    bUseRange: boolean;
    bAffectTargetTranslationX: boolean;
    bAffectTargetTranslationY: boolean;
    bAffectTargetTranslationZ: boolean;
    bAffectTargetRotationX: boolean;
    bAffectTargetRotationY: boolean;
    bAffectTargetRotationZ: boolean;
    bAffectTargetScaleX: boolean;
    bAffectTargetScaleY: boolean;
    bAffectTargetScaleZ: boolean;
}
declare const FAnimNode_BoneDrivenController: FAnimNode_BoneDrivenController;

declare interface FAnimNode_CCDIK extends FAnimNode_SkeletalControlBase {
    EffectorLocation: FVector;
    EffectorLocationSpace: EBoneControlSpace;
    EffectorTarget: FBoneSocketTarget;
    TipBone: FBoneReference;
    RootBone: FBoneReference;
    Precision: number;
    MaxIterations: number;
    bStartFromTail: boolean;
    bEnableRotationLimit: boolean;
    RotationLimitPerJoints: TArray<number>;
}
declare const FAnimNode_CCDIK: FAnimNode_CCDIK;

declare interface FAnimNode_CallFunction extends FAnimNode_Base {
    Source: FPoseLink;
    CallSite: EAnimFunctionCallSite;
}
declare const FAnimNode_CallFunction: FAnimNode_CallFunction;

declare interface FAnimNode_Constraint extends FAnimNode_SkeletalControlBase {
    BoneToModify: FBoneReference;
    ConstraintSetup: TArray<FConstraint>;
    ConstraintWeights: TArray<number>;
}
declare const FAnimNode_Constraint: FAnimNode_Constraint;

declare interface FAnimNode_CopyBone extends FAnimNode_SkeletalControlBase {
    SourceBone: FBoneReference;
    TargetBone: FBoneReference;
    bCopyTranslation: boolean;
    bCopyRotation: boolean;
    bCopyScale: boolean;
    ControlSpace: EBoneControlSpace;
}
declare const FAnimNode_CopyBone: FAnimNode_CopyBone;

declare interface FAnimNode_CopyBoneDelta extends FAnimNode_SkeletalControlBase {
    SourceBone: FBoneReference;
    TargetBone: FBoneReference;
    bCopyTranslation: boolean;
    bCopyRotation: boolean;
    bCopyScale: boolean;
    CopyMode: CopyBoneDeltaMode;
    TranslationMultiplier: number;
    RotationMultiplier: number;
    ScaleMultiplier: number;
}
declare const FAnimNode_CopyBoneDelta: FAnimNode_CopyBoneDelta;

declare interface FAnimNode_CopyPoseFromMesh extends FAnimNode_Base {
    SourceMeshComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    bUseAttachedParent: boolean;
    bCopyCurves: boolean;
    bCopyCustomAttributes: boolean;
    bUseMeshPose: boolean;
    RootBoneToCopy: FName;
}
declare const FAnimNode_CopyPoseFromMesh: FAnimNode_CopyPoseFromMesh;

declare interface FAnimNode_CurveSource extends FAnimNode_Base {
    SourcePose: FPoseLink;
    SourceBinding: FName;
    alpha: number;
    CurveSource: TScriptInterface<ICurveSourceInterface>;
}
declare const FAnimNode_CurveSource: FAnimNode_CurveSource;

declare interface FAnimNode_Fabrik extends FAnimNode_SkeletalControlBase {
    EffectorTransform: FTransform;
    EffectorTarget: FBoneSocketTarget;
    TipBone: FBoneReference;
    RootBone: FBoneReference;
    Precision: number;
    MaxIterations: number;
    EffectorTransformSpace: EBoneControlSpace;
    EffectorRotationSource: EBoneRotationSource;
}
declare const FAnimNode_Fabrik: FAnimNode_Fabrik;

declare interface FAnimNode_HandIKRetargeting extends FAnimNode_SkeletalControlBase {
    RightHandFK: FBoneReference;
    LeftHandFK: FBoneReference;
    RightHandIK: FBoneReference;
    LeftHandIK: FBoneReference;
    IKBonesToMove: TArray<FBoneReference>;
    PerAxisAlpha: FVector;
    HandFKWeight: number;
}
declare const FAnimNode_HandIKRetargeting: FAnimNode_HandIKRetargeting;

declare interface FAnimNode_LayeredBoneBlend extends FAnimNode_Base {
    BasePose: FPoseLink;
    BlendPoses: TArray<FPoseLink>;
    BlendMode: ELayeredBoneBlendMode;
    BlendMasks: TArray<UBlendProfile>;
    LayerSetup: TArray<FInputBlendPose>;
    BlendWeights: TArray<number>;
    PerBoneBlendWeights: TArray<FPerBoneBlendWeight>;
    SkeletonGuid: FGuid;
    VirtualBoneGuid: FGuid;
    LODThreshold: number;
    bMeshSpaceRotationBlend: boolean;
    bRootSpaceRotationBlend: boolean;
    bMeshSpaceScaleBlend: boolean;
    CurveBlendOption: ECurveBlendOption;
    bBlendRootMotionBasedOnRootBone: boolean;
}
declare const FAnimNode_LayeredBoneBlend: FAnimNode_LayeredBoneBlend;

declare interface FAnimNode_LegIK extends FAnimNode_SkeletalControlBase {
    ReachPrecision: number;
    MaxIterations: number;
    SoftPercentLength: number;
    SoftAlpha: number;
    LegsDefinition: TArray<FAnimLegIKDefinition>;
}
declare const FAnimNode_LegIK: FAnimNode_LegIK;

declare interface FAnimNode_LookAt extends FAnimNode_SkeletalControlBase {
    BoneToModify: FBoneReference;
    LookAtTarget: FBoneSocketTarget;
    LookAtLocation: FVector;
    LookAt_Axis: FAxis;
    bUseLookUpAxis: boolean;
    InterpolationType: EInterpolationBlend;
    LookUp_Axis: FAxis;
    LookAtClamp: number;
    InterpolationTime: number;
    InterpolationTriggerThreashold: number;
}
declare const FAnimNode_LookAt: FAnimNode_LookAt;

declare interface FAnimNode_MakeDynamicAdditive extends FAnimNode_Base {
    base: FPoseLink;
    Additive: FPoseLink;
    bMeshSpaceAdditive: boolean;
}
declare const FAnimNode_MakeDynamicAdditive: FAnimNode_MakeDynamicAdditive;

declare interface FAnimNode_MeshSpaceRefPose extends FAnimNode_Base {

}
declare const FAnimNode_MeshSpaceRefPose: FAnimNode_MeshSpaceRefPose;

declare interface FAnimNode_Mirror extends FAnimNode_MirrorBase {

}
declare const FAnimNode_Mirror: FAnimNode_Mirror;

declare interface FAnimNode_MirrorBase extends FAnimNode_Base {
    Source: FPoseLink;
}
declare const FAnimNode_MirrorBase: FAnimNode_MirrorBase;

declare interface FAnimNode_Mirror_Standalone extends FAnimNode_MirrorBase {
    bMirror: boolean;
    MirrorDataTable: UMirrorDataTable;
    BlendTime: number;
    bResetChild: boolean;
    bBoneMirroring: boolean;
    bCurveMirroring: boolean;
    bAttributeMirroring: boolean;
}
declare const FAnimNode_Mirror_Standalone: FAnimNode_Mirror_Standalone;

declare interface FAnimNode_ModifyBone extends FAnimNode_SkeletalControlBase {
    BoneToModify: FBoneReference;
    Translation: FVector;
    Rotation: FRotator;
    Scale: FVector;
    TranslationMode: EBoneModificationMode;
    RotationMode: EBoneModificationMode;
    ScaleMode: EBoneModificationMode;
    TranslationSpace: EBoneControlSpace;
    RotationSpace: EBoneControlSpace;
    ScaleSpace: EBoneControlSpace;
}
declare const FAnimNode_ModifyBone: FAnimNode_ModifyBone;

declare interface FAnimNode_ModifyCurve extends FAnimNode_Base {
    SourcePose: FPoseLink;
    CurveMap: Record<FName, number>;
    CurveValues: TArray<number>;
    CurveNames: TArray<FName>;
    alpha: number;
    ApplyMode: EModifyCurveApplyMode;
}
declare const FAnimNode_ModifyCurve: FAnimNode_ModifyCurve;

declare interface FAnimNode_MultiWayBlend extends FAnimNode_Base {
    Poses: TArray<FPoseLink>;
    DesiredAlphas: TArray<number>;
    AlphaScaleBias: FInputScaleBias;
    bAdditiveNode: boolean;
    bNormalizeAlpha: boolean;
}
declare const FAnimNode_MultiWayBlend: FAnimNode_MultiWayBlend;

declare interface FAnimNode_ObserveBone extends FAnimNode_SkeletalControlBase {
    BoneToObserve: FBoneReference;
    DisplaySpace: EBoneControlSpace;
    bRelativeToRefPose: boolean;
    Translation: FVector;
    Rotation: FRotator;
    Scale: FVector;
}
declare const FAnimNode_ObserveBone: FAnimNode_ObserveBone;

declare interface FAnimNode_PoseBlendNode extends FAnimNode_PoseHandler {
    SourcePose: FPoseLink;
    BlendOption: EAlphaBlendOption;
    CustomCurve: UCurveFloat;
}
declare const FAnimNode_PoseBlendNode: FAnimNode_PoseBlendNode;

declare interface FAnimNode_PoseByName extends FAnimNode_PoseHandler {
    PoseName: FName;
    PoseWeight: number;
}
declare const FAnimNode_PoseByName: FAnimNode_PoseByName;

declare interface FAnimNode_PoseDriver extends FAnimNode_PoseHandler {
    SourcePose: FPoseLink;
    SourceBones: TArray<FBoneReference>;
    EvalSpaceBone: FBoneReference;
    bEvalFromRefPose: boolean;
    OnlyDriveBones: TArray<FBoneReference>;
    PoseTargets: TArray<FPoseDriverTarget>;
    RBFParams: FRBFParams;
    DriveSource: EPoseDriverSource;
    DriveOutput: EPoseDriverOutput;
    LODThreshold: number;
}
declare const FAnimNode_PoseDriver: FAnimNode_PoseDriver;

declare interface FAnimNode_PoseHandler extends FAnimNode_AssetPlayerBase {
    PoseAsset: UPoseAsset;
}
declare const FAnimNode_PoseHandler: FAnimNode_PoseHandler;

declare interface FAnimNode_PoseSnapshot extends FAnimNode_Base {
    SnapshotName: FName;
    Snapshot: FPoseSnapshot;
    Mode: ESnapshotSourceMode;
}
declare const FAnimNode_PoseSnapshot: FAnimNode_PoseSnapshot;

declare interface FAnimNode_RandomPlayer extends FAnimNode_AssetPlayerRelevancyBase {
    Entries: TArray<FRandomPlayerSequenceEntry>;
    BlendWeight: number;
    bShuffleMode: boolean;
}
declare const FAnimNode_RandomPlayer: FAnimNode_RandomPlayer;

declare interface FAnimNode_RefPose extends FAnimNode_Base {

}
declare const FAnimNode_RefPose: FAnimNode_RefPose;

declare interface FAnimNode_ResetRoot extends FAnimNode_SkeletalControlBase {

}
declare const FAnimNode_ResetRoot: FAnimNode_ResetRoot;

declare interface FAnimNode_RigidBody extends FAnimNode_SkeletalControlBase {
    OverridePhysicsAsset: UPhysicsAsset;
    bDefaultToSkeletalMeshPhysicsAsset: boolean;
    bUseLocalLODThresholdOnly: boolean;
    OverrideWorldGravity: FVector;
    ExternalForce: FVector;
    ComponentLinearAccScale: FVector;
    ComponentLinearVelScale: FVector;
    ComponentAppliedLinearAccClamp: FVector;
    SimSpaceSettings: FSimSpaceSettings;
    CachedBoundsScale: number;
    BaseBoneRef: FBoneReference;
    OverlapChannel: ECollisionChannel;
    SimulationSpace: ESimulationSpace;
    bForceDisableCollisionBetweenConstraintBodies: boolean;
    bUseExternalClothCollision: boolean;
    bEnableWorldGeometry: boolean;
    bOverrideWorldGravity: boolean;
    bTransferBoneVelocities: boolean;
    bFreezeIncomingPoseOnStart: boolean;
    bClampLinearTranslationLimitToRefPose: boolean;
    WorldSpaceMinimumScale: number;
    EvaluationResetTime: number;
    SimulationTiming: ESimulationTiming;
}
declare const FAnimNode_RigidBody: FAnimNode_RigidBody;

declare interface FAnimNode_RotateRootBone extends FAnimNode_Base {
    BasePose: FPoseLink;
    pitch: number;
    Yaw: number;
    PitchScaleBiasClamp: FInputScaleBiasClamp;
    YawScaleBiasClamp: FInputScaleBiasClamp;
    MeshToComponent: FRotator;
    bRotateRootMotionAttribute: boolean;
}
declare const FAnimNode_RotateRootBone: FAnimNode_RotateRootBone;

declare interface FAnimNode_RotationMultiplier extends FAnimNode_SkeletalControlBase {
    TargetBone: FBoneReference;
    SourceBone: FBoneReference;
    Multiplier: number;
    RotationAxisToRefer: EBoneAxis;
    bIsAdditive: boolean;
}
declare const FAnimNode_RotationMultiplier: FAnimNode_RotationMultiplier;

declare interface FAnimNode_RotationOffsetBlendSpace extends FAnimNode_BlendSpacePlayer {
    BasePose: FPoseLink;
    LODThreshold: number;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
}
declare const FAnimNode_RotationOffsetBlendSpace: FAnimNode_RotationOffsetBlendSpace;

declare interface FAnimNode_RotationOffsetBlendSpaceGraph extends FAnimNode_BlendSpaceGraphBase {
    BasePose: FPoseLink;
    LODThreshold: number;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
}
declare const FAnimNode_RotationOffsetBlendSpaceGraph: FAnimNode_RotationOffsetBlendSpaceGraph;

declare interface FAnimNode_ScaleChainLength extends FAnimNode_Base {
    InputPose: FPoseLink;
    DefaultChainLength: number;
    ChainStartBone: FBoneReference;
    ChainEndBone: FBoneReference;
    TargetLocation: FVector;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    ChainInitialLength: EScaleChainInitialLength;
}
declare const FAnimNode_ScaleChainLength: FAnimNode_ScaleChainLength;

declare interface FAnimNode_SequenceEvaluator extends FAnimNode_SequenceEvaluatorBase {

}
declare const FAnimNode_SequenceEvaluator: FAnimNode_SequenceEvaluator;

declare interface FAnimNode_SequenceEvaluatorBase extends FAnimNode_AssetPlayerBase {

}
declare const FAnimNode_SequenceEvaluatorBase: FAnimNode_SequenceEvaluatorBase;

declare interface FAnimNode_SequenceEvaluator_Standalone extends FAnimNode_SequenceEvaluatorBase {
    GroupName: FName;
    GroupRole: EAnimGroupRole;
    Method: EAnimSyncMethod;
    bIgnoreForRelevancyTest: boolean;
    Sequence: UAnimSequenceBase;
    ExplicitTime: number;
    bUseExplicitFrame: boolean;
    ExplicitFrame: number;
    bShouldLoop: boolean;
    bTeleportToExplicitTime: boolean;
    ReinitializationBehavior: ESequenceEvalReinit;
    StartPosition: number;
}
declare const FAnimNode_SequenceEvaluator_Standalone: FAnimNode_SequenceEvaluator_Standalone;

declare interface FAnimNode_SkeletalControlBase extends FAnimNode_Base {
    ComponentPose: FComponentSpacePoseLink;
    LODThreshold: number;
    ActualAlpha: number;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
}
declare const FAnimNode_SkeletalControlBase: FAnimNode_SkeletalControlBase;

declare interface FAnimNode_Slot extends FAnimNode_Base {
    Source: FPoseLink;
    slotName: FName;
    bAlwaysUpdateSourcePose: boolean;
}
declare const FAnimNode_Slot: FAnimNode_Slot;

declare interface FAnimNode_SplineIK extends FAnimNode_SkeletalControlBase {
    StartBone: FBoneReference;
    EndBone: FBoneReference;
    BoneAxis: ESplineBoneAxis;
    bAutoCalculateSpline: boolean;
    PointCount: number;
    ControlPoints: TArray<FTransform>;
    Roll: number;
    TwistStart: number;
    TwistEnd: number;
    TwistBlend: FAlphaBlend;
    Stretch: number;
    Offset: number;
}
declare const FAnimNode_SplineIK: FAnimNode_SplineIK;

declare interface FAnimNode_SpringBone extends FAnimNode_SkeletalControlBase {
    SpringBone: FBoneReference;
    MaxDisplacement: number;
    SpringStiffness: number;
    SpringDamping: number;
    ErrorResetThresh: number;
    bLimitDisplacement: boolean;
    bTranslateX: boolean;
    bTranslateY: boolean;
    bTranslateZ: boolean;
    bRotateX: boolean;
    bRotateY: boolean;
    bRotateZ: boolean;
}
declare const FAnimNode_SpringBone: FAnimNode_SpringBone;

declare interface FAnimNode_Sync extends FAnimNode_Base {
    Source: FPoseLink;
    GroupName: FName;
    GroupRole: EAnimGroupRole;
}
declare const FAnimNode_Sync: FAnimNode_Sync;

declare interface FAnimNode_Trail extends FAnimNode_SkeletalControlBase {
    TrailBone: FBoneReference;
    ChainLength: number;
    ChainBoneAxis: EAxis;
    bInvertChainBoneAxis: boolean;
    bLimitStretch: boolean;
    bLimitRotation: boolean;
    bUsePlanarLimit: boolean;
    bActorSpaceFakeVel: boolean;
    bReorientParentToChild: boolean;
    MaxDeltaTime: number;
    RelaxationSpeedScale: number;
    TrailRelaxationSpeed: FRuntimeFloatCurve;
    RelaxationSpeedScaleInputProcessor: FInputScaleBiasClamp;
    RotationLimits: TArray<FRotationLimit>;
    RotationOffsets: TArray<FVector>;
    PlanarLimits: TArray<FAnimPhysPlanarLimit>;
    StretchLimit: number;
    FakeVelocity: FVector;
    BaseJoint: FBoneReference;
    LastBoneRotationAnimAlphaBlend: number;
}
declare const FAnimNode_Trail: FAnimNode_Trail;

declare interface FAnimNode_TwistCorrectiveNode extends FAnimNode_SkeletalControlBase {
    BaseFrame: FReferenceBoneFrame;
    TwistFrame: FReferenceBoneFrame;
    TwistPlaneNormalAxis: FAxis;
    RangeMax: number;
    RemappedMin: number;
    RemappedMax: number;
    CurveName: FName;
}
declare const FAnimNode_TwistCorrectiveNode: FAnimNode_TwistCorrectiveNode;

declare interface FAnimNode_TwoBoneIK extends FAnimNode_SkeletalControlBase {
    IKBone: FBoneReference;
    StartStretchRatio: number;
    MaxStretchScale: number;
    EffectorLocation: FVector;
    EffectorTarget: FBoneSocketTarget;
    JointTargetLocation: FVector;
    JointTarget: FBoneSocketTarget;
    TwistAxis: FAxis;
    EffectorLocationSpace: EBoneControlSpace;
    JointTargetLocationSpace: EBoneControlSpace;
    bAllowStretching: boolean;
    bTakeRotationFromEffectorSpace: boolean;
    bMaintainEffectorRelRot: boolean;
    bAllowTwist: boolean;
}
declare const FAnimNode_TwoBoneIK: FAnimNode_TwoBoneIK;

declare interface FAnimNode_TwoWayBlend extends FAnimNode_Base {
    A: FPoseLink;
    B: FPoseLink;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    bResetChildOnActivation: boolean;
    bAlwaysUpdateChildren: boolean;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
}
declare const FAnimNode_TwoWayBlend: FAnimNode_TwoWayBlend;

declare interface FAnimPhysBodyDefinition {
    BoundBone: FBoneReference;
    BoxExtents: FVector;
    LocalJointOffset: FVector;
    ConstraintSetup: FAnimPhysConstraintSetup;
    CollisionType: AnimPhysCollisionType;
    SphereCollisionRadius: number;
}
declare const FAnimPhysBodyDefinition: FAnimPhysBodyDefinition;

declare interface FAnimPhysConstraintSetup {
    LinearXLimitType: AnimPhysLinearConstraintType;
    LinearYLimitType: AnimPhysLinearConstraintType;
    LinearZLimitType: AnimPhysLinearConstraintType;
    LinearAxesMin: FVector;
    LinearAxesMax: FVector;
    AngularConstraintType: AnimPhysAngularConstraintType;
    TwistAxis: AnimPhysTwistAxis;
    AngularTargetAxis: AnimPhysTwistAxis;
    ConeAngle: number;
    AngularLimitsMin: FVector;
    AngularLimitsMax: FVector;
    AngularTarget: FVector;
}
declare const FAnimPhysConstraintSetup: FAnimPhysConstraintSetup;

declare interface FAnimPhysPlanarLimit {
    DrivingBone: FBoneReference;
    PlaneTransform: FTransform;
}
declare const FAnimPhysPlanarLimit: FAnimPhysPlanarLimit;

declare interface FAnimPhysSphericalLimit {
    DrivingBone: FBoneReference;
    SphereLocalOffset: FVector;
    LimitRadius: number;
    LimitType: ESphericalLimitType;
}
declare const FAnimPhysSphericalLimit: FAnimPhysSphericalLimit;

declare interface FAnimSequencerInstanceProxy extends FAnimInstanceProxy {

}
declare const FAnimSequencerInstanceProxy: FAnimSequencerInstanceProxy;

declare interface FAnimationStateMachineReference extends FAnimNodeReference {

}
declare const FAnimationStateMachineReference: FAnimationStateMachineReference;

declare interface FAnimationStateResultReference extends FAnimNodeReference {

}
declare const FAnimationStateResultReference: FAnimationStateResultReference;

declare interface FBlendBoneByChannelEntry {
    SourceBone: FBoneReference;
    TargetBone: FBoneReference;
    bBlendTranslation: boolean;
    bBlendRotation: boolean;
    bBlendScale: boolean;
}
declare const FBlendBoneByChannelEntry: FBlendBoneByChannelEntry;

declare interface FBlendListBaseReference extends FAnimNodeReference {

}
declare const FBlendListBaseReference: FBlendListBaseReference;

declare interface FBlendSpacePlayerReference extends FAnimNodeReference {

}
declare const FBlendSpacePlayerReference: FBlendSpacePlayerReference;

declare interface FBlendSpaceReference extends FAnimNodeReference {

}
declare const FBlendSpaceReference: FBlendSpaceReference;

declare interface FConstraint {
    TargetBone: FBoneReference;
    OffsetOption: EConstraintOffsetOption;
    TransformType: ETransformConstraintType;
    PerAxis: FFilterOptionPerAxis;
}
declare const FConstraint: FConstraint;

declare interface FIKChain {

}
declare const FIKChain: FIKChain;

declare interface FIKChainLink {

}
declare const FIKChainLink: FIKChainLink;

declare interface FIKFootPelvisPullDownSolver {
    PelvisAdjustmentInterp: FVectorRK4SpringInterpolator;
    PelvisAdjustmentInterpAlpha: number;
    PelvisAdjustmentMaxDistance: number;
    PelvisAdjustmentErrorTolerance: number;
    PelvisAdjustmentMaxIter: number;
}
declare const FIKFootPelvisPullDownSolver: FIKFootPelvisPullDownSolver;

declare interface FLayeredBoneBlendReference extends FAnimNodeReference {

}
declare const FLayeredBoneBlendReference: FLayeredBoneBlendReference;

declare interface FLinkedAnimGraphReference extends FAnimNodeReference {

}
declare const FLinkedAnimGraphReference: FLinkedAnimGraphReference;

declare interface FMirrorAnimNodeReference extends FAnimNodeReference {

}
declare const FMirrorAnimNodeReference: FMirrorAnimNodeReference;

declare interface FModifyCurveAnimNodeReference extends FAnimNodeReference {

}
declare const FModifyCurveAnimNodeReference: FModifyCurveAnimNodeReference;

declare interface FPoseDriverTarget {
    BoneTransforms: TArray<FPoseDriverTransform>;
    TargetRotation: FRotator;
    TargetScale: number;
    DistanceMethod: ERBFDistanceMethod;
    FunctionType: ERBFFunctionType;
    bApplyCustomCurve: boolean;
    CustomCurve: FRichCurve;
    DrivenName: FName;
    bIsHidden: boolean;
}
declare const FPoseDriverTarget: FPoseDriverTarget;

declare interface FPoseDriverTransform {
    TargetTranslation: FVector;
    TargetRotation: FRotator;
}
declare const FPoseDriverTransform: FPoseDriverTransform;

declare interface FPositionHistory {
    Positions: TArray<FVector>;
    Range: number;
}
declare const FPositionHistory: FPositionHistory;

declare interface FRBFEntry {
    Values: TArray<number>;
}
declare const FRBFEntry: FRBFEntry;

declare interface FRBFParams {
    TargetDimensions: number;
    SolverType: ERBFSolverType;
    Radius: number;
    bAutomaticRadius: boolean;
    Function: ERBFFunctionType;
    DistanceMethod: ERBFDistanceMethod;
    TwistAxis: EBoneAxis;
    WeightThreshold: number;
    NormalizeMethod: ERBFNormalizeMethod;
    MedianReference: FVector;
    MedianMin: number;
    MedianMax: number;
}
declare const FRBFParams: FRBFParams;

declare interface FRBFTarget extends FRBFEntry {
    ScaleFactor: number;
    bApplyCustomCurve: boolean;
    CustomCurve: FRichCurve;
    DistanceMethod: ERBFDistanceMethod;
    FunctionType: ERBFFunctionType;
}
declare const FRBFTarget: FRBFTarget;

declare interface FRandomPlayerSequenceEntry {
    Sequence: UAnimSequenceBase;
    ChanceToPlay: number;
    MinLoopCount: number;
    MaxLoopCount: number;
    MinPlayRate: number;
    MaxPlayRate: number;
    BlendIn: FAlphaBlend;
}
declare const FRandomPlayerSequenceEntry: FRandomPlayerSequenceEntry;

declare interface FReferenceBoneFrame {
    bone: FBoneReference;
    Axis: FAxis;
}
declare const FReferenceBoneFrame: FReferenceBoneFrame;

declare interface FRigidBodyAnimNodeReference extends FAnimNodeReference {

}
declare const FRigidBodyAnimNodeReference: FRigidBodyAnimNodeReference;

declare interface FRotationLimit {
    LimitMin: FVector;
    LimitMax: FVector;
}
declare const FRotationLimit: FRotationLimit;

declare interface FRotationRetargetingInfo {
    bEnabled: boolean;
    Source: FTransform;
    Target: FTransform;
    RotationComponent: ERotationComponent;
    TwistAxis: FVector;
    bUseAbsoluteAngle: boolean;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    EasingType: EEasingFuncType;
    CustomCurve: FRuntimeFloatCurve;
    bFlipEasing: boolean;
    EasingWeight: number;
    bClamp: boolean;
}
declare const FRotationRetargetingInfo: FRotationRetargetingInfo;

declare interface FSequenceEvaluatorReference extends FAnimNodeReference {

}
declare const FSequenceEvaluatorReference: FSequenceEvaluatorReference;

declare interface FSequencePlayerReference extends FAnimNodeReference {

}
declare const FSequencePlayerReference: FSequencePlayerReference;

declare interface FSimSpaceSettings {
    WorldAlpha: number;
    VelocityScaleZ: number;
    DampingAlpha: number;
    MaxLinearVelocity: number;
    MaxAngularVelocity: number;
    MaxLinearAcceleration: number;
    MaxAngularAcceleration: number;
    ExternalLinearDragV: FVector;
    ExternalLinearVelocity: FVector;
    ExternalAngularVelocity: FVector;
}
declare const FSimSpaceSettings: FSimSpaceSettings;

declare interface FSkeletalControlReference extends FAnimNodeReference {

}
declare const FSkeletalControlReference: FSkeletalControlReference;

declare interface FSplineIKCachedBoneData {
    bone: FBoneReference;
    RefSkeletonIndex: number;
}
declare const FSplineIKCachedBoneData: FSplineIKCachedBoneData;

declare interface FWarpingVectorValue {
    Mode: EWarpingVectorMode;
    Value: FVector;
}
declare const FWarpingVectorValue: FWarpingVectorValue;

declare interface ISequencerAnimationOverride extends IInterface {
    GetSequencerAnimSlotNames(): TArray<FName>;
    AllowsCinematicOverride(): boolean;
}
declare const ISequencerAnimationOverride: ISequencerAnimationOverride;

declare interface ISequencerAnimationSupport extends IInterface {

}
declare const ISequencerAnimationSupport: ISequencerAnimationSupport;

declare interface UAnimExecutionContextLibrary extends UBlueprintFunctionLibrary {
    IsActive(Context: FAnimExecutionContext): boolean;
    GetDeltaTime(Context: FAnimUpdateContext): number;
    GetCurrentWeight(Context: FAnimUpdateContext): number;
    GetAnimNodeReference(instance: UAnimInstance, Index: number): FAnimNodeReference;
    GetAnimInstance(Context: FAnimExecutionContext): UAnimInstance;
    ConvertToUpdateContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimUpdateContext;
    ConvertToPoseContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimPoseContext;
    ConvertToInitializationContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimInitializationContext;
    ConvertToComponentSpacePoseContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimComponentSpacePoseContext;
}
declare const UAnimExecutionContextLibrary: UAnimExecutionContextLibrary;

declare interface UAnimNodeRigidBodyLibrary extends UBlueprintFunctionLibrary {
    SetOverridePhysicsAsset(Node: FRigidBodyAnimNodeReference, PhysicsAsset: UPhysicsAsset): FRigidBodyAnimNodeReference;
    ConvertToRigidBodyAnimNodePure(Node: FAnimNodeReference, RigidBodyAnimNode: FRigidBodyAnimNodeReference, Result: boolean): void;
    ConvertToRigidBodyAnimNode(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FRigidBodyAnimNodeReference;
}
declare const UAnimNodeRigidBodyLibrary: UAnimNodeRigidBodyLibrary;

declare interface UAnimNotify_PlayMontageNotify extends UAnimNotify {
    NotifyName: FName;
}
declare const UAnimNotify_PlayMontageNotify: UAnimNotify_PlayMontageNotify;

declare interface UAnimNotify_PlayMontageNotifyWindow extends UAnimNotifyState {
    NotifyName: FName;
}
declare const UAnimNotify_PlayMontageNotifyWindow: UAnimNotify_PlayMontageNotifyWindow;

declare interface UAnimSequencerInstance extends UAnimInstance {

}
declare const UAnimSequencerInstance: UAnimSequencerInstance;

declare interface UAnimationStateMachineLibrary extends UBlueprintFunctionLibrary {
    SetState(UpdateContext: FAnimUpdateContext, Node: FAnimationStateMachineReference, TargetState: FName, duration: number, BlendType: ETransitionLogicType, BlendProfile: UBlendProfile, AlphaBlendOption: EAlphaBlendOption, CustomBlendCurve: UCurveFloat): void;
    IsStateBlendingOut(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): boolean;
    IsStateBlendingIn(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): boolean;
    GetState(UpdateContext: FAnimUpdateContext, Node: FAnimationStateMachineReference): FName;
    GetRelevantAnimTimeRemainingFraction(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): number;
    GetRelevantAnimTimeRemaining(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): number;
    ConvertToAnimationStateResultPure(Node: FAnimNodeReference, AnimationState: FAnimationStateResultReference, Result: boolean): void;
    ConvertToAnimationStateResult(Node: FAnimNodeReference, AnimationState: FAnimationStateResultReference, Result: EAnimNodeReferenceConversionResult): void;
    ConvertToAnimationStateMachinePure(Node: FAnimNodeReference, AnimationState: FAnimationStateMachineReference, Result: boolean): void;
    ConvertToAnimationStateMachine(Node: FAnimNodeReference, AnimationState: FAnimationStateMachineReference, Result: EAnimNodeReferenceConversionResult): void;
}
declare const UAnimationStateMachineLibrary: UAnimationStateMachineLibrary;

declare interface UBlendListBaseLibrary extends UBlueprintFunctionLibrary {
    ResetNode(BlendListBase: FBlendListBaseReference): void;
    ConvertToBlendListBase(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FBlendListBaseReference;
}
declare const UBlendListBaseLibrary: UBlendListBaseLibrary;

declare interface UBlendSpaceLibrary extends UBlueprintFunctionLibrary {
    SnapToPosition(BlendSpace: FBlendSpaceReference, NewPosition: FVector): void;
    GetPosition(BlendSpace: FBlendSpaceReference): FVector;
    GetFilteredPosition(BlendSpace: FBlendSpaceReference): FVector;
    ConvertToBlendSpacePure(Node: FAnimNodeReference, BlendSpace: FBlendSpaceReference, Result: boolean): void;
    ConvertToBlendSpace(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FBlendSpaceReference;
}
declare const UBlendSpaceLibrary: UBlendSpaceLibrary;

declare interface UBlendSpacePlayerLibrary extends UBlueprintFunctionLibrary {
    SnapToPosition(BlendSpacePlayer: FBlendSpacePlayerReference, NewPosition: FVector): void;
    ShouldResetPlayTimeWhenBlendSpaceChanges(BlendSpacePlayer: FBlendSpacePlayerReference): boolean;
    SetResetPlayTimeWhenBlendSpaceChanges(BlendSpacePlayer: FBlendSpacePlayerReference, bReset: boolean): FBlendSpacePlayerReference;
    SetPlayRate(BlendSpacePlayer: FBlendSpacePlayerReference, PlayRate: number): FBlendSpacePlayerReference;
    SetLoop(BlendSpacePlayer: FBlendSpacePlayerReference, bLoop: boolean): FBlendSpacePlayerReference;
    SetBlendSpaceWithInertialBlending(UpdateContext: FAnimUpdateContext, BlendSpacePlayer: FBlendSpacePlayerReference, BlendSpace: UBlendSpace, BlendTime: number): FBlendSpacePlayerReference;
    SetBlendSpace(BlendSpacePlayer: FBlendSpacePlayerReference, BlendSpace: UBlendSpace): FBlendSpacePlayerReference;
    GetStartPosition(BlendSpacePlayer: FBlendSpacePlayerReference): number;
    GetPosition(BlendSpacePlayer: FBlendSpacePlayerReference): FVector;
    GetPlayRate(BlendSpacePlayer: FBlendSpacePlayerReference): number;
    GetLoop(BlendSpacePlayer: FBlendSpacePlayerReference): boolean;
    GetBlendSpace(BlendSpacePlayer: FBlendSpacePlayerReference): UBlendSpace;
    ConvertToBlendSpacePlayerPure(Node: FAnimNodeReference, BlendSpacePlayer: FBlendSpacePlayerReference, Result: boolean): void;
    ConvertToBlendSpacePlayer(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FBlendSpacePlayerReference;
}
declare const UBlendSpacePlayerLibrary: UBlendSpacePlayerLibrary;

declare interface UKismetAnimationLibrary extends UBlueprintFunctionLibrary {
    K2_TwoBoneIK(RootPos: FVector, JointPos: FVector, EndPos: FVector, JointTarget: FVector, Effector: FVector, OutJointPos: FVector, OutEndPos: FVector, bAllowStretching: boolean, StartStretchRatio: number, MaxStretchScale: number): void;
    K2_StartProfilingTimer(): void;
    K2_MakePerlinNoiseVectorAndRemap(X: number, Y: number, Z: number, RangeOutMinX: number, RangeOutMaxX: number, RangeOutMinY: number, RangeOutMaxY: number, RangeOutMinZ: number, RangeOutMaxZ: number): FVector;
    K2_MakePerlinNoiseAndRemap(Value: number, RangeOutMin: number, RangeOutMax: number): number;
    K2_LookAt(CurrentTransform: FTransform, TargetPosition: FVector, LookAtVector: FVector, bUseUpVector: boolean, UpVector: FVector, ClampConeInDegree: number): FTransform;
    K2_EndProfilingTimer(bLog: boolean, LogPrefix: string | FString): number;
    K2_DistanceBetweenTwoSocketsAndMapRange(Component: USkeletalMeshComponent, SocketOrBoneNameA: FName, SocketSpaceA: ERelativeTransformSpace, SocketOrBoneNameB: FName, SocketSpaceB: ERelativeTransformSpace, bRemapRange: boolean, InRangeMin: number, InRangeMax: number, OutRangeMin: number, OutRangeMax: number): number;
    K2_DirectionBetweenSockets(Component: USkeletalMeshComponent, SocketOrBoneNameFrom: FName, SocketOrBoneNameTo: FName): FVector;
    K2_CalculateVelocityFromSockets(DeltaSeconds: number, Component: USkeletalMeshComponent, SocketOrBoneName: FName, ReferenceSocketOrBone: FName, SocketSpace: ERelativeTransformSpace, OffsetInBoneSpace: FVector, History: FPositionHistory, NumberOfSamples: number, VelocityMin: number, VelocityMax: number, EasingType: EEasingFuncType, CustomCurve: FRuntimeFloatCurve): number;
    K2_CalculateVelocityFromPositionHistory(DeltaSeconds: number, position: FVector, History: FPositionHistory, NumberOfSamples: number, VelocityMin: number, VelocityMax: number): number;
    CalculateDirection(Velocity: FVector, BaseRotation: FRotator): number;
}
declare const UKismetAnimationLibrary: UKismetAnimationLibrary;

declare interface ULayeredBoneBlendLibrary extends UBlueprintFunctionLibrary {
    SetBlendMask(UpdateContext: FAnimUpdateContext, LayeredBoneBlend: FLayeredBoneBlendReference, PoseIndex: number, BlendMaskName: FName): FLayeredBoneBlendReference;
    GetNumPoses(LayeredBoneBlend: FLayeredBoneBlendReference): number;
    ConvertToLayeredBoneBlend(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FLayeredBoneBlendReference;
    ConvertToLayeredBlendPerBonePure(Node: FAnimNodeReference, LayeredBoneBlend: FLayeredBoneBlendReference, Result: boolean): void;
}
declare const ULayeredBoneBlendLibrary: ULayeredBoneBlendLibrary;

declare interface ULinkedAnimGraphLibrary extends UBlueprintFunctionLibrary {
    HasLinkedAnimInstance(Node: FLinkedAnimGraphReference): boolean;
    GetLinkedAnimInstance(Node: FLinkedAnimGraphReference): UAnimInstance;
    ConvertToLinkedAnimGraphPure(Node: FAnimNodeReference, LinkedAnimGraph: FLinkedAnimGraphReference, Result: boolean): void;
    ConvertToLinkedAnimGraph(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FLinkedAnimGraphReference;
}
declare const ULinkedAnimGraphLibrary: ULinkedAnimGraphLibrary;

declare interface UMirrorAnimLibrary extends UBlueprintFunctionLibrary {
    SetMirrorTransitionBlendTime(MirrorNode: FMirrorAnimNodeReference, InBlendTime: number): FMirrorAnimNodeReference;
    SetMirror(MirrorNode: FMirrorAnimNodeReference, bInMirror: boolean): FMirrorAnimNodeReference;
    GetMirrorTransitionBlendTime(MirrorNode: FMirrorAnimNodeReference): number;
    GetMirrorDataTable(MirrorNode: FMirrorAnimNodeReference): UMirrorDataTable;
    GetMirror(MirrorNode: FMirrorAnimNodeReference): boolean;
    ConvertToMirrorNodePure(Node: FAnimNodeReference, MirrorNode: FMirrorAnimNodeReference, Result: boolean): void;
    ConvertToMirrorNode(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FMirrorAnimNodeReference;
}
declare const UMirrorAnimLibrary: UMirrorAnimLibrary;

declare interface UModifyCurveAnimLibrary extends UBlueprintFunctionLibrary {
    SetCurveMap(ModifyCurveNode: FModifyCurveAnimNodeReference, InCurveMap: Record<FName, number>): FModifyCurveAnimNodeReference;
    SetApplyMode(ModifyCurveNode: FModifyCurveAnimNodeReference, InMode: EModifyCurveApplyMode): FModifyCurveAnimNodeReference;
    SetAlpha(ModifyCurveNode: FModifyCurveAnimNodeReference, InAlpha: number): FModifyCurveAnimNodeReference;
    GetApplyMode(ModifyCurveNode: FModifyCurveAnimNodeReference): EModifyCurveApplyMode;
    GetAlpha(ModifyCurveNode: FModifyCurveAnimNodeReference): number;
    ConvertToModifyCurveNodePure(Node: FAnimNodeReference, ModifyCurveNode: FModifyCurveAnimNodeReference, Result: boolean): void;
    ConvertToModifyCurveNode(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FModifyCurveAnimNodeReference;
}
declare const UModifyCurveAnimLibrary: UModifyCurveAnimLibrary;

declare interface UPlayMontageCallbackProxy extends UObject {
    OnCompleted: FPlayMontageCallbackProxyOnCompleted;
    OnBlendOut: FPlayMontageCallbackProxyOnBlendOut;
    OnInterrupted: FPlayMontageCallbackProxyOnInterrupted;
    OnNotifyBegin: FPlayMontageCallbackProxyOnNotifyBegin;
    OnNotifyEnd: FPlayMontageCallbackProxyOnNotifyEnd;
    OnNotifyEndReceived(NotifyName: FName, BranchingPointNotifyPayload: FBranchingPointNotifyPayload): void;
    OnNotifyBeginReceived(NotifyName: FName, BranchingPointNotifyPayload: FBranchingPointNotifyPayload): void;
    OnMontageEnded(Montage: UAnimMontage, bInterrupted: boolean): void;
    OnMontageBlendingOut(Montage: UAnimMontage, bInterrupted: boolean): void;
    CreateProxyObjectForPlayMontage(InSkeletalMeshComponent: USkeletalMeshComponent, MontageToPlay: UAnimMontage, PlayRate: number, StartingPosition: number, StartingSection: FName, bShouldStopAllMontages: boolean): UPlayMontageCallbackProxy;
}
declare const UPlayMontageCallbackProxy: UPlayMontageCallbackProxy;

declare interface USequenceEvaluatorLibrary extends UBlueprintFunctionLibrary {
    SetSequenceWithInertialBlending(UpdateContext: FAnimUpdateContext, SequenceEvaluator: FSequenceEvaluatorReference, Sequence: UAnimSequenceBase, BlendTime: number): FSequenceEvaluatorReference;
    SetSequence(SequenceEvaluator: FSequenceEvaluatorReference, Sequence: UAnimSequenceBase): FSequenceEvaluatorReference;
    SetExplicitTime(SequenceEvaluator: FSequenceEvaluatorReference, Time: number): FSequenceEvaluatorReference;
    SetExplicitFrame(SequenceEvaluator: FSequenceEvaluatorReference, Frame: number): FSequenceEvaluatorReference;
    GetSequence(SequenceEvaluator: FSequenceEvaluatorReference): UAnimSequenceBase;
    GetAccumulatedTime(SequenceEvaluator: FSequenceEvaluatorReference): number;
    ConvertToSequenceEvaluatorPure(Node: FAnimNodeReference, SequenceEvaluator: FSequenceEvaluatorReference, Result: boolean): void;
    ConvertToSequenceEvaluator(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FSequenceEvaluatorReference;
    AdvanceTime(UpdateContext: FAnimUpdateContext, SequenceEvaluator: FSequenceEvaluatorReference, PlayRate: number): FSequenceEvaluatorReference;
}
declare const USequenceEvaluatorLibrary: USequenceEvaluatorLibrary;

declare interface USequencePlayerLibrary extends UBlueprintFunctionLibrary {
    SetStartPosition(SequencePlayer: FSequencePlayerReference, StartPosition: number): FSequencePlayerReference;
    SetSequenceWithInertialBlending(UpdateContext: FAnimUpdateContext, SequencePlayer: FSequencePlayerReference, Sequence: UAnimSequenceBase, BlendTime: number): FSequencePlayerReference;
    SetSequence(SequencePlayer: FSequencePlayerReference, Sequence: UAnimSequenceBase): FSequencePlayerReference;
    SetPlayRate(SequencePlayer: FSequencePlayerReference, PlayRate: number): FSequencePlayerReference;
    SetAccumulatedTime(SequencePlayer: FSequencePlayerReference, Time: number): FSequencePlayerReference;
    GetStartPosition(SequencePlayer: FSequencePlayerReference): number;
    GetSequencePure(SequencePlayer: FSequencePlayerReference): UAnimSequenceBase;
    GetSequence(SequencePlayer: FSequencePlayerReference, SequenceBase: UAnimSequenceBase): FSequencePlayerReference;
    GetPlayRate(SequencePlayer: FSequencePlayerReference): number;
    GetLoopAnimation(SequencePlayer: FSequencePlayerReference): boolean;
    GetAccumulatedTime(SequencePlayer: FSequencePlayerReference): number;
    ConvertToSequencePlayerPure(Node: FAnimNodeReference, SequencePlayer: FSequencePlayerReference, Result: boolean): void;
    ConvertToSequencePlayer(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FSequencePlayerReference;
    ComputePlayRateFromDuration(SequencePlayer: FSequencePlayerReference, duration: number): number;
}
declare const USequencePlayerLibrary: USequencePlayerLibrary;

declare interface USkeletalControlLibrary extends UBlueprintFunctionLibrary {
    SetAlpha(SkeletalControl: FSkeletalControlReference, alpha: number): FSkeletalControlReference;
    GetAlpha(SkeletalControl: FSkeletalControlReference): number;
    ConvertToSkeletalControlPure(Node: FAnimNodeReference, SkeletalControl: FSkeletalControlReference, Result: boolean): void;
    ConvertToSkeletalControl(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FSkeletalControlReference;
}
declare const USkeletalControlLibrary: USkeletalControlLibrary;

