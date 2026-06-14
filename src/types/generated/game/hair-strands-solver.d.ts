declare interface FAddSolverDeformerDataflowNode extends FDataflowSimulationNode {
    PhysicsSolvers: TArray<FDataflowSimulationProperty>;
    SimulationTime: FDataflowSimulationTime;
    MeshDeformer: UOptimusDeformer;
    DeformerNumericInputs: TArray<FDataflowNumericTypes>;
    DeformerVectorInputs: TArray<FDataflowVectorTypes>;
    DeformerStringInputs: TArray<FDataflowStringTypes>;
    DeformerBoolInputs: TArray<FDataflowBoolTypes>;
    DeformerTransformInputs: TArray<FDataflowTransformTypes>;
    DeformerNumericArrays: TArray<FDataflowNumericArrayTypes>;
    DeformerVectorArrays: TArray<FDataflowVectorArrayTypes>;
    DeformerStringArrays: TArray<FDataflowStringArrayTypes>;
    DeformerBoolArrays: TArray<FDataflowBoolArrayTypes>;
    DeformerTransformArrays: TArray<FDataflowTransformArrayTypes>;
}
declare const FAddSolverDeformerDataflowNode: FAddSolverDeformerDataflowNode;

declare interface FDataflowGroomSolverProxy extends FDataflowPhysicsSolverProxy {

}
declare const FDataflowGroomSolverProxy: FDataflowGroomSolverProxy;

declare interface FGroomSolverSettings {
    NumSubSteps: number;
    NumSolverIterations: number;
    SimulationFrameRate: number;
    MaxLODDistance: number;
    MinLODDistance: number;
}
declare const FGroomSolverSettings: FGroomSolverSettings;

declare interface UGroomSolverComponent extends UMeshComponent {
    SolverSettings: FGroomSolverSettings;
    SimulationAsset: FDataflowSimulationAsset;
    GroomComponents: TSet<UGroomComponent>;
    MeshDeformer: UMeshDeformer;
    DeformerInstance: UMeshDeformerInstance;
    DeformerSettings: UMeshDeformerInstanceSettings;
    SetDeformerSolver(DeformerSolver: UMeshDeformer): void;
    ResetGroomComponents(): void;
    RemoveGroomComponent(GroomComponent: UGroomComponent): void;
    AddGroomComponent(GroomComponent: UGroomComponent): void;
}
declare const UGroomSolverComponent: UGroomSolverComponent;

