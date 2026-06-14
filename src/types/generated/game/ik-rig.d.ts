declare interface FAnimNode_IKRig extends FAnimNode_CustomProperty {
    Source: FPoseLink;
    RigDefinitionAsset: UIKRigDefinition;
    Goals: TArray<FIKRigGoal>;
    bStartFromRefPose: boolean;
    AlphaInputType: EAnimAlphaInputType;
    bAlphaBoolEnabled: boolean;
    alpha: number;
    AlphaScaleBias: FInputScaleBias;
    AlphaBoolBlend: FInputAlphaBoolBlend;
    AlphaCurveName: FName;
    AlphaScaleBiasClamp: FInputScaleBiasClamp;
    GoalCreators: TArray<UActorComponent>;
}
declare const FAnimNode_IKRig: FAnimNode_IKRig;

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
declare const FAnimNode_RetargetPoseFromMesh: FAnimNode_RetargetPoseFromMesh;

declare interface FBoneChain {
    ChainName: FName;
    StartBone: FBoneReference;
    EndBone: FBoneReference;
    IKGoalName: FName;
}
declare const FBoneChain: FBoneChain;

declare interface FCurveRemapPair {
    SourceCurve: FName;
    TargetCurve: FName;
}
declare const FCurveRemapPair: FCurveRemapPair;

declare interface FGoalBone {

}
declare const FGoalBone: FGoalBone;

declare interface FIKRetargetAdditivePoseOp extends FIKRetargetOpBase {
    Settings: FIKRetargetAdditivePoseOpSettings;
}
declare const FIKRetargetAdditivePoseOp: FIKRetargetAdditivePoseOp;

declare interface FIKRetargetAdditivePoseOpSettings extends FIKRetargetOpSettingsBase {
    PoseToApply: FName;
    alpha: number;
}
declare const FIKRetargetAdditivePoseOpSettings: FIKRetargetAdditivePoseOpSettings;

declare interface FIKRetargetAlignPoleVectorOp extends FIKRetargetOpBase {
    Settings: FIKRetargetAlignPoleVectorOpSettings;
    ChainMapping: FRetargetChainMapping;
}
declare const FIKRetargetAlignPoleVectorOp: FIKRetargetAlignPoleVectorOp;

declare interface FIKRetargetAlignPoleVectorOpSettings extends FIKRetargetOpSettingsBase {
    IKRigAsset: UIKRigDefinition;
    ChainsToAlign: TArray<FRetargetPoleVectorSettings>;
}
declare const FIKRetargetAlignPoleVectorOpSettings: FIKRetargetAlignPoleVectorOpSettings;

declare interface FIKRetargetCopyBasePoseOp extends FIKRetargetOpBase {
    Settings: FIKRetargetCopyBasePoseOpSettings;
}
declare const FIKRetargetCopyBasePoseOp: FIKRetargetCopyBasePoseOp;

declare interface FIKRetargetCopyBasePoseOpSettings extends FIKRetargetOpSettingsBase {
    bCopyBasePose: boolean;
    CopyBasePoseRoot: FName;
}
declare const FIKRetargetCopyBasePoseOpSettings: FIKRetargetCopyBasePoseOpSettings;

declare interface FIKRetargetCurveRemapOp extends FIKRetargetOpBase {
    Settings: FIKRetargetCurveRemapOpSettings;
}
declare const FIKRetargetCurveRemapOp: FIKRetargetCurveRemapOp;

declare interface FIKRetargetCurveRemapOpSettings extends FIKRetargetOpSettingsBase {
    bCopyAllSourceCurves: boolean;
    bRemapCurves: boolean;
    CurvesToRemap: TArray<FCurveRemapPair>;
}
declare const FIKRetargetCurveRemapOpSettings: FIKRetargetCurveRemapOpSettings;

declare interface FIKRetargetFKChainsOp extends FIKRetargetOpBase {
    Settings: FIKRetargetFKChainsOpSettings;
    ChainMapping: FRetargetChainMapping;
}
declare const FIKRetargetFKChainsOp: FIKRetargetFKChainsOp;

declare interface FIKRetargetFKChainsOpSettings extends FIKRetargetOpSettingsBase {
    IKRigAsset: UIKRigDefinition;
    ChainsToRetarget: TArray<FRetargetFKChainSettings>;
    bDrawChainLines: boolean;
    bDrawSingleBoneChains: boolean;
    ChainDrawThickness: number;
    ChainDrawSize: number;
}
declare const FIKRetargetFKChainsOpSettings: FIKRetargetFKChainsOpSettings;

