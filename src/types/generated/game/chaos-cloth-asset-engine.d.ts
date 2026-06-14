declare interface FChaosClothAssetLodTransitionDataCache {

}
declare const FChaosClothAssetLodTransitionDataCache: FChaosClothAssetLodTransitionDataCache;

declare interface FChaosClothSimulationLodModel {
    Positions: TArray<FVector3f>;
    Normals: TArray<FVector3f>;
    Indices: TArray<uint32>;
    BoneData: TArray<FClothVertBoneData>;
    RequiredExtraBoneIndices: TArray<uint16>;
    PatternPositions: TArray<FVector2f>;
    PatternIndices: TArray<uint32>;
    PatternToWeldedIndices: TArray<uint32>;
    TetherData: FClothTetherData;
}
declare const FChaosClothSimulationLodModel: FChaosClothSimulationLodModel;

declare interface FChaosClothSimulationModel {
    ClothSimulationLodModels: TArray<FChaosClothSimulationLodModel>;
    UsedBoneNames: TArray<FName>;
    UsedBoneIndices: TArray<number>;
    ReferenceBoneIndex: number;
}
declare const FChaosClothSimulationModel: FChaosClothSimulationModel;

declare interface FChaosClothSimulationProperties {
    ClothOutfitInteractor: UChaosClothAssetInteractor;
}
declare const FChaosClothSimulationProperties: FChaosClothSimulationProperties;

declare interface UChaosClothAsset extends UChaosClothAssetBase {
    Skeleton: USkeleton;
    PhysicsAsset: UPhysicsAsset;
    bSmoothTransition: boolean;
    bUseMultipleInfluences: boolean;
    SkinningKernelRadius: number;
    AssetGuid: FGuid;
}
declare const UChaosClothAsset: UChaosClothAsset;

declare interface UChaosClothAssetBase extends USkinnedAsset {
    DataflowInstance: FDataflowInstance;
    Materials: TArray<FSkeletalMaterial>;
    LODInfo: TArray<FSkeletalMeshLODInfo>;
    MinQualityLevelLOD: FPerQualityLevelInt;
    DisableBelowMinLodStripping: FPerPlatformBool;
    MinLOD: FPerPlatformInt;
    bSupportRayTracing: boolean;
    RayTracingMinLOD: number;
    ShadowPhysicsAsset: UPhysicsAsset;
    OverlayMaterial: UMaterialInterface;
    OverlayMaterialMaxDrawDistance: number;
    bHasVertexColors: boolean;
    Bounds: FBoxSphereBounds;
    SetOverlayMaterialMaxDrawDistance(InMaxDrawDistance: number): void;
    SetOverlayMaterial(NewOverlayMaterial: UMaterialInterface): void;
    GetShadowPhysicsAsset(): UPhysicsAsset;
    GetOverlayMaterialMaxDrawDistance(): number;
    GetOverlayMaterial(): UMaterialInterface;
}
declare const UChaosClothAssetBase: UChaosClothAssetBase;

declare interface UChaosClothAssetInteractor extends UObject {
    SetWeightedFloatValue(PropertyName: string | FString, LODIndex: number, Value: FVector2D): void;
    SetVectorValue(PropertyName: string | FString, LODIndex: number, Value: FVector): void;
    SetStringValue(PropertyName: string | FString, LODIndex: number, Value: string | FString): void;
    SetLowFloatValue(PropertyName: string | FString, LODIndex: number, Value: number): void;
    SetIntValue(PropertyName: string | FString, LODIndex: number, Value: number): void;
    SetHighFloatValue(PropertyName: string | FString, LODIndex: number, Value: number): void;
    SetFloatValue(PropertyName: string | FString, LODIndex: number, Value: number): void;
    GetWeightedFloatValue(PropertyName: string | FString, LODIndex: number, DefaultValue: FVector2D): FVector2D;
    GetVectorValue(PropertyName: string | FString, LODIndex: number, DefaultValue: FVector): FVector;
    GetStringValue(PropertyName: string | FString, LODIndex: number, DefaultValue: string | FString): FString;
    GetLowFloatValue(PropertyName: string | FString, LODIndex: number, DefaultValue: number): number;
    GetIntValue(PropertyName: string | FString, LODIndex: number, DefaultValue: number): number;
    GetHighFloatValue(PropertyName: string | FString, LODIndex: number, DefaultValue: number): number;
    GetFloatValue(PropertyName: string | FString, LODIndex: number, DefaultValue: number): number;
    GetAllProperties(LODIndex: number): TArray<FString>;
}
declare const UChaosClothAssetInteractor: UChaosClothAssetInteractor;

declare interface UChaosClothComponent extends USkinnedMeshComponent {
    SimulationAsset: FDataflowSimulationAsset;
    BlendWeight: number;
    ClothGeometryScale: number;
    bUseAttachedParentAsPoseComponent: boolean;
    bWaitForParallelTask: boolean;
    bEnableSimulation: boolean;
    bSuspendSimulation: boolean;
    bBindToLeaderComponent: boolean;
    bTeleport: boolean;
    bReset: boolean;
    bCollideWithEnvironment: boolean;
    TeleportDistanceThreshold: number;
    TeleportRotationThreshold: number;
    ClothSimulationProperties: TArray<FChaosClothSimulationProperties>;
    SuspendSimulation(): void;
    SetTeleportRotationThreshold(Threshold: number): void;
    SetTeleportDistanceThreshold(Threshold: number): void;
    SetSimulateInEditor(bNewSimulateState: boolean): void;
    SetEnableSimulation(bEnable: boolean): void;
    SetCollideWithEnvironment(bCollide: boolean): void;
    SetClothAsset(InClothAsset: UChaosClothAsset): void;
    SetAsset(InAsset: UChaosClothAssetBase): void;
    ResumeSimulation(): void;
    ResetTeleportMode(): void;
    ResetConfigProperties(): void;
    ResetCollisionSources(): void;
    RemoveCollisionSources(SourceComponent: USkinnedMeshComponent): void;
    RemoveCollisionSource(SourceComponent: USkinnedMeshComponent, SourcePhysicsAsset: UPhysicsAsset): void;
    RecreateClothSimulationProxy(): void;
    IsSimulationSuspended(): boolean;
    IsSimulationEnabled(): boolean;
    GetTeleportRotationThreshold(): number;
    GetTeleportDistanceThreshold(): number;
    GetCollideWithEnvironment(): boolean;
    GetClothOutfitInteractor(ModelIndex: number, ClothSimulationModelName: FName): UChaosClothAssetInteractor;
    GetClothAsset(): UChaosClothAsset;
    GetAsset(): UChaosClothAssetBase;
    ForceNextUpdateTeleportAndReset(): void;
    ForceNextUpdateTeleport(): void;
    AddCollisionSource(SourceComponent: USkinnedMeshComponent, SourcePhysicsAsset: UPhysicsAsset, bUseSphylsOnly: boolean): void;
}
declare const UChaosClothComponent: UChaosClothComponent;

declare interface UClothAssetSkeletalMeshConverter extends UObject {

}
declare const UClothAssetSkeletalMeshConverter: UClothAssetSkeletalMeshConverter;

