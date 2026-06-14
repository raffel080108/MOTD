declare interface FMathRBFInterpolateQuatColor_Target {
    Target: FQuat;
    Value: FLinearColor;
}
declare const FMathRBFInterpolateQuatColor_Target: FMathRBFInterpolateQuatColor_Target;

declare interface FMathRBFInterpolateQuatFloat_Target {
    Target: FQuat;
    Value: number;
}
declare const FMathRBFInterpolateQuatFloat_Target: FMathRBFInterpolateQuatFloat_Target;

declare interface FMathRBFInterpolateQuatQuat_Target {
    Target: FQuat;
    Value: FQuat;
}
declare const FMathRBFInterpolateQuatQuat_Target: FMathRBFInterpolateQuatQuat_Target;

declare interface FMathRBFInterpolateQuatVector_Target {
    Target: FQuat;
    Value: FVector;
}
declare const FMathRBFInterpolateQuatVector_Target: FMathRBFInterpolateQuatVector_Target;

declare interface FMathRBFInterpolateQuatXform_Target {
    Target: FQuat;
    Value: FTransform;
}
declare const FMathRBFInterpolateQuatXform_Target: FMathRBFInterpolateQuatXform_Target;

declare interface FMathRBFInterpolateVectorColor_Target {
    Target: FVector;
    Value: FLinearColor;
}
declare const FMathRBFInterpolateVectorColor_Target: FMathRBFInterpolateVectorColor_Target;

declare interface FMathRBFInterpolateVectorFloat_Target {
    Target: FVector;
    Value: number;
}
declare const FMathRBFInterpolateVectorFloat_Target: FMathRBFInterpolateVectorFloat_Target;

declare interface FMathRBFInterpolateVectorQuat_Target {
    Target: FVector;
    Value: FQuat;
}
declare const FMathRBFInterpolateVectorQuat_Target: FMathRBFInterpolateVectorQuat_Target;

declare interface FMathRBFInterpolateVectorVector_Target {
    Target: FVector;
    Value: FVector;
}
declare const FMathRBFInterpolateVectorVector_Target: FMathRBFInterpolateVectorVector_Target;

declare interface FMathRBFInterpolateVectorXform_Target {
    Target: FVector;
    Value: FTransform;
}
declare const FMathRBFInterpolateVectorXform_Target: FMathRBFInterpolateVectorXform_Target;

declare interface FRigDispatch_FromString extends FRigVMDispatchFactory {

}
declare const FRigDispatch_FromString: FRigDispatch_FromString;

declare interface FRigDispatch_ToString extends FRigVMDispatchFactory {

}
declare const FRigDispatch_ToString: FRigDispatch_ToString;

declare interface FRigVMBaseOp {

}
declare const FRigVMBaseOp: FRigVMBaseOp;

declare interface FRigVMBinaryOp extends FRigVMBaseOp {

}
declare const FRigVMBinaryOp: FRigVMBinaryOp;

declare interface FRigVMBranchInfo {
    Index: number;
    Label: FName;
    InstructionIndex: number;
    ArgumentIndex: number;
    FirstInstruction: number;
    LastInstruction: number;
}
declare const FRigVMBranchInfo: FRigVMBranchInfo;

declare interface FRigVMBreakpoint {

}
declare const FRigVMBreakpoint: FRigVMBreakpoint;

declare interface FRigVMByteCode {
    ByteCode: TArray<uint8>;
    NumInstructions: number;
    Entries: TArray<FRigVMByteCodeEntry>;
    BranchInfos: TArray<FRigVMBranchInfo>;
    PredicateBranches: TArray<FRigVMPredicateBranch>;
    PublicContextAssetPath: FTopLevelAssetPath;
}
declare const FRigVMByteCode: FRigVMByteCode;

declare interface FRigVMByteCodeEntry {
    Name: FName;
    InstructionIndex: number;
}
declare const FRigVMByteCodeEntry: FRigVMByteCodeEntry;

declare interface FRigVMByteCodeStatistics {
    InstructionCount: number;
    DataBytes: number;
}
declare const FRigVMByteCodeStatistics: FRigVMByteCodeStatistics;

declare interface FRigVMChangeTypeOp extends FRigVMUnaryOp {

}
declare const FRigVMChangeTypeOp: FRigVMChangeTypeOp;

declare interface FRigVMComparisonOp extends FRigVMBaseOp {

}
declare const FRigVMComparisonOp: FRigVMComparisonOp;

declare interface FRigVMCopyOp extends FRigVMBaseOp {

}
declare const FRigVMCopyOp: FRigVMCopyOp;

declare interface FRigVMDebugDrawSettings {
    DepthPriority: ESceneDepthPriorityGroup;
    Lifetime: number;
}
declare const FRigVMDebugDrawSettings: FRigVMDebugDrawSettings;

declare interface FRigVMDebugInfo {

}
declare const FRigVMDebugInfo: FRigVMDebugInfo;

declare interface FRigVMDispatchFactory {

}
declare const FRigVMDispatchFactory: FRigVMDispatchFactory;

declare interface FRigVMDispatch_ArrayAdd extends FRigVMDispatch_ArraySetAtIndex {

}
declare const FRigVMDispatch_ArrayAdd: FRigVMDispatch_ArrayAdd;

declare interface FRigVMDispatch_ArrayAppend extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArrayAppend: FRigVMDispatch_ArrayAppend;

declare interface FRigVMDispatch_ArrayBase extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_ArrayBase: FRigVMDispatch_ArrayBase;

declare interface FRigVMDispatch_ArrayBaseMutable extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayBaseMutable: FRigVMDispatch_ArrayBaseMutable;

declare interface FRigVMDispatch_ArrayClone extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayClone: FRigVMDispatch_ArrayClone;

declare interface FRigVMDispatch_ArrayDifference extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayDifference: FRigVMDispatch_ArrayDifference;

declare interface FRigVMDispatch_ArrayFind extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayFind: FRigVMDispatch_ArrayFind;

declare interface FRigVMDispatch_ArrayGetAtIndex extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayGetAtIndex: FRigVMDispatch_ArrayGetAtIndex;

declare interface FRigVMDispatch_ArrayGetNum extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayGetNum: FRigVMDispatch_ArrayGetNum;

declare interface FRigVMDispatch_ArrayInit extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArrayInit: FRigVMDispatch_ArrayInit;

declare interface FRigVMDispatch_ArrayInsert extends FRigVMDispatch_ArraySetAtIndex {

}
declare const FRigVMDispatch_ArrayInsert: FRigVMDispatch_ArrayInsert;

declare interface FRigVMDispatch_ArrayIntersection extends FRigVMDispatch_ArrayDifference {

}
declare const FRigVMDispatch_ArrayIntersection: FRigVMDispatch_ArrayIntersection;

declare interface FRigVMDispatch_ArrayIterator extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArrayIterator: FRigVMDispatch_ArrayIterator;

declare interface FRigVMDispatch_ArrayMake extends FRigVMDispatch_ArrayBase {

}
declare const FRigVMDispatch_ArrayMake: FRigVMDispatch_ArrayMake;

declare interface FRigVMDispatch_ArrayRemove extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArrayRemove: FRigVMDispatch_ArrayRemove;

declare interface FRigVMDispatch_ArrayReset extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArrayReset: FRigVMDispatch_ArrayReset;

declare interface FRigVMDispatch_ArrayReverse extends FRigVMDispatch_ArrayReset {

}
declare const FRigVMDispatch_ArrayReverse: FRigVMDispatch_ArrayReverse;

declare interface FRigVMDispatch_ArraySetAtIndex extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArraySetAtIndex: FRigVMDispatch_ArraySetAtIndex;

declare interface FRigVMDispatch_ArraySetNum extends FRigVMDispatch_ArrayBaseMutable {

}
declare const FRigVMDispatch_ArraySetNum: FRigVMDispatch_ArraySetNum;

declare interface FRigVMDispatch_ArrayUnion extends FRigVMDispatch_ArrayAppend {

}
declare const FRigVMDispatch_ArrayUnion: FRigVMDispatch_ArrayUnion;

declare interface FRigVMDispatch_BreakStruct extends FRigVMDispatch_MakeStruct {

}
declare const FRigVMDispatch_BreakStruct: FRigVMDispatch_BreakStruct;

declare interface FRigVMDispatch_CastEnumToInt extends FRigVMDispatchFactory {

}
declare const FRigVMDispatch_CastEnumToInt: FRigVMDispatch_CastEnumToInt;

declare interface FRigVMDispatch_CastIntToEnum extends FRigVMDispatchFactory {

}
declare const FRigVMDispatch_CastIntToEnum: FRigVMDispatch_CastIntToEnum;

declare interface FRigVMDispatch_CastObject extends FRigVMDispatchFactory {

}
declare const FRigVMDispatch_CastObject: FRigVMDispatch_CastObject;

declare interface FRigVMDispatch_Constant extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_Constant: FRigVMDispatch_Constant;

declare interface FRigVMDispatch_CoreBase extends FRigVMDispatchFactory {

}
declare const FRigVMDispatch_CoreBase: FRigVMDispatch_CoreBase;

declare interface FRigVMDispatch_CoreEquals extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_CoreEquals: FRigVMDispatch_CoreEquals;

declare interface FRigVMDispatch_CoreNotEquals extends FRigVMDispatch_CoreEquals {

}
declare const FRigVMDispatch_CoreNotEquals: FRigVMDispatch_CoreNotEquals;

declare interface FRigVMDispatch_If extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_If: FRigVMDispatch_If;

declare interface FRigVMDispatch_MakeStruct extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_MakeStruct: FRigVMDispatch_MakeStruct;

declare interface FRigVMDispatch_Print extends FRigVMDispatchFactory {

}
declare const FRigVMDispatch_Print: FRigVMDispatch_Print;

declare interface FRigVMDispatch_SelectInt32 extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_SelectInt32: FRigVMDispatch_SelectInt32;

declare interface FRigVMDispatch_SwitchInt32 extends FRigVMDispatch_CoreBase {

}
declare const FRigVMDispatch_SwitchInt32: FRigVMDispatch_SwitchInt32;

declare interface FRigVMDrawContainer {
    Instructions: TArray<FRigVMDrawInstruction>;
}
declare const FRigVMDrawContainer: FRigVMDrawContainer;

declare interface FRigVMDrawInstruction {
    Name: FName;
    PrimitiveType: ERigVMDrawSettings;
    Positions: TArray<FVector>;
    Color: FLinearColor;
    Thickness: number;
    Transform: FTransform;
    DepthPriority: ESceneDepthPriorityGroup;
    Lifetime: number;
}
declare const FRigVMDrawInstruction: FRigVMDrawInstruction;

declare interface FRigVMDrawInterface extends FRigVMDrawContainer {

}
declare const FRigVMDrawInterface: FRigVMDrawInterface;

declare interface FRigVMExecuteContext extends FRigVMExecutePin {

}
declare const FRigVMExecuteContext: FRigVMExecuteContext;

declare interface FRigVMExecuteOp extends FRigVMBaseOp {

}
declare const FRigVMExecuteOp: FRigVMExecuteOp;

declare interface FRigVMExecutePin {

}
declare const FRigVMExecutePin: FRigVMExecutePin;

declare interface FRigVMExtendedExecuteContext {

}
declare const FRigVMExtendedExecuteContext: FRigVMExtendedExecuteContext;

declare interface FRigVMExternalVariable extends FRigVMExternalVariableDef {

}
declare const FRigVMExternalVariable: FRigVMExternalVariable;

declare interface FRigVMExternalVariableDef {

}
declare const FRigVMExternalVariableDef: FRigVMExternalVariableDef;

declare interface FRigVMFourPointBezier {
    A: FVector;
    B: FVector;
    C: FVector;
    D: FVector;
}
declare const FRigVMFourPointBezier: FRigVMFourPointBezier;

declare interface FRigVMFunctionCompilationData {
    ByteCode: FRigVMByteCode;
    FunctionNames: TArray<FName>;
    WorkPropertyDescriptions: TArray<FRigVMFunctionCompilationPropertyDescription>;
    WorkPropertyPathDescriptions: TArray<FRigVMFunctionCompilationPropertyPath>;
    LiteralPropertyDescriptions: TArray<FRigVMFunctionCompilationPropertyDescription>;
    LiteralPropertyPathDescriptions: TArray<FRigVMFunctionCompilationPropertyPath>;
    DebugPropertyDescriptions: TArray<FRigVMFunctionCompilationPropertyDescription>;
    DebugPropertyPathDescriptions: TArray<FRigVMFunctionCompilationPropertyPath>;
    ExternalPropertyDescriptions: TArray<FRigVMFunctionCompilationPropertyDescription>;
    ExternalPropertyPathDescriptions: TArray<FRigVMFunctionCompilationPropertyPath>;
    ExternalRegisterIndexToVariable: Record<number, FName>;
    Operands: Record<FString, FRigVMOperand>;
    Hash: uint32;
    bEncounteredSurpressedErrors: boolean;
}
declare const FRigVMFunctionCompilationData: FRigVMFunctionCompilationData;

declare interface FRigVMFunctionCompilationPropertyDescription {
    Name: FName;
    CPPType: FString;
    CPPTypeObject: TSoftObjectPtr<UObject>;
    DefaultValue: FString;
}
declare const FRigVMFunctionCompilationPropertyDescription: FRigVMFunctionCompilationPropertyDescription;

declare interface FRigVMFunctionCompilationPropertyPath {
    PropertyIndex: number;
    HeadCPPType: FString;
    SegmentPath: FString;
}
declare const FRigVMFunctionCompilationPropertyPath: FRigVMFunctionCompilationPropertyPath;

declare interface FRigVMFunction_AccumulateBase extends FRigVMFunction_SimBase {

}
declare const FRigVMFunction_AccumulateBase: FRigVMFunction_AccumulateBase;