declare interface FIKRetargetIKChainsOp extends FIKRetargetOpBase {
    Settings: FIKRetargetIKChainsOpSettings;
}
declare const FIKRetargetIKChainsOp: FIKRetargetIKChainsOp;

declare interface FIKRetargetIKChainsOpSettings extends FIKRetargetOpSettingsBase {
    ChainsToRetarget: TArray<FRetargetIKChainSettings>;
    bDrawFinalGoals: boolean;
    bDrawSourceLocations: boolean;
    GoalDrawSize: number;
    GoalDrawThickness: number;
}
declare const FIKRetargetIKChainsOpSettings: FIKRetargetIKChainsOpSettings;

declare interface FIKRetargetOpBase {
    bIsEnabled: boolean;
    Name: FName;
    ParentOpName: FName;
}
declare const FIKRetargetOpBase: FIKRetargetOpBase;

declare interface FIKRetargetOpSettingsBase {

}
declare const FIKRetargetOpSettingsBase: FIKRetargetOpSettingsBase;

declare interface FIKRetargetPelvisMotionOp extends FIKRetargetOpBase {
    Settings: FIKRetargetPelvisMotionOpSettings;
}
declare const FIKRetargetPelvisMotionOp: FIKRetargetPelvisMotionOp;

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
declare const FIKRetargetPelvisMotionOpSettings: FIKRetargetPelvisMotionOpSettings;

declare interface FIKRetargetPinBoneOp extends FIKRetargetOpBase {
    Settings: FIKRetargetPinBoneOpSettings;
}
declare const FIKRetargetPinBoneOp: FIKRetargetPinBoneOp;

