declare interface AGeometryCollectionActor extends AActor {
    GeometryCollectionComponent: UGeometryCollectionComponent;
    GeometryCollectionDebugDrawComponent: UGeometryCollectionDebugDrawComponent;
    RaycastSingle(Start: FVector, End: FVector, OutHit: FHitResult): boolean;
}
declare const AGeometryCollectionActor: AGeometryCollectionActor;

declare interface AGeometryCollectionDebugDrawActor extends AActor {
    WarningMessage: FGeometryCollectionDebugDrawWarningMessage;
    SelectedRigidBody: FGeometryCollectionDebugDrawActorSelectedRigidBody;
    bDebugDrawWholeCollection: boolean;
    bDebugDrawHierarchy: boolean;
    bDebugDrawClustering: boolean;
    HideGeometry: EGeometryCollectionDebugDrawActorHideGeometry;
    bShowRigidBodyId: boolean;
    bShowRigidBodyCollision: boolean;
    bCollisionAtOrigin: boolean;
    bShowRigidBodyTransform: boolean;
    bShowRigidBodyInertia: boolean;
    bShowRigidBodyVelocity: boolean;
    bShowRigidBodyForce: boolean;
    bShowRigidBodyInfos: boolean;
    bShowTransformIndex: boolean;
    bShowTransform: boolean;
    bShowParent: boolean;
    bShowLevel: boolean;
    bShowConnectivityEdges: boolean;
    bShowGeometryIndex: boolean;
    bShowGeometryTransform: boolean;
    bShowBoundingBox: boolean;
    bShowFaces: boolean;
    bShowFaceIndices: boolean;
    bShowFaceNormals: boolean;
    bShowSingleFace: boolean;
    SingleFaceIndex: number;
    bShowVertices: boolean;
    bShowVertexIndices: boolean;
    bShowVertexNormals: boolean;
    bUseActiveVisualization: boolean;
    PointThickness: number;
    LineThickness: number;
    bTextShadow: boolean;
    TextScale: number;
    NormalScale: number;
    AxisScale: number;
    ArrowScale: number;
    RigidBodyIdColor: FColor;
    RigidBodyTransformScale: number;
    RigidBodyCollisionColor: FColor;
    RigidBodyInertiaColor: FColor;
    RigidBodyVelocityColor: FColor;
    RigidBodyForceColor: FColor;
    RigidBodyInfoColor: FColor;
    TransformIndexColor: FColor;
    TransformScale: number;
    LevelColor: FColor;
    ParentColor: FColor;
    ConnectivityEdgeThickness: number;
    GeometryIndexColor: FColor;
    GeometryTransformScale: number;
    BoundingBoxColor: FColor;
    FaceColor: FColor;
    FaceIndexColor: FColor;
    FaceNormalColor: FColor;
    SingleFaceColor: FColor;
    VertexColor: FColor;
    VertexIndexColor: FColor;
    VertexNormalColor: FColor;
    SpriteComponent: UBillboardComponent;
}
declare const AGeometryCollectionDebugDrawActor: AGeometryCollectionDebugDrawActor;

declare interface AGeometryCollectionISMPoolActor extends AActor {
    ISMPoolComp: UGeometryCollectionISMPoolComponent;
    ISMPoolDebugDrawComp: UGeometryCollectionISMPoolDebugDrawComponent;
}
declare const AGeometryCollectionISMPoolActor: AGeometryCollectionISMPoolActor;

declare interface AGeometryCollectionRenderLevelSetActor extends AActor {
    TargetVolumeTexture: UVolumeTexture;
    RayMarchMaterial: UMaterial;
    SurfaceTolerance: number;
    Isovalue: number;
    Enabled: boolean;
    RenderVolumeBoundingBox: boolean;
}
declare const AGeometryCollectionRenderLevelSetActor: AGeometryCollectionRenderLevelSetActor;

declare interface FChaosBreakingEventData {
    Location: FVector;
    Velocity: FVector;
    Mass: number;
}
declare const FChaosBreakingEventData: FChaosBreakingEventData;

declare interface FChaosBreakingEventRequestSettings {
    MaxNumberOfResults: number;
    MinRadius: number;
    MinSpeed: number;
    MinMass: number;
    MaxDistance: number;
    SortMethod: EChaosBreakingSortMethod;
}
declare const FChaosBreakingEventRequestSettings: FChaosBreakingEventRequestSettings;

