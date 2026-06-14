declare interface FBodyInstanceCore {
    bSimulatePhysics: boolean;
    bOverrideMass: boolean;
    bEnableGravity: boolean;
    bUpdateKinematicFromSimulation: boolean;
    bGyroscopicTorqueEnabled: boolean;
    bAutoWeld: boolean;
    bStartAwake: boolean;
    bGenerateWakeEvents: boolean;
    bUpdateMassWhenScaleChanges: boolean;
}
declare const FBodyInstanceCore: FBodyInstanceCore;

declare interface FPhysicalMaterialDamageModifier {
    DamageThresholdMultiplier: number;
}
declare const FPhysicalMaterialDamageModifier: FPhysicalMaterialDamageModifier;

declare interface FPhysicalMaterialStrength {
    TensileStrength: number;
    CompressionStrength: number;
    ShearStrength: number;
}
declare const FPhysicalMaterialStrength: FPhysicalMaterialStrength;

declare interface UBodySetupCore extends UObject {
    BoneName: FName;
    PhysicsType: EPhysicsType;
    CollisionTraceFlag: ECollisionTraceFlag;
    CollisionReponse: EBodyCollisionResponse;
}
declare const UBodySetupCore: UBodySetupCore;

declare interface UChaosPhysicalMaterial extends UObject {
    Friction: number;
    StaticFriction: number;
    Restitution: number;
    LinearEtherDrag: number;
    AngularEtherDrag: number;
    SleepingLinearVelocityThreshold: number;
    SleepingAngularVelocityThreshold: number;
}
declare const UChaosPhysicalMaterial: UChaosPhysicalMaterial;

declare interface UDEPRECATED_PhysicalMaterialPropertyBase extends UObject {

}
declare const UDEPRECATED_PhysicalMaterialPropertyBase: UDEPRECATED_PhysicalMaterialPropertyBase;

declare interface UPhysicalMaterial extends UObject {
    Friction: number;
    StaticFriction: number;
    FrictionCombineMode: EFrictionCombineMode;
    bOverrideFrictionCombineMode: boolean;
    Restitution: number;
    RestitutionCombineMode: EFrictionCombineMode;
    bOverrideRestitutionCombineMode: boolean;
    Density: number;
    SleepLinearVelocityThreshold: number;
    SleepAngularVelocityThreshold: number;
    SleepCounterThreshold: number;
    RaiseMassToPower: number;
    DestructibleDamageThresholdScale: number;
    PhysicalMaterialProperty: UDEPRECATED_PhysicalMaterialPropertyBase;
    SurfaceType: EPhysicalSurface;
    Strength: FPhysicalMaterialStrength;
    DamageModifier: FPhysicalMaterialDamageModifier;
    DebugColor: FLinearColor;
    bShowExperimentalProperties: boolean;
    SoftCollisionMode: EPhysicalMaterialSoftCollisionMode;
    SoftCollisionThickness: number;
    BaseFrictionImpulse: number;
}
declare const UPhysicalMaterial: UPhysicalMaterial;

declare interface UPhysicsSettingsCore extends UDeveloperSettings {
    DefaultGravityZ: number;
    DefaultTerminalVelocity: number;
    DefaultFluidFriction: number;
    SimulateScratchMemorySize: number;
    RagdollAggregateThreshold: number;
    TriangleMeshTriangleMinAreaThreshold: number;
    bEnableEnhancedDeterminism: boolean;
    bEnableShapeSharing: boolean;
    bEnablePCM: boolean;
    bEnableStabilization: boolean;
    bWarnMissingLocks: boolean;
    bEnable2DPhysics: boolean;
    bDefaultHasComplexCollision: boolean;
    BounceThresholdVelocity: number;
    FrictionCombineMode: EFrictionCombineMode;
    RestitutionCombineMode: EFrictionCombineMode;
    MaxAngularVelocity: number;
    MaxDepenetrationVelocity: number;
    ContactOffsetMultiplier: number;
    MinContactOffset: number;
    MaxContactOffset: number;
    bSimulateSkeletalMeshOnDedicatedServer: boolean;
    DefaultShapeComplexity: ECollisionTraceFlag;
    SolverOptions: FChaosSolverConfiguration;
}
declare const UPhysicsSettingsCore: UPhysicsSettingsCore;

