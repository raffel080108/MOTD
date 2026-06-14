declare interface FOptimusAction {

}
declare const FOptimusAction: FOptimusAction;

declare interface FOptimusAnimAttributeArray {
    InnerArray: TArray<FOptimusAnimAttributeDescription>;
}
declare const FOptimusAnimAttributeArray: FOptimusAnimAttributeArray;

declare interface FOptimusAnimAttributeBufferArray {
    InnerArray: TArray<FOptimusAnimAttributeBufferDescription>;
}
declare const FOptimusAnimAttributeBufferArray: FOptimusAnimAttributeBufferArray;

declare interface FOptimusAnimAttributeBufferDescription {
    Name: FString;
    DataType: FOptimusDataTypeRef;
    DefaultValueStruct: FOptimusValueContainerStruct;
    HlslId: FString;
    PinName: FName;
}
declare const FOptimusAnimAttributeBufferDescription: FOptimusAnimAttributeBufferDescription;

declare interface FOptimusAnimAttributeDescription {
    Name: FString;
    BoneName: FName;
    DataType: FOptimusDataTypeRef;
    DefaultValueStruct: FOptimusValueContainerStruct;
    HlslId: FString;
    PinName: FName;
    DefaultValue: UOptimusValueContainer;
}
declare const FOptimusAnimAttributeDescription: FOptimusAnimAttributeDescription;

declare interface FOptimusCommentNodeAction_ResizeNode extends FOptimusAction {

}
declare const FOptimusCommentNodeAction_ResizeNode: FOptimusCommentNodeAction_ResizeNode;

declare interface FOptimusComponentBindingAction_AddBinding extends FOptimusAction {

}
declare const FOptimusComponentBindingAction_AddBinding: FOptimusComponentBindingAction_AddBinding;

declare interface FOptimusComponentBindingAction_RemoveBinding extends FOptimusAction {

}
declare const FOptimusComponentBindingAction_RemoveBinding: FOptimusComponentBindingAction_RemoveBinding;

declare interface FOptimusComponentBindingAction_RenameBinding extends FOptimusAction {

}
declare const FOptimusComponentBindingAction_RenameBinding: FOptimusComponentBindingAction_RenameBinding;

declare interface FOptimusComponentBindingAction_SetComponentSource extends FOptimusAction {

}
declare const FOptimusComponentBindingAction_SetComponentSource: FOptimusComponentBindingAction_SetComponentSource;

declare interface FOptimusCompoundAction extends FOptimusAction {

}
declare const FOptimusCompoundAction: FOptimusCompoundAction;

declare interface FOptimusComputeGraphInfo {
    GraphType: EOptimusNodeGraphType;
    GraphName: FName;
    ComputeGraph: UOptimusComputeGraph;
}
declare const FOptimusComputeGraphInfo: FOptimusComputeGraphInfo;

declare interface FOptimusConstant {
    Identifier: FOptimusConstantIdentifier;
    Definition: FOptimusConstantDefinition;
    ComponentBindingIndex: number;
    Type: EOptimusConstantType;
}
declare const FOptimusConstant: FOptimusConstant;

declare interface FOptimusConstantContainer {
    KernelContainers: TArray<FOptimusKernelConstantContainer>;
}
declare const FOptimusConstantContainer: FOptimusConstantContainer;

declare interface FOptimusConstantDefinition {
    ReferencedConstant: FOptimusConstantIdentifier;
    Expression: FString;
}
declare const FOptimusConstantDefinition: FOptimusConstantDefinition;

declare interface FOptimusConstantIdentifier {
    NodePath: FName;
    GroupName: FName;
    ConstantName: FName;
}
declare const FOptimusConstantIdentifier: FOptimusConstantIdentifier;

declare interface FOptimusConstantIndex {
    KernelIndex: number;
    Type: EOptimusConstantType;
    ConstantIndex: number;
}
declare const FOptimusConstantIndex: FOptimusConstantIndex;

declare interface FOptimusDataDomain {
    Type: EOptimusDataDomainType;
    DimensionNames: TArray<FName>;
    Multiplier: number;
    Expression: FString;
    LevelNames: TArray<FName>;
}
declare const FOptimusDataDomain: FOptimusDataDomain;

declare interface FOptimusDataInterfacePropertyOverrideInfo {
    PinNameToValueIdMap: Record<FName, FOptimusValueIdentifier>;
}
declare const FOptimusDataInterfacePropertyOverrideInfo: FOptimusDataInterfacePropertyOverrideInfo;

declare interface FOptimusDataType {
    TypeName: FName;
    DisplayName: FText;
    ShaderValueType: FShaderValueTypeHandle;
    ShaderValueSize: number;
    TypeCategory: FName;
    TypeObject: TWeakObjectPtr<UObject>;
    bHasCustomPinColor: boolean;
    CustomPinColor: FLinearColor;
    UsageFlags: EOptimusDataTypeUsageFlags;
    TypeFlags: EOptimusDataTypeFlags;
}
declare const FOptimusDataType: FOptimusDataType;

declare interface FOptimusDataTypeRef {
    TypeName: FName;
    TypeObject: TSoftObjectPtr<UObject>;
}
declare const FOptimusDataTypeRef: FOptimusDataTypeRef;

declare interface FOptimusDebugDrawParameters {
    bForceEnable: boolean;
    MaxLineCount: number;
    MaxTriangleCount: number;
    MaxCharacterCount: number;
    FontSize: number;
}
declare const FOptimusDebugDrawParameters: FOptimusDebugDrawParameters;

declare interface FOptimusDeformerInstanceComponentBinding {
    ProviderName: FName;
    ComponentName: FName;
}
declare const FOptimusDeformerInstanceComponentBinding: FOptimusDeformerInstanceComponentBinding;

declare interface FOptimusDeformerInstanceExecInfo {
    GraphName: FName;
    GraphType: EOptimusNodeGraphType;
    ComputeGraph: UComputeGraph;
    ComputeGraphInstance: FComputeGraphInstance;
}
declare const FOptimusDeformerInstanceExecInfo: FOptimusDeformerInstanceExecInfo;

declare interface FOptimusExecutionDomain {
    Type: EOptimusExecutionDomainType;
    Name: FName;
    Expression: FString;
}
declare const FOptimusExecutionDomain: FOptimusExecutionDomain;

declare interface FOptimusFunctionGraphIdentifier {
    Asset: UOptimusDeformer;
    Guid: FGuid;
}
declare const FOptimusFunctionGraphIdentifier: FOptimusFunctionGraphIdentifier;

declare interface FOptimusFunctionNodeGraphHeader {
    GraphPath: TSoftObjectPtr<UOptimusFunctionNodeGraph>;
    FunctionName: FName;
    Category: FName;
}
declare const FOptimusFunctionNodeGraphHeader: FOptimusFunctionNodeGraphHeader;

declare interface FOptimusFunctionNodeGraphHeaderArray {
    Headers: TArray<FOptimusFunctionNodeGraphHeader>;
}
declare const FOptimusFunctionNodeGraphHeaderArray: FOptimusFunctionNodeGraphHeaderArray;

declare interface FOptimusFunctionNodeGraphHeaderWithGuid {
    FunctionGraphGuid: FGuid;
    FunctionName: FName;
    Category: FName;
}
declare const FOptimusFunctionNodeGraphHeaderWithGuid: FOptimusFunctionNodeGraphHeaderWithGuid;

declare interface FOptimusFunctionNodeGraphHeaderWithGuidArray {
    Headers: TArray<FOptimusFunctionNodeGraphHeaderWithGuid>;
}
declare const FOptimusFunctionNodeGraphHeaderWithGuidArray: FOptimusFunctionNodeGraphHeaderWithGuidArray;

declare interface FOptimusFunctionReferenceData {
    FunctionReferences: Record<string | number | symbol, FOptimusFunctionReferenceNodeSet>;
}
declare const FOptimusFunctionReferenceData: FOptimusFunctionReferenceData;

