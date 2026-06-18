declare interface FAnimNode_IKRig extends FAnimNode_CustomProperty {
    Source: FPoseLink;
    RigDefinitionAsset: UIKRigDefinition;
    Goals: FIKRigGoal[];
    bStartFromRefPose: boolean;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: string;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    GoalCreators: UActorComponent[];
}

declare interface FAnimNode_RetargetPoseFromMesh extends FAnimNode_Base {
    Source: FPoseLink;
    RetargetFrom: ERetargetSourceMode;
    SourceMeshComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    IKRetargeterAsset: UIKRetargeter;
    CustomRetargetProfile: FRetargetProfile;
    LODThreshold: number;
    LODThresholdForIK: number;
    bSuppressWarnings: boolean;
    bUseAttachedParent: boolean;
}

declare interface FBoneChain {
    ChainName: string;
    StartBone: FBoneReference;
    EndBone: FBoneReference;
    IKGoalName: string;
}

declare interface FCurveRemapPair {
    SourceCurve: string;
    TargetCurve: string;
}

declare type FGoalBone = object;

declare interface FIKRetargetAdditivePoseOp extends FIKRetargetOpBase {
    Settings: FIKRetargetAdditivePoseOpSettings;
}

declare interface FIKRetargetAdditivePoseOpSettings extends FIKRetargetOpSettingsBase {
    PoseToApply: string;
    alpha: number;
}

declare interface FIKRetargetAlignPoleVectorOp extends FIKRetargetOpBase {
    Settings: FIKRetargetAlignPoleVectorOpSettings;
    ChainMapping: FRetargetChainMapping;
}

declare interface FIKRetargetAlignPoleVectorOpSettings extends FIKRetargetOpSettingsBase {
    IKRigAsset: UIKRigDefinition;
    ChainsToAlign: FRetargetPoleVectorSettings[];
}

declare interface FIKRetargetCopyBasePoseOp extends FIKRetargetOpBase {
    Settings: FIKRetargetCopyBasePoseOpSettings;
}

declare interface FIKRetargetCopyBasePoseOpSettings extends FIKRetargetOpSettingsBase {
    bCopyBasePose: boolean;
    CopyBasePoseRoot: string;
}

declare interface FIKRetargetCurveRemapOp extends FIKRetargetOpBase {
    Settings: FIKRetargetCurveRemapOpSettings;
}

declare interface FIKRetargetCurveRemapOpSettings extends FIKRetargetOpSettingsBase {
    bCopyAllSourceCurves: boolean;
    bRemapCurves: boolean;
    CurvesToRemap: FCurveRemapPair[];
}

declare interface FIKRetargetFKChainsOp extends FIKRetargetOpBase {
    Settings: FIKRetargetFKChainsOpSettings;
    ChainMapping: FRetargetChainMapping;
}

declare interface FIKRetargetFKChainsOpSettings extends FIKRetargetOpSettingsBase {
    IKRigAsset: UIKRigDefinition;
    ChainsToRetarget: FRetargetFKChainSettings[];
    bDrawChainLines: boolean;
    bDrawSingleBoneChains: boolean;
    ChainDrawThickness: number;
    ChainDrawSize: number;
}

declare interface FIKRetargetIKChainsOp extends FIKRetargetOpBase {
    Settings: FIKRetargetIKChainsOpSettings;
}

declare interface FIKRetargetIKChainsOpSettings extends FIKRetargetOpSettingsBase {
    ChainsToRetarget: FRetargetIKChainSettings[];
    bDrawFinalGoals: boolean;
    bDrawSourceLocations: boolean;
    GoalDrawSize: number;
    GoalDrawThickness: number;
}

declare interface FIKRetargetOpBase {
    bIsEnabled: boolean;
    Name: string;
    ParentOpName: string;
}

declare type FIKRetargetOpSettingsBase = object;

declare interface FIKRetargetPelvisMotionOp extends FIKRetargetOpBase {
    Settings: FIKRetargetPelvisMotionOpSettings;
}

declare interface FIKRetargetPelvisMotionOpSettings extends FIKRetargetOpSettingsBase {
    SourcePelvisBone: FBoneReference;
    TargetPelvisBone: FBoneReference;
    RotationAlpha: number;
    RotationOffset: FRotator;
    TranslationAlpha: number;
    TranslationOffset: FVector;
    BlendToSourceTranslation: number;
    BlendToSourceTranslationWeights: FVector;
    ScaleHorizontal: number;
    ScaleVertical: number;
    AffectIKHorizontal: number;
    AffectIKVertical: number;
    bEnableDebugDraw: boolean;
    DebugDrawSize: number;
    DebugDrawThickness: number;
}

declare interface FIKRetargetPinBoneOp extends FIKRetargetOpBase {
    Settings: FIKRetargetPinBoneOpSettings;
}

declare interface FIKRetargetPinBoneOpSettings extends FIKRetargetOpSettingsBase {
    BonesToPin: FPinBoneData[];
    SkeletonToCopyFrom: ERetargetSourceOrTarget;
    bCopyTranslation: boolean;
    TranslationMode: EPinBoneTranslationMode;
    bCopyRotation: boolean;
    RotationMode: EPinBoneRotationMode;
    bCopyScale: boolean;
    bPropagateToChildren: boolean;
    GlobalOffset: FTransform;
    LocalOffset: FTransform;
}

