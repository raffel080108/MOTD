declare interface FConvertBoolArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowBoolArrayTypes;
    Out: FDataflowBoolArrayTypes;
}
declare const FConvertBoolArrayTypesDataflowNode: FConvertBoolArrayTypesDataflowNode;

declare interface FConvertBoolTypesDataflowNode extends FDataflowNode {
    In: FDataflowBoolTypes;
    Out: FDataflowBoolTypes;
}
declare const FConvertBoolTypesDataflowNode: FConvertBoolTypesDataflowNode;

declare interface FConvertNumericArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowNumericArrayTypes;
    Out: FDataflowNumericArrayTypes;
}
declare const FConvertNumericArrayTypesDataflowNode: FConvertNumericArrayTypesDataflowNode;

declare interface FConvertNumericTypesDataflowNode extends FDataflowNode {
    In: FDataflowNumericTypes;
    Out: FDataflowNumericTypes;
}
declare const FConvertNumericTypesDataflowNode: FConvertNumericTypesDataflowNode;

declare interface FConvertRotationDataflowNode extends FDataflowNode {
    In: FDataflowRotationTypes;
    Out: FDataflowRotationTypes;
}
declare const FConvertRotationDataflowNode: FConvertRotationDataflowNode;

declare interface FConvertSelectionTypesDataflowNode extends FDataflowNode {
    Collection: FManagedArrayCollection;
    In: FDataflowSelectionTypes;
    bAllElementsMustBeSelected: boolean;
    Out: FDataflowSelectionTypes;
}
declare const FConvertSelectionTypesDataflowNode: FConvertSelectionTypesDataflowNode;

declare interface FConvertStringArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowStringArrayTypes;
    Out: FDataflowStringArrayTypes;
}
declare const FConvertStringArrayTypesDataflowNode: FConvertStringArrayTypesDataflowNode;

declare interface FConvertStringConvertibleTypesDataflowNode extends FDataflowNode {
    In: FDataflowStringConvertibleTypes;
    Out: FDataflowStringConvertibleTypes;
}
declare const FConvertStringConvertibleTypesDataflowNode: FConvertStringConvertibleTypesDataflowNode;

declare interface FConvertStringTypesDataflowNode extends FDataflowNode {
    In: FDataflowStringTypes;
    Out: FDataflowStringTypes;
}
declare const FConvertStringTypesDataflowNode: FConvertStringTypesDataflowNode;

declare interface FConvertTransformArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowTransformArrayTypes;
    Out: FDataflowTransformArrayTypes;
}
declare const FConvertTransformArrayTypesDataflowNode: FConvertTransformArrayTypesDataflowNode;

declare interface FConvertTransformTypesDataflowNode extends FDataflowNode {
    In: FDataflowTransformTypes;
    Out: FDataflowTransformTypes;
}
declare const FConvertTransformTypesDataflowNode: FConvertTransformTypesDataflowNode;

declare interface FConvertUObjectConvertibleTypesDataflowNode extends FDataflowNode {
    In: FDataflowUObjectConvertibleTypes;
    Out: FDataflowUObjectConvertibleTypes;
}
declare const FConvertUObjectConvertibleTypesDataflowNode: FConvertUObjectConvertibleTypesDataflowNode;

declare interface FConvertVectorArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowVectorArrayTypes;
    Out: FDataflowVectorArrayTypes;
}
declare const FConvertVectorArrayTypesDataflowNode: FConvertVectorArrayTypesDataflowNode;

declare interface FConvertVectorTypesDataflowNode extends FDataflowNode {
    In: FDataflowVectorTypes;
    Out: FDataflowVectorTypes;
}
declare const FConvertVectorTypesDataflowNode: FConvertVectorTypesDataflowNode;

declare interface FDataflowAllTypes extends FDataflowAnyType {

}
declare const FDataflowAllTypes: FDataflowAllTypes;

declare interface FDataflowAnyType {

}
declare const FDataflowAnyType: FDataflowAnyType;

declare interface FDataflowArrayInput extends FDataflowInput {

}
declare const FDataflowArrayInput: FDataflowArrayInput;

