declare interface FMathRBFInterpolateQuatColor_Target {
    Target: FQuat;
    Value: FLinearColor;
}

declare interface FMathRBFInterpolateQuatFloat_Target {
    Target: FQuat;
    Value: number;
}

declare interface FMathRBFInterpolateQuatQuat_Target {
    Target: FQuat;
    Value: FQuat;
}

declare interface FMathRBFInterpolateQuatVector_Target {
    Target: FQuat;
    Value: FVector;
}

declare interface FMathRBFInterpolateQuatXform_Target {
    Target: FQuat;
    Value: FTransform;
}

declare interface FMathRBFInterpolateVectorColor_Target {
    Target: FVector;
    Value: FLinearColor;
}

declare interface FMathRBFInterpolateVectorFloat_Target {
    Target: FVector;
    Value: number;
}

declare interface FMathRBFInterpolateVectorQuat_Target {
    Target: FVector;
    Value: FQuat;
}

declare interface FMathRBFInterpolateVectorVector_Target {
    Target: FVector;
    Value: FVector;
}

declare interface FMathRBFInterpolateVectorXform_Target {
    Target: FVector;
    Value: FTransform;
}

declare interface FRigDispatch_FromString extends FRigVMDispatchFactory {

}

declare interface FRigDispatch_ToString extends FRigVMDispatchFactory {

}

declare type FRigVMBaseOp = object;

declare interface FRigVMBinaryOp extends FRigVMBaseOp {

}

declare interface FRigVMBranchInfo {
    Index: number;
    Label: string;
    InstructionIndex: number;
    ArgumentIndex: number;
    FirstInstruction: number;
    LastInstruction: number;
}

declare type FRigVMBreakpoint = object;

declare interface FRigVMByteCode {
    ByteCode: number[];
    NumInstructions: number;
    Entries: FRigVMByteCodeEntry[];
    BranchInfos: FRigVMBranchInfo[];
    PredicateBranches: FRigVMPredicateBranch[];
    PublicContextAssetPath: FTopLevelAssetPath;
}

declare interface FRigVMByteCodeEntry {
    Name: string;
    InstructionIndex: number;
}

declare interface FRigVMByteCodeStatistics {
    InstructionCount: number;
    DataBytes: number;
}

declare interface FRigVMChangeTypeOp extends FRigVMUnaryOp {

}

declare interface FRigVMComparisonOp extends FRigVMBaseOp {

}

declare interface FRigVMCopyOp extends FRigVMBaseOp {

}

declare interface FRigVMDebugDrawSettings {
    DepthPriority: ESceneDepthPriorityGroup;
    Lifetime: number;
}

declare type FRigVMDebugInfo = object;

declare type FRigVMDispatchFactory = object;

declare interface FRigVMDispatch_ArrayAdd extends FRigVMDispatch_ArraySetAtIndex {

}

declare interface FRigVMDispatch_ArrayAppend extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArrayBase extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDispatch_ArrayBaseMutable extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayClone extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayDifference extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayFind extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayGetAtIndex extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayGetNum extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayInit extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArrayInsert extends FRigVMDispatch_ArraySetAtIndex {

}

declare interface FRigVMDispatch_ArrayIntersection extends FRigVMDispatch_ArrayDifference {

}

declare interface FRigVMDispatch_ArrayIterator extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArrayMake extends FRigVMDispatch_ArrayBase {

}

declare interface FRigVMDispatch_ArrayRemove extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArrayReset extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArrayReverse extends FRigVMDispatch_ArrayReset {

}

declare interface FRigVMDispatch_ArraySetAtIndex extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArraySetNum extends FRigVMDispatch_ArrayBaseMutable {

}

declare interface FRigVMDispatch_ArrayUnion extends FRigVMDispatch_ArrayAppend {

}

declare interface FRigVMDispatch_BreakStruct extends FRigVMDispatch_MakeStruct {

}

declare interface FRigVMDispatch_CastEnumToInt extends FRigVMDispatchFactory {

}

declare interface FRigVMDispatch_CastIntToEnum extends FRigVMDispatchFactory {

}

declare interface FRigVMDispatch_CastObject extends FRigVMDispatchFactory {

}

declare interface FRigVMDispatch_Constant extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDispatch_CoreBase extends FRigVMDispatchFactory {

}

declare interface FRigVMDispatch_CoreEquals extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDispatch_CoreNotEquals extends FRigVMDispatch_CoreEquals {

}

declare interface FRigVMDispatch_If extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDispatch_MakeStruct extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDispatch_Print extends FRigVMDispatchFactory {

}

declare interface FRigVMDispatch_SelectInt32 extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDispatch_SwitchInt32 extends FRigVMDispatch_CoreBase {

}

declare interface FRigVMDrawContainer {
    Instructions: FRigVMDrawInstruction[];
}

declare interface FRigVMDrawInstruction {
    Name: string;
    PrimitiveType: ERigVMDrawSettings;
    Positions: FVector[];
    Color: FLinearColor;
    Thickness: number;
    Transform: FTransform;
    DepthPriority: ESceneDepthPriorityGroup;
    Lifetime: number;
}

declare interface FRigVMDrawInterface extends FRigVMDrawContainer {

}

declare interface FRigVMExecuteContext extends FRigVMExecutePin {

}

declare interface FRigVMExecuteOp extends FRigVMBaseOp {

}

declare type FRigVMExecutePin = object;

declare type FRigVMExtendedExecuteContext = object;

declare interface FRigVMExternalVariable extends FRigVMExternalVariableDef {

}

declare type FRigVMExternalVariableDef = object;

declare interface FRigVMFourPointBezier {
    A: FVector;
    B: FVector;
    C: FVector;
    D: FVector;
}

declare interface FRigVMFunctionCompilationData {
    ByteCode: FRigVMByteCode;
    FunctionNames: string[];
    WorkPropertyDescriptions: FRigVMFunctionCompilationPropertyDescription[];
    WorkPropertyPathDescriptions: FRigVMFunctionCompilationPropertyPath[];
    LiteralPropertyDescriptions: FRigVMFunctionCompilationPropertyDescription[];
    LiteralPropertyPathDescriptions: FRigVMFunctionCompilationPropertyPath[];
    DebugPropertyDescriptions: FRigVMFunctionCompilationPropertyDescription[];
    DebugPropertyPathDescriptions: FRigVMFunctionCompilationPropertyPath[];
    ExternalPropertyDescriptions: FRigVMFunctionCompilationPropertyDescription[];
    ExternalPropertyPathDescriptions: FRigVMFunctionCompilationPropertyPath[];
    ExternalRegisterIndexToVariable: TMap<number, string>;
    Operands: TMap<string, FRigVMOperand>;
    Hash: number;
    bEncounteredSurpressedErrors: boolean;
}

declare interface FRigVMFunctionCompilationPropertyDescription {
    Name: string;
    CPPType: string;
    CPPTypeObject: TSoftObjectPtr<UObject>;
    DefaultValue: string;
}

declare interface FRigVMFunctionCompilationPropertyPath {
    PropertyIndex: number;
    HeadCPPType: string;
    SegmentPath: string;
}

declare interface FRigVMFunction_AccumulateBase extends FRigVMFunction_SimBase {

}

