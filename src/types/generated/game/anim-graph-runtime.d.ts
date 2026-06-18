declare interface FAngularRangeLimit {
    LimitMin: FVector;
    LimitMax: FVector;
    bone: FBoneReference;
}

declare type FAnimLegIKData = object;

declare interface FAnimLegIKDefinition {
    IKFootBone: FBoneReference;
    FKFootBone: FBoneReference;
    NumBonesInLimb: number;
    MinRotationAngle: number;
    FootBoneForwardAxis: EAxis;
    HingeRotationAxis: EAxis;
    bEnableRotationLimit: boolean;
    bEnableKneeTwistCorrection: boolean;
    TwistOffsetCurveName: string;
}

declare interface FAnimNode_AimOffsetLookAt extends FAnimNode_BlendSpacePlayer {
    BasePose: FPoseLink;
    LODThreshold: number;
    SourceSocketName: string;
    PivotSocketName: string;
    LookAtLocation: FVector;
    SocketAxis: FVector;
    alpha: number;
}

declare interface FAnimNode_AnimDynamics extends FAnimNode_SkeletalControlBase {
    LinearDampingOverride: number;
    AngularDampingOverride: number;
    RelativeSpaceBone: FBoneReference;
    BoundBone: FBoneReference;
    ChainEnd: FBoneReference;
    PhysicsBodyDefinitions: FAnimPhysBodyDefinition[];
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
    SphericalLimits: FAnimPhysSphericalLimit[];
    ExternalForce: FVector;
    PlanarLimits: FAnimPhysPlanarLimit[];
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

declare interface FAnimNode_ApplyAdditive extends FAnimNode_Base {
    base: FPoseLink;
    Additive: FPoseLink;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    LODThreshold: number;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
}

declare interface FAnimNode_ApplyLimits extends FAnimNode_SkeletalControlBase {
    AngularRangeLimits: FAngularRangeLimit[];
    AngularOffsets: FVector[];
}

declare interface FAnimNode_BlendBoneByChannel extends FAnimNode_Base {
    A: FPoseLink;
    B: FPoseLink;
    BoneDefinitions: FBlendBoneByChannelEntry[];
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    TransformsSpace: EBoneControlSpace;
}

declare interface FAnimNode_BlendListBase extends FAnimNode_Base {
    BlendPose: FPoseLink[];
}

declare interface FAnimNode_BlendListByBool extends FAnimNode_BlendListBase {

}

declare interface FAnimNode_BlendListByEnum extends FAnimNode_BlendListBase {

}

declare interface FAnimNode_BlendListByInt extends FAnimNode_BlendListBase {

}

declare interface FAnimNode_BlendSpaceEvaluator extends FAnimNode_BlendSpacePlayer {
    NormalizedTime: number;
    bTeleportToNormalizedTime: boolean;
}

declare interface FAnimNode_BlendSpaceGraph extends FAnimNode_BlendSpaceGraphBase {

}

declare interface FAnimNode_BlendSpaceGraphBase extends FAnimNode_Base {
    X: number;
    Y: number;
    GroupName: string;
    GroupRole: EAnimGroupRole;
    BlendSpace: UBlendSpace;
    SamplePoseLinks: FPoseLink[];
}

declare interface FAnimNode_BlendSpacePlayer extends FAnimNode_BlendSpacePlayerBase {
    BlendSpace: UBlendSpace;
}

declare interface FAnimNode_BlendSpacePlayerBase extends FAnimNode_AssetPlayerBase {
    PreviousBlendSpace: UBlendSpace;
}

declare interface FAnimNode_BlendSpacePlayer_Standalone extends FAnimNode_BlendSpacePlayerBase {
    GroupName: string;
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

declare interface FAnimNode_BlendSpaceSampleResult extends FAnimNode_Root {

}

declare interface FAnimNode_BoneDrivenController extends FAnimNode_SkeletalControlBase {
    SourceBone: FBoneReference;
    DrivingCurve: UCurveFloat;
    Multiplier: number;
    RangeMin: number;
    RangeMax: number;
    RemappedMin: number;
    RemappedMax: number;
    ParameterName: string;
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
    RotationLimitPerJoints: number[];
}

declare interface FAnimNode_CallFunction extends FAnimNode_Base {
    Source: FPoseLink;
    CallSite: EAnimFunctionCallSite;
}

declare interface FAnimNode_Constraint extends FAnimNode_SkeletalControlBase {
    BoneToModify: FBoneReference;
    ConstraintSetup: FConstraint[];
    ConstraintWeights: number[];
}

declare interface FAnimNode_CopyBone extends FAnimNode_SkeletalControlBase {
    SourceBone: FBoneReference;
    TargetBone: FBoneReference;
    bCopyTranslation: boolean;
    bCopyRotation: boolean;
    bCopyScale: boolean;
    ControlSpace: EBoneControlSpace;
}

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

declare interface FAnimNode_CopyPoseFromMesh extends FAnimNode_Base {
    SourceMeshComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    bUseAttachedParent: boolean;
    bCopyCurves: boolean;
    bCopyCustomAttributes: boolean;
    bUseMeshPose: boolean;
    RootBoneToCopy: string;
}

declare interface FAnimNode_CurveSource extends FAnimNode_Base {
    SourcePose: FPoseLink;
    SourceBinding: string;
    alpha: number;
    CurveSource: TScriptInterface<ICurveSourceInterface>;
}

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

declare interface FAnimNode_HandIKRetargeting extends FAnimNode_SkeletalControlBase {
    RightHandFK: FBoneReference;
    LeftHandFK: FBoneReference;
    RightHandIK: FBoneReference;
    LeftHandIK: FBoneReference;
    IKBonesToMove: FBoneReference[];
    PerAxisAlpha: FVector;
    HandFKWeight: number;
}

declare interface FAnimNode_LayeredBoneBlend extends FAnimNode_Base {
    BasePose: FPoseLink;
    BlendPoses: FPoseLink[];
    BlendMode: ELayeredBoneBlendMode;
    BlendMasks: UBlendProfile[];
    LayerSetup: FInputBlendPose[];
    BlendWeights: number[];
    PerBoneBlendWeights: FPerBoneBlendWeight[];
    SkeletonGuid: FGuid;
    VirtualBoneGuid: FGuid;
    LODThreshold: number;
    bMeshSpaceRotationBlend: boolean;
    bRootSpaceRotationBlend: boolean;
    bMeshSpaceScaleBlend: boolean;
    CurveBlendOption: ECurveBlendOption;
    bBlendRootMotionBasedOnRootBone: boolean;
}

declare interface FAnimNode_LegIK extends FAnimNode_SkeletalControlBase {
    ReachPrecision: number;
    MaxIterations: number;
    SoftPercentLength: number;
    SoftAlpha: number;
    LegsDefinition: FAnimLegIKDefinition[];
}

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

declare interface FAnimNode_MakeDynamicAdditive extends FAnimNode_Base {
    base: FPoseLink;
    Additive: FPoseLink;
    bMeshSpaceAdditive: boolean;
}

declare interface FAnimNode_MeshSpaceRefPose extends FAnimNode_Base {

}

declare interface FAnimNode_Mirror extends FAnimNode_MirrorBase {

}

declare interface FAnimNode_MirrorBase extends FAnimNode_Base {
    Source: FPoseLink;
}

declare interface FAnimNode_Mirror_Standalone extends FAnimNode_MirrorBase {
    bMirror: boolean;
    MirrorDataTable: UMirrorDataTable;
    BlendTime: number;
    bResetChild: boolean;
    bBoneMirroring: boolean;
    bCurveMirroring: boolean;
    bAttributeMirroring: boolean;
}

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

declare interface FAnimNode_ModifyCurve extends FAnimNode_Base {
    SourcePose: FPoseLink;
    CurveMap: TMap<string, number>;
    CurveValues: number[];
    CurveNames: string[];
    alpha: number;
    ApplyMode: EModifyCurveApplyMode;
}

declare interface FAnimNode_MultiWayBlend extends FAnimNode_Base {
    Poses: FPoseLink[];
    DesiredAlphas: number[];
    AlphaScaleBias: FInputScaleBias;
    bAdditiveNode: boolean;
    bNormalizeAlpha: boolean;
}

declare interface FAnimNode_ObserveBone extends FAnimNode_SkeletalControlBase {
    BoneToObserve: FBoneReference;
    DisplaySpace: EBoneControlSpace;
    bRelativeToRefPose: boolean;
    Translation: FVector;
    Rotation: FRotator;
    Scale: FVector;
}

declare interface FAnimNode_PoseBlendNode extends FAnimNode_PoseHandler {
    SourcePose: FPoseLink;
    BlendOption: EAlphaBlendOption;
    CustomCurve: UCurveFloat;
}

declare interface FAnimNode_PoseByName extends FAnimNode_PoseHandler {
    PoseName: string;
    PoseWeight: number;
}

declare interface FAnimNode_PoseDriver extends FAnimNode_PoseHandler {
    SourcePose: FPoseLink;
    SourceBones: FBoneReference[];
    EvalSpaceBone: FBoneReference;
    bEvalFromRefPose: boolean;
    OnlyDriveBones: FBoneReference[];
    PoseTargets: FPoseDriverTarget[];
    RBFParams: FRBFParams;
    DriveSource: EPoseDriverSource;
    DriveOutput: EPoseDriverOutput;
    LODThreshold: number;
}

declare interface FAnimNode_PoseHandler extends FAnimNode_AssetPlayerBase {
    PoseAsset: UPoseAsset;
}

declare interface FAnimNode_PoseSnapshot extends FAnimNode_Base {
    SnapshotName: string;
    Snapshot: FPoseSnapshot;
    Mode: ESnapshotSourceMode;
}

declare interface FAnimNode_RandomPlayer extends FAnimNode_AssetPlayerRelevancyBase {
    Entries: FRandomPlayerSequenceEntry[];
    BlendWeight: number;
    bShuffleMode: boolean;
}

declare interface FAnimNode_RefPose extends FAnimNode_Base {

}

declare interface FAnimNode_ResetRoot extends FAnimNode_SkeletalControlBase {

}

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

declare interface FAnimNode_RotateRootBone extends FAnimNode_Base {
    BasePose: FPoseLink;
    pitch: number;
    Yaw: number;
    PitchScaleBiasClamp: FInputScaleBiasClamp;
    YawScaleBiasClamp: FInputScaleBiasClamp;
    MeshToComponent: FRotator;
    bRotateRootMotionAttribute: boolean;
}

declare interface FAnimNode_RotationMultiplier extends FAnimNode_SkeletalControlBase {
    TargetBone: FBoneReference;
    SourceBone: FBoneReference;
    Multiplier: number;
    RotationAxisToRefer: EBoneAxis;
    bIsAdditive: boolean;
}

declare interface FAnimNode_RotationOffsetBlendSpace extends FAnimNode_BlendSpacePlayer {
    BasePose: FPoseLink;
    LODThreshold: number;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
}

declare interface FAnimNode_RotationOffsetBlendSpaceGraph extends FAnimNode_BlendSpaceGraphBase {
    BasePose: FPoseLink;
    LODThreshold: number;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
}

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

declare interface FAnimNode_SequenceEvaluator extends FAnimNode_SequenceEvaluatorBase {

}

declare interface FAnimNode_SequenceEvaluatorBase extends FAnimNode_AssetPlayerBase {

}

declare interface FAnimNode_SequenceEvaluator_Standalone extends FAnimNode_SequenceEvaluatorBase {
    GroupName: string;
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

declare interface FAnimNode_SkeletalControlBase extends FAnimNode_Base {
    ComponentPose: FComponentSpacePoseLink;
    LODThreshold: number;
    ActualAlpha: number;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
}

declare interface FAnimNode_Slot extends FAnimNode_Base {
    Source: FPoseLink;
    slotName: string;
    bAlwaysUpdateSourcePose: boolean;
}

declare interface FAnimNode_SplineIK extends FAnimNode_SkeletalControlBase {
    StartBone: FBoneReference;
    EndBone: FBoneReference;
    BoneAxis: ESplineBoneAxis;
    bAutoCalculateSpline: boolean;
    PointCount: number;
    ControlPoints: FTransform[];
    Roll: number;
    TwistStart: number;
    TwistEnd: number;
    TwistBlend: FAlphaBlend;
    Stretch: number;
    Offset: number;
}

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

declare interface FAnimNode_Sync extends FAnimNode_Base {
    Source: FPoseLink;
    GroupName: string;
    GroupRole: EAnimGroupRole;
}

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
    RotationLimits: FRotationLimit[];
    RotationOffsets: FVector[];
    PlanarLimits: FAnimPhysPlanarLimit[];
    StretchLimit: number;
    FakeVelocity: FVector;
    BaseJoint: FBoneReference;
    LastBoneRotationAnimAlphaBlend: number;
}

declare interface FAnimNode_TwistCorrectiveNode extends FAnimNode_SkeletalControlBase {
    BaseFrame: FReferenceBoneFrame;
    TwistFrame: FReferenceBoneFrame;
    TwistPlaneNormalAxis: FAxis;
    RangeMax: number;
    RemappedMin: number;
    RemappedMax: number;
    CurveName: string;
}

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
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
}

declare interface FAnimPhysBodyDefinition {
    BoundBone: FBoneReference;
    BoxExtents: FVector;
    LocalJointOffset: FVector;
    ConstraintSetup: FAnimPhysConstraintSetup;
    CollisionType: AnimPhysCollisionType;
    SphereCollisionRadius: number;
}

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

declare interface FAnimPhysPlanarLimit {
    DrivingBone: FBoneReference;
    PlaneTransform: FTransform;
}

declare interface FAnimPhysSphericalLimit {
    DrivingBone: FBoneReference;
    SphereLocalOffset: FVector;
    LimitRadius: number;
    LimitType: ESphericalLimitType;
}

declare interface FAnimSequencerInstanceProxy extends FAnimInstanceProxy {

}

declare interface FAnimationStateMachineReference extends FAnimNodeReference {

}

declare interface FAnimationStateResultReference extends FAnimNodeReference {

}

declare interface FBlendBoneByChannelEntry {
    SourceBone: FBoneReference;
    TargetBone: FBoneReference;
    bBlendTranslation: boolean;
    bBlendRotation: boolean;
    bBlendScale: boolean;
}

declare interface FBlendListBaseReference extends FAnimNodeReference {

}

declare interface FBlendSpacePlayerReference extends FAnimNodeReference {

}

declare interface FBlendSpaceReference extends FAnimNodeReference {

}

declare interface FConstraint {
    TargetBone: FBoneReference;
    OffsetOption: EConstraintOffsetOption;
    TransformType: ETransformConstraintType;
    PerAxis: FFilterOptionPerAxis;
}

declare type FIKChain = object;

declare type FIKChainLink = object;

declare interface FIKFootPelvisPullDownSolver {
    PelvisAdjustmentInterp: FVectorRK4SpringInterpolator;
    PelvisAdjustmentInterpAlpha: number;
    PelvisAdjustmentMaxDistance: number;
    PelvisAdjustmentErrorTolerance: number;
    PelvisAdjustmentMaxIter: number;
}

declare interface FLayeredBoneBlendReference extends FAnimNodeReference {

}

declare interface FLinkedAnimGraphReference extends FAnimNodeReference {

}

declare interface FMirrorAnimNodeReference extends FAnimNodeReference {

}

declare interface FModifyCurveAnimNodeReference extends FAnimNodeReference {

}

declare interface FPoseDriverTarget {
    BoneTransforms: FPoseDriverTransform[];
    TargetRotation: FRotator;
    TargetScale: number;
    DistanceMethod: ERBFDistanceMethod;
    FunctionType: ERBFFunctionType;
    bApplyCustomCurve: boolean;
    CustomCurve: FRichCurve;
    DrivenName: string;
    bIsHidden: boolean;
}

declare interface FPoseDriverTransform {
    TargetTranslation: FVector;
    TargetRotation: FRotator;
}

declare interface FPositionHistory {
    Positions: FVector[];
    Range: number;
}

declare interface FRBFEntry {
    Values: number[];
}

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

declare interface FRBFTarget extends FRBFEntry {
    ScaleFactor: number;
    bApplyCustomCurve: boolean;
    CustomCurve: FRichCurve;
    DistanceMethod: ERBFDistanceMethod;
    FunctionType: ERBFFunctionType;
}

declare interface FRandomPlayerSequenceEntry {
    Sequence: UAnimSequenceBase;
    ChanceToPlay: number;
    MinLoopCount: number;
    MaxLoopCount: number;
    MinPlayRate: number;
    MaxPlayRate: number;
    BlendIn: FAlphaBlend;
}

declare interface FReferenceBoneFrame {
    bone: FBoneReference;
    Axis: FAxis;
}

declare interface FRigidBodyAnimNodeReference extends FAnimNodeReference {

}

declare interface FRotationLimit {
    LimitMin: FVector;
    LimitMax: FVector;
}

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

declare interface FSequenceEvaluatorReference extends FAnimNodeReference {

}

declare interface FSequencePlayerReference extends FAnimNodeReference {

}

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

declare interface FSkeletalControlReference extends FAnimNodeReference {

}

declare interface FSplineIKCachedBoneData {
    bone: FBoneReference;
    RefSkeletonIndex: number;
}

declare interface FWarpingVectorValue {
    Mode: EWarpingVectorMode;
    Value: FVector;
}

declare interface ISequencerAnimationOverride extends IInterface {
    readonly __static_ISequencerAnimationOverride: {
        GetSequencerAnimSlotNames(): string[];
        AllowsCinematicOverride(): boolean;
    };
    readonly __staticRegistry: 
        ISequencerAnimationOverride['__static_ISequencerAnimationOverride'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ISequencerAnimationSupport extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAnimExecutionContextLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAnimExecutionContextLibrary: {
        IsActive(Context: FAnimExecutionContext): boolean;
        GetDeltaTime(Context: FAnimUpdateContext): number;
        GetCurrentWeight(Context: FAnimUpdateContext): number;
        GetAnimNodeReference(instance: UAnimInstance, Index: number): FAnimNodeReference;
        GetAnimInstance(Context: FAnimExecutionContext): UAnimInstance;
        ConvertToUpdateContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimUpdateContext;
        ConvertToPoseContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimPoseContext;
        ConvertToInitializationContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimInitializationContext;
        ConvertToComponentSpacePoseContext(Context: FAnimExecutionContext, Result: EAnimExecutionContextConversionResult): FAnimComponentSpacePoseContext;
    };
    readonly __staticRegistry: 
        UAnimExecutionContextLibrary['__static_UAnimExecutionContextLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAnimNodeRigidBodyLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAnimNodeRigidBodyLibrary: {
        SetOverridePhysicsAsset(Node: FRigidBodyAnimNodeReference, PhysicsAsset: UPhysicsAsset): FRigidBodyAnimNodeReference;
        ConvertToRigidBodyAnimNodePure(Node: FAnimNodeReference, RigidBodyAnimNode: FRigidBodyAnimNodeReference, Result: boolean): void;
        ConvertToRigidBodyAnimNode(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FRigidBodyAnimNodeReference;
    };
    readonly __staticRegistry: 
        UAnimNodeRigidBodyLibrary['__static_UAnimNodeRigidBodyLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAnimNotify_PlayMontageNotify extends UAnimNotify {
    readonly __properties_UAnimNotify_PlayMontageNotify: {
        NotifyName: string;
    };
    readonly __staticRegistry: 
        UAnimNotify['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimNotify_PlayMontageNotify['__properties_UAnimNotify_PlayMontageNotify'] &
        UAnimNotify['__propertyRegistry'];
}

declare interface UAnimNotify_PlayMontageNotifyWindow extends UAnimNotifyState {
    readonly __properties_UAnimNotify_PlayMontageNotifyWindow: {
        NotifyName: string;
    };
    readonly __staticRegistry: 
        UAnimNotifyState['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimNotify_PlayMontageNotifyWindow['__properties_UAnimNotify_PlayMontageNotifyWindow'] &
        UAnimNotifyState['__propertyRegistry'];
}

declare interface UAnimSequencerInstance extends UAnimInstance {
    readonly __staticRegistry: 
        UAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimInstance['__propertyRegistry'];
}

declare interface UAnimationStateMachineLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAnimationStateMachineLibrary: {
        SetState(UpdateContext: FAnimUpdateContext, Node: FAnimationStateMachineReference, TargetState: string, duration: number, BlendType: ETransitionLogicType, BlendProfile: UBlendProfile, AlphaBlendOption: EAlphaBlendOption, CustomBlendCurve: UCurveFloat): void;
        IsStateBlendingOut(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): boolean;
        IsStateBlendingIn(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): boolean;
        GetState(UpdateContext: FAnimUpdateContext, Node: FAnimationStateMachineReference): string;
        GetRelevantAnimTimeRemainingFraction(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): number;
        GetRelevantAnimTimeRemaining(UpdateContext: FAnimUpdateContext, Node: FAnimationStateResultReference): number;
        ConvertToAnimationStateResultPure(Node: FAnimNodeReference, AnimationState: FAnimationStateResultReference, Result: boolean): void;
        ConvertToAnimationStateResult(Node: FAnimNodeReference, AnimationState: FAnimationStateResultReference, Result: EAnimNodeReferenceConversionResult): void;
        ConvertToAnimationStateMachinePure(Node: FAnimNodeReference, AnimationState: FAnimationStateMachineReference, Result: boolean): void;
        ConvertToAnimationStateMachine(Node: FAnimNodeReference, AnimationState: FAnimationStateMachineReference, Result: EAnimNodeReferenceConversionResult): void;
    };
    readonly __staticRegistry: 
        UAnimationStateMachineLibrary['__static_UAnimationStateMachineLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBlendListBaseLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlendListBaseLibrary: {
        ResetNode(BlendListBase: FBlendListBaseReference): void;
        ConvertToBlendListBase(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FBlendListBaseReference;
    };
    readonly __staticRegistry: 
        UBlendListBaseLibrary['__static_UBlendListBaseLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBlendSpaceLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlendSpaceLibrary: {
        SnapToPosition(BlendSpace: FBlendSpaceReference, NewPosition: FVector): void;
        GetPosition(BlendSpace: FBlendSpaceReference): FVector;
        GetFilteredPosition(BlendSpace: FBlendSpaceReference): FVector;
        ConvertToBlendSpacePure(Node: FAnimNodeReference, BlendSpace: FBlendSpaceReference, Result: boolean): void;
        ConvertToBlendSpace(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FBlendSpaceReference;
    };
    readonly __staticRegistry: 
        UBlendSpaceLibrary['__static_UBlendSpaceLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UBlendSpacePlayerLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UBlendSpacePlayerLibrary: {
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
    };
    readonly __staticRegistry: 
        UBlendSpacePlayerLibrary['__static_UBlendSpacePlayerLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UKismetAnimationLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UKismetAnimationLibrary: {
        K2_TwoBoneIK(RootPos: FVector, JointPos: FVector, EndPos: FVector, JointTarget: FVector, Effector: FVector, OutJointPos: FVector, OutEndPos: FVector, bAllowStretching: boolean, StartStretchRatio: number, MaxStretchScale: number): void;
        K2_StartProfilingTimer(): void;
        K2_MakePerlinNoiseVectorAndRemap(X: number, Y: number, Z: number, RangeOutMinX: number, RangeOutMaxX: number, RangeOutMinY: number, RangeOutMaxY: number, RangeOutMinZ: number, RangeOutMaxZ: number): FVector;
        K2_MakePerlinNoiseAndRemap(Value: number, RangeOutMin: number, RangeOutMax: number): number;
        K2_LookAt(CurrentTransform: FTransform, TargetPosition: FVector, LookAtVector: FVector, bUseUpVector: boolean, UpVector: FVector, ClampConeInDegree: number): FTransform;
        K2_EndProfilingTimer(bLog: boolean, LogPrefix: string): number;
        K2_DistanceBetweenTwoSocketsAndMapRange(Component: USkeletalMeshComponent, SocketOrBoneNameA: string, SocketSpaceA: ERelativeTransformSpace, SocketOrBoneNameB: string, SocketSpaceB: ERelativeTransformSpace, bRemapRange: boolean, InRangeMin: number, InRangeMax: number, OutRangeMin: number, OutRangeMax: number): number;
        K2_DirectionBetweenSockets(Component: USkeletalMeshComponent, SocketOrBoneNameFrom: string, SocketOrBoneNameTo: string): FVector;
        K2_CalculateVelocityFromSockets(DeltaSeconds: number, Component: USkeletalMeshComponent, SocketOrBoneName: string, ReferenceSocketOrBone: string, SocketSpace: ERelativeTransformSpace, OffsetInBoneSpace: FVector, History: FPositionHistory, NumberOfSamples: number, VelocityMin: number, VelocityMax: number, EasingType: EEasingFuncType, CustomCurve: FRuntimeFloatCurve): number;
        K2_CalculateVelocityFromPositionHistory(DeltaSeconds: number, position: FVector, History: FPositionHistory, NumberOfSamples: number, VelocityMin: number, VelocityMax: number): number;
        CalculateDirection(Velocity: FVector, BaseRotation: FRotator): number;
    };
    readonly __staticRegistry: 
        UKismetAnimationLibrary['__static_UKismetAnimationLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface ULayeredBoneBlendLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULayeredBoneBlendLibrary: {
        SetBlendMask(UpdateContext: FAnimUpdateContext, LayeredBoneBlend: FLayeredBoneBlendReference, PoseIndex: number, BlendMaskName: string): FLayeredBoneBlendReference;
        GetNumPoses(LayeredBoneBlend: FLayeredBoneBlendReference): number;
        ConvertToLayeredBoneBlend(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FLayeredBoneBlendReference;
        ConvertToLayeredBlendPerBonePure(Node: FAnimNodeReference, LayeredBoneBlend: FLayeredBoneBlendReference, Result: boolean): void;
    };
    readonly __staticRegistry: 
        ULayeredBoneBlendLibrary['__static_ULayeredBoneBlendLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface ULinkedAnimGraphLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULinkedAnimGraphLibrary: {
        HasLinkedAnimInstance(Node: FLinkedAnimGraphReference): boolean;
        GetLinkedAnimInstance(Node: FLinkedAnimGraphReference): UAnimInstance;
        ConvertToLinkedAnimGraphPure(Node: FAnimNodeReference, LinkedAnimGraph: FLinkedAnimGraphReference, Result: boolean): void;
        ConvertToLinkedAnimGraph(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FLinkedAnimGraphReference;
    };
    readonly __staticRegistry: 
        ULinkedAnimGraphLibrary['__static_ULinkedAnimGraphLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMirrorAnimLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UMirrorAnimLibrary: {
        SetMirrorTransitionBlendTime(MirrorNode: FMirrorAnimNodeReference, InBlendTime: number): FMirrorAnimNodeReference;
        SetMirror(MirrorNode: FMirrorAnimNodeReference, bInMirror: boolean): FMirrorAnimNodeReference;
        GetMirrorTransitionBlendTime(MirrorNode: FMirrorAnimNodeReference): number;
        GetMirrorDataTable(MirrorNode: FMirrorAnimNodeReference): UMirrorDataTable;
        GetMirror(MirrorNode: FMirrorAnimNodeReference): boolean;
        ConvertToMirrorNodePure(Node: FAnimNodeReference, MirrorNode: FMirrorAnimNodeReference, Result: boolean): void;
        ConvertToMirrorNode(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FMirrorAnimNodeReference;
    };
    readonly __staticRegistry: 
        UMirrorAnimLibrary['__static_UMirrorAnimLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UModifyCurveAnimLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UModifyCurveAnimLibrary: {
        SetCurveMap(ModifyCurveNode: FModifyCurveAnimNodeReference, InCurveMap: TMap<string, number>): FModifyCurveAnimNodeReference;
        SetApplyMode(ModifyCurveNode: FModifyCurveAnimNodeReference, InMode: EModifyCurveApplyMode): FModifyCurveAnimNodeReference;
        SetAlpha(ModifyCurveNode: FModifyCurveAnimNodeReference, InAlpha: number): FModifyCurveAnimNodeReference;
        GetApplyMode(ModifyCurveNode: FModifyCurveAnimNodeReference): EModifyCurveApplyMode;
        GetAlpha(ModifyCurveNode: FModifyCurveAnimNodeReference): number;
        ConvertToModifyCurveNodePure(Node: FAnimNodeReference, ModifyCurveNode: FModifyCurveAnimNodeReference, Result: boolean): void;
        ConvertToModifyCurveNode(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FModifyCurveAnimNodeReference;
    };
    readonly __staticRegistry: 
        UModifyCurveAnimLibrary['__static_UModifyCurveAnimLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UPlayMontageCallbackProxy extends UObject {
    readonly __static_UPlayMontageCallbackProxy: {
        OnNotifyEndReceived(NotifyName: string, BranchingPointNotifyPayload: FBranchingPointNotifyPayload): void;
        OnNotifyBeginReceived(NotifyName: string, BranchingPointNotifyPayload: FBranchingPointNotifyPayload): void;
        OnMontageEnded(Montage: UAnimMontage, bInterrupted: boolean): void;
        OnMontageBlendingOut(Montage: UAnimMontage, bInterrupted: boolean): void;
        CreateProxyObjectForPlayMontage(InSkeletalMeshComponent: USkeletalMeshComponent, MontageToPlay: UAnimMontage, PlayRate: number, StartingPosition: number, StartingSection: string, bShouldStopAllMontages: boolean): UPlayMontageCallbackProxy;
    };
    readonly __properties_UPlayMontageCallbackProxy: {
        OnCompleted: FPlayMontageCallbackProxyOnCompleted;
        OnBlendOut: FPlayMontageCallbackProxyOnBlendOut;
        OnInterrupted: FPlayMontageCallbackProxyOnInterrupted;
        OnNotifyBegin: FPlayMontageCallbackProxyOnNotifyBegin;
        OnNotifyEnd: FPlayMontageCallbackProxyOnNotifyEnd;
    };
    readonly __staticRegistry: 
        UPlayMontageCallbackProxy['__static_UPlayMontageCallbackProxy'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlayMontageCallbackProxy['__properties_UPlayMontageCallbackProxy'] &
        UObject['__propertyRegistry'];
}

declare interface USequenceEvaluatorLibrary extends UBlueprintFunctionLibrary {
    readonly __static_USequenceEvaluatorLibrary: {
        SetSequenceWithInertialBlending(UpdateContext: FAnimUpdateContext, SequenceEvaluator: FSequenceEvaluatorReference, Sequence: UAnimSequenceBase, BlendTime: number): FSequenceEvaluatorReference;
        SetSequence(SequenceEvaluator: FSequenceEvaluatorReference, Sequence: UAnimSequenceBase): FSequenceEvaluatorReference;
        SetExplicitTime(SequenceEvaluator: FSequenceEvaluatorReference, Time: number): FSequenceEvaluatorReference;
        SetExplicitFrame(SequenceEvaluator: FSequenceEvaluatorReference, Frame: number): FSequenceEvaluatorReference;
        GetSequence(SequenceEvaluator: FSequenceEvaluatorReference): UAnimSequenceBase;
        GetAccumulatedTime(SequenceEvaluator: FSequenceEvaluatorReference): number;
        ConvertToSequenceEvaluatorPure(Node: FAnimNodeReference, SequenceEvaluator: FSequenceEvaluatorReference, Result: boolean): void;
        ConvertToSequenceEvaluator(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FSequenceEvaluatorReference;
        AdvanceTime(UpdateContext: FAnimUpdateContext, SequenceEvaluator: FSequenceEvaluatorReference, PlayRate: number): FSequenceEvaluatorReference;
    };
    readonly __staticRegistry: 
        USequenceEvaluatorLibrary['__static_USequenceEvaluatorLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface USequencePlayerLibrary extends UBlueprintFunctionLibrary {
    readonly __static_USequencePlayerLibrary: {
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
    };
    readonly __staticRegistry: 
        USequencePlayerLibrary['__static_USequencePlayerLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface USkeletalControlLibrary extends UBlueprintFunctionLibrary {
    readonly __static_USkeletalControlLibrary: {
        SetAlpha(SkeletalControl: FSkeletalControlReference, alpha: number): FSkeletalControlReference;
        GetAlpha(SkeletalControl: FSkeletalControlReference): number;
        ConvertToSkeletalControlPure(Node: FAnimNodeReference, SkeletalControl: FSkeletalControlReference, Result: boolean): void;
        ConvertToSkeletalControl(Node: FAnimNodeReference, Result: EAnimNodeReferenceConversionResult): FSkeletalControlReference;
    };
    readonly __staticRegistry: 
        USkeletalControlLibrary['__static_USkeletalControlLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

