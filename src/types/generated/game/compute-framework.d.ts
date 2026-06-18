declare interface FArrayShaderValue {
    ArrayOfValues: number[];
}

declare interface FComputeGraphEdge {
    KernelIndex: number;
    KernelBindingIndex: number;
    DataInterfaceIndex: number;
    DataInterfaceBindingIndex: number;
    bKernelInput: boolean;
    BindingFunctionNameOverride: string;
    BindingFunctionNamespace: string;
}

declare interface FComputeGraphInstance {
    DataProviders: UComputeDataProvider[];
}

declare interface FComputeKernelDefinition {
    Symbol: string;
    Define: string;
}

declare interface FComputeKernelDefinitionSet {
    Defines: FComputeKernelDefinition[];
}

declare interface FComputeKernelPermutationBool {
    Name: string;
    Value: boolean;
}

declare interface FComputeKernelPermutationSet {
    BooleanOptions: FComputeKernelPermutationBool[];
}

declare interface FComputeKernelPermutationVector {
    Permutations: TMap<string, number>;
    BitCount: number;
}

declare interface FShaderFunctionDefinition {
    Name: string;
    ParamTypes: FShaderParamTypeDefinition[];
    bHasReturnType: boolean;
}

declare interface FShaderParamTypeDefinition {
    TypeDeclaration: string;
    Name: string;
    ValueType: FShaderValueTypeHandle;
    ArrayElementCount: number;
    BindingType: EShaderParamBindingType;
    ResourceType: EShaderResourceType;
    Modifier: EShaderParamModifier;
}

declare interface FShaderValueContainer {
    ShaderValue: number[];
    ArrayList: FArrayShaderValue[];
}

declare interface FShaderValueType {
    Type: EShaderFundamentalType;
    DimensionType: EShaderFundamentalDimensionType;
    Name: string;
    bIsDynamicArray: boolean;
}

declare type FShaderValueTypeHandle = object;

declare interface UComputeDataInterface extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UComputeDataProvider extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UComputeGraph extends UObject {
    readonly __properties_UComputeGraph: {
        KernelInvocations: UComputeKernel[];
        DataInterfaces: UComputeDataInterface[];
        GraphEdges: FComputeGraphEdge[];
        Bindings: UClass[];
        DataInterfaceToBinding: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeGraph['__properties_UComputeGraph'] &
        UObject['__propertyRegistry'];
}

declare interface UComputeGraphComponent extends UActorComponent {
    readonly __static_UComputeGraphComponent: {
        QueueExecute(): void;
        DestroyDataProviders(): void;
        CreateDataProviders(InBindingIndex: number, InBindingObject: UObject): void;
    };
    readonly __properties_UComputeGraphComponent: {
        ComputeGraph: UComputeGraph;
        ComputeGraphInstance: FComputeGraphInstance;
    };
    readonly __staticRegistry: 
        UComputeGraphComponent['__static_UComputeGraphComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeGraphComponent['__properties_UComputeGraphComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UComputeKernel extends UObject {
    readonly __properties_UComputeKernel: {
        KernelSource: UComputeKernelSource;
        KernelFlags: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeKernel['__properties_UComputeKernel'] &
        UObject['__propertyRegistry'];
}

declare interface UComputeKernelFromText extends UComputeKernelSource {
    readonly __properties_UComputeKernelFromText: {
        SourceFile: FFilePath;
    };
    readonly __staticRegistry: 
        UComputeKernelSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeKernelFromText['__properties_UComputeKernelFromText'] &
        UComputeKernelSource['__propertyRegistry'];
}

declare interface UComputeKernelSource extends UObject {
    readonly __properties_UComputeKernelSource: {
        EntryPoint: string;
        GroupSize: FIntVector;
        PermutationSet: FComputeKernelPermutationSet;
        DefinitionsSet: FComputeKernelDefinitionSet;
        AdditionalSources: UComputeSource[];
        ExternalInputs: FShaderFunctionDefinition[];
        ExternalOutputs: FShaderFunctionDefinition[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeKernelSource['__properties_UComputeKernelSource'] &
        UObject['__propertyRegistry'];
}

declare interface UComputeSource extends UObject {
    readonly __properties_UComputeSource: {
        AdditionalSources: UComputeSource[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeSource['__properties_UComputeSource'] &
        UObject['__propertyRegistry'];
}

declare interface UComputeSourceFromText extends UComputeSource {
    readonly __properties_UComputeSourceFromText: {
        SourceFile: FFilePath;
    };
    readonly __staticRegistry: 
        UComputeSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UComputeSourceFromText['__properties_UComputeSourceFromText'] &
        UComputeSource['__propertyRegistry'];
}