declare interface FRigVMFunction_AccumulateFloatAdd extends FRigVMFunction_AccumulateBase {
    Increment: number;
    InitialValue: number;
    bIntegrateDeltaTime: boolean;
    Result: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateFloatLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: number;
    InitialValue: number;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateFloatMul extends FRigVMFunction_AccumulateBase {
    Multiplier: number;
    InitialValue: number;
    bIntegrateDeltaTime: boolean;
    Result: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateFloatRange extends FRigVMFunction_AccumulateBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    AccumulatedMinimum: number;
    AccumulatedMaximum: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateQuatLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: FQuat;
    InitialValue: FQuat;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: FQuat;
    AccumulatedValue: FQuat;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateQuatMul extends FRigVMFunction_AccumulateBase {
    Multiplier: FQuat;
    InitialValue: FQuat;
    bFlipOrder: boolean;
    bIntegrateDeltaTime: boolean;
    Result: FQuat;
    AccumulatedValue: FQuat;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateTransformLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: FTransform;
    InitialValue: FTransform;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: FTransform;
    AccumulatedValue: FTransform;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateTransformMul extends FRigVMFunction_AccumulateBase {
    Multiplier: FTransform;
    InitialValue: FTransform;
    bFlipOrder: boolean;
    bIntegrateDeltaTime: boolean;
    Result: FTransform;
    AccumulatedValue: FTransform;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateVectorAdd extends FRigVMFunction_AccumulateBase {
    Increment: FVector;
    InitialValue: FVector;
    bIntegrateDeltaTime: boolean;
    Result: FVector;
    AccumulatedValue: FVector;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateVectorLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: FVector;
    InitialValue: FVector;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: FVector;
    AccumulatedValue: FVector;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateVectorMul extends FRigVMFunction_AccumulateBase {
    Multiplier: FVector;
    InitialValue: FVector;
    bIntegrateDeltaTime: boolean;
    Result: FVector;
    AccumulatedValue: FVector;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AccumulateVectorRange extends FRigVMFunction_AccumulateBase {
    Value: FVector;
    Minimum: FVector;
    Maximum: FVector;
    AccumulatedMinimum: FVector;
    AccumulatedMaximum: FVector;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_AlphaInterp extends FRigVMFunction_SimBase {
    Value: number;
    Scale: number;
    Bias: number;
    bMapRange: boolean;
    InRange: FInputRange;
    OutRange: FInputRange;
    bClampResult: boolean;
    ClampMin: number;
    ClampMax: number;
    bInterpResult: boolean;
    InterpSpeedIncreasing: number;
    InterpSpeedDecreasing: number;
    Result: number;
    ScaleBiasClamp: FInputScaleBiasClamp;
}

declare interface FRigVMFunction_AlphaInterpQuat extends FRigVMFunction_SimBase {
    Value: FQuat;
    Scale: number;
    Bias: number;
    bMapRange: boolean;
    InRange: FInputRange;
    OutRange: FInputRange;
    bClampResult: boolean;
    ClampMin: number;
    ClampMax: number;
    bInterpResult: boolean;
    InterpSpeedIncreasing: number;
    InterpSpeedDecreasing: number;
    Result: FQuat;
    ScaleBiasClamp: FInputScaleBiasClamp;
}

declare interface FRigVMFunction_AlphaInterpVector extends FRigVMFunction_SimBase {
    Value: FVector;
    Scale: number;
    Bias: number;
    bMapRange: boolean;
    InRange: FInputRange;
    OutRange: FInputRange;
    bClampResult: boolean;
    ClampMin: number;
    ClampMax: number;
    bInterpResult: boolean;
    InterpSpeedIncreasing: number;
    InterpSpeedDecreasing: number;
    Result: FVector;
    ScaleBiasClamp: FInputScaleBiasClamp;
}

declare interface FRigVMFunction_AnimBase extends FRigVMStruct {

}

declare interface FRigVMFunction_AnimEasing extends FRigVMFunction_AnimBase {
    Value: number;
    Type: ERigVMAnimEasingType;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    Result: number;
}

declare interface FRigVMFunction_AnimEasingType extends FRigVMFunction_AnimBase {
    Type: ERigVMAnimEasingType;
}

declare interface FRigVMFunction_AnimEvalRichCurve extends FRigVMFunction_AnimBase {
    Value: number;
    Curve: FRuntimeFloatCurve;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    Result: number;
}

declare interface FRigVMFunction_AnimRichCurve extends FRigVMFunction_AnimBase {
    Curve: FRuntimeFloatCurve;
}

declare interface FRigVMFunction_Contains extends FRigVMFunction_NameBase {
    Name: string;
    Search: string;
    Result: boolean;
}

declare interface FRigVMFunction_ControlFlowBase extends FRigVMStruct {

}

declare interface FRigVMFunction_ControlFlowBranch extends FRigVMFunction_ControlFlowBase {
    ExecuteContext: FRigVMExecuteContext;
    Condition: boolean;
    TRUE: FRigVMExecuteContext;
    FALSE: FRigVMExecuteContext;
    Completed: FRigVMExecuteContext;
    BlockToRun: string;
}

declare interface FRigVMFunction_DebugArc extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Radius: number;
    MinimumDegrees: number;
    MaximumDegrees: number;
    Thickness: number;
    Detail: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugArcNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Radius: number;
    MinimumDegrees: number;
    MaximumDegrees: number;
    Thickness: number;
    Detail: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugBase extends FRigVMStruct {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}

declare interface FRigVMFunction_DebugBaseMutable extends FRigVMStructMutable {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}

declare interface FRigVMFunction_DebugBoxNoSpace extends FRigVMFunction_DebugBaseMutable {
    Box: FBox;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugLineNoSpace extends FRigVMFunction_DebugBaseMutable {
    A: FVector;
    B: FVector;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugLineStripNoSpace extends FRigVMFunction_DebugBaseMutable {
    Points: FVector[];
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugPoint extends FRigVMFunction_DebugBase {
    Vector: FVector;
    Mode: ERigUnitDebugPointMode;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugPointMutable extends FRigVMFunction_DebugBaseMutable {
    Vector: FVector;
    Mode: ERigUnitDebugPointMode;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugRectangle extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: string;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugRectangleNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugTransformArrayMutableNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transforms: FTransform[];
    ParentIndices: number[];
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DebugTransformArrayMutable_WorkData {
    DrawTransforms: FTransform[];
}

declare interface FRigVMFunction_DebugTransformMutableNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}

declare interface FRigVMFunction_DeltaFromPreviousFloat extends FRigVMFunction_SimBase {
    Value: number;
    Delta: number;
    PreviousValue: number;
    Cache: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_DeltaFromPreviousQuat extends FRigVMFunction_SimBase {
    Value: FQuat;
    Delta: FQuat;
    PreviousValue: FQuat;
    Cache: FQuat;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_DeltaFromPreviousTransform extends FRigVMFunction_SimBase {
    Value: FTransform;
    Delta: FTransform;
    PreviousValue: FTransform;
    Cache: FTransform;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_DeltaFromPreviousVector extends FRigVMFunction_SimBase {
    Value: FVector;
    Delta: FVector;
    PreviousValue: FVector;
    Cache: FVector;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_EndsWith extends FRigVMFunction_NameBase {
    Name: string;
    Ending: string;
    Result: boolean;
}

declare interface FRigVMFunction_ForLoopCount extends FRigVMStructMutable {
    BlockToRun: string;
    count: number;
    Index: number;
    Ratio: number;
    Completed: FRigVMExecuteContext;
}

declare interface FRigVMFunction_FramesToSeconds extends FRigVMFunction_AnimBase {
    Frames: number;
    Seconds: number;
}

declare interface FRigVMFunction_GetDeltaTime extends FRigVMFunction_AnimBase {
    Result: number;
}

declare interface FRigVMFunction_GetWorldTime extends FRigVMFunction_AnimBase {
    Year: number;
    Month: number;
    Day: number;
    WeekDay: number;
    Hours: number;
    Minutes: number;
    Seconds: number;
    OverallSeconds: number;
}

declare interface FRigVMFunction_IsHostBeingDebugged extends FRigVMStruct {
    Result: boolean;
}

declare interface FRigVMFunction_KalmanFloat extends FRigVMFunction_SimBase {
    Value: number;
    BufferSize: number;
    Result: number;
    Buffer: number[];
    LastInsertIndex: number;
}

declare interface FRigVMFunction_KalmanTransform extends FRigVMFunction_SimBase {
    Value: FTransform;
    BufferSize: number;
    Result: FTransform;
    Buffer: FTransform[];
    LastInsertIndex: number;
}

declare interface FRigVMFunction_KalmanVector extends FRigVMFunction_SimBase {
    Value: FVector;
    BufferSize: number;
    Result: FVector;
    Buffer: FVector[];
    LastInsertIndex: number;
}

declare interface FRigVMFunction_MathBase extends FRigVMStruct {

}

declare interface FRigVMFunction_MathBoolAnd extends FRigVMFunction_MathBoolBinaryAggregateOp {

}

declare interface FRigVMFunction_MathBoolBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathBoolBinaryAggregateOp extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}

declare interface FRigVMFunction_MathBoolBinaryOp extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}

declare interface FRigVMFunction_MathBoolConstFalse extends FRigVMFunction_MathBoolConstant {

}

declare interface FRigVMFunction_MathBoolConstTrue extends FRigVMFunction_MathBoolConstant {

}

declare interface FRigVMFunction_MathBoolConstant extends FRigVMFunction_MathBoolBase {
    Value: boolean;
}

declare interface FRigVMFunction_MathBoolEquals extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}

declare interface FRigVMFunction_MathBoolFlipFlop extends FRigVMFunction_MathBoolBase {
    StartValue: boolean;
    duration: number;
    Result: boolean;
    LastValue: boolean;
    TimeLeft: number;
}

declare interface FRigVMFunction_MathBoolMake extends FRigVMFunction_MathBoolBase {
    Value: boolean;
}

declare interface FRigVMFunction_MathBoolNand extends FRigVMFunction_MathBoolBinaryOp {

}

declare interface FRigVMFunction_MathBoolNand2 extends FRigVMFunction_MathBoolBinaryOp {

}

declare interface FRigVMFunction_MathBoolNot extends FRigVMFunction_MathBoolUnaryOp {

}

declare interface FRigVMFunction_MathBoolNotEquals extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}

declare interface FRigVMFunction_MathBoolOnce extends FRigVMFunction_MathBoolBase {
    duration: number;
    Result: boolean;
    LastValue: boolean;
    TimeLeft: number;
}

declare interface FRigVMFunction_MathBoolOr extends FRigVMFunction_MathBoolBinaryAggregateOp {

}

declare interface FRigVMFunction_MathBoolToFloat extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Result: number;
}

declare interface FRigVMFunction_MathBoolToInteger extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Result: number;
}

declare interface FRigVMFunction_MathBoolToggled extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Toggled: boolean;
    Initialized: boolean;
    LastValue: boolean;
}

declare interface FRigVMFunction_MathBoolUnaryOp extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Result: boolean;
}

declare interface FRigVMFunction_MathBoxBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathBoxExpand extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Amount: FVector;
    Result: FBox;
}

declare interface FRigVMFunction_MathBoxFromArray extends FRigVMFunction_MathBoxBase {
    Array: FVector[];
    Box: FBox;
    Minimum: FVector;
    Maximum: FVector;
    Center: FVector;
    Size: FVector;
}

declare interface FRigVMFunction_MathBoxGetCenter extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Center: FVector;
}

declare interface FRigVMFunction_MathBoxGetDistance extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    position: FVector;
    Square: boolean;
    Valid: boolean;
    Distance: number;
}

declare interface FRigVMFunction_MathBoxGetSize extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Size: FVector;
    Extent: FVector;
}

declare interface FRigVMFunction_MathBoxGetVolume extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Volume: number;
}

declare interface FRigVMFunction_MathBoxIsInside extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    position: FVector;
    Result: boolean;
}

declare interface FRigVMFunction_MathBoxIsValid extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Valid: boolean;
}