declare interface FOptimusFunctionReferenceNodeSet {
    Nodes: TSet<TSoftObjectPtr<UOptimusNode_FunctionReference>>;
}
declare const FOptimusFunctionReferenceNodeSet: FOptimusFunctionReferenceNodeSet;

declare interface FOptimusGraphVariableDescription {
    Name: FString;
    ValueType: FShaderValueTypeHandle;
    ValueId: FOptimusValueIdentifier;
    Offset: number;
    Value: TArray<uint8>;
    ShaderValue: FShaderValueContainer;
    sourceObject: TSoftObjectPtr<UObject>;
}
declare const FOptimusGraphVariableDescription: FOptimusGraphVariableDescription;

declare interface FOptimusKernelConstantContainer {
    InputConstants: TArray<FOptimusConstant>;
    OutputConstants: TArray<FOptimusConstant>;
    GroupNameToBindingIndex: Record<FName, number>;
}
declare const FOptimusKernelConstantContainer: FOptimusKernelConstantContainer;

declare interface FOptimusLoopTerminalInfo {
    count: number;
    Bindings: FOptimusParameterBindingArray;
}
declare const FOptimusLoopTerminalInfo: FOptimusLoopTerminalInfo;

declare interface FOptimusNodeAction_AddGroupingPin extends FOptimusNodeAction_AddRemovePin {

}
declare const FOptimusNodeAction_AddGroupingPin: FOptimusNodeAction_AddGroupingPin;

declare interface FOptimusNodeAction_AddPin extends FOptimusNodeAction_AddRemovePin {

}
declare const FOptimusNodeAction_AddPin: FOptimusNodeAction_AddPin;

declare interface FOptimusNodeAction_AddRemovePin extends FOptimusAction {

}
declare const FOptimusNodeAction_AddRemovePin: FOptimusNodeAction_AddRemovePin;

declare interface FOptimusNodeAction_MoveNode extends FOptimusAction {

}
declare const FOptimusNodeAction_MoveNode: FOptimusNodeAction_MoveNode;

declare interface FOptimusNodeAction_MovePin extends FOptimusAction {

}
declare const FOptimusNodeAction_MovePin: FOptimusNodeAction_MovePin;

declare interface FOptimusNodeAction_RemovePin extends FOptimusNodeAction_AddRemovePin {

}
declare const FOptimusNodeAction_RemovePin: FOptimusNodeAction_RemovePin;

declare interface FOptimusNodeAction_RenameNode extends FOptimusAction {

}
declare const FOptimusNodeAction_RenameNode: FOptimusNodeAction_RenameNode;

declare interface FOptimusNodeAction_SetPinDataDomain extends FOptimusAction {

}
declare const FOptimusNodeAction_SetPinDataDomain: FOptimusNodeAction_SetPinDataDomain;

declare interface FOptimusNodeAction_SetPinName extends FOptimusAction {

}
declare const FOptimusNodeAction_SetPinName: FOptimusNodeAction_SetPinName;

declare interface FOptimusNodeAction_SetPinType extends FOptimusAction {

}
declare const FOptimusNodeAction_SetPinType: FOptimusNodeAction_SetPinType;

declare interface FOptimusNodeAction_SetPinValue extends FOptimusAction {

}
declare const FOptimusNodeAction_SetPinValue: FOptimusNodeAction_SetPinValue;

declare interface FOptimusNodeGraphAction_AddGraph extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_AddGraph: FOptimusNodeGraphAction_AddGraph;

declare interface FOptimusNodeGraphAction_AddLink extends FOptimusNodeGraphAction_AddRemoveLink {

}
declare const FOptimusNodeGraphAction_AddLink: FOptimusNodeGraphAction_AddLink;

declare interface FOptimusNodeGraphAction_AddNode extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_AddNode: FOptimusNodeGraphAction_AddNode;

declare interface FOptimusNodeGraphAction_AddNodePair extends FOptimusNodeGraphAction_AddRemoveNodePair {

}
declare const FOptimusNodeGraphAction_AddNodePair: FOptimusNodeGraphAction_AddNodePair;

declare interface FOptimusNodeGraphAction_AddRemoveLink extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_AddRemoveLink: FOptimusNodeGraphAction_AddRemoveLink;

declare interface FOptimusNodeGraphAction_AddRemoveNodePair extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_AddRemoveNodePair: FOptimusNodeGraphAction_AddRemoveNodePair;

declare interface FOptimusNodeGraphAction_ConnectAdderPin extends FOptimusNodeGraphAction_AddRemoveLink {

}
declare const FOptimusNodeGraphAction_ConnectAdderPin: FOptimusNodeGraphAction_ConnectAdderPin;

declare interface FOptimusNodeGraphAction_DuplicateNode extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_DuplicateNode: FOptimusNodeGraphAction_DuplicateNode;

declare interface FOptimusNodeGraphAction_PackageKernelFunction extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_PackageKernelFunction: FOptimusNodeGraphAction_PackageKernelFunction;

declare interface FOptimusNodeGraphAction_RemoveGraph extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_RemoveGraph: FOptimusNodeGraphAction_RemoveGraph;

declare interface FOptimusNodeGraphAction_RemoveLink extends FOptimusNodeGraphAction_AddRemoveLink {

}
declare const FOptimusNodeGraphAction_RemoveLink: FOptimusNodeGraphAction_RemoveLink;

declare interface FOptimusNodeGraphAction_RemoveNode extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_RemoveNode: FOptimusNodeGraphAction_RemoveNode;

declare interface FOptimusNodeGraphAction_RemoveNodePair extends FOptimusNodeGraphAction_AddRemoveNodePair {

}
declare const FOptimusNodeGraphAction_RemoveNodePair: FOptimusNodeGraphAction_RemoveNodePair;

declare interface FOptimusNodeGraphAction_RenameGraph extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_RenameGraph: FOptimusNodeGraphAction_RenameGraph;

declare interface FOptimusNodeGraphAction_UnpackageKernelFunction extends FOptimusAction {

}
declare const FOptimusNodeGraphAction_UnpackageKernelFunction: FOptimusNodeGraphAction_UnpackageKernelFunction;

declare interface FOptimusNode_ComponentSource_DuplicationInfo {
    BindingName: FName;
    ComponentType: TSubclassOf<UOptimusComponentSource>;
}
declare const FOptimusNode_ComponentSource_DuplicationInfo: FOptimusNode_ComponentSource_DuplicationInfo;

declare interface FOptimusNode_GetVariable_DuplicationInfo {
    VariableName: FName;
    DataType: FOptimusDataTypeRef;
    DefaultValue: FString;
}
declare const FOptimusNode_GetVariable_DuplicationInfo: FOptimusNode_GetVariable_DuplicationInfo;

declare interface FOptimusNode_ResourceAccessorBase_DuplicationInfo {
    ResourceName: FName;
    DataType: FOptimusDataTypeRef;
    DataDomain: FOptimusDataDomain;
}
declare const FOptimusNode_ResourceAccessorBase_DuplicationInfo: FOptimusNode_ResourceAccessorBase_DuplicationInfo;

declare interface FOptimusParameterBinding {
    Name: FOptimusValidatedName;
    DataType: FOptimusDataTypeRef;
    DataDomain: FOptimusDataDomain;
    bSupportAtomicIfCompatibleDataType: boolean;
    bSupportRead: boolean;
}
declare const FOptimusParameterBinding: FOptimusParameterBinding;

declare interface FOptimusParameterBindingArray {
    InnerArray: TArray<FOptimusParameterBinding>;
}
declare const FOptimusParameterBindingArray: FOptimusParameterBindingArray;

declare interface FOptimusPinPairInfo {
    InputPinPath: TArray<FName>;
    OutputPinPath: TArray<FName>;
}
declare const FOptimusPinPairInfo: FOptimusPinPairInfo;

