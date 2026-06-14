declare interface FDataflowCallSubGraphNode extends FDataflowNode {
    SubGraphGuid: FGuid;
    DynamicInputs: FDataflowDynamicConnections;
    InputsPropertyBag: FInstancedPropertyBag;
    DynamicOutputs: FDataflowDynamicConnections;
    OutputsPropertyBag: FInstancedPropertyBag;
}
declare const FDataflowCallSubGraphNode: FDataflowCallSubGraphNode;

declare interface FDataflowDynamicConnections {
    DynamicProperties: TArray<FDataflowAllTypes>;
}
declare const FDataflowDynamicConnections: FDataflowDynamicConnections;

declare interface FDataflowImageToTextureNode extends FDataflowNode {
    Image: FDataflowImage;
    TextureName: FName;
    TransientTexture: UTexture2D;
}
declare const FDataflowImageToTextureNode: FDataflowImageToTextureNode;

declare interface FDataflowInstance {
    DataflowAsset: UDataflow;
    DataflowTerminal: FName;
    VariableOverrides: FDataflowVariableOverrides;
    Owner: UObject;
}
declare const FDataflowInstance: FDataflowInstance;

declare interface FDataflowNodeDebugDrawSettings {
    RenderType: EDataflowDebugDrawRenderType;
    bTranslucent: boolean;
    Color: FLinearColor;
    LineWidthMultiplier: number;
}
declare const FDataflowNodeDebugDrawSettings: FDataflowNodeDebugDrawSettings;

declare interface FDataflowNodeSphereCoveringDebugDrawSettings {
    bDisplaySphereCovering: boolean;
    RenderType: EDataflowDebugDrawRenderType;
    bTranslucent: boolean;
    LineWidthMultiplier: number;
    ColorMethod: EDataflowSphereCoveringColorMethod;
    Color: FLinearColor;
    ColorRandomSeed: number;
    ColorA: FLinearColor;
    ColorB: FLinearColor;
}
declare const FDataflowNodeSphereCoveringDebugDrawSettings: FDataflowNodeSphereCoveringDebugDrawSettings;

declare interface FDataflowPreviewCacheParams {
    FrameRate: number;
    SubframeRate: number;
    bCanEditSubframeRate: boolean;
    TimeRange: FVector2f;
    bRestartSimulation: boolean;
    RestartTimeRange: FVector2f;
    bAsyncCaching: boolean;
}
declare const FDataflowPreviewCacheParams: FDataflowPreviewCacheParams;

declare interface FDataflowProxyElement extends FDataflowBaseElement {

}
declare const FDataflowProxyElement: FDataflowProxyElement;

declare interface FDataflowSubGraphGetCurrentIndexNode extends FDataflowNode {
    Index: number;
}
declare const FDataflowSubGraphGetCurrentIndexNode: FDataflowSubGraphGetCurrentIndexNode;

declare interface FDataflowSubGraphInputNode extends FDataflowNode {
    DynamicConnections: FDataflowDynamicConnections;
    PropertyBag: FInstancedPropertyBag;
}
declare const FDataflowSubGraphInputNode: FDataflowSubGraphInputNode;

declare interface FDataflowSubGraphOutputNode extends FDataflowNode {
    DynamicConnections: FDataflowDynamicConnections;
    PropertyBag: FInstancedPropertyBag;
}
declare const FDataflowSubGraphOutputNode: FDataflowSubGraphOutputNode;

declare interface FDataflowTextureTerminalNode extends FDataflowTerminalNode {
    Image: FDataflowImage;
    TextureAsset: UTexture2D;
}
declare const FDataflowTextureTerminalNode: FDataflowTextureTerminalNode;

declare interface FDataflowTextureToImageNode extends FDataflowNode {
    TextureAsset: UTexture2D;
    Image: FDataflowImage;
}
declare const FDataflowTextureToImageNode: FDataflowTextureToImageNode;

declare interface FDataflowVariableOverrides {
    Variables: FInstancedPropertyBag;
    OverriddenVariableGuids: TArray<FGuid>;
}
declare const FDataflowVariableOverrides: FDataflowVariableOverrides;

