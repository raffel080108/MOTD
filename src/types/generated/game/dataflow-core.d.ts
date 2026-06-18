declare interface FConvertBoolArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowBoolArrayTypes;
    Out: FDataflowBoolArrayTypes;
}

declare interface FConvertBoolTypesDataflowNode extends FDataflowNode {
    In: FDataflowBoolTypes;
    Out: FDataflowBoolTypes;
}

declare interface FConvertNumericArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowNumericArrayTypes;
    Out: FDataflowNumericArrayTypes;
}

declare interface FConvertNumericTypesDataflowNode extends FDataflowNode {
    In: FDataflowNumericTypes;
    Out: FDataflowNumericTypes;
}

declare interface FConvertRotationDataflowNode extends FDataflowNode {
    In: FDataflowRotationTypes;
    Out: FDataflowRotationTypes;
}

declare interface FConvertSelectionTypesDataflowNode extends FDataflowNode {
    Collection: FManagedArrayCollection;
    In: FDataflowSelectionTypes;
    bAllElementsMustBeSelected: boolean;
    Out: FDataflowSelectionTypes;
}

declare interface FConvertStringArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowStringArrayTypes;
    Out: FDataflowStringArrayTypes;
}

declare interface FConvertStringConvertibleTypesDataflowNode extends FDataflowNode {
    In: FDataflowStringConvertibleTypes;
    Out: FDataflowStringConvertibleTypes;
}

declare interface FConvertStringTypesDataflowNode extends FDataflowNode {
    In: FDataflowStringTypes;
    Out: FDataflowStringTypes;
}

declare interface FConvertTransformArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowTransformArrayTypes;
    Out: FDataflowTransformArrayTypes;
}

declare interface FConvertTransformTypesDataflowNode extends FDataflowNode {
    In: FDataflowTransformTypes;
    Out: FDataflowTransformTypes;
}

declare interface FConvertUObjectConvertibleTypesDataflowNode extends FDataflowNode {
    In: FDataflowUObjectConvertibleTypes;
    Out: FDataflowUObjectConvertibleTypes;
}

declare interface FConvertVectorArrayTypesDataflowNode extends FDataflowNode {
    In: FDataflowVectorArrayTypes;
    Out: FDataflowVectorArrayTypes;
}

declare interface FConvertVectorTypesDataflowNode extends FDataflowNode {
    In: FDataflowVectorTypes;
    Out: FDataflowVectorTypes;
}

declare interface FDataflowAllTypes extends FDataflowAnyType {

}

declare type FDataflowAnyType = object;

declare interface FDataflowArrayInput extends FDataflowInput {

}

declare interface FDataflowArrayOutput extends FDataflowOutput {

}

declare interface FDataflowArrayTypes extends FDataflowAnyType {

}

declare type FDataflowBaseElement = object;

declare interface FDataflowBoolArrayTypes extends FDataflowAnyType {
    Value: boolean[];
}

declare interface FDataflowBoolTypes extends FDataflowAnyType {
    Value: boolean;
}

declare interface FDataflowBranchNode extends FDataflowNode {
    TrueValue: FDataflowAnyType;
    FalseValue: FDataflowAnyType;
    bCondition: boolean;
    Result: FDataflowAnyType;
}

declare type FDataflowConnection = object;

declare interface FDataflowFaceSelection extends FDataflowSelection {

}

declare interface FDataflowForceDependencyNode extends FDataflowNode {
    Value: FDataflowAnyType;
    DependentValue: FDataflowAnyType;
}

declare type FDataflowFreezeActions = object;

declare interface FDataflowGeometrySelection extends FDataflowSelection {

}

declare type FDataflowImage = object;

declare interface FDataflowImageCombineChannelsNode extends FDataflowNode {
    Red: FDataflowImage;
    Green: FDataflowImage;
    Blue: FDataflowImage;
    alpha: FDataflowImage;
    Image: FDataflowImage;
    ResolutionOptions: EDataflowImageCombineResolutionOption;
    Resolution: EDataflowImageResolution;
}