declare interface FOptimusResourceAction_AddResource extends FOptimusAction {

}
declare const FOptimusResourceAction_AddResource: FOptimusResourceAction_AddResource;

declare interface FOptimusResourceAction_RemoveResource extends FOptimusAction {

}
declare const FOptimusResourceAction_RemoveResource: FOptimusResourceAction_RemoveResource;

declare interface FOptimusResourceAction_RenameResource extends FOptimusAction {

}
declare const FOptimusResourceAction_RenameResource: FOptimusResourceAction_RenameResource;

declare interface FOptimusResourceAction_SetDataDomain extends FOptimusAction {

}
declare const FOptimusResourceAction_SetDataDomain: FOptimusResourceAction_SetDataDomain;

declare interface FOptimusResourceAction_SetDataType extends FOptimusAction {

}
declare const FOptimusResourceAction_SetDataType: FOptimusResourceAction_SetDataType;

declare interface FOptimusSecondaryInputBindingsGroup {
    GroupName: FOptimusValidatedName;
    BindingArray: FOptimusParameterBindingArray;
}
declare const FOptimusSecondaryInputBindingsGroup: FOptimusSecondaryInputBindingsGroup;

declare interface FOptimusShaderText {
    Declarations: FString;
    ShaderText: FString;
}
declare const FOptimusShaderText: FOptimusShaderText;

declare interface FOptimusValidatedName {
    Name: FName;
}
declare const FOptimusValidatedName: FOptimusValidatedName;

declare interface FOptimusValueContainerStruct {
    Value: FInstancedPropertyBag;
}
declare const FOptimusValueContainerStruct: FOptimusValueContainerStruct;

declare interface FOptimusValueDescription {
    DataType: FOptimusDataTypeRef;
    ValueUsage: EOptimusValueUsage;
    Value: FOptimusValueContainerStruct;
    ShaderValue: FShaderValueContainer;
}
declare const FOptimusValueDescription: FOptimusValueDescription;

declare interface FOptimusValueIdentifier {
    Type: EOptimusValueType;
    Name: FName;
}
declare const FOptimusValueIdentifier: FOptimusValueIdentifier;

declare interface FOptimusVariableAction_AddVariable extends FOptimusAction {

}
declare const FOptimusVariableAction_AddVariable: FOptimusVariableAction_AddVariable;

declare interface FOptimusVariableAction_RemoveVariable extends FOptimusAction {

}
declare const FOptimusVariableAction_RemoveVariable: FOptimusVariableAction_RemoveVariable;

declare interface FOptimusVariableAction_RenameVariable extends FOptimusAction {

}
declare const FOptimusVariableAction_RenameVariable: FOptimusVariableAction_RenameVariable;

declare interface FOptimusVariableAction_SetDataType extends FOptimusAction {

}
declare const FOptimusVariableAction_SetDataType: FOptimusVariableAction_SetDataType;

declare interface FOptimusVariableMetaDataEntry {
    Key: FName;
    Value: FString;
}
declare const FOptimusVariableMetaDataEntry: FOptimusVariableMetaDataEntry;

declare interface FOptimus_ShaderBinding {
    Name: FName;
    DataType: FOptimusDataTypeRef;
}
declare const FOptimus_ShaderBinding: FOptimus_ShaderBinding;

declare interface FRigUnit_AddOptimusDeformer extends FRigUnitMutable {
    DeformerInstanceGuid: FGuid;
}
declare const FRigUnit_AddOptimusDeformer: FRigUnit_AddOptimusDeformer;

declare interface FRigVMTrait_OptimusDeformer extends FRigVMTrait {
    DeformerGraph: TSoftObjectPtr<UOptimusDeformer>;
}
declare const FRigVMTrait_OptimusDeformer: FRigVMTrait_OptimusDeformer;

declare interface FRigVMTrait_OptimusDeformerSettings extends FRigVMTrait {
    ExecutionPhase: EOptimusDeformerExecutionPhase;
    ExecutionGroup: number;
    DeformChildComponents: boolean;
    ExcludeChildComponentsWithTag: FName;
}
declare const FRigVMTrait_OptimusDeformerSettings: FRigVMTrait_OptimusDeformerSettings;

declare interface FRigVMTrait_OptimusVariableBase extends FRigVMTrait {

}
declare const FRigVMTrait_OptimusVariableBase: FRigVMTrait_OptimusVariableBase;

declare interface FRigVMTrait_SetDeformerBoolArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<boolean>;
}
declare const FRigVMTrait_SetDeformerBoolArrayVariable: FRigVMTrait_SetDeformerBoolArrayVariable;

declare interface FRigVMTrait_SetDeformerBoolVariable extends FRigVMTrait_OptimusVariableBase {
    Value: boolean;
}
declare const FRigVMTrait_SetDeformerBoolVariable: FRigVMTrait_SetDeformerBoolVariable;

declare interface FRigVMTrait_SetDeformerFloatArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<number>;
}
declare const FRigVMTrait_SetDeformerFloatArrayVariable: FRigVMTrait_SetDeformerFloatArrayVariable;

declare interface FRigVMTrait_SetDeformerFloatVariable extends FRigVMTrait_OptimusVariableBase {
    Value: number;
}
declare const FRigVMTrait_SetDeformerFloatVariable: FRigVMTrait_SetDeformerFloatVariable;

declare interface FRigVMTrait_SetDeformerInt2ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FIntPoint>;
}
declare const FRigVMTrait_SetDeformerInt2ArrayVariable: FRigVMTrait_SetDeformerInt2ArrayVariable;

declare interface FRigVMTrait_SetDeformerInt2Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntPoint;
}
declare const FRigVMTrait_SetDeformerInt2Variable: FRigVMTrait_SetDeformerInt2Variable;

declare interface FRigVMTrait_SetDeformerInt3ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FIntVector>;
}
declare const FRigVMTrait_SetDeformerInt3ArrayVariable: FRigVMTrait_SetDeformerInt3ArrayVariable;

declare interface FRigVMTrait_SetDeformerInt3Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntVector;
}
declare const FRigVMTrait_SetDeformerInt3Variable: FRigVMTrait_SetDeformerInt3Variable;

declare interface FRigVMTrait_SetDeformerInt4ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FIntVector4>;
}
declare const FRigVMTrait_SetDeformerInt4ArrayVariable: FRigVMTrait_SetDeformerInt4ArrayVariable;

declare interface FRigVMTrait_SetDeformerInt4Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntVector4;
}
declare const FRigVMTrait_SetDeformerInt4Variable: FRigVMTrait_SetDeformerInt4Variable;

declare interface FRigVMTrait_SetDeformerIntArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<number>;
}
declare const FRigVMTrait_SetDeformerIntArrayVariable: FRigVMTrait_SetDeformerIntArrayVariable;

declare interface FRigVMTrait_SetDeformerIntVariable extends FRigVMTrait_OptimusVariableBase {
    Value: number;
}
declare const FRigVMTrait_SetDeformerIntVariable: FRigVMTrait_SetDeformerIntVariable;

declare interface FRigVMTrait_SetDeformerLinearColorArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FLinearColor>;
}
declare const FRigVMTrait_SetDeformerLinearColorArrayVariable: FRigVMTrait_SetDeformerLinearColorArrayVariable;

declare interface FRigVMTrait_SetDeformerLinearColorVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FLinearColor;
}
declare const FRigVMTrait_SetDeformerLinearColorVariable: FRigVMTrait_SetDeformerLinearColorVariable;

declare interface FRigVMTrait_SetDeformerNameArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FName>;
}
declare const FRigVMTrait_SetDeformerNameArrayVariable: FRigVMTrait_SetDeformerNameArrayVariable;

declare interface FRigVMTrait_SetDeformerNameVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FName;
}
declare const FRigVMTrait_SetDeformerNameVariable: FRigVMTrait_SetDeformerNameVariable;