declare interface FDataflowArrayOutput extends FDataflowOutput {

}
declare const FDataflowArrayOutput: FDataflowArrayOutput;

declare interface FDataflowArrayTypes extends FDataflowAnyType {

}
declare const FDataflowArrayTypes: FDataflowArrayTypes;

declare interface FDataflowBaseElement {

}
declare const FDataflowBaseElement: FDataflowBaseElement;

declare interface FDataflowBoolArrayTypes extends FDataflowAnyType {
    Value: TArray<boolean>;
}
declare const FDataflowBoolArrayTypes: FDataflowBoolArrayTypes;

declare interface FDataflowBoolTypes extends FDataflowAnyType {
    Value: boolean;
}
declare const FDataflowBoolTypes: FDataflowBoolTypes;

declare interface FDataflowBranchNode extends FDataflowNode {
    TrueValue: FDataflowAnyType;
    FalseValue: FDataflowAnyType;
    bCondition: boolean;
    Result: FDataflowAnyType;
}
declare const FDataflowBranchNode: FDataflowBranchNode;

declare interface FDataflowConnection {

}
declare const FDataflowConnection: FDataflowConnection;

declare interface FDataflowFaceSelection extends FDataflowSelection {

}
declare const FDataflowFaceSelection: FDataflowFaceSelection;

declare interface FDataflowForceDependencyNode extends FDataflowNode {
    Value: FDataflowAnyType;
    DependentValue: FDataflowAnyType;
}
declare const FDataflowForceDependencyNode: FDataflowForceDependencyNode;

declare interface FDataflowFreezeActions {

}
declare const FDataflowFreezeActions: FDataflowFreezeActions;

declare interface FDataflowGeometrySelection extends FDataflowSelection {

}
declare const FDataflowGeometrySelection: FDataflowGeometrySelection;

declare interface FDataflowImage {

}
declare const FDataflowImage: FDataflowImage;

declare interface FDataflowImageCombineChannelsNode extends FDataflowNode {
    Red: FDataflowImage;
    Green: FDataflowImage;
    Blue: FDataflowImage;
    alpha: FDataflowImage;
    Image: FDataflowImage;
    ResolutionOptions: EDataflowImageCombineResolutionOption;
    Resolution: EDataflowImageResolution;
}
declare const FDataflowImageCombineChannelsNode: FDataflowImageCombineChannelsNode;

declare interface FDataflowImageFromColorNode extends FDataflowNode {
    FillColor: FLinearColor;
    Resolution: EDataflowImageResolution;
    Image: FDataflowImage;
}
declare const FDataflowImageFromColorNode: FDataflowImageFromColorNode;

declare interface FDataflowImageSplitChannelsNode extends FDataflowNode {
    Image: FDataflowImage;
    Red: FDataflowImage;
    Green: FDataflowImage;
    Blue: FDataflowImage;
    alpha: FDataflowImage;
}
declare const FDataflowImageSplitChannelsNode: FDataflowImageSplitChannelsNode;

declare interface FDataflowInput extends FDataflowConnection {

}
declare const FDataflowInput: FDataflowInput;

declare interface FDataflowMaterialSelection extends FDataflowSelection {

}
declare const FDataflowMaterialSelection: FDataflowMaterialSelection;

declare interface FDataflowMathAbsNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathAbsNode: FDataflowMathAbsNode;

declare interface FDataflowMathAddNode extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathAddNode: FDataflowMathAddNode;

declare interface FDataflowMathArcCosNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathArcCosNode: FDataflowMathArcCosNode;

declare interface FDataflowMathArcSinNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathArcSinNode: FDataflowMathArcSinNode;

declare interface FDataflowMathArcTan2Node extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathArcTan2Node: FDataflowMathArcTan2Node;

declare interface FDataflowMathArcTanNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathArcTanNode: FDataflowMathArcTanNode;

declare interface FDataflowMathCeilNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathCeilNode: FDataflowMathCeilNode;

declare interface FDataflowMathClampNode extends FDataflowMathOneInputOperatorNode {
    min: FDataflowNumericTypes;
    max: FDataflowNumericTypes;
}
declare const FDataflowMathClampNode: FDataflowMathClampNode;