declare interface FRigVMFunction_AccumulateFloatAdd extends FRigVMFunction_AccumulateBase {
    Increment: number;
    InitialValue: number;
    bIntegrateDeltaTime: boolean;
    Result: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateFloatAdd: FRigVMFunction_AccumulateFloatAdd;

declare interface FRigVMFunction_AccumulateFloatLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: number;
    InitialValue: number;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateFloatLerp: FRigVMFunction_AccumulateFloatLerp;

declare interface FRigVMFunction_AccumulateFloatMul extends FRigVMFunction_AccumulateBase {
    Multiplier: number;
    InitialValue: number;
    bIntegrateDeltaTime: boolean;
    Result: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateFloatMul: FRigVMFunction_AccumulateFloatMul;

declare interface FRigVMFunction_AccumulateFloatRange extends FRigVMFunction_AccumulateBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    AccumulatedMinimum: number;
    AccumulatedMaximum: number;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateFloatRange: FRigVMFunction_AccumulateFloatRange;

declare interface FRigVMFunction_AccumulateQuatLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: FQuat;
    InitialValue: FQuat;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: FQuat;
    AccumulatedValue: FQuat;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateQuatLerp: FRigVMFunction_AccumulateQuatLerp;

declare interface FRigVMFunction_AccumulateQuatMul extends FRigVMFunction_AccumulateBase {
    Multiplier: FQuat;
    InitialValue: FQuat;
    bFlipOrder: boolean;
    bIntegrateDeltaTime: boolean;
    Result: FQuat;
    AccumulatedValue: FQuat;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateQuatMul: FRigVMFunction_AccumulateQuatMul;

declare interface FRigVMFunction_AccumulateTransformLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: FTransform;
    InitialValue: FTransform;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: FTransform;
    AccumulatedValue: FTransform;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateTransformLerp: FRigVMFunction_AccumulateTransformLerp;

declare interface FRigVMFunction_AccumulateTransformMul extends FRigVMFunction_AccumulateBase {
    Multiplier: FTransform;
    InitialValue: FTransform;
    bFlipOrder: boolean;
    bIntegrateDeltaTime: boolean;
    Result: FTransform;
    AccumulatedValue: FTransform;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateTransformMul: FRigVMFunction_AccumulateTransformMul;

declare interface FRigVMFunction_AccumulateVectorAdd extends FRigVMFunction_AccumulateBase {
    Increment: FVector;
    InitialValue: FVector;
    bIntegrateDeltaTime: boolean;
    Result: FVector;
    AccumulatedValue: FVector;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateVectorAdd: FRigVMFunction_AccumulateVectorAdd;

declare interface FRigVMFunction_AccumulateVectorLerp extends FRigVMFunction_AccumulateBase {
    TargetValue: FVector;
    InitialValue: FVector;
    Blend: number;
    bIntegrateDeltaTime: boolean;
    Result: FVector;
    AccumulatedValue: FVector;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateVectorLerp: FRigVMFunction_AccumulateVectorLerp;

declare interface FRigVMFunction_AccumulateVectorMul extends FRigVMFunction_AccumulateBase {
    Multiplier: FVector;
    InitialValue: FVector;
    bIntegrateDeltaTime: boolean;
    Result: FVector;
    AccumulatedValue: FVector;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateVectorMul: FRigVMFunction_AccumulateVectorMul;

declare interface FRigVMFunction_AccumulateVectorRange extends FRigVMFunction_AccumulateBase {
    Value: FVector;
    Minimum: FVector;
    Maximum: FVector;
    AccumulatedMinimum: FVector;
    AccumulatedMaximum: FVector;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_AccumulateVectorRange: FRigVMFunction_AccumulateVectorRange;

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
declare const FRigVMFunction_AlphaInterp: FRigVMFunction_AlphaInterp;

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
declare const FRigVMFunction_AlphaInterpQuat: FRigVMFunction_AlphaInterpQuat;

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
declare const FRigVMFunction_AlphaInterpVector: FRigVMFunction_AlphaInterpVector;

declare interface FRigVMFunction_AnimBase extends FRigVMStruct {

}
declare const FRigVMFunction_AnimBase: FRigVMFunction_AnimBase;

declare interface FRigVMFunction_AnimEasing extends FRigVMFunction_AnimBase {
    Value: number;
    Type: ERigVMAnimEasingType;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    Result: number;
}
declare const FRigVMFunction_AnimEasing: FRigVMFunction_AnimEasing;

declare interface FRigVMFunction_AnimEasingType extends FRigVMFunction_AnimBase {
    Type: ERigVMAnimEasingType;
}
declare const FRigVMFunction_AnimEasingType: FRigVMFunction_AnimEasingType;

declare interface FRigVMFunction_AnimEvalRichCurve extends FRigVMFunction_AnimBase {
    Value: number;
    Curve: FRuntimeFloatCurve;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    Result: number;
}
declare const FRigVMFunction_AnimEvalRichCurve: FRigVMFunction_AnimEvalRichCurve;

declare interface FRigVMFunction_AnimRichCurve extends FRigVMFunction_AnimBase {
    Curve: FRuntimeFloatCurve;
}
declare const FRigVMFunction_AnimRichCurve: FRigVMFunction_AnimRichCurve;

declare interface FRigVMFunction_Contains extends FRigVMFunction_NameBase {
    Name: FName;
    Search: FName;
    Result: boolean;
}
declare const FRigVMFunction_Contains: FRigVMFunction_Contains;

declare interface FRigVMFunction_ControlFlowBase extends FRigVMStruct {

}
declare const FRigVMFunction_ControlFlowBase: FRigVMFunction_ControlFlowBase;

declare interface FRigVMFunction_ControlFlowBranch extends FRigVMFunction_ControlFlowBase {
    ExecuteContext: FRigVMExecuteContext;
    Condition: boolean;
    TRUE: FRigVMExecuteContext;
    FALSE: FRigVMExecuteContext;
    Completed: FRigVMExecuteContext;
    BlockToRun: FName;
}
declare const FRigVMFunction_ControlFlowBranch: FRigVMFunction_ControlFlowBranch;

declare interface FRigVMFunction_DebugArc extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Radius: number;
    MinimumDegrees: number;
    MaximumDegrees: number;
    Thickness: number;
    Detail: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugArc: FRigVMFunction_DebugArc;

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
declare const FRigVMFunction_DebugArcNoSpace: FRigVMFunction_DebugArcNoSpace;

declare interface FRigVMFunction_DebugBase extends FRigVMStruct {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}
declare const FRigVMFunction_DebugBase: FRigVMFunction_DebugBase;

declare interface FRigVMFunction_DebugBaseMutable extends FRigVMStructMutable {
    DebugDrawSettings: FRigVMDebugDrawSettings;
}
declare const FRigVMFunction_DebugBaseMutable: FRigVMFunction_DebugBaseMutable;

declare interface FRigVMFunction_DebugBoxNoSpace extends FRigVMFunction_DebugBaseMutable {
    Box: FBox;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugBoxNoSpace: FRigVMFunction_DebugBoxNoSpace;

declare interface FRigVMFunction_DebugLineNoSpace extends FRigVMFunction_DebugBaseMutable {
    A: FVector;
    B: FVector;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugLineNoSpace: FRigVMFunction_DebugLineNoSpace;

declare interface FRigVMFunction_DebugLineStripNoSpace extends FRigVMFunction_DebugBaseMutable {
    Points: TArray<FVector>;
    Color: FLinearColor;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugLineStripNoSpace: FRigVMFunction_DebugLineStripNoSpace;

declare interface FRigVMFunction_DebugPoint extends FRigVMFunction_DebugBase {
    Vector: FVector;
    Mode: ERigUnitDebugPointMode;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugPoint: FRigVMFunction_DebugPoint;

declare interface FRigVMFunction_DebugPointMutable extends FRigVMFunction_DebugBaseMutable {
    Vector: FVector;
    Mode: ERigUnitDebugPointMode;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugPointMutable: FRigVMFunction_DebugPointMutable;

declare interface FRigVMFunction_DebugRectangle extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    Space: FName;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugRectangle: FRigVMFunction_DebugRectangle;

declare interface FRigVMFunction_DebugRectangleNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Color: FLinearColor;
    Scale: number;
    Thickness: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugRectangleNoSpace: FRigVMFunction_DebugRectangleNoSpace;

declare interface FRigVMFunction_DebugTransformArrayMutableNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transforms: TArray<FTransform>;
    ParentIndices: TArray<number>;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugTransformArrayMutableNoSpace: FRigVMFunction_DebugTransformArrayMutableNoSpace;

declare interface FRigVMFunction_DebugTransformArrayMutable_WorkData {
    DrawTransforms: TArray<FTransform>;
}
declare const FRigVMFunction_DebugTransformArrayMutable_WorkData: FRigVMFunction_DebugTransformArrayMutable_WorkData;

declare interface FRigVMFunction_DebugTransformMutableNoSpace extends FRigVMFunction_DebugBaseMutable {
    Transform: FTransform;
    Mode: ERigUnitDebugTransformMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    WorldOffset: FTransform;
    bEnabled: boolean;
}
declare const FRigVMFunction_DebugTransformMutableNoSpace: FRigVMFunction_DebugTransformMutableNoSpace;

declare interface FRigVMFunction_DeltaFromPreviousFloat extends FRigVMFunction_SimBase {
    Value: number;
    Delta: number;
    PreviousValue: number;
    Cache: number;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_DeltaFromPreviousFloat: FRigVMFunction_DeltaFromPreviousFloat;

declare interface FRigVMFunction_DeltaFromPreviousQuat extends FRigVMFunction_SimBase {
    Value: FQuat;
    Delta: FQuat;
    PreviousValue: FQuat;
    Cache: FQuat;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_DeltaFromPreviousQuat: FRigVMFunction_DeltaFromPreviousQuat;

declare interface FRigVMFunction_DeltaFromPreviousTransform extends FRigVMFunction_SimBase {
    Value: FTransform;
    Delta: FTransform;
    PreviousValue: FTransform;
    Cache: FTransform;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_DeltaFromPreviousTransform: FRigVMFunction_DeltaFromPreviousTransform;

declare interface FRigVMFunction_DeltaFromPreviousVector extends FRigVMFunction_SimBase {
    Value: FVector;
    Delta: FVector;
    PreviousValue: FVector;
    Cache: FVector;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_DeltaFromPreviousVector: FRigVMFunction_DeltaFromPreviousVector;

declare interface FRigVMFunction_EndsWith extends FRigVMFunction_NameBase {
    Name: FName;
    Ending: FName;
    Result: boolean;
}
declare const FRigVMFunction_EndsWith: FRigVMFunction_EndsWith;

declare interface FRigVMFunction_ForLoopCount extends FRigVMStructMutable {
    BlockToRun: FName;
    count: number;
    Index: number;
    Ratio: number;
    Completed: FRigVMExecuteContext;
}
declare const FRigVMFunction_ForLoopCount: FRigVMFunction_ForLoopCount;

declare interface FRigVMFunction_FramesToSeconds extends FRigVMFunction_AnimBase {
    Frames: number;
    Seconds: number;
}
declare const FRigVMFunction_FramesToSeconds: FRigVMFunction_FramesToSeconds;

declare interface FRigVMFunction_GetDeltaTime extends FRigVMFunction_AnimBase {
    Result: number;
}
declare const FRigVMFunction_GetDeltaTime: FRigVMFunction_GetDeltaTime;

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
declare const FRigVMFunction_GetWorldTime: FRigVMFunction_GetWorldTime;

declare interface FRigVMFunction_IsHostBeingDebugged extends FRigVMStruct {
    Result: boolean;
}
declare const FRigVMFunction_IsHostBeingDebugged: FRigVMFunction_IsHostBeingDebugged;

declare interface FRigVMFunction_KalmanFloat extends FRigVMFunction_SimBase {
    Value: number;
    BufferSize: number;
    Result: number;
    Buffer: TArray<number>;
    LastInsertIndex: number;
}
declare const FRigVMFunction_KalmanFloat: FRigVMFunction_KalmanFloat;

declare interface FRigVMFunction_KalmanTransform extends FRigVMFunction_SimBase {
    Value: FTransform;
    BufferSize: number;
    Result: FTransform;
    Buffer: TArray<FTransform>;
    LastInsertIndex: number;
}
declare const FRigVMFunction_KalmanTransform: FRigVMFunction_KalmanTransform;

declare interface FRigVMFunction_KalmanVector extends FRigVMFunction_SimBase {
    Value: FVector;
    BufferSize: number;
    Result: FVector;
    Buffer: TArray<FVector>;
    LastInsertIndex: number;
}
declare const FRigVMFunction_KalmanVector: FRigVMFunction_KalmanVector;

declare interface FRigVMFunction_MathBase extends FRigVMStruct {

}
declare const FRigVMFunction_MathBase: FRigVMFunction_MathBase;

declare interface FRigVMFunction_MathBoolAnd extends FRigVMFunction_MathBoolBinaryAggregateOp {

}
declare const FRigVMFunction_MathBoolAnd: FRigVMFunction_MathBoolAnd;

declare interface FRigVMFunction_MathBoolBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathBoolBase: FRigVMFunction_MathBoolBase;

declare interface FRigVMFunction_MathBoolBinaryAggregateOp extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}
declare const FRigVMFunction_MathBoolBinaryAggregateOp: FRigVMFunction_MathBoolBinaryAggregateOp;

declare interface FRigVMFunction_MathBoolBinaryOp extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}
declare const FRigVMFunction_MathBoolBinaryOp: FRigVMFunction_MathBoolBinaryOp;

declare interface FRigVMFunction_MathBoolConstFalse extends FRigVMFunction_MathBoolConstant {

}
declare const FRigVMFunction_MathBoolConstFalse: FRigVMFunction_MathBoolConstFalse;

declare interface FRigVMFunction_MathBoolConstTrue extends FRigVMFunction_MathBoolConstant {

}
declare const FRigVMFunction_MathBoolConstTrue: FRigVMFunction_MathBoolConstTrue;

declare interface FRigVMFunction_MathBoolConstant extends FRigVMFunction_MathBoolBase {
    Value: boolean;
}
declare const FRigVMFunction_MathBoolConstant: FRigVMFunction_MathBoolConstant;

declare interface FRigVMFunction_MathBoolEquals extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}
declare const FRigVMFunction_MathBoolEquals: FRigVMFunction_MathBoolEquals;

declare interface FRigVMFunction_MathBoolFlipFlop extends FRigVMFunction_MathBoolBase {
    StartValue: boolean;
    duration: number;
    Result: boolean;
    LastValue: boolean;
    TimeLeft: number;
}
declare const FRigVMFunction_MathBoolFlipFlop: FRigVMFunction_MathBoolFlipFlop;

declare interface FRigVMFunction_MathBoolMake extends FRigVMFunction_MathBoolBase {
    Value: boolean;
}
declare const FRigVMFunction_MathBoolMake: FRigVMFunction_MathBoolMake;

declare interface FRigVMFunction_MathBoolNand extends FRigVMFunction_MathBoolBinaryOp {

}
declare const FRigVMFunction_MathBoolNand: FRigVMFunction_MathBoolNand;

declare interface FRigVMFunction_MathBoolNand2 extends FRigVMFunction_MathBoolBinaryOp {

}
declare const FRigVMFunction_MathBoolNand2: FRigVMFunction_MathBoolNand2;

declare interface FRigVMFunction_MathBoolNot extends FRigVMFunction_MathBoolUnaryOp {

}
declare const FRigVMFunction_MathBoolNot: FRigVMFunction_MathBoolNot;

declare interface FRigVMFunction_MathBoolNotEquals extends FRigVMFunction_MathBoolBase {
    A: boolean;
    B: boolean;
    Result: boolean;
}
declare const FRigVMFunction_MathBoolNotEquals: FRigVMFunction_MathBoolNotEquals;

declare interface FRigVMFunction_MathBoolOnce extends FRigVMFunction_MathBoolBase {
    duration: number;
    Result: boolean;
    LastValue: boolean;
    TimeLeft: number;
}
declare const FRigVMFunction_MathBoolOnce: FRigVMFunction_MathBoolOnce;

declare interface FRigVMFunction_MathBoolOr extends FRigVMFunction_MathBoolBinaryAggregateOp {

}
declare const FRigVMFunction_MathBoolOr: FRigVMFunction_MathBoolOr;

declare interface FRigVMFunction_MathBoolToFloat extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Result: number;
}
declare const FRigVMFunction_MathBoolToFloat: FRigVMFunction_MathBoolToFloat;

declare interface FRigVMFunction_MathBoolToInteger extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Result: number;
}
declare const FRigVMFunction_MathBoolToInteger: FRigVMFunction_MathBoolToInteger;

declare interface FRigVMFunction_MathBoolToggled extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Toggled: boolean;
    Initialized: boolean;
    LastValue: boolean;
}
declare const FRigVMFunction_MathBoolToggled: FRigVMFunction_MathBoolToggled;

declare interface FRigVMFunction_MathBoolUnaryOp extends FRigVMFunction_MathBoolBase {
    Value: boolean;
    Result: boolean;
}
declare const FRigVMFunction_MathBoolUnaryOp: FRigVMFunction_MathBoolUnaryOp;

declare interface FRigVMFunction_MathBoxBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathBoxBase: FRigVMFunction_MathBoxBase;

declare interface FRigVMFunction_MathBoxExpand extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Amount: FVector;
    Result: FBox;
}
declare const FRigVMFunction_MathBoxExpand: FRigVMFunction_MathBoxExpand;

declare interface FRigVMFunction_MathBoxFromArray extends FRigVMFunction_MathBoxBase {
    Array: TArray<FVector>;
    Box: FBox;
    Minimum: FVector;
    Maximum: FVector;
    Center: FVector;
    Size: FVector;
}
declare const FRigVMFunction_MathBoxFromArray: FRigVMFunction_MathBoxFromArray;

declare interface FRigVMFunction_MathBoxGetCenter extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Center: FVector;
}
declare const FRigVMFunction_MathBoxGetCenter: FRigVMFunction_MathBoxGetCenter;

declare interface FRigVMFunction_MathBoxGetDistance extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    position: FVector;
    Square: boolean;
    Valid: boolean;
    Distance: number;
}
declare const FRigVMFunction_MathBoxGetDistance: FRigVMFunction_MathBoxGetDistance;

declare interface FRigVMFunction_MathBoxGetSize extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Size: FVector;
    Extent: FVector;
}
declare const FRigVMFunction_MathBoxGetSize: FRigVMFunction_MathBoxGetSize;

declare interface FRigVMFunction_MathBoxGetVolume extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Volume: number;
}
declare const FRigVMFunction_MathBoxGetVolume: FRigVMFunction_MathBoxGetVolume;

declare interface FRigVMFunction_MathBoxIsInside extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    position: FVector;
    Result: boolean;
}
declare const FRigVMFunction_MathBoxIsInside: FRigVMFunction_MathBoxIsInside;

declare interface FRigVMFunction_MathBoxIsValid extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Valid: boolean;
}
declare const FRigVMFunction_MathBoxIsValid: FRigVMFunction_MathBoxIsValid;

declare interface FRigVMFunction_MathBoxMoveTo extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Center: FVector;
    Result: FBox;
}
declare const FRigVMFunction_MathBoxMoveTo: FRigVMFunction_MathBoxMoveTo;

declare interface FRigVMFunction_MathBoxShift extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Amount: FVector;
    Result: FBox;
}
declare const FRigVMFunction_MathBoxShift: FRigVMFunction_MathBoxShift;

declare interface FRigVMFunction_MathBoxTransform extends FRigVMFunction_MathBoxBase {
    Box: FBox;
    Transform: FTransform;
    Result: FBox;
}
declare const FRigVMFunction_MathBoxTransform: FRigVMFunction_MathBoxTransform;

declare interface FRigVMFunction_MathColorAdd extends FRigVMFunction_MathColorBinaryAggregateOp {

}
declare const FRigVMFunction_MathColorAdd: FRigVMFunction_MathColorAdd;

declare interface FRigVMFunction_MathColorBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathColorBase: FRigVMFunction_MathColorBase;

declare interface FRigVMFunction_MathColorBinaryAggregateOp extends FRigVMFunction_MathColorBase {
    A: FLinearColor;
    B: FLinearColor;
    Result: FLinearColor;
}
declare const FRigVMFunction_MathColorBinaryAggregateOp: FRigVMFunction_MathColorBinaryAggregateOp;

declare interface FRigVMFunction_MathColorBinaryOp extends FRigVMFunction_MathColorBase {
    A: FLinearColor;
    B: FLinearColor;
    Result: FLinearColor;
}
declare const FRigVMFunction_MathColorBinaryOp: FRigVMFunction_MathColorBinaryOp;

declare interface FRigVMFunction_MathColorFromDouble extends FRigVMFunction_MathColorBase {
    Value: number;
    Result: FLinearColor;
}
declare const FRigVMFunction_MathColorFromDouble: FRigVMFunction_MathColorFromDouble;

declare interface FRigVMFunction_MathColorFromFloat extends FRigVMFunction_MathColorBase {
    Value: number;
    Result: FLinearColor;
}
declare const FRigVMFunction_MathColorFromFloat: FRigVMFunction_MathColorFromFloat;

declare interface FRigVMFunction_MathColorLerp extends FRigVMFunction_MathColorBase {
    A: FLinearColor;
    B: FLinearColor;
    T: number;
    Result: FLinearColor;
}
declare const FRigVMFunction_MathColorLerp: FRigVMFunction_MathColorLerp;

declare interface FRigVMFunction_MathColorMake extends FRigVMFunction_MathColorBase {
    R: number;
    G: number;
    B: number;
    A: number;
    Result: FLinearColor;
}
declare const FRigVMFunction_MathColorMake: FRigVMFunction_MathColorMake;

declare interface FRigVMFunction_MathColorMul extends FRigVMFunction_MathColorBinaryAggregateOp {

}
declare const FRigVMFunction_MathColorMul: FRigVMFunction_MathColorMul;

declare interface FRigVMFunction_MathColorSub extends FRigVMFunction_MathColorBinaryOp {

}
declare const FRigVMFunction_MathColorSub: FRigVMFunction_MathColorSub;

declare interface FRigVMFunction_MathDistanceToPlane extends FRigVMFunction_MathVectorBase {
    Point: FVector;
    PlanePoint: FVector;
    PlaneNormal: FVector;
    ClosestPointOnPlane: FVector;
    SignedDistance: number;
}
declare const FRigVMFunction_MathDistanceToPlane: FRigVMFunction_MathDistanceToPlane;

declare interface FRigVMFunction_MathDoubleAbs extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleAbs: FRigVMFunction_MathDoubleAbs;

declare interface FRigVMFunction_MathDoubleAcos extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleAcos: FRigVMFunction_MathDoubleAcos;

declare interface FRigVMFunction_MathDoubleAdd extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}
declare const FRigVMFunction_MathDoubleAdd: FRigVMFunction_MathDoubleAdd;

declare interface FRigVMFunction_MathDoubleArrayAverage extends FRigVMFunction_MathDoubleBase {
    Array: TArray<number>;
    Average: number;
}
declare const FRigVMFunction_MathDoubleArrayAverage: FRigVMFunction_MathDoubleArrayAverage;

declare interface FRigVMFunction_MathDoubleArraySum extends FRigVMFunction_MathDoubleBase {
    Array: TArray<number>;
    Sum: number;
}
declare const FRigVMFunction_MathDoubleArraySum: FRigVMFunction_MathDoubleArraySum;

declare interface FRigVMFunction_MathDoubleAsin extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleAsin: FRigVMFunction_MathDoubleAsin;

declare interface FRigVMFunction_MathDoubleAtan extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleAtan: FRigVMFunction_MathDoubleAtan;

declare interface FRigVMFunction_MathDoubleAtan2 extends FRigVMFunction_MathDoubleBinaryOp {

}
declare const FRigVMFunction_MathDoubleAtan2: FRigVMFunction_MathDoubleAtan2;

declare interface FRigVMFunction_MathDoubleBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathDoubleBase: FRigVMFunction_MathDoubleBase;

declare interface FRigVMFunction_MathDoubleBinaryAggregateOp extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleBinaryAggregateOp: FRigVMFunction_MathDoubleBinaryAggregateOp;

declare interface FRigVMFunction_MathDoubleBinaryOp extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleBinaryOp: FRigVMFunction_MathDoubleBinaryOp;

declare interface FRigVMFunction_MathDoubleCeil extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
    int: number;
}
declare const FRigVMFunction_MathDoubleCeil: FRigVMFunction_MathDoubleCeil;