declare interface FRigVMTrait_SetDeformerQuatArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FQuat>;
}
declare const FRigVMTrait_SetDeformerQuatArrayVariable: FRigVMTrait_SetDeformerQuatArrayVariable;

declare interface FRigVMTrait_SetDeformerQuatVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FQuat;
}
declare const FRigVMTrait_SetDeformerQuatVariable: FRigVMTrait_SetDeformerQuatVariable;

declare interface FRigVMTrait_SetDeformerRotatorArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FRotator>;
}
declare const FRigVMTrait_SetDeformerRotatorArrayVariable: FRigVMTrait_SetDeformerRotatorArrayVariable;

declare interface FRigVMTrait_SetDeformerRotatorVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FRotator;
}
declare const FRigVMTrait_SetDeformerRotatorVariable: FRigVMTrait_SetDeformerRotatorVariable;

declare interface FRigVMTrait_SetDeformerTransformArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FTransform>;
}
declare const FRigVMTrait_SetDeformerTransformArrayVariable: FRigVMTrait_SetDeformerTransformArrayVariable;

declare interface FRigVMTrait_SetDeformerTransformVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FTransform;
}
declare const FRigVMTrait_SetDeformerTransformVariable: FRigVMTrait_SetDeformerTransformVariable;

declare interface FRigVMTrait_SetDeformerVector2ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FVector2D>;
}
declare const FRigVMTrait_SetDeformerVector2ArrayVariable: FRigVMTrait_SetDeformerVector2ArrayVariable;

declare interface FRigVMTrait_SetDeformerVector2Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector2D;
}
declare const FRigVMTrait_SetDeformerVector2Variable: FRigVMTrait_SetDeformerVector2Variable;

declare interface FRigVMTrait_SetDeformerVector4ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FVector4>;
}
declare const FRigVMTrait_SetDeformerVector4ArrayVariable: FRigVMTrait_SetDeformerVector4ArrayVariable;

declare interface FRigVMTrait_SetDeformerVector4Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector4;
}
declare const FRigVMTrait_SetDeformerVector4Variable: FRigVMTrait_SetDeformerVector4Variable;

declare interface FRigVMTrait_SetDeformerVectorArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: TArray<FVector>;
}
declare const FRigVMTrait_SetDeformerVectorArrayVariable: FRigVMTrait_SetDeformerVectorArrayVariable;

declare interface FRigVMTrait_SetDeformerVectorVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector;
}
declare const FRigVMTrait_SetDeformerVectorVariable: FRigVMTrait_SetDeformerVectorVariable;

declare interface IOptimusAlternativeSelectedObjectProvider extends IInterface {

}
declare const IOptimusAlternativeSelectedObjectProvider: IOptimusAlternativeSelectedObjectProvider;

declare interface IOptimusComponentBindingProvider extends IInterface {

}
declare const IOptimusComponentBindingProvider: IOptimusComponentBindingProvider;

declare interface IOptimusComponentBindingReceiver extends IInterface {

}
declare const IOptimusComponentBindingReceiver: IOptimusComponentBindingReceiver;

declare interface IOptimusComputeKernelDataInterface extends IInterface {

}
declare const IOptimusComputeKernelDataInterface: IOptimusComputeKernelDataInterface;

declare interface IOptimusComputeKernelProvider extends IInterface {

}
declare const IOptimusComputeKernelProvider: IOptimusComputeKernelProvider;

declare interface IOptimusDataInterfaceProvider extends IInterface {

}
declare const IOptimusDataInterfaceProvider: IOptimusDataInterfaceProvider;

declare interface IOptimusDeformerAssetPathAccessor extends IInterface {

}
declare const IOptimusDeformerAssetPathAccessor: IOptimusDeformerAssetPathAccessor;

declare interface IOptimusDeformerGeometryReadbackProvider extends IInterface {

}
declare const IOptimusDeformerGeometryReadbackProvider: IOptimusDeformerGeometryReadbackProvider;

declare interface IOptimusDeformerInstanceAccessor extends IInterface {

}
declare const IOptimusDeformerInstanceAccessor: IOptimusDeformerInstanceAccessor;

declare interface IOptimusDeprecatedExecutionDataInterface extends IInterface {

}
declare const IOptimusDeprecatedExecutionDataInterface: IOptimusDeprecatedExecutionDataInterface;

declare interface IOptimusExecutionDomainProvider extends IInterface {

}
declare const IOptimusExecutionDomainProvider: IOptimusExecutionDomainProvider;

declare interface IOptimusGeneratedClassDefiner extends IInterface {

}
declare const IOptimusGeneratedClassDefiner: IOptimusGeneratedClassDefiner;

declare interface IOptimusNodeAdderPinProvider extends IInterface {

}
declare const IOptimusNodeAdderPinProvider: IOptimusNodeAdderPinProvider;

declare interface IOptimusNodeFunctionLibraryOwner extends IInterface {

}
declare const IOptimusNodeFunctionLibraryOwner: IOptimusNodeFunctionLibraryOwner;

declare interface IOptimusNodeGraphCollectionOwner extends IInterface {

}
declare const IOptimusNodeGraphCollectionOwner: IOptimusNodeGraphCollectionOwner;

declare interface IOptimusNodeGraphProvider extends IInterface {

}
declare const IOptimusNodeGraphProvider: IOptimusNodeGraphProvider;

declare interface IOptimusNodePairProvider extends IInterface {

}
declare const IOptimusNodePairProvider: IOptimusNodePairProvider;

declare interface IOptimusNodePinRouter extends IInterface {

}
declare const IOptimusNodePinRouter: IOptimusNodePinRouter;

declare interface IOptimusNodeSubGraphReferencer extends IInterface {

}
declare const IOptimusNodeSubGraphReferencer: IOptimusNodeSubGraphReferencer;

declare interface IOptimusNonCollapsibleNode extends IInterface {

}
declare const IOptimusNonCollapsibleNode: IOptimusNonCollapsibleNode;

declare interface IOptimusNonCopyableNode extends IInterface {

}
declare const IOptimusNonCopyableNode: IOptimusNonCopyableNode;

declare interface IOptimusOutputBufferWriter extends IInterface {

}
declare const IOptimusOutputBufferWriter: IOptimusOutputBufferWriter;

declare interface IOptimusParameterBindingProvider extends IInterface {

}
declare const IOptimusParameterBindingProvider: IOptimusParameterBindingProvider;

declare interface IOptimusPathResolver extends IInterface {

}
declare const IOptimusPathResolver: IOptimusPathResolver;

declare interface IOptimusPersistentBufferProvider extends IInterface {

}
declare const IOptimusPersistentBufferProvider: IOptimusPersistentBufferProvider;

declare interface IOptimusPinMutabilityDefiner extends IInterface {

}
declare const IOptimusPinMutabilityDefiner: IOptimusPinMutabilityDefiner;

declare interface IOptimusPropertyPinProvider extends IInterface {

}
declare const IOptimusPropertyPinProvider: IOptimusPropertyPinProvider;

declare interface IOptimusShaderTextProvider extends IInterface {

}
declare const IOptimusShaderTextProvider: IOptimusShaderTextProvider;

declare interface IOptimusUnnamedNodePinProvider extends IInterface {

}
declare const IOptimusUnnamedNodePinProvider: IOptimusUnnamedNodePinProvider;

declare interface IOptimusValueProvider extends IInterface {

}
declare const IOptimusValueProvider: IOptimusValueProvider;

declare interface UDEPRECATED_OptimusSkinnedMeshExecDataInterface extends UOptimusComputeDataInterface {
    Domain: EOptimusSkinnedMeshExecDomain;
}
declare const UDEPRECATED_OptimusSkinnedMeshExecDataInterface: UDEPRECATED_OptimusSkinnedMeshExecDataInterface;