declare interface FRigVMFunction_MathBoxMoveTo extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Center: FVector;
    Result: FBox;
}

declare interface FRigVMFunction_MathBoxShift extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Amount: FVector;
    Result: FBox;
}

declare interface FRigVMFunction_MathBoxTransform extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Transform: FTransform;
    Result: FBox;
}

declare interface FRigVMFunction_MathColorAdd extends FRigVMFunction_MathColorBinaryAggregateOp {

}

declare interface FRigVMFunction_MathColorBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathColorBinaryAggregateOp extends FRigVMFunction_MathColorBase {
    A: FLinearColor;
    B: FLinearColor;
    Result: FLinearColor;
}

declare interface FRigVMFunction_MathColorBinaryOp extends FRigVMFunction_MathColorBase {
    A: FLinearColor;
    B: FLinearColor;
    Result: FLinearColor;
}

declare interface FRigVMFunction_MathColorFromDouble extends FRigVMFunction_MathColorBase {
    Value: number;
    Result: FLinearColor;
}

declare interface FRigVMFunction_MathColorFromFloat extends FRigVMFunction_MathColorBase {
    Value: number;
    Result: FLinearColor;
}

declare interface FRigVMFunction_MathColorLerp extends FRigVMFunction_MathColorBase {
    A: FLinearColor;
    B: FLinearColor;
    T: number;
    Result: FLinearColor;
}

declare interface FRigVMFunction_MathColorMake extends FRigVMFunction_MathColorBase {
    R: number;
    G: number;
    B: number;
    A: number;
    Result: FLinearColor;
}

declare interface FRigVMFunction_MathColorMul extends FRigVMFunction_MathColorBinaryAggregateOp {

}

declare interface FRigVMFunction_MathColorSub extends FRigVMFunction_MathColorBinaryOp {

}

declare interface FRigVMFunction_MathDistanceToPlane extends FRigVMFunction_MathVectorBase {
    Point: FVector;
    PlanePoint: FVector;
    PlaneNormal: FVector;
    ClosestPointOnPlane: FVector;
    SignedDistance: number;
}

declare interface FRigVMFunction_MathDoubleAbs extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleAcos extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleAdd extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}

declare interface FRigVMFunction_MathDoubleArrayAverage extends FRigVMFunction_MathDoubleBase {
    Array: number[];
    Average: number;
}

declare interface FRigVMFunction_MathDoubleArraySum extends FRigVMFunction_MathDoubleBase {
    Array: number[];
    Sum: number;
}

declare interface FRigVMFunction_MathDoubleAsin extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleAtan extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleAtan2 extends FRigVMFunction_MathDoubleBinaryOp {

}

declare interface FRigVMFunction_MathDoubleBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathDoubleBinaryAggregateOp extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleBinaryOp extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleCeil extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
    int: number;
}

declare interface FRigVMFunction_MathDoubleClamp extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleConstE extends FRigVMFunction_MathDoubleConstant {

}

declare interface FRigVMFunction_MathDoubleConstHalfPi extends FRigVMFunction_MathDoubleConstant {

}

declare interface FRigVMFunction_MathDoubleConstPi extends FRigVMFunction_MathDoubleConstant {

}

declare interface FRigVMFunction_MathDoubleConstTwoPi extends FRigVMFunction_MathDoubleConstant {

}

declare interface FRigVMFunction_MathDoubleConstant extends FRigVMFunction_MathDoubleBase {
    Value: number;
}

declare interface FRigVMFunction_MathDoubleCos extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleDeg extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleDiv extends FRigVMFunction_MathDoubleBinaryOp {

}

declare interface FRigVMFunction_MathDoubleEquals extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleExponential extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleFloor extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
    int: number;
}

declare interface FRigVMFunction_MathDoubleGreater extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleGreaterEqual extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleIsNearlyEqual extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Tolerance: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleIsNearlyZero extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Tolerance: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleLawOfCosine extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    C: number;
    AlphaAngle: number;
    BetaAngle: number;
    GammaAngle: number;
    bValid: boolean;
}

declare interface FRigVMFunction_MathDoubleLerp extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    T: number;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleLess extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleLessEqual extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoubleMake extends FRigVMFunction_MathDoubleBase {
    Value: number;
}

declare interface FRigVMFunction_MathDoubleMax extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}

declare interface FRigVMFunction_MathDoubleMin extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}

declare interface FRigVMFunction_MathDoubleMod extends FRigVMFunction_MathDoubleBinaryOp {

}

declare interface FRigVMFunction_MathDoubleMul extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}

declare interface FRigVMFunction_MathDoubleNegate extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleNotEquals extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathDoublePow extends FRigVMFunction_MathDoubleBinaryOp {

}

declare interface FRigVMFunction_MathDoubleRad extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleRemap extends FRigVMFunction_MathDoubleBase {
    Value: number;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    bClamp: boolean;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleRound extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
    int: number;
}

declare interface FRigVMFunction_MathDoubleSign extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleSin extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleSqrt extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleSub extends FRigVMFunction_MathDoubleBinaryOp {

}

declare interface FRigVMFunction_MathDoubleTan extends FRigVMFunction_MathDoubleUnaryOp {

}

declare interface FRigVMFunction_MathDoubleToFloat extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleToInt extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathDoubleUnaryOp extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatAbs extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatAcos extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatAdd extends FRigVMFunction_MathFloatBinaryAggregateOp {

}

declare interface FRigVMFunction_MathFloatArrayAverage extends FRigVMFunction_MathFloatBase {
    Array: number[];
    Average: number;
}

declare interface FRigVMFunction_MathFloatArraySum extends FRigVMFunction_MathFloatBase {
    Array: number[];
    Sum: number;
}

declare interface FRigVMFunction_MathFloatAsin extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatAtan extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatAtan2 extends FRigVMFunction_MathFloatBinaryOp {

}

declare interface FRigVMFunction_MathFloatBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathFloatBinaryAggregateOp extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatBinaryOp extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatCeil extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
    int: number;
}

declare interface FRigVMFunction_MathFloatClamp extends FRigVMFunction_MathFloatBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatConstE extends FRigVMFunction_MathFloatConstant {

}

declare interface FRigVMFunction_MathFloatConstHalfPi extends FRigVMFunction_MathFloatConstant {

}

declare interface FRigVMFunction_MathFloatConstPi extends FRigVMFunction_MathFloatConstant {

}

declare interface FRigVMFunction_MathFloatConstTwoPi extends FRigVMFunction_MathFloatConstant {

}

declare interface FRigVMFunction_MathFloatConstant extends FRigVMFunction_MathFloatBase {
    Value: number;
}

declare interface FRigVMFunction_MathFloatCos extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatDeg extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatDiv extends FRigVMFunction_MathFloatBinaryOp {

}

declare interface FRigVMFunction_MathFloatEquals extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatExponential extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatFloor extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
    int: number;
}

declare interface FRigVMFunction_MathFloatGreater extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatGreaterEqual extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatIsNearlyEqual extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Tolerance: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatIsNearlyZero extends FRigVMFunction_MathFloatBase {
    Value: number;
    Tolerance: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatLawOfCosine extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    C: number;
    AlphaAngle: number;
    BetaAngle: number;
    GammaAngle: number;
    bValid: boolean;
}

declare interface FRigVMFunction_MathFloatLerp extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    T: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatLess extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatLessEqual extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatMake extends FRigVMFunction_MathFloatBase {
    Value: number;
}

declare interface FRigVMFunction_MathFloatMax extends FRigVMFunction_MathFloatBinaryAggregateOp {

}

declare interface FRigVMFunction_MathFloatMin extends FRigVMFunction_MathFloatBinaryAggregateOp {

}

declare interface FRigVMFunction_MathFloatMod extends FRigVMFunction_MathFloatBinaryOp {

}

declare interface FRigVMFunction_MathFloatMul extends FRigVMFunction_MathFloatBinaryAggregateOp {

}

declare interface FRigVMFunction_MathFloatNegate extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatNotEquals extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathFloatPow extends FRigVMFunction_MathFloatBinaryOp {

}

