declare type FControlRigSpline = object;

declare type FControlRigSplineImpl = object;

declare interface FRigUnit_ClosestParameterFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    position: FVector;
    U: number;
}

declare interface FRigUnit_ControlRigSplineBase extends FRigUnit {

}

declare interface FRigUnit_ControlRigSplineFromPoints extends FRigUnit_ControlRigSplineBase {
    Points: FVector[];
    SplineMode: ESplineType;
    bClosed: boolean;
    SamplesPerSegment: number;
    Compression: number;
    Stretch: number;
    Spline: FControlRigSpline;
}

declare interface FRigUnit_ControlRigSplineFromTransforms extends FRigUnit_ControlRigSplineBase {
    Transforms: FTransform[];
    SplineMode: ESplineType;
    bClosed: boolean;
    SamplesPerSegment: number;
    Compression: number;
    Stretch: number;
    Spline: FControlRigSpline;
}

declare interface FRigUnit_DrawControlRigSpline extends FRigUnitMutable {
    Spline: FControlRigSpline;
    Color: FLinearColor;
    Thickness: number;
    Detail: number;
}

declare interface FRigUnit_FitChainToSplineCurve extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    Spline: FControlRigSpline;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: FRigUnit_FitChainToCurve_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}

declare interface FRigUnit_FitChainToSplineCurveItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    Spline: FControlRigSpline;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: FRigUnit_FitChainToCurve_Rotation[];
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}

declare interface FRigUnit_FitSplineCurveToChain extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    Spline: FControlRigSpline;
}

declare interface FRigUnit_FitSplineCurveToChainItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    Spline: FControlRigSpline;
}

declare interface FRigUnit_GetLengthAtParamControlRigSpline extends FRigUnit {
    Spline: FControlRigSpline;
    U: number;
    Length: number;
}

declare interface FRigUnit_GetLengthControlRigSpline extends FRigUnit {
    Spline: FControlRigSpline;
    Length: number;
}

declare interface FRigUnit_ParameterAtPercentage extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    percentage: number;
    U: number;
}

declare interface FRigUnit_PositionFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    U: number;
    position: FVector;
}

declare interface FRigUnit_SetSplinePoints extends FRigUnitMutable {
    Points: FVector[];
    Spline: FControlRigSpline;
}

declare interface FRigUnit_SetSplineTransforms extends FRigUnitMutable {
    Transforms: FTransform[];
    Spline: FControlRigSpline;
}

declare interface FRigUnit_SplineConstraint extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKey[];
    Spline: FControlRigSpline;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SplineConstraint_WorkData;
}

declare interface FRigUnit_SplineConstraint_WorkData {
    ChainLength: number;
    ItemTransforms: FTransform[];
    ItemSegments: number[];
    CachedItems: FCachedRigElement[];
}

declare interface FRigUnit_TangentFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    U: number;
    Tangent: FVector;
}

declare interface FRigUnit_TransformFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    UpVector: FVector;
    Roll: number;
    U: number;
    Transform: FTransform;
}

declare interface FRigUnit_TransformFromControlRigSpline2 extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    U: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    Transform: FTransform;
}

