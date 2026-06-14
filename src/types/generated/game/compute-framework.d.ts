declare interface FArrayShaderValue {
    ArrayOfValues: TArray<uint8>;
}
declare const FArrayShaderValue: FArrayShaderValue;

declare interface FComputeGraphEdge {
    KernelIndex: number;
    KernelBindingIndex: number;
    DataInterfaceIndex: number;
    DataInterfaceBindingIndex: number;
    bKernelInput: boolean;
    BindingFunctionNameOverride: FString;
    BindingFunctionNamespace: FString;
}
declare const FComputeGraphEdge: FComputeGraphEdge;

declare interface FComputeGraphInstance {
    DataProviders: TArray<UComputeDataProvider>;
}
declare const FComputeGraphInstance: FComputeGraphInstance;

declare interface FComputeKernelDefinition {
    Symbol: FString;
    Define: FString;
}
declare const FComputeKernelDefinition: FComputeKernelDefinition;

declare interface FComputeKernelDefinitionSet {
    Defines: TArray<FComputeKernelDefinition>;
}
declare const FComputeKernelDefinitionSet: FComputeKernelDefinitionSet;

declare interface FComputeKernelPermutationBool {
    Name: FString;
    Value: boolean;
}
declare const FComputeKernelPermutationBool: FComputeKernelPermutationBool;

declare interface FComputeKernelPermutationSet {
    BooleanOptions: TArray<FComputeKernelPermutationBool>;
}
declare const FComputeKernelPermutationSet: FComputeKernelPermutationSet;

declare interface FComputeKernelPermutationVector {
    Permutations: Record<FString, uint32>;
    BitCount: uint32;
}
declare const FComputeKernelPermutationVector: FComputeKernelPermutationVector;

declare interface FShaderFunctionDefinition {
    Name: FString;
    ParamTypes: TArray<FShaderParamTypeDefinition>;
    bHasReturnType: boolean;
}
declare const FShaderFunctionDefinition: FShaderFunctionDefinition;

declare interface FShaderParamTypeDefinition {
    TypeDeclaration: FString;
    Name: FString;
    ValueType: FShaderValueTypeHandle;
    ArrayElementCount: uint16;
    BindingType: EShaderParamBindingType;
    ResourceType: EShaderResourceType;
    Modifier: EShaderParamModifier;
}
declare const FShaderParamTypeDefinition: FShaderParamTypeDefinition;

declare interface FShaderValueContainer {
    ShaderValue: TArray<uint8>;
    ArrayList: TArray<FArrayShaderValue>;
}
declare const FShaderValueContainer: FShaderValueContainer;

declare interface FShaderValueType {
    Type: EShaderFundamentalType;
    DimensionType: EShaderFundamentalDimensionType;
    Name: FName;
    bIsDynamicArray: boolean;
}
declare const FShaderValueType: FShaderValueType;

declare interface FShaderValueTypeHandle {

}
declare const FShaderValueTypeHandle: FShaderValueTypeHandle;

declare interface UComputeDataInterface extends UObject {

}
declare const UComputeDataInterface: UComputeDataInterface;

declare interface UComputeDataProvider extends UObject {

}
declare const UComputeDataProvider: UComputeDataProvider;

declare interface UComputeGraph extends UObject {
    KernelInvocations: TArray<UComputeKernel>;
    DataInterfaces: TArray<UComputeDataInterface>;
    GraphEdges: TArray<FComputeGraphEdge>;
    Bindings: TArray<UClass>;
    DataInterfaceToBinding: TArray<number>;
}
declare const UComputeGraph: UComputeGraph;

declare interface UComputeGraphComponent extends UActorComponent {
    ComputeGraph: UComputeGraph;
    ComputeGraphInstance: FComputeGraphInstance;
    QueueExecute(): void;
    DestroyDataProviders(): void;
    CreateDataProviders(InBindingIndex: number, InBindingObject: UObject): void;
}
declare const UComputeGraphComponent: UComputeGraphComponent;

declare interface UComputeKernel extends UObject {
    KernelSource: UComputeKernelSource;
    KernelFlags: number;
}
declare const UComputeKernel: UComputeKernel;

declare interface UComputeKernelFromText extends UComputeKernelSource {
    SourceFile: FFilePath;
}
declare const UComputeKernelFromText: UComputeKernelFromText;

declare interface UComputeKernelSource extends UObject {
    EntryPoint: FString;
    GroupSize: FIntVector;
    PermutationSet: FComputeKernelPermutationSet;
    DefinitionsSet: FComputeKernelDefinitionSet;
    AdditionalSources: TArray<UComputeSource>;
    ExternalInputs: TArray<FShaderFunctionDefinition>;
    ExternalOutputs: TArray<FShaderFunctionDefinition>;
}
declare const UComputeKernelSource: UComputeKernelSource;

declare interface UComputeSource extends UObject {
    AdditionalSources: TArray<UComputeSource>;
}
declare const UComputeSource: UComputeSource;

declare interface UComputeSourceFromText extends UComputeSource {
    SourceFile: FFilePath;
}
declare const UComputeSourceFromText: UComputeSourceFromText;

