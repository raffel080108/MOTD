declare interface FClothConstraintSetupNv {
    Stiffness: number;
    StiffnessMultiplier: number;
    StretchLimit: number;
    CompressionLimit: number;
}

declare interface UClothConfigNv extends UClothConfigCommon {
    readonly __properties_UClothConfigNv: {
        ClothingWindMethod: EClothingWindMethodNv;
        VerticalConstraint: FClothConstraintSetupNv;
        HorizontalConstraint: FClothConstraintSetupNv;
        BendConstraint: FClothConstraintSetupNv;
        ShearConstraint: FClothConstraintSetupNv;
        SelfCollisionRadius: number;
        SelfCollisionStiffness: number;
        SelfCollisionCullScale: number;
        Damping: FVector;
        Friction: number;
        WindDragCoefficient: number;
        WindLiftCoefficient: number;
        LinearDrag: FVector;
        AngularDrag: FVector;
        LinearInertiaScale: FVector;
        AngularInertiaScale: FVector;
        CentrifugalInertiaScale: FVector;
        SolverFrequency: number;
        StiffnessFrequency: number;
        GravityScale: number;
        GravityOverride: FVector;
        bUseGravityOverride: boolean;
        TetherStiffness: number;
        TetherLimit: number;
        CollisionThickness: number;
        AnimDriveSpringStiffness: number;
        AnimDriveDamperStiffness: number;
        WindMethod: EClothingWindMethod_Legacy;
        VerticalConstraintConfig: FClothConstraintSetup_Legacy;
        HorizontalConstraintConfig: FClothConstraintSetup_Legacy;
        BendConstraintConfig: FClothConstraintSetup_Legacy;
        ShearConstraintConfig: FClothConstraintSetup_Legacy;
    };
    readonly __staticRegistry: 
        UClothConfigCommon['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothConfigNv['__properties_UClothConfigNv'] &
        UClothConfigCommon['__propertyRegistry'];
}

declare interface UClothPhysicalMeshDataNv_Legacy extends UClothPhysicalMeshDataBase_Legacy {
    readonly __properties_UClothPhysicalMeshDataNv_Legacy: {
        MaxDistances: number[];
        BackstopDistances: number[];
        BackstopRadiuses: number[];
        AnimDriveMultipliers: number[];
    };
    readonly __staticRegistry: 
        UClothPhysicalMeshDataBase_Legacy['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothPhysicalMeshDataNv_Legacy['__properties_UClothPhysicalMeshDataNv_Legacy'] &
        UClothPhysicalMeshDataBase_Legacy['__propertyRegistry'];
}

declare interface UClothingSimulationFactoryNv extends UClothingSimulationFactory {
    readonly __staticRegistry: 
        UClothingSimulationFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothingSimulationFactory['__propertyRegistry'];
}

declare interface UClothingSimulationInteractorNv extends UClothingSimulationInteractor {
    readonly __static_UClothingSimulationInteractorNv: {
        SetAnimDriveDamperStiffness(InStiffness: number): void;
    };
    readonly __staticRegistry: 
        UClothingSimulationInteractorNv['__static_UClothingSimulationInteractorNv'] &
        UClothingSimulationInteractor['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothingSimulationInteractor['__propertyRegistry'];
}