declare interface FIKRetargetPinBoneOpSettings extends FIKRetargetOpSettingsBase {
    BonesToPin: TArray<FPinBoneData>;
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
declare const FIKRetargetPinBoneOpSettings: FIKRetargetPinBoneOpSettings;

declare interface FIKRetargetPose {
    RootTranslationOffset: FVector;
    BoneRotationOffsets: Record<FName, FQuat>;
}
declare const FIKRetargetPose: FIKRetargetPose;

declare interface FIKRetargetRootMotionOp extends FIKRetargetOpBase {
    Settings: FIKRetargetRootMotionOpSettings;
}
declare const FIKRetargetRootMotionOp: FIKRetargetRootMotionOp;

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
declare const FIKRetargetRootMotionOpSettings: FIKRetargetRootMotionOpSettings;

declare interface FIKRetargetRunIKRigOp extends FIKRetargetOpBase {
    Settings: FIKRetargetRunIKRigOpSettings;
    ChainMapping: FRetargetChainMapping;
}
declare const FIKRetargetRunIKRigOp: FIKRetargetRunIKRigOp;

declare interface FIKRetargetRunIKRigOpSettings extends FIKRetargetOpSettingsBase {
    IKRigAsset: UIKRigDefinition;
    ExcludedGoals: TArray<FName>;
    bDrawGoals: boolean;
    bDrawGoalBoneLocations: boolean;
    GoalDrawSize: number;
    GoalDrawThickness: number;
}
declare const FIKRetargetRunIKRigOpSettings: FIKRetargetRunIKRigOpSettings;

declare interface FIKRetargetScaleSourceOp extends FIKRetargetOpBase {
    Settings: FIKRetargetScaleSourceOpSettings;
}
declare const FIKRetargetScaleSourceOp: FIKRetargetScaleSourceOp;

declare interface FIKRetargetScaleSourceOpSettings extends FIKRetargetOpSettingsBase {
    SourceScaleFactor: number;
}
declare const FIKRetargetScaleSourceOpSettings: FIKRetargetScaleSourceOpSettings;

declare interface FIKRetargetSpeedPlantingOp extends FIKRetargetOpBase {
    Settings: FIKRetargetSpeedPlantingOpSettings;
}
declare const FIKRetargetSpeedPlantingOp: FIKRetargetSpeedPlantingOp;

declare interface FIKRetargetSpeedPlantingOpSettings extends FIKRetargetOpSettingsBase {
    ChainsToSpeedPlant: TArray<FRetargetSpeedPlantingSettings>;
    SpeedThreshold: number;
    Stiffness: number;
    CriticalDamping: number;
}
declare const FIKRetargetSpeedPlantingOpSettings: FIKRetargetSpeedPlantingOpSettings;

declare interface FIKRetargetStrideWarpingOp extends FIKRetargetOpBase {
    Settings: FIKRetargetStrideWarpingOpSettings;
}
declare const FIKRetargetStrideWarpingOp: FIKRetargetStrideWarpingOp;

declare interface FIKRetargetStrideWarpingOpSettings extends FIKRetargetOpSettingsBase {
    ChainSettings: TArray<FRetargetStrideWarpChainSettings>;
    DirectionSource: EWarpingDirectionSource;
    ForwardDirection: EBasicAxis;
    DirectionChain: FName;
    WarpForwards: number;
    SidewaysOffset: number;
    WarpSplay: number;
    bEnableDebugDraw: boolean;
    DebugDrawSize: number;
    DebugDrawThickness: number;
}
declare const FIKRetargetStrideWarpingOpSettings: FIKRetargetStrideWarpingOpSettings;

declare interface FIKRigBodyMoverGoalSettings extends FIKRigGoalSettingsBase {
    BoneName: FName;
    InfluenceMultiplier: number;
}
declare const FIKRigBodyMoverGoalSettings: FIKRigBodyMoverGoalSettings;

declare interface FIKRigBodyMoverSettings extends FIKRigSolverSettingsBase {
    StartBone: FName;
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
declare const FIKRigBodyMoverSettings: FIKRigBodyMoverSettings;

declare interface FIKRigBodyMoverSolver extends FIKRigSolverBase {
    Settings: FIKRigBodyMoverSettings;
    AllGoalSettings: TArray<FIKRigBodyMoverGoalSettings>;
}
declare const FIKRigBodyMoverSolver: FIKRigBodyMoverSolver;

declare interface FIKRigBoneSettingsBase extends FIKRigSettingsBase {
    bone: FName;
}
declare const FIKRigBoneSettingsBase: FIKRigBoneSettingsBase;

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
declare const FIKRigFBIKBoneSettings: FIKRigFBIKBoneSettings;

declare interface FIKRigFBIKGoalSettings extends FIKRigGoalSettingsBase {
    BoneName: FName;
    ChainDepth: number;
    StrengthAlpha: number;
    PullChainAlpha: number;
    PinRotation: number;
    IndexInSolver: number;
}
declare const FIKRigFBIKGoalSettings: FIKRigFBIKGoalSettings;

declare interface FIKRigFBIKSettings extends FIKRigSolverSettingsBase {
    RootBone: FName;
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
declare const FIKRigFBIKSettings: FIKRigFBIKSettings;

declare interface FIKRigFullBodyIKSolver extends FIKRigSolverBase {
    Settings: FIKRigFBIKSettings;
    AllGoalSettings: TArray<FIKRigFBIKGoalSettings>;
    AllBoneSettings: TArray<FIKRigFBIKBoneSettings>;
}
declare const FIKRigFullBodyIKSolver: FIKRigFullBodyIKSolver;

declare interface FIKRigGoal {
    Name: FName;
    BoneName: FName;
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
declare const FIKRigGoal: FIKRigGoal;

declare interface FIKRigGoalContainer {

}
declare const FIKRigGoalContainer: FIKRigGoalContainer;

declare interface FIKRigGoalSettingsBase extends FIKRigSettingsBase {
    Goal: FName;
}
declare const FIKRigGoalSettingsBase: FIKRigGoalSettingsBase;

declare interface FIKRigInputSkeleton {

}
declare const FIKRigInputSkeleton: FIKRigInputSkeleton;

declare interface FIKRigLimbSolver extends FIKRigSolverBase {
    Settings: FIKRigLimbSolverSettings;
}
declare const FIKRigLimbSolver: FIKRigLimbSolver;

declare interface FIKRigLimbSolverSettings extends FLimbSolverSettings {
    StartBone: FName;
    GoalName: FName;
    EndBone: FName;
}
declare const FIKRigLimbSolverSettings: FIKRigLimbSolverSettings;

declare interface FIKRigPoleSolver extends FIKRigSolverBase {
    Settings: FIKRigPoleSolverSettings;
}
declare const FIKRigPoleSolver: FIKRigPoleSolver;

declare interface FIKRigPoleSolverSettings extends FIKRigSolverSettingsBase {
    StartBone: FName;
    EndBone: FName;
    AimAtGoal: FName;
    alpha: number;
}
declare const FIKRigPoleSolverSettings: FIKRigPoleSolverSettings;

declare interface FIKRigSetTransform extends FIKRigSolverBase {
    Settings: FIKRigSetTransformSettings;
}
declare const FIKRigSetTransform: FIKRigSetTransform;

declare interface FIKRigSetTransformSettings extends FIKRigSolverSettingsBase {
    Goal: FName;
    BoneToAffect: FName;
    PositionAlpha: number;
    RotationAlpha: number;
    alpha: number;
    bPropagateToChildren: boolean;
}
declare const FIKRigSetTransformSettings: FIKRigSetTransformSettings;

declare interface FIKRigSettingsBase {

}
declare const FIKRigSettingsBase: FIKRigSettingsBase;

declare interface FIKRigSkeleton {
    BoneNames: TArray<FName>;
    ParentIndices: TArray<number>;
    ExcludedBones: TArray<FName>;
    CurrentPoseGlobal: TArray<FTransform>;
    CurrentPoseLocal: TArray<FTransform>;
    RefPoseGlobal: TArray<FTransform>;
}
declare const FIKRigSkeleton: FIKRigSkeleton;

declare interface FIKRigSolverBase {
    bIsEnabled: boolean;
}
declare const FIKRigSolverBase: FIKRigSolverBase;

declare interface FIKRigSolverSettingsBase extends FIKRigSettingsBase {

}
declare const FIKRigSolverSettingsBase: FIKRigSolverSettingsBase;

declare interface FLimbLink {

}
declare const FLimbLink: FLimbLink;

declare interface FLimbSolver {

}
declare const FLimbSolver: FLimbSolver;

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
declare const FLimbSolverSettings: FLimbSolverSettings;

declare interface FPinBoneData {
    BoneToCopyFrom: FBoneReference;
    BoneToCopyTo: FBoneReference;
    BoneToPin: FName;
    BoneToPinTo: FName;
}
declare const FPinBoneData: FPinBoneData;

declare interface FRetargetChainMapping {
    ChainMap: TArray<FRetargetChainPair>;
    SourceIKRig: UIKRigDefinition;
    TargetIKRig: UIKRigDefinition;
}
declare const FRetargetChainMapping: FRetargetChainMapping;

declare interface FRetargetChainPair {
    TargetChainName: FName;
    SourceChainName: FName;
}
declare const FRetargetChainPair: FRetargetChainPair;

declare interface FRetargetDefinition {
    RootBone: FName;
    BoneChains: TArray<FBoneChain>;
}
declare const FRetargetDefinition: FRetargetDefinition;

declare interface FRetargetFKChainSettings {
    TargetChainName: FName;
    EnableFK: boolean;
    RotationMode: EFKChainRotationMode;
    RotationAlpha: number;
    TranslationMode: EFKChainTranslationMode;
    TranslationAlpha: number;
}
declare const FRetargetFKChainSettings: FRetargetFKChainSettings;

declare interface FRetargetGlobalSettings {
    bEnableRoot: boolean;
    bEnableFK: boolean;
    bEnableIK: boolean;
    bEnablePost: boolean;
    bCopyBasePose: boolean;
    CopyBasePoseRoot: FName;
    SourceScaleFactor: number;
    bWarping: boolean;
    DirectionSource: EWarpingDirectionSource;
    ForwardDirection: EBasicAxis;
    DirectionChain: FName;
    WarpForwards: number;
    SidewaysOffset: number;
    WarpSplay: number;
}
declare const FRetargetGlobalSettings: FRetargetGlobalSettings;

declare interface FRetargetIKChainSettings {
    TargetChainName: FName;
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
declare const FRetargetIKChainSettings: FRetargetIKChainSettings;

declare interface FRetargetOpProfile {
    OpToApplySettingsTo: FName;
    SettingsToApply: FInstancedStruct;
}
declare const FRetargetOpProfile: FRetargetOpProfile;

declare interface FRetargetPoleVectorSettings {
    TargetChainName: FName;
    bEnabled: boolean;
    AlignAlpha: number;
    StaticAngularOffset: number;
    MaintainOffset: boolean;
}
declare const FRetargetPoleVectorSettings: FRetargetPoleVectorSettings;

declare interface FRetargetProfile {
    RetargetOpProfiles: TArray<FRetargetOpProfile>;
    bApplyTargetRetargetPose: boolean;
    TargetRetargetPoseName: FName;
    bApplySourceRetargetPose: boolean;
    SourceRetargetPoseName: FName;
    bForceAllIKOff: boolean;
    bApplyChainSettings: boolean;
    ChainSettings: Record<FName, FTargetChainSettings>;
    bApplyRootSettings: boolean;
    RootSettings: FTargetRootSettings;
    bApplyGlobalSettings: boolean;
    GlobalSettings: FRetargetGlobalSettings;
}
declare const FRetargetProfile: FRetargetProfile;

declare interface FRetargetSpeedPlantingSettings {
    TargetChainName: FName;
    SpeedCurveName: FName;
}
declare const FRetargetSpeedPlantingSettings: FRetargetSpeedPlantingSettings;

declare interface FRetargetStrideWarpChainSettings {
    TargetChainName: FName;
    EnableStrideWarping: boolean;
}
declare const FRetargetStrideWarpChainSettings: FRetargetStrideWarpChainSettings;

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
declare const FTargetChainFKSettings: FTargetChainFKSettings;

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
declare const FTargetChainIKSettings: FTargetChainIKSettings;

declare interface FTargetChainSettings {
    FK: FTargetChainFKSettings;
    IK: FTargetChainIKSettings;
    SpeedPlanting: FTargetChainSpeedPlantSettings;
}
declare const FTargetChainSettings: FTargetChainSettings;

declare interface FTargetChainSpeedPlantSettings {
    EnableSpeedPlanting: boolean;
    SpeedCurveName: FName;
    SpeedThreshold: number;
    UnplantStiffness: number;
    UnplantCriticalDamping: number;
}
declare const FTargetChainSpeedPlantSettings: FTargetChainSpeedPlantSettings;

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
declare const FTargetRootSettings: FTargetRootSettings;

declare interface IIKGoalCreatorInterface extends IInterface {
    AddIKGoals(OutGoals: Record<FName, FIKRigGoal>): void;
}
declare const IIKGoalCreatorInterface: IIKGoalCreatorInterface;

declare interface UCurveRemapOp extends URetargetOpBase {
    CurvesToRemap: TArray<FCurveRemapPair>;
    bCopyAllSourceCurves: boolean;
}
declare const UCurveRemapOp: UCurveRemapOp;

declare interface UIKRetargetAdditivePoseController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetAdditivePoseOpSettings): void;
    GetSettings(): FIKRetargetAdditivePoseOpSettings;
}
declare const UIKRetargetAdditivePoseController: UIKRetargetAdditivePoseController;

declare interface UIKRetargetAlignPoleVectorController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetAlignPoleVectorOpSettings): void;
    GetSettings(): FIKRetargetAlignPoleVectorOpSettings;
}
declare const UIKRetargetAlignPoleVectorController: UIKRetargetAlignPoleVectorController;

declare interface UIKRetargetCopyBasePoseController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetCopyBasePoseOpSettings): void;
    GetSettings(): FIKRetargetCopyBasePoseOpSettings;
}
declare const UIKRetargetCopyBasePoseController: UIKRetargetCopyBasePoseController;

