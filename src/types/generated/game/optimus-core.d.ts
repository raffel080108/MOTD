declare type FOptimusAction = object;

declare interface FOptimusAnimAttributeArray {
    InnerArray: FOptimusAnimAttributeDescription[];
}

declare interface FOptimusAnimAttributeBufferArray {
    InnerArray: FOptimusAnimAttributeBufferDescription[];
}

declare interface FOptimusAnimAttributeBufferDescription {
    Name: string;
    DataType: FOptimusDataTypeRef;
    DefaultValueStruct: FOptimusValueContainerStruct;
    HlslId: string;
    PinName: string;
}

declare interface FOptimusAnimAttributeDescription {
    Name: string;
    BoneName: string;
    DataType: FOptimusDataTypeRef;
    DefaultValueStruct: FOptimusValueContainerStruct;
    HlslId: string;
    PinName: string;
    DefaultValue: UOptimusValueContainer;
}

declare interface FOptimusCommentNodeAction_ResizeNode extends FOptimusAction {

}

declare interface FOptimusComponentBindingAction_AddBinding extends FOptimusAction {

}

declare interface FOptimusComponentBindingAction_RemoveBinding extends FOptimusAction {

}

declare interface FOptimusComponentBindingAction_RenameBinding extends FOptimusAction {

}

declare interface FOptimusComponentBindingAction_SetComponentSource extends FOptimusAction {

}

declare interface FOptimusCompoundAction extends FOptimusAction {

}

declare interface FOptimusComputeGraphInfo {
    GraphType: EOptimusNodeGraphType;
    GraphName: string;
    ComputeGraph: UOptimusComputeGraph;
}

declare interface FOptimusConstant {
    Identifier: FOptimusConstantIdentifier;
    Definition: FOptimusConstantDefinition;
    ComponentBindingIndex: number;
    Type: EOptimusConstantType;
}

declare interface FOptimusConstantContainer {
    KernelContainers: FOptimusKernelConstantContainer[];
}

declare interface FOptimusConstantDefinition {
    ReferencedConstant: FOptimusConstantIdentifier;
    Expression: string;
}

declare interface FOptimusConstantIdentifier {
    NodePath: string;
    GroupName: string;
    ConstantName: string;
}

declare interface FOptimusConstantIndex {
    KernelIndex: number;
    Type: EOptimusConstantType;
    ConstantIndex: number;
}

declare interface FOptimusDataDomain {
    Type: EOptimusDataDomainType;
    DimensionNames: string[];
    Multiplier: number;
    Expression: string;
    LevelNames: string[];
}

declare interface FOptimusDataInterfacePropertyOverrideInfo {
    PinNameToValueIdMap: TMap<string, FOptimusValueIdentifier>;
}

declare interface FOptimusDataType {
    TypeName: string;
    DisplayName: string;
    ShaderValueType: FShaderValueTypeHandle;
    ShaderValueSize: number;
    TypeCategory: string;
    TypeObject: TWeakObjectPtr<UObject>;
    bHasCustomPinColor: boolean;
    CustomPinColor: FLinearColor;
    UsageFlags: EOptimusDataTypeUsageFlags;
    TypeFlags: EOptimusDataTypeFlags;
}

declare interface FOptimusDataTypeRef {
    TypeName: string;
    TypeObject: TSoftObjectPtr<UObject>;
}

declare interface FOptimusDebugDrawParameters {
    bForceEnable: boolean;
    MaxLineCount: number;
    MaxTriangleCount: number;
    MaxCharacterCount: number;
    FontSize: number;
}

declare interface FOptimusDeformerInstanceComponentBinding {
    ProviderName: string;
    ComponentName: string;
}

declare interface FOptimusDeformerInstanceExecInfo {
    GraphName: string;
    GraphType: EOptimusNodeGraphType;
    ComputeGraph: UComputeGraph;
    ComputeGraphInstance: FComputeGraphInstance;
}

declare interface FOptimusExecutionDomain {
    Type: EOptimusExecutionDomainType;
    Name: string;
    Expression: string;
}

declare interface FOptimusFunctionGraphIdentifier {
    Asset: UOptimusDeformer;
    Guid: FGuid;
}

declare interface FOptimusFunctionNodeGraphHeader {
    GraphPath: TSoftObjectPtr<UOptimusFunctionNodeGraph>;
    FunctionName: string;
    Category: string;
}

declare interface FOptimusFunctionNodeGraphHeaderArray {
    Headers: FOptimusFunctionNodeGraphHeader[];
}

declare interface FOptimusFunctionNodeGraphHeaderWithGuid {
    FunctionGraphGuid: FGuid;
    FunctionName: string;
    Category: string;
}

declare interface FOptimusFunctionNodeGraphHeaderWithGuidArray {
    Headers: FOptimusFunctionNodeGraphHeaderWithGuid[];
}

declare interface FOptimusFunctionReferenceData {
    FunctionReferences: TMap<FSoftObjectPath, FOptimusFunctionReferenceNodeSet>;
}

declare interface FOptimusFunctionReferenceNodeSet {
    Nodes: TSoftObjectPtr<UOptimusNode_FunctionReference>[];
}

declare interface FOptimusGraphVariableDescription {
    Name: string;
    ValueType: FShaderValueTypeHandle;
    ValueId: FOptimusValueIdentifier;
    Offset: number;
    Value: number[];
    ShaderValue: FShaderValueContainer;
    sourceObject: TSoftObjectPtr<UObject>;
}

declare interface FOptimusKernelConstantContainer {
    InputConstants: FOptimusConstant[];
    OutputConstants: FOptimusConstant[];
    GroupNameToBindingIndex: TMap<string, number>;
}

declare interface FOptimusLoopTerminalInfo {
    count: number;
    Bindings: FOptimusParameterBindingArray;
}

declare interface FOptimusNodeAction_AddGroupingPin extends FOptimusNodeAction_AddRemovePin {

}

declare interface FOptimusNodeAction_AddPin extends FOptimusNodeAction_AddRemovePin {

}

