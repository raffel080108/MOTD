declare interface FFBIKBoneLimit {
    LimitType_X: EFBIKBoneLimitType;
    LimitType_Y: EFBIKBoneLimitType;
    LimitType_Z: EFBIKBoneLimitType;
    Limit: FVector;
}

declare interface FFBIKConstraintOption {
    Item: FRigElementKey;
    bEnabled: boolean;
    bUseStiffness: boolean;
    LinearStiffness: FVector;
    AngularStiffness: FVector;
    bUseAngularLimit: boolean;
    AngularLimit: FFBIKBoneLimit;
    bUsePoleVector: boolean;
    PoleVectorOption: EPoleVectorOption;
    PoleVector: FVector;
    OffsetRotation: FRotator;
}

declare interface FFBIKDebugOption {
    bDrawDebugHierarchy: boolean;
    bColorAngularMotionStrength: boolean;
    bColorLinearMotionStrength: boolean;
    bDrawDebugAxes: boolean;
    bDrawDebugEffector: boolean;
    bDrawDebugConstraints: boolean;
    DrawWorldOffset: FTransform;
    DrawSize: number;
}

declare interface FFBIKEndEffector {
    Item: FRigElementKey;
    position: FVector;
    PositionAlpha: number;
    PositionDepth: number;
    Rotation: FQuat;
    RotationAlpha: number;
    RotationDepth: number;
    Pull: number;
}

declare interface FMotionProcessInput {
    bForceEffectorRotationTarget: boolean;
    bOnlyApplyWhenReachedToTarget: boolean;
}

declare interface FRigUnit_FullbodyIK extends FRigUnit_HighlevelBaseMutable {
    Root: FRigElementKey;
    Effectors: FFBIKEndEffector[];
    Constraints: FFBIKConstraintOption[];
    SolverProperty: FSolverInput;
    MotionProperty: FMotionProcessInput;
    bPropagateToChildren: boolean;
    DebugOption: FFBIKDebugOption;
    WorkData: FRigUnit_FullbodyIK_WorkData;
}

declare type FRigUnit_FullbodyIK_WorkData = object;

declare interface FSolverInput {
    LinearMotionStrength: number;
    MinLinearMotionStrength: number;
    AngularMotionStrength: number;
    MinAngularMotionStrength: number;
    DefaultTargetClamp: number;
    Precision: number;
    Damping: number;
    MaxIterations: number;
    bUseJacobianTranspose: boolean;
}

