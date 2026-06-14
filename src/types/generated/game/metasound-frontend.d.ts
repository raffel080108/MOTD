declare interface FMetaSoundAssetKey {
    ClassName: FMetasoundFrontendClassName;
    Version: FMetasoundFrontendVersionNumber;
}
declare const FMetaSoundAssetKey: FMetaSoundAssetKey;

declare interface FMetaSoundAssetTagClassCollections {

}
declare const FMetaSoundAssetTagClassCollections: FMetaSoundAssetTagClassCollections;

declare interface FMetaSoundAssetTagCollections {

}
declare const FMetaSoundAssetTagCollections: FMetaSoundAssetTagCollections;

declare interface FMetaSoundClassInterfaceInfo {
    DefinedInterfaces: TArray<FMetasoundFrontendInterfaceMetadata>;
    SearchInfo: FMetaSoundClassSearchInfo;
    Inputs: TArray<FMetaSoundClassVertexInfo>;
    Outputs: TArray<FMetaSoundClassVertexInfo>;
    InheritedInterfaces: TArray<FMetasoundFrontendVersion>;
}
declare const FMetaSoundClassInterfaceInfo: FMetaSoundClassInterfaceInfo;

declare interface FMetaSoundClassSearchInfo {
    ClassDisplayName: FText;
    ClassDescription: FText;
    Hierarchy: TArray<FText>;
    Keywords: TArray<FText>;
}
declare const FMetaSoundClassSearchInfo: FMetaSoundClassSearchInfo;

declare interface FMetaSoundClassVertexCollectionInfo {
    ClassVertexInfo: TArray<FMetaSoundClassVertexInfo>;
}
declare const FMetaSoundClassVertexCollectionInfo: FMetaSoundClassVertexCollectionInfo;

declare interface FMetaSoundClassVertexInfo {
    Name: FName;
    TypeName: FName;
    AccessType: EMetasoundFrontendVertexAccessType;
}
declare const FMetaSoundClassVertexInfo: FMetaSoundClassVertexInfo;

declare interface FMetaSoundDocumentInfo {
    DocumentVersion: FMetasoundFrontendVersionNumber;
    ReferencedAssetKeys: TArray<FMetaSoundAssetKey>;
    bIsPreset: boolean;
}
declare const FMetaSoundDocumentInfo: FMetaSoundDocumentInfo;

declare interface FMetaSoundFrontendDocumentBuilder {
    DocumentInterface: TScriptInterface<IMetaSoundDocumentInterface>;
    BuildPageID: FGuid;
}
declare const FMetaSoundFrontendDocumentBuilder: FMetaSoundFrontendDocumentBuilder;

declare interface FMetaSoundFrontendGraphComment {

}
declare const FMetaSoundFrontendGraphComment: FMetaSoundFrontendGraphComment;

declare interface FMetaSoundFrontendNodeConfiguration {

}
declare const FMetaSoundFrontendNodeConfiguration: FMetaSoundFrontendNodeConfiguration;

declare interface FMetasoundCommentNodeIntVector extends FIntVector2 {

}
declare const FMetasoundCommentNodeIntVector: FMetasoundCommentNodeIntVector;

declare interface FMetasoundFrontendClass {
    ID: FGuid;
    MetaData: FMetasoundFrontendClassMetadata;
    Interface: FMetasoundFrontendClassInterface;
}
declare const FMetasoundFrontendClass: FMetasoundFrontendClass;

declare interface FMetasoundFrontendClassEnvironmentVariable {
    Name: FName;
    TypeName: FName;
    bIsRequired: boolean;
}
declare const FMetasoundFrontendClassEnvironmentVariable: FMetasoundFrontendClassEnvironmentVariable;

declare interface FMetasoundFrontendClassInput extends FMetasoundFrontendClassVertex {
    Defaults: TArray<FMetasoundFrontendClassInputDefault>;
}
declare const FMetasoundFrontendClassInput: FMetasoundFrontendClassInput;

