declare interface FPBIKBoneSetting {
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
declare const FPBIKBoneSetting: FPBIKBoneSetting;

declare interface FPBIKDebug {
    DrawScale: number;
    bDrawDebug: boolean;
}
declare const FPBIKDebug: FPBIKDebug;

declare interface FPBIKEffector {
    bone: FName;
    Transform: FTransform;
    PositionAlpha: number;
    RotationAlpha: number;
    StrengthAlpha: number;
    ChainDepth: number;
    PullChainAlpha: number;
    PinRotation: number;
}
declare const FPBIKEffector: FPBIKEffector;

declare interface FPBIKSolver {

}
declare const FPBIKSolver: FPBIKSolver;

declare interface FPBIKSolverSettings {
    Iterations: number;
    SubIterations: number;
    MassMultiplier: number;
    bAllowStretch: boolean;
    RootBehavior: EPBIKRootBehavior;
    PrePullRootSettings: FRootPrePullSettings;
    GlobalPullChainAlpha: number;
    MaxAngle: number;
    OverRelaxation: number;
    bStartSolveFromInputPose: boolean;
}
declare const FPBIKSolverSettings: FPBIKSolverSettings;

declare interface FPBIKWorkData {
    bNeedsInit: boolean;
    HashInitializedWith: uint32;
    BoneSettingToSolverBoneIndex: TArray<number>;
    SolverBoneToElementIndex: TArray<number>;
    Solver: FPBIKSolver;
}
declare const FPBIKWorkData: FPBIKWorkData;

declare interface FRigUnit_PBIK extends FRigUnit_HighlevelBaseMutable {
    Root: FName;
    Effectors: TArray<FPBIKEffector>;
    EffectorSolverIndices: TArray<number>;
    BoneSettings: TArray<FPBIKBoneSetting>;
    ExcludedBones: TArray<FName>;
    Settings: FPBIKSolverSettings;
    Debug: FPBIKDebug;
    WorkData: FPBIKWorkData;
}
declare const FRigUnit_PBIK: FRigUnit_PBIK;

declare interface FRootPrePullSettings {
    RotationAlpha: number;
    RotationAlphaX: number;
    RotationAlphaY: number;
    RotationAlphaZ: number;
    PositionAlpha: number;
    PositionAlphaX: number;
    PositionAlphaY: number;
    PositionAlphaZ: number;
}
declare const FRootPrePullSettings: FRootPrePullSettings;