declare interface FRigVMFunction_MathFloatRad extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatRemap extends FRigVMFunction_MathFloatBase {
    Value: number;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    bClamp: boolean;
    Result: number;
}

declare interface FRigVMFunction_MathFloatRound extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
    int: number;
}

declare interface FRigVMFunction_MathFloatSelectBool extends FRigVMFunction_MathFloatBase {
    Condition: boolean;
    IfTrue: number;
    IfFalse: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatSign extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatSin extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatSqrt extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatSub extends FRigVMFunction_MathFloatBinaryOp {

}

declare interface FRigVMFunction_MathFloatTan extends FRigVMFunction_MathFloatUnaryOp {

}

declare interface FRigVMFunction_MathFloatToDouble extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatToInt extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathFloatUnaryOp extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntAbs extends FRigVMFunction_MathIntUnaryOp {

}

declare interface FRigVMFunction_MathIntAdd extends FRigVMFunction_MathIntBinaryAggregateOp {

}

declare interface FRigVMFunction_MathIntArrayAverage extends FRigVMFunction_MathIntBase {
    Array: number[];
    Average: number;
}

declare interface FRigVMFunction_MathIntArraySum extends FRigVMFunction_MathIntBase {
    Array: number[];
    Sum: number;
}

declare interface FRigVMFunction_MathIntBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathIntBinaryAggregateOp extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntBinaryOp extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntClamp extends FRigVMFunction_MathIntBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntDiv extends FRigVMFunction_MathIntBinaryOp {

}

declare interface FRigVMFunction_MathIntEquals extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathIntGreater extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathIntGreaterEqual extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathIntLess extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathIntLessEqual extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathIntMake extends FRigVMFunction_MathIntBase {
    Value: number;
}

declare interface FRigVMFunction_MathIntMax extends FRigVMFunction_MathIntBinaryAggregateOp {

}

declare interface FRigVMFunction_MathIntMin extends FRigVMFunction_MathIntBinaryAggregateOp {

}

declare interface FRigVMFunction_MathIntMod extends FRigVMFunction_MathIntBinaryOp {

}

declare interface FRigVMFunction_MathIntMul extends FRigVMFunction_MathIntBinaryAggregateOp {

}

declare interface FRigVMFunction_MathIntNegate extends FRigVMFunction_MathIntUnaryOp {

}

declare interface FRigVMFunction_MathIntNotEquals extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathIntPow extends FRigVMFunction_MathIntBinaryOp {

}

declare interface FRigVMFunction_MathIntSign extends FRigVMFunction_MathIntUnaryOp {

}

declare interface FRigVMFunction_MathIntSub extends FRigVMFunction_MathIntBinaryOp {

}

declare interface FRigVMFunction_MathIntToDouble extends FRigVMFunction_MathIntBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntToFloat extends FRigVMFunction_MathIntBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntToName extends FRigVMFunction_MathIntBase {
    Number: number;
    PaddedSize: number;
    Result: string;
}

declare interface FRigVMFunction_MathIntToString extends FRigVMFunction_MathIntBase {
    Number: number;
    PaddedSize: number;
    Result: string;
}

declare interface FRigVMFunction_MathIntUnaryOp extends FRigVMFunction_MathIntBase {
    Value: number;
    Result: number;
}

declare interface FRigVMFunction_MathIntersectPlane extends FRigVMFunction_MathVectorBase {
    Start: FVector;
    Direction: FVector;
    PlanePoint: FVector;
    PlaneNormal: FVector;
    Result: FVector;
    Distance: number;
}

declare interface FRigVMFunction_MathMatrixBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathMatrixBinaryAggregateOp extends FRigVMFunction_MathMatrixBase {
    A: FMatrix;
    B: FMatrix;
    Result: FMatrix;
}

declare interface FRigVMFunction_MathMatrixBinaryOp extends FRigVMFunction_MathMatrixBase {
    A: FMatrix;
    B: FMatrix;
    Result: FMatrix;
}

declare interface FRigVMFunction_MathMatrixFromTransform extends FRigVMFunction_MathMatrixBase {
    Transform: FTransform;
    Result: FMatrix;
}

declare interface FRigVMFunction_MathMatrixFromTransformV2 extends FRigVMFunction_MathMatrixBase {
    Value: FTransform;
    Result: FMatrix;
}

declare interface FRigVMFunction_MathMatrixFromVectors extends FRigVMFunction_MathMatrixBase {
    Origin: FVector;
    X: FVector;
    Y: FVector;
    Z: FVector;
    Result: FMatrix;
}

declare interface FRigVMFunction_MathMatrixInverse extends FRigVMFunction_MathMatrixUnaryOp {

}

declare interface FRigVMFunction_MathMatrixMul extends FRigVMFunction_MathMatrixBinaryAggregateOp {

}

declare interface FRigVMFunction_MathMatrixToTransform extends FRigVMFunction_MathMatrixBase {
    Value: FMatrix;
    Result: FTransform;
}

declare interface FRigVMFunction_MathMatrixToVectors extends FRigVMFunction_MathMatrixBase {
    Value: FMatrix;
    Origin: FVector;
    X: FVector;
    Y: FVector;
    Z: FVector;
}

declare interface FRigVMFunction_MathMatrixUnaryOp extends FRigVMFunction_MathMatrixBase {
    Value: FMatrix;
    Result: FMatrix;
}

declare interface FRigVMFunction_MathMutableBase extends FRigVMStructMutable {

}

declare interface FRigVMFunction_MathQuaternionBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathQuaternionBinaryAggregateOp extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionBinaryOp extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionDot extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: number;
}

declare interface FRigVMFunction_MathQuaternionEquals extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: boolean;
}

declare interface FRigVMFunction_MathQuaternionFromAxisAndAngle extends FRigVMFunction_MathQuaternionBase {
    Axis: FVector;
    Angle: number;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionFromEuler extends FRigVMFunction_MathQuaternionBase {
    Euler: FVector;
    RotationOrder: EEulerRotationOrder;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionFromRotator extends FRigVMFunction_MathQuaternionBase {
    Rotator: FRotator;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionFromRotatorV2 extends FRigVMFunction_MathQuaternionBase {
    Value: FRotator;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionFromTwoVectors extends FRigVMFunction_MathQuaternionBase {
    A: FVector;
    B: FVector;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionGetAxis extends FRigVMFunction_MathQuaternionBase {
    Quaternion: FQuat;
    Axis: EAxis;
    Result: FVector;
}

declare interface FRigVMFunction_MathQuaternionInverse extends FRigVMFunction_MathQuaternionUnaryOp {

}

declare interface FRigVMFunction_MathQuaternionMake extends FRigVMFunction_MathQuaternionBase {
    X: number;
    Y: number;
    Z: number;
    W: number;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionMakeAbsolute extends FRigVMFunction_MathQuaternionBase {
    Local: FQuat;
    Parent: FQuat;
    Global: FQuat;
}

declare interface FRigVMFunction_MathQuaternionMakeRelative extends FRigVMFunction_MathQuaternionBase {
    Global: FQuat;
    Parent: FQuat;
    Local: FQuat;
}

declare interface FRigVMFunction_MathQuaternionMirrorTransform extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    CentralTransform: FTransform;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionMul extends FRigVMFunction_MathQuaternionBinaryAggregateOp {

}

declare interface FRigVMFunction_MathQuaternionNotEquals extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: boolean;
}

declare interface FRigVMFunction_MathQuaternionRotateVector extends FRigVMFunction_MathQuaternionBase {
    Transform: FQuat;
    Vector: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathQuaternionRotationOrder extends FRigVMFunction_MathBase {
    RotationOrder: EEulerRotationOrder;
}

declare interface FRigVMFunction_MathQuaternionScale extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Scale: number;
}

declare interface FRigVMFunction_MathQuaternionScaleV2 extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Factor: number;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionSelectBool extends FRigVMFunction_MathQuaternionBase {
    Condition: boolean;
    IfTrue: FQuat;
    IfFalse: FQuat;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionSlerp extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    T: number;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionSwingTwist extends FRigVMFunction_MathQuaternionBase {
    Input: FQuat;
    TwistAxis: FVector;
    Swing: FQuat;
    Twist: FQuat;
}

declare interface FRigVMFunction_MathQuaternionToAxisAndAngle extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Axis: FVector;
    Angle: number;
}

declare interface FRigVMFunction_MathQuaternionToEuler extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    RotationOrder: EEulerRotationOrder;
    Result: FVector;
}

declare interface FRigVMFunction_MathQuaternionToRotator extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Result: FRotator;
}

declare interface FRigVMFunction_MathQuaternionToVectors extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Forward: FVector;
    Right: FVector;
    Up: FVector;
}

declare interface FRigVMFunction_MathQuaternionUnaryOp extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Result: FQuat;
}

declare interface FRigVMFunction_MathQuaternionUnit extends FRigVMFunction_MathQuaternionUnaryOp {

}

declare interface FRigVMFunction_MathRBFInterpolateBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathRBFInterpolateQuatBase extends FRigVMFunction_MathRBFInterpolateBase {
    Input: FQuat;
    DistanceFunction: ERBFQuatDistanceType;
    SmoothingFunction: ERBFKernelType;
    SmoothingAngle: number;
    bNormalizeOutput: boolean;
    TwistAxis: FVector;
    WorkData: FRigVMFunction_MathRBFInterpolateQuatWorkData;
}

declare interface FRigVMFunction_MathRBFInterpolateQuatColor extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: FMathRBFInterpolateQuatColor_Target[];
    Output: FLinearColor;
}