declare interface UIKRetargetCurveRemapController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetCurveRemapOpSettings): void;
    GetSettings(): FIKRetargetCurveRemapOpSettings;
}
declare const UIKRetargetCurveRemapController: UIKRetargetCurveRemapController;

declare interface UIKRetargetFKChainsController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetFKChainsOpSettings): void;
    GetSettings(): FIKRetargetFKChainsOpSettings;
}
declare const UIKRetargetFKChainsController: UIKRetargetFKChainsController;

declare interface UIKRetargetGlobalSettings extends UObject {
    Settings: FRetargetGlobalSettings;
}
declare const UIKRetargetGlobalSettings: UIKRetargetGlobalSettings;

declare interface UIKRetargetIKChainsController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetIKChainsOpSettings): void;
    GetSettings(): FIKRetargetIKChainsOpSettings;
}
declare const UIKRetargetIKChainsController: UIKRetargetIKChainsController;

declare interface UIKRetargetOpControllerBase extends UObject {

}
declare const UIKRetargetOpControllerBase: UIKRetargetOpControllerBase;

declare interface UIKRetargetPelvisMotionController extends UIKRetargetOpControllerBase {
    SetTargetPelvisBone(InTargetPelvisBone: FName): void;
    SetSourcePelvisBone(InSourcePelvisBone: FName): void;
    SetSettings(InSettings: FIKRetargetPelvisMotionOpSettings): void;
    GetTargetPelvisBone(): FName;
    GetSourcePelvisBone(): FName;
    GetSettings(): FIKRetargetPelvisMotionOpSettings;
}
declare const UIKRetargetPelvisMotionController: UIKRetargetPelvisMotionController;