declare interface FChaosCollisionEventData {
    Location: FVector;
    Normal: FVector;
    Velocity1: FVector;
    Velocity2: FVector;
    Mass1: number;
    Mass2: number;
    Impulse: FVector;
}
declare const FChaosCollisionEventData: FChaosCollisionEventData;

declare interface FChaosCollisionEventRequestSettings {
    MaxNumberResults: number;
    MinMass: number;
    MinSpeed: number;
    MinImpulse: number;
    MaxDistance: number;
    SortMethod: EChaosCollisionSortMethod;
}
declare const FChaosCollisionEventRequestSettings: FChaosCollisionEventRequestSettings;

declare interface FChaosRemovalEventData {
    Location: FVector;
    Mass: number;
    ParticleIndex: number;
}
declare const FChaosRemovalEventData: FChaosRemovalEventData;

declare interface FChaosRemovalEventRequestSettings {
    MaxNumberOfResults: number;
    MinMass: number;
    MaxDistance: number;
    SortMethod: EChaosRemovalSortMethod;
}
declare const FChaosRemovalEventRequestSettings: FChaosRemovalEventRequestSettings;

declare interface FChaosTrailingEventData {
    Location: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    ParticleIndex: number;
}
declare const FChaosTrailingEventData: FChaosTrailingEventData;

declare interface FChaosTrailingEventRequestSettings {
    MaxNumberOfResults: number;
    MinMass: number;
    MinSpeed: number;
    MinAngularSpeed: number;
    MaxDistance: number;
    SortMethod: EChaosTrailingSortMethod;
}
declare const FChaosTrailingEventRequestSettings: FChaosTrailingEventRequestSettings;

declare interface FGeomComponentCacheParameters {
    CacheMode: EGeometryCollectionCacheType;
    TargetCache: UGeometryCollectionCache;
    ReverseCacheBeginTime: number;
    SaveCollisionData: boolean;
    DoGenerateCollisionData: boolean;
    CollisionDataSizeMax: number;
    DoCollisionDataSpatialHash: boolean;
    CollisionDataSpatialHashRadius: number;
    MaxCollisionPerCell: number;
    SaveBreakingData: boolean;
    DoGenerateBreakingData: boolean;
    BreakingDataSizeMax: number;
    DoBreakingDataSpatialHash: boolean;
    BreakingDataSpatialHashRadius: number;
    MaxBreakingPerCell: number;
    SaveTrailingData: boolean;
    DoGenerateTrailingData: boolean;
    TrailingDataSizeMax: number;
    TrailingMinSpeedThreshold: number;
    TrailingMinVolumeThreshold: number;
}
declare const FGeomComponentCacheParameters: FGeomComponentCacheParameters;

declare interface FGeometryCollectionAutoInstanceMesh {
    mesh: UStaticMesh;
    Materials: TArray<UMaterialInterface>;
    NumInstances: number;
    CustomData: TArray<number>;
}
declare const FGeometryCollectionAutoInstanceMesh: FGeometryCollectionAutoInstanceMesh;

declare interface FGeometryCollectionCollisionParticleData {
    CollisionParticlesFraction: number;
    MaximumCollisionParticles: number;
}
declare const FGeometryCollectionCollisionParticleData: FGeometryCollectionCollisionParticleData;

declare interface FGeometryCollectionCollisionTypeData {
    CollisionType: ECollisionTypeEnum;
    ImplicitType: EImplicitTypeEnum;
    LevelSet: FGeometryCollectionLevelSetData;
    CollisionParticles: FGeometryCollectionCollisionParticleData;
    CollisionObjectReductionPercentage: number;
    CollisionMarginFraction: number;
}
declare const FGeometryCollectionCollisionTypeData: FGeometryCollectionCollisionTypeData;

declare interface FGeometryCollectionDamagePropagationData {
    bEnabled: boolean;
    BreakDamagePropagationFactor: number;
    ShockDamagePropagationFactor: number;
}
declare const FGeometryCollectionDamagePropagationData: FGeometryCollectionDamagePropagationData;