declare interface FDataflowMathConstantNode extends FDataflowNode {
    Constant: EDataflowMathConstantsEnum;
    Result: FDataflowNumericTypes;
}
declare const FDataflowMathConstantNode: FDataflowMathConstantNode;

declare interface FDataflowMathCosNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathCosNode: FDataflowMathCosNode;

declare interface FDataflowMathCubeNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathCubeNode: FDataflowMathCubeNode;

declare interface FDataflowMathDegToRadNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathDegToRadNode: FDataflowMathDegToRadNode;

declare interface FDataflowMathDivideNode extends FDataflowMathTwoInputsOperatorNode {
    Fallback: FDataflowNumericTypes;
}
declare const FDataflowMathDivideNode: FDataflowMathDivideNode;

declare interface FDataflowMathExpNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathExpNode: FDataflowMathExpNode;

declare interface FDataflowMathFloorNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathFloorNode: FDataflowMathFloorNode;

declare interface FDataflowMathFracNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathFracNode: FDataflowMathFracNode;

declare interface FDataflowMathInverseSquareRootNode extends FDataflowMathOneInputOperatorNode {
    Fallback: FDataflowNumericTypes;
}
declare const FDataflowMathInverseSquareRootNode: FDataflowMathInverseSquareRootNode;

declare interface FDataflowMathLogNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathLogNode: FDataflowMathLogNode;

declare interface FDataflowMathLogXNode extends FDataflowMathOneInputOperatorNode {
    base: FDataflowNumericTypes;
}
declare const FDataflowMathLogXNode: FDataflowMathLogXNode;

declare interface FDataflowMathMaximumNode extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathMaximumNode: FDataflowMathMaximumNode;

declare interface FDataflowMathMaximumNode_v2 extends FDataflowNode {
    Inputs: TArray<FDataflowNumericTypes>;
    Result: FDataflowNumericTypes;
}
declare const FDataflowMathMaximumNode_v2: FDataflowMathMaximumNode_v2;

declare interface FDataflowMathMinimumNode extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathMinimumNode: FDataflowMathMinimumNode;

declare interface FDataflowMathMinimumNode_v2 extends FDataflowNode {
    Inputs: TArray<FDataflowNumericTypes>;
    Result: FDataflowNumericTypes;
}
declare const FDataflowMathMinimumNode_v2: FDataflowMathMinimumNode_v2;

declare interface FDataflowMathMultiplyNode extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathMultiplyNode: FDataflowMathMultiplyNode;

declare interface FDataflowMathNegateNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathNegateNode: FDataflowMathNegateNode;

declare interface FDataflowMathOneInputOperatorNode extends FDataflowNode {
    A: FDataflowNumericTypes;
    Result: FDataflowNumericTypes;
}
declare const FDataflowMathOneInputOperatorNode: FDataflowMathOneInputOperatorNode;

declare interface FDataflowMathOneMinusNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathOneMinusNode: FDataflowMathOneMinusNode;

declare interface FDataflowMathPowNode extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathPowNode: FDataflowMathPowNode;

declare interface FDataflowMathRadToDegNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathRadToDegNode: FDataflowMathRadToDegNode;

declare interface FDataflowMathReciprocalNode extends FDataflowMathOneInputOperatorNode {
    Fallback: FDataflowNumericTypes;
}
declare const FDataflowMathReciprocalNode: FDataflowMathReciprocalNode;

declare interface FDataflowMathRoundNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathRoundNode: FDataflowMathRoundNode;

declare interface FDataflowMathSignNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathSignNode: FDataflowMathSignNode;

declare interface FDataflowMathSinNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathSinNode: FDataflowMathSinNode;

declare interface FDataflowMathSquareNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathSquareNode: FDataflowMathSquareNode;

declare interface FDataflowMathSquareRootNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathSquareRootNode: FDataflowMathSquareRootNode;

declare interface FDataflowMathSubtractNode extends FDataflowMathTwoInputsOperatorNode {

}
declare const FDataflowMathSubtractNode: FDataflowMathSubtractNode;

declare interface FDataflowMathTanNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathTanNode: FDataflowMathTanNode;