declare interface UIKRetargetPinBoneController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetPinBoneOpSettings): void;
    SetBonePair(InBoneToCopyFrom: FName, InBoneToCopyTo: FName): void;
    GetSettings(): FIKRetargetPinBoneOpSettings;
    GetAllBonePairs(): [Record<FName, FName>];
    ClearAllBonePairs(): void;
}
declare const UIKRetargetPinBoneController: UIKRetargetPinBoneController;

declare interface UIKRetargetProcessor extends UObject {

}
declare const UIKRetargetProcessor: UIKRetargetProcessor;

declare interface UIKRetargetRootMotionController extends UIKRetargetOpControllerBase {
    SetTargetRootBone(InTargetRootBone: FName): void;
    SetTargetPelvisBone(InTargetPelvisBone: FName): void;
    SetSourceRootBone(InSourceRootBone: FName): void;
    SetSettings(InSettings: FIKRetargetRootMotionOpSettings): void;
    GetTargetRootBone(): FName;
    GetTargetPelvisBone(): FName;
    GetSourceRootBone(): FName;
    GetSettings(): FIKRetargetRootMotionOpSettings;
}
declare const UIKRetargetRootMotionController: UIKRetargetRootMotionController;

declare interface UIKRetargetRunIKRigController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetRunIKRigOpSettings): void;
    GetSettings(): FIKRetargetRunIKRigOpSettings;
}
declare const UIKRetargetRunIKRigController: UIKRetargetRunIKRigController;

