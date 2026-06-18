declare interface FDataflowCallSubGraphNode extends FDataflowNode {
    SubGraphGuid: FGuid;
    DynamicInputs: FDataflowDynamicConnections;
    InputsPropertyBag: FInstancedPropertyBag;
    DynamicOutputs: FDataflowDynamicConnections;
    OutputsPropertyBag: FInstancedPropertyBag;
}

declare interface FDataflowDynamicConnections {
    DynamicProperties: FDataflowAllTypes[];
}

declare interface FDataflowImageToTextureNode extends FDataflowNode {
    Image: FDataflowImage;
    TextureName: string;
    TransientTexture: UTexture2D;
}

declare interface FDataflowInstance {
    DataflowAsset: UDataflow;
    DataflowTerminal: string;
    VariableOverrides: FDataflowVariableOverrides;
    Owner: UObject;
}

declare interface FDataflowNodeDebugDrawSettings {
    RenderType: EDataflowDebugDrawRenderType;
    bTranslucent: boolean;
    Color: FLinearColor;
    LineWidthMultiplier: number;
}

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

declare interface FDataflowPreviewCacheParams {
    FrameRate: number;
    SubframeRate: number;
    bCanEditSubframeRate: boolean;
    TimeRange: FVector2f;
    bRestartSimulation: boolean;
    RestartTimeRange: FVector2f;
    bAsyncCaching: boolean;
}

declare interface FDataflowProxyElement extends FDataflowBaseElement {

}

declare interface FDataflowSubGraphGetCurrentIndexNode extends FDataflowNode {
    Index: number;
}

declare interface FDataflowSubGraphInputNode extends FDataflowNode {
    DynamicConnections: FDataflowDynamicConnections;
    PropertyBag: FInstancedPropertyBag;
}

declare interface FDataflowSubGraphOutputNode extends FDataflowNode {
    DynamicConnections: FDataflowDynamicConnections;
    PropertyBag: FInstancedPropertyBag;
}

declare interface FDataflowTextureTerminalNode extends FDataflowTerminalNode {
    Image: FDataflowImage;
    TextureAsset: UTexture2D;
}

declare interface FDataflowTextureToImageNode extends FDataflowNode {
    TextureAsset: UTexture2D;
    Image: FDataflowImage;
}

declare interface FDataflowVariableOverrides {
    Variables: FInstancedPropertyBag;
    OverriddenVariableGuids: FGuid[];
}

declare interface FGetDataflowVariableNode extends FDataflowNode {
    Value: FDataflowAnyType;
    VariablePropertyBag: FInstancedPropertyBag;
    VariableName: string;
}

declare interface FStringValuePair {
    Key: string;
    Value: string;
}

declare interface IDataflowContentOwner extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IDataflowInstanceInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UDataflow extends UEdGraph {
    readonly __properties_UDataflow: {
        bActive: boolean;
        Targets: UObject[];
        Material: UMaterial;
        Type: EDataflowType;
        Variables: FInstancedPropertyBag;
        DataflowSubGraphs: UDataflowSubGraph[];
    };
    readonly __staticRegistry: 
        UEdGraph['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflow['__properties_UDataflow'] &
        UEdGraph['__propertyRegistry'];
}

declare interface UDataflowBaseContent extends UDataflowContextObject {
    readonly __properties_UDataflowBaseContent: {
        DataflowTerminal: string;
        TerminalAsset: UObject;
        bIsConstructionDirty: boolean;
        bIsSimulationDirty: boolean;
    };
    readonly __staticRegistry: 
        UDataflowContextObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowBaseContent['__properties_UDataflowBaseContent'] &
        UDataflowContextObject['__propertyRegistry'];
}

declare interface UDataflowBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UDataflowBlueprintLibrary: {
        RegenerateAssetFromDataflow(AssetToRegenerate: UObject, bRegenerateDependentAssets: boolean): boolean;
        OverrideDataflowVariableObjectArray(Asset: UObject, VariableName: string, VariableArrayValue: UObject[]): boolean;
        OverrideDataflowVariableObject(Asset: UObject, VariableName: string, VariableValue: UObject): boolean;
        OverrideDataflowVariableIntArray(Asset: UObject, VariableName: string, VariableArrayValue: number[]): boolean;
        OverrideDataflowVariableInt(Asset: UObject, VariableName: string, VariableValue: number): boolean;
        OverrideDataflowVariableFloatArray(Asset: UObject, VariableName: string, VariableArrayValue: number[]): boolean;
        OverrideDataflowVariableFloat(Asset: UObject, VariableName: string, VariableValue: number): boolean;
        OverrideDataflowVariableBoolArray(Asset: UObject, VariableName: string, VariableArrayValue: boolean[]): boolean;
        OverrideDataflowVariableBool(Asset: UObject, VariableName: string, VariableValue: boolean): boolean;
        EvaluateTerminalNodeByName(Dataflow: UDataflow, TerminalNodeName: string, ResultAsset: UObject): void;
    };
    readonly __staticRegistry: 
        UDataflowBlueprintLibrary['__static_UDataflowBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UDataflowContextObject extends UObject {
    readonly __properties_UDataflowContextObject: {
        SelectedNode: UDataflowEdNode;
        DataflowGraph: UDataflow;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowContextObject['__properties_UDataflowContextObject'] &
        UObject['__propertyRegistry'];
}

declare interface UDataflowDebugDrawComponent extends UDebugDrawComponent {
    readonly __staticRegistry: 
        UDebugDrawComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDebugDrawComponent['__propertyRegistry'];
}

declare interface UDataflowEdNode extends UEdGraphNode {
    readonly __properties_UDataflowEdNode: {
        bRenderInAssetEditor: boolean;
        bRenderWireframeInAssetEditor: boolean;
        bCanEnableRenderWireframe: boolean;
    };
    readonly __staticRegistry: 
        UEdGraphNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowEdNode['__properties_UDataflowEdNode'] &
        UEdGraphNode['__propertyRegistry'];
}

declare interface UDataflowMesh extends UObject {
    readonly __properties_UDataflowMesh: {
        Materials: UMaterialInterface[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowMesh['__properties_UDataflowMesh'] &
        UObject['__propertyRegistry'];
}

declare interface UDataflowSkeletalContent extends UDataflowBaseContent {
    readonly __properties_UDataflowSkeletalContent: {
        SkeletalMesh: USkeletalMesh;
        AnimationAsset: UAnimationAsset;
    };
    readonly __staticRegistry: 
        UDataflowBaseContent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowSkeletalContent['__properties_UDataflowSkeletalContent'] &
        UDataflowBaseContent['__propertyRegistry'];
}

declare interface UDataflowSubGraph extends UEdGraph {
    readonly __properties_UDataflowSubGraph: {
        SubGraphGuid: FGuid;
        bIsForEach: boolean;
    };
    readonly __staticRegistry: 
        UEdGraph['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowSubGraph['__properties_UDataflowSubGraph'] &
        UEdGraph['__propertyRegistry'];
}

