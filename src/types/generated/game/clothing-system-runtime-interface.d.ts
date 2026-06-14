declare interface FClothCollisionData {
    Spheres: TArray<FClothCollisionPrim_Sphere>;
    SphereConnections: TArray<FClothCollisionPrim_SphereConnection>;
    Convexes: TArray<FClothCollisionPrim_Convex>;
    Boxes: TArray<FClothCollisionPrim_Box>;
}
declare const FClothCollisionData: FClothCollisionData;

declare interface FClothCollisionPrim_Box {
    LocalPosition: FVector;
    LocalRotation: FQuat;
    HalfExtents: FVector;
    BoneIndex: number;
}
declare const FClothCollisionPrim_Box: FClothCollisionPrim_Box;

declare interface FClothCollisionPrim_Convex {
    Faces: TArray<FClothCollisionPrim_ConvexFace>;
    SurfacePoints: TArray<FVector>;
    BoneIndex: number;
}
declare const FClothCollisionPrim_Convex: FClothCollisionPrim_Convex;

declare interface FClothCollisionPrim_ConvexFace {
    Plane: FPlane;
    Indices: TArray<number>;
}
declare const FClothCollisionPrim_ConvexFace: FClothCollisionPrim_ConvexFace;

declare interface FClothCollisionPrim_Sphere {
    BoneIndex: number;
    Radius: number;
    LocalPosition: FVector;
}
declare const FClothCollisionPrim_Sphere: FClothCollisionPrim_Sphere;

declare interface FClothCollisionPrim_SphereConnection {
    SphereIndices: number;
    OneSidedPlaneNormal: FVector;
}
declare const FClothCollisionPrim_SphereConnection: FClothCollisionPrim_SphereConnection;

declare interface FClothVertBoneData {
    NumInfluences: number;
    BoneIndices: uint16;
    BoneWeights: number;
}
declare const FClothVertBoneData: FClothVertBoneData;

declare interface UClothConfigBase extends UObject {

}
declare const UClothConfigBase: UClothConfigBase;

declare interface UClothPhysicalMeshDataBase_Legacy extends UObject {
    Vertices: TArray<FVector3f>;
    Normals: TArray<FVector3f>;
    Indices: TArray<uint32>;
    InverseMasses: TArray<number>;
    BoneData: TArray<FClothVertBoneData>;
    NumFixedVerts: number;
    MaxBoneWeights: number;
    SelfCollisionIndices: TArray<uint32>;
}
declare const UClothPhysicalMeshDataBase_Legacy: UClothPhysicalMeshDataBase_Legacy;

declare interface UClothingAssetBase extends UObject {
    AssetGuid: FGuid;
}
declare const UClothingAssetBase: UClothingAssetBase;

declare interface UClothingInteractor extends UObject {

}
declare const UClothingInteractor: UClothingInteractor;

declare interface UClothingSimulationFactory extends UObject {

}
declare const UClothingSimulationFactory: UClothingSimulationFactory;

declare interface UClothingSimulationInteractor extends UObject {
    ClothingInteractors: Record<FName, UClothingInteractor>;
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
    GetClothingInteractor(ClothingAssetName: string | FString): UClothingInteractor;
    EnableGravityOverride(InVector: FVector): void;
    DisableGravityOverride(): void;
    ClothConfigUpdated(): void;
}
declare const UClothingSimulationInteractor: UClothingSimulationInteractor;

declare interface UDEPRECATED_ClothSharedSimConfigBase extends UObject {

}
declare const UDEPRECATED_ClothSharedSimConfigBase: UDEPRECATED_ClothSharedSimConfigBase;

