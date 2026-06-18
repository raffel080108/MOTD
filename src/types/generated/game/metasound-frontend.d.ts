declare interface FMetaSoundAssetKey {
    ClassName: FMetasoundFrontendClassName;
    Version: FMetasoundFrontendVersionNumber;
}

declare type FMetaSoundAssetTagClassCollections = object;

declare type FMetaSoundAssetTagCollections = object;

declare interface FMetaSoundClassInterfaceInfo {
    DefinedInterfaces: FMetasoundFrontendInterfaceMetadata[];
    SearchInfo: FMetaSoundClassSearchInfo;
    Inputs: FMetaSoundClassVertexInfo[];
    Outputs: FMetaSoundClassVertexInfo[];
    InheritedInterfaces: FMetasoundFrontendVersion[];
}

declare interface FMetaSoundClassSearchInfo {
    ClassDisplayName: string;
    ClassDescription: string;
    Hierarchy: string[];
    Keywords: string[];
}

declare interface FMetaSoundClassVertexCollectionInfo {
    ClassVertexInfo: FMetaSoundClassVertexInfo[];
}

declare interface FMetaSoundClassVertexInfo {
    Name: string;
    TypeName: string;
    AccessType: EMetasoundFrontendVertexAccessType;
}

declare interface FMetaSoundDocumentInfo {
    DocumentVersion: FMetasoundFrontendVersionNumber;
    ReferencedAssetKeys: FMetaSoundAssetKey[];
    bIsPreset: boolean;
}

declare interface FMetaSoundFrontendDocumentBuilder {
    DocumentInterface: TScriptInterface<IMetaSoundDocumentInterface>;
    BuildPageID: FGuid;
}

declare type FMetaSoundFrontendGraphComment = object;

declare type FMetaSoundFrontendNodeConfiguration = object;

declare interface FMetasoundCommentNodeIntVector extends FIntVector2 {

}

declare interface FMetasoundFrontendClass {
    ID: FGuid;
    MetaData: FMetasoundFrontendClassMetadata;
    Interface: FMetasoundFrontendClassInterface;
}

declare interface FMetasoundFrontendClassEnvironmentVariable {
    Name: string;
    TypeName: string;
    bIsRequired: boolean;
}

declare interface FMetasoundFrontendClassInput extends FMetasoundFrontendClassVertex {
    Defaults: FMetasoundFrontendClassInputDefault[];
}

declare interface FMetasoundFrontendClassInputDefault {
    Literal: FMetasoundFrontendLiteral;
    PageID: FGuid;
}

declare interface FMetasoundFrontendClassInterface {
    Inputs: FMetasoundFrontendClassInput[];
    Outputs: FMetasoundFrontendClassOutput[];
    Environment: FMetasoundFrontendClassEnvironmentVariable[];
    ChangeID: FGuid;
}

declare interface FMetasoundFrontendClassMetadata {
    ClassName: FMetasoundFrontendClassName;
    Version: FMetasoundFrontendVersionNumber;
    Type: EMetasoundFrontendClassType;
    bIsDeprecated: boolean;
    ChangeID: FGuid;
}

declare interface FMetasoundFrontendClassName {
    Namespace: string;
    Name: string;
    Variant: string;
}

declare interface FMetasoundFrontendClassOutput extends FMetasoundFrontendClassVertex {

}

declare type FMetasoundFrontendClassStyle = object;

declare type FMetasoundFrontendClassStyleDisplay = object;

declare interface FMetasoundFrontendClassVariable extends FMetasoundFrontendClassVertex {
    DefaultLiteral: FMetasoundFrontendLiteral;
}

declare interface FMetasoundFrontendClassVertex extends FMetasoundFrontendVertex {
    NodeID: FGuid;
    AccessType: EMetasoundFrontendVertexAccessType;
}

declare interface FMetasoundFrontendDocument {
    MetaData: FMetasoundFrontendDocumentMetadata;
    Interfaces: FMetasoundFrontendVersion[];
    RootGraph: FMetasoundFrontendGraphClass;
    Subgraphs: FMetasoundFrontendGraphClass[];
    Dependencies: FMetasoundFrontendClass[];
    IDCounter: number;
}

declare interface FMetasoundFrontendDocumentMetadata {
    Version: FMetasoundFrontendVersion;
}

declare interface FMetasoundFrontendEdge {
    FromNodeID: FGuid;
    FromVertexID: FGuid;
    ToNodeID: FGuid;
    ToVertexID: FGuid;
}

declare interface FMetasoundFrontendEdgeStyle {
    NodeID: FGuid;
    OutputName: string;
    LiteralColorPairs: FMetasoundFrontendEdgeStyleLiteralColorPair[];
}

declare interface FMetasoundFrontendEdgeStyleLiteralColorPair {
    Value: FMetasoundFrontendLiteral;
    Color: FLinearColor;
}

declare interface FMetasoundFrontendGraph {
    Nodes: FMetasoundFrontendNode[];
    Edges: FMetasoundFrontendEdge[];
    Variables: FMetasoundFrontendVariable[];
    PageID: FGuid;
}

declare interface FMetasoundFrontendGraphClass extends FMetasoundFrontendClass {
    PagedGraphs: FMetasoundFrontendGraph[];
    PresetOptions: FMetasoundFrontendGraphClassPresetOptions;
}