declare interface FRigVMFunction_MathDoubleClamp extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleClamp: FRigVMFunction_MathDoubleClamp;

declare interface FRigVMFunction_MathDoubleConstE extends FRigVMFunction_MathDoubleConstant {

}
declare const FRigVMFunction_MathDoubleConstE: FRigVMFunction_MathDoubleConstE;

declare interface FRigVMFunction_MathDoubleConstHalfPi extends FRigVMFunction_MathDoubleConstant {

}
declare const FRigVMFunction_MathDoubleConstHalfPi: FRigVMFunction_MathDoubleConstHalfPi;

declare interface FRigVMFunction_MathDoubleConstPi extends FRigVMFunction_MathDoubleConstant {

}
declare const FRigVMFunction_MathDoubleConstPi: FRigVMFunction_MathDoubleConstPi;

declare interface FRigVMFunction_MathDoubleConstTwoPi extends FRigVMFunction_MathDoubleConstant {

}
declare const FRigVMFunction_MathDoubleConstTwoPi: FRigVMFunction_MathDoubleConstTwoPi;

declare interface FRigVMFunction_MathDoubleConstant extends FRigVMFunction_MathDoubleBase {
    Value: number;
}
declare const FRigVMFunction_MathDoubleConstant: FRigVMFunction_MathDoubleConstant;

declare interface FRigVMFunction_MathDoubleCos extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleCos: FRigVMFunction_MathDoubleCos;

declare interface FRigVMFunction_MathDoubleDeg extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleDeg: FRigVMFunction_MathDoubleDeg;

declare interface FRigVMFunction_MathDoubleDiv extends FRigVMFunction_MathDoubleBinaryOp {

}
declare const FRigVMFunction_MathDoubleDiv: FRigVMFunction_MathDoubleDiv;

declare interface FRigVMFunction_MathDoubleEquals extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleEquals: FRigVMFunction_MathDoubleEquals;

declare interface FRigVMFunction_MathDoubleExponential extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleExponential: FRigVMFunction_MathDoubleExponential;

declare interface FRigVMFunction_MathDoubleFloor extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
    int: number;
}
declare const FRigVMFunction_MathDoubleFloor: FRigVMFunction_MathDoubleFloor;

declare interface FRigVMFunction_MathDoubleGreater extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleGreater: FRigVMFunction_MathDoubleGreater;

declare interface FRigVMFunction_MathDoubleGreaterEqual extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleGreaterEqual: FRigVMFunction_MathDoubleGreaterEqual;

declare interface FRigVMFunction_MathDoubleIsNearlyEqual extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Tolerance: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleIsNearlyEqual: FRigVMFunction_MathDoubleIsNearlyEqual;

declare interface FRigVMFunction_MathDoubleIsNearlyZero extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Tolerance: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleIsNearlyZero: FRigVMFunction_MathDoubleIsNearlyZero;

declare interface FRigVMFunction_MathDoubleLawOfCosine extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    C: number;
    AlphaAngle: number;
    BetaAngle: number;
    GammaAngle: number;
    bValid: boolean;
}
declare const FRigVMFunction_MathDoubleLawOfCosine: FRigVMFunction_MathDoubleLawOfCosine;

declare interface FRigVMFunction_MathDoubleLerp extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    T: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleLerp: FRigVMFunction_MathDoubleLerp;

declare interface FRigVMFunction_MathDoubleLess extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleLess: FRigVMFunction_MathDoubleLess;

declare interface FRigVMFunction_MathDoubleLessEqual extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleLessEqual: FRigVMFunction_MathDoubleLessEqual;

declare interface FRigVMFunction_MathDoubleMake extends FRigVMFunction_MathDoubleBase {
    Value: number;
}
declare const FRigVMFunction_MathDoubleMake: FRigVMFunction_MathDoubleMake;

declare interface FRigVMFunction_MathDoubleMax extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}
declare const FRigVMFunction_MathDoubleMax: FRigVMFunction_MathDoubleMax;

declare interface FRigVMFunction_MathDoubleMin extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}
declare const FRigVMFunction_MathDoubleMin: FRigVMFunction_MathDoubleMin;

declare interface FRigVMFunction_MathDoubleMod extends FRigVMFunction_MathDoubleBinaryOp {

}
declare const FRigVMFunction_MathDoubleMod: FRigVMFunction_MathDoubleMod;

declare interface FRigVMFunction_MathDoubleMul extends FRigVMFunction_MathDoubleBinaryAggregateOp {

}
declare const FRigVMFunction_MathDoubleMul: FRigVMFunction_MathDoubleMul;

declare interface FRigVMFunction_MathDoubleNegate extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleNegate: FRigVMFunction_MathDoubleNegate;

declare interface FRigVMFunction_MathDoubleNotEquals extends FRigVMFunction_MathDoubleBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathDoubleNotEquals: FRigVMFunction_MathDoubleNotEquals;

declare interface FRigVMFunction_MathDoublePow extends FRigVMFunction_MathDoubleBinaryOp {

}
declare const FRigVMFunction_MathDoublePow: FRigVMFunction_MathDoublePow;

declare interface FRigVMFunction_MathDoubleRad extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleRad: FRigVMFunction_MathDoubleRad;

declare interface FRigVMFunction_MathDoubleRemap extends FRigVMFunction_MathDoubleBase {
    Value: number;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    bClamp: boolean;
    Result: number;
}
declare const FRigVMFunction_MathDoubleRemap: FRigVMFunction_MathDoubleRemap;

declare interface FRigVMFunction_MathDoubleRound extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
    int: number;
}
declare const FRigVMFunction_MathDoubleRound: FRigVMFunction_MathDoubleRound;

declare interface FRigVMFunction_MathDoubleSign extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleSign: FRigVMFunction_MathDoubleSign;

declare interface FRigVMFunction_MathDoubleSin extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleSin: FRigVMFunction_MathDoubleSin;

declare interface FRigVMFunction_MathDoubleSqrt extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleSqrt: FRigVMFunction_MathDoubleSqrt;

declare interface FRigVMFunction_MathDoubleSub extends FRigVMFunction_MathDoubleBinaryOp {

}
declare const FRigVMFunction_MathDoubleSub: FRigVMFunction_MathDoubleSub;

declare interface FRigVMFunction_MathDoubleTan extends FRigVMFunction_MathDoubleUnaryOp {

}
declare const FRigVMFunction_MathDoubleTan: FRigVMFunction_MathDoubleTan;

declare interface FRigVMFunction_MathDoubleToFloat extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleToFloat: FRigVMFunction_MathDoubleToFloat;

declare interface FRigVMFunction_MathDoubleToInt extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleToInt: FRigVMFunction_MathDoubleToInt;

declare interface FRigVMFunction_MathDoubleUnaryOp extends FRigVMFunction_MathDoubleBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathDoubleUnaryOp: FRigVMFunction_MathDoubleUnaryOp;

declare interface FRigVMFunction_MathFloatAbs extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatAbs: FRigVMFunction_MathFloatAbs;

declare interface FRigVMFunction_MathFloatAcos extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatAcos: FRigVMFunction_MathFloatAcos;

declare interface FRigVMFunction_MathFloatAdd extends FRigVMFunction_MathFloatBinaryAggregateOp {

}
declare const FRigVMFunction_MathFloatAdd: FRigVMFunction_MathFloatAdd;

declare interface FRigVMFunction_MathFloatArrayAverage extends FRigVMFunction_MathFloatBase {
    Array: TArray<number>;
    Average: number;
}
declare const FRigVMFunction_MathFloatArrayAverage: FRigVMFunction_MathFloatArrayAverage;

declare interface FRigVMFunction_MathFloatArraySum extends FRigVMFunction_MathFloatBase {
    Array: TArray<number>;
    Sum: number;
}
declare const FRigVMFunction_MathFloatArraySum: FRigVMFunction_MathFloatArraySum;

declare interface FRigVMFunction_MathFloatAsin extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatAsin: FRigVMFunction_MathFloatAsin;

declare interface FRigVMFunction_MathFloatAtan extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatAtan: FRigVMFunction_MathFloatAtan;

declare interface FRigVMFunction_MathFloatAtan2 extends FRigVMFunction_MathFloatBinaryOp {

}
declare const FRigVMFunction_MathFloatAtan2: FRigVMFunction_MathFloatAtan2;

declare interface FRigVMFunction_MathFloatBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathFloatBase: FRigVMFunction_MathFloatBase;

declare interface FRigVMFunction_MathFloatBinaryAggregateOp extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatBinaryAggregateOp: FRigVMFunction_MathFloatBinaryAggregateOp;

declare interface FRigVMFunction_MathFloatBinaryOp extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatBinaryOp: FRigVMFunction_MathFloatBinaryOp;

declare interface FRigVMFunction_MathFloatCeil extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
    int: number;
}
declare const FRigVMFunction_MathFloatCeil: FRigVMFunction_MathFloatCeil;