declare interface FIKRetargetPose {
    RootTranslationOffset: FVector;
    BoneRotationOffsets: TMap<string, FQuat>;
}

declare interface FIKRetargetRootMotionOp extends FIKRetargetOpBase {
    Settings: FIKRetargetRootMotionOpSettings;
}

declare interface FIKRetargetRootMotionOpSettings extends FIKRetargetOpSettingsBase {
    SourceRoot: FBoneReference;
    TargetRoot: FBoneReference;
    RootMotionSource: ERootMotionSource;
    TargetPelvis: FBoneReference;
    bRotateWithPelvis: boolean;
    RootHeightSource: ERootMotionHeightSource;
    GlobalOffset: FTransform;
    bMaintainOffsetFromPelvis: boolean;
    bPropagateToNonRetargetedChildren: boolean;
}

declare interface FIKRetargetRunIKRigOp extends FIKRetargetOpBase {
    Settings: FIKRetargetRunIKRigOpSettings;
    ChainMapping: FRetargetChainMapping;
}

declare interface FIKRetargetRunIKRigOpSettings extends FIKRetargetOpSettingsBase {
    IKRigAsset: UIKRigDefinition;
    ExcludedGoals: string[];
    bDrawGoals: boolean;
    bDrawGoalBoneLocations: boolean;
    GoalDrawSize: number;
    GoalDrawThickness: number;
}

declare interface FIKRetargetScaleSourceOp extends FIKRetargetOpBase {
    Settings: FIKRetargetScaleSourceOpSettings;
}

declare interface FIKRetargetScaleSourceOpSettings extends FIKRetargetOpSettingsBase {
    SourceScaleFactor: number;
}

declare interface FIKRetargetSpeedPlantingOp extends FIKRetargetOpBase {
    Settings: FIKRetargetSpeedPlantingOpSettings;
}

declare interface FIKRetargetSpeedPlantingOpSettings extends FIKRetargetOpSettingsBase {
    ChainsToSpeedPlant: FRetargetSpeedPlantingSettings[];
    SpeedThreshold: number;
    Stiffness: number;
    CriticalDamping: number;
}

declare interface FIKRetargetStrideWarpingOp extends FIKRetargetOpBase {
    Settings: FIKRetargetStrideWarpingOpSettings;
}

declare interface FIKRetargetStrideWarpingOpSettings extends FIKRetargetOpSettingsBase {
    ChainSettings: FRetargetStrideWarpChainSettings[];
    DirectionSource: EWarpingDirectionSource;
    ForwardDirection: EBasicAxis;
    DirectionChain: string;
    WarpForwards: number;
    SidewaysOffset: number;
    WarpSplay: number;
    bEnableDebugDraw: boolean;
    DebugDrawSize: number;
    DebugDrawThickness: number;
}

declare interface FIKRigBodyMoverGoalSettings extends FIKRigGoalSettingsBase {
    BoneName: string;
    InfluenceMultiplier: number;
}

declare interface FIKRigBodyMoverSettings extends FIKRigSolverSettingsBase {
    StartBone: string;
    PositionAlpha: number;
    PositionPositiveX: number;
    PositionNegativeX: number;
    PositionPositiveY: number;
    PositionNegativeY: number;
    PositionPositiveZ: number;
    PositionNegativeZ: number;
    RotationAlpha: number;
    RotateXAlpha: number;
    RotateYAlpha: number;
    RotateZAlpha: number;
}

declare interface FIKRigBodyMoverSolver extends FIKRigSolverBase {
    Settings: FIKRigBodyMoverSettings;
    AllGoalSettings: FIKRigBodyMoverGoalSettings[];
}

declare interface FIKRigBoneSettingsBase extends FIKRigSettingsBase {
    bone: string;
}

declare interface FIKRigFBIKBoneSettings extends FIKRigBoneSettingsBase {
    RotationStiffness: number;
    PositionStiffness: number;
    X: EPBIKLimitType;
    MinX: number;
    MaxX: number;
    Y: EPBIKLimitType;
    MinY: number;
    MaxY: number;
    Z: EPBIKLimitType;
    MinZ: number;
    MaxZ: number;
    bUsePreferredAngles: boolean;
    PreferredAngles: FVector;
}

declare interface FIKRigFBIKGoalSettings extends FIKRigGoalSettingsBase {
    BoneName: string;
    ChainDepth: number;
    StrengthAlpha: number;
    PullChainAlpha: number;
    PinRotation: number;
    IndexInSolver: number;
}

declare interface FIKRigFBIKSettings extends FIKRigSolverSettingsBase {
    RootBone: string;
    Iterations: number;
    SubIterations: number;
    MassMultiplier: number;
    bAllowStretch: boolean;
    RootBehavior: EPBIKRootBehavior;
    PrePullRootSettings: FRootPrePullSettings;
    GlobalPullChainAlpha: number;
    MaxAngle: number;
    OverRelaxation: number;
}

