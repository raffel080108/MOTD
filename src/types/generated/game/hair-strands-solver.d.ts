declare interface FAddSolverDeformerDataflowNode extends FDataflowSimulationNode {
    PhysicsSolvers: FDataflowSimulationProperty[];
    SimulationTime: FDataflowSimulationTime;
    MeshDeformer: UOptimusDeformer;
    DeformerNumericInputs: FDataflowNumericTypes[];
    DeformerVectorInputs: FDataflowVectorTypes[];
    DeformerStringInputs: FDataflowStringTypes[];
    DeformerBoolInputs: FDataflowBoolTypes[];
    DeformerTransformInputs: FDataflowTransformTypes[];
    DeformerNumericArrays: FDataflowNumericArrayTypes[];
    DeformerVectorArrays: FDataflowVectorArrayTypes[];
    DeformerStringArrays: FDataflowStringArrayTypes[];
    DeformerBoolArrays: FDataflowBoolArrayTypes[];
    DeformerTransformArrays: FDataflowTransformArrayTypes[];
}

declare interface FDataflowGroomSolverProxy extends FDataflowPhysicsSolverProxy {

}

declare interface FGroomSolverSettings {
    NumSubSteps: number;
    NumSolverIterations: number;
    SimulationFrameRate: number;
    MaxLODDistance: number;
    MinLODDistance: number;
}

declare interface UGroomSolverComponent extends UMeshComponent {
    readonly __static_UGroomSolverComponent: {
        SetDeformerSolver(DeformerSolver: UMeshDeformer): void;
        ResetGroomComponents(): void;
        RemoveGroomComponent(GroomComponent: UGroomComponent): void;
        AddGroomComponent(GroomComponent: UGroomComponent): void;
    };
    readonly __properties_UGroomSolverComponent: {
        SolverSettings: FGroomSolverSettings;
        SimulationAsset: FDataflowSimulationAsset;
        GroomComponents: UGroomComponent[];
        MeshDeformer: UMeshDeformer;
        DeformerInstance: UMeshDeformerInstance;
        DeformerSettings: UMeshDeformerInstanceSettings;
    };
    readonly __staticRegistry: 
        UGroomSolverComponent['__static_UGroomSolverComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomSolverComponent['__properties_UGroomSolverComponent'] &
        UMeshComponent['__propertyRegistry'];
}