declare interface UDefault__OptimusNode_ComputeKernelFunctionGeneratorClass {

}
declare const UDefault__OptimusNode_ComputeKernelFunctionGeneratorClass: UDefault__OptimusNode_ComputeKernelFunctionGeneratorClass;

declare interface UDefault__OptimusNode_ConstantValueGeneratorClass {

}
declare const UDefault__OptimusNode_ConstantValueGeneratorClass: UDefault__OptimusNode_ConstantValueGeneratorClass;

declare interface UDefault__OptimusValueContainerGeneratorClass {

}
declare const UDefault__OptimusValueContainerGeneratorClass: UDefault__OptimusValueContainerGeneratorClass;

declare interface UOptimusActionStack extends UObject {
    TransactedActionIndex: number;
}
declare const UOptimusActionStack: UOptimusActionStack;

declare interface UOptimusAdvancedSkeletonDataInterface extends UOptimusComputeDataInterface {
    SkinWeightProfile: FName;
    bEnableLayeredSkinning: boolean;
    AttributeBufferArray: FOptimusAnimAttributeBufferArray;
}
declare const UOptimusAdvancedSkeletonDataInterface: UOptimusAdvancedSkeletonDataInterface;

declare interface UOptimusAdvancedSkeletonDataProvider extends UComputeDataProvider {
    SkeletalMesh: USkeletalMeshComponent;
    DeformerInstance: UOptimusDeformerInstance;
}
declare const UOptimusAdvancedSkeletonDataProvider: UOptimusAdvancedSkeletonDataProvider;

declare interface UOptimusAnimAttributeDataInterface extends UOptimusComputeDataInterface {
    AttributeArray: FOptimusAnimAttributeArray;
}
declare const UOptimusAnimAttributeDataInterface: UOptimusAnimAttributeDataInterface;

declare interface UOptimusAnimAttributeDataProvider extends UComputeDataProvider {
    SkeletalMesh: USkeletalMeshComponent;
}
declare const UOptimusAnimAttributeDataProvider: UOptimusAnimAttributeDataProvider;

declare interface UOptimusClothDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusClothDataInterface: UOptimusClothDataInterface;

declare interface UOptimusClothDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusClothDataProvider: UOptimusClothDataProvider;

declare interface UOptimusComponentSource extends UObject {

}
declare const UOptimusComponentSource: UOptimusComponentSource;

declare interface UOptimusComponentSourceBinding extends UObject {
    BindingName: FName;
    ComponentType: TSubclassOf<UOptimusComponentSource>;
    ComponentTags: TArray<FName>;
    bIsPrimaryBinding: boolean;
}
declare const UOptimusComponentSourceBinding: UOptimusComponentSourceBinding;

declare interface UOptimusComponentSourceBindingContainer extends UObject {
    Bindings: TArray<UOptimusComponentSourceBinding>;
}
declare const UOptimusComponentSourceBindingContainer: UOptimusComponentSourceBindingContainer;

declare interface UOptimusComputeDataInterface extends UComputeDataInterface {

}
declare const UOptimusComputeDataInterface: UOptimusComputeDataInterface;

declare interface UOptimusComputeGraph extends UComputeGraph {
    KernelToNode: TArray<TSoftObjectPtr<UOptimusNode>>;
}
declare const UOptimusComputeGraph: UOptimusComputeGraph;

declare interface UOptimusConnectivityDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusConnectivityDataInterface: UOptimusConnectivityDataInterface;

declare interface UOptimusConnectivityDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusConnectivityDataProvider: UOptimusConnectivityDataProvider;

declare interface UOptimusCopyKernelDataInterface extends UComputeDataInterface {
    ComponentSourceBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
    NumThreadsExpression: FString;
}
declare const UOptimusCopyKernelDataInterface: UOptimusCopyKernelDataInterface;

declare interface UOptimusCopyKernelDataProvider extends UComputeDataProvider {

}
declare const UOptimusCopyKernelDataProvider: UOptimusCopyKernelDataProvider;

declare interface UOptimusCustomComputeKernelDataInterface extends UComputeDataInterface {
    ComponentSourceBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
    NumThreadsExpression: FString;
    ExecutionDomainConstantIdentifier: FOptimusConstantIdentifier;
}
declare const UOptimusCustomComputeKernelDataInterface: UOptimusCustomComputeKernelDataInterface;

declare interface UOptimusCustomComputeKernelDataProvider extends UComputeDataProvider {

}
declare const UOptimusCustomComputeKernelDataProvider: UOptimusCustomComputeKernelDataProvider;

declare interface UOptimusDebugDrawDataInterface extends UOptimusComputeDataInterface {
    bIsSupported: boolean;
    DebugDrawParameters: FOptimusDebugDrawParameters;
}
declare const UOptimusDebugDrawDataInterface: UOptimusDebugDrawDataInterface;

declare interface UOptimusDebugDrawDataProvider extends UComputeDataProvider {
    PrimitiveComponent: UPrimitiveComponent;
    DebugDrawParameters: FOptimusDebugDrawParameters;
}
declare const UOptimusDebugDrawDataProvider: UOptimusDebugDrawDataProvider;

declare interface UOptimusDeformer extends UMeshDeformer {
    mesh: USkeletalMesh;
    ComputeGraphs: TArray<FOptimusComputeGraphInfo>;
    DataInterfacePropertyOverrideMap: Record<string | number | symbol, FOptimusDataInterfacePropertyOverrideInfo>;
    ValueMap: Record<string | number | symbol, FOptimusValueDescription>;
    ActionStack: UOptimusActionStack;
    status: EOptimusDeformerStatus;
    Graphs: TArray<UOptimusNodeGraph>;
    Bindings: UOptimusComponentSourceBindingContainer;
    Variables: UOptimusVariableContainer;
    Resources: UOptimusResourceContainer;
    GetVariables(): TArray<UOptimusVariableDescription>;
    GetResources(): TArray<UOptimusResourceDescription>;
    GetPrimaryComponentBinding(): UOptimusComponentSourceBinding;
    GetComponentBindings(): TArray<UOptimusComponentSourceBinding>;
}
declare const UOptimusDeformer: UOptimusDeformer;

declare interface UOptimusDeformerDynamicInstanceManager extends UMeshDeformerInstance {
    DefaultInstance: UOptimusDeformerInstance;
    GuidToRigDeformerInstanceMap: Record<string | number | symbol, UOptimusDeformerInstance>;
    GuidToInstanceMap: Record<string | number | symbol, UOptimusDeformerInstance>;
}
declare const UOptimusDeformerDynamicInstanceManager: UOptimusDeformerDynamicInstanceManager;