declare interface FIKRigFullBodyIKSolver extends FIKRigSolverBase {
    Settings: FIKRigFBIKSettings;
    AllGoalSettings: FIKRigFBIKGoalSettings[];
    AllBoneSettings: FIKRigFBIKBoneSettings[];
}

declare interface FIKRigGoal {
    Name: string;
    BoneName: string;
    TransformSource: EIKRigGoalTransformSource;
    SourceBone: FBoneReference;
    position: FVector;
    Rotation: FRotator;
    PositionAlpha: number;
    RotationAlpha: number;
    PositionSpace: EIKRigGoalSpace;
    RotationSpace: EIKRigGoalSpace;
    FinalBlendedPosition: FVector;
    FinalBlendedRotation: FQuat;
    bEnabled: boolean;
}

declare type FIKRigGoalContainer = object;

declare interface FIKRigGoalSettingsBase extends FIKRigSettingsBase {
    Goal: string;
}

declare type FIKRigInputSkeleton = object;

declare interface FIKRigLimbSolver extends FIKRigSolverBase {
    Settings: FIKRigLimbSolverSettings;
}

declare interface FIKRigLimbSolverSettings extends FLimbSolverSettings {
    StartBone: string;
    GoalName: string;
    EndBone: string;
}

declare interface FIKRigPoleSolver extends FIKRigSolverBase {
    Settings: FIKRigPoleSolverSettings;
}

declare interface FIKRigPoleSolverSettings extends FIKRigSolverSettingsBase {
    StartBone: string;
    EndBone: string;
    AimAtGoal: string;
    alpha: number;
}

declare interface FIKRigSetTransform extends FIKRigSolverBase {
    Settings: FIKRigSetTransformSettings;
}

declare interface FIKRigSetTransformSettings extends FIKRigSolverSettingsBase {
    Goal: string;
    BoneToAffect: string;
    PositionAlpha: number;
    RotationAlpha: number;
    alpha: number;
    bPropagateToChildren: boolean;
}

declare type FIKRigSettingsBase = object;

declare interface FIKRigSkeleton {
    BoneNames: string[];
    ParentIndices: number[];
    ExcludedBones: string[];
    CurrentPoseGlobal: FTransform[];
    CurrentPoseLocal: FTransform[];
    RefPoseGlobal: FTransform[];
}

declare interface FIKRigSolverBase {
    bIsEnabled: boolean;
}

declare interface FIKRigSolverSettingsBase extends FIKRigSettingsBase {

}

declare type FLimbLink = object;

declare type FLimbSolver = object;

declare interface FLimbSolverSettings extends FIKRigSolverSettingsBase {
    ReachPrecision: number;
    HingeRotationAxis: EAxis;
    MaxIterations: number;
    bEnableLimit: boolean;
    MinRotationAngle: number;
    bAveragePull: boolean;
    PullDistribution: number;
    ReachStepAlpha: number;
    bEnableTwistCorrection: boolean;
    EndBoneForwardAxis: EAxis;
}

declare interface FPinBoneData {
    BoneToCopyFrom: FBoneReference;
    BoneToCopyTo: FBoneReference;
    BoneToPin: string;
    BoneToPinTo: string;
}

declare interface FRetargetChainMapping {
    ChainMap: FRetargetChainPair[];
    SourceIKRig: UIKRigDefinition;
    TargetIKRig: UIKRigDefinition;
}

declare interface FRetargetChainPair {
    TargetChainName: string;
    SourceChainName: string;
}

declare interface FRetargetDefinition {
    RootBone: string;
    BoneChains: FBoneChain[];
}

declare interface FRetargetFKChainSettings {
    TargetChainName: string;
    EnableFK: boolean;
    RotationMode: EFKChainRotationMode;
    RotationAlpha: number;
    TranslationMode: EFKChainTranslationMode;
    TranslationAlpha: number;
}

declare interface FRetargetGlobalSettings {
    bEnableRoot: boolean;
    bEnableFK: boolean;
    bEnableIK: boolean;
    bEnablePost: boolean;
    bCopyBasePose: boolean;
    CopyBasePoseRoot: string;
    SourceScaleFactor: number;
    bWarping: boolean;
    DirectionSource: EWarpingDirectionSource;
    ForwardDirection: EBasicAxis;
    DirectionChain: string;
    WarpForwards: number;
    SidewaysOffset: number;
    WarpSplay: number;
}

declare interface FRetargetIKChainSettings {
    TargetChainName: string;
    EnableIK: boolean;
    BlendToSource: number;
    BlendToSourceTranslation: number;
    BlendToSourceRotation: number;
    BlendToSourceWeights: FVector;
    StaticOffset: FVector;
    StaticLocalOffset: FVector;
    StaticRotationOffset: FRotator;
    ScaleVertical: number;
    Extension: number;
}

declare interface FRetargetOpProfile {
    OpToApplySettingsTo: string;
    SettingsToApply: FInstancedStruct;
}

declare interface FRetargetPoleVectorSettings {
    TargetChainName: string;
    bEnabled: boolean;
    AlignAlpha: number;
    StaticAngularOffset: number;
    MaintainOffset: boolean;
}

