declare interface FAdvancePhysicsSolversDataflowNode extends FDataflowSimulationNode {
    SimulationTime: FDataflowSimulationTime;
    PhysicsSolvers: FDataflowSimulationProperty[];
}

declare interface FDataflowCollisionObjectProxy extends FDataflowSimulationProxy {

}

declare interface FDataflowConstraintObjectProxy extends FDataflowSimulationProxy {

}

declare interface FDataflowExecutionNode extends FDataflowSimulationNode {

}

declare interface FDataflowInvalidNode extends FDataflowSimulationNode {

}

declare interface FDataflowPhysicsObjectProxy extends FDataflowSimulationProxy {

}

declare interface FDataflowPhysicsSolverProxy extends FDataflowSimulationProxy {

}

declare interface FDataflowSimulationAsset {
    DataflowAsset: UDataflow;
    SimulationGroups: string[];
}

declare interface FDataflowSimulationNode extends FDataflowNode {

}

declare type FDataflowSimulationProperty = object;

declare type FDataflowSimulationProxy = object;

declare interface FDataflowSimulationTime {
    DeltaTime: number;
    CurrentTime: number;
    TimeOffset: number;
}

declare interface FFilterSimulationProxiesDataflowNode extends FDataflowSimulationNode {
    SimulationProxies: FDataflowSimulationProperty[];
    FilteredProxies: FDataflowSimulationProperty[];
    SimulationGroups: string[];
}

declare interface FGetPhysicsSolversDataflowNode extends FDataflowInvalidNode {
    PhysicsSolvers: FDataflowSimulationProperty[];
    SimulationGroups: string[];
}

declare interface FGetSimulationTimeDataflowNode extends FDataflowInvalidNode {
    SimulationTime: FDataflowSimulationTime;
}

declare interface FSimulationProxiesTerminalDataflowNode extends FDataflowExecutionNode {
    SimulationProxies: FDataflowSimulationProperty[];
}

declare interface IDataflowCollisionObjectInterface extends IDataflowSimulationInterface {
    readonly __staticRegistry: 
        IDataflowSimulationInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IDataflowSimulationInterface['__propertyRegistry'];
}

declare interface IDataflowConstraintObjectInterface extends IDataflowSimulationInterface {
    readonly __staticRegistry: 
        IDataflowSimulationInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IDataflowSimulationInterface['__propertyRegistry'];
}

declare interface IDataflowGeometryCachable extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IDataflowPhysicsObjectInterface extends IDataflowSimulationInterface {
    readonly __staticRegistry: 
        IDataflowSimulationInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IDataflowSimulationInterface['__propertyRegistry'];
}

declare interface IDataflowPhysicsSolverInterface extends IDataflowSimulationInterface {
    readonly __staticRegistry: 
        IDataflowSimulationInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IDataflowSimulationInterface['__propertyRegistry'];
}

declare interface IDataflowSimulationActor extends IInterface {
    readonly __static_IDataflowSimulationActor: {
        PreDataflowSimulationTick(SimulationTime: number, DeltaTime: number): void;
        PostDataflowSimulationTick(SimulationTime: number, DeltaTime: number): void;
    };
    readonly __staticRegistry: 
        IDataflowSimulationActor['__static_IDataflowSimulationActor'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IDataflowSimulationInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UDataflowSimulationManager extends UTickableWorldSubsystem {
    readonly __staticRegistry: 
        UTickableWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableWorldSubsystem['__propertyRegistry'];
}

