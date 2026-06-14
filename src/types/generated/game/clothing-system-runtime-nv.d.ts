declare interface FClothConstraintSetupNv {
    Stiffness: number;
    StiffnessMultiplier: number;
    StretchLimit: number;
    CompressionLimit: number;
}
declare const FClothConstraintSetupNv: FClothConstraintSetupNv;

declare interface UClothConfigNv extends UClothConfigCommon {
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
}
declare const UClothConfigNv: UClothConfigNv;

declare interface UClothPhysicalMeshDataNv_Legacy extends UClothPhysicalMeshDataBase_Legacy {
    MaxDistances: TArray<number>;
    BackstopDistances: TArray<number>;
    BackstopRadiuses: TArray<number>;
    AnimDriveMultipliers: TArray<number>;
}
declare const UClothPhysicalMeshDataNv_Legacy: UClothPhysicalMeshDataNv_Legacy;

declare interface UClothingSimulationFactoryNv extends UClothingSimulationFactory {

}
declare const UClothingSimulationFactoryNv: UClothingSimulationFactoryNv;

declare interface UClothingSimulationInteractorNv extends UClothingSimulationInteractor {
    SetAnimDriveDamperStiffness(InStiffness: number): void;
}
declare const UClothingSimulationInteractorNv: UClothingSimulationInteractorNv;

