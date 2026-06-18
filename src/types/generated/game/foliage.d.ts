declare interface AInstancedFoliageActor extends AISMPartitionActor {
    readonly __staticRegistry: 
        AISMPartitionActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AISMPartitionActor['__propertyRegistry'];
}

declare interface AInteractiveFoliageActor extends AStaticMeshActor {
    readonly __static_AInteractiveFoliageActor: {
        CapsuleTouched(OverlappedComp: UPrimitiveComponent, Other: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, OverlapInfo: FHitResult): void;
    };
    readonly __properties_AInteractiveFoliageActor: {
        CapsuleComponent: UCapsuleComponent;
        TouchingActorEntryPosition: FVector;
        FoliageVelocity: FVector;
        FoliageForce: FVector;
        FoliagePosition: FVector;
        FoliageDamageImpulseScale: number;
        FoliageTouchImpulseScale: number;
        FoliageStiffness: number;
        FoliageStiffnessQuadratic: number;
        FoliageDamping: number;
        MaxDamageImpulse: number;
        MaxTouchImpulse: number;
        MaxForce: number;
        Mass: number;
    };
    readonly __staticRegistry: 
        AInteractiveFoliageActor['__static_AInteractiveFoliageActor'] &
        AStaticMeshActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AInteractiveFoliageActor['__properties_AInteractiveFoliageActor'] &
        AStaticMeshActor['__propertyRegistry'];
}

declare interface AProceduralFoliageBlockingVolume extends AVolume {
    readonly __properties_AProceduralFoliageBlockingVolume: {
        ProceduralFoliageVolume: AProceduralFoliageVolume;
        DensityFalloff: FFoliageDensityFalloff;
    };
    readonly __staticRegistry: 
        AVolume['__staticRegistry'];
    readonly __propertyRegistry: 
        AProceduralFoliageBlockingVolume['__properties_AProceduralFoliageBlockingVolume'] &
        AVolume['__propertyRegistry'];
}

declare interface AProceduralFoliageVolume extends AVolume {
    readonly __properties_AProceduralFoliageVolume: {
        ProceduralComponent: UProceduralFoliageComponent;
    };
    readonly __staticRegistry: 
        AVolume['__staticRegistry'];
    readonly __propertyRegistry: 
        AProceduralFoliageVolume['__properties_AProceduralFoliageVolume'] &
        AVolume['__propertyRegistry'];
}

declare interface FFoliageDensityFalloff {
    bUseFalloffCurve: boolean;
    FalloffCurve: FRuntimeFloatCurve;
}

declare interface FFoliageTypeObject {
    FoliageTypeObject: UObject;
    TypeInstance: UFoliageType;
    bIsAsset: boolean;
    Type: TSubclassOf<UFoliageType_InstancedStaticMesh>;
}

declare interface FFoliageVertexColorChannelMask {
    UseMask: boolean;
    MaskThreshold: number;
    InvertMask: boolean;
}

declare interface FProceduralFoliageInstance {
    Rotation: FQuat;
    Location: FVector;
    Age: number;
    Normal: FVector;
    Scale: number;
    Type: UFoliageType;
}

declare interface UFoliageInstancedStaticMeshComponent extends UHierarchicalInstancedStaticMeshComponent {
    readonly __properties_UFoliageInstancedStaticMeshComponent: {
        OnInstanceTakePointDamage: FFoliageInstancedStaticMeshComponentOnInstanceTakePointDamage;
        OnInstanceTakeRadialDamage: FFoliageInstancedStaticMeshComponentOnInstanceTakeRadialDamage;
        bEnableDiscardOnLoad: boolean;
        GenerationGuid: FGuid;
    };
    readonly __staticRegistry: 
        UHierarchicalInstancedStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UFoliageInstancedStaticMeshComponent['__properties_UFoliageInstancedStaticMeshComponent'] &
        UHierarchicalInstancedStaticMeshComponent['__propertyRegistry'];
}