declare interface FOptimusNodeAction_AddRemovePin extends FOptimusAction {

}

declare interface FOptimusNodeAction_MoveNode extends FOptimusAction {

}

declare interface FOptimusNodeAction_MovePin extends FOptimusAction {

}

declare interface FOptimusNodeAction_RemovePin extends FOptimusNodeAction_AddRemovePin {

}

declare interface FOptimusNodeAction_RenameNode extends FOptimusAction {

}

declare interface FOptimusNodeAction_SetPinDataDomain extends FOptimusAction {

}

declare interface FOptimusNodeAction_SetPinName extends FOptimusAction {

}

declare interface FOptimusNodeAction_SetPinType extends FOptimusAction {

}

declare interface FOptimusNodeAction_SetPinValue extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_AddGraph extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_AddLink extends FOptimusNodeGraphAction_AddRemoveLink {

}

declare interface FOptimusNodeGraphAction_AddNode extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_AddNodePair extends FOptimusNodeGraphAction_AddRemoveNodePair {

}

declare interface FOptimusNodeGraphAction_AddRemoveLink extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_AddRemoveNodePair extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_ConnectAdderPin extends FOptimusNodeGraphAction_AddRemoveLink {

}

declare interface FOptimusNodeGraphAction_DuplicateNode extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_PackageKernelFunction extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_RemoveGraph extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_RemoveLink extends FOptimusNodeGraphAction_AddRemoveLink {

}

declare interface FOptimusNodeGraphAction_RemoveNode extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_RemoveNodePair extends FOptimusNodeGraphAction_AddRemoveNodePair {

}

declare interface FOptimusNodeGraphAction_RenameGraph extends FOptimusAction {

}

declare interface FOptimusNodeGraphAction_UnpackageKernelFunction extends FOptimusAction {

}

declare interface FOptimusNode_ComponentSource_DuplicationInfo {
    BindingName: string;
    ComponentType: TSubclassOf<UOptimusComponentSource>;
}

declare interface FOptimusNode_GetVariable_DuplicationInfo {
    VariableName: string;
    DataType: FOptimusDataTypeRef;
    DefaultValue: string;
}

declare interface FOptimusNode_ResourceAccessorBase_DuplicationInfo {
    ResourceName: string;
    DataType: FOptimusDataTypeRef;
    DataDomain: FOptimusDataDomain;
}

declare interface FOptimusParameterBinding {
    Name: FOptimusValidatedName;
    DataType: FOptimusDataTypeRef;
    DataDomain: FOptimusDataDomain;
    bSupportAtomicIfCompatibleDataType: boolean;
    bSupportRead: boolean;
}

declare interface FOptimusParameterBindingArray {
    InnerArray: FOptimusParameterBinding[];
}

declare interface FOptimusPinPairInfo {
    InputPinPath: string[];
    OutputPinPath: string[];
}

declare interface FOptimusResourceAction_AddResource extends FOptimusAction {

}

declare interface FOptimusResourceAction_RemoveResource extends FOptimusAction {

}

declare interface FOptimusResourceAction_RenameResource extends FOptimusAction {

}

declare interface FOptimusResourceAction_SetDataDomain extends FOptimusAction {

}

declare interface FOptimusResourceAction_SetDataType extends FOptimusAction {

}

declare interface FOptimusSecondaryInputBindingsGroup {
    GroupName: FOptimusValidatedName;
    BindingArray: FOptimusParameterBindingArray;
}

declare interface FOptimusShaderText {
    Declarations: string;
    ShaderText: string;
}

declare interface FOptimusValidatedName {
    Name: string;
}

declare interface FOptimusValueContainerStruct {
    Value: FInstancedPropertyBag;
}

declare interface FOptimusValueDescription {
    DataType: FOptimusDataTypeRef;
    ValueUsage: EOptimusValueUsage;
    Value: FOptimusValueContainerStruct;
    ShaderValue: FShaderValueContainer;
}

declare interface FOptimusValueIdentifier {
    Type: EOptimusValueType;
    Name: string;
}

declare interface FOptimusVariableAction_AddVariable extends FOptimusAction {

}

declare interface FOptimusVariableAction_RemoveVariable extends FOptimusAction {

}

declare interface FOptimusVariableAction_RenameVariable extends FOptimusAction {

}

declare interface FOptimusVariableAction_SetDataType extends FOptimusAction {

}

declare interface FOptimusVariableMetaDataEntry {
    Key: string;
    Value: string;
}

declare interface FOptimus_ShaderBinding {
    Name: string;
    DataType: FOptimusDataTypeRef;
}

declare interface FRigUnit_AddOptimusDeformer extends FRigUnitMutable {
    DeformerInstanceGuid: FGuid;
}

declare interface FRigVMTrait_OptimusDeformer extends FRigVMTrait {
    DeformerGraph: TSoftObjectPtr<UOptimusDeformer>;
}

declare interface FRigVMTrait_OptimusDeformerSettings extends FRigVMTrait {
    ExecutionPhase: EOptimusDeformerExecutionPhase;
    ExecutionGroup: number;
    DeformChildComponents: boolean;
    ExcludeChildComponentsWithTag: string;
}

declare interface FRigVMTrait_OptimusVariableBase extends FRigVMTrait {

}

declare interface FRigVMTrait_SetDeformerBoolArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: boolean[];
}

declare interface FRigVMTrait_SetDeformerBoolVariable extends FRigVMTrait_OptimusVariableBase {
    Value: boolean;
}

declare interface FRigVMTrait_SetDeformerFloatArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: number[];
}

declare interface FRigVMTrait_SetDeformerFloatVariable extends FRigVMTrait_OptimusVariableBase {
    Value: number;
}

declare interface FRigVMTrait_SetDeformerInt2ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntPoint[];
}

declare interface FRigVMTrait_SetDeformerInt2Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntPoint;
}

declare interface FRigVMTrait_SetDeformerInt3ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntVector[];
}

