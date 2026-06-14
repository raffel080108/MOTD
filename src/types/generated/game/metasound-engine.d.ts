declare interface FDefaultMetaSoundAssetAutoUpdateSettings {
    MetaSound: FSoftObjectPath;
}
declare const FDefaultMetaSoundAssetAutoUpdateSettings: FDefaultMetaSoundAssetAutoUpdateSettings;

declare interface FMetaSoundAssetDirectory {
    Directory: FDirectoryPath;
}
declare const FMetaSoundAssetDirectory: FMetaSoundAssetDirectory;

declare interface FMetaSoundAsyncAssetDependencies {
    MetaSound: UObject;
}
declare const FMetaSoundAsyncAssetDependencies: FMetaSoundAsyncAssetDependencies;

declare interface FMetaSoundBuilderNodeInputHandle extends FMetasoundFrontendVertexHandle {

}
declare const FMetaSoundBuilderNodeInputHandle: FMetaSoundBuilderNodeInputHandle;

declare interface FMetaSoundBuilderNodeOutputHandle extends FMetasoundFrontendVertexHandle {

}
declare const FMetaSoundBuilderNodeOutputHandle: FMetaSoundBuilderNodeOutputHandle;

declare interface FMetaSoundBuilderOptions {
    Name: FName;
    bForceUniqueClassName: boolean;
    bAddToRegistry: boolean;
    ExistingMetaSound: TScriptInterface<IMetaSoundDocumentInterface>;
}
declare const FMetaSoundBuilderOptions: FMetaSoundBuilderOptions;

declare interface FMetaSoundNodeHandle {
    NodeID: FGuid;
}
declare const FMetaSoundNodeHandle: FMetaSoundNodeHandle;

declare interface FMetaSoundOutput extends FSoundGeneratorOutput {

}
declare const FMetaSoundOutput: FMetaSoundOutput;

declare interface FMetaSoundPageSettings {
    UniqueID: FGuid;
    Name: FName;
}
declare const FMetaSoundPageSettings: FMetaSoundPageSettings;

declare interface FMetaSoundQualitySettings {
    UniqueID: FGuid;
    Name: FName;
    SampleRate: FPerPlatformInt;
    BlockRate: FPerPlatformFloat;
}
declare const FMetaSoundQualitySettings: FMetaSoundQualitySettings;

declare interface UMetaSoundAssetSubsystem extends UEngineSubsystem {
    UnregisterAssetClassesInDirectories(Directories: TArray<FMetaSoundAssetDirectory>): void;
    RegisterAssetClassesInDirectories(Directories: TArray<FMetaSoundAssetDirectory>): void;
}
declare const UMetaSoundAssetSubsystem: UMetaSoundAssetSubsystem;