declare interface UFoliageStatistics extends UBlueprintFunctionLibrary {
    readonly __static_UFoliageStatistics: {
        FoliageOverlappingSphereCount(WorldContextObject: UObject, StaticMesh: UStaticMesh, CenterPosition: FVector, Radius: number): number;
        FoliageOverlappingBoxTransforms(WorldContextObject: UObject, StaticMesh: UStaticMesh, Box: FBox, OutTransforms: FTransform[]): void;
        FoliageOverlappingBoxCount(WorldContextObject: UObject, StaticMesh: UStaticMesh, Box: FBox): number;
    };
    readonly __staticRegistry: 
        UFoliageStatistics['__static_UFoliageStatistics'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFoliageType extends UObject {
    readonly __properties_UFoliageType: {
        UpdateGuid: FGuid;
        Density: number;
        DensityAdjustmentFactor: number;
        Radius: number;
        bSingleInstanceModeOverrideRadius: boolean;
        SingleInstanceModeRadius: number;
        Scaling: EFoliageScaling;
        ScaleX: FFloatInterval;
        ScaleY: FFloatInterval;
        ScaleZ: FFloatInterval;
        VertexColorMaskByChannel: FFoliageVertexColorChannelMask;
        VertexColorMask: FoliageVertexColorMask;
        VertexColorMaskThreshold: number;
        VertexColorMaskInvert: boolean;
        ZOffset: FFloatInterval;
        AlignToNormal: boolean;
        AverageNormal: boolean;
        AverageNormalSingleComponent: boolean;
        AlignMaxAngle: number;
        RandomYaw: boolean;
        RandomPitchAngle: number;
        GroundSlopeAngle: FFloatInterval;
        Height: FFloatInterval;
        LandscapeLayers: string[];
        MinimumLayerWeight: number;
        ExclusionLandscapeLayers: string[];
        MinimumExclusionLayerWeight: number;
        LandscapeLayer: string;
        CollisionWithWorld: boolean;
        CollisionScale: FVector;
        AverageNormalSampleCount: number;
        MeshBounds: FBoxSphereBounds;
        LowBoundOriginRadius: FVector;
        Mobility: EComponentMobility;
        CullDistance: FInt32Interval;
        bEnableStaticLighting: boolean;
        CastShadow: boolean;
        bAffectDynamicIndirectLighting: boolean;
        bAffectDistanceFieldLighting: boolean;
        bCastDynamicShadow: boolean;
        bCastStaticShadow: boolean;
        bCastContactShadow: boolean;
        bCastShadowAsTwoSided: boolean;
        bReceivesDecals: boolean;
        bOverrideLightMapRes: boolean;
        ShadowCacheInvalidationBehavior: EShadowCacheInvalidationBehavior;
        OverriddenLightMapRes: number;
        LightmapType: ELightmapType;
        bUseAsOccluder: boolean;
        bVisibleInRayTracing: boolean;
        bEvaluateWorldPositionOffset: boolean;
        WorldPositionOffsetDisableDistance: number;
        BodyInstance: FBodyInstance;
        CustomNavigableGeometry: EHasCustomNavigableGeometry;
        LightingChannels: FLightingChannels;
        bRenderCustomDepth: boolean;
        CustomDepthStencilWriteMask: ERendererStencilMask;
        CustomDepthStencilValue: number;
        TranslucencySortPriority: number;
        CollisionRadius: number;
        ShadeRadius: number;
        NumSteps: number;
        InitialSeedDensity: number;
        AverageSpreadDistance: number;
        SpreadVariance: number;
        SeedsPerStep: number;
        DistributionSeed: number;
        MaxInitialSeedOffset: number;
        bCanGrowInShade: boolean;
        bSpawnsInShade: boolean;
        MaxInitialAge: number;
        MaxAge: number;
        OverlapPriority: number;
        ProceduralScale: FFloatInterval;
        ScaleCurve: FRuntimeFloatCurve;
        DensityFalloff: FFoliageDensityFalloff;
        ChangeCount: number;
        ReapplyDensity: boolean;
        ReapplyRadius: boolean;
        ReapplyAlignToNormal: boolean;
        ReapplyRandomYaw: boolean;
        ReapplyScaling: boolean;
        ReapplyScaleX: boolean;
        ReapplyScaleY: boolean;
        ReapplyScaleZ: boolean;
        ReapplyRandomPitchAngle: boolean;
        ReapplyGroundSlope: boolean;
        ReapplyHeight: boolean;
        ReapplyLandscapeLayers: boolean;
        ReapplyZOffset: boolean;
        ReapplyCollisionWithWorld: boolean;
        ReapplyVertexColorMask: boolean;
        bEnableDensityScaling: boolean;
        bEnableDiscardOnLoad: boolean;
        bEnableCullDistanceScaling: boolean;
        RuntimeVirtualTextures: URuntimeVirtualTexture[];
        VirtualTextureCullMips: number;
        VirtualTextureRenderPassType: ERuntimeVirtualTextureMainPassType;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UFoliageType['__properties_UFoliageType'] &
        UObject['__propertyRegistry'];
}

declare interface UFoliageType_Actor extends UFoliageType {
    readonly __properties_UFoliageType_Actor: {
        ActorClass: TSubclassOf<AActor>;
        bShouldAttachToBaseComponent: boolean;
        bStaticMeshOnly: boolean;
        StaticMeshOnlyComponentClass: TSubclassOf<UFoliageInstancedStaticMeshComponent>;
    };
    readonly __staticRegistry: 
        UFoliageType['__staticRegistry'];
    readonly __propertyRegistry: 
        UFoliageType_Actor['__properties_UFoliageType_Actor'] &
        UFoliageType['__propertyRegistry'];
}

declare interface UFoliageType_InstancedStaticMesh extends UFoliageType {
    readonly __properties_UFoliageType_InstancedStaticMesh: {
        mesh: UStaticMesh;
        OverrideMaterials: UMaterialInterface[];
        NaniteOverrideMaterials: UMaterialInterface[];
        ComponentClass: TSubclassOf<UFoliageInstancedStaticMeshComponent>;
    };
    readonly __staticRegistry: 
        UFoliageType['__staticRegistry'];
    readonly __propertyRegistry: 
        UFoliageType_InstancedStaticMesh['__properties_UFoliageType_InstancedStaticMesh'] &
        UFoliageType['__propertyRegistry'];
}

declare interface UGrassInstancedStaticMeshComponent extends UHierarchicalInstancedStaticMeshComponent {
    readonly __staticRegistry: 
        UHierarchicalInstancedStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UHierarchicalInstancedStaticMeshComponent['__propertyRegistry'];
}

declare interface UInteractiveFoliageComponent extends UStaticMeshComponent {
    readonly __staticRegistry: 
        UStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UStaticMeshComponent['__propertyRegistry'];
}

declare interface UProceduralFoliageComponent extends UActorComponent {
    readonly __properties_UProceduralFoliageComponent: {
        FoliageSpawner: UProceduralFoliageSpawner;
        TileOverlap: number;
        SpawningVolume: AVolume;
        ProceduralGuid: FGuid;
    };
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UProceduralFoliageComponent['__properties_UProceduralFoliageComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UProceduralFoliageSpawner extends UObject {
    readonly __static_UProceduralFoliageSpawner: {
        Simulate(NumSteps: number): void;
    };
    readonly __properties_UProceduralFoliageSpawner: {
        RandomSeed: number;
        TileSize: number;
        NumUniqueTiles: number;
        MinimumQuadTreeSize: number;
        FoliageTypes: FFoliageTypeObject[];
        bUseOverrideFoliageTerrainMaterials: boolean;
        OverrideFoliageTerrainMaterials: TSoftObjectPtr<UMaterialInterface>[];
    };
    readonly __staticRegistry: 
        UProceduralFoliageSpawner['__static_UProceduralFoliageSpawner'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UProceduralFoliageSpawner['__properties_UProceduralFoliageSpawner'] &
        UObject['__propertyRegistry'];
}

declare interface UProceduralFoliageTile extends UObject {
    readonly __properties_UProceduralFoliageTile: {
        FoliageSpawner: UProceduralFoliageSpawner;
        InstancesArray: FProceduralFoliageInstance[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UProceduralFoliageTile['__properties_UProceduralFoliageTile'] &
        UObject['__propertyRegistry'];
}