declare interface FRigVMTrait_SetDeformerInt3Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntVector;
}

declare interface FRigVMTrait_SetDeformerInt4ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntVector4[];
}

declare interface FRigVMTrait_SetDeformerInt4Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FIntVector4;
}

declare interface FRigVMTrait_SetDeformerIntArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: number[];
}

declare interface FRigVMTrait_SetDeformerIntVariable extends FRigVMTrait_OptimusVariableBase {
    Value: number;
}

declare interface FRigVMTrait_SetDeformerLinearColorArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FLinearColor[];
}

declare interface FRigVMTrait_SetDeformerLinearColorVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FLinearColor;
}

declare interface FRigVMTrait_SetDeformerNameArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: string[];
}

declare interface FRigVMTrait_SetDeformerNameVariable extends FRigVMTrait_OptimusVariableBase {
    Value: string;
}

declare interface FRigVMTrait_SetDeformerQuatArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FQuat[];
}

declare interface FRigVMTrait_SetDeformerQuatVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FQuat;
}

declare interface FRigVMTrait_SetDeformerRotatorArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FRotator[];
}

declare interface FRigVMTrait_SetDeformerRotatorVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FRotator;
}

declare interface FRigVMTrait_SetDeformerTransformArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FTransform[];
}

declare interface FRigVMTrait_SetDeformerTransformVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FTransform;
}

declare interface FRigVMTrait_SetDeformerVector2ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector2D[];
}

declare interface FRigVMTrait_SetDeformerVector2Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector2D;
}

declare interface FRigVMTrait_SetDeformerVector4ArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector4[];
}

declare interface FRigVMTrait_SetDeformerVector4Variable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector4;
}

declare interface FRigVMTrait_SetDeformerVectorArrayVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector[];
}

declare interface FRigVMTrait_SetDeformerVectorVariable extends FRigVMTrait_OptimusVariableBase {
    Value: FVector;
}