declare interface UMetaSoundBuilderBase extends UObject {
    builder: FMetaSoundFrontendDocumentBuilder;
    SetNodeInputDefault(NodeInputHandle: FMetaSoundBuilderNodeInputHandle, Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): void;
    SetGraphOutputName(OutputName: FName, NewName: FName, OutResult: EMetaSoundBuilderResult): void;
    SetGraphOutputDataType(OutputName: FName, DataType: FName, OutResult: EMetaSoundBuilderResult): void;
    SetGraphOutputAccessType(OutputName: FName, AccessType: EMetasoundFrontendVertexAccessType, OutResult: EMetaSoundBuilderResult): void;
    SetGraphInputName(InputName: FName, NewName: FName, OutResult: EMetaSoundBuilderResult): void;
    SetGraphInputDefault(InputName: FName, Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): void;
    SetGraphInputDataType(InputName: FName, DataType: FName, OutResult: EMetaSoundBuilderResult): void;
    SetGraphInputAccessType(InputName: FName, AccessType: EMetasoundFrontendVertexAccessType, OutResult: EMetaSoundBuilderResult): void;
    RemoveUnusedDependencies(): void;
    RemoveNodeInputDefault(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
    RemoveNode(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult, bRemoveUnusedDependencies: boolean): void;
    RemoveInterface(InterfaceName: FName, OutResult: EMetaSoundBuilderResult): void;
    RemoveGraphVariable(Name: FName, OutResult: EMetaSoundBuilderResult): void;
    RemoveGraphOutput(Name: FName, OutResult: EMetaSoundBuilderResult): void;
    RemoveGraphInput(Name: FName, OutResult: EMetaSoundBuilderResult): void;
    NodesAreConnected(OutputHandle: FMetaSoundBuilderNodeOutputHandle, InputHandle: FMetaSoundBuilderNodeInputHandle): boolean;
    NodeOutputIsConnected(OutputHandle: FMetaSoundBuilderNodeOutputHandle): boolean;
    NodeInputIsConnected(InputHandle: FMetaSoundBuilderNodeInputHandle): boolean;
    IsPreset(): boolean;
    InterfaceIsDeclared(InterfaceName: FName): boolean;
    GetRootGraphClassName(): FMetasoundFrontendClassName;
    GetReferencedPresetAsset(): UObject;
    GetNodeOutputIsConstructorPin(OutputHandle: FMetaSoundBuilderNodeOutputHandle): boolean;
    GetNodeOutputData(OutputHandle: FMetaSoundBuilderNodeOutputHandle, Name: FName, DataType: FName, OutResult: EMetaSoundBuilderResult): void;
    GetNodeInputIsConstructorPin(InputHandle: FMetaSoundBuilderNodeInputHandle): boolean;
    GetNodeInputDefault(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
    GetNodeInputData(InputHandle: FMetaSoundBuilderNodeInputHandle, Name: FName, DataType: FName, OutResult: EMetaSoundBuilderResult): void;
    GetNodeInputClassDefault(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
    GetGraphVariableDefault(VariableName: FName, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
    GetGraphOutputNames(OutResult: EMetaSoundBuilderResult): TArray<FName>;
    GetGraphInputNames(OutResult: EMetaSoundBuilderResult): TArray<FName>;
    GetGraphInputDefault(InputName: FName, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
    FindNodeOutputsByDataType(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult, DataType: FName): TArray<FMetaSoundBuilderNodeOutputHandle>;
    FindNodeOutputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): TArray<FMetaSoundBuilderNodeOutputHandle>;
    FindNodeOutputParent(OutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    FindNodeOutputByName(NodeHandle: FMetaSoundNodeHandle, OutputName: FName, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeOutputHandle;
    FindNodeInputsByDataType(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult, DataType: FName): TArray<FMetaSoundBuilderNodeInputHandle>;
    FindNodeInputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): TArray<FMetaSoundBuilderNodeInputHandle>;
    FindNodeInputParent(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    FindNodeInputByName(NodeHandle: FMetaSoundNodeHandle, InputName: FName, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeInputHandle;
    FindNodeClassVersion(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendVersion;
    FindInterfaceOutputNodes(InterfaceName: FName, OutResult: EMetaSoundBuilderResult): TArray<FMetaSoundNodeHandle>;
    FindInterfaceInputNodes(InterfaceName: FName, OutResult: EMetaSoundBuilderResult): TArray<FMetaSoundNodeHandle>;
    FindGraphOutputNode(OutputName: FName, OutDataType: FName, NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    FindGraphInputNode(InputName: FName, OutDataType: FName, NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    DisconnectNodesByInterfaceBindings(FromNodeHandle: FMetaSoundNodeHandle, ToNodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): void;
    DisconnectNodes(NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
    DisconnectNodeOutput(NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): void;
    DisconnectNodeInput(NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
    ConvertToPreset(ReferencedNodeClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): void;
    ConvertFromPreset(OutResult: EMetaSoundBuilderResult): void;
    ContainsNodeOutput(Output: FMetaSoundBuilderNodeOutputHandle): boolean;
    ContainsNodeInput(Input: FMetaSoundBuilderNodeInputHandle): boolean;
    ContainsNode(Node: FMetaSoundNodeHandle): boolean;
    ConnectNodesByInterfaceBindings(FromNodeHandle: FMetaSoundNodeHandle, ToNodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): void;
    ConnectNodes(NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
    ConnectNodeOutputToGraphOutput(GraphOutputName: FName, NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): void;
    ConnectNodeOutputsToMatchingGraphInterfaceOutputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): TArray<FMetaSoundBuilderNodeInputHandle>;
    ConnectNodeInputToGraphInput(GraphInputName: FName, NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
    ConnectNodeInputsToMatchingGraphInterfaceInputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): TArray<FMetaSoundBuilderNodeOutputHandle>;
    BuildNewMetaSound(NameBase: FName): TScriptInterface<IMetaSoundDocumentInterface>;
    BuildAndOverwriteMetaSound(ExistingMetaSound: TScriptInterface<IMetaSoundDocumentInterface>, bForceUniqueClassName: boolean): void;
    Build(Parent: UObject, Options: FMetaSoundBuilderOptions): TScriptInterface<IMetaSoundDocumentInterface>;
    AddNodeByClassName(ClassName: FMetasoundFrontendClassName, OutResult: EMetaSoundBuilderResult, MajorVersion: number): FMetaSoundNodeHandle;
    AddNode(NodeClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    AddInterface(InterfaceName: FName, OutResult: EMetaSoundBuilderResult): void;
    AddGraphVariableSetNode(Name: FName, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    AddGraphVariableGetNode(Name: FName, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    AddGraphVariableGetDelayedNode(Name: FName, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
    AddGraphVariable(Name: FName, DataType: FName, DefaultValue: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): void;
    AddGraphOutputNode(Name: FName, DataType: FName, DefaultValue: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult, bIsConstructorOutput: boolean): FMetaSoundBuilderNodeInputHandle;
    AddGraphInputNode(Name: FName, DataType: FName, DefaultValue: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult, bIsConstructorInput: boolean): FMetaSoundBuilderNodeOutputHandle;
}
declare const UMetaSoundBuilderBase: UMetaSoundBuilderBase;

declare interface UMetaSoundBuilderSubsystem extends UEngineSubsystem {
    NamedBuilders: Record<FName, UMetaSoundBuilderBase>;
    UnregisterSourceBuilder(BuilderName: FName): boolean;
    UnregisterPatchBuilder(BuilderName: FName): boolean;
    UnregisterBuilder(BuilderName: FName): boolean;
    SetTargetPage(PageName: FName): boolean;
    RegisterSourceBuilder(BuilderName: FName, builder: UMetaSoundSourceBuilder): void;
    RegisterPatchBuilder(BuilderName: FName, builder: UMetaSoundPatchBuilder): void;
    RegisterBuilder(BuilderName: FName, builder: UMetaSoundBuilderBase): void;
    IsInterfaceRegistered(InInterfaceName: FName): boolean;
    FindSourceBuilder(BuilderName: FName): UMetaSoundSourceBuilder;
    FindPatchBuilder(BuilderName: FName): UMetaSoundPatchBuilder;
    FindBuilderOfDocument(InMetaSound: TScriptInterface<IMetaSoundDocumentInterface>): UMetaSoundBuilderBase;
    FindBuilder(BuilderName: FName): UMetaSoundBuilderBase;
    CreateStringMetaSoundLiteral(Value: string | FString, DataType: FName): FMetasoundFrontendLiteral;
    CreateStringArrayMetaSoundLiteral(Value: string | FString[], DataType: FName): FMetasoundFrontendLiteral;
    CreateSourcePresetBuilder(BuilderName: FName, ReferencedSourceClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): UMetaSoundSourceBuilder;
    CreateSourceBuilder(BuilderName: FName, OnPlayNodeOutput: FMetaSoundBuilderNodeOutputHandle, OnFinishedNodeInput: FMetaSoundBuilderNodeInputHandle, AudioOutNodeInputs: TArray<FMetaSoundBuilderNodeInputHandle>, OutResult: EMetaSoundBuilderResult, OutputFormat: EMetaSoundOutputAudioFormat, bIsOneShot: boolean): UMetaSoundSourceBuilder;
    CreatePatchPresetBuilder(BuilderName: FName, ReferencedPatchClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): UMetaSoundPatchBuilder;
    CreatePatchBuilder(BuilderName: FName, OutResult: EMetaSoundBuilderResult): UMetaSoundPatchBuilder;
    CreateObjectMetaSoundLiteral(Value: UObject): FMetasoundFrontendLiteral;
    CreateObjectArrayMetaSoundLiteral(Value: TArray<UObject>): FMetasoundFrontendLiteral;
    CreateMetaSoundLiteralFromParam(Param: FAudioParameter): FMetasoundFrontendLiteral;
    CreateIntMetaSoundLiteral(Value: number, DataType: FName): FMetasoundFrontendLiteral;
    CreateIntArrayMetaSoundLiteral(Value: TArray<number>, DataType: FName): FMetasoundFrontendLiteral;
    CreateFloatMetaSoundLiteral(Value: number, DataType: FName): FMetasoundFrontendLiteral;
    CreateFloatArrayMetaSoundLiteral(Value: TArray<number>, DataType: FName): FMetasoundFrontendLiteral;
    CreateBoolMetaSoundLiteral(Value: boolean, DataType: FName): FMetasoundFrontendLiteral;
    CreateBoolArrayMetaSoundLiteral(Value: TArray<boolean>, DataType: FName): FMetasoundFrontendLiteral;
}
declare const UMetaSoundBuilderSubsystem: UMetaSoundBuilderSubsystem;

declare interface UMetaSoundCacheSubsystem extends UAudioEngineSubsystem {
    TouchOrPrecacheMetaSound(InMetaSound: UMetaSoundSource, InNumInstances: number): void;
    RemoveCachedOperatorsForMetaSound(InMetaSound: UMetaSoundSource): void;
    PrecacheMetaSound(InMetaSound: UMetaSoundSource, InNumInstances: number): void;
}
declare const UMetaSoundCacheSubsystem: UMetaSoundCacheSubsystem;

declare interface UMetaSoundOutputSubsystem extends UWorldSubsystem {
    WatchOutput(AudioComponent: UAudioComponent, OutputName: FName, OnOutputValueChanged: FWatchOutputOnOutputValueChanged, AnalyzerName: FName, AnalyzerOutputName: FName): boolean;
    UnwatchOutput(AudioComponent: UAudioComponent, OutputName: FName, OnOutputValueChanged: FUnwatchOutputOnOutputValueChanged, AnalyzerName: FName, AnalyzerOutputName: FName): boolean;
}
declare const UMetaSoundOutputSubsystem: UMetaSoundOutputSubsystem;

declare interface UMetaSoundPatch extends UObject {
    RootMetaSoundDocument: FMetasoundFrontendDocument;
    ReferencedAssetClassKeys: TSet<FString>;
    ReferencedAssetClassObjects: TSet<UObject>;
    ReferenceAssetClassCache: TSet<FSoftObjectPath>;
}
declare const UMetaSoundPatch: UMetaSoundPatch;

declare interface UMetaSoundPatchBuilder extends UMetaSoundBuilderBase {

}
declare const UMetaSoundPatchBuilder: UMetaSoundPatchBuilder;

declare interface UMetaSoundQualityHelper extends UObject {
    GetQualityNames(): TArray<FName>;
}
declare const UMetaSoundQualityHelper: UMetaSoundQualityHelper;

declare interface UMetaSoundSettings extends UDeveloperSettings {
    bAutoUpdateEnabled: boolean;
    AutoUpdateDenylist: TArray<FMetasoundFrontendClassName>;
    AutoUpdateAssetDenylist: TArray<FDefaultMetaSoundAssetAutoUpdateSettings>;
    bAutoUpdateLogWarningOnDroppedConnection: boolean;
    DirectoriesToRegister: TArray<FDirectoryPath>;
    DenyListCacheChangeID: number;
    TargetPageName: FName;
    DefaultPageSettings: FMetaSoundPageSettings;
    PageSettings: TArray<FMetaSoundPageSettings>;
    QualitySettings: TArray<FMetaSoundQualitySettings>;
}
declare const UMetaSoundSettings: UMetaSoundSettings;

declare interface UMetaSoundSource extends USoundWaveProcedural {
    RootMetaSoundDocument: FMetasoundFrontendDocument;
    ReferencedAssetClassKeys: TSet<FString>;
    ReferencedAssetClassObjects: TSet<UObject>;
    ReferenceAssetClassCache: TSet<FSoftObjectPath>;
    OutputFormat: EMetaSoundOutputAudioFormat;
}
declare const UMetaSoundSource: UMetaSoundSource;

declare interface UMetaSoundSourceBuilder extends UMetaSoundBuilderBase {
    SetSampleRateOverride(SampleRate: number): void;
    SetQuality(Quality: FName): void;
    SetFormat(OutputFormat: EMetaSoundOutputAudioFormat, OutResult: EMetaSoundBuilderResult): void;
    SetBlockRateOverride(BlockRate: number): void;
    GetLiveUpdatesEnabled(): boolean;
    Audition(Parent: UObject, AudioComponent: UAudioComponent, OnCreateGenerator: FAuditionOnCreateGenerator, bLiveUpdatesEnabled: boolean): void;
}
declare const UMetaSoundSourceBuilder: UMetaSoundSourceBuilder;

declare interface UMetasoundEditorGraphBase extends UEdGraph {

}
declare const UMetasoundEditorGraphBase: UMetasoundEditorGraphBase;

declare interface UMetasoundFrontendLiteralBlueprintAccess extends UBlueprintFunctionLibrary {
    GetType(Literal: FMetasoundFrontendLiteral): EMetasoundFrontendLiteralType;
    GetStringValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): FString;
    GetStringArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): TArray<FString>;
    GetObjectValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): UObject;
    GetObjectArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): TArray<UObject>;
    GetIntValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): number;
    GetIntArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): TArray<number>;
    GetFloatValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): number;
    GetFloatArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): TArray<number>;
    GetBoolValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): boolean;
    GetBoolArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): TArray<boolean>;
    CreateStringMetaSoundLiteral(Value: string | FString): FMetasoundFrontendLiteral;
    CreateStringArrayMetaSoundLiteral(Value: string | FString[]): FMetasoundFrontendLiteral;
    CreateObjectMetaSoundLiteral(Value: UObject): FMetasoundFrontendLiteral;
    CreateObjectArrayMetaSoundLiteral(Value: TArray<UObject>): FMetasoundFrontendLiteral;
    CreateMetaSoundLiteralFromParam(Param: FAudioParameter): FMetasoundFrontendLiteral;
    CreateIntMetaSoundLiteral(Value: number): FMetasoundFrontendLiteral;
    CreateIntArrayMetaSoundLiteral(Value: TArray<number>): FMetasoundFrontendLiteral;
    CreateFloatMetaSoundLiteral(Value: number): FMetasoundFrontendLiteral;
    CreateFloatArrayMetaSoundLiteral(Value: TArray<number>): FMetasoundFrontendLiteral;
    CreateBoolMetaSoundLiteral(Value: boolean): FMetasoundFrontendLiteral;
    CreateBoolArrayMetaSoundLiteral(Value: TArray<boolean>): FMetasoundFrontendLiteral;
    Conv_MetaSoundLiteralToString(Literal: FMetasoundFrontendLiteral): FString;
}
declare const UMetasoundFrontendLiteralBlueprintAccess: UMetasoundFrontendLiteralBlueprintAccess;

declare interface UMetasoundGeneratorHandle extends UObject {
    WatchOutput(OutputName: FName, OnOutputValueChanged: FWatchOutputOnOutputValueChanged, AnalyzerName: FName, AnalyzerOutputName: FName): boolean;
    UpdateWatchers(): void;
    GetCPUCoreUtilization(): number;
    EnableRuntimeRenderTiming(Enable: boolean): void;
    CreateMetaSoundGeneratorHandle(OnComponent: UAudioComponent): UMetasoundGeneratorHandle;
    ApplyParameterPack(Pack: UMetasoundParameterPack): boolean;
}
declare const UMetasoundGeneratorHandle: UMetasoundGeneratorHandle;

declare interface UMetasoundOutputBlueprintAccess extends UBlueprintFunctionLibrary {
    IsTime(Output: FMetaSoundOutput): boolean;
    IsString(Output: FMetaSoundOutput): boolean;
    IsInt32(Output: FMetaSoundOutput): boolean;
    IsFloat(Output: FMetaSoundOutput): boolean;
    IsBool(Output: FMetaSoundOutput): boolean;
    GetTimeSeconds(Output: FMetaSoundOutput, success: boolean): number;
    GetString(Output: FMetaSoundOutput, success: boolean): FString;
    GetInt32(Output: FMetaSoundOutput, success: boolean): number;
    GetFloat(Output: FMetaSoundOutput, success: boolean): number;
    GetBool(Output: FMetaSoundOutput, success: boolean): boolean;
}
declare const UMetasoundOutputBlueprintAccess: UMetasoundOutputBlueprintAccess;

