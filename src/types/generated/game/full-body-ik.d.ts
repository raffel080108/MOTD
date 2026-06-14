declare interface FFBIKBoneLimit {
    LimitType_X: EFBIKBoneLimitType;
    LimitType_Y: EFBIKBoneLimitType;
    LimitType_Z: EFBIKBoneLimitType;
    Limit: FVector;
}
declare const FFBIKBoneLimit: FFBIKBoneLimit;

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
declare const FFBIKConstraintOption: FFBIKConstraintOption;

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
declare const FFBIKDebugOption: FFBIKDebugOption;

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
declare const FFBIKEndEffector: FFBIKEndEffector;

declare interface FMotionProcessInput {
    bForceEffectorRotationTarget: boolean;
    bOnlyApplyWhenReachedToTarget: boolean;
}
declare const FMotionProcessInput: FMotionProcessInput;

declare interface FRigUnit_FullbodyIK extends FRigUnit_HighlevelBaseMutable {
    Root: FRigElementKey;
    Effectors: TArray<FFBIKEndEffector>;
    Constraints: TArray<FFBIKConstraintOption>;
    SolverProperty: FSolverInput;
    MotionProperty: FMotionProcessInput;
    bPropagateToChildren: boolean;
    DebugOption: FFBIKDebugOption;
    WorkData: FRigUnit_FullbodyIK_WorkData;
}
declare const FRigUnit_FullbodyIK: FRigUnit_FullbodyIK;

declare interface FRigUnit_FullbodyIK_WorkData {

}
declare const FRigUnit_FullbodyIK_WorkData: FRigUnit_FullbodyIK_WorkData;

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
declare const FSolverInput: FSolverInput;