declare interface FRigVMFunction_MathFloatClamp extends FRigVMFunction_MathFloatBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatClamp: FRigVMFunction_MathFloatClamp;

declare interface FRigVMFunction_MathFloatConstE extends FRigVMFunction_MathFloatConstant {

}
declare const FRigVMFunction_MathFloatConstE: FRigVMFunction_MathFloatConstE;

declare interface FRigVMFunction_MathFloatConstHalfPi extends FRigVMFunction_MathFloatConstant {

}
declare const FRigVMFunction_MathFloatConstHalfPi: FRigVMFunction_MathFloatConstHalfPi;

declare interface FRigVMFunction_MathFloatConstPi extends FRigVMFunction_MathFloatConstant {

}
declare const FRigVMFunction_MathFloatConstPi: FRigVMFunction_MathFloatConstPi;

declare interface FRigVMFunction_MathFloatConstTwoPi extends FRigVMFunction_MathFloatConstant {

}
declare const FRigVMFunction_MathFloatConstTwoPi: FRigVMFunction_MathFloatConstTwoPi;

declare interface FRigVMFunction_MathFloatConstant extends FRigVMFunction_MathFloatBase {
    Value: number;
}
declare const FRigVMFunction_MathFloatConstant: FRigVMFunction_MathFloatConstant;

declare interface FRigVMFunction_MathFloatCos extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatCos: FRigVMFunction_MathFloatCos;

declare interface FRigVMFunction_MathFloatDeg extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatDeg: FRigVMFunction_MathFloatDeg;

declare interface FRigVMFunction_MathFloatDiv extends FRigVMFunction_MathFloatBinaryOp {

}
declare const FRigVMFunction_MathFloatDiv: FRigVMFunction_MathFloatDiv;

declare interface FRigVMFunction_MathFloatEquals extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatEquals: FRigVMFunction_MathFloatEquals;

declare interface FRigVMFunction_MathFloatExponential extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatExponential: FRigVMFunction_MathFloatExponential;

declare interface FRigVMFunction_MathFloatFloor extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
    int: number;
}
declare const FRigVMFunction_MathFloatFloor: FRigVMFunction_MathFloatFloor;

declare interface FRigVMFunction_MathFloatGreater extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatGreater: FRigVMFunction_MathFloatGreater;

declare interface FRigVMFunction_MathFloatGreaterEqual extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatGreaterEqual: FRigVMFunction_MathFloatGreaterEqual;

declare interface FRigVMFunction_MathFloatIsNearlyEqual extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Tolerance: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatIsNearlyEqual: FRigVMFunction_MathFloatIsNearlyEqual;

declare interface FRigVMFunction_MathFloatIsNearlyZero extends FRigVMFunction_MathFloatBase {
    Value: number;
    Tolerance: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatIsNearlyZero: FRigVMFunction_MathFloatIsNearlyZero;

declare interface FRigVMFunction_MathFloatLawOfCosine extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    C: number;
    AlphaAngle: number;
    BetaAngle: number;
    GammaAngle: number;
    bValid: boolean;
}
declare const FRigVMFunction_MathFloatLawOfCosine: FRigVMFunction_MathFloatLawOfCosine;

declare interface FRigVMFunction_MathFloatLerp extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    T: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatLerp: FRigVMFunction_MathFloatLerp;

declare interface FRigVMFunction_MathFloatLess extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatLess: FRigVMFunction_MathFloatLess;

declare interface FRigVMFunction_MathFloatLessEqual extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatLessEqual: FRigVMFunction_MathFloatLessEqual;

declare interface FRigVMFunction_MathFloatMake extends FRigVMFunction_MathFloatBase {
    Value: number;
}
declare const FRigVMFunction_MathFloatMake: FRigVMFunction_MathFloatMake;

declare interface FRigVMFunction_MathFloatMax extends FRigVMFunction_MathFloatBinaryAggregateOp {

}
declare const FRigVMFunction_MathFloatMax: FRigVMFunction_MathFloatMax;

declare interface FRigVMFunction_MathFloatMin extends FRigVMFunction_MathFloatBinaryAggregateOp {

}
declare const FRigVMFunction_MathFloatMin: FRigVMFunction_MathFloatMin;

declare interface FRigVMFunction_MathFloatMod extends FRigVMFunction_MathFloatBinaryOp {

}
declare const FRigVMFunction_MathFloatMod: FRigVMFunction_MathFloatMod;

declare interface FRigVMFunction_MathFloatMul extends FRigVMFunction_MathFloatBinaryAggregateOp {

}
declare const FRigVMFunction_MathFloatMul: FRigVMFunction_MathFloatMul;

declare interface FRigVMFunction_MathFloatNegate extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatNegate: FRigVMFunction_MathFloatNegate;

declare interface FRigVMFunction_MathFloatNotEquals extends FRigVMFunction_MathFloatBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathFloatNotEquals: FRigVMFunction_MathFloatNotEquals;

declare interface FRigVMFunction_MathFloatPow extends FRigVMFunction_MathFloatBinaryOp {

}
declare const FRigVMFunction_MathFloatPow: FRigVMFunction_MathFloatPow;

declare interface FRigVMFunction_MathFloatRad extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatRad: FRigVMFunction_MathFloatRad;

declare interface FRigVMFunction_MathFloatRemap extends FRigVMFunction_MathFloatBase {
    Value: number;
    SourceMinimum: number;
    SourceMaximum: number;
    TargetMinimum: number;
    TargetMaximum: number;
    bClamp: boolean;
    Result: number;
}
declare const FRigVMFunction_MathFloatRemap: FRigVMFunction_MathFloatRemap;

declare interface FRigVMFunction_MathFloatRound extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
    int: number;
}
declare const FRigVMFunction_MathFloatRound: FRigVMFunction_MathFloatRound;

declare interface FRigVMFunction_MathFloatSelectBool extends FRigVMFunction_MathFloatBase {
    Condition: boolean;
    IfTrue: number;
    IfFalse: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatSelectBool: FRigVMFunction_MathFloatSelectBool;

declare interface FRigVMFunction_MathFloatSign extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatSign: FRigVMFunction_MathFloatSign;

declare interface FRigVMFunction_MathFloatSin extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatSin: FRigVMFunction_MathFloatSin;

declare interface FRigVMFunction_MathFloatSqrt extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatSqrt: FRigVMFunction_MathFloatSqrt;

declare interface FRigVMFunction_MathFloatSub extends FRigVMFunction_MathFloatBinaryOp {

}
declare const FRigVMFunction_MathFloatSub: FRigVMFunction_MathFloatSub;

declare interface FRigVMFunction_MathFloatTan extends FRigVMFunction_MathFloatUnaryOp {

}
declare const FRigVMFunction_MathFloatTan: FRigVMFunction_MathFloatTan;

declare interface FRigVMFunction_MathFloatToDouble extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatToDouble: FRigVMFunction_MathFloatToDouble;

declare interface FRigVMFunction_MathFloatToInt extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatToInt: FRigVMFunction_MathFloatToInt;

declare interface FRigVMFunction_MathFloatUnaryOp extends FRigVMFunction_MathFloatBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathFloatUnaryOp: FRigVMFunction_MathFloatUnaryOp;

declare interface FRigVMFunction_MathIntAbs extends FRigVMFunction_MathIntUnaryOp {

}
declare const FRigVMFunction_MathIntAbs: FRigVMFunction_MathIntAbs;

declare interface FRigVMFunction_MathIntAdd extends FRigVMFunction_MathIntBinaryAggregateOp {

}
declare const FRigVMFunction_MathIntAdd: FRigVMFunction_MathIntAdd;

declare interface FRigVMFunction_MathIntArrayAverage extends FRigVMFunction_MathIntBase {
    Array: TArray<number>;
    Average: number;
}
declare const FRigVMFunction_MathIntArrayAverage: FRigVMFunction_MathIntArrayAverage;

declare interface FRigVMFunction_MathIntArraySum extends FRigVMFunction_MathIntBase {
    Array: TArray<number>;
    Sum: number;
}
declare const FRigVMFunction_MathIntArraySum: FRigVMFunction_MathIntArraySum;

declare interface FRigVMFunction_MathIntBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathIntBase: FRigVMFunction_MathIntBase;

declare interface FRigVMFunction_MathIntBinaryAggregateOp extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: number;
}
declare const FRigVMFunction_MathIntBinaryAggregateOp: FRigVMFunction_MathIntBinaryAggregateOp;

declare interface FRigVMFunction_MathIntBinaryOp extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: number;
}
declare const FRigVMFunction_MathIntBinaryOp: FRigVMFunction_MathIntBinaryOp;

declare interface FRigVMFunction_MathIntClamp extends FRigVMFunction_MathIntBase {
    Value: number;
    Minimum: number;
    Maximum: number;
    Result: number;
}
declare const FRigVMFunction_MathIntClamp: FRigVMFunction_MathIntClamp;

declare interface FRigVMFunction_MathIntDiv extends FRigVMFunction_MathIntBinaryOp {

}
declare const FRigVMFunction_MathIntDiv: FRigVMFunction_MathIntDiv;

declare interface FRigVMFunction_MathIntEquals extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathIntEquals: FRigVMFunction_MathIntEquals;

declare interface FRigVMFunction_MathIntGreater extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathIntGreater: FRigVMFunction_MathIntGreater;

declare interface FRigVMFunction_MathIntGreaterEqual extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathIntGreaterEqual: FRigVMFunction_MathIntGreaterEqual;

declare interface FRigVMFunction_MathIntLess extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathIntLess: FRigVMFunction_MathIntLess;

declare interface FRigVMFunction_MathIntLessEqual extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathIntLessEqual: FRigVMFunction_MathIntLessEqual;

declare interface FRigVMFunction_MathIntMake extends FRigVMFunction_MathIntBase {
    Value: number;
}
declare const FRigVMFunction_MathIntMake: FRigVMFunction_MathIntMake;

declare interface FRigVMFunction_MathIntMax extends FRigVMFunction_MathIntBinaryAggregateOp {

}
declare const FRigVMFunction_MathIntMax: FRigVMFunction_MathIntMax;

declare interface FRigVMFunction_MathIntMin extends FRigVMFunction_MathIntBinaryAggregateOp {

}
declare const FRigVMFunction_MathIntMin: FRigVMFunction_MathIntMin;

declare interface FRigVMFunction_MathIntMod extends FRigVMFunction_MathIntBinaryOp {

}
declare const FRigVMFunction_MathIntMod: FRigVMFunction_MathIntMod;

declare interface FRigVMFunction_MathIntMul extends FRigVMFunction_MathIntBinaryAggregateOp {

}
declare const FRigVMFunction_MathIntMul: FRigVMFunction_MathIntMul;

declare interface FRigVMFunction_MathIntNegate extends FRigVMFunction_MathIntUnaryOp {

}
declare const FRigVMFunction_MathIntNegate: FRigVMFunction_MathIntNegate;

declare interface FRigVMFunction_MathIntNotEquals extends FRigVMFunction_MathIntBase {
    A: number;
    B: number;
    Result: boolean;
}
declare const FRigVMFunction_MathIntNotEquals: FRigVMFunction_MathIntNotEquals;

declare interface FRigVMFunction_MathIntPow extends FRigVMFunction_MathIntBinaryOp {

}
declare const FRigVMFunction_MathIntPow: FRigVMFunction_MathIntPow;

declare interface FRigVMFunction_MathIntSign extends FRigVMFunction_MathIntUnaryOp {

}
declare const FRigVMFunction_MathIntSign: FRigVMFunction_MathIntSign;

declare interface FRigVMFunction_MathIntSub extends FRigVMFunction_MathIntBinaryOp {

}
declare const FRigVMFunction_MathIntSub: FRigVMFunction_MathIntSub;

declare interface FRigVMFunction_MathIntToDouble extends FRigVMFunction_MathIntBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathIntToDouble: FRigVMFunction_MathIntToDouble;

declare interface FRigVMFunction_MathIntToFloat extends FRigVMFunction_MathIntBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathIntToFloat: FRigVMFunction_MathIntToFloat;

declare interface FRigVMFunction_MathIntToName extends FRigVMFunction_MathIntBase {
    Number: number;
    PaddedSize: number;
    Result: FName;
}
declare const FRigVMFunction_MathIntToName: FRigVMFunction_MathIntToName;

declare interface FRigVMFunction_MathIntToString extends FRigVMFunction_MathIntBase {
    Number: number;
    PaddedSize: number;
    Result: FString;
}
declare const FRigVMFunction_MathIntToString: FRigVMFunction_MathIntToString;

declare interface FRigVMFunction_MathIntUnaryOp extends FRigVMFunction_MathIntBase {
    Value: number;
    Result: number;
}
declare const FRigVMFunction_MathIntUnaryOp: FRigVMFunction_MathIntUnaryOp;

declare interface FRigVMFunction_MathIntersectPlane extends FRigVMFunction_MathVectorBase {
    Start: FVector;
    Direction: FVector;
    PlanePoint: FVector;
    PlaneNormal: FVector;
    Result: FVector;
    Distance: number;
}
declare const FRigVMFunction_MathIntersectPlane: FRigVMFunction_MathIntersectPlane;

declare interface FRigVMFunction_MathMatrixBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathMatrixBase: FRigVMFunction_MathMatrixBase;

declare interface FRigVMFunction_MathMatrixBinaryAggregateOp extends FRigVMFunction_MathMatrixBase {
    A: FMatrix;
    B: FMatrix;
    Result: FMatrix;
}
declare const FRigVMFunction_MathMatrixBinaryAggregateOp: FRigVMFunction_MathMatrixBinaryAggregateOp;

declare interface FRigVMFunction_MathMatrixBinaryOp extends FRigVMFunction_MathMatrixBase {
    A: FMatrix;
    B: FMatrix;
    Result: FMatrix;
}
declare const FRigVMFunction_MathMatrixBinaryOp: FRigVMFunction_MathMatrixBinaryOp;

declare interface FRigVMFunction_MathMatrixFromTransform extends FRigVMFunction_MathMatrixBase {
    Transform: FTransform;
    Result: FMatrix;
}
declare const FRigVMFunction_MathMatrixFromTransform: FRigVMFunction_MathMatrixFromTransform;

declare interface FRigVMFunction_MathMatrixFromTransformV2 extends FRigVMFunction_MathMatrixBase {
    Value: FTransform;
    Result: FMatrix;
}
declare const FRigVMFunction_MathMatrixFromTransformV2: FRigVMFunction_MathMatrixFromTransformV2;

declare interface FRigVMFunction_MathMatrixFromVectors extends FRigVMFunction_MathMatrixBase {
    Origin: FVector;
    X: FVector;
    Y: FVector;
    Z: FVector;
    Result: FMatrix;
}
declare const FRigVMFunction_MathMatrixFromVectors: FRigVMFunction_MathMatrixFromVectors;

declare interface FRigVMFunction_MathMatrixInverse extends FRigVMFunction_MathMatrixUnaryOp {

}
declare const FRigVMFunction_MathMatrixInverse: FRigVMFunction_MathMatrixInverse;

declare interface FRigVMFunction_MathMatrixMul extends FRigVMFunction_MathMatrixBinaryAggregateOp {

}
declare const FRigVMFunction_MathMatrixMul: FRigVMFunction_MathMatrixMul;

declare interface FRigVMFunction_MathMatrixToTransform extends FRigVMFunction_MathMatrixBase {
    Value: FMatrix;
    Result: FTransform;
}
declare const FRigVMFunction_MathMatrixToTransform: FRigVMFunction_MathMatrixToTransform;

declare interface FRigVMFunction_MathMatrixToVectors extends FRigVMFunction_MathMatrixBase {
    Value: FMatrix;
    Origin: FVector;
    X: FVector;
    Y: FVector;
    Z: FVector;
}
declare const FRigVMFunction_MathMatrixToVectors: FRigVMFunction_MathMatrixToVectors;