declare interface FMetasoundFrontendClassInputDefault {
    Literal: FMetasoundFrontendLiteral;
    PageID: FGuid;
}
declare const FMetasoundFrontendClassInputDefault: FMetasoundFrontendClassInputDefault;

declare interface FMetasoundFrontendClassInterface {
    Inputs: TArray<FMetasoundFrontendClassInput>;
    Outputs: TArray<FMetasoundFrontendClassOutput>;
    Environment: TArray<FMetasoundFrontendClassEnvironmentVariable>;
    ChangeID: FGuid;
}
declare const FMetasoundFrontendClassInterface: FMetasoundFrontendClassInterface;

declare interface FMetasoundFrontendClassMetadata {
    ClassName: FMetasoundFrontendClassName;
    Version: FMetasoundFrontendVersionNumber;
    Type: EMetasoundFrontendClassType;
    bIsDeprecated: boolean;
    ChangeID: FGuid;
}
declare const FMetasoundFrontendClassMetadata: FMetasoundFrontendClassMetadata;

declare interface FMetasoundFrontendClassName {
    Namespace: FName;
    Name: FName;
    Variant: FName;
}
declare const FMetasoundFrontendClassName: FMetasoundFrontendClassName;

declare interface FMetasoundFrontendClassOutput extends FMetasoundFrontendClassVertex {

}
declare const FMetasoundFrontendClassOutput: FMetasoundFrontendClassOutput;

declare interface FMetasoundFrontendClassStyle {

}
declare const FMetasoundFrontendClassStyle: FMetasoundFrontendClassStyle;

declare interface FMetasoundFrontendClassStyleDisplay {

}
declare const FMetasoundFrontendClassStyleDisplay: FMetasoundFrontendClassStyleDisplay;

declare interface FMetasoundFrontendClassVariable extends FMetasoundFrontendClassVertex {
    DefaultLiteral: FMetasoundFrontendLiteral;
}
declare const FMetasoundFrontendClassVariable: FMetasoundFrontendClassVariable;

declare interface FMetasoundFrontendClassVertex extends FMetasoundFrontendVertex {
    NodeID: FGuid;
    AccessType: EMetasoundFrontendVertexAccessType;
}
declare const FMetasoundFrontendClassVertex: FMetasoundFrontendClassVertex;

declare interface FMetasoundFrontendDocument {
    MetaData: FMetasoundFrontendDocumentMetadata;
    Interfaces: TSet<FMetasoundFrontendVersion>;
    RootGraph: FMetasoundFrontendGraphClass;
    Subgraphs: TArray<FMetasoundFrontendGraphClass>;
    Dependencies: TArray<FMetasoundFrontendClass>;
    IDCounter: uint32;
}
declare const FMetasoundFrontendDocument: FMetasoundFrontendDocument;

declare interface FMetasoundFrontendDocumentMetadata {
    Version: FMetasoundFrontendVersion;
}
declare const FMetasoundFrontendDocumentMetadata: FMetasoundFrontendDocumentMetadata;

declare interface FMetasoundFrontendEdge {
    FromNodeID: FGuid;
    FromVertexID: FGuid;
    ToNodeID: FGuid;
    ToVertexID: FGuid;
}
declare const FMetasoundFrontendEdge: FMetasoundFrontendEdge;

declare interface FMetasoundFrontendEdgeStyle {
    NodeID: FGuid;
    OutputName: FName;
    LiteralColorPairs: TArray<FMetasoundFrontendEdgeStyleLiteralColorPair>;
}
declare const FMetasoundFrontendEdgeStyle: FMetasoundFrontendEdgeStyle;

declare interface FMetasoundFrontendEdgeStyleLiteralColorPair {
    Value: FMetasoundFrontendLiteral;
    Color: FLinearColor;
}
declare const FMetasoundFrontendEdgeStyleLiteralColorPair: FMetasoundFrontendEdgeStyleLiteralColorPair;

declare interface FMetasoundFrontendGraph {
    Nodes: TArray<FMetasoundFrontendNode>;
    Edges: TArray<FMetasoundFrontendEdge>;
    Variables: TArray<FMetasoundFrontendVariable>;
    PageID: FGuid;
}
declare const FMetasoundFrontendGraph: FMetasoundFrontendGraph;