declare interface FDataflowImageFromColorNode extends FDataflowNode {
    FillColor: FLinearColor;
    Resolution: EDataflowImageResolution;
    Image: FDataflowImage;
}

declare interface FDataflowImageSplitChannelsNode extends FDataflowNode {
    Image: FDataflowImage;
    Red: FDataflowImage;
    Green: FDataflowImage;
    Blue: FDataflowImage;
    alpha: FDataflowImage;
}

declare interface FDataflowInput extends FDataflowConnection {

}

declare interface FDataflowMaterialSelection extends FDataflowSelection {

}

declare interface FDataflowMathAbsNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathAddNode extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathArcCosNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathArcSinNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathArcTan2Node extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathArcTanNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathCeilNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathClampNode extends FDataflowMathOneInputOperatorNode {
    min: FDataflowNumericTypes;
    max: FDataflowNumericTypes;
}

declare interface FDataflowMathConstantNode extends FDataflowNode {
    Constant: EDataflowMathConstantsEnum;
    Result: FDataflowNumericTypes;
}

declare interface FDataflowMathCosNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathCubeNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathDegToRadNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathDivideNode extends FDataflowMathTwoInputsOperatorNode {
    Fallback: FDataflowNumericTypes;
}

declare interface FDataflowMathExpNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathFloorNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathFracNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathInverseSquareRootNode extends FDataflowMathOneInputOperatorNode {
    Fallback: FDataflowNumericTypes;
}

declare interface FDataflowMathLogNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathLogXNode extends FDataflowMathOneInputOperatorNode {
    base: FDataflowNumericTypes;
}

declare interface FDataflowMathMaximumNode extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathMaximumNode_v2 extends FDataflowNode {
    Inputs: FDataflowNumericTypes[];
    Result: FDataflowNumericTypes;
}

declare interface FDataflowMathMinimumNode extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathMinimumNode_v2 extends FDataflowNode {
    Inputs: FDataflowNumericTypes[];
    Result: FDataflowNumericTypes;
}

declare interface FDataflowMathMultiplyNode extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathNegateNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathOneInputOperatorNode extends FDataflowNode {
    A: FDataflowNumericTypes;
    Result: FDataflowNumericTypes;
}

declare interface FDataflowMathOneMinusNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathPowNode extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathRadToDegNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathReciprocalNode extends FDataflowMathOneInputOperatorNode {
    Fallback: FDataflowNumericTypes;
}

declare interface FDataflowMathRoundNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathSignNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathSinNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathSquareNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathSquareRootNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathSubtractNode extends FDataflowMathTwoInputsOperatorNode {

}

declare interface FDataflowMathTanNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathTruncNode extends FDataflowMathOneInputOperatorNode {

}

declare interface FDataflowMathTwoInputsOperatorNode extends FDataflowNode {
    A: FDataflowNumericTypes;
    B: FDataflowNumericTypes;
    Result: FDataflowNumericTypes;
}

declare interface FDataflowNode {
    bActive: boolean;
    bOverrideColor: boolean;
    OverrideColor: FLinearColor;
    FrozenProperties: FInstancedPropertyBag;
    bIsFrozen: boolean;
}

declare interface FDataflowNumericArrayTypes extends FDataflowAnyType {
    Value: number[];
}

declare interface FDataflowNumericTypes extends FDataflowAnyType {
    Value: number;
}

declare interface FDataflowOutput extends FDataflowConnection {

}

declare interface FDataflowOverrideNode extends FDataflowNode {
    Key: string;
    Default: string;
    IsOverriden: boolean;
}

declare type FDataflowPath = object;

declare interface FDataflowPrintNode extends FDataflowNode {
    Value: FDataflowStringConvertibleTypes;
}

declare interface FDataflowReRouteNode extends FDataflowNode {
    Value: FDataflowAnyType;
}

declare interface FDataflowRotationTypes extends FDataflowAnyType {
    Value: FRotator;
}