declare interface FDataflowMathTruncNode extends FDataflowMathOneInputOperatorNode {

}
declare const FDataflowMathTruncNode: FDataflowMathTruncNode;

declare interface FDataflowMathTwoInputsOperatorNode extends FDataflowNode {
    A: FDataflowNumericTypes;
    B: FDataflowNumericTypes;
    Result: FDataflowNumericTypes;
}
declare const FDataflowMathTwoInputsOperatorNode: FDataflowMathTwoInputsOperatorNode;

declare interface FDataflowNode {
    bActive: boolean;
    bOverrideColor: boolean;
    OverrideColor: FLinearColor;
    FrozenProperties: FInstancedPropertyBag;
    bIsFrozen: boolean;
}
declare const FDataflowNode: FDataflowNode;

declare interface FDataflowNumericArrayTypes extends FDataflowAnyType {
    Value: TArray<number>;
}
declare const FDataflowNumericArrayTypes: FDataflowNumericArrayTypes;

declare interface FDataflowNumericTypes extends FDataflowAnyType {
    Value: number;
}
declare const FDataflowNumericTypes: FDataflowNumericTypes;

declare interface FDataflowOutput extends FDataflowConnection {

}
declare const FDataflowOutput: FDataflowOutput;

declare interface FDataflowOverrideNode extends FDataflowNode {
    Key: FName;
    Default: FString;
    IsOverriden: boolean;
}
declare const FDataflowOverrideNode: FDataflowOverrideNode;

declare interface FDataflowPath {

}
declare const FDataflowPath: FDataflowPath;

declare interface FDataflowPrintNode extends FDataflowNode {
    Value: FDataflowStringConvertibleTypes;
}
declare const FDataflowPrintNode: FDataflowPrintNode;

declare interface FDataflowReRouteNode extends FDataflowNode {
    Value: FDataflowAnyType;
}
declare const FDataflowReRouteNode: FDataflowReRouteNode;

declare interface FDataflowRotationTypes extends FDataflowAnyType {
    Value: FRotator;
}
declare const FDataflowRotationTypes: FDataflowRotationTypes;

declare interface FDataflowSelectNode extends FDataflowNode {
    Inputs: TArray<FDataflowAnyType>;
    SelectedIndex: number;
    Result: FDataflowAnyType;
}
declare const FDataflowSelectNode: FDataflowSelectNode;

declare interface FDataflowSelection {

}
declare const FDataflowSelection: FDataflowSelection;

declare interface FDataflowSelectionTypes extends FDataflowAnyType {
    Value: FDataflowSelection;
}
declare const FDataflowSelectionTypes: FDataflowSelectionTypes;

declare interface FDataflowStringArrayTypes extends FDataflowAnyType {
    Value: TArray<FString>;
}
declare const FDataflowStringArrayTypes: FDataflowStringArrayTypes;

declare interface FDataflowStringConvertibleTypes extends FDataflowAnyType {
    Value: FString;
}
declare const FDataflowStringConvertibleTypes: FDataflowStringConvertibleTypes;

declare interface FDataflowStringTypes extends FDataflowAnyType {
    Value: FString;
}
declare const FDataflowStringTypes: FDataflowStringTypes;

declare interface FDataflowTerminalNode extends FDataflowNode {

}
declare const FDataflowTerminalNode: FDataflowTerminalNode;

declare interface FDataflowTransformArrayTypes extends FDataflowAnyType {
    Value: TArray<FTransform>;
}
declare const FDataflowTransformArrayTypes: FDataflowTransformArrayTypes;

declare interface FDataflowTransformSelection extends FDataflowSelection {

}
declare const FDataflowTransformSelection: FDataflowTransformSelection;

declare interface FDataflowTransformTypes extends FDataflowAnyType {
    Value: FTransform;
}
declare const FDataflowTransformTypes: FDataflowTransformTypes;

declare interface FDataflowUObjectConvertibleTypes extends FDataflowAnyType {
    Value: UObject;
}
declare const FDataflowUObjectConvertibleTypes: FDataflowUObjectConvertibleTypes;

declare interface FDataflowVectorAddNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    V: FDataflowVectorTypes;
}
declare const FDataflowVectorAddNode: FDataflowVectorAddNode;

