declare type FChaosClothAssetLodTransitionDataCache = object;

declare interface FChaosClothSimulationLodModel {
    Positions: FVector3f[];
    Normals: FVector3f[];
    Indices: number[];
    BoneData: FClothVertBoneData[];
    RequiredExtraBoneIndices: number[];
    PatternPositions: FVector2f[];
    PatternIndices: number[];
    PatternToWeldedIndices: number[];
    TetherData: FClothTetherData;
}

declare interface FChaosClothSimulationModel {
    ClothSimulationLodModels: FChaosClothSimulationLodModel[];
    UsedBoneNames: string[];
    UsedBoneIndices: number[];
    ReferenceBoneIndex: number;
}

declare interface FChaosClothSimulationProperties {
    ClothOutfitInteractor: UChaosClothAssetInteractor;
}

declare interface UChaosClothAsset extends UChaosClothAssetBase {
    readonly __properties_UChaosClothAsset: {
        Skeleton: USkeleton;
        PhysicsAsset: UPhysicsAsset;
        bSmoothTransition: boolean;
        bUseMultipleInfluences: boolean;
        SkinningKernelRadius: number;
        AssetGuid: FGuid;
    };
    readonly __staticRegistry: 
        UChaosClothAssetBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosClothAsset['__properties_UChaosClothAsset'] &
        UChaosClothAssetBase['__propertyRegistry'];
}

declare interface UChaosClothAssetBase extends USkinnedAsset {
    readonly __static_UChaosClothAssetBase: {
        SetOverlayMaterialMaxDrawDistance(InMaxDrawDistance: number): void;
        SetOverlayMaterial(NewOverlayMaterial: UMaterialInterface): void;
        GetShadowPhysicsAsset(): UPhysicsAsset;
        GetOverlayMaterialMaxDrawDistance(): number;
        GetOverlayMaterial(): UMaterialInterface;
    };
    readonly __properties_UChaosClothAssetBase: {
        DataflowInstance: FDataflowInstance;
        Materials: FSkeletalMaterial[];
        LODInfo: FSkeletalMeshLODInfo[];
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
    };
    readonly __staticRegistry: 
        UChaosClothAssetBase['__static_UChaosClothAssetBase'] &
        USkinnedAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosClothAssetBase['__properties_UChaosClothAssetBase'] &
        USkinnedAsset['__propertyRegistry'];
}

declare interface UChaosClothAssetInteractor extends UObject {
    readonly __static_UChaosClothAssetInteractor: {
        SetWeightedFloatValue(PropertyName: string, LODIndex: number, Value: FVector2D): void;
        SetVectorValue(PropertyName: string, LODIndex: number, Value: FVector): void;
        SetStringValue(PropertyName: string, LODIndex: number, Value: string): void;
        SetLowFloatValue(PropertyName: string, LODIndex: number, Value: number): void;
        SetIntValue(PropertyName: string, LODIndex: number, Value: number): void;
        SetHighFloatValue(PropertyName: string, LODIndex: number, Value: number): void;
        SetFloatValue(PropertyName: string, LODIndex: number, Value: number): void;
        GetWeightedFloatValue(PropertyName: string, LODIndex: number, DefaultValue: FVector2D): FVector2D;
        GetVectorValue(PropertyName: string, LODIndex: number, DefaultValue: FVector): FVector;
        GetStringValue(PropertyName: string, LODIndex: number, DefaultValue: string): string;
        GetLowFloatValue(PropertyName: string, LODIndex: number, DefaultValue: number): number;
        GetIntValue(PropertyName: string, LODIndex: number, DefaultValue: number): number;
        GetHighFloatValue(PropertyName: string, LODIndex: number, DefaultValue: number): number;
        GetFloatValue(PropertyName: string, LODIndex: number, DefaultValue: number): number;
        GetAllProperties(LODIndex: number): string[];
    };
    readonly __staticRegistry: 
        UChaosClothAssetInteractor['__static_UChaosClothAssetInteractor'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UChaosClothComponent extends USkinnedMeshComponent {
    readonly __static_UChaosClothComponent: {
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
        GetClothOutfitInteractor(ModelIndex: number, ClothSimulationModelName: string): UChaosClothAssetInteractor;
        GetClothAsset(): UChaosClothAsset;
        GetAsset(): UChaosClothAssetBase;
        ForceNextUpdateTeleportAndReset(): void;
        ForceNextUpdateTeleport(): void;
        AddCollisionSource(SourceComponent: USkinnedMeshComponent, SourcePhysicsAsset: UPhysicsAsset, bUseSphylsOnly: boolean): void;
    };
    readonly __properties_UChaosClothComponent: {
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
        ClothSimulationProperties: FChaosClothSimulationProperties[];
    };
    readonly __staticRegistry: 
        UChaosClothComponent['__static_UChaosClothComponent'] &
        USkinnedMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosClothComponent['__properties_UChaosClothComponent'] &
        USkinnedMeshComponent['__propertyRegistry'];
}

declare interface UClothAssetSkeletalMeshConverter extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