declare interface FMetasoundFrontendGraphClass extends FMetasoundFrontendClass {
    PagedGraphs: TArray<FMetasoundFrontendGraph>;
    PresetOptions: FMetasoundFrontendGraphClassPresetOptions;
}
declare const FMetasoundFrontendGraphClass: FMetasoundFrontendGraphClass;

declare interface FMetasoundFrontendGraphClassPresetOptions {
    bIsPreset: boolean;
    InputsInheritingDefault: TSet<FName>;
}
declare const FMetasoundFrontendGraphClassPresetOptions: FMetasoundFrontendGraphClassPresetOptions;

declare interface FMetasoundFrontendGraphStyle {

}
declare const FMetasoundFrontendGraphStyle: FMetasoundFrontendGraphStyle;

declare interface FMetasoundFrontendInterface extends FMetasoundFrontendClassInterface {
    MetaData: FMetasoundFrontendInterfaceMetadata;
}
declare const FMetasoundFrontendInterface: FMetasoundFrontendInterface;

declare interface FMetasoundFrontendInterfaceBinding {
    OutputInterfaceVersion: FMetasoundFrontendVersion;
    InputInterfaceVersion: FMetasoundFrontendVersion;
    BindingPriority: number;
    VertexBindings: TArray<FMetasoundFrontendInterfaceVertexBinding>;
}
declare const FMetasoundFrontendInterfaceBinding: FMetasoundFrontendInterfaceBinding;

declare interface FMetasoundFrontendInterfaceMetadata {
    Version: FMetasoundFrontendVersion;
    UClassOptions: TArray<FMetasoundFrontendInterfaceUClassOptions>;
}
declare const FMetasoundFrontendInterfaceMetadata: FMetasoundFrontendInterfaceMetadata;

declare interface FMetasoundFrontendInterfaceStyle {

}
declare const FMetasoundFrontendInterfaceStyle: FMetasoundFrontendInterfaceStyle;

declare interface FMetasoundFrontendInterfaceUClassOptions {
    ClassPath: FTopLevelAssetPath;
    bIsModifiable: boolean;
    bIsDefault: boolean;
}
declare const FMetasoundFrontendInterfaceUClassOptions: FMetasoundFrontendInterfaceUClassOptions;

declare interface FMetasoundFrontendInterfaceVertexBinding {
    OutputName: FName;
    InputName: FName;
}
declare const FMetasoundFrontendInterfaceVertexBinding: FMetasoundFrontendInterfaceVertexBinding;

declare interface FMetasoundFrontendLiteral {
    Type: EMetasoundFrontendLiteralType;
    AsNumDefault: number;
    AsBoolean: TArray<boolean>;
    AsInteger: TArray<number>;
    AsFloat: TArray<number>;
    AsString: TArray<FString>;
    AsUObject: TArray<UObject>;
}
declare const FMetasoundFrontendLiteral: FMetasoundFrontendLiteral;

declare interface FMetasoundFrontendNode {
    ID: FGuid;
    ClassID: FGuid;
    Name: FName;
    Interface: FMetasoundFrontendNodeInterface;
    InputLiterals: TArray<FMetasoundFrontendVertexLiteral>;
    Configuration: FInstancedStruct;
    ClassInterfaceOverride: FInstancedStruct;
}
declare const FMetasoundFrontendNode: FMetasoundFrontendNode;

declare interface FMetasoundFrontendNodeInterface {
    Inputs: TArray<FMetasoundFrontendVertex>;
    Outputs: TArray<FMetasoundFrontendVertex>;
    Environment: TArray<FMetasoundFrontendVertex>;
}
declare const FMetasoundFrontendNodeInterface: FMetasoundFrontendNodeInterface;

declare interface FMetasoundFrontendNodeStyle {

}
declare const FMetasoundFrontendNodeStyle: FMetasoundFrontendNodeStyle;

declare interface FMetasoundFrontendNodeStyleDisplay {

}
declare const FMetasoundFrontendNodeStyleDisplay: FMetasoundFrontendNodeStyleDisplay;