declare interface FGeometryCollectionDebugDrawActorSelectedRigidBody {
    ID: number;
    Solver: AChaosSolverActor;
    GeometryCollection: AGeometryCollectionActor;
}
declare const FGeometryCollectionDebugDrawActorSelectedRigidBody: FGeometryCollectionDebugDrawActorSelectedRigidBody;

declare interface FGeometryCollectionDebugDrawWarningMessage {

}
declare const FGeometryCollectionDebugDrawWarningMessage: FGeometryCollectionDebugDrawWarningMessage;

declare interface FGeometryCollectionEmbeddedExemplar {
    StaticMeshExemplar: FSoftObjectPath;
    StartCullDistance: number;
    EndCullDistance: number;
    InstanceCount: number;
}
declare const FGeometryCollectionEmbeddedExemplar: FGeometryCollectionEmbeddedExemplar;

declare interface FGeometryCollectionLevelSetData {
    MinLevelSetResolution: number;
    MaxLevelSetResolution: number;
    MinClusterLevelSetResolution: number;
    MaxClusterLevelSetResolution: number;
}
declare const FGeometryCollectionLevelSetData: FGeometryCollectionLevelSetData;

declare interface FGeometryCollectionProxyMeshData {
    ProxyMeshes: TArray<UStaticMesh>;
    MeshTransforms: TArray<FTransform3f>;
}
declare const FGeometryCollectionProxyMeshData: FGeometryCollectionProxyMeshData;

declare interface FGeometryCollectionRenderResourceSizeInfo {
    MeshResourcesSize: uint64;
    NaniteResourcesSize: uint64;
}
declare const FGeometryCollectionRenderResourceSizeInfo: FGeometryCollectionRenderResourceSizeInfo;

declare interface FGeometryCollectionRepData {

}
declare const FGeometryCollectionRepData: FGeometryCollectionRepData;

declare interface FGeometryCollectionRepDynamicData {

}
declare const FGeometryCollectionRepDynamicData: FGeometryCollectionRepDynamicData;

declare interface FGeometryCollectionRepStateData {

}
declare const FGeometryCollectionRepStateData: FGeometryCollectionRepStateData;

declare interface FGeometryCollectionSizeSpecificData {
    MaxSize: number;
    CollisionShapes: TArray<FGeometryCollectionCollisionTypeData>;
    DamageThreshold: number;
}
declare const FGeometryCollectionSizeSpecificData: FGeometryCollectionSizeSpecificData;

declare interface FGeometryCollectionSource {
    SourceGeometryObject: FSoftObjectPath;
    LocalTransform: FTransform;
    SourceMaterial: TArray<UMaterialInterface>;
    InstanceCustomData: TArray<number>;
    bAddInternalMaterials: boolean;
    bSplitComponents: boolean;
    bSetInternalFromMaterialIndex: boolean;
}
declare const FGeometryCollectionSource: FGeometryCollectionSource;

declare interface IGeometryCollectionCustomDataInterface extends IInterface {

}
declare const IGeometryCollectionCustomDataInterface: IGeometryCollectionCustomDataInterface;

declare interface IGeometryCollectionExternalRenderInterface extends IInterface {

}
declare const IGeometryCollectionExternalRenderInterface: IGeometryCollectionExternalRenderInterface;

