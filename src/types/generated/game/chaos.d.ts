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

declare interface FChaosSolverDestructionSettings {
    PerAdvanceBreaksAllowed: number;
    PerAdvanceBreaksRescheduleLimit: number;
    ClusteringParticleReleaseThrottlingMinCount: number;
    ClusteringParticleReleaseThrottlingMaxCount: number;
    bOptimizeForRuntimeMemory: boolean;
}

declare type FClosestPhysicsObjectResult = object;

declare interface FFieldCollection extends FManagedArrayCollection {

}

declare type FManagedArrayCollection = object;

declare interface FRecordedFrame {
    Transforms: FTransform[];
    TransformIndices: number[];
    PreviousTransformIndices: number[];
    DisabledFlags: boolean[];
    Collisions: FSolverCollisionData[];
    Breakings: FSolverBreakingData[];
    Trailings: FSolverTrailingData[];
    Timestamp: number;
}

declare interface FRecordedTransformTrack {
    Records: FRecordedFrame[];
}

declare interface FSerializedSolverScene {
    ParticleData: FChaosVDParticleDataWrapper[];
    JointConstraintData: FChaosVDJointConstraint[];
    CharacterGroundConstraintData: FChaosVDCharacterGroundConstraint[];
    CollisionMidPhaseData: FChaosVDParticlePairMidPhase[];
}

declare interface FSolverBreakingData {
    Location: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    ParticleIndex: number;
    ParticleIndexMesh: number;
}

declare interface FSolverBreakingFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinSpeed: number;
    MinVolume: number;
}

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

declare interface FSolverCollisionFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinSpeed: number;
    MinImpulse: number;
}

declare interface FSolverRemovalFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinVolume: number;
}

declare interface FSolverTrailingData {
    Location: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    ParticleIndex: number;
    ParticleIndexMesh: number;
}

declare interface FSolverTrailingFilterSettings {
    FilterEnabled: boolean;
    MinMass: number;
    MinSpeed: number;
    MinVolume: number;
}