declare interface FGetDataflowVariableNode extends FDataflowNode {
    Value: FDataflowAnyType;
    VariablePropertyBag: FInstancedPropertyBag;
    VariableName: FName;
}
declare const FGetDataflowVariableNode: FGetDataflowVariableNode;

declare interface FStringValuePair {
    Key: FString;
    Value: FString;
}
declare const FStringValuePair: FStringValuePair;

declare interface IDataflowContentOwner extends IInterface {

}
declare const IDataflowContentOwner: IDataflowContentOwner;

declare interface IDataflowInstanceInterface extends IInterface {

}
declare const IDataflowInstanceInterface: IDataflowInstanceInterface;

declare interface UDataflow extends UEdGraph {
    bActive: boolean;
    Targets: TArray<UObject>;
    Material: UMaterial;
    Type: EDataflowType;
    Variables: FInstancedPropertyBag;
    DataflowSubGraphs: TArray<UDataflowSubGraph>;
}
declare const UDataflow: UDataflow;

declare interface UDataflowBaseContent extends UDataflowContextObject {
    DataflowTerminal: FString;
    TerminalAsset: UObject;
    bIsConstructionDirty: boolean;
    bIsSimulationDirty: boolean;
}
declare const UDataflowBaseContent: UDataflowBaseContent;

declare interface UDataflowBlueprintLibrary extends UBlueprintFunctionLibrary {
    RegenerateAssetFromDataflow(AssetToRegenerate: UObject, bRegenerateDependentAssets: boolean): boolean;
    OverrideDataflowVariableObjectArray(Asset: UObject, VariableName: FName, VariableArrayValue: TArray<UObject>): boolean;
    OverrideDataflowVariableObject(Asset: UObject, VariableName: FName, VariableValue: UObject): boolean;
    OverrideDataflowVariableIntArray(Asset: UObject, VariableName: FName, VariableArrayValue: TArray<number>): boolean;
    OverrideDataflowVariableInt(Asset: UObject, VariableName: FName, VariableValue: int64): boolean;
    OverrideDataflowVariableFloatArray(Asset: UObject, VariableName: FName, VariableArrayValue: TArray<number>): boolean;
    OverrideDataflowVariableFloat(Asset: UObject, VariableName: FName, VariableValue: number): boolean;
    OverrideDataflowVariableBoolArray(Asset: UObject, VariableName: FName, VariableArrayValue: TArray<boolean>): boolean;
    OverrideDataflowVariableBool(Asset: UObject, VariableName: FName, VariableValue: boolean): boolean;
    EvaluateTerminalNodeByName(Dataflow: UDataflow, TerminalNodeName: FName, ResultAsset: UObject): void;
}
declare const UDataflowBlueprintLibrary: UDataflowBlueprintLibrary;

declare interface UDataflowContextObject extends UObject {
    SelectedNode: UDataflowEdNode;
    DataflowGraph: UDataflow;
}
declare const UDataflowContextObject: UDataflowContextObject;

declare interface UDataflowDebugDrawComponent extends UDebugDrawComponent {

}
declare const UDataflowDebugDrawComponent: UDataflowDebugDrawComponent;

declare interface UDataflowEdNode extends UEdGraphNode {
    bRenderInAssetEditor: boolean;
    bRenderWireframeInAssetEditor: boolean;
    bCanEnableRenderWireframe: boolean;
}
declare const UDataflowEdNode: UDataflowEdNode;

declare interface UDataflowMesh extends UObject {
    Materials: TArray<UMaterialInterface>;
}
declare const UDataflowMesh: UDataflowMesh;

declare interface UDataflowSkeletalContent extends UDataflowBaseContent {
    SkeletalMesh: USkeletalMesh;
    AnimationAsset: UAnimationAsset;
}
declare const UDataflowSkeletalContent: UDataflowSkeletalContent;

declare interface UDataflowSubGraph extends UEdGraph {
    SubGraphGuid: FGuid;
    bIsForEach: boolean;
}
declare const UDataflowSubGraph: UDataflowSubGraph;

