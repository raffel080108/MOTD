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

declare interface FPhysicalMaterialDamageModifier {
    DamageThresholdMultiplier: number;
}

declare interface FPhysicalMaterialStrength {
    TensileStrength: number;
    CompressionStrength: number;
    ShearStrength: number;
}

declare interface UBodySetupCore extends UObject {
    readonly __properties_UBodySetupCore: {
        BoneName: string;
        PhysicsType: EPhysicsType;
        CollisionTraceFlag: ECollisionTraceFlag;
        CollisionReponse: EBodyCollisionResponse;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBodySetupCore['__properties_UBodySetupCore'] &
        UObject['__propertyRegistry'];
}

declare interface UChaosPhysicalMaterial extends UObject {
    readonly __properties_UChaosPhysicalMaterial: {
        Friction: number;
        StaticFriction: number;
        Restitution: number;
        LinearEtherDrag: number;
        AngularEtherDrag: number;
        SleepingLinearVelocityThreshold: number;
        SleepingAngularVelocityThreshold: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosPhysicalMaterial['__properties_UChaosPhysicalMaterial'] &
        UObject['__propertyRegistry'];
}

declare interface UDEPRECATED_PhysicalMaterialPropertyBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPhysicalMaterial extends UObject {
    readonly __properties_UPhysicalMaterial: {
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
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPhysicalMaterial['__properties_UPhysicalMaterial'] &
        UObject['__propertyRegistry'];
}

declare interface UPhysicsSettingsCore extends UDeveloperSettings {
    readonly __properties_UPhysicsSettingsCore: {
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
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UPhysicsSettingsCore['__properties_UPhysicsSettingsCore'] &
        UDeveloperSettings['__propertyRegistry'];
}

