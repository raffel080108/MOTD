declare interface FClothCollisionData {
    Spheres: FClothCollisionPrim_Sphere[];
    SphereConnections: FClothCollisionPrim_SphereConnection[];
    Convexes: FClothCollisionPrim_Convex[];
    Boxes: FClothCollisionPrim_Box[];
}

declare interface FClothCollisionPrim_Box {
    LocalPosition: FVector;
    LocalRotation: FQuat;
    HalfExtents: FVector;
    BoneIndex: number;
}

declare interface FClothCollisionPrim_Convex {
    Faces: FClothCollisionPrim_ConvexFace[];
    SurfacePoints: FVector[];
    BoneIndex: number;
}

declare interface FClothCollisionPrim_ConvexFace {
    Plane: FPlane;
    Indices: number[];
}

declare interface FClothCollisionPrim_Sphere {
    BoneIndex: number;
    Radius: number;
    LocalPosition: FVector;
}

declare interface FClothCollisionPrim_SphereConnection {
    SphereIndices: number;
    OneSidedPlaneNormal: FVector;
}

declare interface FClothVertBoneData {
    NumInfluences: number;
    BoneIndices: number;
    BoneWeights: number;
}

declare interface UClothConfigBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UClothPhysicalMeshDataBase_Legacy extends UObject {
    readonly __properties_UClothPhysicalMeshDataBase_Legacy: {
        Vertices: FVector3f[];
        Normals: FVector3f[];
        Indices: number[];
        InverseMasses: number[];
        BoneData: FClothVertBoneData[];
        NumFixedVerts: number;
        MaxBoneWeights: number;
        SelfCollisionIndices: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothPhysicalMeshDataBase_Legacy['__properties_UClothPhysicalMeshDataBase_Legacy'] &
        UObject['__propertyRegistry'];
}

declare interface UClothingAssetBase extends UObject {
    readonly __properties_UClothingAssetBase: {
        AssetGuid: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothingAssetBase['__properties_UClothingAssetBase'] &
        UObject['__propertyRegistry'];
}

declare interface UClothingInteractor extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UClothingSimulationFactory extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UClothingSimulationInteractor extends UObject {
    readonly __static_UClothingSimulationInteractor: {
        SetNumSubsteps(NumSubSteps: number): void;
        SetNumIterations(NumIterations: number): void;
        SetMaxNumIterations(MaxNumIterations: number): void;
        SetAnimDriveSpringStiffness(InStiffness: number): void;
        PhysicsAssetUpdated(): void;
        GetSimulationTime(): number;
        GetNumSubsteps(): number;
        GetNumKinematicParticles(): number;
        GetNumIterations(): number;
        GetNumDynamicParticles(): number;
        GetNumCloths(): number;
        GetClothingInteractor(ClothingAssetName: string): UClothingInteractor;
        EnableGravityOverride(InVector: FVector): void;
        DisableGravityOverride(): void;
        ClothConfigUpdated(): void;
    };
    readonly __properties_UClothingSimulationInteractor: {
        ClothingInteractors: TMap<string, UClothingInteractor>;
    };
    readonly __staticRegistry: 
        UClothingSimulationInteractor['__static_UClothingSimulationInteractor'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UClothingSimulationInteractor['__properties_UClothingSimulationInteractor'] &
        UObject['__propertyRegistry'];
}

declare interface UDEPRECATED_ClothSharedSimConfigBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