declare interface FRigVMFunction_MathRBFInterpolateQuatFloat extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: FMathRBFInterpolateQuatFloat_Target[];
    Output: number;
}

declare interface FRigVMFunction_MathRBFInterpolateQuatQuat extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: FMathRBFInterpolateQuatQuat_Target[];
    Output: FQuat;
}

declare interface FRigVMFunction_MathRBFInterpolateQuatVector extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: FMathRBFInterpolateQuatVector_Target[];
    Output: FVector;
}

declare type FRigVMFunction_MathRBFInterpolateQuatWorkData = object;

declare interface FRigVMFunction_MathRBFInterpolateQuatXform extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: FMathRBFInterpolateQuatXform_Target[];
    Output: FTransform;
}

declare interface FRigVMFunction_MathRBFInterpolateVectorBase extends FRigVMFunction_MathRBFInterpolateBase {
    Input: FVector;
    DistanceFunction: ERBFVectorDistanceType;
    SmoothingFunction: ERBFKernelType;
    SmoothingRadius: number;
    bNormalizeOutput: boolean;
    WorkData: FRigVMFunction_MathRBFInterpolateVectorWorkData;
}

declare interface FRigVMFunction_MathRBFInterpolateVectorColor extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: FMathRBFInterpolateVectorColor_Target[];
    Output: FLinearColor;
}

declare interface FRigVMFunction_MathRBFInterpolateVectorFloat extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: FMathRBFInterpolateVectorFloat_Target[];
    Output: number;
}

declare interface FRigVMFunction_MathRBFInterpolateVectorQuat extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: FMathRBFInterpolateVectorQuat_Target[];
    Output: FQuat;
}

declare interface FRigVMFunction_MathRBFInterpolateVectorVector extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: FMathRBFInterpolateVectorVector_Target[];
    Output: FVector;
}

declare type FRigVMFunction_MathRBFInterpolateVectorWorkData = object;

declare interface FRigVMFunction_MathRBFInterpolateVectorXform extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: FMathRBFInterpolateVectorXform_Target[];
    Output: FTransform;
}

declare interface FRigVMFunction_MathRayBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathRayGetAt extends FRigVMFunction_MathRayBase {
    Ray: FRay;
    Ratio: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathRayIntersectPlane extends FRigVMFunction_MathRayBase {
    Ray: FRay;
    PlanePoint: FVector;
    PlaneNormal: FVector;
    Result: FVector;
    Distance: number;
    Ratio: number;
}

declare interface FRigVMFunction_MathRayIntersectRay extends FRigVMFunction_MathRayBase {
    A: FRay;
    B: FRay;
    Result: FVector;
    Distance: number;
    RatioA: number;
    RatioB: number;
}

declare interface FRigVMFunction_MathRayTransform extends FRigVMFunction_MathRayBase {
    Ray: FRay;
    Transform: FTransform;
    Result: FRay;
}

declare interface FRigVMFunction_MathTransformAccumulateArray extends FRigVMFunction_MathTransformMutableBase {
    Transforms: FTransform[];
    TargetSpace: ERigVMTransformSpace;
    Root: FTransform;
    ParentIndices: number[];
}

declare interface FRigVMFunction_MathTransformArrayToSRT extends FRigVMFunction_MathTransformBase {
    Transforms: FTransform[];
    Translations: FVector[];
    Rotations: FQuat[];
    Scales: FVector[];
}

declare interface FRigVMFunction_MathTransformBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathTransformBinaryAggregateOp extends FRigVMFunction_MathTransformBase {
    A: FTransform;
    B: FTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformBinaryOp extends FRigVMFunction_MathTransformBase {
    A: FTransform;
    B: FTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformClampSpatially extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Axis: EAxis;
    Type: ERigVMClampSpatialMode;
    Minimum: number;
    Maximum: number;
    Space: FTransform;
    bDrawDebug: boolean;
    DebugColor: FLinearColor;
    DebugThickness: number;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformFromEulerTransform extends FRigVMFunction_MathTransformBase {
    EulerTransform: FEulerTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformFromEulerTransformV2 extends FRigVMFunction_MathTransformBase {
    Value: FEulerTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformFromSRT extends FRigVMFunction_MathTransformBase {
    Location: FVector;
    Rotation: FVector;
    RotationOrder: EEulerRotationOrder;
    Scale: FVector;
    Transform: FTransform;
    EulerTransform: FEulerTransform;
}

declare interface FRigVMFunction_MathTransformInverse extends FRigVMFunction_MathTransformUnaryOp {

}

declare interface FRigVMFunction_MathTransformLerp extends FRigVMFunction_MathTransformBase {
    A: FTransform;
    B: FTransform;
    T: number;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformMake extends FRigVMFunction_MathTransformBase {
    Translation: FVector;
    Rotation: FQuat;
    Scale: FVector;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformMakeAbsolute extends FRigVMFunction_MathTransformBase {
    Local: FTransform;
    Parent: FTransform;
    Global: FTransform;
}

declare interface FRigVMFunction_MathTransformMakeRelative extends FRigVMFunction_MathTransformBase {
    Global: FTransform;
    Parent: FTransform;
    Local: FTransform;
}

declare interface FRigVMFunction_MathTransformMirrorTransform extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    CentralTransform: FTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformMul extends FRigVMFunction_MathTransformBinaryAggregateOp {

}

declare interface FRigVMFunction_MathTransformMutableBase extends FRigVMFunction_MathMutableBase {

}

declare interface FRigVMFunction_MathTransformRotateVector extends FRigVMFunction_MathTransformBase {
    Transform: FTransform;
    Vector: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathTransformSelectBool extends FRigVMFunction_MathTransformBase {
    Condition: boolean;
    IfTrue: FTransform;
    IfFalse: FTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathTransformToEulerTransform extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Result: FEulerTransform;
}

declare interface FRigVMFunction_MathTransformToVectors extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Forward: FVector;
    Right: FVector;
    Up: FVector;
}

declare interface FRigVMFunction_MathTransformTransformVector extends FRigVMFunction_MathTransformBase {
    Transform: FTransform;
    Location: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathTransformUnaryOp extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Result: FTransform;
}

declare interface FRigVMFunction_MathVectorAbs extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorAdd extends FRigVMFunction_MathVectorBinaryAggregateOp {

}

declare interface FRigVMFunction_MathVectorAngle extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: number;
}

declare interface FRigVMFunction_MathVectorArrayAverage extends FRigVMFunction_MathVectorBase {
    Array: FVector[];
    Average: FVector;
}

declare interface FRigVMFunction_MathVectorArraySum extends FRigVMFunction_MathVectorBase {
    Array: FVector[];
    Sum: FVector;
}

declare interface FRigVMFunction_MathVectorBase extends FRigVMFunction_MathBase {

}

declare interface FRigVMFunction_MathVectorBezierFourPoint extends FRigVMFunction_MathVectorBase {
    Bezier: FRigVMFourPointBezier;
    T: number;
    Result: FVector;
    Tangent: FVector;
}

declare interface FRigVMFunction_MathVectorBinaryAggregateOp extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorBinaryOp extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorCeil extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorClamp extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Minimum: FVector;
    Maximum: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorClampLength extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    MinimumLength: number;
    MaximumLength: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorClampSpatially extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Axis: EAxis;
    Type: ERigVMClampSpatialMode;
    Minimum: number;
    Maximum: number;
    Space: FTransform;
    bDrawDebug: boolean;
    DebugColor: FLinearColor;
    DebugThickness: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorCross extends FRigVMFunction_MathVectorBinaryOp {

}

declare interface FRigVMFunction_MathVectorDeg extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorDistance extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: number;
}

declare interface FRigVMFunction_MathVectorDiv extends FRigVMFunction_MathVectorBinaryOp {

}

declare interface FRigVMFunction_MathVectorDot extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: number;
}

declare interface FRigVMFunction_MathVectorEquals extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}

declare interface FRigVMFunction_MathVectorFloor extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorFromDouble extends FRigVMFunction_MathVectorBase {
    Value: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorFromFloat extends FRigVMFunction_MathVectorBase {
    Value: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorIsNearlyEqual extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Tolerance: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathVectorIsNearlyZero extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Tolerance: number;
    Result: boolean;
}

declare interface FRigVMFunction_MathVectorLength extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Result: number;
}

declare interface FRigVMFunction_MathVectorLengthSquared extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Result: number;
}

declare interface FRigVMFunction_MathVectorLerp extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    T: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorMake extends FRigVMFunction_MathVectorBase {
    X: number;
    Y: number;
    Z: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorMakeAbsolute extends FRigVMFunction_MathVectorBase {
    Local: FVector;
    Parent: FVector;
    Global: FVector;
}

declare interface FRigVMFunction_MathVectorMakeBezierFourPoint extends FRigVMFunction_MathVectorBase {
    Bezier: FRigVMFourPointBezier;
}

declare interface FRigVMFunction_MathVectorMakeRelative extends FRigVMFunction_MathVectorBase {
    Global: FVector;
    Parent: FVector;
    Local: FVector;
}

declare interface FRigVMFunction_MathVectorMax extends FRigVMFunction_MathVectorBinaryAggregateOp {

}

declare interface FRigVMFunction_MathVectorMin extends FRigVMFunction_MathVectorBinaryAggregateOp {

}

declare interface FRigVMFunction_MathVectorMirror extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Normal: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorMirrorTransform extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    CentralTransform: FTransform;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorMod extends FRigVMFunction_MathVectorBinaryOp {

}

declare interface FRigVMFunction_MathVectorMul extends FRigVMFunction_MathVectorBinaryAggregateOp {

}

declare interface FRigVMFunction_MathVectorNegate extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorNotEquals extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}

declare interface FRigVMFunction_MathVectorOrthogonal extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}

declare interface FRigVMFunction_MathVectorParallel extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}