declare interface UChaosDestructionListener extends USceneComponent {
    bIsCollisionEventListeningEnabled: boolean;
    bIsBreakingEventListeningEnabled: boolean;
    bIsTrailingEventListeningEnabled: boolean;
    bIsRemovalEventListeningEnabled: boolean;
    CollisionEventRequestSettings: FChaosCollisionEventRequestSettings;
    BreakingEventRequestSettings: FChaosBreakingEventRequestSettings;
    TrailingEventRequestSettings: FChaosTrailingEventRequestSettings;
    RemovalEventRequestSettings: FChaosRemovalEventRequestSettings;
    ChaosSolverActors: TSet<AChaosSolverActor>;
    GeometryCollectionActors: TSet<AGeometryCollectionActor>;
    OnCollisionEvents: FChaosDestructionListenerOnCollisionEvents;
    OnBreakingEvents: FChaosDestructionListenerOnBreakingEvents;
    OnTrailingEvents: FChaosDestructionListenerOnTrailingEvents;
    OnRemovalEvents: FChaosDestructionListenerOnRemovalEvents;
    SortTrailingEvents(TrailingEvents: TArray<FChaosTrailingEventData>, SortMethod: EChaosTrailingSortMethod): void;
    SortRemovalEvents(RemovalEvents: TArray<FChaosRemovalEventData>, SortMethod: EChaosRemovalSortMethod): void;
    SortCollisionEvents(CollisionEvents: TArray<FChaosCollisionEventData>, SortMethod: EChaosCollisionSortMethod): void;
    SortBreakingEvents(BreakingEvents: TArray<FChaosBreakingEventData>, SortMethod: EChaosBreakingSortMethod): void;
    SetTrailingEventRequestSettings(InSettings: FChaosTrailingEventRequestSettings): void;
    SetTrailingEventEnabled(bIsEnabled: boolean): void;
    SetRemovalEventRequestSettings(InSettings: FChaosRemovalEventRequestSettings): void;
    SetRemovalEventEnabled(bIsEnabled: boolean): void;
    SetCollisionEventRequestSettings(InSettings: FChaosCollisionEventRequestSettings): void;
    SetCollisionEventEnabled(bIsEnabled: boolean): void;
    SetBreakingEventRequestSettings(InSettings: FChaosBreakingEventRequestSettings): void;
    SetBreakingEventEnabled(bIsEnabled: boolean): void;
    RemoveGeometryCollectionActor(GeometryCollectionActor: AGeometryCollectionActor): void;
    RemoveChaosSolverActor(ChaosSolverActor: AChaosSolverActor): void;
    IsEventListening(): boolean;
    AddGeometryCollectionActor(GeometryCollectionActor: AGeometryCollectionActor): void;
    AddChaosSolverActor(ChaosSolverActor: AChaosSolverActor): void;
}
declare const UChaosDestructionListener: UChaosDestructionListener;

declare interface UGeometryCollection extends UObject {
    EnableClustering: boolean;
    ClusterGroupIndex: number;
    MaxClusterLevel: number;
    DamageModel: EDamageModelTypeEnum;
    DamageThreshold: TArray<number>;
    bUseSizeSpecificDamageThreshold: boolean;
    bUseMaterialDamageModifiers: boolean;
    PerClusterOnlyDamageThreshold: boolean;
    DamagePropagationData: FGeometryCollectionDamagePropagationData;
    ClusterConnectionType: EClusterConnectionTypeEnum;
    ConnectionGraphBoundsFilteringMargin: number;
    Materials: TArray<UMaterialInterface>;
    EmbeddedGeometryExemplar: TArray<FGeometryCollectionEmbeddedExemplar>;
    bUseFullPrecisionUVs: boolean;
    bStripOnCook: boolean;
    bStripRenderDataOnCook: boolean;
    CustomRendererType: UClass;
    RootProxyData: FGeometryCollectionProxyMeshData;
    AutoInstanceMeshes: TArray<FGeometryCollectionAutoInstanceMesh>;
    EnableNanite: boolean;
    bEnableNaniteFallback: boolean;
    bConvertVertexColorsToSRGB: boolean;
    PhysicsMaterial: UPhysicalMaterial;
    bDensityFromPhysicsMaterial: boolean;
    CachedDensityFromPhysicsMaterialInGCm3: number;
    bMassAsDensity: boolean;
    Mass: number;
    MinimumMassClamp: number;
    bImportCollisionFromSource: boolean;
    bOptimizeConvexes: boolean;
    bScaleOnRemoval: boolean;
    bRemoveOnMaxSleep: boolean;
    bAutomaticCrumblePartialClusters: boolean;
    MaximumSleepTime: FVector2D;
    RemovalDuration: FVector2D;
    bSlowMovingAsSleeping: boolean;
    SlowMovingVelocityThreshold: number;
    SizeSpecificData: TArray<FGeometryCollectionSizeSpecificData>;
    EnableRemovePiecesOnFracture: boolean;
    RemoveOnFractureMaterials: TArray<UMaterialInterface>;
    Overrides: Record<FString, FString>;
    DataflowInstance: FDataflowInstance;
    PersistentGuid: FGuid;
    StateGuid: FGuid;
    RootIndex: number;
    BreadthFirstTransformIndices: TArray<number>;
    AutoInstanceTransformRemapIndices: TArray<number>;
    BoneSelectedMaterialIndex: number;
    AssetUserData: TArray<UAssetUserData>;
    SetEnableNanite(bValue: boolean): void;
    SetDataflowAsset(InDataflowAsset: UDataflow): void;
    SetConvertVertexColorsToSRGB(bValue: boolean): void;
    GetDataflowAsset(): UDataflow;
}
declare const UGeometryCollection: UGeometryCollection;