declare interface UIKRetargetScaleSourceController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetScaleSourceOpSettings): void;
    GetSettings(): FIKRetargetScaleSourceOpSettings;
}
declare const UIKRetargetScaleSourceController: UIKRetargetScaleSourceController;

declare interface UIKRetargetSpeedPlantingController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetSpeedPlantingOpSettings): void;
    GetSettings(): FIKRetargetSpeedPlantingOpSettings;
}
declare const UIKRetargetSpeedPlantingController: UIKRetargetSpeedPlantingController;

declare interface UIKRetargetStrideWarpingController extends UIKRetargetOpControllerBase {
    SetSettings(InSettings: FIKRetargetStrideWarpingOpSettings): void;
    GetSettings(): FIKRetargetStrideWarpingOpSettings;
}
declare const UIKRetargetStrideWarpingController: UIKRetargetStrideWarpingController;

declare interface UIKRetargeter extends UObject {
    Version: number;
    SourceIKRigAsset: UIKRigDefinition;
    TargetIKRigAsset: UIKRigDefinition;
    RetargetOps: TArray<FInstancedStruct>;
    Profiles: Record<FName, FRetargetProfile>;
    CurrentProfile: FName;
    SourceRetargetPoses: Record<FName, FIKRetargetPose>;
    TargetRetargetPoses: Record<FName, FIKRetargetPose>;
    CurrentSourceRetargetPose: FName;
    CurrentTargetRetargetPose: FName;
    bRetargetRoot: boolean;
    bRetargetFK: boolean;
    bRetargetIK: boolean;
    TargetActorOffset: number;
    TargetActorScale: number;
    RetargetPoses: Record<FName, FIKRetargetPose>;
    CurrentRetargetPose: FName;
    ChainMap: FRetargetChainMapping;
    ChainSettings: TArray<URetargetChainSettings>;
    RootSettings: URetargetRootSettings;
    GlobalSettings: UIKRetargetGlobalSettings;
    OpStack: URetargetOpStack;
    SetRootSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, RootSettings: FTargetRootSettings): void;
    SetGlobalSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, GlobalSettings: FRetargetGlobalSettings): void;
    SetChainSpeedPlantSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, SpeedPlantSettings: FTargetChainSpeedPlantSettings, TargetChainName: FName): void;
    SetChainSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, ChainSettings: FTargetChainSettings, TargetChainName: FName): void;
    SetChainIKSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, IKSettings: FTargetChainIKSettings, TargetChainName: FName): void;
    SetChainFKSettingsInRetargetProfile(RetargetProfile: FRetargetProfile, FKSettings: FTargetChainFKSettings, TargetChainName: FName): void;
    HasTargetIKRig(): boolean;
    HasSourceIKRig(): boolean;
    GetRootSettingsFromRetargetProfile(RetargetProfile: FRetargetProfile): FTargetRootSettings;
    GetRootSettingsFromRetargetAsset(RetargetAsset: UIKRetargeter, OptionalProfileName: FName, OutSettings: FTargetRootSettings): void;
    GetGlobalSettingsFromRetargetProfile(RetargetProfile: FRetargetProfile): FRetargetGlobalSettings;
    GetGlobalSettingsFromRetargetAsset(RetargetAsset: UIKRetargeter, OptionalProfileName: FName, OutSettings: FRetargetGlobalSettings): void;
    GetChainUsingGoalFromRetargetAsset(RetargetAsset: UIKRetargeter, IKGoalName: FName): FTargetChainSettings;
    GetChainSettingsFromRetargetProfile(RetargetProfile: FRetargetProfile, TargetChainName: FName): FTargetChainSettings;
    GetChainSettingsFromRetargetAsset(RetargetAsset: UIKRetargeter, TargetChainName: FName, OptionalProfileName: FName): FTargetChainSettings;
}
declare const UIKRetargeter: UIKRetargeter;