declare interface FRigVMFunction_MathVectorRad extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorRemap extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    SourceMinimum: FVector;
    SourceMaximum: FVector;
    TargetMinimum: FVector;
    TargetMaximum: FVector;
    bClamp: boolean;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorRound extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorScale extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Factor: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorSelectBool extends FRigVMFunction_MathVectorBase {
    Condition: boolean;
    IfTrue: FVector;
    IfFalse: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorSetLength extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Length: number;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorSign extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_MathVectorSub extends FRigVMFunction_MathVectorBinaryOp {

}

declare interface FRigVMFunction_MathVectorUnaryOp extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Result: FVector;
}

declare interface FRigVMFunction_MathVectorUnit extends FRigVMFunction_MathVectorUnaryOp {

}

declare interface FRigVMFunction_NameBase extends FRigVMStruct {

}

declare interface FRigVMFunction_NameConcat extends FRigVMFunction_NameBase {
    A: string;
    B: string;
    Result: string;
}

declare interface FRigVMFunction_NameReplace extends FRigVMFunction_NameBase {
    Name: string;
    Old: string;
    New: string;
    Result: string;
}

declare interface FRigVMFunction_NameTruncate extends FRigVMFunction_NameBase {
    Name: string;
    count: number;
    FromEnd: boolean;
    Remainder: string;
    Chopped: string;
}

declare interface FRigVMFunction_NoiseDouble extends FRigVMFunction_MathBase {
    Value: number;
    Speed: number;
    Frequency: number;
    Minimum: number;
    Maximum: number;
    Result: number;
    Time: number;
}

declare interface FRigVMFunction_NoiseFloat extends FRigVMFunction_MathBase {
    Value: number;
    Speed: number;
    Frequency: number;
    Minimum: number;
    Maximum: number;
    Result: number;
    Time: number;
}

declare interface FRigVMFunction_NoiseVector extends FRigVMFunction_MathBase {
    position: FVector;
    Speed: FVector;
    Frequency: FVector;
    Minimum: number;
    Maximum: number;
    Result: FVector;
    Time: FVector;
}

declare interface FRigVMFunction_NoiseVector2 extends FRigVMFunction_MathBase {
    Value: FVector;
    Speed: FVector;
    Frequency: FVector;
    Minimum: number;
    Maximum: number;
    Result: FVector;
    Time: FVector;
}

declare interface FRigVMFunction_RandomFloat extends FRigVMFunction_MathBase {
    Seed: number;
    Minimum: number;
    Maximum: number;
    duration: number;
    Result: number;
    LastResult: number;
    LastSeed: number;
    BaseSeed: number;
    TimeLeft: number;
}

declare interface FRigVMFunction_RandomVector extends FRigVMFunction_MathBase {
    Seed: number;
    Minimum: number;
    Maximum: number;
    duration: number;
    Result: FVector;
    LastResult: FVector;
    LastSeed: number;
    BaseSeed: number;
    TimeLeft: number;
}

declare interface FRigVMFunction_SecondsToFrames extends FRigVMFunction_AnimBase {
    Seconds: number;
    Frames: number;
}

declare interface FRigVMFunction_Sequence extends FRigVMStruct {
    ExecuteContext: FRigVMExecuteContext;
    A: FRigVMExecuteContext;
    B: FRigVMExecuteContext;
}

declare interface FRigVMFunction_SimBase extends FRigVMStruct {

}

declare interface FRigVMFunction_SimBaseMutable extends FRigVMStructMutable {

}

declare interface FRigVMFunction_StartsWith extends FRigVMFunction_NameBase {
    Name: string;
    Start: string;
    Result: boolean;
}

declare interface FRigVMFunction_StringBase extends FRigVMStruct {

}

declare interface FRigVMFunction_StringConcat extends FRigVMFunction_StringBase {
    A: string;
    B: string;
    Result: string;
}

declare interface FRigVMFunction_StringContains extends FRigVMFunction_StringBase {
    Name: string;
    Search: string;
    Result: boolean;
}

declare interface FRigVMFunction_StringEndsWith extends FRigVMFunction_StringBase {
    Name: string;
    Ending: string;
    Result: boolean;
}

declare interface FRigVMFunction_StringFind extends FRigVMFunction_StringBase {
    Value: string;
    Search: string;
    Found: boolean;
    Index: number;
}

declare interface FRigVMFunction_StringJoin extends FRigVMFunction_StringBase {
    Values: string[];
    Separator: string;
    Result: string;
}

declare interface FRigVMFunction_StringLeft extends FRigVMFunction_StringBase {
    Value: string;
    count: number;
    Result: string;
}

declare interface FRigVMFunction_StringLength extends FRigVMFunction_StringBase {
    Value: string;
    Length: number;
}

declare interface FRigVMFunction_StringMiddle extends FRigVMFunction_StringBase {
    Value: string;
    Start: number;
    count: number;
    Result: string;
}

declare interface FRigVMFunction_StringPadInteger extends FRigVMFunction_StringBase {
    Value: number;
    Digits: number;
    Result: string;
}

declare interface FRigVMFunction_StringReplace extends FRigVMFunction_StringBase {
    Name: string;
    Old: string;
    New: string;
    Result: string;
}

declare interface FRigVMFunction_StringReverse extends FRigVMFunction_StringBase {
    Value: string;
    Reverse: string;
}

declare interface FRigVMFunction_StringRight extends FRigVMFunction_StringBase {
    Value: string;
    count: number;
    Result: string;
}

declare interface FRigVMFunction_StringSplit extends FRigVMFunction_StringBase {
    Value: string;
    Separator: string;
    Result: string[];
}

declare interface FRigVMFunction_StringStartsWith extends FRigVMFunction_StringBase {
    Name: string;
    Start: string;
    Result: boolean;
}

declare interface FRigVMFunction_StringToLowercase extends FRigVMFunction_StringBase {
    Value: string;
    Result: string;
}

declare interface FRigVMFunction_StringToUppercase extends FRigVMFunction_StringBase {
    Value: string;
    Result: string;
}

declare interface FRigVMFunction_StringTrimWhitespace extends FRigVMFunction_StringBase {
    Value: string;
    Result: string;
}

declare interface FRigVMFunction_StringTruncate extends FRigVMFunction_StringBase {
    Name: string;
    count: number;
    FromEnd: boolean;
    Remainder: string;
    Chopped: string;
}

declare interface FRigVMFunction_TimeLoop extends FRigVMFunction_SimBase {
    Speed: number;
    duration: number;
    Normalize: boolean;
    Absolute: number;
    Relative: number;
    FlipFlop: number;
    Even: boolean;
    AccumulatedAbsolute: number;
    AccumulatedRelative: number;
    NumIterations: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_TimeOffsetFloat extends FRigVMFunction_SimBase {
    Value: number;
    SecondsAgo: number;
    BufferSize: number;
    TimeRange: number;
    Result: number;
    Buffer: number[];
    DeltaTimes: number[];
    LastInsertIndex: number;
    UpperBound: number;
}

declare interface FRigVMFunction_TimeOffsetTransform extends FRigVMFunction_SimBase {
    Value: FTransform;
    SecondsAgo: number;
    BufferSize: number;
    TimeRange: number;
    Result: FTransform;
    Buffer: FTransform[];
    DeltaTimes: number[];
    LastInsertIndex: number;
    UpperBound: number;
}

declare interface FRigVMFunction_TimeOffsetVector extends FRigVMFunction_SimBase {
    Value: FVector;
    SecondsAgo: number;
    BufferSize: number;
    TimeRange: number;
    Result: FVector;
    Buffer: FVector[];
    DeltaTimes: number[];
    LastInsertIndex: number;
    UpperBound: number;
}

declare interface FRigVMFunction_Timeline extends FRigVMFunction_SimBase {
    Speed: number;
    Time: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}

declare interface FRigVMFunction_UserDefinedEvent extends FRigVMStruct {
    ExecutePin: FRigVMExecutePin;
    EventName: string;
}

declare interface FRigVMFunction_VerletIntegrateVector extends FRigVMFunction_SimBase {
    Target: FVector;
    Strength: number;
    Damp: number;
    Blend: number;
    Force: FVector;
    position: FVector;
    Velocity: FVector;
    Acceleration: FVector;
    Point: FRigVMSimPoint;
    bInitialized: boolean;
}

declare interface FRigVMFunction_VisualDebugQuat extends FRigVMFunction_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: string;
}