declare interface UOptimusDeformerInstance extends UMeshDeformerInstance {
    MeshComponent: TWeakObjectPtr<UMeshComponent>;
    InstanceSettings: TWeakObjectPtr<UOptimusDeformerInstanceSettings>;
    ComputeGraphExecInfos: TArray<FOptimusDeformerInstanceExecInfo>;
    SetVectorVariable(InVariableName: FName, InValue: FVector): boolean;
    SetVectorArrayVariable(InVariableName: FName, InValue: TArray<FVector>): boolean;
    SetVector4Variable(InVariableName: FName, InValue: FVector4): boolean;
    SetVector4ArrayVariable(InVariableName: FName, InValue: TArray<FVector4>): boolean;
    SetVector2Variable(InVariableName: FName, InValue: FVector2D): boolean;
    SetVector2ArrayVariable(InVariableName: FName, InValue: TArray<FVector2D>): boolean;
    SetTransformVariable(InVariableName: FName, InValue: FTransform): boolean;
    SetTransformArrayVariable(InVariableName: FName, InValue: TArray<FTransform>): boolean;
    SetRotatorVariable(InVariableName: FName, InValue: FRotator): boolean;
    SetRotatorArrayVariable(InVariableName: FName, InValue: TArray<FRotator>): boolean;
    SetQuatVariable(InVariableName: FName, InValue: FQuat): boolean;
    SetQuatArrayVariable(InVariableName: FName, InValue: TArray<FQuat>): boolean;
    SetNameVariable(InVariableName: FName, InValue: FName): boolean;
    SetNameArrayVariable(InVariableName: FName, InValue: TArray<FName>): boolean;
    SetLinearColorVariable(InVariableName: FName, InValue: FLinearColor): boolean;
    SetLinearColorArrayVariable(InVariableName: FName, InValue: TArray<FLinearColor>): boolean;
    SetIntVariable(InVariableName: FName, InValue: number): boolean;
    SetIntArrayVariable(InVariableName: FName, InValue: TArray<number>): boolean;
    SetInt4Variable(InVariableName: FName, InValue: FIntVector4): boolean;
    SetInt4ArrayVariable(InVariableName: FName, InValue: TArray<FIntVector4>): boolean;
    SetInt3Variable(InVariableName: FName, InValue: FIntVector): boolean;
    SetInt3ArrayVariable(InVariableName: FName, InValue: TArray<FIntVector>): boolean;
    SetInt2Variable(InVariableName: FName, InValue: FIntPoint): boolean;
    SetInt2ArrayVariable(InVariableName: FName, InValue: TArray<FIntPoint>): boolean;
    SetFloatVariable(InVariableName: FName, InValue: number): boolean;
    SetFloatArrayVariable(InVariableName: FName, InValue: TArray<number>): boolean;
    SetBoolVariable(InVariableName: FName, InValue: boolean): boolean;
    SetBoolArrayVariable(InVariableName: FName, InValue: TArray<boolean>): boolean;
    EnqueueTriggerGraph(InTriggerGraphName: FName): boolean;
}
declare const UOptimusDeformerInstance: UOptimusDeformerInstance;

declare interface UOptimusDeformerInstanceSettings extends UMeshDeformerInstanceSettings {
    Deformer: TWeakObjectPtr<UOptimusDeformer>;
    Bindings: TArray<FOptimusDeformerInstanceComponentBinding>;
}
declare const UOptimusDeformerInstanceSettings: UOptimusDeformerInstanceSettings;

declare interface UOptimusDuplicateVerticesDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusDuplicateVerticesDataInterface: UOptimusDuplicateVerticesDataInterface;

declare interface UOptimusDuplicateVerticesDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusDuplicateVerticesDataProvider: UOptimusDuplicateVerticesDataProvider;

declare interface UOptimusFunctionNodeGraph extends UOptimusNodeSubGraph {
    Category: FName;
    AccessSpecifier: FName;
    Guid: FGuid;
    GetAccessSpecifierOptions(): TArray<FName>;
}
declare const UOptimusFunctionNodeGraph: UOptimusFunctionNodeGraph;

declare interface UOptimusGraphDataInterface extends UComputeDataInterface {
    Variables: TArray<FOptimusGraphVariableDescription>;
    ParameterBufferSize: number;
}
declare const UOptimusGraphDataInterface: UOptimusGraphDataInterface;

declare interface UOptimusGraphDataProvider extends UComputeDataProvider {
    MeshComponent: UMeshComponent;
    Variables: TArray<FOptimusGraphVariableDescription>;
    DeformerInstance: UOptimusDeformerInstance;
}
declare const UOptimusGraphDataProvider: UOptimusGraphDataProvider;

declare interface UOptimusHalfEdgeDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusHalfEdgeDataInterface: UOptimusHalfEdgeDataInterface;

declare interface UOptimusHalfEdgeDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusHalfEdgeDataProvider: UOptimusHalfEdgeDataProvider;

declare interface UOptimusImplicitPersistentBufferDataInterface extends UOptimusRawBufferDataInterface {
    bZeroInitForAtomicWrites: boolean;
}
declare const UOptimusImplicitPersistentBufferDataInterface: UOptimusImplicitPersistentBufferDataInterface;

declare interface UOptimusImplicitPersistentBufferDataProvider extends UOptimusRawBufferDataProvider {

}
declare const UOptimusImplicitPersistentBufferDataProvider: UOptimusImplicitPersistentBufferDataProvider;

declare interface UOptimusKernelSource extends UComputeKernelSource {
    Source: FString;
}
declare const UOptimusKernelSource: UOptimusKernelSource;

declare interface UOptimusLoopTerminalDataInterface extends UOptimusComputeDataInterface {
    Index: uint32;
    count: uint32;
}
declare const UOptimusLoopTerminalDataInterface: UOptimusLoopTerminalDataInterface;

declare interface UOptimusLoopTerminalDataProvider extends UComputeDataProvider {

}
declare const UOptimusLoopTerminalDataProvider: UOptimusLoopTerminalDataProvider;

declare interface UOptimusMorphTargetDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusMorphTargetDataInterface: UOptimusMorphTargetDataInterface;

declare interface UOptimusMorphTargetDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusMorphTargetDataProvider: UOptimusMorphTargetDataProvider;

declare interface UOptimusNode extends UObject {
    DisplayName: FText;
    GraphPosition: FVector2D;
    Pins: TArray<UOptimusNodePin>;
    ExpandedPins: TSet<FName>;
    DiagnosticLevel: EOptimusDiagnosticLevel;
    SetGraphPosition(InPosition: FVector2D): boolean;
    GetNodeName(): FName;
    GetNodeCategory(): FName;
    GetGraphPosition(): FVector2D;
    GetDisplayName(): FText;
}
declare const UOptimusNode: UOptimusNode;

declare interface UOptimusNodeGraph extends UObject {
    GraphType: EOptimusNodeGraphType;
    Nodes: TArray<UOptimusNode>;
    Links: TArray<UOptimusNodeLink>;
    NodePairs: TArray<UOptimusNodePair>;
    Subgraphs: TArray<UOptimusNodeGraph>;
    RenameGraphDirect(InGraph: UOptimusNodeGraph, InNewName: string | FString): boolean;
    RenameGraph(InGraph: UOptimusNodeGraph, InNewName: string | FString): boolean;
    RemoveNodes(InNodes: TArray<UOptimusNode>): boolean;
    RemoveNode(InNode: UOptimusNode): boolean;
    RemoveLink(InNodeOutputPin: UOptimusNodePin, InNodeInputPin: UOptimusNodePin): boolean;
    RemoveAllLinks(InNodePin: UOptimusNodePin): boolean;
    MoveGraphDirect(InGraph: UOptimusNodeGraph, InInsertBefore: number): boolean;
    IsSubGraphReference(InNode: UOptimusNode): boolean;
    IsKernelFunction(InNode: UOptimusNode): boolean;
    IsFunctionReference(InNode: UOptimusNode): boolean;
    IsFunctionGraph(): boolean;
    IsExecutionGraph(): boolean;
    IsCustomKernel(InNode: UOptimusNode): boolean;
    GetGraphType(): EOptimusNodeGraphType;
    GetGraphs(): TArray<UOptimusNodeGraph>;
    GetGraphIndex(): number;
    ExpandCollapsedNodes(InGraphReferenceNode: UOptimusNode): TArray<UOptimusNode>;
    DuplicateNodes(InNodes: TArray<UOptimusNode>, InPosition: FVector2D): boolean;
    DuplicateNode(InNode: UOptimusNode, InPosition: FVector2D): UOptimusNode;
    ConvertToSubGraph(InFunctionNode: UOptimusNode): boolean;
    ConvertToFunction(InSubGraphNode: UOptimusNode): boolean;
    ConvertFunctionToCustomKernel(InKernelFunction: UOptimusNode): UOptimusNode;
    ConvertCustomKernelToFunction(InCustomKernel: UOptimusNode): UOptimusNode;
    CollapseNodesToSubGraph(InNodes: TArray<UOptimusNode>): UOptimusNode;
    CollapseNodesToFunction(InNodes: TArray<UOptimusNode>): UOptimusNode;
    AddVariableGetNode(InVariableDesc: UOptimusVariableDescription, InPosition: FVector2D): UOptimusNode;
    AddValueNode(InDataTypeRef: FOptimusDataTypeRef, InPosition: FVector2D): UOptimusNode;
    AddResourceSetNode(InResourceDesc: UOptimusResourceDescription, InPosition: FVector2D): UOptimusNode;
    AddResourceNode(InResourceDesc: UOptimusResourceDescription, InPosition: FVector2D): UOptimusNode;
    AddResourceGetNode(InResourceDesc: UOptimusResourceDescription, InPosition: FVector2D): UOptimusNode;
    AddNode(InNodeClass: TSubclassOf<UOptimusNode>, InPosition: FVector2D): UOptimusNode;
    AddLoopTerminalNodes(InPosition: FVector2D): TArray<UOptimusNode>;
    AddLink(InNodeOutputPin: UOptimusNodePin, InNodeInputPin: UOptimusNodePin): boolean;
    AddFunctionReferenceNode(InFunctionGraph: UOptimusFunctionNodeGraph, InPosition: FVector2D): UOptimusNode;
    AddDataInterfaceNode(InDataInterfaceClass: TSubclassOf<UOptimusComputeDataInterface>, InPosition: FVector2D): UOptimusNode;
    AddComponentBindingGetNode(InComponentBinding: UOptimusComponentSourceBinding, InPosition: FVector2D): UOptimusNode;
    AddCommentNode(InPosition: FVector2D, InSize: FVector2D, InColor: FLinearColor): UOptimusNode;
}
declare const UOptimusNodeGraph: UOptimusNodeGraph;