declare interface UGeometryCollectionBlueprintLibrary extends UBlueprintFunctionLibrary {
    SetISMPoolCustomInstanceData(GeometryCollectionComponent: UGeometryCollectionComponent, CustomDataIndex: number, CustomDataValue: number): void;
    SetCustomInstanceDataByName(GeometryCollectionComponent: UGeometryCollectionComponent, CustomDataName: FName, CustomDataValue: number): void;
    SetCustomInstanceDataByIndex(GeometryCollectionComponent: UGeometryCollectionComponent, CustomDataIndex: number, CustomDataValue: number): void;
}
declare const UGeometryCollectionBlueprintLibrary: UGeometryCollectionBlueprintLibrary;

declare interface UGeometryCollectionCache extends UObject {
    RecordedData: FRecordedTransformTrack;
    SupportedCollection: UGeometryCollection;
    CompatibleCollectionState: FGuid;
}
declare const UGeometryCollectionCache: UGeometryCollectionCache;

declare interface UGeometryCollectionComponent extends UMeshComponent {
    ChaosSolverActor: AChaosSolverActor;
    RestCollection: UGeometryCollection;
    InitializationFields: TArray<AFieldSystemActor>;
    Simulating: boolean;
    ObjectType: EObjectStateTypeEnum;
    GravityGroupIndex: number;
    OneWayInteractionLevel: number;
    bDensityFromPhysicsMaterial: boolean;
    bForceMotionBlur: boolean;
    EnableClustering: boolean;
    ClusterGroupIndex: number;
    MaxClusterLevel: number;
    MaxSimulatedLevel: number;
    DamageModel: EDamageModelTypeEnum;
    DamageThreshold: TArray<number>;
    bUseSizeSpecificDamageThreshold: boolean;
    bUseMaterialDamageModifiers: boolean;
    DamagePropagationData: FGeometryCollectionDamagePropagationData;
    bEnableDamageFromCollision: boolean;
    bAllowRemovalOnSleep: boolean;
    bAllowRemovalOnBreak: boolean;
    bForceUpdateActiveTransforms: boolean;
    ClusterConnectionType: EClusterConnectionTypeEnum;
    CollisionGroup: number;
    CollisionSampleFraction: number;
    LinearEtherDrag: number;
    PhysicalMaterial: UChaosPhysicalMaterial;
    InitialVelocityType: EInitialVelocityTypeEnum;
    InitialLinearVelocity: FVector;
    InitialAngularVelocity: FVector;
    PhysicalMaterialOverride: UPhysicalMaterial;
    CacheParameters: FGeomComponentCacheParameters;
    RestTransforms: TArray<FTransform>;
    NotifyGeometryCollectionPhysicsStateChange: FGeometryCollectionComponentNotifyGeometryCollectionPhysicsStateChange;
    NotifyGeometryCollectionPhysicsLoadingStateChange: FGeometryCollectionComponentNotifyGeometryCollectionPhysicsLoadingStateChange;
    OnChaosBreakEvent: FGeometryCollectionComponentOnChaosBreakEvent;
    OnChaosRemovalEvent: FGeometryCollectionComponentOnChaosRemovalEvent;
    OnChaosCrumblingEvent: FGeometryCollectionComponentOnChaosCrumblingEvent;
    DesiredCacheTime: number;
    CachePlayback: boolean;
    OnChaosPhysicsCollision: FGeometryCollectionComponentOnChaosPhysicsCollision;
    bNotifyBreaks: boolean;
    bNotifyCollisions: boolean;
    bNotifyTrailing: boolean;
    bNotifyRemovals: boolean;
    bNotifyCrumblings: boolean;
    bCrumblingEventIncludesChildren: boolean;
    bNotifyGlobalBreaks: boolean;
    bNotifyGlobalCollisions: boolean;
    bNotifyGlobalRemovals: boolean;
    bNotifyGlobalCrumblings: boolean;
    bGlobalCrumblingEventIncludesChildren: boolean;
    bStoreVelocities: boolean;
    bIsCurrentlyNavigationRelevant: boolean;
    bShowBoneColors: boolean;
    bUpdateComponentTransformToRootBone: boolean;
    bUseRootProxyForNavigation: boolean;
    bUpdateNavigationInTick: boolean;
    bEnableReplication: boolean;
    bEnableAbandonAfterLevel: boolean;
    AbandonedCollisionProfileName: FName;
    ISMPool: AISMPoolActor;
    CustomRendererType: UClass;
    bOverrideCustomRenderer: boolean;
    bAutoAssignISMPool: boolean;
    bUseStaticMeshCollisionForTraces: boolean;
    ReplicationAbandonClusterLevel: number;
    CustomRenderer: TScriptInterface<IGeometryCollectionExternalRenderInterface>;
    CollisionProfilePerLevel: TArray<FName>;
    ReplicationAbandonAfterLevel: number;
    ReplicationMaxPositionAndVelocityCorrectionLevel: number;
    RepData: FGeometryCollectionRepData;
    RepStateData: FGeometryCollectionRepStateData;
    RepDynamicData: FGeometryCollectionRepDynamicData;
    DummyBodySetup: UBodySetup;
    EventDispatcher: UChaosGameplayEventDispatcher;
    EmbeddedGeometryComponents: TArray<UInstancedStaticMeshComponent>;
    AngularEtherDrag: number;
    SetUseStaticMeshCollisionForTraces(bInUseStaticMeshCollisionForTraces: boolean): void;
    SetUseMaterialDamageModifiers(bInUseMaterialDamageModifiers: boolean): void;
    SetSolverActor(InSolverActor: AChaosSolverActor): void;
    SetRootProxyComponentSpaceTransform(Index: number, RootProxyTransform: FTransform): void;
    SetRestCollection(RestCollectionIn: UGeometryCollection, bApplyAssetDefaults: boolean): void;
    SetPerParticleCollisionProfileName(BoneIds: TArray<number>, ProfileName: FName): void;
    SetPerLevelCollisionProfileNames(ProfileNames: TArray<FName>): void;
    SetOneWayInteractionLevel(InOneWayInteractionLevel: number): void;
    SetNotifyRemovals(bNewNotifyRemovals: boolean): void;
    SetNotifyGlobalRemovals(bNewNotifyGlobalRemovals: boolean): void;
    SetNotifyGlobalCrumblings(bNewNotifyGlobalCrumblings: boolean, bGlobalNewCrumblingEventIncludesChildren: boolean): void;
    SetNotifyGlobalCollision(bNewNotifyGlobalCollisions: boolean): void;
    SetNotifyGlobalBreaks(bNewNotifyGlobalBreaks: boolean): void;
    SetNotifyCrumblings(bNewNotifyCrumblings: boolean, bNewCrumblingEventIncludesChildren: boolean): void;
    SetNotifyBreaks(bNewNotifyBreaks: boolean): void;
    SetLocalRestTransforms(Transforms: TArray<FTransform>, bOnlyLeaves: boolean): void;
    SetGravityGroupIndex(InGravityGroupIndex: number): void;
    SetEnableDamageFromCollision(bValue: boolean): void;
    SetDensityFromPhysicsMaterial(bInDensityFromPhysicsMaterial: boolean): void;
    SetDamageThreshold(InDamageThreshold: TArray<number>): void;
    SetDamagePropagationData(InDamagePropagationData: FGeometryCollectionDamagePropagationData): void;
    SetDamageModel(InDamageModel: EDamageModelTypeEnum): void;
    SetAnchoredByTransformedBox(Box: FBox, Transform: FTransform, bAnchored: boolean, MaxLevel: number): void;
    SetAnchoredByIndex(Index: number, bAnchored: boolean): void;
    SetAnchoredByBox(WorldSpaceBox: FBox, bAnchored: boolean, MaxLevel: number): void;
    SetAbandonedParticleCollisionProfileName(CollisionProfile: FName): void;
    RemoveAllAnchors(): void;
    ReceivePhysicsCollision(CollisionInfo: FChaosPhysicsCollisionInfo): void;
    OnRep_RepStateData(): void;
    OnRep_RepDynamicData(): void;
    OnRep_RepData(): void;
    NotifyGeometryCollectionPhysicsStateChange__DelegateSignature(FracturedComponent: UGeometryCollectionComponent): void;
    NotifyGeometryCollectionPhysicsLoadingStateChange__DelegateSignature(FracturedComponent: UGeometryCollectionComponent): void;
    IsRootBroken(): boolean;
    GetUseStaticMeshCollisionForTraces(): boolean;
    GetSolverActor(): AChaosSolverActor;
    GetRootInitialTransform(): FTransform;
    GetRootIndex(): number;
    GetRootCurrentTransform(): FTransform;
    GetMassAndExtents(ItemIndex: number, OutMass: number, OutExtents: FBox): void;
    GetLocalRestTransforms(bInitialTransforms: boolean): TArray<FTransform>;
    GetLocalBounds(): FBox;
    GetInitialLocalRestTransforms(): TArray<FTransform>;
    GetInitialLevel(ItemIndex: number): number;
    GetDebugInfo(): FString;
    GetDamageThreshold(): TArray<number>;
    ForceBrokenForCustomRenderer(bForceBroken: boolean): void;
    EnableRootProxyForCustomRenderer(bEnable: boolean): void;
    CrumbleCluster(ItemIndex: number): void;
    CrumbleActiveClusters(): void;
    ApplyPhysicsField(Enabled: boolean, Target: EGeometryCollectionPhysicsTypeEnum, MetaData: UFieldSystemMetaData, Field: UFieldNodeBase): void;
    ApplyLinearVelocity(ItemIndex: number, LinearVelocity: FVector): void;
    ApplyKinematicField(Radius: number, position: FVector): void;
    ApplyInternalStrain(ItemIndex: number, Location: FVector, Radius: number, PropagationDepth: number, PropagationFactor: number, Strain: number): void;
    ApplyExternalStrain(ItemIndex: number, Location: FVector, Radius: number, PropagationDepth: number, PropagationFactor: number, Strain: number): void;
    ApplyBreakingLinearVelocity(ItemIndex: number, LinearVelocity: FVector): void;
    ApplyBreakingAngularVelocity(ItemIndex: number, AngularVelocity: FVector): void;
    ApplyAssetDefaults(): void;
    ApplyAngularVelocity(ItemIndex: number, AngularVelocity: FVector): void;
}
declare const UGeometryCollectionComponent: UGeometryCollectionComponent;