declare interface FRetargetProfile {
    RetargetOpProfiles: FRetargetOpProfile[];
    bApplyTargetRetargetPose: boolean;
    TargetRetargetPoseName: string;
    bApplySourceRetargetPose: boolean;
    SourceRetargetPoseName: string;
    bForceAllIKOff: boolean;
    bApplyChainSettings: boolean;
    ChainSettings: TMap<string, FTargetChainSettings>;
    bApplyRootSettings: boolean;
    RootSettings: FTargetRootSettings;
    bApplyGlobalSettings: boolean;
    GlobalSettings: FRetargetGlobalSettings;
}

declare interface FRetargetSpeedPlantingSettings {
    TargetChainName: string;
    SpeedCurveName: string;
}

declare interface FRetargetStrideWarpChainSettings {
    TargetChainName: string;
    EnableStrideWarping: boolean;
}

declare interface FTargetChainFKSettings {
    EnableFK: boolean;
    RotationMode: ERetargetRotationMode;
    RotationAlpha: number;
    TranslationMode: ERetargetTranslationMode;
    TranslationAlpha: number;
    PoleVectorMatching: number;
    PoleVectorMaintainOffset: boolean;
    PoleVectorOffset: number;
}

declare interface FTargetChainIKSettings {
    EnableIK: boolean;
    BlendToSource: number;
    BlendToSourceTranslation: number;
    BlendToSourceRotation: number;
    BlendToSourceWeights: FVector;
    StaticOffset: FVector;
    StaticLocalOffset: FVector;
    StaticRotationOffset: FRotator;
    ScaleVertical: number;
    Extension: number;
    bAffectedByIKWarping: boolean;
}

declare interface FTargetChainSettings {
    FK: FTargetChainFKSettings;
    IK: FTargetChainIKSettings;
    SpeedPlanting: FTargetChainSpeedPlantSettings;
}

declare interface FTargetChainSpeedPlantSettings {
    EnableSpeedPlanting: boolean;
    SpeedCurveName: string;
    SpeedThreshold: number;
    UnplantStiffness: number;
    UnplantCriticalDamping: number;
}

declare interface FTargetRootSettings {
    RotationAlpha: number;
    TranslationAlpha: number;
    BlendToSource: number;
    BlendToSourceWeights: FVector;
    ScaleHorizontal: number;
    ScaleVertical: number;
    TranslationOffset: FVector;
    RotationOffset: FRotator;
    AffectIKHorizontal: number;
    AffectIKVertical: number;
}

