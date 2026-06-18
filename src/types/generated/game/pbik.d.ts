declare interface FPBIKBoneSetting {
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
}

declare interface FPBIKDebug {
    DrawScale: number;
    bDrawDebug: boolean;
}

declare interface FPBIKEffector {
    bone: string;
    Transform: FTransform;
    PositionAlpha: number;
    RotationAlpha: number;
    StrengthAlpha: number;
    ChainDepth: number;
    PullChainAlpha: number;
    PinRotation: number;
}

declare type FPBIKSolver = object;

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

declare interface FPBIKWorkData {
    bNeedsInit: boolean;
    HashInitializedWith: number;
    BoneSettingToSolverBoneIndex: number[];
    SolverBoneToElementIndex: number[];
    Solver: FPBIKSolver;
}

declare interface FRigUnit_PBIK extends FRigUnit_HighlevelBaseMutable {
    Root: string;
    Effectors: FPBIKEffector[];
    EffectorSolverIndices: number[];
    BoneSettings: FPBIKBoneSetting[];
    ExcludedBones: string[];
    Settings: FPBIKSolverSettings;
    Debug: FPBIKDebug;
    WorkData: FPBIKWorkData;
}

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