declare interface UIKRigBodyMoverController extends UIKRigSolverControllerBase {
    SetSolverSettings(InSettings: FIKRigBodyMoverSettings): void;
    SetGoalSettings(InGoalName: FName, InSettings: FIKRigBodyMoverGoalSettings): void;
    GetSolverSettings(): FIKRigBodyMoverSettings;
    GetGoalSettings(InGoalName: FName): FIKRigBodyMoverGoalSettings;
}
declare const UIKRigBodyMoverController: UIKRigBodyMoverController;

declare interface UIKRigComponent extends UActorComponent {
    SetIKRigGoalTransform(GoalName: FName, Transform: FTransform, PositionAlpha: number, RotationAlpha: number): void;
    SetIKRigGoalPositionAndRotation(GoalName: FName, position: FVector, Rotation: FQuat, PositionAlpha: number, RotationAlpha: number): void;
    SetIKRigGoal(Goal: FIKRigGoal): void;
    ClearAllGoals(): void;
}
declare const UIKRigComponent: UIKRigComponent;

declare interface UIKRigDefinition extends UObject {
    PreviewSkeletalMesh: TSoftObjectPtr<USkeletalMesh>;
    Skeleton: FIKRigSkeleton;
    Goals: TArray<UIKRigEffectorGoal>;
    SolverStack: TArray<FInstancedStruct>;
    RetargetDefinition: FRetargetDefinition;
    Solvers: TArray<UIKRigSolver>;
}
declare const UIKRigDefinition: UIKRigDefinition;

declare interface UIKRigEffectorGoal extends UObject {
    GoalName: FName;
    BoneName: FName;
    PositionAlpha: number;
    RotationAlpha: number;
    CurrentTransform: FTransform;
    InitialTransform: FTransform;
}
declare const UIKRigEffectorGoal: UIKRigEffectorGoal;

declare interface UIKRigFBIKController extends UIKRigSolverControllerBase {
    SetSolverSettings(InSettings: FIKRigFBIKSettings): void;
    SetGoalSettings(InGoalName: FName, InSettings: FIKRigFBIKGoalSettings): void;
    SetBoneSettings(InBoneName: FName, InSettings: FIKRigFBIKBoneSettings): void;
    GetSolverSettings(): FIKRigFBIKSettings;
    GetGoalSettings(InGoalName: FName): FIKRigFBIKGoalSettings;
    GetBoneSettings(InBoneName: FName): FIKRigFBIKBoneSettings;
}
declare const UIKRigFBIKController: UIKRigFBIKController;

declare interface UIKRigFBIKSolver extends UIKRigSolver {
    RootBone: FName;
    Iterations: number;
    SubIterations: number;
    MassMultiplier: number;
    bAllowStretch: boolean;
    RootBehavior: EPBIKRootBehavior;
    PrePullRootSettings: FRootPrePullSettings;
    PullChainAlpha: number;
    MaxAngle: number;
    OverRelaxation: number;
    Effectors: TArray<UIKRig_FBIKEffector>;
    BoneSettings: TArray<UIKRig_FBIKBoneSettings>;
    GetEffectors(): TArray<UIKRig_FBIKEffector>;
    GetBoneSettings(): TArray<UIKRig_FBIKBoneSettings>;
}
declare const UIKRigFBIKSolver: UIKRigFBIKSolver;

declare interface UIKRigLimbSolverController extends UIKRigSolverControllerBase {
    SetSolverSettings(InSettings: FIKRigLimbSolverSettings): void;
    GetSolverSettings(): FIKRigLimbSolverSettings;
}
declare const UIKRigLimbSolverController: UIKRigLimbSolverController;

declare interface UIKRigPoleSolverController extends UIKRigSolverControllerBase {
    SetSolverSettings(InSettings: FIKRigPoleSolverSettings): void;
    GetSolverSettings(): FIKRigPoleSolverSettings;
}
declare const UIKRigPoleSolverController: UIKRigPoleSolverController;

declare interface UIKRigProcessor extends UObject {

}
declare const UIKRigProcessor: UIKRigProcessor;

declare interface UIKRigSetTransformController extends UIKRigSolverControllerBase {
    SetSolverSettings(InSettings: FIKRigSetTransformSettings): void;
    GetSolverSettings(): FIKRigSetTransformSettings;
}
declare const UIKRigSetTransformController: UIKRigSetTransformController;

declare interface UIKRigSolver extends UObject {
    bIsEnabled: boolean;
}
declare const UIKRigSolver: UIKRigSolver;

declare interface UIKRigSolverControllerBase extends UObject {
    SetEnabled(bIsEnabled: boolean): void;
    GetEnabled(): boolean;
}
declare const UIKRigSolverControllerBase: UIKRigSolverControllerBase;