declare interface FMetasoundFrontendVariable {
    Name: FName;
    TypeName: FName;
    Literal: FMetasoundFrontendLiteral;
    ID: FGuid;
    VariableNodeID: FGuid;
    MutatorNodeID: FGuid;
    AccessorNodeIDs: TArray<FGuid>;
    DeferredAccessorNodeIDs: TArray<FGuid>;
}
declare const FMetasoundFrontendVariable: FMetasoundFrontendVariable;

declare interface FMetasoundFrontendVersion {
    Name: FName;
    Number: FMetasoundFrontendVersionNumber;
}
declare const FMetasoundFrontendVersion: FMetasoundFrontendVersion;

declare interface FMetasoundFrontendVersionNumber {
    Major: number;
    Minor: number;
}
declare const FMetasoundFrontendVersionNumber: FMetasoundFrontendVersionNumber;

declare interface FMetasoundFrontendVertex {
    Name: FName;
    TypeName: FName;
    VertexID: FGuid;
}
declare const FMetasoundFrontendVertex: FMetasoundFrontendVertex;

declare interface FMetasoundFrontendVertexHandle {
    NodeID: FGuid;
    VertexID: FGuid;
}
declare const FMetasoundFrontendVertexHandle: FMetasoundFrontendVertexHandle;

declare interface FMetasoundFrontendVertexLiteral {
    VertexID: FGuid;
    Value: FMetasoundFrontendLiteral;
}
declare const FMetasoundFrontendVertexLiteral: FMetasoundFrontendVertexLiteral;

declare interface FMetasoundFrontendVertexMetadata {

}
declare const FMetasoundFrontendVertexMetadata: FMetasoundFrontendVertexMetadata;

declare interface FNodeTemplateGenerateInterfaceParams {
    InputsToConnect: TArray<FName>;
    OutputsToConnect: TArray<FName>;
}
declare const FNodeTemplateGenerateInterfaceParams: FNodeTemplateGenerateInterfaceParams;

declare interface IMetaSoundDocumentInterface extends IInterface {

}
declare const IMetaSoundDocumentInterface: IMetaSoundDocumentInterface;

declare interface UMetaSoundBuilderDocument extends UObject {
    Document: FMetasoundFrontendDocument;
    MetaSoundUClass: UClass;
    BuilderUClass: UClass;
}
declare const UMetaSoundBuilderDocument: UMetaSoundBuilderDocument;

declare interface UMetaSoundFrontendMemberMetadata extends UObject {

}
declare const UMetaSoundFrontendMemberMetadata: UMetaSoundFrontendMemberMetadata;

declare interface UMetasoundParameterPack extends UObject {
    SetTrigger(ParameterName: FName, OnlyIfExists: boolean): ESetParamResult;
    SetString(ParameterName: FName, InValue: string | FString, OnlyIfExists: boolean): ESetParamResult;
    SetInt(ParameterName: FName, InValue: number, OnlyIfExists: boolean): ESetParamResult;
    SetFloat(ParameterName: FName, InValue: number, OnlyIfExists: boolean): ESetParamResult;
    SetBool(ParameterName: FName, InValue: boolean, OnlyIfExists: boolean): ESetParamResult;
    MakeMetasoundParameterPack(): UMetasoundParameterPack;
    HasTrigger(ParameterName: FName): boolean;
    HasString(ParameterName: FName): boolean;
    HasInt(ParameterName: FName): boolean;
    HasFloat(ParameterName: FName): boolean;
    HasBool(ParameterName: FName): boolean;
    GetTrigger(ParameterName: FName, Result: ESetParamResult): boolean;
    GetString(ParameterName: FName, Result: ESetParamResult): FString;
    GetInt(ParameterName: FName, Result: ESetParamResult): number;
    GetFloat(ParameterName: FName, Result: ESetParamResult): number;
    GetBool(ParameterName: FName, Result: ESetParamResult): boolean;
}
declare const UMetasoundParameterPack: UMetasoundParameterPack;

