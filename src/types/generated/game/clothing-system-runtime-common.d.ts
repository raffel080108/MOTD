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

declare interface FClothConstraintSetup_Legacy {
    Stiffness: number;
    StiffnessMultiplier: number;
    StretchLimit: number;
    CompressionLimit: number;
}

declare interface FClothLODDataCommon {
    PhysicalMeshData: FClothPhysicalMeshData;
    bUseMultipleInfluences: boolean;
    SkinningKernelRadius: number;
    bSmoothTransition: boolean;
}

declare interface FClothParameterMask_Legacy {
    MaskName: string;
    CurrentTarget: EWeightMapTargetCommon;
    MaxValue: number;
    MinValue: number;
    Values: number[];
    bEnabled: boolean;
}

declare interface FClothPhysicalMeshData {
    Vertices: FVector3f[];
    Normals: FVector3f[];
    Indices: number[];
    WeightMaps: TMap<number, FPointWeightMap>;
    InverseMasses: number[];
    BoneData: FClothVertBoneData[];
    SelfCollisionVertexSet: number[];
    EuclideanTethers: FClothTetherData;
    GeodesicTethers: FClothTetherData;
    MaxBoneWeights: number;
    NumFixedVerts: number;
    SelfCollisionIndices: number[];
}

declare type FClothTetherData = object;

declare interface FPointWeightMap {
    Values: number[];
}

declare interface UClothConfigCommon extends UClothConfigBase {
    readonly __staticRegistry: 
        UClothConfigBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothConfigBase['__propertyRegistry'];
}

declare interface UClothLODDataCommon_Legacy extends UObject {
    readonly __properties_UClothLODDataCommon_Legacy: {
        PhysicalMeshData: UClothPhysicalMeshDataBase_Legacy;
        ClothPhysicalMeshData: FClothPhysicalMeshData;
        CollisionData: FClothCollisionData;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothLODDataCommon_Legacy['__properties_UClothLODDataCommon_Legacy'] &
        UObject['__propertyRegistry'];
}

declare interface UClothSharedConfigCommon extends UClothConfigCommon {
    readonly __staticRegistry: 
        UClothConfigCommon['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothConfigCommon['__propertyRegistry'];
}

declare interface UClothingAssetCommon extends UClothingAssetBase {
    readonly __properties_UClothingAssetCommon: {
        PhysicsAsset: UPhysicsAsset;
        ClothConfigs: TMap<string, UClothConfigBase>;
        LODData: FClothLODDataCommon[];
        LodMap: number[];
        UsedBoneNames: string[];
        UsedBoneIndices: number[];
        ReferenceBoneIndex: number;
    };
    readonly __staticRegistry: 
        UClothingAssetBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothingAssetCommon['__properties_UClothingAssetCommon'] &
        UClothingAssetBase['__propertyRegistry'];
}

declare interface UClothingAssetCustomData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

