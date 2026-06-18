declare interface FDefaultMetaSoundAssetAutoUpdateSettings {
    MetaSound: FSoftObjectPath;
}

declare interface FMetaSoundAssetDirectory {
    Directory: FDirectoryPath;
}

declare interface FMetaSoundAsyncAssetDependencies {
    MetaSound: UObject;
}

declare interface FMetaSoundBuilderNodeInputHandle extends FMetasoundFrontendVertexHandle {

}

declare interface FMetaSoundBuilderNodeOutputHandle extends FMetasoundFrontendVertexHandle {

}

declare interface FMetaSoundBuilderOptions {
    Name: string;
    bForceUniqueClassName: boolean;
    bAddToRegistry: boolean;
    ExistingMetaSound: TScriptInterface<IMetaSoundDocumentInterface>;
}

declare interface FMetaSoundNodeHandle {
    NodeID: FGuid;
}

declare interface FMetaSoundOutput extends FSoundGeneratorOutput {

}

declare interface FMetaSoundPageSettings {
    UniqueID: FGuid;
    Name: string;
}

declare interface FMetaSoundQualitySettings {
    UniqueID: FGuid;
    Name: string;
    SampleRate: FPerPlatformInt;
    BlockRate: FPerPlatformFloat;
}

declare interface UMetaSoundAssetSubsystem extends UEngineSubsystem {
    readonly __static_UMetaSoundAssetSubsystem: {
        UnregisterAssetClassesInDirectories(Directories: FMetaSoundAssetDirectory[]): void;
        RegisterAssetClassesInDirectories(Directories: FMetaSoundAssetDirectory[]): void;
    };
    readonly __staticRegistry: 
        UMetaSoundAssetSubsystem['__static_UMetaSoundAssetSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UMetaSoundBuilderBase extends UObject {
    readonly __static_UMetaSoundBuilderBase: {
        SetNodeInputDefault(NodeInputHandle: FMetaSoundBuilderNodeInputHandle, Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): void;
        SetGraphOutputName(OutputName: string, NewName: string, OutResult: EMetaSoundBuilderResult): void;
        SetGraphOutputDataType(OutputName: string, DataType: string, OutResult: EMetaSoundBuilderResult): void;
        SetGraphOutputAccessType(OutputName: string, AccessType: EMetasoundFrontendVertexAccessType, OutResult: EMetaSoundBuilderResult): void;
        SetGraphInputName(InputName: string, NewName: string, OutResult: EMetaSoundBuilderResult): void;
        SetGraphInputDefault(InputName: string, Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): void;
        SetGraphInputDataType(InputName: string, DataType: string, OutResult: EMetaSoundBuilderResult): void;
        SetGraphInputAccessType(InputName: string, AccessType: EMetasoundFrontendVertexAccessType, OutResult: EMetaSoundBuilderResult): void;
        RemoveUnusedDependencies(): void;
        RemoveNodeInputDefault(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
        RemoveNode(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult, bRemoveUnusedDependencies: boolean): void;
        RemoveInterface(InterfaceName: string, OutResult: EMetaSoundBuilderResult): void;
        RemoveGraphVariable(Name: string, OutResult: EMetaSoundBuilderResult): void;
        RemoveGraphOutput(Name: string, OutResult: EMetaSoundBuilderResult): void;
        RemoveGraphInput(Name: string, OutResult: EMetaSoundBuilderResult): void;
        NodesAreConnected(OutputHandle: FMetaSoundBuilderNodeOutputHandle, InputHandle: FMetaSoundBuilderNodeInputHandle): boolean;
        NodeOutputIsConnected(OutputHandle: FMetaSoundBuilderNodeOutputHandle): boolean;
        NodeInputIsConnected(InputHandle: FMetaSoundBuilderNodeInputHandle): boolean;
        IsPreset(): boolean;
        InterfaceIsDeclared(InterfaceName: string): boolean;
        GetRootGraphClassName(): FMetasoundFrontendClassName;
        GetReferencedPresetAsset(): UObject;
        GetNodeOutputIsConstructorPin(OutputHandle: FMetaSoundBuilderNodeOutputHandle): boolean;
        GetNodeOutputData(OutputHandle: FMetaSoundBuilderNodeOutputHandle, Name: string, DataType: string, OutResult: EMetaSoundBuilderResult): void;
        GetNodeInputIsConstructorPin(InputHandle: FMetaSoundBuilderNodeInputHandle): boolean;
        GetNodeInputDefault(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
        GetNodeInputData(InputHandle: FMetaSoundBuilderNodeInputHandle, Name: string, DataType: string, OutResult: EMetaSoundBuilderResult): void;
        GetNodeInputClassDefault(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
        GetGraphVariableDefault(VariableName: string, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
        GetGraphOutputNames(OutResult: EMetaSoundBuilderResult): string[];
        GetGraphInputNames(OutResult: EMetaSoundBuilderResult): string[];
        GetGraphInputDefault(InputName: string, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendLiteral;
        FindNodeOutputsByDataType(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult, DataType: string): FMetaSoundBuilderNodeOutputHandle[];
        FindNodeOutputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeOutputHandle[];
        FindNodeOutputParent(OutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        FindNodeOutputByName(NodeHandle: FMetaSoundNodeHandle, OutputName: string, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeOutputHandle;
        FindNodeInputsByDataType(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult, DataType: string): FMetaSoundBuilderNodeInputHandle[];
        FindNodeInputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeInputHandle[];
        FindNodeInputParent(InputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        FindNodeInputByName(NodeHandle: FMetaSoundNodeHandle, InputName: string, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeInputHandle;
        FindNodeClassVersion(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): FMetasoundFrontendVersion;
        FindInterfaceOutputNodes(InterfaceName: string, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle[];
        FindInterfaceInputNodes(InterfaceName: string, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle[];
        FindGraphOutputNode(OutputName: string, OutDataType: string, NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        FindGraphInputNode(InputName: string, OutDataType: string, NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
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
        ConnectNodeOutputToGraphOutput(GraphOutputName: string, NodeOutputHandle: FMetaSoundBuilderNodeOutputHandle, OutResult: EMetaSoundBuilderResult): void;
        ConnectNodeOutputsToMatchingGraphInterfaceOutputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeInputHandle[];
        ConnectNodeInputToGraphInput(GraphInputName: string, NodeInputHandle: FMetaSoundBuilderNodeInputHandle, OutResult: EMetaSoundBuilderResult): void;
        ConnectNodeInputsToMatchingGraphInterfaceInputs(NodeHandle: FMetaSoundNodeHandle, OutResult: EMetaSoundBuilderResult): FMetaSoundBuilderNodeOutputHandle[];
        BuildNewMetaSound(NameBase: string): TScriptInterface<IMetaSoundDocumentInterface>;
        BuildAndOverwriteMetaSound(ExistingMetaSound: TScriptInterface<IMetaSoundDocumentInterface>, bForceUniqueClassName: boolean): void;
        Build(Parent: UObject, Options: FMetaSoundBuilderOptions): TScriptInterface<IMetaSoundDocumentInterface>;
        AddNodeByClassName(ClassName: FMetasoundFrontendClassName, OutResult: EMetaSoundBuilderResult, MajorVersion: number): FMetaSoundNodeHandle;
        AddNode(NodeClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        AddInterface(InterfaceName: string, OutResult: EMetaSoundBuilderResult): void;
        AddGraphVariableSetNode(Name: string, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        AddGraphVariableGetNode(Name: string, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        AddGraphVariableGetDelayedNode(Name: string, OutResult: EMetaSoundBuilderResult): FMetaSoundNodeHandle;
        AddGraphVariable(Name: string, DataType: string, DefaultValue: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): void;
        AddGraphOutputNode(Name: string, DataType: string, DefaultValue: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult, bIsConstructorOutput: boolean): FMetaSoundBuilderNodeInputHandle;
        AddGraphInputNode(Name: string, DataType: string, DefaultValue: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult, bIsConstructorInput: boolean): FMetaSoundBuilderNodeOutputHandle;
    };
    readonly __properties_UMetaSoundBuilderBase: {
        builder: FMetaSoundFrontendDocumentBuilder;
    };
    readonly __staticRegistry: 
        UMetaSoundBuilderBase['__static_UMetaSoundBuilderBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundBuilderBase['__properties_UMetaSoundBuilderBase'] &
        UObject['__propertyRegistry'];
}

declare interface UMetaSoundBuilderSubsystem extends UEngineSubsystem {
    readonly __static_UMetaSoundBuilderSubsystem: {
        UnregisterSourceBuilder(BuilderName: string): boolean;
        UnregisterPatchBuilder(BuilderName: string): boolean;
        UnregisterBuilder(BuilderName: string): boolean;
        SetTargetPage(PageName: string): boolean;
        RegisterSourceBuilder(BuilderName: string, builder: UMetaSoundSourceBuilder): void;
        RegisterPatchBuilder(BuilderName: string, builder: UMetaSoundPatchBuilder): void;
        RegisterBuilder(BuilderName: string, builder: UMetaSoundBuilderBase): void;
        IsInterfaceRegistered(InInterfaceName: string): boolean;
        FindSourceBuilder(BuilderName: string): UMetaSoundSourceBuilder;
        FindPatchBuilder(BuilderName: string): UMetaSoundPatchBuilder;
        FindBuilderOfDocument(InMetaSound: TScriptInterface<IMetaSoundDocumentInterface>): UMetaSoundBuilderBase;
        FindBuilder(BuilderName: string): UMetaSoundBuilderBase;
        CreateStringMetaSoundLiteral(Value: string, DataType: string): FMetasoundFrontendLiteral;
        CreateStringArrayMetaSoundLiteral(Value: string[], DataType: string): FMetasoundFrontendLiteral;
        CreateSourcePresetBuilder(BuilderName: string, ReferencedSourceClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): UMetaSoundSourceBuilder;
        CreateSourceBuilder(BuilderName: string, OnPlayNodeOutput: FMetaSoundBuilderNodeOutputHandle, OnFinishedNodeInput: FMetaSoundBuilderNodeInputHandle, AudioOutNodeInputs: FMetaSoundBuilderNodeInputHandle[], OutResult: EMetaSoundBuilderResult, OutputFormat: EMetaSoundOutputAudioFormat, bIsOneShot: boolean): UMetaSoundSourceBuilder;
        CreatePatchPresetBuilder(BuilderName: string, ReferencedPatchClass: TScriptInterface<IMetaSoundDocumentInterface>, OutResult: EMetaSoundBuilderResult): UMetaSoundPatchBuilder;
        CreatePatchBuilder(BuilderName: string, OutResult: EMetaSoundBuilderResult): UMetaSoundPatchBuilder;
        CreateObjectMetaSoundLiteral(Value: UObject): FMetasoundFrontendLiteral;
        CreateObjectArrayMetaSoundLiteral(Value: UObject[]): FMetasoundFrontendLiteral;
        CreateMetaSoundLiteralFromParam(Param: FAudioParameter): FMetasoundFrontendLiteral;
        CreateIntMetaSoundLiteral(Value: number, DataType: string): FMetasoundFrontendLiteral;
        CreateIntArrayMetaSoundLiteral(Value: number[], DataType: string): FMetasoundFrontendLiteral;
        CreateFloatMetaSoundLiteral(Value: number, DataType: string): FMetasoundFrontendLiteral;
        CreateFloatArrayMetaSoundLiteral(Value: number[], DataType: string): FMetasoundFrontendLiteral;
        CreateBoolMetaSoundLiteral(Value: boolean, DataType: string): FMetasoundFrontendLiteral;
        CreateBoolArrayMetaSoundLiteral(Value: boolean[], DataType: string): FMetasoundFrontendLiteral;
    };
    readonly __properties_UMetaSoundBuilderSubsystem: {
        NamedBuilders: TMap<string, UMetaSoundBuilderBase>;
    };
    readonly __staticRegistry: 
        UMetaSoundBuilderSubsystem['__static_UMetaSoundBuilderSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundBuilderSubsystem['__properties_UMetaSoundBuilderSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UMetaSoundCacheSubsystem extends UAudioEngineSubsystem {
    readonly __static_UMetaSoundCacheSubsystem: {
        TouchOrPrecacheMetaSound(InMetaSound: UMetaSoundSource, InNumInstances: number): void;
        RemoveCachedOperatorsForMetaSound(InMetaSound: UMetaSoundSource): void;
        PrecacheMetaSound(InMetaSound: UMetaSoundSource, InNumInstances: number): void;
    };
    readonly __staticRegistry: 
        UMetaSoundCacheSubsystem['__static_UMetaSoundCacheSubsystem'] &
        UAudioEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioEngineSubsystem['__propertyRegistry'];
}

declare interface UMetaSoundOutputSubsystem extends UWorldSubsystem {
    readonly __static_UMetaSoundOutputSubsystem: {
        WatchOutput(AudioComponent: UAudioComponent, OutputName: string, OnOutputValueChanged: FWatchOutputOnOutputValueChanged, AnalyzerName: string, AnalyzerOutputName: string): boolean;
        UnwatchOutput(AudioComponent: UAudioComponent, OutputName: string, OnOutputValueChanged: FUnwatchOutputOnOutputValueChanged, AnalyzerName: string, AnalyzerOutputName: string): boolean;
    };
    readonly __staticRegistry: 
        UMetaSoundOutputSubsystem['__static_UMetaSoundOutputSubsystem'] &
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UMetaSoundPatch extends UObject {
    readonly __properties_UMetaSoundPatch: {
        RootMetaSoundDocument: FMetasoundFrontendDocument;
        ReferencedAssetClassKeys: string[];
        ReferencedAssetClassObjects: UObject[];
        ReferenceAssetClassCache: FSoftObjectPath[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundPatch['__properties_UMetaSoundPatch'] &
        UObject['__propertyRegistry'];
}

declare interface UMetaSoundPatchBuilder extends UMetaSoundBuilderBase {
    readonly __staticRegistry: 
        UMetaSoundBuilderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundBuilderBase['__propertyRegistry'];
}

declare interface UMetaSoundQualityHelper extends UObject {
    readonly __static_UMetaSoundQualityHelper: {
        GetQualityNames(): string[];
    };
    readonly __staticRegistry: 
        UMetaSoundQualityHelper['__static_UMetaSoundQualityHelper'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMetaSoundSettings extends UDeveloperSettings {
    readonly __properties_UMetaSoundSettings: {
        bAutoUpdateEnabled: boolean;
        AutoUpdateDenylist: FMetasoundFrontendClassName[];
        AutoUpdateAssetDenylist: FDefaultMetaSoundAssetAutoUpdateSettings[];
        bAutoUpdateLogWarningOnDroppedConnection: boolean;
        DirectoriesToRegister: FDirectoryPath[];
        DenyListCacheChangeID: number;
        TargetPageName: string;
        DefaultPageSettings: FMetaSoundPageSettings;
        PageSettings: FMetaSoundPageSettings[];
        QualitySettings: FMetaSoundQualitySettings[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundSettings['__properties_UMetaSoundSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UMetaSoundSource extends USoundWaveProcedural {
    readonly __properties_UMetaSoundSource: {
        RootMetaSoundDocument: FMetasoundFrontendDocument;
        ReferencedAssetClassKeys: string[];
        ReferencedAssetClassObjects: UObject[];
        ReferenceAssetClassCache: FSoftObjectPath[];
        OutputFormat: EMetaSoundOutputAudioFormat;
    };
    readonly __staticRegistry: 
        USoundWaveProcedural['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundSource['__properties_UMetaSoundSource'] &
        USoundWaveProcedural['__propertyRegistry'];
}

declare interface UMetaSoundSourceBuilder extends UMetaSoundBuilderBase {
    readonly __static_UMetaSoundSourceBuilder: {
        SetSampleRateOverride(SampleRate: number): void;
        SetQuality(Quality: string): void;
        SetFormat(OutputFormat: EMetaSoundOutputAudioFormat, OutResult: EMetaSoundBuilderResult): void;
        SetBlockRateOverride(BlockRate: number): void;
        GetLiveUpdatesEnabled(): boolean;
        Audition(Parent: UObject, AudioComponent: UAudioComponent, OnCreateGenerator: FAuditionOnCreateGenerator, bLiveUpdatesEnabled: boolean): void;
    };
    readonly __staticRegistry: 
        UMetaSoundSourceBuilder['__static_UMetaSoundSourceBuilder'] &
        UMetaSoundBuilderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMetaSoundBuilderBase['__propertyRegistry'];
}

declare interface UMetasoundEditorGraphBase extends UEdGraph {
    readonly __staticRegistry: 
        UEdGraph['__staticRegistry'];
    readonly __propertyRegistry: 
        UEdGraph['__propertyRegistry'];
}

declare interface UMetasoundFrontendLiteralBlueprintAccess extends UBlueprintFunctionLibrary {
    readonly __static_UMetasoundFrontendLiteralBlueprintAccess: {
        GetType(Literal: FMetasoundFrontendLiteral): EMetasoundFrontendLiteralType;
        GetStringValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): string;
        GetStringArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): string[];
        GetObjectValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): UObject;
        GetObjectArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): UObject[];
        GetIntValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): number;
        GetIntArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): number[];
        GetFloatValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): number;
        GetFloatArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): number[];
        GetBoolValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): boolean;
        GetBoolArrayValueFromLiteral(Literal: FMetasoundFrontendLiteral, OutResult: EMetaSoundBuilderResult): boolean[];
        CreateStringMetaSoundLiteral(Value: string): FMetasoundFrontendLiteral;
        CreateStringArrayMetaSoundLiteral(Value: string[]): FMetasoundFrontendLiteral;
        CreateObjectMetaSoundLiteral(Value: UObject): FMetasoundFrontendLiteral;
        CreateObjectArrayMetaSoundLiteral(Value: UObject[]): FMetasoundFrontendLiteral;
        CreateMetaSoundLiteralFromParam(Param: FAudioParameter): FMetasoundFrontendLiteral;
        CreateIntMetaSoundLiteral(Value: number): FMetasoundFrontendLiteral;
        CreateIntArrayMetaSoundLiteral(Value: number[]): FMetasoundFrontendLiteral;
        CreateFloatMetaSoundLiteral(Value: number): FMetasoundFrontendLiteral;
        CreateFloatArrayMetaSoundLiteral(Value: number[]): FMetasoundFrontendLiteral;
        CreateBoolMetaSoundLiteral(Value: boolean): FMetasoundFrontendLiteral;
        CreateBoolArrayMetaSoundLiteral(Value: boolean[]): FMetasoundFrontendLiteral;
        Conv_MetaSoundLiteralToString(Literal: FMetasoundFrontendLiteral): string;
    };
    readonly __staticRegistry: 
        UMetasoundFrontendLiteralBlueprintAccess['__static_UMetasoundFrontendLiteralBlueprintAccess'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMetasoundGeneratorHandle extends UObject {
    readonly __static_UMetasoundGeneratorHandle: {
        WatchOutput(OutputName: string, OnOutputValueChanged: FWatchOutputOnOutputValueChanged, AnalyzerName: string, AnalyzerOutputName: string): boolean;
        UpdateWatchers(): void;
        GetCPUCoreUtilization(): number;
        EnableRuntimeRenderTiming(Enable: boolean): void;
        CreateMetaSoundGeneratorHandle(OnComponent: UAudioComponent): UMetasoundGeneratorHandle;
        ApplyParameterPack(Pack: UMetasoundParameterPack): boolean;
    };
    readonly __staticRegistry: 
        UMetasoundGeneratorHandle['__static_UMetasoundGeneratorHandle'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMetasoundOutputBlueprintAccess extends UBlueprintFunctionLibrary {
    readonly __static_UMetasoundOutputBlueprintAccess: {
        IsTime(Output: FMetaSoundOutput): boolean;
        IsString(Output: FMetaSoundOutput): boolean;
        IsInt32(Output: FMetaSoundOutput): boolean;
        IsFloat(Output: FMetaSoundOutput): boolean;
        IsBool(Output: FMetaSoundOutput): boolean;
        GetTimeSeconds(Output: FMetaSoundOutput, success: boolean): number;
        GetString(Output: FMetaSoundOutput, success: boolean): string;
        GetInt32(Output: FMetaSoundOutput, success: boolean): number;
        GetFloat(Output: FMetaSoundOutput, success: boolean): number;
        GetBool(Output: FMetaSoundOutput, success: boolean): boolean;
    };
    readonly __staticRegistry: 
        UMetasoundOutputBlueprintAccess['__static_UMetasoundOutputBlueprintAccess'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

