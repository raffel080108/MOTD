declare interface FAdvancePhysicsSolversDataflowNode extends FDataflowSimulationNode {
    SimulationTime: FDataflowSimulationTime;
    PhysicsSolvers: TArray<FDataflowSimulationProperty>;
}
declare const FAdvancePhysicsSolversDataflowNode: FAdvancePhysicsSolversDataflowNode;

declare interface FDataflowCollisionObjectProxy extends FDataflowSimulationProxy {

}
declare const FDataflowCollisionObjectProxy: FDataflowCollisionObjectProxy;

declare interface FDataflowConstraintObjectProxy extends FDataflowSimulationProxy {

}
declare const FDataflowConstraintObjectProxy: FDataflowConstraintObjectProxy;

declare interface FDataflowExecutionNode extends FDataflowSimulationNode {

}
declare const FDataflowExecutionNode: FDataflowExecutionNode;

declare interface FDataflowInvalidNode extends FDataflowSimulationNode {

}
declare const FDataflowInvalidNode: FDataflowInvalidNode;

declare interface FDataflowPhysicsObjectProxy extends FDataflowSimulationProxy {

}
declare const FDataflowPhysicsObjectProxy: FDataflowPhysicsObjectProxy;

declare interface FDataflowPhysicsSolverProxy extends FDataflowSimulationProxy {

}
declare const FDataflowPhysicsSolverProxy: FDataflowPhysicsSolverProxy;

declare interface FDataflowSimulationAsset {
    DataflowAsset: UDataflow;
    SimulationGroups: TSet<FString>;
}
declare const FDataflowSimulationAsset: FDataflowSimulationAsset;

declare interface FDataflowSimulationNode extends FDataflowNode {

}
declare const FDataflowSimulationNode: FDataflowSimulationNode;

declare interface FDataflowSimulationProperty {

}
declare const FDataflowSimulationProperty: FDataflowSimulationProperty;

declare interface FDataflowSimulationProxy {

}
declare const FDataflowSimulationProxy: FDataflowSimulationProxy;

declare interface FDataflowSimulationTime {
    DeltaTime: number;
    CurrentTime: number;
    TimeOffset: number;
}
declare const FDataflowSimulationTime: FDataflowSimulationTime;

declare interface FFilterSimulationProxiesDataflowNode extends FDataflowSimulationNode {
    SimulationProxies: TArray<FDataflowSimulationProperty>;
    FilteredProxies: TArray<FDataflowSimulationProperty>;
    SimulationGroups: TArray<FString>;
}
declare const FFilterSimulationProxiesDataflowNode: FFilterSimulationProxiesDataflowNode;

declare interface FGetPhysicsSolversDataflowNode extends FDataflowInvalidNode {
    PhysicsSolvers: TArray<FDataflowSimulationProperty>;
    SimulationGroups: TArray<FString>;
}
declare const FGetPhysicsSolversDataflowNode: FGetPhysicsSolversDataflowNode;

declare interface FGetSimulationTimeDataflowNode extends FDataflowInvalidNode {
    SimulationTime: FDataflowSimulationTime;
}
declare const FGetSimulationTimeDataflowNode: FGetSimulationTimeDataflowNode;

declare interface FSimulationProxiesTerminalDataflowNode extends FDataflowExecutionNode {
    SimulationProxies: TArray<FDataflowSimulationProperty>;
}
declare const FSimulationProxiesTerminalDataflowNode: FSimulationProxiesTerminalDataflowNode;

declare interface IDataflowCollisionObjectInterface extends IDataflowSimulationInterface {

}
declare const IDataflowCollisionObjectInterface: IDataflowCollisionObjectInterface;

declare interface IDataflowConstraintObjectInterface extends IDataflowSimulationInterface {

}
declare const IDataflowConstraintObjectInterface: IDataflowConstraintObjectInterface;

declare interface IDataflowGeometryCachable extends IInterface {

}
declare const IDataflowGeometryCachable: IDataflowGeometryCachable;

declare interface IDataflowPhysicsObjectInterface extends IDataflowSimulationInterface {

}
declare const IDataflowPhysicsObjectInterface: IDataflowPhysicsObjectInterface;

declare interface IDataflowPhysicsSolverInterface extends IDataflowSimulationInterface {

}
declare const IDataflowPhysicsSolverInterface: IDataflowPhysicsSolverInterface;

declare interface IDataflowSimulationActor extends IInterface {
    PreDataflowSimulationTick(SimulationTime: number, DeltaTime: number): void;
    PostDataflowSimulationTick(SimulationTime: number, DeltaTime: number): void;
}
declare const IDataflowSimulationActor: IDataflowSimulationActor;

declare interface IDataflowSimulationInterface extends IInterface {

}
declare const IDataflowSimulationInterface: IDataflowSimulationInterface;

declare interface UDataflowSimulationManager extends UTickableWorldSubsystem {

}
declare const UDataflowSimulationManager: UDataflowSimulationManager;