declare interface FRigVMFunction_MathMatrixUnaryOp extends FRigVMFunction_MathMatrixBase {
    Value: FMatrix;
    Result: FMatrix;
}
declare const FRigVMFunction_MathMatrixUnaryOp: FRigVMFunction_MathMatrixUnaryOp;

declare interface FRigVMFunction_MathMutableBase extends FRigVMStructMutable {

}
declare const FRigVMFunction_MathMutableBase: FRigVMFunction_MathMutableBase;

declare interface FRigVMFunction_MathQuaternionBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathQuaternionBase: FRigVMFunction_MathQuaternionBase;

declare interface FRigVMFunction_MathQuaternionBinaryAggregateOp extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionBinaryAggregateOp: FRigVMFunction_MathQuaternionBinaryAggregateOp;

declare interface FRigVMFunction_MathQuaternionBinaryOp extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionBinaryOp: FRigVMFunction_MathQuaternionBinaryOp;

declare interface FRigVMFunction_MathQuaternionDot extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: number;
}
declare const FRigVMFunction_MathQuaternionDot: FRigVMFunction_MathQuaternionDot;

declare interface FRigVMFunction_MathQuaternionEquals extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: boolean;
}
declare const FRigVMFunction_MathQuaternionEquals: FRigVMFunction_MathQuaternionEquals;

declare interface FRigVMFunction_MathQuaternionFromAxisAndAngle extends FRigVMFunction_MathQuaternionBase {
    Axis: FVector;
    Angle: number;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionFromAxisAndAngle: FRigVMFunction_MathQuaternionFromAxisAndAngle;

declare interface FRigVMFunction_MathQuaternionFromEuler extends FRigVMFunction_MathQuaternionBase {
    Euler: FVector;
    RotationOrder: EEulerRotationOrder;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionFromEuler: FRigVMFunction_MathQuaternionFromEuler;

declare interface FRigVMFunction_MathQuaternionFromRotator extends FRigVMFunction_MathQuaternionBase {
    Rotator: FRotator;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionFromRotator: FRigVMFunction_MathQuaternionFromRotator;

declare interface FRigVMFunction_MathQuaternionFromRotatorV2 extends FRigVMFunction_MathQuaternionBase {
    Value: FRotator;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionFromRotatorV2: FRigVMFunction_MathQuaternionFromRotatorV2;

declare interface FRigVMFunction_MathQuaternionFromTwoVectors extends FRigVMFunction_MathQuaternionBase {
    A: FVector;
    B: FVector;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionFromTwoVectors: FRigVMFunction_MathQuaternionFromTwoVectors;

declare interface FRigVMFunction_MathQuaternionGetAxis extends FRigVMFunction_MathQuaternionBase {
    Quaternion: FQuat;
    Axis: EAxis;
    Result: FVector;
}
declare const FRigVMFunction_MathQuaternionGetAxis: FRigVMFunction_MathQuaternionGetAxis;

declare interface FRigVMFunction_MathQuaternionInverse extends FRigVMFunction_MathQuaternionUnaryOp {

}
declare const FRigVMFunction_MathQuaternionInverse: FRigVMFunction_MathQuaternionInverse;

declare interface FRigVMFunction_MathQuaternionMake extends FRigVMFunction_MathQuaternionBase {
    X: number;
    Y: number;
    Z: number;
    W: number;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionMake: FRigVMFunction_MathQuaternionMake;

declare interface FRigVMFunction_MathQuaternionMakeAbsolute extends FRigVMFunction_MathQuaternionBase {
    Local: FQuat;
    Parent: FQuat;
    Global: FQuat;
}
declare const FRigVMFunction_MathQuaternionMakeAbsolute: FRigVMFunction_MathQuaternionMakeAbsolute;

declare interface FRigVMFunction_MathQuaternionMakeRelative extends FRigVMFunction_MathQuaternionBase {
    Global: FQuat;
    Parent: FQuat;
    Local: FQuat;
}
declare const FRigVMFunction_MathQuaternionMakeRelative: FRigVMFunction_MathQuaternionMakeRelative;

declare interface FRigVMFunction_MathQuaternionMirrorTransform extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    CentralTransform: FTransform;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionMirrorTransform: FRigVMFunction_MathQuaternionMirrorTransform;

declare interface FRigVMFunction_MathQuaternionMul extends FRigVMFunction_MathQuaternionBinaryAggregateOp {

}
declare const FRigVMFunction_MathQuaternionMul: FRigVMFunction_MathQuaternionMul;

declare interface FRigVMFunction_MathQuaternionNotEquals extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    Result: boolean;
}
declare const FRigVMFunction_MathQuaternionNotEquals: FRigVMFunction_MathQuaternionNotEquals;

declare interface FRigVMFunction_MathQuaternionRotateVector extends FRigVMFunction_MathQuaternionBase {
    Transform: FQuat;
    Vector: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathQuaternionRotateVector: FRigVMFunction_MathQuaternionRotateVector;

declare interface FRigVMFunction_MathQuaternionRotationOrder extends FRigVMFunction_MathBase {
    RotationOrder: EEulerRotationOrder;
}
declare const FRigVMFunction_MathQuaternionRotationOrder: FRigVMFunction_MathQuaternionRotationOrder;

declare interface FRigVMFunction_MathQuaternionScale extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Scale: number;
}
declare const FRigVMFunction_MathQuaternionScale: FRigVMFunction_MathQuaternionScale;

declare interface FRigVMFunction_MathQuaternionScaleV2 extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Factor: number;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionScaleV2: FRigVMFunction_MathQuaternionScaleV2;

declare interface FRigVMFunction_MathQuaternionSelectBool extends FRigVMFunction_MathQuaternionBase {
    Condition: boolean;
    IfTrue: FQuat;
    IfFalse: FQuat;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionSelectBool: FRigVMFunction_MathQuaternionSelectBool;

declare interface FRigVMFunction_MathQuaternionSlerp extends FRigVMFunction_MathQuaternionBase {
    A: FQuat;
    B: FQuat;
    T: number;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionSlerp: FRigVMFunction_MathQuaternionSlerp;

declare interface FRigVMFunction_MathQuaternionSwingTwist extends FRigVMFunction_MathQuaternionBase {
    Input: FQuat;
    TwistAxis: FVector;
    Swing: FQuat;
    Twist: FQuat;
}
declare const FRigVMFunction_MathQuaternionSwingTwist: FRigVMFunction_MathQuaternionSwingTwist;

declare interface FRigVMFunction_MathQuaternionToAxisAndAngle extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Axis: FVector;
    Angle: number;
}
declare const FRigVMFunction_MathQuaternionToAxisAndAngle: FRigVMFunction_MathQuaternionToAxisAndAngle;

declare interface FRigVMFunction_MathQuaternionToEuler extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    RotationOrder: EEulerRotationOrder;
    Result: FVector;
}
declare const FRigVMFunction_MathQuaternionToEuler: FRigVMFunction_MathQuaternionToEuler;

declare interface FRigVMFunction_MathQuaternionToRotator extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Result: FRotator;
}
declare const FRigVMFunction_MathQuaternionToRotator: FRigVMFunction_MathQuaternionToRotator;

declare interface FRigVMFunction_MathQuaternionToVectors extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Forward: FVector;
    Right: FVector;
    Up: FVector;
}
declare const FRigVMFunction_MathQuaternionToVectors: FRigVMFunction_MathQuaternionToVectors;

declare interface FRigVMFunction_MathQuaternionUnaryOp extends FRigVMFunction_MathQuaternionBase {
    Value: FQuat;
    Result: FQuat;
}
declare const FRigVMFunction_MathQuaternionUnaryOp: FRigVMFunction_MathQuaternionUnaryOp;

declare interface FRigVMFunction_MathQuaternionUnit extends FRigVMFunction_MathQuaternionUnaryOp {

}
declare const FRigVMFunction_MathQuaternionUnit: FRigVMFunction_MathQuaternionUnit;

declare interface FRigVMFunction_MathRBFInterpolateBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathRBFInterpolateBase: FRigVMFunction_MathRBFInterpolateBase;

declare interface FRigVMFunction_MathRBFInterpolateQuatBase extends FRigVMFunction_MathRBFInterpolateBase {
    Input: FQuat;
    DistanceFunction: ERBFQuatDistanceType;
    SmoothingFunction: ERBFKernelType;
    SmoothingAngle: number;
    bNormalizeOutput: boolean;
    TwistAxis: FVector;
    WorkData: FRigVMFunction_MathRBFInterpolateQuatWorkData;
}
declare const FRigVMFunction_MathRBFInterpolateQuatBase: FRigVMFunction_MathRBFInterpolateQuatBase;

declare interface FRigVMFunction_MathRBFInterpolateQuatColor extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: TArray<FMathRBFInterpolateQuatColor_Target>;
    Output: FLinearColor;
}
declare const FRigVMFunction_MathRBFInterpolateQuatColor: FRigVMFunction_MathRBFInterpolateQuatColor;

declare interface FRigVMFunction_MathRBFInterpolateQuatFloat extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: TArray<FMathRBFInterpolateQuatFloat_Target>;
    Output: number;
}
declare const FRigVMFunction_MathRBFInterpolateQuatFloat: FRigVMFunction_MathRBFInterpolateQuatFloat;

declare interface FRigVMFunction_MathRBFInterpolateQuatQuat extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: TArray<FMathRBFInterpolateQuatQuat_Target>;
    Output: FQuat;
}
declare const FRigVMFunction_MathRBFInterpolateQuatQuat: FRigVMFunction_MathRBFInterpolateQuatQuat;

declare interface FRigVMFunction_MathRBFInterpolateQuatVector extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: TArray<FMathRBFInterpolateQuatVector_Target>;
    Output: FVector;
}
declare const FRigVMFunction_MathRBFInterpolateQuatVector: FRigVMFunction_MathRBFInterpolateQuatVector;

declare interface FRigVMFunction_MathRBFInterpolateQuatWorkData {

}
declare const FRigVMFunction_MathRBFInterpolateQuatWorkData: FRigVMFunction_MathRBFInterpolateQuatWorkData;

declare interface FRigVMFunction_MathRBFInterpolateQuatXform extends FRigVMFunction_MathRBFInterpolateQuatBase {
    Targets: TArray<FMathRBFInterpolateQuatXform_Target>;
    Output: FTransform;
}
declare const FRigVMFunction_MathRBFInterpolateQuatXform: FRigVMFunction_MathRBFInterpolateQuatXform;

declare interface FRigVMFunction_MathRBFInterpolateVectorBase extends FRigVMFunction_MathRBFInterpolateBase {
    Input: FVector;
    DistanceFunction: ERBFVectorDistanceType;
    SmoothingFunction: ERBFKernelType;
    SmoothingRadius: number;
    bNormalizeOutput: boolean;
    WorkData: FRigVMFunction_MathRBFInterpolateVectorWorkData;
}
declare const FRigVMFunction_MathRBFInterpolateVectorBase: FRigVMFunction_MathRBFInterpolateVectorBase;

declare interface FRigVMFunction_MathRBFInterpolateVectorColor extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: TArray<FMathRBFInterpolateVectorColor_Target>;
    Output: FLinearColor;
}
declare const FRigVMFunction_MathRBFInterpolateVectorColor: FRigVMFunction_MathRBFInterpolateVectorColor;

declare interface FRigVMFunction_MathRBFInterpolateVectorFloat extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: TArray<FMathRBFInterpolateVectorFloat_Target>;
    Output: number;
}
declare const FRigVMFunction_MathRBFInterpolateVectorFloat: FRigVMFunction_MathRBFInterpolateVectorFloat;

declare interface FRigVMFunction_MathRBFInterpolateVectorQuat extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: TArray<FMathRBFInterpolateVectorQuat_Target>;
    Output: FQuat;
}
declare const FRigVMFunction_MathRBFInterpolateVectorQuat: FRigVMFunction_MathRBFInterpolateVectorQuat;

declare interface FRigVMFunction_MathRBFInterpolateVectorVector extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: TArray<FMathRBFInterpolateVectorVector_Target>;
    Output: FVector;
}
declare const FRigVMFunction_MathRBFInterpolateVectorVector: FRigVMFunction_MathRBFInterpolateVectorVector;

declare interface FRigVMFunction_MathRBFInterpolateVectorWorkData {

}
declare const FRigVMFunction_MathRBFInterpolateVectorWorkData: FRigVMFunction_MathRBFInterpolateVectorWorkData;

declare interface FRigVMFunction_MathRBFInterpolateVectorXform extends FRigVMFunction_MathRBFInterpolateVectorBase {
    Targets: TArray<FMathRBFInterpolateVectorXform_Target>;
    Output: FTransform;
}
declare const FRigVMFunction_MathRBFInterpolateVectorXform: FRigVMFunction_MathRBFInterpolateVectorXform;

declare interface FRigVMFunction_MathRayBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathRayBase: FRigVMFunction_MathRayBase;

declare interface FRigVMFunction_MathRayGetAt extends FRigVMFunction_MathRayBase {
    Ray: FRay;
    Ratio: number;
    Result: FVector;
}
declare const FRigVMFunction_MathRayGetAt: FRigVMFunction_MathRayGetAt;

declare interface FRigVMFunction_MathRayIntersectPlane extends FRigVMFunction_MathRayBase {
    Ray: FRay;
    PlanePoint: FVector;
    PlaneNormal: FVector;
    Result: FVector;
    Distance: number;
    Ratio: number;
}
declare const FRigVMFunction_MathRayIntersectPlane: FRigVMFunction_MathRayIntersectPlane;

declare interface FRigVMFunction_MathRayIntersectRay extends FRigVMFunction_MathRayBase {
    A: FRay;
    B: FRay;
    Result: FVector;
    Distance: number;
    RatioA: number;
    RatioB: number;
}
declare const FRigVMFunction_MathRayIntersectRay: FRigVMFunction_MathRayIntersectRay;

declare interface FRigVMFunction_MathRayTransform extends FRigVMFunction_MathRayBase {
    Ray: FRay;
    Transform: FTransform;
    Result: FRay;
}
declare const FRigVMFunction_MathRayTransform: FRigVMFunction_MathRayTransform;

declare interface FRigVMFunction_MathTransformAccumulateArray extends FRigVMFunction_MathTransformMutableBase {
    Transforms: TArray<FTransform>;
    TargetSpace: ERigVMTransformSpace;
    Root: FTransform;
    ParentIndices: TArray<number>;
}
declare const FRigVMFunction_MathTransformAccumulateArray: FRigVMFunction_MathTransformAccumulateArray;

declare interface FRigVMFunction_MathTransformArrayToSRT extends FRigVMFunction_MathTransformBase {
    Transforms: TArray<FTransform>;
    Translations: TArray<FVector>;
    Rotations: TArray<FQuat>;
    Scales: TArray<FVector>;
}
declare const FRigVMFunction_MathTransformArrayToSRT: FRigVMFunction_MathTransformArrayToSRT;

declare interface FRigVMFunction_MathTransformBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathTransformBase: FRigVMFunction_MathTransformBase;

