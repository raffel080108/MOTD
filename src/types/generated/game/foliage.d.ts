declare interface AInstancedFoliageActor extends AISMPartitionActor {

}
declare const AInstancedFoliageActor: AInstancedFoliageActor;

declare interface AInteractiveFoliageActor extends AStaticMeshActor {
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
    CapsuleTouched(OverlappedComp: UPrimitiveComponent, Other: AActor, OtherComp: UPrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, OverlapInfo: FHitResult): void;
}
declare const AInteractiveFoliageActor: AInteractiveFoliageActor;

declare interface AProceduralFoliageBlockingVolume extends AVolume {
    ProceduralFoliageVolume: AProceduralFoliageVolume;
    DensityFalloff: FFoliageDensityFalloff;
}
declare const AProceduralFoliageBlockingVolume: AProceduralFoliageBlockingVolume;

declare interface AProceduralFoliageVolume extends AVolume {
    ProceduralComponent: UProceduralFoliageComponent;
}
declare const AProceduralFoliageVolume: AProceduralFoliageVolume;

declare interface FFoliageDensityFalloff {
    bUseFalloffCurve: boolean;
    FalloffCurve: FRuntimeFloatCurve;
}
declare const FFoliageDensityFalloff: FFoliageDensityFalloff;

declare interface FFoliageTypeObject {
    FoliageTypeObject: UObject;
    TypeInstance: UFoliageType;
    bIsAsset: boolean;
    Type: TSubclassOf<UFoliageType_InstancedStaticMesh>;
}
declare const FFoliageTypeObject: FFoliageTypeObject;

declare interface FFoliageVertexColorChannelMask {
    UseMask: boolean;
    MaskThreshold: number;
    InvertMask: boolean;
}
declare const FFoliageVertexColorChannelMask: FFoliageVertexColorChannelMask;

declare interface FProceduralFoliageInstance {
    Rotation: FQuat;
    Location: FVector;
    Age: number;
    Normal: FVector;
    Scale: number;
    Type: UFoliageType;
}
declare const FProceduralFoliageInstance: FProceduralFoliageInstance;

declare interface UFoliageInstancedStaticMeshComponent extends UHierarchicalInstancedStaticMeshComponent {
    OnInstanceTakePointDamage: FFoliageInstancedStaticMeshComponentOnInstanceTakePointDamage;
    OnInstanceTakeRadialDamage: FFoliageInstancedStaticMeshComponentOnInstanceTakeRadialDamage;
    bEnableDiscardOnLoad: boolean;
    GenerationGuid: FGuid;
}
declare const UFoliageInstancedStaticMeshComponent: UFoliageInstancedStaticMeshComponent;

declare interface UFoliageStatistics extends UBlueprintFunctionLibrary {
    FoliageOverlappingSphereCount(WorldContextObject: UObject, StaticMesh: UStaticMesh, CenterPosition: FVector, Radius: number): number;
    FoliageOverlappingBoxTransforms(WorldContextObject: UObject, StaticMesh: UStaticMesh, Box: FBox, OutTransforms: TArray<FTransform>): void;
    FoliageOverlappingBoxCount(WorldContextObject: UObject, StaticMesh: UStaticMesh, Box: FBox): number;
}
declare const UFoliageStatistics: UFoliageStatistics;

declare interface UFoliageType extends UObject {
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
    LandscapeLayers: TArray<FName>;
    MinimumLayerWeight: number;
    ExclusionLandscapeLayers: TArray<FName>;
    MinimumExclusionLayerWeight: number;
    LandscapeLayer: FName;
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
    RuntimeVirtualTextures: TArray<URuntimeVirtualTexture>;
    VirtualTextureCullMips: number;
    VirtualTextureRenderPassType: ERuntimeVirtualTextureMainPassType;
}
declare const UFoliageType: UFoliageType;

declare interface UFoliageType_Actor extends UFoliageType {
    ActorClass: TSubclassOf<AActor>;
    bShouldAttachToBaseComponent: boolean;
    bStaticMeshOnly: boolean;
    StaticMeshOnlyComponentClass: TSubclassOf<UFoliageInstancedStaticMeshComponent>;
}
declare const UFoliageType_Actor: UFoliageType_Actor;

declare interface UFoliageType_InstancedStaticMesh extends UFoliageType {
    mesh: UStaticMesh;
    OverrideMaterials: TArray<UMaterialInterface>;
    NaniteOverrideMaterials: TArray<UMaterialInterface>;
    ComponentClass: TSubclassOf<UFoliageInstancedStaticMeshComponent>;
}
declare const UFoliageType_InstancedStaticMesh: UFoliageType_InstancedStaticMesh;

declare interface UGrassInstancedStaticMeshComponent extends UHierarchicalInstancedStaticMeshComponent {

}
declare const UGrassInstancedStaticMeshComponent: UGrassInstancedStaticMeshComponent;

declare interface UInteractiveFoliageComponent extends UStaticMeshComponent {

}
declare const UInteractiveFoliageComponent: UInteractiveFoliageComponent;

declare interface UProceduralFoliageComponent extends UActorComponent {
    FoliageSpawner: UProceduralFoliageSpawner;
    TileOverlap: number;
    SpawningVolume: AVolume;
    ProceduralGuid: FGuid;
}
declare const UProceduralFoliageComponent: UProceduralFoliageComponent;

declare interface UProceduralFoliageSpawner extends UObject {
    RandomSeed: number;
    TileSize: number;
    NumUniqueTiles: number;
    MinimumQuadTreeSize: number;
    FoliageTypes: TArray<FFoliageTypeObject>;
    bUseOverrideFoliageTerrainMaterials: boolean;
    OverrideFoliageTerrainMaterials: TArray<TSoftObjectPtr<UMaterialInterface>>;
    Simulate(NumSteps: number): void;
}
declare const UProceduralFoliageSpawner: UProceduralFoliageSpawner;

declare interface UProceduralFoliageTile extends UObject {
    FoliageSpawner: UProceduralFoliageSpawner;
    InstancesArray: TArray<FProceduralFoliageInstance>;
}
declare const UProceduralFoliageTile: UProceduralFoliageTile;