declare interface FRigVMFunction_VisualDebugQuatNoSpace extends FRigVMFunction_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
}

declare interface FRigVMFunction_VisualDebugTransform extends FRigVMFunction_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: string;
}

declare interface FRigVMFunction_VisualDebugTransformNoSpace extends FRigVMFunction_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
}

declare interface FRigVMFunction_VisualDebugVector extends FRigVMFunction_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    BoneSpace: string;
}

declare interface FRigVMFunction_VisualDebugVectorNoSpace extends FRigVMFunction_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
}

declare interface FRigVMFunction_VisualLogArrow extends FRigVMFunction_VisualLogObject {
    SegmentStart: FVector;
    SegmentEnd: FVector;
    ArrowHeadSize: number;
}

declare interface FRigVMFunction_VisualLogBase extends FRigVMFunction_DebugBaseMutable {
    Text: string;
    Category: string;
}

declare interface FRigVMFunction_VisualLogBox extends FRigVMFunction_VisualLogWireframeOptional {
    Box: FBox;
}

declare interface FRigVMFunction_VisualLogCapsule extends FRigVMFunction_VisualLogWireframeOptional {
    base: FVector;
    HalfHeight: number;
    Radius: number;
    Rotation: FQuat;
}

declare interface FRigVMFunction_VisualLogCircle extends FRigVMFunction_VisualLogWireframeOptional {
    Center: FVector;
    UpAxis: FVector;
    Radius: number;
    Thickness: number;
}

declare interface FRigVMFunction_VisualLogCone extends FRigVMFunction_VisualLogWireframeOptional {
    Origin: FVector;
    Direction: FVector;
    Length: number;
    Angle: number;
}

declare interface FRigVMFunction_VisualLogCylinder extends FRigVMFunction_VisualLogWireframeOptional {
    Start: FVector;
    End: FVector;
    Radius: number;
}

declare interface FRigVMFunction_VisualLogLocation extends FRigVMFunction_VisualLogObject {
    Location: FVector;
    Radius: number;
}

declare interface FRigVMFunction_VisualLogObject extends FRigVMFunction_VisualLogBase {
    ObjectColor: FLinearColor;
}

declare interface FRigVMFunction_VisualLogOrientedBox extends FRigVMFunction_VisualLogWireframeOptional {
    Box: FBox;
    Transform: FTransform;
}

declare interface FRigVMFunction_VisualLogSegment extends FRigVMFunction_VisualLogObject {
    SegmentStart: FVector;
    SegmentEnd: FVector;
    Thickness: number;
}

declare interface FRigVMFunction_VisualLogSphere extends FRigVMFunction_VisualLogWireframeOptional {
    Center: FVector;
    Radius: number;
}

declare interface FRigVMFunction_VisualLogText extends FRigVMFunction_VisualLogBase {

}

declare interface FRigVMFunction_VisualLogWireframeOptional extends FRigVMFunction_VisualLogObject {
    bWireframe: boolean;
}

declare interface FRigVMGraphFunctionArgument {
    Name: string;
    DisplayName: string;
    CPPType: string;
    CPPTypeObject: TSoftObjectPtr<UObject>;
    bIsArray: boolean;
    Direction: ERigVMPinDirection;
    DefaultValue: string;
    bIsConst: boolean;
    PathToTooltip: TMap<string, string>;
}

declare interface FRigVMGraphFunctionData {
    Header: FRigVMGraphFunctionHeader;
    CompilationData: FRigVMFunctionCompilationData;
    SerializedCollapsedNode: string;
    CollapseNodeArchive: FRigVMObjectArchive;
}

declare interface FRigVMGraphFunctionHeader {
    LibraryPointer: FRigVMGraphFunctionIdentifier;
    Variant: FRigVMVariant;
    Name: string;
    NodeTitle: string;
    NodeColor: FLinearColor;
    ToolTip: string;
    Description: string;
    Category: string;
    Keywords: string;
    Arguments: FRigVMGraphFunctionArgument[];
    Dependencies: TMap<FRigVMGraphFunctionIdentifier, number>;
    ExternalVariables: FRigVMExternalVariable[];
    Layout: FRigVMNodeLayout;
}

declare interface FRigVMGraphFunctionHeaderArray {
    Headers: FRigVMGraphFunctionHeader[];
}

declare interface FRigVMGraphFunctionIdentifier {
    LibraryNode: FSoftObjectPath;
    LibraryNodePath: string;
    HostObject: FSoftObjectPath;
}

declare interface FRigVMGraphFunctionStore {
    PublicFunctions: FRigVMGraphFunctionData[];
    PrivateFunctions: FRigVMGraphFunctionData[];
}

declare interface FRigVMInstruction {
    ByteCodeIndex: number;
    OpCode: ERigVMOpCode;
    OperandAlignment: number;
}

declare interface FRigVMInstructionArray {
    Instructions: FRigVMInstruction[];
}

declare interface FRigVMInstructionSetExecuteState {
    SliceHashToNumInstruction: TMap<number, number>;
}

declare type FRigVMInstructionVisitInfo = object;

declare interface FRigVMInvokeEntryOp extends FRigVMBaseOp {

}

declare interface FRigVMJumpIfOp extends FRigVMUnaryOp {

}

declare interface FRigVMJumpOp extends FRigVMBaseOp {

}

declare interface FRigVMJumpToBranchOp extends FRigVMUnaryOp {

}

declare interface FRigVMMemoryContainer {
    bUseNameMap: boolean;
    MemoryType: ERigVMMemoryType;
    Registers: FRigVMRegister[];
    RegisterOffsets: FRigVMRegisterOffset[];
    Data: number[];
    ScriptStructs: UScriptStruct[];
    NameMap: TMap<string, number>;
    bEncounteredErrorDuringLoad: boolean;
}

declare interface FRigVMMemoryStatistics {
    RegisterCount: number;
    DataBytes: number;
    TotalBytes: number;
}

declare interface FRigVMMemoryStorageStruct extends FInstancedPropertyBag {

}

declare interface FRigVMMirrorSettings {
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    SearchString: string;
    ReplaceString: string;
}

declare interface FRigVMNodeLayout {
    Categories: FRigVMPinCategory[];
    PinIndexInCategory: TMap<string, number>;
    DisplayNames: TMap<string, string>;
}

declare interface FRigVMObjectArchive {
    Buffer: number[];
    UncompressedSize: number;
    CompressedSize: number;
    bIsCompressed: boolean;
}

declare interface FRigVMOperand {
    MemoryType: ERigVMMemoryType;
    RegisterIndex: number;
    RegisterOffset: number;
}

declare interface FRigVMParameter {
    Type: ERigVMParameterType;
    Name: string;
    RegisterIndex: number;
    CPPType: string;
    ScriptStruct: UScriptStruct;
    ScriptStructPath: string;
}

declare interface FRigVMPinCategory {
    Path: string;
    Elements: string[];
    bExpandedByDefault: boolean;
}

declare type FRigVMPredicateBranch = object;

declare type FRigVMProfilingInfo = object;

declare interface FRigVMQuaternaryOp extends FRigVMBaseOp {

}

declare interface FRigVMQuinaryOp extends FRigVMBaseOp {

}

declare interface FRigVMRegister {
    Type: ERigVMRegisterType;
    ByteIndex: number;
    ElementSize: number;
    ElementCount: number;
    SliceCount: number;
    AlignmentBytes: number;
    TrailingBytes: number;
    Name: string;
    ScriptStructIndex: number;
    bIsArray: boolean;
    bIsDynamic: boolean;
}

declare interface FRigVMRegisterOffset {
    Segments: number[];
    Type: ERigVMRegisterType;
    CPPType: string;
    ScriptStruct: UScriptStruct;
    ParentScriptStruct: UScriptStruct;
    ArrayIndex: number;
    ElementSize: number;
    CachedSegmentPath: string;
}

declare interface FRigVMRunInstructionsOp extends FRigVMUnaryOp {

}

declare interface FRigVMRuntimeSettings {
    MaximumArraySize: number;
}

declare interface FRigVMSenaryOp extends FRigVMBaseOp {

}

declare interface FRigVMSetupTraitsOp extends FRigVMUnaryOp {

}

declare interface FRigVMSimPoint {
    Mass: number;
    Size: number;
    LinearDamping: number;
    InheritMotion: number;
    position: FVector;
    LinearVelocity: FVector;
}

declare type FRigVMSlice = object;

declare interface FRigVMStatistics {
    BytesForCDO: number;
    BytesPerInstance: number;
    LiteralMemory: FRigVMMemoryStatistics;
    WorkMemory: FRigVMMemoryStatistics;
    DebugMemory: FRigVMMemoryStatistics;
    BytesForCaching: number;
    ByteCode: FRigVMByteCodeStatistics;
}

declare type FRigVMStruct = object;

declare interface FRigVMStructMutable extends FRigVMStruct {
    ExecutePin: FRigVMExecutePin;
}