declare interface FMetasoundFrontendGraphClassPresetOptions {
    bIsPreset: boolean;
    InputsInheritingDefault: string[];
}

declare type FMetasoundFrontendGraphStyle = object;

declare interface FMetasoundFrontendInterface extends FMetasoundFrontendClassInterface {
    MetaData: FMetasoundFrontendInterfaceMetadata;
}

declare interface FMetasoundFrontendInterfaceBinding {
    OutputInterfaceVersion: FMetasoundFrontendVersion;
    InputInterfaceVersion: FMetasoundFrontendVersion;
    BindingPriority: number;
    VertexBindings: FMetasoundFrontendInterfaceVertexBinding[];
}

declare interface FMetasoundFrontendInterfaceMetadata {
    Version: FMetasoundFrontendVersion;
    UClassOptions: FMetasoundFrontendInterfaceUClassOptions[];
}

declare type FMetasoundFrontendInterfaceStyle = object;

declare interface FMetasoundFrontendInterfaceUClassOptions {
    ClassPath: FTopLevelAssetPath;
    bIsModifiable: boolean;
    bIsDefault: boolean;
}

declare interface FMetasoundFrontendInterfaceVertexBinding {
    OutputName: string;
    InputName: string;
}

declare interface FMetasoundFrontendLiteral {
    Type: EMetasoundFrontendLiteralType;
    AsNumDefault: number;
    AsBoolean: boolean[];
    AsInteger: number[];
    AsFloat: number[];
    AsString: string[];
    AsUObject: UObject[];
}

declare interface FMetasoundFrontendNode {
    ID: FGuid;
    ClassID: FGuid;
    Name: string;
    Interface: FMetasoundFrontendNodeInterface;
    InputLiterals: FMetasoundFrontendVertexLiteral[];
    Configuration: FInstancedStruct;
    ClassInterfaceOverride: FInstancedStruct;
}

declare interface FMetasoundFrontendNodeInterface {
    Inputs: FMetasoundFrontendVertex[];
    Outputs: FMetasoundFrontendVertex[];
    Environment: FMetasoundFrontendVertex[];
}

declare type FMetasoundFrontendNodeStyle = object;

declare type FMetasoundFrontendNodeStyleDisplay = object;

declare interface FMetasoundFrontendVariable {
    Name: string;
    TypeName: string;
    Literal: FMetasoundFrontendLiteral;
    ID: FGuid;
    VariableNodeID: FGuid;
    MutatorNodeID: FGuid;
    AccessorNodeIDs: FGuid[];
    DeferredAccessorNodeIDs: FGuid[];
}

declare interface FMetasoundFrontendVersion {
    Name: string;
    Number: FMetasoundFrontendVersionNumber;
}

declare interface FMetasoundFrontendVersionNumber {
    Major: number;
    Minor: number;
}

declare interface FMetasoundFrontendVertex {
    Name: string;
    TypeName: string;
    VertexID: FGuid;
}

declare interface FMetasoundFrontendVertexHandle {
    NodeID: FGuid;
    VertexID: FGuid;
}

declare interface FMetasoundFrontendVertexLiteral {
    VertexID: FGuid;
    Value: FMetasoundFrontendLiteral;
}

declare type FMetasoundFrontendVertexMetadata = object;

declare interface FNodeTemplateGenerateInterfaceParams {
    InputsToConnect: string[];
    OutputsToConnect: string[];
}

declare interface IMetaSoundDocumentInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UMetaSoundBuilderDocument extends UObject {
    readonly __properties_UMetaSoundBuilderDocument: {
        Document: FMetasoundFrontendDocument;
        MetaSoundUClass: UClass;
        BuilderUClass: UClass;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundBuilderDocument['__properties_UMetaSoundBuilderDocument'] &
        UObject['__propertyRegistry'];
}

declare interface UMetaSoundFrontendMemberMetadata extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMetasoundParameterPack extends UObject {
    readonly __static_UMetasoundParameterPack: {
        SetTrigger(ParameterName: string, OnlyIfExists: boolean): ESetParamResult;
        SetString(ParameterName: string, InValue: string, OnlyIfExists: boolean): ESetParamResult;
        SetInt(ParameterName: string, InValue: number, OnlyIfExists: boolean): ESetParamResult;
        SetFloat(ParameterName: string, InValue: number, OnlyIfExists: boolean): ESetParamResult;
        SetBool(ParameterName: string, InValue: boolean, OnlyIfExists: boolean): ESetParamResult;
        MakeMetasoundParameterPack(): UMetasoundParameterPack;
        HasTrigger(ParameterName: string): boolean;
        HasString(ParameterName: string): boolean;
        HasInt(ParameterName: string): boolean;
        HasFloat(ParameterName: string): boolean;
        HasBool(ParameterName: string): boolean;
        GetTrigger(ParameterName: string, Result: ESetParamResult): boolean;
        GetString(ParameterName: string, Result: ESetParamResult): string;
        GetInt(ParameterName: string, Result: ESetParamResult): number;
        GetFloat(ParameterName: string, Result: ESetParamResult): number;
        GetBool(ParameterName: string, Result: ESetParamResult): boolean;
    };
    readonly __staticRegistry: 
        UMetasoundParameterPack['__static_UMetasoundParameterPack'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