declare interface IIKGoalCreatorInterface extends IInterface {
    readonly __static_IIKGoalCreatorInterface: {
        AddIKGoals(OutGoals: TMap<string, FIKRigGoal>): void;
    };
    readonly __staticRegistry: 
        IIKGoalCreatorInterface['__static_IIKGoalCreatorInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UCurveRemapOp extends URetargetOpBase {
    readonly __properties_UCurveRemapOp: {
        CurvesToRemap: FCurveRemapPair[];
        bCopyAllSourceCurves: boolean;
    };
    readonly __staticRegistry: 
        URetargetOpBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCurveRemapOp['__properties_UCurveRemapOp'] &
        URetargetOpBase['__propertyRegistry'];
}

declare interface UIKRetargetAdditivePoseController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetAdditivePoseController: {
        SetSettings(InSettings: FIKRetargetAdditivePoseOpSettings): void;
        GetSettings(): FIKRetargetAdditivePoseOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetAdditivePoseController['__static_UIKRetargetAdditivePoseController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetAlignPoleVectorController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetAlignPoleVectorController: {
        SetSettings(InSettings: FIKRetargetAlignPoleVectorOpSettings): void;
        GetSettings(): FIKRetargetAlignPoleVectorOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetAlignPoleVectorController['__static_UIKRetargetAlignPoleVectorController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetCopyBasePoseController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetCopyBasePoseController: {
        SetSettings(InSettings: FIKRetargetCopyBasePoseOpSettings): void;
        GetSettings(): FIKRetargetCopyBasePoseOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetCopyBasePoseController['__static_UIKRetargetCopyBasePoseController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetCurveRemapController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetCurveRemapController: {
        SetSettings(InSettings: FIKRetargetCurveRemapOpSettings): void;
        GetSettings(): FIKRetargetCurveRemapOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetCurveRemapController['__static_UIKRetargetCurveRemapController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetFKChainsController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetFKChainsController: {
        SetSettings(InSettings: FIKRetargetFKChainsOpSettings): void;
        GetSettings(): FIKRetargetFKChainsOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetFKChainsController['__static_UIKRetargetFKChainsController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetGlobalSettings extends UObject {
    readonly __properties_UIKRetargetGlobalSettings: {
        Settings: FRetargetGlobalSettings;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetGlobalSettings['__properties_UIKRetargetGlobalSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRetargetIKChainsController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetIKChainsController: {
        SetSettings(InSettings: FIKRetargetIKChainsOpSettings): void;
        GetSettings(): FIKRetargetIKChainsOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetIKChainsController['__static_UIKRetargetIKChainsController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetOpControllerBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UIKRetargetPelvisMotionController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetPelvisMotionController: {
        SetTargetPelvisBone(InTargetPelvisBone: string): void;
        SetSourcePelvisBone(InSourcePelvisBone: string): void;
        SetSettings(InSettings: FIKRetargetPelvisMotionOpSettings): void;
        GetTargetPelvisBone(): string;
        GetSourcePelvisBone(): string;
        GetSettings(): FIKRetargetPelvisMotionOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetPelvisMotionController['__static_UIKRetargetPelvisMotionController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetPinBoneController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetPinBoneController: {
        SetSettings(InSettings: FIKRetargetPinBoneOpSettings): void;
        SetBonePair(InBoneToCopyFrom: string, InBoneToCopyTo: string): void;
        GetSettings(): FIKRetargetPinBoneOpSettings;
        GetAllBonePairs(): [TMap<string, string>];
        ClearAllBonePairs(): void;
    };
    readonly __staticRegistry: 
        UIKRetargetPinBoneController['__static_UIKRetargetPinBoneController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetProcessor extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UIKRetargetRootMotionController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetRootMotionController: {
        SetTargetRootBone(InTargetRootBone: string): void;
        SetTargetPelvisBone(InTargetPelvisBone: string): void;
        SetSourceRootBone(InSourceRootBone: string): void;
        SetSettings(InSettings: FIKRetargetRootMotionOpSettings): void;
        GetTargetRootBone(): string;
        GetTargetPelvisBone(): string;
        GetSourceRootBone(): string;
        GetSettings(): FIKRetargetRootMotionOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetRootMotionController['__static_UIKRetargetRootMotionController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetRunIKRigController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetRunIKRigController: {
        SetSettings(InSettings: FIKRetargetRunIKRigOpSettings): void;
        GetSettings(): FIKRetargetRunIKRigOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetRunIKRigController['__static_UIKRetargetRunIKRigController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetScaleSourceController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetScaleSourceController: {
        SetSettings(InSettings: FIKRetargetScaleSourceOpSettings): void;
        GetSettings(): FIKRetargetScaleSourceOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetScaleSourceController['__static_UIKRetargetScaleSourceController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetSpeedPlantingController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetSpeedPlantingController: {
        SetSettings(InSettings: FIKRetargetSpeedPlantingOpSettings): void;
        GetSettings(): FIKRetargetSpeedPlantingOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetSpeedPlantingController['__static_UIKRetargetSpeedPlantingController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargetStrideWarpingController extends UIKRetargetOpControllerBase {
    readonly __static_UIKRetargetStrideWarpingController: {
        SetSettings(InSettings: FIKRetargetStrideWarpingOpSettings): void;
        GetSettings(): FIKRetargetStrideWarpingOpSettings;
    };
    readonly __staticRegistry: 
        UIKRetargetStrideWarpingController['__static_UIKRetargetStrideWarpingController'] &
        UIKRetargetOpControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargetOpControllerBase['__propertyRegistry'];
}

declare interface UIKRetargeter extends UObject {
    readonly __static_UIKRetargeter: {
        SetRootSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, RootSettings: FTargetRootSettings): void;
        SetGlobalSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, GlobalSettings: FRetargetGlobalSettings): void;
        SetChainSpeedPlantSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, SpeedPlantSettings: FTargetChainSpeedPlantSettings, TargetChainName: string): void;
        SetChainSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, ChainSettings: FTargetChainSettings, TargetChainName: string): void;
        SetChainIKSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, IKSettings: FTargetChainIKSettings, TargetChainName: string): void;
        SetChainFKSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, FKSettings: FTargetChainFKSettings, TargetChainName: string): void;
        HasTargetIKRig(): boolean;
        HasSourceIKRig(): boolean;
        GetRootSettingsFromRetargetProfile(RetargetProfile: FRetargetProfile): FTargetRootSettings;
        GetRootSettingsFromRetargetAsset(RetargetAsset: UIKRetargeter, OptionalProfileName: string, OutSettings: FTargetRootSettings): void;
        GetGlobalSettingsFromRetargetProfile(RetargetProfile: FRetargetProfile): FRetargetGlobalSettings;
        GetGlobalSettingsFromRetargetAsset(RetargetAsset: UIKRetargeter, OptionalProfileName: string, OutSettings: FRetargetGlobalSettings): void;
        GetChainUsingGoalFromRetargetAsset(RetargetAsset: UIKRetargeter, IKGoalName: string): FTargetChainSettings;
        GetChainSettingsFromRetargetProfile(RetargetProfile: FRetargetProfile, TargetChainName: string): FTargetChainSettings;
        GetChainSettingsFromRetargetAsset(RetargetAsset: UIKRetargeter, TargetChainName: string, OptionalProfileName: string): FTargetChainSettings;
    };
    readonly __properties_UIKRetargeter: {
        Version: number;
        SourceIKRigAsset: UIKRigDefinition;
        TargetIKRigAsset: UIKRigDefinition;
        RetargetOps: FInstancedStruct[];
        Profiles: TMap<string, FRetargetProfile>;
        CurrentProfile: string;
        SourceRetargetPoses: TMap<string, FIKRetargetPose>;
        TargetRetargetPoses: TMap<string, FIKRetargetPose>;
        CurrentSourceRetargetPose: string;
        CurrentTargetRetargetPose: string;
        bRetargetRoot: boolean;
        bRetargetFK: boolean;
        bRetargetIK: boolean;
        TargetActorOffset: number;
        TargetActorScale: number;
        RetargetPoses: TMap<string, FIKRetargetPose>;
        CurrentRetargetPose: string;
        ChainMap: FRetargetChainMapping;
        ChainSettings: URetargetChainSettings[];
        RootSettings: URetargetRootSettings;
        GlobalSettings: UIKRetargetGlobalSettings;
        OpStack: URetargetOpStack;
    };
    readonly __staticRegistry: 
        UIKRetargeter['__static_UIKRetargeter'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRetargeter['__properties_UIKRetargeter'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRigBodyMoverController extends UIKRigSolverControllerBase {
    readonly __static_UIKRigBodyMoverController: {
        SetSolverSettings(InSettings: FIKRigBodyMoverSettings): void;
        SetGoalSettings(InGoalName: string, InSettings: FIKRigBodyMoverGoalSettings): void;
        GetSolverSettings(): FIKRigBodyMoverSettings;
        GetGoalSettings(InGoalName: string): FIKRigBodyMoverGoalSettings;
    };
    readonly __staticRegistry: 
        UIKRigBodyMoverController['__static_UIKRigBodyMoverController'] &
        UIKRigSolverControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigSolverControllerBase['__propertyRegistry'];
}

declare interface UIKRigComponent extends UActorComponent {
    readonly __static_UIKRigComponent: {
        SetIKRigGoalTransform(GoalName: string, Transform: FTransform, PositionAlpha: number, RotationAlpha: number): void;
        SetIKRigGoalPositionAndRotation(GoalName: string, position: FVector, Rotation: FQuat, PositionAlpha: number, RotationAlpha: number): void;
        SetIKRigGoal(Goal: FIKRigGoal): void;
        ClearAllGoals(): void;
    };
    readonly __staticRegistry: 
        UIKRigComponent['__static_UIKRigComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorComponent['__propertyRegistry'];
}

declare interface UIKRigDefinition extends UObject {
    readonly __properties_UIKRigDefinition: {
        PreviewSkeletalMesh: TSoftObjectPtr<USkeletalMesh>;
        Skeleton: FIKRigSkeleton;
        Goals: UIKRigEffectorGoal[];
        SolverStack: FInstancedStruct[];
        RetargetDefinition: FRetargetDefinition;
        Solvers: UIKRigSolver[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigDefinition['__properties_UIKRigDefinition'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRigEffectorGoal extends UObject {
    readonly __properties_UIKRigEffectorGoal: {
        GoalName: string;
        BoneName: string;
        PositionAlpha: number;
        RotationAlpha: number;
        CurrentTransform: FTransform;
        InitialTransform: FTransform;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigEffectorGoal['__properties_UIKRigEffectorGoal'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRigFBIKController extends UIKRigSolverControllerBase {
    readonly __static_UIKRigFBIKController: {
        SetSolverSettings(InSettings: FIKRigFBIKSettings): void;
        SetGoalSettings(InGoalName: string, InSettings: FIKRigFBIKGoalSettings): void;
        SetBoneSettings(InBoneName: string, InSettings: FIKRigFBIKBoneSettings): void;
        GetSolverSettings(): FIKRigFBIKSettings;
        GetGoalSettings(InGoalName: string): FIKRigFBIKGoalSettings;
        GetBoneSettings(InBoneName: string): FIKRigFBIKBoneSettings;
    };
    readonly __staticRegistry: 
        UIKRigFBIKController['__static_UIKRigFBIKController'] &
        UIKRigSolverControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigSolverControllerBase['__propertyRegistry'];
}

declare interface UIKRigFBIKSolver extends UIKRigSolver {
    readonly __static_UIKRigFBIKSolver: {
        GetEffectors(): UIKRig_FBIKEffector[];
        GetBoneSettings(): UIKRig_FBIKBoneSettings[];
    };
    readonly __properties_UIKRigFBIKSolver: {
        RootBone: string;
        Iterations: number;
        SubIterations: number;
        MassMultiplier: number;
        bAllowStretch: boolean;
        RootBehavior: EPBIKRootBehavior;
        PrePullRootSettings: FRootPrePullSettings;
        PullChainAlpha: number;
        MaxAngle: number;
        OverRelaxation: number;
        Effectors: UIKRig_FBIKEffector[];
        BoneSettings: UIKRig_FBIKBoneSettings[];
    };
    readonly __staticRegistry: 
        UIKRigFBIKSolver['__static_UIKRigFBIKSolver'] &
        UIKRigSolver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigFBIKSolver['__properties_UIKRigFBIKSolver'] &
        UIKRigSolver['__propertyRegistry'];
}

declare interface UIKRigLimbSolverController extends UIKRigSolverControllerBase {
    readonly __static_UIKRigLimbSolverController: {
        SetSolverSettings(InSettings: FIKRigLimbSolverSettings): void;
        GetSolverSettings(): FIKRigLimbSolverSettings;
    };
    readonly __staticRegistry: 
        UIKRigLimbSolverController['__static_UIKRigLimbSolverController'] &
        UIKRigSolverControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigSolverControllerBase['__propertyRegistry'];
}

declare interface UIKRigPoleSolverController extends UIKRigSolverControllerBase {
    readonly __static_UIKRigPoleSolverController: {
        SetSolverSettings(InSettings: FIKRigPoleSolverSettings): void;
        GetSolverSettings(): FIKRigPoleSolverSettings;
    };
    readonly __staticRegistry: 
        UIKRigPoleSolverController['__static_UIKRigPoleSolverController'] &
        UIKRigSolverControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigSolverControllerBase['__propertyRegistry'];
}

declare interface UIKRigProcessor extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UIKRigSetTransformController extends UIKRigSolverControllerBase {
    readonly __static_UIKRigSetTransformController: {
        SetSolverSettings(InSettings: FIKRigSetTransformSettings): void;
        GetSolverSettings(): FIKRigSetTransformSettings;
    };
    readonly __staticRegistry: 
        UIKRigSetTransformController['__static_UIKRigSetTransformController'] &
        UIKRigSolverControllerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigSolverControllerBase['__propertyRegistry'];
}

declare interface UIKRigSolver extends UObject {
    readonly __properties_UIKRigSolver: {
        bIsEnabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRigSolver['__properties_UIKRigSolver'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRigSolverControllerBase extends UObject {
    readonly __static_UIKRigSolverControllerBase: {
        SetEnabled(bIsEnabled: boolean): void;
        GetEnabled(): boolean;
    };
    readonly __staticRegistry: 
        UIKRigSolverControllerBase['__static_UIKRigSolverControllerBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UIKRig_BodyMover extends UIKRigSolver {
    readonly __properties_UIKRig_BodyMover: {
        RootBone: string;
        PositionAlpha: number;
        PositionPositiveX: number;
        PositionNegativeX: number;
        PositionPositiveY: number;
        PositionNegativeY: number;
        PositionPositiveZ: number;
        PositionNegativeZ: number;
        RotationAlpha: number;
        RotateXAlpha: number;
        RotateYAlpha: number;
        RotateZAlpha: number;
        Effectors: UIKRig_BodyMoverEffector[];
    };
    readonly __staticRegistry: 
        UIKRigSolver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_BodyMover['__properties_UIKRig_BodyMover'] &
        UIKRigSolver['__propertyRegistry'];
}

declare interface UIKRig_BodyMoverEffector extends UObject {
    readonly __properties_UIKRig_BodyMoverEffector: {
        GoalName: string;
        BoneName: string;
        InfluenceMultiplier: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_BodyMoverEffector['__properties_UIKRig_BodyMoverEffector'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRig_FBIKBoneSettings extends UObject {
    readonly __properties_UIKRig_FBIKBoneSettings: {
        bone: string;
        RotationStiffness: number;
        PositionStiffness: number;
        X: EPBIKLimitType;
        MinX: number;
        MaxX: number;
        Y: EPBIKLimitType;
        MinY: number;
        MaxY: number;
        Z: EPBIKLimitType;
        MinZ: number;
        MaxZ: number;
        bUsePreferredAngles: boolean;
        PreferredAngles: FVector;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_FBIKBoneSettings['__properties_UIKRig_FBIKBoneSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRig_FBIKEffector extends UObject {
    readonly __properties_UIKRig_FBIKEffector: {
        GoalName: string;
        BoneName: string;
        ChainDepth: number;
        StrengthAlpha: number;
        PullChainAlpha: number;
        PinRotation: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_FBIKEffector['__properties_UIKRig_FBIKEffector'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRig_LimbEffector extends UObject {
    readonly __properties_UIKRig_LimbEffector: {
        GoalName: string;
        BoneName: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_LimbEffector['__properties_UIKRig_LimbEffector'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRig_LimbSolver extends UIKRigSolver {
    readonly __properties_UIKRig_LimbSolver: {
        RootName: string;
        ReachPrecision: number;
        HingeRotationAxis: EAxis;
        MaxIterations: number;
        bEnableLimit: boolean;
        MinRotationAngle: number;
        bAveragePull: boolean;
        PullDistribution: number;
        ReachStepAlpha: number;
        bEnableTwistCorrection: boolean;
        EndBoneForwardAxis: EAxis;
        Effector: UIKRig_LimbEffector;
    };
    readonly __staticRegistry: 
        UIKRigSolver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_LimbSolver['__properties_UIKRig_LimbSolver'] &
        UIKRigSolver['__propertyRegistry'];
}

declare interface UIKRig_PoleSolver extends UIKRigSolver {
    readonly __properties_UIKRig_PoleSolver: {
        RootName: string;
        EndName: string;
        Effector: UIKRig_PoleSolverEffector;
    };
    readonly __staticRegistry: 
        UIKRigSolver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_PoleSolver['__properties_UIKRig_PoleSolver'] &
        UIKRigSolver['__propertyRegistry'];
}

declare interface UIKRig_PoleSolverEffector extends UObject {
    readonly __properties_UIKRig_PoleSolverEffector: {
        GoalName: string;
        BoneName: string;
        alpha: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_PoleSolverEffector['__properties_UIKRig_PoleSolverEffector'] &
        UObject['__propertyRegistry'];
}

declare interface UIKRig_SetTransform extends UIKRigSolver {
    readonly __properties_UIKRig_SetTransform: {
        Goal: string;
        RootBone: string;
        Effector: UIKRig_SetTransformEffector;
    };
    readonly __staticRegistry: 
        UIKRigSolver['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_SetTransform['__properties_UIKRig_SetTransform'] &
        UIKRigSolver['__propertyRegistry'];
}

declare interface UIKRig_SetTransformEffector extends UObject {
    readonly __properties_UIKRig_SetTransformEffector: {
        bEnablePosition: boolean;
        bEnableRotation: boolean;
        alpha: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UIKRig_SetTransformEffector['__properties_UIKRig_SetTransformEffector'] &
        UObject['__propertyRegistry'];
}

declare interface UPinBoneOp extends URetargetOpBase {
    readonly __properties_UPinBoneOp: {
        BonesToPin: FPinBoneData[];
        PinTo: ERetargetSourceOrTarget;
        bCopyTranslation: boolean;
        bCopyRotation: boolean;
        bCopyScale: boolean;
        TranslationMode: EPinBoneTranslationMode;
        RotationMode: EPinBoneRotationMode;
        GlobalOffset: FTransform;
        LocalOffset: FTransform;
        bMaintainOffset: boolean;
        PinType: EPinBoneType;
    };
    readonly __staticRegistry: 
        URetargetOpBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UPinBoneOp['__properties_UPinBoneOp'] &
        URetargetOpBase['__propertyRegistry'];
}

declare interface URetargetChainSettings extends UObject {
    readonly __properties_URetargetChainSettings: {
        SourceChain: string;
        TargetChain: string;
        Settings: FTargetChainSettings;
        CopyPoseUsingFK: boolean;
        RotationMode: ERetargetRotationMode;
        RotationAlpha: number;
        TranslationMode: ERetargetTranslationMode;
        TranslationAlpha: number;
        DriveIKGoal: boolean;
        BlendToSource: number;
        BlendToSourceWeights: FVector;
        StaticOffset: FVector;
        StaticLocalOffset: FVector;
        StaticRotationOffset: FRotator;
        Extension: number;
        UseSpeedCurveToPlantIK: boolean;
        SpeedCurveName: string;
        VelocityThreshold: number;
        UnplantStiffness: number;
        UnplantCriticalDamping: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URetargetChainSettings['__properties_URetargetChainSettings'] &
        UObject['__propertyRegistry'];
}

declare interface URetargetOpBase extends UObject {
    readonly __properties_URetargetOpBase: {
        bIsEnabled: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URetargetOpBase['__properties_URetargetOpBase'] &
        UObject['__propertyRegistry'];
}

declare interface URetargetOpStack extends UObject {
    readonly __properties_URetargetOpStack: {
        RetargetOps: URetargetOpBase[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URetargetOpStack['__properties_URetargetOpStack'] &
        UObject['__propertyRegistry'];
}

declare interface URetargetProfileLibrary extends UBlueprintFunctionLibrary {
    readonly __static_URetargetProfileLibrary: {
        GetOpControllerFromRetargetProfile(InRetargetProfile: FRetargetProfile, InRetargetOpName: string): UIKRetargetOpControllerBase;
        CopyRetargetProfileFromRetargetAsset(InRetargetAsset: UIKRetargeter): FRetargetProfile;
    };
    readonly __staticRegistry: 
        URetargetProfileLibrary['__static_URetargetProfileLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface URetargetRootSettings extends UObject {
    readonly __properties_URetargetRootSettings: {
        Settings: FTargetRootSettings;
        RetargetRootTranslation: boolean;
        GlobalScaleHorizontal: number;
        GlobalScaleVertical: number;
        BlendToSource: FVector;
        StaticOffset: FVector;
        StaticRotationOffset: FRotator;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URetargetRootSettings['__properties_URetargetRootSettings'] &
        UObject['__propertyRegistry'];
}

declare interface URootMotionGeneratorOp extends URetargetOpBase {
    readonly __properties_URootMotionGeneratorOp: {
        SourceRootBone: string;
        TargetRootBone: string;
        TargetPelvisBone: string;
        RootMotionSource: ERootMotionSource;
        RootHeightSource: ERootMotionHeightSource;
        bPropagateToNonRetargetedChildren: boolean;
        bMaintainOffsetFromPelvis: boolean;
        bRotateWithPelvis: boolean;
        GlobalOffset: FTransform;
    };
    readonly __staticRegistry: 
        URetargetOpBase['__staticRegistry'];
    readonly __propertyRegistry: 
        URootMotionGeneratorOp['__properties_URootMotionGeneratorOp'] &
        URetargetOpBase['__propertyRegistry'];
}

