declare interface FChaosSolverConfiguration {
    PositionIterations: number;
    VelocityIterations: number;
    ProjectionIterations: number;
    CollisionMarginFraction: number;
    CollisionMarginMax: number;
    CollisionCullDistance: number;
    CollisionMaxPushOutVelocity: number;
    CollisionInitialOverlapDepenetrationVelocity: number;
    ClusterConnectionFactor: number;
    ClusterUnionConnectionType: EClusterUnionMethod;
    DestructionSettings: FChaosSolverDestructionSettings;
    bGenerateCollisionData: boolean;
    CollisionFilterSettings: FSolverCollisionFilterSettings;
    bGenerateBreakData: boolean;
    BreakingFilterSettings: FSolverBreakingFilterSettings;
    bGenerateTrailingData: boolean;
    TrailingFilterSettings: FSolverTrailingFilterSettings;
    Iterations: number;
    PushOutIterations: number;
    bGenerateContactGraph: boolean;
}
declare const FChaosSolverConfiguration: FChaosSolverConfiguration;

declare interface FChaosSolverDestructionSettings {
    PerAdvanceBreaksAllowed: number;
    PerAdvanceBreaksRescheduleLimit: number;
    ClusteringParticleReleaseThrottlingMinCount: number;
    ClusteringParticleReleaseThrottlingMaxCount: number;
    bOptimizeForRuntimeMemory: boolean;
}
declare const FChaosSolverDestructionSettings: FChaosSolverDestructionSettings;

declare interface FClosestPhysicsObjectResult {

}
declare const FClosestPhysicsObjectResult: FClosestPhysicsObjectResult;

declare interface FFieldCollection extends FManagedArrayCollection {

}
declare const FFieldCollection: FFieldCollection;

declare interface FManagedArrayCollection {

}
declare const FManagedArrayCollection: FManagedArrayCollection;

declare interface FRecordedFrame {
    Transforms: TArray<FTransform>;
    TransformIndices: TArray<number>;
    PreviousTransformIndices: TArray<number>;
    DisabledFlags: TArray<boolean>;
    Collisions: TArray<FSolverCollisionData>;
    Breakings: TArray<FSolverBreakingData>;
    Trailings: TSet<FSolverTrailingData>;
    Timestamp: number;
}
declare const FRecordedFrame: FRecordedFrame;

declare interface FRecordedTransformTrack {
    Records: TArray<FRecordedFrame>;
}
declare const FRecordedTransformTrack: FRecordedTransformTrack;

declare interface FSerializedSolverScene {
    ParticleData: TArray<FChaosVDParticleDataWrapper>;
    JointConstraintData: TArray<FChaosVDJointConstraint>;
    CharacterGroundConstraintData: TArray<FChaosVDCharacterGroundConstraint>;
    CollisionMidPhaseData: TArray<FChaosVDParticlePairMidPhase>;
}
declare const FSerializedSolverScene: FSerializedSolverScene;

declare interface FSolverBreakingData {
    Location: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    ParticleIndex: number;
    ParticleIndexMesh: number;
}
declare const FSolverBreakingData: FSolverBreakingData;

declare interface FSolverBreakingFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinSpeed: number;
    MinVolume: number;
}
declare const FSolverBreakingFilterSettings: FSolverBreakingFilterSettings;

declare interface FSolverCollisionData {
    Location: FVector;
    AccumulatedImpulse: FVector;
    Normal: FVector;
    Velocity1: FVector;
    Velocity2: FVector;
    AngularVelocity1: FVector;
    AngularVelocity2: FVector;
    Mass1: number;
    Mass2: number;
    ParticleIndex: number;
    LevelsetIndex: number;
    ParticleIndexMesh: number;
    LevelsetIndexMesh: number;
}
declare const FSolverCollisionData: FSolverCollisionData;

declare interface FSolverCollisionFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinSpeed: number;
    MinImpulse: number;
}
declare const FSolverCollisionFilterSettings: FSolverCollisionFilterSettings;

declare interface FSolverRemovalFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinVolume: number;
}
declare const FSolverRemovalFilterSettings: FSolverRemovalFilterSettings;

declare interface FSolverTrailingData {
    Location: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    ParticleIndex: number;
    ParticleIndexMesh: number;
}
declare const FSolverTrailingData: FSolverTrailingData;

declare interface FSolverTrailingFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinSpeed: number;
    MinVolume: number;
}
declare const FSolverTrailingFilterSettings: FSolverTrailingFilterSettings;