declare interface FDataflowVectorArrayTypes extends FDataflowAnyType {
    Value: TArray<FVector4>;
}
declare const FDataflowVectorArrayTypes: FDataflowVectorArrayTypes;

declare interface FDataflowVectorBreakNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Z: FDataflowNumericTypes;
    W: FDataflowNumericTypes;
}
declare const FDataflowVectorBreakNode: FDataflowVectorBreakNode;

declare interface FDataflowVectorCrossProductNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    CrossProduct: FDataflowVectorTypes;
}
declare const FDataflowVectorCrossProductNode: FDataflowVectorCrossProductNode;

declare interface FDataflowVectorDistanceNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    Distance: FDataflowNumericTypes;
}
declare const FDataflowVectorDistanceNode: FDataflowVectorDistanceNode;

declare interface FDataflowVectorDotProductNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    DotProduct: FDataflowNumericTypes;
}
declare const FDataflowVectorDotProductNode: FDataflowVectorDotProductNode;

declare interface FDataflowVectorLengthNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    Length: FDataflowNumericTypes;
}
declare const FDataflowVectorLengthNode: FDataflowVectorLengthNode;

declare interface FDataflowVectorMakeVec2Node extends FDataflowNode {
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Vector2D: FDataflowVectorTypes;
}
declare const FDataflowVectorMakeVec2Node: FDataflowVectorMakeVec2Node;

declare interface FDataflowVectorMakeVec3Node extends FDataflowNode {
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Z: FDataflowNumericTypes;
    Vector3d: FDataflowVectorTypes;
}
declare const FDataflowVectorMakeVec3Node: FDataflowVectorMakeVec3Node;

declare interface FDataflowVectorMakeVec4Node extends FDataflowNode {
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Z: FDataflowNumericTypes;
    W: FDataflowNumericTypes;
    Vector4d: FDataflowVectorTypes;
}
declare const FDataflowVectorMakeVec4Node: FDataflowVectorMakeVec4Node;

declare interface FDataflowVectorNormalize extends FDataflowNode {
    V: FDataflowVectorTypes;
    Normalized: FDataflowVectorTypes;
}
declare const FDataflowVectorNormalize: FDataflowVectorNormalize;

declare interface FDataflowVectorScaleNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    Scale: FDataflowNumericTypes;
    Scaled: FDataflowVectorTypes;
}
declare const FDataflowVectorScaleNode: FDataflowVectorScaleNode;

declare interface FDataflowVectorSquaredLengthNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    SquaredLength: FDataflowNumericTypes;
}
declare const FDataflowVectorSquaredLengthNode: FDataflowVectorSquaredLengthNode;

declare interface FDataflowVectorSubtractNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    V: FDataflowVectorTypes;
}
declare const FDataflowVectorSubtractNode: FDataflowVectorSubtractNode;

declare interface FDataflowVectorTypes extends FDataflowAnyType {
    Value: FVector4;
}
declare const FDataflowVectorTypes: FDataflowVectorTypes;

declare interface FDataflowVertexSelection extends FDataflowSelection {

}
declare const FDataflowVertexSelection: FDataflowVertexSelection;

declare interface FNodeColors {
    NodeTitleColor: FLinearColor;
    NodeBodyTintColor: FLinearColor;
}
declare const FNodeColors: FNodeColors;

declare interface FPinSettings {
    PinColor: FLinearColor;
    WireThickness: number;
}
declare const FPinSettings: FPinSettings;

declare interface FTransformLevelColors {
    LevelColors: TArray<FLinearColor>;
    BlankColor: FLinearColor;
}
declare const FTransformLevelColors: FTransformLevelColors;

declare interface IDataflowGraphInterface extends IInterface {

}
declare const IDataflowGraphInterface: IDataflowGraphInterface;

declare interface UDataflowSettings extends UDeveloperSettings {
    NodeColorsMap: Record<FName, FNodeColors>;
    PinSettingsMap: Record<FName, FPinSettings>;
    TransformLevelColors: FTransformLevelColors;
}
declare const UDataflowSettings: UDataflowSettings;