declare interface UOptimusNodeLink extends UObject {
    NodeOutputPin: UOptimusNodePin;
    NodeInputPin: UOptimusNodePin;
}
declare const UOptimusNodeLink: UOptimusNodeLink;

declare interface UOptimusNodePair extends UObject {
    First: UOptimusNode;
    Second: UOptimusNode;
}
declare const UOptimusNodePair: UOptimusNodePair;

declare interface UOptimusNodePin extends UObject {
    bIsGroupingPin: boolean;
    Direction: EOptimusNodePinDirection;
    StorageType: EOptimusNodePinStorageType;
    DataDomain: FOptimusDataDomain;
    DataType: FOptimusDataTypeRef;
    SubPins: TArray<UOptimusNodePin>;
}
declare const UOptimusNodePin: UOptimusNodePin;

declare interface UOptimusNodeSubGraph extends UOptimusNodeGraph {
    InputBindings: FOptimusParameterBindingArray;
    OutputBindings: FOptimusParameterBindingArray;
}
declare const UOptimusNodeSubGraph: UOptimusNodeSubGraph;

declare interface UOptimusNode_AnimAttributeDataInterface extends UOptimusNode_DataInterface {

}
declare const UOptimusNode_AnimAttributeDataInterface: UOptimusNode_AnimAttributeDataInterface;

declare interface UOptimusNode_Comment extends UOptimusNode {
    CommentColor: FLinearColor;
    FontSize: number;
    Comment: FString;
    bBubbleVisible: boolean;
    bColorBubble: boolean;
    Size: FDeprecateSlateVector2D;
}
declare const UOptimusNode_Comment: UOptimusNode_Comment;

declare interface UOptimusNode_ComponentSource extends UOptimusNode {
    Binding: UOptimusComponentSourceBinding;
    DuplicationInfo: FOptimusNode_ComponentSource_DuplicationInfo;
}
declare const UOptimusNode_ComponentSource: UOptimusNode_ComponentSource;

declare interface UOptimusNode_ComputeKernelBase extends UOptimusNode {

}
declare const UOptimusNode_ComputeKernelBase: UOptimusNode_ComputeKernelBase;

declare interface UOptimusNode_ComputeKernelFunction extends UOptimusNode_ComputeKernelBase {

}
declare const UOptimusNode_ComputeKernelFunction: UOptimusNode_ComputeKernelFunction;

declare interface UOptimusNode_ComputeKernelFunctionGeneratorClass extends UClass {
    Category: FName;
    KernelName: FName;
    ExecutionDomain: FOptimusExecutionDomain;
    GroupSize: FIntVector;
    InputBindings: TArray<FOptimusParameterBinding>;
    OutputBindings: TArray<FOptimusParameterBinding>;
    ShaderSource: FString;
}
declare const UOptimusNode_ComputeKernelFunctionGeneratorClass: UOptimusNode_ComputeKernelFunctionGeneratorClass;

declare interface UOptimusNode_ConstantValue extends UOptimusNode {

}
declare const UOptimusNode_ConstantValue: UOptimusNode_ConstantValue;

declare interface UOptimusNode_ConstantValueGeneratorClass extends UClass {
    DataType: FOptimusDataTypeRef;
}
declare const UOptimusNode_ConstantValueGeneratorClass: UOptimusNode_ConstantValueGeneratorClass;

declare interface UOptimusNode_CustomComputeKernel extends UOptimusNode_ComputeKernelBase {
    Category: FName;
    KernelName: FOptimusValidatedName;
    ExecutionDomain: FOptimusExecutionDomain;
    GroupSize: FIntVector;
    Parameters: TArray<FOptimus_ShaderBinding>;
    InputBindings: TArray<FOptimusParameterBinding>;
    OutputBindings: TArray<FOptimusParameterBinding>;
    InputBindingArray: FOptimusParameterBindingArray;
    OutputBindingArray: FOptimusParameterBindingArray;
    SecondaryInputBindingGroups: TArray<FOptimusSecondaryInputBindingsGroup>;
    AdditionalSources: TArray<UComputeSource>;
    ShaderSource: FOptimusShaderText;
}
declare const UOptimusNode_CustomComputeKernel: UOptimusNode_CustomComputeKernel;

declare interface UOptimusNode_DataInterface extends UOptimusNode {
    DataInterfaceClass: UClass;
    DataInterfaceData: UOptimusComputeDataInterface;
}
declare const UOptimusNode_DataInterface: UOptimusNode_DataInterface;

declare interface UOptimusNode_FunctionReference extends UOptimusNode {
    FunctionGraphIdentifier: FOptimusFunctionGraphIdentifier;
    DefaultComponentPin: TWeakObjectPtr<UOptimusNodePin>;
    ResolvedFunctionGraph: TWeakObjectPtr<UOptimusFunctionNodeGraph>;
    FunctionGraph: TSoftObjectPtr<UOptimusFunctionNodeGraph>;
}
declare const UOptimusNode_FunctionReference: UOptimusNode_FunctionReference;

declare interface UOptimusNode_GetResource extends UOptimusNode_ResourceAccessorBase {

}
declare const UOptimusNode_GetResource: UOptimusNode_GetResource;

declare interface UOptimusNode_GetVariable extends UOptimusNode {
    VariableDesc: TWeakObjectPtr<UOptimusVariableDescription>;
    DuplicationInfo: FOptimusNode_GetVariable_DuplicationInfo;
}
declare const UOptimusNode_GetVariable: UOptimusNode_GetVariable;

declare interface UOptimusNode_GraphTerminal extends UOptimusNode {
    TerminalType: EOptimusTerminalType;
    DefaultComponentPin: TWeakObjectPtr<UOptimusNodePin>;
}
declare const UOptimusNode_GraphTerminal: UOptimusNode_GraphTerminal;

declare interface UOptimusNode_LoopTerminal extends UOptimusNode {
    TerminalType: EOptimusTerminalType;
    LoopInfo: FOptimusLoopTerminalInfo;
    IndexPin: UOptimusNodePin;
    CountPin: UOptimusNodePin;
    PinPairInfos: TArray<FOptimusPinPairInfo>;
}
declare const UOptimusNode_LoopTerminal: UOptimusNode_LoopTerminal;

declare interface UOptimusNode_Resource extends UOptimusNode_ResourceAccessorBase {

}
declare const UOptimusNode_Resource: UOptimusNode_Resource;