declare interface FRigVMFunction_MathTransformBinaryAggregateOp extends FRigVMFunction_MathTransformBase {
    A: FTransform;
    B: FTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformBinaryAggregateOp: FRigVMFunction_MathTransformBinaryAggregateOp;

declare interface FRigVMFunction_MathTransformBinaryOp extends FRigVMFunction_MathTransformBase {
    A: FTransform;
    B: FTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformBinaryOp: FRigVMFunction_MathTransformBinaryOp;

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
declare const FRigVMFunction_MathTransformClampSpatially: FRigVMFunction_MathTransformClampSpatially;

declare interface FRigVMFunction_MathTransformFromEulerTransform extends FRigVMFunction_MathTransformBase {
    EulerTransform: FEulerTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformFromEulerTransform: FRigVMFunction_MathTransformFromEulerTransform;

declare interface FRigVMFunction_MathTransformFromEulerTransformV2 extends FRigVMFunction_MathTransformBase {
    Value: FEulerTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformFromEulerTransformV2: FRigVMFunction_MathTransformFromEulerTransformV2;

declare interface FRigVMFunction_MathTransformFromSRT extends FRigVMFunction_MathTransformBase {
    Location: FVector;
    Rotation: FVector;
    RotationOrder: EEulerRotationOrder;
    Scale: FVector;
    Transform: FTransform;
    EulerTransform: FEulerTransform;
}
declare const FRigVMFunction_MathTransformFromSRT: FRigVMFunction_MathTransformFromSRT;

declare interface FRigVMFunction_MathTransformInverse extends FRigVMFunction_MathTransformUnaryOp {

}
declare const FRigVMFunction_MathTransformInverse: FRigVMFunction_MathTransformInverse;

declare interface FRigVMFunction_MathTransformLerp extends FRigVMFunction_MathTransformBase {
    A: FTransform;
    B: FTransform;
    T: number;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformLerp: FRigVMFunction_MathTransformLerp;

declare interface FRigVMFunction_MathTransformMake extends FRigVMFunction_MathTransformBase {
    Translation: FVector;
    Rotation: FQuat;
    Scale: FVector;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformMake: FRigVMFunction_MathTransformMake;

declare interface FRigVMFunction_MathTransformMakeAbsolute extends FRigVMFunction_MathTransformBase {
    Local: FTransform;
    Parent: FTransform;
    Global: FTransform;
}
declare const FRigVMFunction_MathTransformMakeAbsolute: FRigVMFunction_MathTransformMakeAbsolute;

declare interface FRigVMFunction_MathTransformMakeRelative extends FRigVMFunction_MathTransformBase {
    Global: FTransform;
    Parent: FTransform;
    Local: FTransform;
}
declare const FRigVMFunction_MathTransformMakeRelative: FRigVMFunction_MathTransformMakeRelative;

declare interface FRigVMFunction_MathTransformMirrorTransform extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    CentralTransform: FTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformMirrorTransform: FRigVMFunction_MathTransformMirrorTransform;

declare interface FRigVMFunction_MathTransformMul extends FRigVMFunction_MathTransformBinaryAggregateOp {

}
declare const FRigVMFunction_MathTransformMul: FRigVMFunction_MathTransformMul;

declare interface FRigVMFunction_MathTransformMutableBase extends FRigVMFunction_MathMutableBase {

}
declare const FRigVMFunction_MathTransformMutableBase: FRigVMFunction_MathTransformMutableBase;

declare interface FRigVMFunction_MathTransformRotateVector extends FRigVMFunction_MathTransformBase {
    Transform: FTransform;
    Vector: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathTransformRotateVector: FRigVMFunction_MathTransformRotateVector;

declare interface FRigVMFunction_MathTransformSelectBool extends FRigVMFunction_MathTransformBase {
    Condition: boolean;
    IfTrue: FTransform;
    IfFalse: FTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformSelectBool: FRigVMFunction_MathTransformSelectBool;

declare interface FRigVMFunction_MathTransformToEulerTransform extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Result: FEulerTransform;
}
declare const FRigVMFunction_MathTransformToEulerTransform: FRigVMFunction_MathTransformToEulerTransform;

declare interface FRigVMFunction_MathTransformToVectors extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Forward: FVector;
    Right: FVector;
    Up: FVector;
}
declare const FRigVMFunction_MathTransformToVectors: FRigVMFunction_MathTransformToVectors;

declare interface FRigVMFunction_MathTransformTransformVector extends FRigVMFunction_MathTransformBase {
    Transform: FTransform;
    Location: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathTransformTransformVector: FRigVMFunction_MathTransformTransformVector;

declare interface FRigVMFunction_MathTransformUnaryOp extends FRigVMFunction_MathTransformBase {
    Value: FTransform;
    Result: FTransform;
}
declare const FRigVMFunction_MathTransformUnaryOp: FRigVMFunction_MathTransformUnaryOp;

declare interface FRigVMFunction_MathVectorAbs extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorAbs: FRigVMFunction_MathVectorAbs;

declare interface FRigVMFunction_MathVectorAdd extends FRigVMFunction_MathVectorBinaryAggregateOp {

}
declare const FRigVMFunction_MathVectorAdd: FRigVMFunction_MathVectorAdd;

declare interface FRigVMFunction_MathVectorAngle extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: number;
}
declare const FRigVMFunction_MathVectorAngle: FRigVMFunction_MathVectorAngle;

declare interface FRigVMFunction_MathVectorArrayAverage extends FRigVMFunction_MathVectorBase {
    Array: TArray<FVector>;
    Average: FVector;
}
declare const FRigVMFunction_MathVectorArrayAverage: FRigVMFunction_MathVectorArrayAverage;

declare interface FRigVMFunction_MathVectorArraySum extends FRigVMFunction_MathVectorBase {
    Array: TArray<FVector>;
    Sum: FVector;
}
declare const FRigVMFunction_MathVectorArraySum: FRigVMFunction_MathVectorArraySum;

declare interface FRigVMFunction_MathVectorBase extends FRigVMFunction_MathBase {

}
declare const FRigVMFunction_MathVectorBase: FRigVMFunction_MathVectorBase;

declare interface FRigVMFunction_MathVectorBezierFourPoint extends FRigVMFunction_MathVectorBase {
    Bezier: FRigVMFourPointBezier;
    T: number;
    Result: FVector;
    Tangent: FVector;
}
declare const FRigVMFunction_MathVectorBezierFourPoint: FRigVMFunction_MathVectorBezierFourPoint;

declare interface FRigVMFunction_MathVectorBinaryAggregateOp extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorBinaryAggregateOp: FRigVMFunction_MathVectorBinaryAggregateOp;

declare interface FRigVMFunction_MathVectorBinaryOp extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorBinaryOp: FRigVMFunction_MathVectorBinaryOp;

declare interface FRigVMFunction_MathVectorCeil extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorCeil: FRigVMFunction_MathVectorCeil;

declare interface FRigVMFunction_MathVectorClamp extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Minimum: FVector;
    Maximum: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorClamp: FRigVMFunction_MathVectorClamp;

declare interface FRigVMFunction_MathVectorClampLength extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    MinimumLength: number;
    MaximumLength: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorClampLength: FRigVMFunction_MathVectorClampLength;

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
declare const FRigVMFunction_MathVectorClampSpatially: FRigVMFunction_MathVectorClampSpatially;

declare interface FRigVMFunction_MathVectorCross extends FRigVMFunction_MathVectorBinaryOp {

}
declare const FRigVMFunction_MathVectorCross: FRigVMFunction_MathVectorCross;

declare interface FRigVMFunction_MathVectorDeg extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorDeg: FRigVMFunction_MathVectorDeg;

declare interface FRigVMFunction_MathVectorDistance extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: number;
}
declare const FRigVMFunction_MathVectorDistance: FRigVMFunction_MathVectorDistance;

declare interface FRigVMFunction_MathVectorDiv extends FRigVMFunction_MathVectorBinaryOp {

}
declare const FRigVMFunction_MathVectorDiv: FRigVMFunction_MathVectorDiv;

declare interface FRigVMFunction_MathVectorDot extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: number;
}
declare const FRigVMFunction_MathVectorDot: FRigVMFunction_MathVectorDot;

declare interface FRigVMFunction_MathVectorEquals extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}
declare const FRigVMFunction_MathVectorEquals: FRigVMFunction_MathVectorEquals;

declare interface FRigVMFunction_MathVectorFloor extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorFloor: FRigVMFunction_MathVectorFloor;

declare interface FRigVMFunction_MathVectorFromDouble extends FRigVMFunction_MathVectorBase {
    Value: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorFromDouble: FRigVMFunction_MathVectorFromDouble;

declare interface FRigVMFunction_MathVectorFromFloat extends FRigVMFunction_MathVectorBase {
    Value: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorFromFloat: FRigVMFunction_MathVectorFromFloat;

declare interface FRigVMFunction_MathVectorIsNearlyEqual extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Tolerance: number;
    Result: boolean;
}
declare const FRigVMFunction_MathVectorIsNearlyEqual: FRigVMFunction_MathVectorIsNearlyEqual;

declare interface FRigVMFunction_MathVectorIsNearlyZero extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Tolerance: number;
    Result: boolean;
}
declare const FRigVMFunction_MathVectorIsNearlyZero: FRigVMFunction_MathVectorIsNearlyZero;

declare interface FRigVMFunction_MathVectorLength extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Result: number;
}
declare const FRigVMFunction_MathVectorLength: FRigVMFunction_MathVectorLength;

declare interface FRigVMFunction_MathVectorLengthSquared extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Result: number;
}
declare const FRigVMFunction_MathVectorLengthSquared: FRigVMFunction_MathVectorLengthSquared;

declare interface FRigVMFunction_MathVectorLerp extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    T: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorLerp: FRigVMFunction_MathVectorLerp;

declare interface FRigVMFunction_MathVectorMake extends FRigVMFunction_MathVectorBase {
    X: number;
    Y: number;
    Z: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorMake: FRigVMFunction_MathVectorMake;

declare interface FRigVMFunction_MathVectorMakeAbsolute extends FRigVMFunction_MathVectorBase {
    Local: FVector;
    Parent: FVector;
    Global: FVector;
}
declare const FRigVMFunction_MathVectorMakeAbsolute: FRigVMFunction_MathVectorMakeAbsolute;

declare interface FRigVMFunction_MathVectorMakeBezierFourPoint extends FRigVMFunction_MathVectorBase {
    Bezier: FRigVMFourPointBezier;
}
declare const FRigVMFunction_MathVectorMakeBezierFourPoint: FRigVMFunction_MathVectorMakeBezierFourPoint;

declare interface FRigVMFunction_MathVectorMakeRelative extends FRigVMFunction_MathVectorBase {
    Global: FVector;
    Parent: FVector;
    Local: FVector;
}
declare const FRigVMFunction_MathVectorMakeRelative: FRigVMFunction_MathVectorMakeRelative;

declare interface FRigVMFunction_MathVectorMax extends FRigVMFunction_MathVectorBinaryAggregateOp {

}
declare const FRigVMFunction_MathVectorMax: FRigVMFunction_MathVectorMax;

declare interface FRigVMFunction_MathVectorMin extends FRigVMFunction_MathVectorBinaryAggregateOp {

}
declare const FRigVMFunction_MathVectorMin: FRigVMFunction_MathVectorMin;

declare interface FRigVMFunction_MathVectorMirror extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Normal: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorMirror: FRigVMFunction_MathVectorMirror;

declare interface FRigVMFunction_MathVectorMirrorTransform extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    CentralTransform: FTransform;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorMirrorTransform: FRigVMFunction_MathVectorMirrorTransform;

declare interface FRigVMFunction_MathVectorMod extends FRigVMFunction_MathVectorBinaryOp {

}
declare const FRigVMFunction_MathVectorMod: FRigVMFunction_MathVectorMod;

declare interface FRigVMFunction_MathVectorMul extends FRigVMFunction_MathVectorBinaryAggregateOp {

}
declare const FRigVMFunction_MathVectorMul: FRigVMFunction_MathVectorMul;

declare interface FRigVMFunction_MathVectorNegate extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorNegate: FRigVMFunction_MathVectorNegate;

declare interface FRigVMFunction_MathVectorNotEquals extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}
declare const FRigVMFunction_MathVectorNotEquals: FRigVMFunction_MathVectorNotEquals;

declare interface FRigVMFunction_MathVectorOrthogonal extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}
declare const FRigVMFunction_MathVectorOrthogonal: FRigVMFunction_MathVectorOrthogonal;

declare interface FRigVMFunction_MathVectorParallel extends FRigVMFunction_MathVectorBase {
    A: FVector;
    B: FVector;
    Result: boolean;
}
declare const FRigVMFunction_MathVectorParallel: FRigVMFunction_MathVectorParallel;

declare interface FRigVMFunction_MathVectorRad extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorRad: FRigVMFunction_MathVectorRad;

declare interface FRigVMFunction_MathVectorRemap extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    SourceMinimum: FVector;
    SourceMaximum: FVector;
    TargetMinimum: FVector;
    TargetMaximum: FVector;
    bClamp: boolean;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorRemap: FRigVMFunction_MathVectorRemap;

declare interface FRigVMFunction_MathVectorRound extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorRound: FRigVMFunction_MathVectorRound;

declare interface FRigVMFunction_MathVectorScale extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Factor: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorScale: FRigVMFunction_MathVectorScale;