declare interface FDataflowSelectNode extends FDataflowNode {
    Inputs: FDataflowAnyType[];
    SelectedIndex: number;
    Result: FDataflowAnyType;
}

declare type FDataflowSelection = object;

declare interface FDataflowSelectionTypes extends FDataflowAnyType {
    Value: FDataflowSelection;
}

declare interface FDataflowStringArrayTypes extends FDataflowAnyType {
    Value: string[];
}

declare interface FDataflowStringConvertibleTypes extends FDataflowAnyType {
    Value: string;
}

declare interface FDataflowStringTypes extends FDataflowAnyType {
    Value: string;
}

declare interface FDataflowTerminalNode extends FDataflowNode {

}

declare interface FDataflowTransformArrayTypes extends FDataflowAnyType {
    Value: FTransform[];
}

declare interface FDataflowTransformSelection extends FDataflowSelection {

}

declare interface FDataflowTransformTypes extends FDataflowAnyType {
    Value: FTransform;
}

declare interface FDataflowUObjectConvertibleTypes extends FDataflowAnyType {
    Value: UObject;
}

declare interface FDataflowVectorAddNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    V: FDataflowVectorTypes;
}

declare interface FDataflowVectorArrayTypes extends FDataflowAnyType {
    Value: FVector4[];
}

declare interface FDataflowVectorBreakNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Z: FDataflowNumericTypes;
    W: FDataflowNumericTypes;
}

declare interface FDataflowVectorCrossProductNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    CrossProduct: FDataflowVectorTypes;
}

declare interface FDataflowVectorDistanceNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    Distance: FDataflowNumericTypes;
}

declare interface FDataflowVectorDotProductNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    DotProduct: FDataflowNumericTypes;
}

declare interface FDataflowVectorLengthNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    Length: FDataflowNumericTypes;
}

declare interface FDataflowVectorMakeVec2Node extends FDataflowNode {
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Vector2D: FDataflowVectorTypes;
}

declare interface FDataflowVectorMakeVec3Node extends FDataflowNode {
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Z: FDataflowNumericTypes;
    Vector3d: FDataflowVectorTypes;
}

declare interface FDataflowVectorMakeVec4Node extends FDataflowNode {
    X: FDataflowNumericTypes;
    Y: FDataflowNumericTypes;
    Z: FDataflowNumericTypes;
    W: FDataflowNumericTypes;
    Vector4d: FDataflowVectorTypes;
}

declare interface FDataflowVectorNormalize extends FDataflowNode {
    V: FDataflowVectorTypes;
    Normalized: FDataflowVectorTypes;
}

declare interface FDataflowVectorScaleNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    Scale: FDataflowNumericTypes;
    Scaled: FDataflowVectorTypes;
}

declare interface FDataflowVectorSquaredLengthNode extends FDataflowNode {
    V: FDataflowVectorTypes;
    SquaredLength: FDataflowNumericTypes;
}

declare interface FDataflowVectorSubtractNode extends FDataflowNode {
    A: FDataflowVectorTypes;
    B: FDataflowVectorTypes;
    V: FDataflowVectorTypes;
}

declare interface FDataflowVectorTypes extends FDataflowAnyType {
    Value: FVector4;
}

declare interface FDataflowVertexSelection extends FDataflowSelection {

}

declare interface FNodeColors {
    NodeTitleColor: FLinearColor;
    NodeBodyTintColor: FLinearColor;
}

declare interface FPinSettings {
    PinColor: FLinearColor;
    WireThickness: number;
}

declare interface FTransformLevelColors {
    LevelColors: FLinearColor[];
    BlankColor: FLinearColor;
}

declare interface IDataflowGraphInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UDataflowSettings extends UDeveloperSettings {
    readonly __properties_UDataflowSettings: {
        NodeColorsMap: TMap<string, FNodeColors>;
        PinSettingsMap: TMap<string, FPinSettings>;
        TransformLevelColors: FTransformLevelColors;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowSettings['__properties_UDataflowSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

