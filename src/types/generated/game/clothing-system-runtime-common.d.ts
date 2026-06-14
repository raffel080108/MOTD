declare interface FClothConfig_Legacy {
    WindMethod: EClothingWindMethod_Legacy;
    VerticalConstraintConfig: FClothConstraintSetup_Legacy;
    HorizontalConstraintConfig: FClothConstraintSetup_Legacy;
    BendConstraintConfig: FClothConstraintSetup_Legacy;
    ShearConstraintConfig: FClothConstraintSetup_Legacy;
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
}
declare const FClothConfig_Legacy: FClothConfig_Legacy;

declare interface FClothConstraintSetup_Legacy {
    Stiffness: number;
    StiffnessMultiplier: number;
    StretchLimit: number;
    CompressionLimit: number;
}
declare const FClothConstraintSetup_Legacy: FClothConstraintSetup_Legacy;

declare interface FClothLODDataCommon {
    PhysicalMeshData: FClothPhysicalMeshData;
    bUseMultipleInfluences: boolean;
    SkinningKernelRadius: number;
    bSmoothTransition: boolean;
}
declare const FClothLODDataCommon: FClothLODDataCommon;

declare interface FClothParameterMask_Legacy {
    MaskName: FName;
    CurrentTarget: EWeightMapTargetCommon;
    MaxValue: number;
    MinValue: number;
    Values: TArray<number>;
    bEnabled: boolean;
}
declare const FClothParameterMask_Legacy: FClothParameterMask_Legacy;

declare interface FClothPhysicalMeshData {
    Vertices: TArray<FVector3f>;
    Normals: TArray<FVector3f>;
    Indices: TArray<uint32>;
    WeightMaps: Record<string | number | symbol, FPointWeightMap>;
    InverseMasses: TArray<number>;
    BoneData: TArray<FClothVertBoneData>;
    SelfCollisionVertexSet: TSet<number>;
    EuclideanTethers: FClothTetherData;
    GeodesicTethers: FClothTetherData;
    MaxBoneWeights: number;
    NumFixedVerts: number;
    SelfCollisionIndices: TArray<uint32>;
}
declare const FClothPhysicalMeshData: FClothPhysicalMeshData;

declare interface FClothTetherData {

}
declare const FClothTetherData: FClothTetherData;

declare interface FPointWeightMap {
    Values: TArray<number>;
}
declare const FPointWeightMap: FPointWeightMap;

declare interface UClothConfigCommon extends UClothConfigBase {

}
declare const UClothConfigCommon: UClothConfigCommon;

declare interface UClothLODDataCommon_Legacy extends UObject {
    PhysicalMeshData: UClothPhysicalMeshDataBase_Legacy;
    ClothPhysicalMeshData: FClothPhysicalMeshData;
    CollisionData: FClothCollisionData;
}
declare const UClothLODDataCommon_Legacy: UClothLODDataCommon_Legacy;

declare interface UClothSharedConfigCommon extends UClothConfigCommon {

}
declare const UClothSharedConfigCommon: UClothSharedConfigCommon;

declare interface UClothingAssetCommon extends UClothingAssetBase {
    PhysicsAsset: UPhysicsAsset;
    ClothConfigs: Record<FName, UClothConfigBase>;
    LODData: TArray<FClothLODDataCommon>;
    LodMap: TArray<number>;
    UsedBoneNames: TArray<FName>;
    UsedBoneIndices: TArray<number>;
    ReferenceBoneIndex: number;
}
declare const UClothingAssetCommon: UClothingAssetCommon;

declare interface UClothingAssetCustomData extends UObject {

}
declare const UClothingAssetCustomData: UClothingAssetCustomData;