declare interface UOptimusNode_ResourceAccessorBase extends UOptimusNode {
    ResourceDesc: TWeakObjectPtr<UOptimusResourceDescription>;
    WriteType: EOptimusBufferWriteType;
    DuplicationInfo: FOptimusNode_ResourceAccessorBase_DuplicationInfo;
}
declare const UOptimusNode_ResourceAccessorBase: UOptimusNode_ResourceAccessorBase;

declare interface UOptimusNode_SetResource extends UOptimusNode_ResourceAccessorBase {

}
declare const UOptimusNode_SetResource: UOptimusNode_SetResource;

declare interface UOptimusNode_SubGraphReference extends UOptimusNode {
    SubgraphName: FName;
    DefaultComponentPin: TWeakObjectPtr<UOptimusNodePin>;
}
declare const UOptimusNode_SubGraphReference: UOptimusNode_SubGraphReference;

declare interface UOptimusPersistentBufferDataInterface extends UOptimusRawBufferDataInterface {
    ResourceName: FName;
}
declare const UOptimusPersistentBufferDataInterface: UOptimusPersistentBufferDataInterface;

declare interface UOptimusPersistentBufferDataProvider extends UOptimusRawBufferDataProvider {

}
declare const UOptimusPersistentBufferDataProvider: UOptimusPersistentBufferDataProvider;

declare interface UOptimusRawBufferDataInterface extends UOptimusComputeDataInterface {
    ValueType: FShaderValueTypeHandle;
    DataDomain: FOptimusDataDomain;
    ComponentSourceBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
    DomainConstantIdentifier: FOptimusConstantIdentifier;
}
declare const UOptimusRawBufferDataInterface: UOptimusRawBufferDataInterface;

declare interface UOptimusRawBufferDataProvider extends UComputeDataProvider {

}
declare const UOptimusRawBufferDataProvider: UOptimusRawBufferDataProvider;

declare interface UOptimusResourceContainer extends UObject {
    Descriptions: TArray<UOptimusResourceDescription>;
}
declare const UOptimusResourceContainer: UOptimusResourceContainer;

declare interface UOptimusResourceDescription extends UObject {
    ResourceName: FName;
    DataType: FOptimusDataTypeRef;
    ComponentBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
    DataDomain: FOptimusDataDomain;
    DataInterface: UOptimusPersistentBufferDataInterface;
}
declare const UOptimusResourceDescription: UOptimusResourceDescription;

declare interface UOptimusSceneComponentSource extends UOptimusComponentSource {

}
declare const UOptimusSceneComponentSource: UOptimusSceneComponentSource;

declare interface UOptimusSceneDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusSceneDataInterface: UOptimusSceneDataInterface;

declare interface UOptimusSceneDataProvider extends UComputeDataProvider {
    SceneComponent: USceneComponent;
}
declare const UOptimusSceneDataProvider: UOptimusSceneDataProvider;

declare interface UOptimusSkeletalMeshComponentSource extends UOptimusSkinnedMeshComponentSource {

}
declare const UOptimusSkeletalMeshComponentSource: UOptimusSkeletalMeshComponentSource;

declare interface UOptimusSkeletonDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusSkeletonDataInterface: UOptimusSkeletonDataInterface;

declare interface UOptimusSkeletonDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusSkeletonDataProvider: UOptimusSkeletonDataProvider;

declare interface UOptimusSkinWeightsAsVertexMaskDataInterface extends UOptimusComputeDataInterface {
    SkinWeightProfile: FName;
    BoneNames: TArray<FName>;
    ExpandTowardsRoot: number;
    ExpandTowardsLeaf: number;
    bDebugDrawIncludedBones: boolean;
    DebugDrawColor: FColor;
}
declare const UOptimusSkinWeightsAsVertexMaskDataInterface: UOptimusSkinWeightsAsVertexMaskDataInterface;

declare interface UOptimusSkinWeightsAsVertexMaskDataProvider extends UComputeDataProvider {
    SkeletalMesh: USkeletalMeshComponent;
    DeformerInstance: UOptimusDeformerInstance;
}
declare const UOptimusSkinWeightsAsVertexMaskDataProvider: UOptimusSkinWeightsAsVertexMaskDataProvider;

declare interface UOptimusSkinnedMeshComponentSource extends UOptimusComponentSource {

}
declare const UOptimusSkinnedMeshComponentSource: UOptimusSkinnedMeshComponentSource;

declare interface UOptimusSkinnedMeshDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusSkinnedMeshDataInterface: UOptimusSkinnedMeshDataInterface;

declare interface UOptimusSkinnedMeshDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusSkinnedMeshDataProvider: UOptimusSkinnedMeshDataProvider;

declare interface UOptimusSkinnedMeshReadDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusSkinnedMeshReadDataInterface: UOptimusSkinnedMeshReadDataInterface;

declare interface UOptimusSkinnedMeshReadDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
    DeformerInstance: UOptimusDeformerInstance;
}
declare const UOptimusSkinnedMeshReadDataProvider: UOptimusSkinnedMeshReadDataProvider;

declare interface UOptimusSkinnedMeshVertexAttributeDataInterface extends UOptimusComputeDataInterface {
    AttributeName: FName;
    DefaultValue: number;
}
declare const UOptimusSkinnedMeshVertexAttributeDataInterface: UOptimusSkinnedMeshVertexAttributeDataInterface;

declare interface UOptimusSkinnedMeshVertexAttributeDataProvider extends UComputeDataProvider {
    SkinnedMeshComponent: USkinnedMeshComponent;
    AttributeName: FName;
    DefaultValue: number;
    DeformerInstance: UOptimusDeformerInstance;
}
declare const UOptimusSkinnedMeshVertexAttributeDataProvider: UOptimusSkinnedMeshVertexAttributeDataProvider;

declare interface UOptimusSkinnedMeshWriteDataInterface extends UOptimusComputeDataInterface {

}
declare const UOptimusSkinnedMeshWriteDataInterface: UOptimusSkinnedMeshWriteDataInterface;

declare interface UOptimusSkinnedMeshWriteDataProvider extends UComputeDataProvider {
    SkinnedMesh: USkinnedMeshComponent;
}
declare const UOptimusSkinnedMeshWriteDataProvider: UOptimusSkinnedMeshWriteDataProvider;

declare interface UOptimusSource extends UComputeSource {
    SourceText: FString;
}
declare const UOptimusSource: UOptimusSource;

declare interface UOptimusTransientBufferDataInterface extends UOptimusRawBufferDataInterface {
    bZeroInitForAtomicWrites: boolean;
}
declare const UOptimusTransientBufferDataInterface: UOptimusTransientBufferDataInterface;

declare interface UOptimusTransientBufferDataProvider extends UOptimusRawBufferDataProvider {

}
declare const UOptimusTransientBufferDataProvider: UOptimusTransientBufferDataProvider;

declare interface UOptimusValueContainer extends UObject {

}
declare const UOptimusValueContainer: UOptimusValueContainer;

declare interface UOptimusValueContainerGeneratorClass extends UClass {
    DataType: FOptimusDataTypeRef;
}
declare const UOptimusValueContainerGeneratorClass: UOptimusValueContainerGeneratorClass;

declare interface UOptimusVariableContainer extends UObject {
    Descriptions: TArray<UOptimusVariableDescription>;
}
declare const UOptimusVariableContainer: UOptimusVariableContainer;

declare interface UOptimusVariableDescription extends UObject {
    Guid: FGuid;
    VariableName: FName;
    DataType: FOptimusDataTypeRef;
    DefaultValueStruct: FOptimusValueContainerStruct;
    CachedShaderValue: FShaderValueContainer;
    ValueData: TArray<uint8>;
    DefaultValue: UOptimusValueContainer;
}
declare const UOptimusVariableDescription: UOptimusVariableDescription;