declare interface FRigVMTag {
    Name: string;
    Label: string;
    ToolTip: string;
    Color: FLinearColor;
    bShowInUserInterface: boolean;
    bMarksSubjectAsInvalid: boolean;
}

declare interface FRigVMTemplateArgumentType {
    CPPType: string;
    CPPTypeObject: UObject;
}

declare interface FRigVMTernaryOp extends FRigVMBaseOp {

}

declare interface FRigVMTrait extends FRigVMStruct {
    Name: string;
}

declare interface FRigVMUnaryOp extends FRigVMBaseOp {

}

declare interface FRigVMUnknownType {
    Hash: number;
}

declare interface FRigVMUserWorkflow {
    Title: string;
    ToolTip: string;
    Type: ERigVMUserWorkflowType;
    PerformDynamicDelegate: FRigVMUserWorkflowPerformDynamicDelegate;
    OptionsClass: UClass;
}

declare interface FRigVMVariant {
    Guid: FGuid;
    Tags: FRigVMTag[];
}

declare interface FRigVMVariantRef {
    ObjectPath: FSoftObjectPath;
    Variant: FRigVMVariant;
}

declare interface IRigVMGraphFunctionHost extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UDataAssetLink extends UNameSpacedUserData {
    readonly __static_UDataAssetLink: {
        SetDataAsset(InDataAsset: TSoftObjectPtr<UDataAsset>): void;
        GetDataAsset(): TSoftObjectPtr<UDataAsset>;
    };
    readonly __properties_UDataAssetLink: {
        DataAsset: TSoftObjectPtr<UDataAsset>;
        DataAssetCached: UDataAsset;
    };
    readonly __staticRegistry: 
        UDataAssetLink['__static_UDataAssetLink'] &
        UNameSpacedUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataAssetLink['__properties_UDataAssetLink'] &
        UNameSpacedUserData['__propertyRegistry'];
}

declare type UDefault__RigVMBlueprintGeneratedClass = object;

declare type UDefault__RigVMMemoryStorageGeneratorClass = object;

declare interface UNameSpacedUserData extends UAssetUserData {
    readonly __properties_UNameSpacedUserData: {
        Namespace: string;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UNameSpacedUserData['__properties_UNameSpacedUserData'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface URigVM extends UObject {
    readonly __static_URigVM: {
        SetParameterValueVector2D(InParameterName: string, InValue: FVector2D, InArrayIndex: number): void;
        SetParameterValueVector(InParameterName: string, InValue: FVector, InArrayIndex: number): void;
        SetParameterValueTransform(InParameterName: string, InValue: FTransform, InArrayIndex: number): void;
        SetParameterValueString(InParameterName: string, InValue: string, InArrayIndex: number): void;
        SetParameterValueQuat(InParameterName: string, InValue: FQuat, InArrayIndex: number): void;
        SetParameterValueName(InParameterName: string, InValue: string, InArrayIndex: number): void;
        SetParameterValueInt(InParameterName: string, InValue: number, InArrayIndex: number): void;
        SetParameterValueFloat(InParameterName: string, InValue: number, InArrayIndex: number): void;
        SetParameterValueDouble(InParameterName: string, InValue: number, InArrayIndex: number): void;
        SetParameterValueBool(InParameterName: string, InValue: boolean, InArrayIndex: number): void;
        GetStatistics(): FRigVMStatistics;
        GetRigVMFunctionName(InFunctionIndex: number): string;
        GetParameterValueVector2D(InParameterName: string, InArrayIndex: number): FVector2D;
        GetParameterValueVector(InParameterName: string, InArrayIndex: number): FVector;
        GetParameterValueTransform(InParameterName: string, InArrayIndex: number): FTransform;
        GetParameterValueString(InParameterName: string, InArrayIndex: number): string;
        GetParameterValueQuat(InParameterName: string, InArrayIndex: number): FQuat;
        GetParameterValueName(InParameterName: string, InArrayIndex: number): string;
        GetParameterValueInt(InParameterName: string, InArrayIndex: number): number;
        GetParameterValueFloat(InParameterName: string, InArrayIndex: number): number;
        GetParameterValueDouble(InParameterName: string, InArrayIndex: number): number;
        GetParameterValueBool(InParameterName: string, InArrayIndex: number): boolean;
        Execute(Context: FRigVMExtendedExecuteContext, InEntryName: string): boolean;
        AddRigVMFunction(InRigVMStruct: UScriptStruct, InMethodName: string): number;
    };
    readonly __properties_URigVM: {
        LiteralMemoryStorage: FRigVMMemoryStorageStruct;
        DefaultWorkMemoryStorage: FRigVMMemoryStorageStruct;
        DefaultDebugMemoryStorage: FRigVMMemoryStorageStruct;
        ByteCodeStorage: FRigVMByteCode;
        Instructions: FRigVMInstructionArray;
        FunctionNamesStorage: string[];
        Parameters: FRigVMParameter[];
        CachedVMHash: number;
    };
    readonly __staticRegistry: 
        URigVM['__static_URigVM'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVM['__properties_URigVM'] &
        UObject['__propertyRegistry'];
}

declare interface URigVMBlueprintGeneratedClass extends UBlueprintGeneratedClass {
    readonly __properties_URigVMBlueprintGeneratedClass: {
        GraphFunctionStore: FRigVMGraphFunctionStore;
    };
    readonly __staticRegistry: 
        UBlueprintGeneratedClass['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVMBlueprintGeneratedClass['__properties_URigVMBlueprintGeneratedClass'] &
        UBlueprintGeneratedClass['__propertyRegistry'];
}

declare interface URigVMEditorSettings extends UDeveloperSettings {
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UDeveloperSettings['__propertyRegistry'];
}

declare interface URigVMHost extends UObject {
    readonly __static_URigVMHost: {
        SupportsEvent(InEventName: string): boolean;
        SetVariableFromString(InVariableName: string, InValue: string): boolean;
        SetFramesPerSecond(InFramesPerSecond: number): void;
        SetDeltaTime(InDeltaTime: number): void;
        SetAbsoluteTime(InAbsoluteTime: number, InSetDeltaTimeZero: boolean): void;
        SetAbsoluteAndDeltaTime(InAbsoluteTime: number, InDeltaTime: number): void;
        RequestRunOnceEvent(InEventName: string, InEventIndex: number): void;
        RequestInit(): void;
        RemoveRunOnceEvent(InEventName: string): boolean;
        IsInitRequired(): boolean;
        GetVM(): URigVM;
        GetVariableType(InVariableName: string): string;
        GetVariableAsString(InVariableName: string): string;
        GetSupportedEvents(): string[];
        GetScriptAccessibleVariables(): string[];
        GetExtendedExecuteContext(): FRigVMExtendedExecuteContext;
        GetDeltaTime(): number;
        GetCurrentFramesPerSecond(): number;
        GetAbsoluteTime(): number;
        FindRigVMHosts(Outer: UObject, OptionalClass: TSubclassOf<URigVMHost>): URigVMHost[];
        ExecuteEvent(InEventName: string): boolean;
        Execute(InEventName: string): boolean;
        CanExecute(): boolean;
    };
    readonly __properties_URigVMHost: {
        VMRuntimeSettings: FRigVMRuntimeSettings;
        VM: URigVM;
        UserDefinedStructGuidToPathName: TMap<string, FSoftObjectPath>;
        UserDefinedEnumToPathName: TMap<string, FSoftObjectPath>;
        UserDefinedTypesInUse: UObject[];
        DrawContainer: FRigVMDrawContainer;
        EventQueue: string[];
        AssetUserData: UAssetUserData[];
    };
    readonly __staticRegistry: 
        URigVMHost['__static_URigVMHost'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVMHost['__properties_URigVMHost'] &
        UObject['__propertyRegistry'];
}

declare interface URigVMMemoryStorage extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface URigVMMemoryStorageGeneratorClass extends UClass {
    readonly __staticRegistry: 
        UClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UClass['__propertyRegistry'];
}

declare interface URigVMNativized extends URigVM {
    readonly __staticRegistry: 
        URigVM['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVM['__propertyRegistry'];
}

declare interface URigVMProjectSettings extends UDeveloperSettings {
    readonly __static_URigVMProjectSettings: {
        GetTag(InTagName: string): FRigVMTag;
    };
    readonly __properties_URigVMProjectSettings: {
        VariantTags: FRigVMTag[];
    };
    readonly __staticRegistry: 
        URigVMProjectSettings['__static_URigVMProjectSettings'] &
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVMProjectSettings['__properties_URigVMProjectSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface URigVMUserWorkflowOptions extends UObject {
    readonly __static_URigVMUserWorkflowOptions: {
        RequiresDialog(): boolean;
        ReportWarning(InMessage: string): void;
        ReportInfo(InMessage: string): void;
        ReportError(InMessage: string): void;
        IsValid(): boolean;
    };
    readonly __properties_URigVMUserWorkflowOptions: {
        Subject: UObject;
        Workflow: FRigVMUserWorkflow;
    };
    readonly __staticRegistry: 
        URigVMUserWorkflowOptions['__static_URigVMUserWorkflowOptions'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        URigVMUserWorkflowOptions['__properties_URigVMUserWorkflowOptions'] &
        UObject['__propertyRegistry'];
}