declare interface UIKRig_BodyMover extends UIKRigSolver {
    RootBone: FName;
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
    Effectors: TArray<UIKRig_BodyMoverEffector>;
}
declare const UIKRig_BodyMover: UIKRig_BodyMover;

declare interface UIKRig_BodyMoverEffector extends UObject {
    GoalName: FName;
    BoneName: FName;
    InfluenceMultiplier: number;
}
declare const UIKRig_BodyMoverEffector: UIKRig_BodyMoverEffector;

declare interface UIKRig_FBIKBoneSettings extends UObject {
    bone: FName;
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
declare const UIKRig_FBIKBoneSettings: UIKRig_FBIKBoneSettings;

declare interface UIKRig_FBIKEffector extends UObject {
    GoalName: FName;
    BoneName: FName;
    ChainDepth: number;
    StrengthAlpha: number;
    PullChainAlpha: number;
    PinRotation: number;
}
declare const UIKRig_FBIKEffector: UIKRig_FBIKEffector;

declare interface UIKRig_LimbEffector extends UObject {
    GoalName: FName;
    BoneName: FName;
}
declare const UIKRig_LimbEffector: UIKRig_LimbEffector;

declare interface UIKRig_LimbSolver extends UIKRigSolver {
    RootName: FName;
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
}
declare const UIKRig_LimbSolver: UIKRig_LimbSolver;

declare interface UIKRig_PoleSolver extends UIKRigSolver {
    RootName: FName;
    EndName: FName;
    Effector: UIKRig_PoleSolverEffector;
}
declare const UIKRig_PoleSolver: UIKRig_PoleSolver;

declare interface UIKRig_PoleSolverEffector extends UObject {
    GoalName: FName;
    BoneName: FName;
    alpha: number;
}
declare const UIKRig_PoleSolverEffector: UIKRig_PoleSolverEffector;

declare interface UIKRig_SetTransform extends UIKRigSolver {
    Goal: FName;
    RootBone: FName;
    Effector: UIKRig_SetTransformEffector;
}
declare const UIKRig_SetTransform: UIKRig_SetTransform;

declare interface UIKRig_SetTransformEffector extends UObject {
    bEnablePosition: boolean;
    bEnableRotation: boolean;
    alpha: number;
}
declare const UIKRig_SetTransformEffector: UIKRig_SetTransformEffector;

declare interface UPinBoneOp extends URetargetOpBase {
    BonesToPin: TArray<FPinBoneData>;
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
}
declare const UPinBoneOp: UPinBoneOp;

declare interface URetargetChainSettings extends UObject {
    SourceChain: FName;
    TargetChain: FName;
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
    SpeedCurveName: FName;
    VelocityThreshold: number;
    UnplantStiffness: number;
    UnplantCriticalDamping: number;
}
declare const URetargetChainSettings: URetargetChainSettings;

declare interface URetargetOpBase extends UObject {
    bIsEnabled: boolean;
}
declare const URetargetOpBase: URetargetOpBase;

declare interface URetargetOpStack extends UObject {
    RetargetOps: TArray<URetargetOpBase>;
}
declare const URetargetOpStack: URetargetOpStack;

declare interface URetargetProfileLibrary extends UBlueprintFunctionLibrary {
    GetOpControllerFromRetargetProfile(InRetargetProfile: FRetargetProfile, InRetargetOpName: FName): UIKRetargetOpControllerBase;
    CopyRetargetProfileFromRetargetAsset(InRetargetAsset: UIKRetargeter): FRetargetProfile;
}
declare const URetargetProfileLibrary: URetargetProfileLibrary;

declare interface URetargetRootSettings extends UObject {
    Settings: FTargetRootSettings;
    RetargetRootTranslation: boolean;
    GlobalScaleHorizontal: number;
    GlobalScaleVertical: number;
    BlendToSource: FVector;
    StaticOffset: FVector;
    StaticRotationOffset: FRotator;
}
declare const URetargetRootSettings: URetargetRootSettings;

declare interface URootMotionGeneratorOp extends URetargetOpBase {
    SourceRootBone: FName;
    TargetRootBone: FName;
    TargetPelvisBone: FName;
    RootMotionSource: ERootMotionSource;
    RootHeightSource: ERootMotionHeightSource;
    bPropagateToNonRetargetedChildren: boolean;
    bMaintainOffsetFromPelvis: boolean;
    bRotateWithPelvis: boolean;
    GlobalOffset: FTransform;
}
declare const URootMotionGeneratorOp: URootMotionGeneratorOp;

