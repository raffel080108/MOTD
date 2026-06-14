declare interface FControlRigSpline {

}
declare const FControlRigSpline: FControlRigSpline;

declare interface FControlRigSplineImpl {

}
declare const FControlRigSplineImpl: FControlRigSplineImpl;

declare interface FRigUnit_ClosestParameterFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    position: FVector;
    U: number;
}
declare const FRigUnit_ClosestParameterFromControlRigSpline: FRigUnit_ClosestParameterFromControlRigSpline;

declare interface FRigUnit_ControlRigSplineBase extends FRigUnit {

}
declare const FRigUnit_ControlRigSplineBase: FRigUnit_ControlRigSplineBase;

declare interface FRigUnit_ControlRigSplineFromPoints extends FRigUnit_ControlRigSplineBase {
    Points: TArray<FVector>;
    SplineMode: ESplineType;
    bClosed: boolean;
    SamplesPerSegment: number;
    Compression: number;
    Stretch: number;
    Spline: FControlRigSpline;
}
declare const FRigUnit_ControlRigSplineFromPoints: FRigUnit_ControlRigSplineFromPoints;

declare interface FRigUnit_ControlRigSplineFromTransforms extends FRigUnit_ControlRigSplineBase {
    Transforms: TArray<FTransform>;
    SplineMode: ESplineType;
    bClosed: boolean;
    SamplesPerSegment: number;
    Compression: number;
    Stretch: number;
    Spline: FControlRigSpline;
}
declare const FRigUnit_ControlRigSplineFromTransforms: FRigUnit_ControlRigSplineFromTransforms;

declare interface FRigUnit_DrawControlRigSpline extends FRigUnitMutable {
    Spline: FControlRigSpline;
    Color: FLinearColor;
    Thickness: number;
    Detail: number;
}
declare const FRigUnit_DrawControlRigSpline: FRigUnit_DrawControlRigSpline;

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
    Rotations: TArray<FRigUnit_FitChainToCurve_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}
declare const FRigUnit_FitChainToSplineCurve: FRigUnit_FitChainToSplineCurve;

declare interface FRigUnit_FitChainToSplineCurveItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    Spline: FControlRigSpline;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    SamplingPrecision: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    PoleVectorPosition: FVector;
    Rotations: TArray<FRigUnit_FitChainToCurve_Rotation>;
    RotationEaseType: ERigVMAnimEasingType;
    Weight: number;
    bPropagateToChildren: boolean;
    DebugSettings: FRigUnit_FitChainToCurve_DebugSettings;
    WorkData: FRigUnit_FitChainToCurve_WorkData;
}
declare const FRigUnit_FitChainToSplineCurveItemArray: FRigUnit_FitChainToSplineCurveItemArray;

declare interface FRigUnit_FitSplineCurveToChain extends FRigUnit_HighlevelBaseMutable {
    Items: FRigElementKeyCollection;
    Spline: FControlRigSpline;
}
declare const FRigUnit_FitSplineCurveToChain: FRigUnit_FitSplineCurveToChain;

declare interface FRigUnit_FitSplineCurveToChainItemArray extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    Spline: FControlRigSpline;
}
declare const FRigUnit_FitSplineCurveToChainItemArray: FRigUnit_FitSplineCurveToChainItemArray;

declare interface FRigUnit_GetLengthAtParamControlRigSpline extends FRigUnit {
    Spline: FControlRigSpline;
    U: number;
    Length: number;
}
declare const FRigUnit_GetLengthAtParamControlRigSpline: FRigUnit_GetLengthAtParamControlRigSpline;

declare interface FRigUnit_GetLengthControlRigSpline extends FRigUnit {
    Spline: FControlRigSpline;
    Length: number;
}
declare const FRigUnit_GetLengthControlRigSpline: FRigUnit_GetLengthControlRigSpline;

declare interface FRigUnit_ParameterAtPercentage extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    percentage: number;
    U: number;
}
declare const FRigUnit_ParameterAtPercentage: FRigUnit_ParameterAtPercentage;

declare interface FRigUnit_PositionFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    U: number;
    position: FVector;
}
declare const FRigUnit_PositionFromControlRigSpline: FRigUnit_PositionFromControlRigSpline;

declare interface FRigUnit_SetSplinePoints extends FRigUnitMutable {
    Points: TArray<FVector>;
    Spline: FControlRigSpline;
}
declare const FRigUnit_SetSplinePoints: FRigUnit_SetSplinePoints;

declare interface FRigUnit_SetSplineTransforms extends FRigUnitMutable {
    Transforms: TArray<FTransform>;
    Spline: FControlRigSpline;
}
declare const FRigUnit_SetSplineTransforms: FRigUnit_SetSplineTransforms;

declare interface FRigUnit_SplineConstraint extends FRigUnit_HighlevelBaseMutable {
    Items: TArray<FRigElementKey>;
    Spline: FControlRigSpline;
    Alignment: EControlRigCurveAlignment;
    Minimum: number;
    Maximum: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    bPropagateToChildren: boolean;
    WorkData: FRigUnit_SplineConstraint_WorkData;
}
declare const FRigUnit_SplineConstraint: FRigUnit_SplineConstraint;

declare interface FRigUnit_SplineConstraint_WorkData {
    ChainLength: number;
    ItemTransforms: TArray<FTransform>;
    ItemSegments: TArray<number>;
    CachedItems: TArray<FCachedRigElement>;
}
declare const FRigUnit_SplineConstraint_WorkData: FRigUnit_SplineConstraint_WorkData;

declare interface FRigUnit_TangentFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    U: number;
    Tangent: FVector;
}
declare const FRigUnit_TangentFromControlRigSpline: FRigUnit_TangentFromControlRigSpline;

declare interface FRigUnit_TransformFromControlRigSpline extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    UpVector: FVector;
    Roll: number;
    U: number;
    Transform: FTransform;
}
declare const FRigUnit_TransformFromControlRigSpline: FRigUnit_TransformFromControlRigSpline;

declare interface FRigUnit_TransformFromControlRigSpline2 extends FRigUnit_ControlRigSplineBase {
    Spline: FControlRigSpline;
    U: number;
    PrimaryAxis: FVector;
    SecondaryAxis: FVector;
    Transform: FTransform;
}
declare const FRigUnit_TransformFromControlRigSpline2: FRigUnit_TransformFromControlRigSpline2;