declare interface FRigVMFunction_MathVectorSelectBool extends FRigVMFunction_MathVectorBase {
    Condition: boolean;
    IfTrue: FVector;
    IfFalse: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorSelectBool: FRigVMFunction_MathVectorSelectBool;

declare interface FRigVMFunction_MathVectorSetLength extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Length: number;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorSetLength: FRigVMFunction_MathVectorSetLength;

declare interface FRigVMFunction_MathVectorSign extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorSign: FRigVMFunction_MathVectorSign;

declare interface FRigVMFunction_MathVectorSub extends FRigVMFunction_MathVectorBinaryOp {

}
declare const FRigVMFunction_MathVectorSub: FRigVMFunction_MathVectorSub;

declare interface FRigVMFunction_MathVectorUnaryOp extends FRigVMFunction_MathVectorBase {
    Value: FVector;
    Result: FVector;
}
declare const FRigVMFunction_MathVectorUnaryOp: FRigVMFunction_MathVectorUnaryOp;

declare interface FRigVMFunction_MathVectorUnit extends FRigVMFunction_MathVectorUnaryOp {

}
declare const FRigVMFunction_MathVectorUnit: FRigVMFunction_MathVectorUnit;

declare interface FRigVMFunction_NameBase extends FRigVMStruct {

}
declare const FRigVMFunction_NameBase: FRigVMFunction_NameBase;

declare interface FRigVMFunction_NameConcat extends FRigVMFunction_NameBase {
    A: FName;
    B: FName;
    Result: FName;
}
declare const FRigVMFunction_NameConcat: FRigVMFunction_NameConcat;

declare interface FRigVMFunction_NameReplace extends FRigVMFunction_NameBase {
    Name: FName;
    Old: FName;
    New: FName;
    Result: FName;
}
declare const FRigVMFunction_NameReplace: FRigVMFunction_NameReplace;

declare interface FRigVMFunction_NameTruncate extends FRigVMFunction_NameBase {
    Name: FName;
    count: number;
    FromEnd: boolean;
    Remainder: FName;
    Chopped: FName;
}
declare const FRigVMFunction_NameTruncate: FRigVMFunction_NameTruncate;

declare interface FRigVMFunction_NoiseDouble extends FRigVMFunction_MathBase {
    Value: number;
    Speed: number;
    Frequency: number;
    Minimum: number;
    Maximum: number;
    Result: number;
    Time: number;
}
declare const FRigVMFunction_NoiseDouble: FRigVMFunction_NoiseDouble;

declare interface FRigVMFunction_NoiseFloat extends FRigVMFunction_MathBase {
    Value: number;
    Speed: number;
    Frequency: number;
    Minimum: number;
    Maximum: number;
    Result: number;
    Time: number;
}
declare const FRigVMFunction_NoiseFloat: FRigVMFunction_NoiseFloat;

declare interface FRigVMFunction_NoiseVector extends FRigVMFunction_MathBase {
    position: FVector;
    Speed: FVector;
    Frequency: FVector;
    Minimum: number;
    Maximum: number;
    Result: FVector;
    Time: FVector;
}
declare const FRigVMFunction_NoiseVector: FRigVMFunction_NoiseVector;

declare interface FRigVMFunction_NoiseVector2 extends FRigVMFunction_MathBase {
    Value: FVector;
    Speed: FVector;
    Frequency: FVector;
    Minimum: number;
    Maximum: number;
    Result: FVector;
    Time: FVector;
}
declare const FRigVMFunction_NoiseVector2: FRigVMFunction_NoiseVector2;

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
declare const FRigVMFunction_RandomFloat: FRigVMFunction_RandomFloat;

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
declare const FRigVMFunction_RandomVector: FRigVMFunction_RandomVector;

declare interface FRigVMFunction_SecondsToFrames extends FRigVMFunction_AnimBase {
    Seconds: number;
    Frames: number;
}
declare const FRigVMFunction_SecondsToFrames: FRigVMFunction_SecondsToFrames;

declare interface FRigVMFunction_Sequence extends FRigVMStruct {
    ExecuteContext: FRigVMExecuteContext;
    A: FRigVMExecuteContext;
    B: FRigVMExecuteContext;
}
declare const FRigVMFunction_Sequence: FRigVMFunction_Sequence;

declare interface FRigVMFunction_SimBase extends FRigVMStruct {

}
declare const FRigVMFunction_SimBase: FRigVMFunction_SimBase;

declare interface FRigVMFunction_SimBaseMutable extends FRigVMStructMutable {

}
declare const FRigVMFunction_SimBaseMutable: FRigVMFunction_SimBaseMutable;

declare interface FRigVMFunction_StartsWith extends FRigVMFunction_NameBase {
    Name: FName;
    Start: FName;
    Result: boolean;
}
declare const FRigVMFunction_StartsWith: FRigVMFunction_StartsWith;

declare interface FRigVMFunction_StringBase extends FRigVMStruct {

}
declare const FRigVMFunction_StringBase: FRigVMFunction_StringBase;

declare interface FRigVMFunction_StringConcat extends FRigVMFunction_StringBase {
    A: FString;
    B: FString;
    Result: FString;
}
declare const FRigVMFunction_StringConcat: FRigVMFunction_StringConcat;

declare interface FRigVMFunction_StringContains extends FRigVMFunction_StringBase {
    Name: FString;
    Search: FString;
    Result: boolean;
}
declare const FRigVMFunction_StringContains: FRigVMFunction_StringContains;

declare interface FRigVMFunction_StringEndsWith extends FRigVMFunction_StringBase {
    Name: FString;
    Ending: FString;
    Result: boolean;
}
declare const FRigVMFunction_StringEndsWith: FRigVMFunction_StringEndsWith;

declare interface FRigVMFunction_StringFind extends FRigVMFunction_StringBase {
    Value: FString;
    Search: FString;
    Found: boolean;
    Index: number;
}
declare const FRigVMFunction_StringFind: FRigVMFunction_StringFind;

declare interface FRigVMFunction_StringJoin extends FRigVMFunction_StringBase {
    Values: TArray<FString>;
    Separator: FString;
    Result: FString;
}
declare const FRigVMFunction_StringJoin: FRigVMFunction_StringJoin;

declare interface FRigVMFunction_StringLeft extends FRigVMFunction_StringBase {
    Value: FString;
    count: number;
    Result: FString;
}
declare const FRigVMFunction_StringLeft: FRigVMFunction_StringLeft;

declare interface FRigVMFunction_StringLength extends FRigVMFunction_StringBase {
    Value: FString;
    Length: number;
}
declare const FRigVMFunction_StringLength: FRigVMFunction_StringLength;

declare interface FRigVMFunction_StringMiddle extends FRigVMFunction_StringBase {
    Value: FString;
    Start: number;
    count: number;
    Result: FString;
}
declare const FRigVMFunction_StringMiddle: FRigVMFunction_StringMiddle;

declare interface FRigVMFunction_StringPadInteger extends FRigVMFunction_StringBase {
    Value: number;
    Digits: number;
    Result: FString;
}
declare const FRigVMFunction_StringPadInteger: FRigVMFunction_StringPadInteger;

declare interface FRigVMFunction_StringReplace extends FRigVMFunction_StringBase {
    Name: FString;
    Old: FString;
    New: FString;
    Result: FString;
}
declare const FRigVMFunction_StringReplace: FRigVMFunction_StringReplace;

declare interface FRigVMFunction_StringReverse extends FRigVMFunction_StringBase {
    Value: FString;
    Reverse: FString;
}
declare const FRigVMFunction_StringReverse: FRigVMFunction_StringReverse;

declare interface FRigVMFunction_StringRight extends FRigVMFunction_StringBase {
    Value: FString;
    count: number;
    Result: FString;
}
declare const FRigVMFunction_StringRight: FRigVMFunction_StringRight;

declare interface FRigVMFunction_StringSplit extends FRigVMFunction_StringBase {
    Value: FString;
    Separator: FString;
    Result: TArray<FString>;
}
declare const FRigVMFunction_StringSplit: FRigVMFunction_StringSplit;

declare interface FRigVMFunction_StringStartsWith extends FRigVMFunction_StringBase {
    Name: FString;
    Start: FString;
    Result: boolean;
}
declare const FRigVMFunction_StringStartsWith: FRigVMFunction_StringStartsWith;

declare interface FRigVMFunction_StringToLowercase extends FRigVMFunction_StringBase {
    Value: FString;
    Result: FString;
}
declare const FRigVMFunction_StringToLowercase: FRigVMFunction_StringToLowercase;

declare interface FRigVMFunction_StringToUppercase extends FRigVMFunction_StringBase {
    Value: FString;
    Result: FString;
}
declare const FRigVMFunction_StringToUppercase: FRigVMFunction_StringToUppercase;

declare interface FRigVMFunction_StringTrimWhitespace extends FRigVMFunction_StringBase {
    Value: FString;
    Result: FString;
}
declare const FRigVMFunction_StringTrimWhitespace: FRigVMFunction_StringTrimWhitespace;

declare interface FRigVMFunction_StringTruncate extends FRigVMFunction_StringBase {
    Name: FString;
    count: number;
    FromEnd: boolean;
    Remainder: FString;
    Chopped: FString;
}
declare const FRigVMFunction_StringTruncate: FRigVMFunction_StringTruncate;

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
declare const FRigVMFunction_TimeLoop: FRigVMFunction_TimeLoop;

declare interface FRigVMFunction_TimeOffsetFloat extends FRigVMFunction_SimBase {
    Value: number;
    SecondsAgo: number;
    BufferSize: number;
    TimeRange: number;
    Result: number;
    Buffer: TArray<number>;
    DeltaTimes: TArray<number>;
    LastInsertIndex: number;
    UpperBound: number;
}
declare const FRigVMFunction_TimeOffsetFloat: FRigVMFunction_TimeOffsetFloat;

declare interface FRigVMFunction_TimeOffsetTransform extends FRigVMFunction_SimBase {
    Value: FTransform;
    SecondsAgo: number;
    BufferSize: number;
    TimeRange: number;
    Result: FTransform;
    Buffer: TArray<FTransform>;
    DeltaTimes: TArray<number>;
    LastInsertIndex: number;
    UpperBound: number;
}
declare const FRigVMFunction_TimeOffsetTransform: FRigVMFunction_TimeOffsetTransform;

declare interface FRigVMFunction_TimeOffsetVector extends FRigVMFunction_SimBase {
    Value: FVector;
    SecondsAgo: number;
    BufferSize: number;
    TimeRange: number;
    Result: FVector;
    Buffer: TArray<FVector>;
    DeltaTimes: TArray<number>;
    LastInsertIndex: number;
    UpperBound: number;
}
declare const FRigVMFunction_TimeOffsetVector: FRigVMFunction_TimeOffsetVector;

declare interface FRigVMFunction_Timeline extends FRigVMFunction_SimBase {
    Speed: number;
    Time: number;
    AccumulatedValue: number;
    bIsInitialized: boolean;
}
declare const FRigVMFunction_Timeline: FRigVMFunction_Timeline;

declare interface FRigVMFunction_UserDefinedEvent extends FRigVMStruct {
    ExecutePin: FRigVMExecutePin;
    EventName: FName;
}
declare const FRigVMFunction_UserDefinedEvent: FRigVMFunction_UserDefinedEvent;

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
declare const FRigVMFunction_VerletIntegrateVector: FRigVMFunction_VerletIntegrateVector;

declare interface FRigVMFunction_VisualDebugQuat extends FRigVMFunction_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: FName;
}
declare const FRigVMFunction_VisualDebugQuat: FRigVMFunction_VisualDebugQuat;

declare interface FRigVMFunction_VisualDebugQuatNoSpace extends FRigVMFunction_DebugBase {
    Value: FQuat;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
}
declare const FRigVMFunction_VisualDebugQuatNoSpace: FRigVMFunction_VisualDebugQuatNoSpace;

declare interface FRigVMFunction_VisualDebugTransform extends FRigVMFunction_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
    BoneSpace: FName;
}
declare const FRigVMFunction_VisualDebugTransform: FRigVMFunction_VisualDebugTransform;

declare interface FRigVMFunction_VisualDebugTransformNoSpace extends FRigVMFunction_DebugBase {
    Value: FTransform;
    bEnabled: boolean;
    Thickness: number;
    Scale: number;
}
declare const FRigVMFunction_VisualDebugTransformNoSpace: FRigVMFunction_VisualDebugTransformNoSpace;

declare interface FRigVMFunction_VisualDebugVector extends FRigVMFunction_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
    BoneSpace: FName;
}
declare const FRigVMFunction_VisualDebugVector: FRigVMFunction_VisualDebugVector;

declare interface FRigVMFunction_VisualDebugVectorNoSpace extends FRigVMFunction_DebugBase {
    Value: FVector;
    bEnabled: boolean;
    Mode: ERigUnitVisualDebugPointMode;
    Color: FLinearColor;
    Thickness: number;
    Scale: number;
}
declare const FRigVMFunction_VisualDebugVectorNoSpace: FRigVMFunction_VisualDebugVectorNoSpace;

declare interface FRigVMFunction_VisualLogArrow extends FRigVMFunction_VisualLogObject {
    SegmentStart: FVector;
    SegmentEnd: FVector;
    ArrowHeadSize: number;
}
declare const FRigVMFunction_VisualLogArrow: FRigVMFunction_VisualLogArrow;

declare interface FRigVMFunction_VisualLogBase extends FRigVMFunction_DebugBaseMutable {
    Text: FString;
    Category: FName;
}
declare const FRigVMFunction_VisualLogBase: FRigVMFunction_VisualLogBase;

declare interface FRigVMFunction_VisualLogBox extends FRigVMFunction_VisualLogWireframeOptional {
    Box: FBox;
}
declare const FRigVMFunction_VisualLogBox: FRigVMFunction_VisualLogBox;

declare interface FRigVMFunction_VisualLogCapsule extends FRigVMFunction_VisualLogWireframeOptional {
    base: FVector;
    HalfHeight: number;
    Radius: number;
    Rotation: FQuat;
}
declare const FRigVMFunction_VisualLogCapsule: FRigVMFunction_VisualLogCapsule;

declare interface FRigVMFunction_VisualLogCircle extends FRigVMFunction_VisualLogWireframeOptional {
    Center: FVector;
    UpAxis: FVector;
    Radius: number;
    Thickness: number;
}
declare const FRigVMFunction_VisualLogCircle: FRigVMFunction_VisualLogCircle;

declare interface FRigVMFunction_VisualLogCone extends FRigVMFunction_VisualLogWireframeOptional {
    Origin: FVector;
    Direction: FVector;
    Length: number;
    Angle: number;
}
declare const FRigVMFunction_VisualLogCone: FRigVMFunction_VisualLogCone;

declare interface FRigVMFunction_VisualLogCylinder extends FRigVMFunction_VisualLogWireframeOptional {
    Start: FVector;
    End: FVector;
    Radius: number;
}
declare const FRigVMFunction_VisualLogCylinder: FRigVMFunction_VisualLogCylinder;

declare interface FRigVMFunction_VisualLogLocation extends FRigVMFunction_VisualLogObject {
    Location: FVector;
    Radius: number;
}
declare const FRigVMFunction_VisualLogLocation: FRigVMFunction_VisualLogLocation;

declare interface FRigVMFunction_VisualLogObject extends FRigVMFunction_VisualLogBase {
    ObjectColor: FLinearColor;
}
declare const FRigVMFunction_VisualLogObject: FRigVMFunction_VisualLogObject;

declare interface FRigVMFunction_VisualLogOrientedBox extends FRigVMFunction_VisualLogWireframeOptional {
    Box: FBox;
    Transform: FTransform;
}
declare const FRigVMFunction_VisualLogOrientedBox: FRigVMFunction_VisualLogOrientedBox;

declare interface FRigVMFunction_VisualLogSegment extends FRigVMFunction_VisualLogObject {
    SegmentStart: FVector;
    SegmentEnd: FVector;
    Thickness: number;
}
declare const FRigVMFunction_VisualLogSegment: FRigVMFunction_VisualLogSegment;

declare interface FRigVMFunction_VisualLogSphere extends FRigVMFunction_VisualLogWireframeOptional {
    Center: FVector;
    Radius: number;
}
declare const FRigVMFunction_VisualLogSphere: FRigVMFunction_VisualLogSphere;

declare interface FRigVMFunction_VisualLogText extends FRigVMFunction_VisualLogBase {

}
declare const FRigVMFunction_VisualLogText: FRigVMFunction_VisualLogText;

declare interface FRigVMFunction_VisualLogWireframeOptional extends FRigVMFunction_VisualLogObject {
    bWireframe: boolean;
}
declare const FRigVMFunction_VisualLogWireframeOptional: FRigVMFunction_VisualLogWireframeOptional;

declare interface FRigVMGraphFunctionArgument {
    Name: FName;
    DisplayName: FName;
    CPPType: FName;
    CPPTypeObject: TSoftObjectPtr<UObject>;
    bIsArray: boolean;
    Direction: ERigVMPinDirection;
    DefaultValue: FString;
    bIsConst: boolean;
    PathToTooltip: Record<FString, FText>;
}
declare const FRigVMGraphFunctionArgument: FRigVMGraphFunctionArgument;

declare interface FRigVMGraphFunctionData {
    Header: FRigVMGraphFunctionHeader;
    CompilationData: FRigVMFunctionCompilationData;
    SerializedCollapsedNode: FString;
    CollapseNodeArchive: FRigVMObjectArchive;
}
declare const FRigVMGraphFunctionData: FRigVMGraphFunctionData;

declare interface FRigVMGraphFunctionHeader {
    LibraryPointer: FRigVMGraphFunctionIdentifier;
    Variant: FRigVMVariant;
    Name: FName;
    NodeTitle: FString;
    NodeColor: FLinearColor;
    ToolTip: FText;
    Description: FString;
    Category: FString;
    Keywords: FString;
    Arguments: TArray<FRigVMGraphFunctionArgument>;
    Dependencies: Record<string | number | symbol, uint32>;
    ExternalVariables: TArray<FRigVMExternalVariable>;
    Layout: FRigVMNodeLayout;
}
declare const FRigVMGraphFunctionHeader: FRigVMGraphFunctionHeader;

declare interface FRigVMGraphFunctionHeaderArray {
    Headers: TArray<FRigVMGraphFunctionHeader>;
}
declare const FRigVMGraphFunctionHeaderArray: FRigVMGraphFunctionHeaderArray;

declare interface FRigVMGraphFunctionIdentifier {
    LibraryNode: FSoftObjectPath;
    LibraryNodePath: FString;
    HostObject: FSoftObjectPath;
}
declare const FRigVMGraphFunctionIdentifier: FRigVMGraphFunctionIdentifier;

declare interface FRigVMGraphFunctionStore {
    PublicFunctions: TArray<FRigVMGraphFunctionData>;
    PrivateFunctions: TArray<FRigVMGraphFunctionData>;
}
declare const FRigVMGraphFunctionStore: FRigVMGraphFunctionStore;