declare interface UGeometryCollectionDebugDrawComponent extends UActorComponent {
    GeometryCollectionDebugDrawActor: AGeometryCollectionDebugDrawActor;
    GeometryCollectionRenderLevelSetActor: AGeometryCollectionRenderLevelSetActor;
}
declare const UGeometryCollectionDebugDrawComponent: UGeometryCollectionDebugDrawComponent;

declare interface UGeometryCollectionISMPoolComponent extends USceneComponent {

}
declare const UGeometryCollectionISMPoolComponent: UGeometryCollectionISMPoolComponent;

declare interface UGeometryCollectionISMPoolDebugDrawComponent extends UDebugDrawComponent {
    bShowGlobalStats: boolean;
    bShowStats: boolean;
    bShowBounds: boolean;
    SelectedComponent: UInstancedStaticMeshComponent;
}
declare const UGeometryCollectionISMPoolDebugDrawComponent: UGeometryCollectionISMPoolDebugDrawComponent;

declare interface UGeometryCollectionISMPoolRenderer extends UObject {
    CachedISMPoolComponent: UISMPoolComponent;
    LocalISMPoolComponent: UISMPoolComponent;
}
declare const UGeometryCollectionISMPoolRenderer: UGeometryCollectionISMPoolRenderer;

declare interface UGeometryCollectionISMPoolSubSystem extends UWorldSubsystem {
    OnActorEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
}
declare const UGeometryCollectionISMPoolSubSystem: UGeometryCollectionISMPoolSubSystem;

declare interface UGeometryCollectionRootProxyRenderer extends UObject {
    StaticMeshComponents: TArray<UStaticMeshComponent>;
}
declare const UGeometryCollectionRootProxyRenderer: UGeometryCollectionRootProxyRenderer;

