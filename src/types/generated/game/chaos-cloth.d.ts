declare interface FChaosClothWeightedValue {
    Low: number;
    High: number;
}
declare const FChaosClothWeightedValue: FChaosClothWeightedValue;

declare interface UChaosClothConfig extends UClothConfigCommon {
    MassMode: EClothMassMode;
    UniformMass: number;
    TotalMass: number;
    Density: number;
    MinPerParticleMass: number;
    EdgeStiffnessWeighted: FChaosClothWeightedValue;
    BendingStiffnessWeighted: FChaosClothWeightedValue;
    bUseBendingElements: boolean;
    BucklingRatio: number;
    BucklingStiffnessWeighted: FChaosClothWeightedValue;
    FlatnessRatio: FChaosClothWeightedValue;
    AreaStiffnessWeighted: FChaosClothWeightedValue;
    VolumeStiffness: number;
    TetherStiffness: FChaosClothWeightedValue;
    TetherScale: FChaosClothWeightedValue;
    bUseGeodesicDistance: boolean;
    ShapeTargetStiffness: number;
    CollisionThickness: number;
    FrictionCoefficient: number;
    bUseCCD: boolean;
    bUseSelfCollisions: boolean;
    SelfCollisionThickness: number;
    SelfCollisionFriction: number;
    bUseSelfIntersections: boolean;
    bUseSelfCollisionSpheres: boolean;
    SelfCollisionSphereRadius: number;
    SelfCollisionSphereStiffness: number;
    SelfCollisionSphereRadiusCullMultiplier: number;
    bUseLegacyBackstop: boolean;
    DampingCoefficient: number;
    LocalDampingCoefficient: number;
    bUsePointBasedWindModel: boolean;
    Drag: FChaosClothWeightedValue;
    bEnableOuterDrag: boolean;
    OuterDrag: FChaosClothWeightedValue;
    Lift: FChaosClothWeightedValue;
    bEnableOuterLift: boolean;
    OuterLift: FChaosClothWeightedValue;
    bUseGravityOverride: boolean;
    GravityScale: number;
    Gravity: FVector;
    Pressure: FChaosClothWeightedValue;
    AnimDriveStiffness: FChaosClothWeightedValue;
    AnimDriveDamping: FChaosClothWeightedValue;
    VelocityScaleSpace: EChaosSoftsSimulationSpace;
    LinearVelocityScale: FVector;
    bEnableLinearVelocityClamping: boolean;
    MaxLinearVelocity: FVector3f;
    bEnableLinearAccelerationClamping: boolean;
    MaxLinearAcceleration: FVector3f;
    AngularVelocityScale: number;
    bEnableAngularVelocityClamping: boolean;
    MaxAngularVelocity: number;
    bEnableAngularAccelerationClamping: boolean;
    MaxAngularAcceleration: number;
    FictitiousAngularScale: number;
    bUseTetrahedralConstraints: boolean;
    bUseThinShellVolumeConstraints: boolean;
    bUseContinuousCollisionDetection: boolean;
}
declare const UChaosClothConfig: UChaosClothConfig;

declare interface UChaosClothSharedSimConfig extends UClothSharedConfigCommon {
    IterationCount: number;
    MaxIterationCount: number;
    SubdivisionCount: number;
    bUseLocalSpaceSimulation: boolean;
    bUseXPBDConstraints: boolean;
}
declare const UChaosClothSharedSimConfig: UChaosClothSharedSimConfig;

declare interface UChaosClothingInteractor extends UClothingInteractor {
    SetWind(Drag: FVector2D, Lift: FVector2D, AirDensity: number, WindVelocity: FVector, OuterDrag: FVector2D, OuterLift: FVector2D): void;
    SetVelocityScale(LinearVelocityScale: FVector, AngularVelocityScale: number, FictitiousAngularScale: number): void;
    SetVelocityClamps(bEnableLinearVelocityClamping: boolean, MaxLinearVelocity: FVector, bEnableLinearAccelerationClamping: boolean, MaxLinearAcceleration: FVector, bEnableAngularVelocityClamping: boolean, MaxAngularVelocity: number, bEnableAngularAccelerationClamping: boolean, MaxAngularAcceleration: number): void;
    SetPressure(Pressure: FVector2D): void;
    SetMaterialLinear(EdgeStiffness: number, BendingStiffness: number, AreaStiffness: number): void;
    SetMaterialBuckling(BucklingRatio: FVector2D, BucklingStiffness: FVector2D): void;
    SetMaterial(EdgeStiffness: FVector2D, BendingStiffness: FVector2D, AreaStiffness: FVector2D): void;
    SetLongRangeAttachmentLinear(TetherStiffness: number, TetherScale: number): void;
    SetLongRangeAttachment(TetherStiffness: FVector2D, TetherScale: FVector2D): void;
    SetGravity(GravityScale: number, bIsGravityOverridden: boolean, GravityOverride: FVector): void;
    SetDamping(DampingCoefficient: number, LocalDampingCoefficient: number): void;
    SetCollision(CollisionThickness: number, FrictionCoefficient: number, bUseCCD: boolean, SelfCollisionThickness: number): void;
    SetBackstop(bEnabled: boolean): void;
    SetAnimDriveLinear(AnimDriveStiffness: number): void;
    SetAnimDrive(AnimDriveStiffness: FVector2D, AnimDriveDamping: FVector2D): void;
    SetAerodynamics(DragCoefficient: number, LiftCoefficient: number, WindVelocity: FVector): void;
    ResetAndTeleport(bReset: boolean, bTeleport: boolean): void;
}
declare const UChaosClothingInteractor: UChaosClothingInteractor;

declare interface UChaosClothingSimulationFactory extends UClothingSimulationFactory {

}
declare const UChaosClothingSimulationFactory: UChaosClothingSimulationFactory;

declare interface UChaosClothingSimulationInteractor extends UClothingSimulationInteractor {

}
declare const UChaosClothingSimulationInteractor: UChaosClothingSimulationInteractor;