declare interface IOptimusAlternativeSelectedObjectProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusComponentBindingProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusComponentBindingReceiver extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusComputeKernelDataInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusComputeKernelProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusDataInterfaceProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusDeformerAssetPathAccessor extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusDeformerGeometryReadbackProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusDeformerInstanceAccessor extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusDeprecatedExecutionDataInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusExecutionDomainProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusGeneratedClassDefiner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodeAdderPinProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodeFunctionLibraryOwner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodeGraphCollectionOwner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodeGraphProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodePairProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodePinRouter extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNodeSubGraphReferencer extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNonCollapsibleNode extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusNonCopyableNode extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusOutputBufferWriter extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusParameterBindingProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusPathResolver extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusPersistentBufferProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusPinMutabilityDefiner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusPropertyPinProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusShaderTextProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusUnnamedNodePinProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IOptimusValueProvider extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UDEPRECATED_OptimusSkinnedMeshExecDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UDEPRECATED_OptimusSkinnedMeshExecDataInterface: {
        Domain: EOptimusSkinnedMeshExecDomain;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UDEPRECATED_OptimusSkinnedMeshExecDataInterface['__properties_UDEPRECATED_OptimusSkinnedMeshExecDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare type UDefault__OptimusNode_ComputeKernelFunctionGeneratorClass = object;

declare type UDefault__OptimusNode_ConstantValueGeneratorClass = object;

declare type UDefault__OptimusValueContainerGeneratorClass = object;

declare interface UOptimusActionStack extends UObject {
    readonly __properties_UOptimusActionStack: {
        TransactedActionIndex: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusActionStack['__properties_UOptimusActionStack'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusAdvancedSkeletonDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusAdvancedSkeletonDataInterface: {
        SkinWeightProfile: string;
        bEnableLayeredSkinning: boolean;
        AttributeBufferArray: FOptimusAnimAttributeBufferArray;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusAdvancedSkeletonDataInterface['__properties_UOptimusAdvancedSkeletonDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusAdvancedSkeletonDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusAdvancedSkeletonDataProvider: {
        SkeletalMesh: USkeletalMeshComponent;
        DeformerInstance: UOptimusDeformerInstance;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusAdvancedSkeletonDataProvider['__properties_UOptimusAdvancedSkeletonDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusAnimAttributeDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusAnimAttributeDataInterface: {
        AttributeArray: FOptimusAnimAttributeArray;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusAnimAttributeDataInterface['__properties_UOptimusAnimAttributeDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusAnimAttributeDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusAnimAttributeDataProvider: {
        SkeletalMesh: USkeletalMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusAnimAttributeDataProvider['__properties_UOptimusAnimAttributeDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusClothDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusClothDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusClothDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusClothDataProvider['__properties_UOptimusClothDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusComponentSource extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UOptimusComponentSourceBinding extends UObject {
    readonly __properties_UOptimusComponentSourceBinding: {
        BindingName: string;
        ComponentType: TSubclassOf<UOptimusComponentSource>;
        ComponentTags: string[];
        bIsPrimaryBinding: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComponentSourceBinding['__properties_UOptimusComponentSourceBinding'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusComponentSourceBindingContainer extends UObject {
    readonly __properties_UOptimusComponentSourceBindingContainer: {
        Bindings: UOptimusComponentSourceBinding[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComponentSourceBindingContainer['__properties_UOptimusComponentSourceBindingContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusComputeDataInterface extends UComputeDataInterface {
    readonly __staticRegistry: 
        UComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusComputeGraph extends UComputeGraph {
    readonly __properties_UOptimusComputeGraph: {
        KernelToNode: TSoftObjectPtr<UOptimusNode>[];
    };
    readonly __staticRegistry: 
        UComputeGraph['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeGraph['__properties_UOptimusComputeGraph'] &
        UComputeGraph['__propertyRegistry'];
}

declare interface UOptimusConnectivityDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusConnectivityDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusConnectivityDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusConnectivityDataProvider['__properties_UOptimusConnectivityDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusCopyKernelDataInterface extends UComputeDataInterface {
    readonly __properties_UOptimusCopyKernelDataInterface: {
        ComponentSourceBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
        NumThreadsExpression: string;
    };
    readonly __staticRegistry: 
        UComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusCopyKernelDataInterface['__properties_UOptimusCopyKernelDataInterface'] &
        UComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusCopyKernelDataProvider extends UComputeDataProvider {
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusCustomComputeKernelDataInterface extends UComputeDataInterface {
    readonly __properties_UOptimusCustomComputeKernelDataInterface: {
        ComponentSourceBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
        NumThreadsExpression: string;
        ExecutionDomainConstantIdentifier: FOptimusConstantIdentifier;
    };
    readonly __staticRegistry: 
        UComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusCustomComputeKernelDataInterface['__properties_UOptimusCustomComputeKernelDataInterface'] &
        UComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusCustomComputeKernelDataProvider extends UComputeDataProvider {
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusDebugDrawDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusDebugDrawDataInterface: {
        bIsSupported: boolean;
        DebugDrawParameters: FOptimusDebugDrawParameters;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDebugDrawDataInterface['__properties_UOptimusDebugDrawDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusDebugDrawDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusDebugDrawDataProvider: {
        PrimitiveComponent: UPrimitiveComponent;
        DebugDrawParameters: FOptimusDebugDrawParameters;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDebugDrawDataProvider['__properties_UOptimusDebugDrawDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusDeformer extends UMeshDeformer {
    readonly __static_UOptimusDeformer: {
        GetVariables(): UOptimusVariableDescription[];
        GetResources(): UOptimusResourceDescription[];
        GetPrimaryComponentBinding(): UOptimusComponentSourceBinding;
        GetComponentBindings(): UOptimusComponentSourceBinding[];
    };
    readonly __properties_UOptimusDeformer: {
        mesh: USkeletalMesh;
        ComputeGraphs: FOptimusComputeGraphInfo[];
        DataInterfacePropertyOverrideMap: TMap<TWeakObjectPtr<UComputeDataInterface>, FOptimusDataInterfacePropertyOverrideInfo>;
        ValueMap: TMap<FOptimusValueIdentifier, FOptimusValueDescription>;
        ActionStack: UOptimusActionStack;
        status: EOptimusDeformerStatus;
        Graphs: UOptimusNodeGraph[];
        Bindings: UOptimusComponentSourceBindingContainer;
        Variables: UOptimusVariableContainer;
        Resources: UOptimusResourceContainer;
    };
    readonly __staticRegistry: 
        UOptimusDeformer['__static_UOptimusDeformer'] &
        UMeshDeformer['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDeformer['__properties_UOptimusDeformer'] &
        UMeshDeformer['__propertyRegistry'];
}

declare interface UOptimusDeformerDynamicInstanceManager extends UMeshDeformerInstance {
    readonly __properties_UOptimusDeformerDynamicInstanceManager: {
        DefaultInstance: UOptimusDeformerInstance;
        GuidToRigDeformerInstanceMap: TMap<FGuid, UOptimusDeformerInstance>;
        GuidToInstanceMap: TMap<FGuid, UOptimusDeformerInstance>;
    };
    readonly __staticRegistry: 
        UMeshDeformerInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDeformerDynamicInstanceManager['__properties_UOptimusDeformerDynamicInstanceManager'] &
        UMeshDeformerInstance['__propertyRegistry'];
}

declare interface UOptimusDeformerInstance extends UMeshDeformerInstance {
    readonly __static_UOptimusDeformerInstance: {
        SetVectorVariable(InVariableName: string, InValue: FVector): boolean;
        SetVectorArrayVariable(InVariableName: string, InValue: FVector[]): boolean;
        SetVector4Variable(InVariableName: string, InValue: FVector4): boolean;
        SetVector4ArrayVariable(InVariableName: string, InValue: FVector4[]): boolean;
        SetVector2Variable(InVariableName: string, InValue: FVector2D): boolean;
        SetVector2ArrayVariable(InVariableName: string, InValue: FVector2D[]): boolean;
        SetTransformVariable(InVariableName: string, InValue: FTransform): boolean;
        SetTransformArrayVariable(InVariableName: string, InValue: FTransform[]): boolean;
        SetRotatorVariable(InVariableName: string, InValue: FRotator): boolean;
        SetRotatorArrayVariable(InVariableName: string, InValue: FRotator[]): boolean;
        SetQuatVariable(InVariableName: string, InValue: FQuat): boolean;
        SetQuatArrayVariable(InVariableName: string, InValue: FQuat[]): boolean;
        SetNameVariable(InVariableName: string, InValue: string): boolean;
        SetNameArrayVariable(InVariableName: string, InValue: string[]): boolean;
        SetLinearColorVariable(InVariableName: string, InValue: FLinearColor): boolean;
        SetLinearColorArrayVariable(InVariableName: string, InValue: FLinearColor[]): boolean;
        SetIntVariable(InVariableName: string, InValue: number): boolean;
        SetIntArrayVariable(InVariableName: string, InValue: number[]): boolean;
        SetInt4Variable(InVariableName: string, InValue: FIntVector4): boolean;
        SetInt4ArrayVariable(InVariableName: string, InValue: FIntVector4[]): boolean;
        SetInt3Variable(InVariableName: string, InValue: FIntVector): boolean;
        SetInt3ArrayVariable(InVariableName: string, InValue: FIntVector[]): boolean;
        SetInt2Variable(InVariableName: string, InValue: FIntPoint): boolean;
        SetInt2ArrayVariable(InVariableName: string, InValue: FIntPoint[]): boolean;
        SetFloatVariable(InVariableName: string, InValue: number): boolean;
        SetFloatArrayVariable(InVariableName: string, InValue: number[]): boolean;
        SetBoolVariable(InVariableName: string, InValue: boolean): boolean;
        SetBoolArrayVariable(InVariableName: string, InValue: boolean[]): boolean;
        EnqueueTriggerGraph(InTriggerGraphName: string): boolean;
    };
    readonly __properties_UOptimusDeformerInstance: {
        MeshComponent: TWeakObjectPtr<UMeshComponent>;
        InstanceSettings: TWeakObjectPtr<UOptimusDeformerInstanceSettings>;
        ComputeGraphExecInfos: FOptimusDeformerInstanceExecInfo[];
    };
    readonly __staticRegistry: 
        UOptimusDeformerInstance['__static_UOptimusDeformerInstance'] &
        UMeshDeformerInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDeformerInstance['__properties_UOptimusDeformerInstance'] &
        UMeshDeformerInstance['__propertyRegistry'];
}

declare interface UOptimusDeformerInstanceSettings extends UMeshDeformerInstanceSettings {
    readonly __properties_UOptimusDeformerInstanceSettings: {
        Deformer: TWeakObjectPtr<UOptimusDeformer>;
        Bindings: FOptimusDeformerInstanceComponentBinding[];
    };
    readonly __staticRegistry: 
        UMeshDeformerInstanceSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDeformerInstanceSettings['__properties_UOptimusDeformerInstanceSettings'] &
        UMeshDeformerInstanceSettings['__propertyRegistry'];
}

declare interface UOptimusDuplicateVerticesDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusDuplicateVerticesDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusDuplicateVerticesDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusDuplicateVerticesDataProvider['__properties_UOptimusDuplicateVerticesDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusFunctionNodeGraph extends UOptimusNodeSubGraph {
    readonly __static_UOptimusFunctionNodeGraph: {
        GetAccessSpecifierOptions(): string[];
    };
    readonly __properties_UOptimusFunctionNodeGraph: {
        Category: string;
        AccessSpecifier: string;
        Guid: FGuid;
    };
    readonly __staticRegistry: 
        UOptimusFunctionNodeGraph['__static_UOptimusFunctionNodeGraph'] &
        UOptimusNodeSubGraph['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusFunctionNodeGraph['__properties_UOptimusFunctionNodeGraph'] &
        UOptimusNodeSubGraph['__propertyRegistry'];
}

declare interface UOptimusGraphDataInterface extends UComputeDataInterface {
    readonly __properties_UOptimusGraphDataInterface: {
        Variables: FOptimusGraphVariableDescription[];
        ParameterBufferSize: number;
    };
    readonly __staticRegistry: 
        UComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGraphDataInterface['__properties_UOptimusGraphDataInterface'] &
        UComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusGraphDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusGraphDataProvider: {
        MeshComponent: UMeshComponent;
        Variables: FOptimusGraphVariableDescription[];
        DeformerInstance: UOptimusDeformerInstance;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusGraphDataProvider['__properties_UOptimusGraphDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusHalfEdgeDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusHalfEdgeDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusHalfEdgeDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusHalfEdgeDataProvider['__properties_UOptimusHalfEdgeDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusImplicitPersistentBufferDataInterface extends UOptimusRawBufferDataInterface {
    readonly __properties_UOptimusImplicitPersistentBufferDataInterface: {
        bZeroInitForAtomicWrites: boolean;
    };
    readonly __staticRegistry: 
        UOptimusRawBufferDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusImplicitPersistentBufferDataInterface['__properties_UOptimusImplicitPersistentBufferDataInterface'] &
        UOptimusRawBufferDataInterface['__propertyRegistry'];
}

declare interface UOptimusImplicitPersistentBufferDataProvider extends UOptimusRawBufferDataProvider {
    readonly __staticRegistry: 
        UOptimusRawBufferDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusRawBufferDataProvider['__propertyRegistry'];
}

declare interface UOptimusKernelSource extends UComputeKernelSource {
    readonly __properties_UOptimusKernelSource: {
        Source: string;
    };
    readonly __staticRegistry: 
        UComputeKernelSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusKernelSource['__properties_UOptimusKernelSource'] &
        UComputeKernelSource['__propertyRegistry'];
}

declare interface UOptimusLoopTerminalDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusLoopTerminalDataInterface: {
        Index: number;
        count: number;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusLoopTerminalDataInterface['__properties_UOptimusLoopTerminalDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusLoopTerminalDataProvider extends UComputeDataProvider {
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusMorphTargetDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusMorphTargetDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusMorphTargetDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusMorphTargetDataProvider['__properties_UOptimusMorphTargetDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusNode extends UObject {
    readonly __static_UOptimusNode: {
        SetGraphPosition(InPosition: FVector2D): boolean;
        GetNodeName(): string;
        GetNodeCategory(): string;
        GetGraphPosition(): FVector2D;
        GetDisplayName(): string;
    };
    readonly __properties_UOptimusNode: {
        DisplayName: string;
        GraphPosition: FVector2D;
        Pins: UOptimusNodePin[];
        ExpandedPins: string[];
        DiagnosticLevel: EOptimusDiagnosticLevel;
    };
    readonly __staticRegistry: 
        UOptimusNode['__static_UOptimusNode'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode['__properties_UOptimusNode'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusNodeGraph extends UObject {
    readonly __static_UOptimusNodeGraph: {
        RenameGraphDirect(InGraph: UOptimusNodeGraph, InNewName: string): boolean;
        RenameGraph(InGraph: UOptimusNodeGraph, InNewName: string): boolean;
        RemoveNodes(InNodes: UOptimusNode[]): boolean;
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
        GetGraphs(): UOptimusNodeGraph[];
        GetGraphIndex(): number;
        ExpandCollapsedNodes(InGraphReferenceNode: UOptimusNode): UOptimusNode[];
        DuplicateNodes(InNodes: UOptimusNode[], InPosition: FVector2D): boolean;
        DuplicateNode(InNode: UOptimusNode, InPosition: FVector2D): UOptimusNode;
        ConvertToSubGraph(InFunctionNode: UOptimusNode): boolean;
        ConvertToFunction(InSubGraphNode: UOptimusNode): boolean;
        ConvertFunctionToCustomKernel(InKernelFunction: UOptimusNode): UOptimusNode;
        ConvertCustomKernelToFunction(InCustomKernel: UOptimusNode): UOptimusNode;
        CollapseNodesToSubGraph(InNodes: UOptimusNode[]): UOptimusNode;
        CollapseNodesToFunction(InNodes: UOptimusNode[]): UOptimusNode;
        AddVariableGetNode(InVariableDesc: UOptimusVariableDescription, InPosition: FVector2D): UOptimusNode;
        AddValueNode(InDataTypeRef: FOptimusDataTypeRef, InPosition: FVector2D): UOptimusNode;
        AddResourceSetNode(InResourceDesc: UOptimusResourceDescription, InPosition: FVector2D): UOptimusNode;
        AddResourceNode(InResourceDesc: UOptimusResourceDescription, InPosition: FVector2D): UOptimusNode;
        AddResourceGetNode(InResourceDesc: UOptimusResourceDescription, InPosition: FVector2D): UOptimusNode;
        AddNode(InNodeClass: TSubclassOf<UOptimusNode>, InPosition: FVector2D): UOptimusNode;
        AddLoopTerminalNodes(InPosition: FVector2D): UOptimusNode[];
        AddLink(InNodeOutputPin: UOptimusNodePin, InNodeInputPin: UOptimusNodePin): boolean;
        AddFunctionReferenceNode(InFunctionGraph: UOptimusFunctionNodeGraph, InPosition: FVector2D): UOptimusNode;
        AddDataInterfaceNode(InDataInterfaceClass: TSubclassOf<UOptimusComputeDataInterface>, InPosition: FVector2D): UOptimusNode;
        AddComponentBindingGetNode(InComponentBinding: UOptimusComponentSourceBinding, InPosition: FVector2D): UOptimusNode;
        AddCommentNode(InPosition: FVector2D, InSize: FVector2D, InColor: FLinearColor): UOptimusNode;
    };
    readonly __properties_UOptimusNodeGraph: {
        GraphType: EOptimusNodeGraphType;
        Nodes: UOptimusNode[];
        Links: UOptimusNodeLink[];
        NodePairs: UOptimusNodePair[];
        Subgraphs: UOptimusNodeGraph[];
    };
    readonly __staticRegistry: 
        UOptimusNodeGraph['__static_UOptimusNodeGraph'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNodeGraph['__properties_UOptimusNodeGraph'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusNodeLink extends UObject {
    readonly __properties_UOptimusNodeLink: {
        NodeOutputPin: UOptimusNodePin;
        NodeInputPin: UOptimusNodePin;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNodeLink['__properties_UOptimusNodeLink'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusNodePair extends UObject {
    readonly __properties_UOptimusNodePair: {
        First: UOptimusNode;
        Second: UOptimusNode;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNodePair['__properties_UOptimusNodePair'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusNodePin extends UObject {
    readonly __properties_UOptimusNodePin: {
        bIsGroupingPin: boolean;
        Direction: EOptimusNodePinDirection;
        StorageType: EOptimusNodePinStorageType;
        DataDomain: FOptimusDataDomain;
        DataType: FOptimusDataTypeRef;
        SubPins: UOptimusNodePin[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNodePin['__properties_UOptimusNodePin'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusNodeSubGraph extends UOptimusNodeGraph {
    readonly __properties_UOptimusNodeSubGraph: {
        InputBindings: FOptimusParameterBindingArray;
        OutputBindings: FOptimusParameterBindingArray;
    };
    readonly __staticRegistry: 
        UOptimusNodeGraph['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNodeSubGraph['__properties_UOptimusNodeSubGraph'] &
        UOptimusNodeGraph['__propertyRegistry'];
}

declare interface UOptimusNode_AnimAttributeDataInterface extends UOptimusNode_DataInterface {
    readonly __staticRegistry: 
        UOptimusNode_DataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_DataInterface['__propertyRegistry'];
}

declare interface UOptimusNode_Comment extends UOptimusNode {
    readonly __properties_UOptimusNode_Comment: {
        CommentColor: FLinearColor;
        FontSize: number;
        Comment: string;
        bBubbleVisible: boolean;
        bColorBubble: boolean;
        Size: FDeprecateSlateVector2D;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_Comment['__properties_UOptimusNode_Comment'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_ComponentSource extends UOptimusNode {
    readonly __properties_UOptimusNode_ComponentSource: {
        Binding: UOptimusComponentSourceBinding;
        DuplicationInfo: FOptimusNode_ComponentSource_DuplicationInfo;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ComponentSource['__properties_UOptimusNode_ComponentSource'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_ComputeKernelBase extends UOptimusNode {
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_ComputeKernelFunction extends UOptimusNode_ComputeKernelBase {
    readonly __staticRegistry: 
        UOptimusNode_ComputeKernelBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ComputeKernelBase['__propertyRegistry'];
}

declare interface UOptimusNode_ComputeKernelFunctionGeneratorClass extends UClass {
    readonly __properties_UOptimusNode_ComputeKernelFunctionGeneratorClass: {
        Category: string;
        KernelName: string;
        ExecutionDomain: FOptimusExecutionDomain;
        GroupSize: FIntVector;
        InputBindings: FOptimusParameterBinding[];
        OutputBindings: FOptimusParameterBinding[];
        ShaderSource: string;
    };
    readonly __staticRegistry: 
        UClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ComputeKernelFunctionGeneratorClass['__properties_UOptimusNode_ComputeKernelFunctionGeneratorClass'] &
        UClass['__propertyRegistry'];
}

declare interface UOptimusNode_ConstantValue extends UOptimusNode {
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_ConstantValueGeneratorClass extends UClass {
    readonly __properties_UOptimusNode_ConstantValueGeneratorClass: {
        DataType: FOptimusDataTypeRef;
    };
    readonly __staticRegistry: 
        UClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ConstantValueGeneratorClass['__properties_UOptimusNode_ConstantValueGeneratorClass'] &
        UClass['__propertyRegistry'];
}

declare interface UOptimusNode_CustomComputeKernel extends UOptimusNode_ComputeKernelBase {
    readonly __properties_UOptimusNode_CustomComputeKernel: {
        Category: string;
        KernelName: FOptimusValidatedName;
        ExecutionDomain: FOptimusExecutionDomain;
        GroupSize: FIntVector;
        Parameters: FOptimus_ShaderBinding[];
        InputBindings: FOptimusParameterBinding[];
        OutputBindings: FOptimusParameterBinding[];
        InputBindingArray: FOptimusParameterBindingArray;
        OutputBindingArray: FOptimusParameterBindingArray;
        SecondaryInputBindingGroups: FOptimusSecondaryInputBindingsGroup[];
        AdditionalSources: UComputeSource[];
        ShaderSource: FOptimusShaderText;
    };
    readonly __staticRegistry: 
        UOptimusNode_ComputeKernelBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_CustomComputeKernel['__properties_UOptimusNode_CustomComputeKernel'] &
        UOptimusNode_ComputeKernelBase['__propertyRegistry'];
}

declare interface UOptimusNode_DataInterface extends UOptimusNode {
    readonly __properties_UOptimusNode_DataInterface: {
        DataInterfaceClass: UClass;
        DataInterfaceData: UOptimusComputeDataInterface;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_DataInterface['__properties_UOptimusNode_DataInterface'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_FunctionReference extends UOptimusNode {
    readonly __properties_UOptimusNode_FunctionReference: {
        FunctionGraphIdentifier: FOptimusFunctionGraphIdentifier;
        DefaultComponentPin: TWeakObjectPtr<UOptimusNodePin>;
        ResolvedFunctionGraph: TWeakObjectPtr<UOptimusFunctionNodeGraph>;
        FunctionGraph: TSoftObjectPtr<UOptimusFunctionNodeGraph>;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_FunctionReference['__properties_UOptimusNode_FunctionReference'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_GetResource extends UOptimusNode_ResourceAccessorBase {
    readonly __staticRegistry: 
        UOptimusNode_ResourceAccessorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ResourceAccessorBase['__propertyRegistry'];
}

declare interface UOptimusNode_GetVariable extends UOptimusNode {
    readonly __properties_UOptimusNode_GetVariable: {
        VariableDesc: TWeakObjectPtr<UOptimusVariableDescription>;
        DuplicationInfo: FOptimusNode_GetVariable_DuplicationInfo;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_GetVariable['__properties_UOptimusNode_GetVariable'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_GraphTerminal extends UOptimusNode {
    readonly __properties_UOptimusNode_GraphTerminal: {
        TerminalType: EOptimusTerminalType;
        DefaultComponentPin: TWeakObjectPtr<UOptimusNodePin>;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_GraphTerminal['__properties_UOptimusNode_GraphTerminal'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_LoopTerminal extends UOptimusNode {
    readonly __properties_UOptimusNode_LoopTerminal: {
        TerminalType: EOptimusTerminalType;
        LoopInfo: FOptimusLoopTerminalInfo;
        IndexPin: UOptimusNodePin;
        CountPin: UOptimusNodePin;
        PinPairInfos: FOptimusPinPairInfo[];
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_LoopTerminal['__properties_UOptimusNode_LoopTerminal'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_Resource extends UOptimusNode_ResourceAccessorBase {
    readonly __staticRegistry: 
        UOptimusNode_ResourceAccessorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ResourceAccessorBase['__propertyRegistry'];
}

declare interface UOptimusNode_ResourceAccessorBase extends UOptimusNode {
    readonly __properties_UOptimusNode_ResourceAccessorBase: {
        ResourceDesc: TWeakObjectPtr<UOptimusResourceDescription>;
        WriteType: EOptimusBufferWriteType;
        DuplicationInfo: FOptimusNode_ResourceAccessorBase_DuplicationInfo;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ResourceAccessorBase['__properties_UOptimusNode_ResourceAccessorBase'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusNode_SetResource extends UOptimusNode_ResourceAccessorBase {
    readonly __staticRegistry: 
        UOptimusNode_ResourceAccessorBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_ResourceAccessorBase['__propertyRegistry'];
}

declare interface UOptimusNode_SubGraphReference extends UOptimusNode {
    readonly __properties_UOptimusNode_SubGraphReference: {
        SubgraphName: string;
        DefaultComponentPin: TWeakObjectPtr<UOptimusNodePin>;
    };
    readonly __staticRegistry: 
        UOptimusNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusNode_SubGraphReference['__properties_UOptimusNode_SubGraphReference'] &
        UOptimusNode['__propertyRegistry'];
}

declare interface UOptimusPersistentBufferDataInterface extends UOptimusRawBufferDataInterface {
    readonly __properties_UOptimusPersistentBufferDataInterface: {
        ResourceName: string;
    };
    readonly __staticRegistry: 
        UOptimusRawBufferDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusPersistentBufferDataInterface['__properties_UOptimusPersistentBufferDataInterface'] &
        UOptimusRawBufferDataInterface['__propertyRegistry'];
}

declare interface UOptimusPersistentBufferDataProvider extends UOptimusRawBufferDataProvider {
    readonly __staticRegistry: 
        UOptimusRawBufferDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusRawBufferDataProvider['__propertyRegistry'];
}

declare interface UOptimusRawBufferDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusRawBufferDataInterface: {
        ValueType: FShaderValueTypeHandle;
        DataDomain: FOptimusDataDomain;
        ComponentSourceBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
        DomainConstantIdentifier: FOptimusConstantIdentifier;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusRawBufferDataInterface['__properties_UOptimusRawBufferDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusRawBufferDataProvider extends UComputeDataProvider {
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusResourceContainer extends UObject {
    readonly __properties_UOptimusResourceContainer: {
        Descriptions: UOptimusResourceDescription[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusResourceContainer['__properties_UOptimusResourceContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusResourceDescription extends UObject {
    readonly __properties_UOptimusResourceDescription: {
        ResourceName: string;
        DataType: FOptimusDataTypeRef;
        ComponentBinding: TWeakObjectPtr<UOptimusComponentSourceBinding>;
        DataDomain: FOptimusDataDomain;
        DataInterface: UOptimusPersistentBufferDataInterface;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusResourceDescription['__properties_UOptimusResourceDescription'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusSceneComponentSource extends UOptimusComponentSource {
    readonly __staticRegistry: 
        UOptimusComponentSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComponentSource['__propertyRegistry'];
}

declare interface UOptimusSceneDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSceneDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSceneDataProvider: {
        SceneComponent: USceneComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSceneDataProvider['__properties_UOptimusSceneDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSkeletalMeshComponentSource extends UOptimusSkinnedMeshComponentSource {
    readonly __staticRegistry: 
        UOptimusSkinnedMeshComponentSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinnedMeshComponentSource['__propertyRegistry'];
}

declare interface UOptimusSkeletonDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSkeletonDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSkeletonDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkeletonDataProvider['__properties_UOptimusSkeletonDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSkinWeightsAsVertexMaskDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusSkinWeightsAsVertexMaskDataInterface: {
        SkinWeightProfile: string;
        BoneNames: string[];
        ExpandTowardsRoot: number;
        ExpandTowardsLeaf: number;
        bDebugDrawIncludedBones: boolean;
        DebugDrawColor: FColor;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinWeightsAsVertexMaskDataInterface['__properties_UOptimusSkinWeightsAsVertexMaskDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSkinWeightsAsVertexMaskDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSkinWeightsAsVertexMaskDataProvider: {
        SkeletalMesh: USkeletalMeshComponent;
        DeformerInstance: UOptimusDeformerInstance;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinWeightsAsVertexMaskDataProvider['__properties_UOptimusSkinWeightsAsVertexMaskDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshComponentSource extends UOptimusComponentSource {
    readonly __staticRegistry: 
        UOptimusComponentSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComponentSource['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSkinnedMeshDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinnedMeshDataProvider['__properties_UOptimusSkinnedMeshDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshReadDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshReadDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSkinnedMeshReadDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
        DeformerInstance: UOptimusDeformerInstance;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinnedMeshReadDataProvider['__properties_UOptimusSkinnedMeshReadDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshVertexAttributeDataInterface extends UOptimusComputeDataInterface {
    readonly __properties_UOptimusSkinnedMeshVertexAttributeDataInterface: {
        AttributeName: string;
        DefaultValue: number;
    };
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinnedMeshVertexAttributeDataInterface['__properties_UOptimusSkinnedMeshVertexAttributeDataInterface'] &
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshVertexAttributeDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSkinnedMeshVertexAttributeDataProvider: {
        SkinnedMeshComponent: USkinnedMeshComponent;
        AttributeName: string;
        DefaultValue: number;
        DeformerInstance: UOptimusDeformerInstance;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinnedMeshVertexAttributeDataProvider['__properties_UOptimusSkinnedMeshVertexAttributeDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshWriteDataInterface extends UOptimusComputeDataInterface {
    readonly __staticRegistry: 
        UOptimusComputeDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusComputeDataInterface['__propertyRegistry'];
}

declare interface UOptimusSkinnedMeshWriteDataProvider extends UComputeDataProvider {
    readonly __properties_UOptimusSkinnedMeshWriteDataProvider: {
        SkinnedMesh: USkinnedMeshComponent;
    };
    readonly __staticRegistry: 
        UComputeDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSkinnedMeshWriteDataProvider['__properties_UOptimusSkinnedMeshWriteDataProvider'] &
        UComputeDataProvider['__propertyRegistry'];
}

declare interface UOptimusSource extends UComputeSource {
    readonly __properties_UOptimusSource: {
        SourceText: string;
    };
    readonly __staticRegistry: 
        UComputeSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusSource['__properties_UOptimusSource'] &
        UComputeSource['__propertyRegistry'];
}

declare interface UOptimusTransientBufferDataInterface extends UOptimusRawBufferDataInterface {
    readonly __properties_UOptimusTransientBufferDataInterface: {
        bZeroInitForAtomicWrites: boolean;
    };
    readonly __staticRegistry: 
        UOptimusRawBufferDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusTransientBufferDataInterface['__properties_UOptimusTransientBufferDataInterface'] &
        UOptimusRawBufferDataInterface['__propertyRegistry'];
}

declare interface UOptimusTransientBufferDataProvider extends UOptimusRawBufferDataProvider {
    readonly __staticRegistry: 
        UOptimusRawBufferDataProvider['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusRawBufferDataProvider['__propertyRegistry'];
}

declare interface UOptimusValueContainer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UOptimusValueContainerGeneratorClass extends UClass {
    readonly __properties_UOptimusValueContainerGeneratorClass: {
        DataType: FOptimusDataTypeRef;
    };
    readonly __staticRegistry: 
        UClass['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusValueContainerGeneratorClass['__properties_UOptimusValueContainerGeneratorClass'] &
        UClass['__propertyRegistry'];
}

declare interface UOptimusVariableContainer extends UObject {
    readonly __properties_UOptimusVariableContainer: {
        Descriptions: UOptimusVariableDescription[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusVariableContainer['__properties_UOptimusVariableContainer'] &
        UObject['__propertyRegistry'];
}

declare interface UOptimusVariableDescription extends UObject {
    readonly __properties_UOptimusVariableDescription: {
        Guid: FGuid;
        VariableName: string;
        DataType: FOptimusDataTypeRef;
        DefaultValueStruct: FOptimusValueContainerStruct;
        CachedShaderValue: FShaderValueContainer;
        ValueData: number[];
        DefaultValue: UOptimusValueContainer;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOptimusVariableDescription['__properties_UOptimusVariableDescription'] &
        UObject['__propertyRegistry'];
}