declare interface FRigVMInstruction {
    ByteCodeIndex: number;
    OpCode: ERigVMOpCode;
    OperandAlignment: uint8;
}
declare const FRigVMInstruction: FRigVMInstruction;

declare interface FRigVMInstructionArray {
    Instructions: TArray<FRigVMInstruction>;
}
declare const FRigVMInstructionArray: FRigVMInstructionArray;

declare interface FRigVMInstructionSetExecuteState {
    SliceHashToNumInstruction: Record<string | number | symbol, uint32>;
}
declare const FRigVMInstructionSetExecuteState: FRigVMInstructionSetExecuteState;

declare interface FRigVMInstructionVisitInfo {

}
declare const FRigVMInstructionVisitInfo: FRigVMInstructionVisitInfo;

declare interface FRigVMInvokeEntryOp extends FRigVMBaseOp {

}
declare const FRigVMInvokeEntryOp: FRigVMInvokeEntryOp;

declare interface FRigVMJumpIfOp extends FRigVMUnaryOp {

}
declare const FRigVMJumpIfOp: FRigVMJumpIfOp;

declare interface FRigVMJumpOp extends FRigVMBaseOp {

}
declare const FRigVMJumpOp: FRigVMJumpOp;

declare interface FRigVMJumpToBranchOp extends FRigVMUnaryOp {

}
declare const FRigVMJumpToBranchOp: FRigVMJumpToBranchOp;

declare interface FRigVMMemoryContainer {
    bUseNameMap: boolean;
    MemoryType: ERigVMMemoryType;
    Registers: TArray<FRigVMRegister>;
    RegisterOffsets: TArray<FRigVMRegisterOffset>;
    Data: TArray<uint8>;
    ScriptStructs: TArray<UScriptStruct>;
    NameMap: Record<FName, number>;
    bEncounteredErrorDuringLoad: boolean;
}
declare const FRigVMMemoryContainer: FRigVMMemoryContainer;

declare interface FRigVMMemoryStatistics {
    RegisterCount: number;
    DataBytes: number;
    TotalBytes: number;
}
declare const FRigVMMemoryStatistics: FRigVMMemoryStatistics;

declare interface FRigVMMemoryStorageStruct extends FInstancedPropertyBag {

}
declare const FRigVMMemoryStorageStruct: FRigVMMemoryStorageStruct;

declare interface FRigVMMirrorSettings {
    MirrorAxis: EAxis;
    AxisToFlip: EAxis;
    SearchString: FString;
    ReplaceString: FString;
}
declare const FRigVMMirrorSettings: FRigVMMirrorSettings;

declare interface FRigVMNodeLayout {
    Categories: TArray<FRigVMPinCategory>;
    PinIndexInCategory: Record<FString, number>;
    DisplayNames: Record<FString, FString>;
}
declare const FRigVMNodeLayout: FRigVMNodeLayout;

declare interface FRigVMObjectArchive {
    Buffer: TArray<uint8>;
    UncompressedSize: number;
    CompressedSize: number;
    bIsCompressed: boolean;
}
declare const FRigVMObjectArchive: FRigVMObjectArchive;

declare interface FRigVMOperand {
    MemoryType: ERigVMMemoryType;
    RegisterIndex: uint16;
    RegisterOffset: uint16;
}
declare const FRigVMOperand: FRigVMOperand;

declare interface FRigVMParameter {
    Type: ERigVMParameterType;
    Name: FName;
    RegisterIndex: number;
    CPPType: FString;
    ScriptStruct: UScriptStruct;
    ScriptStructPath: FName;
}
declare const FRigVMParameter: FRigVMParameter;

declare interface FRigVMPinCategory {
    Path: FString;
    Elements: TArray<FString>;
    bExpandedByDefault: boolean;
}
declare const FRigVMPinCategory: FRigVMPinCategory;

declare interface FRigVMPredicateBranch {

}
declare const FRigVMPredicateBranch: FRigVMPredicateBranch;

declare interface FRigVMProfilingInfo {

}
declare const FRigVMProfilingInfo: FRigVMProfilingInfo;

declare interface FRigVMQuaternaryOp extends FRigVMBaseOp {

}
declare const FRigVMQuaternaryOp: FRigVMQuaternaryOp;

declare interface FRigVMQuinaryOp extends FRigVMBaseOp {

}
declare const FRigVMQuinaryOp: FRigVMQuinaryOp;

declare interface FRigVMRegister {
    Type: ERigVMRegisterType;
    ByteIndex: uint32;
    ElementSize: uint16;
    ElementCount: uint16;
    SliceCount: uint16;
    AlignmentBytes: uint8;
    TrailingBytes: uint16;
    Name: FName;
    ScriptStructIndex: number;
    bIsArray: boolean;
    bIsDynamic: boolean;
}
declare const FRigVMRegister: FRigVMRegister;

declare interface FRigVMRegisterOffset {
    Segments: TArray<number>;
    Type: ERigVMRegisterType;
    CPPType: FName;
    ScriptStruct: UScriptStruct;
    ParentScriptStruct: UScriptStruct;
    ArrayIndex: number;
    ElementSize: uint16;
    CachedSegmentPath: FString;
}
declare const FRigVMRegisterOffset: FRigVMRegisterOffset;

declare interface FRigVMRunInstructionsOp extends FRigVMUnaryOp {

}
declare const FRigVMRunInstructionsOp: FRigVMRunInstructionsOp;

declare interface FRigVMRuntimeSettings {
    MaximumArraySize: number;
}
declare const FRigVMRuntimeSettings: FRigVMRuntimeSettings;

declare interface FRigVMSenaryOp extends FRigVMBaseOp {

}
declare const FRigVMSenaryOp: FRigVMSenaryOp;

declare interface FRigVMSetupTraitsOp extends FRigVMUnaryOp {

}
declare const FRigVMSetupTraitsOp: FRigVMSetupTraitsOp;

declare interface FRigVMSimPoint {
    Mass: number;
    Size: number;
    LinearDamping: number;
    InheritMotion: number;
    position: FVector;
    LinearVelocity: FVector;
}
declare const FRigVMSimPoint: FRigVMSimPoint;

declare interface FRigVMSlice {

}
declare const FRigVMSlice: FRigVMSlice;

declare interface FRigVMStatistics {
    BytesForCDO: number;
    BytesPerInstance: number;
    LiteralMemory: FRigVMMemoryStatistics;
    WorkMemory: FRigVMMemoryStatistics;
    DebugMemory: FRigVMMemoryStatistics;
    BytesForCaching: number;
    ByteCode: FRigVMByteCodeStatistics;
}
declare const FRigVMStatistics: FRigVMStatistics;

declare interface FRigVMStruct {

}
declare const FRigVMStruct: FRigVMStruct;

declare interface FRigVMStructMutable extends FRigVMStruct {
    ExecutePin: FRigVMExecutePin;
}
declare const FRigVMStructMutable: FRigVMStructMutable;

declare interface FRigVMTag {
    Name: FName;
    Label: FString;
    ToolTip: FText;
    Color: FLinearColor;
    bShowInUserInterface: boolean;
    bMarksSubjectAsInvalid: boolean;
}
declare const FRigVMTag: FRigVMTag;

declare interface FRigVMTemplateArgumentType {
    CPPType: FName;
    CPPTypeObject: UObject;
}
declare const FRigVMTemplateArgumentType: FRigVMTemplateArgumentType;

declare interface FRigVMTernaryOp extends FRigVMBaseOp {

}
declare const FRigVMTernaryOp: FRigVMTernaryOp;

declare interface FRigVMTrait extends FRigVMStruct {
    Name: FString;
}
declare const FRigVMTrait: FRigVMTrait;

declare interface FRigVMUnaryOp extends FRigVMBaseOp {

}
declare const FRigVMUnaryOp: FRigVMUnaryOp;

declare interface FRigVMUnknownType {
    Hash: uint32;
}
declare const FRigVMUnknownType: FRigVMUnknownType;

declare interface FRigVMUserWorkflow {
    Title: FString;
    ToolTip: FString;
    Type: ERigVMUserWorkflowType;
    PerformDynamicDelegate: FRigVMUserWorkflowPerformDynamicDelegate;
    OptionsClass: UClass;
}
declare const FRigVMUserWorkflow: FRigVMUserWorkflow;

declare interface FRigVMVariant {
    Guid: FGuid;
    Tags: TArray<FRigVMTag>;
}
declare const FRigVMVariant: FRigVMVariant;

declare interface FRigVMVariantRef {
    ObjectPath: FSoftObjectPath;
    Variant: FRigVMVariant;
}
declare const FRigVMVariantRef: FRigVMVariantRef;

declare interface IRigVMGraphFunctionHost extends IInterface {

}
declare const IRigVMGraphFunctionHost: IRigVMGraphFunctionHost;

declare interface UDataAssetLink extends UNameSpacedUserData {
    DataAsset: TSoftObjectPtr<UDataAsset>;
    DataAssetCached: UDataAsset;
    SetDataAsset(InDataAsset: TSoftObjectPtr<UDataAsset>): void;
    GetDataAsset(): TSoftObjectPtr<UDataAsset>;
}
declare const UDataAssetLink: UDataAssetLink;

declare interface UDefault__RigVMBlueprintGeneratedClass {

}
declare const UDefault__RigVMBlueprintGeneratedClass: UDefault__RigVMBlueprintGeneratedClass;

declare interface UDefault__RigVMMemoryStorageGeneratorClass {

}
declare const UDefault__RigVMMemoryStorageGeneratorClass: UDefault__RigVMMemoryStorageGeneratorClass;

declare interface UNameSpacedUserData extends UAssetUserData {
    Namespace: FString;
}
declare const UNameSpacedUserData: UNameSpacedUserData;

declare interface URigVM extends UObject {
    LiteralMemoryStorage: FRigVMMemoryStorageStruct;
    DefaultWorkMemoryStorage: FRigVMMemoryStorageStruct;
    DefaultDebugMemoryStorage: FRigVMMemoryStorageStruct;
    ByteCodeStorage: FRigVMByteCode;
    Instructions: FRigVMInstructionArray;
    FunctionNamesStorage: TArray<FName>;
    Parameters: TArray<FRigVMParameter>;
    CachedVMHash: uint32;
    SetParameterValueVector2D(InParameterName: FName, InValue: FVector2D, InArrayIndex: number): void;
    SetParameterValueVector(InParameterName: FName, InValue: FVector, InArrayIndex: number): void;
    SetParameterValueTransform(InParameterName: FName, InValue: FTransform, InArrayIndex: number): void;
    SetParameterValueString(InParameterName: FName, InValue: string | FString, InArrayIndex: number): void;
    SetParameterValueQuat(InParameterName: FName, InValue: FQuat, InArrayIndex: number): void;
    SetParameterValueName(InParameterName: FName, InValue: FName, InArrayIndex: number): void;
    SetParameterValueInt(InParameterName: FName, InValue: number, InArrayIndex: number): void;
    SetParameterValueFloat(InParameterName: FName, InValue: number, InArrayIndex: number): void;
    SetParameterValueDouble(InParameterName: FName, InValue: number, InArrayIndex: number): void;
    SetParameterValueBool(InParameterName: FName, InValue: boolean, InArrayIndex: number): void;
    GetStatistics(): FRigVMStatistics;
    GetRigVMFunctionName(InFunctionIndex: number): FString;
    GetParameterValueVector2D(InParameterName: FName, InArrayIndex: number): FVector2D;
    GetParameterValueVector(InParameterName: FName, InArrayIndex: number): FVector;
    GetParameterValueTransform(InParameterName: FName, InArrayIndex: number): FTransform;
    GetParameterValueString(InParameterName: FName, InArrayIndex: number): FString;
    GetParameterValueQuat(InParameterName: FName, InArrayIndex: number): FQuat;
    GetParameterValueName(InParameterName: FName, InArrayIndex: number): FName;
    GetParameterValueInt(InParameterName: FName, InArrayIndex: number): number;
    GetParameterValueFloat(InParameterName: FName, InArrayIndex: number): number;
    GetParameterValueDouble(InParameterName: FName, InArrayIndex: number): number;
    GetParameterValueBool(InParameterName: FName, InArrayIndex: number): boolean;
    Execute(Context: FRigVMExtendedExecuteContext, InEntryName: FName): boolean;
    AddRigVMFunction(InRigVMStruct: UScriptStruct, InMethodName: FName): number;
}
declare const URigVM: URigVM;

declare interface URigVMBlueprintGeneratedClass extends UBlueprintGeneratedClass {
    GraphFunctionStore: FRigVMGraphFunctionStore;
}
declare const URigVMBlueprintGeneratedClass: URigVMBlueprintGeneratedClass;

declare interface URigVMEditorSettings extends UDeveloperSettings {

}
declare const URigVMEditorSettings: URigVMEditorSettings;

declare interface URigVMHost extends UObject {
    VMRuntimeSettings: FRigVMRuntimeSettings;
    VM: URigVM;
    UserDefinedStructGuidToPathName: Record<FString, FSoftObjectPath>;
    UserDefinedEnumToPathName: Record<FString, FSoftObjectPath>;
    UserDefinedTypesInUse: TSet<UObject>;
    DrawContainer: FRigVMDrawContainer;
    EventQueue: TArray<FName>;
    AssetUserData: TArray<UAssetUserData>;
    SupportsEvent(InEventName: FName): boolean;
    SetVariableFromString(InVariableName: FName, InValue: string | FString): boolean;
    SetFramesPerSecond(InFramesPerSecond: number): void;
    SetDeltaTime(InDeltaTime: number): void;
    SetAbsoluteTime(InAbsoluteTime: number, InSetDeltaTimeZero: boolean): void;
    SetAbsoluteAndDeltaTime(InAbsoluteTime: number, InDeltaTime: number): void;
    RequestRunOnceEvent(InEventName: FName, InEventIndex: number): void;
    RequestInit(): void;
    RemoveRunOnceEvent(InEventName: FName): boolean;
    IsInitRequired(): boolean;
    GetVM(): URigVM;
    GetVariableType(InVariableName: FName): FName;
    GetVariableAsString(InVariableName: FName): FString;
    GetSupportedEvents(): TArray<FName>;
    GetScriptAccessibleVariables(): TArray<FName>;
    GetExtendedExecuteContext(): FRigVMExtendedExecuteContext;
    GetDeltaTime(): number;
    GetCurrentFramesPerSecond(): number;
    GetAbsoluteTime(): number;
    FindRigVMHosts(Outer: UObject, OptionalClass: TSubclassOf<URigVMHost>): TArray<URigVMHost>;
    ExecuteEvent(InEventName: FName): boolean;
    Execute(InEventName: FName): boolean;
    CanExecute(): boolean;
}
declare const URigVMHost: URigVMHost;

declare interface URigVMMemoryStorage extends UObject {

}
declare const URigVMMemoryStorage: URigVMMemoryStorage;

declare interface URigVMMemoryStorageGeneratorClass extends UClass {

}
declare const URigVMMemoryStorageGeneratorClass: URigVMMemoryStorageGeneratorClass;

declare interface URigVMNativized extends URigVM {

}
declare const URigVMNativized: URigVMNativized;

declare interface URigVMProjectSettings extends UDeveloperSettings {
    VariantTags: TArray<FRigVMTag>;
    GetTag(InTagName: FName): FRigVMTag;
}
declare const URigVMProjectSettings: URigVMProjectSettings;

declare interface URigVMUserWorkflowOptions extends UObject {
    Subject: UObject;
    Workflow: FRigVMUserWorkflow;
    RequiresDialog(): boolean;
    ReportWarning(InMessage: string | FString): void;
    ReportInfo(InMessage: string | FString): void;
    ReportError(InMessage: string | FString): void;
    IsValid(): boolean;
}
declare const URigVMUserWorkflowOptions: URigVMUserWorkflowOptions;

