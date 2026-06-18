declare interface AGeometryCollectionActor extends AActor {
    readonly __static_AGeometryCollectionActor: {
        RaycastSingle(Start: FVector, End: FVector, OutHit: FHitResult): boolean;
    };
    readonly __properties_AGeometryCollectionActor: {
        GeometryCollectionComponent: UGeometryCollectionComponent;
        GeometryCollectionDebugDrawComponent: UGeometryCollectionDebugDrawComponent;
    };
    readonly __staticRegistry: 
        AGeometryCollectionActor['__static_AGeometryCollectionActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGeometryCollectionActor['__properties_AGeometryCollectionActor'] &
        AActor['__propertyRegistry'];
}

declare interface AGeometryCollectionDebugDrawActor extends AActor {
    readonly __properties_AGeometryCollectionDebugDrawActor: {
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
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGeometryCollectionDebugDrawActor['__properties_AGeometryCollectionDebugDrawActor'] &
        AActor['__propertyRegistry'];
}

declare interface AGeometryCollectionISMPoolActor extends AActor {
    readonly __properties_AGeometryCollectionISMPoolActor: {
        ISMPoolComp: UGeometryCollectionISMPoolComponent;
        ISMPoolDebugDrawComp: UGeometryCollectionISMPoolDebugDrawComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGeometryCollectionISMPoolActor['__properties_AGeometryCollectionISMPoolActor'] &
        AActor['__propertyRegistry'];
}

declare interface AGeometryCollectionRenderLevelSetActor extends AActor {
    readonly __properties_AGeometryCollectionRenderLevelSetActor: {
        TargetVolumeTexture: UVolumeTexture;
        RayMarchMaterial: UMaterial;
        SurfaceTolerance: number;
        Isovalue: number;
        Enabled: boolean;
        RenderVolumeBoundingBox: boolean;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGeometryCollectionRenderLevelSetActor['__properties_AGeometryCollectionRenderLevelSetActor'] &
        AActor['__propertyRegistry'];
}

declare interface FChaosBreakingEventData {
    Location: FVector;
    Velocity: FVector;
    Mass: number;
}

declare interface FChaosBreakingEventRequestSettings {
    MaxNumberOfResults: number;
    MinRadius: number;
    MinSpeed: number;
    MinMass: number;
    MaxDistance: number;
    SortMethod: EChaosBreakingSortMethod;
}

declare interface FChaosCollisionEventData {
    Location: FVector;
    Normal: FVector;
    Velocity1: FVector;
    Velocity2: FVector;
    Mass1: number;
    Mass2: number;
    Impulse: FVector;
}

declare interface FChaosCollisionEventRequestSettings {
    MaxNumberResults: number;
    MinMass: number;
    MinSpeed: number;
    MinImpulse: number;
    MaxDistance: number;
    SortMethod: EChaosCollisionSortMethod;
}

declare interface FChaosRemovalEventData {
    Location: FVector;
    Mass: number;
    ParticleIndex: number;
}

declare interface FChaosRemovalEventRequestSettings {
    MaxNumberOfResults: number;
    MinMass: number;
    MaxDistance: number;
    SortMethod: EChaosRemovalSortMethod;
}

declare interface FChaosTrailingEventData {
    Location: FVector;
    Velocity: FVector;
    AngularVelocity: FVector;
    Mass: number;
    ParticleIndex: number;
}

declare interface FChaosTrailingEventRequestSettings {
    MaxNumberOfResults: number;
    MinMass: number;
    MinSpeed: number;
    MinAngularSpeed: number;
    MaxDistance: number;
    SortMethod: EChaosTrailingSortMethod;
}

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

declare interface FGeometryCollectionAutoInstanceMesh {
    mesh: UStaticMesh;
    Materials: UMaterialInterface[];
    NumInstances: number;
    CustomData: number[];
}

declare interface FGeometryCollectionCollisionParticleData {
    CollisionParticlesFraction: number;
    MaximumCollisionParticles: number;
}

declare interface FGeometryCollectionCollisionTypeData {
    CollisionType: ECollisionTypeEnum;
    ImplicitType: EImplicitTypeEnum;
    LevelSet: FGeometryCollectionLevelSetData;
    CollisionParticles: FGeometryCollectionCollisionParticleData;
    CollisionObjectReductionPercentage: number;
    CollisionMarginFraction: number;
}

declare interface FGeometryCollectionDamagePropagationData {
    bEnabled: boolean;
    BreakDamagePropagationFactor: number;
    ShockDamagePropagationFactor: number;
}

declare interface FGeometryCollectionDebugDrawActorSelectedRigidBody {
    ID: number;
    Solver: AChaosSolverActor;
    GeometryCollection: AGeometryCollectionActor;
}

declare type FGeometryCollectionDebugDrawWarningMessage = object;

declare interface FGeometryCollectionEmbeddedExemplar {
    StaticMeshExemplar: FSoftObjectPath;
    StartCullDistance: number;
    EndCullDistance: number;
    InstanceCount: number;
}

declare interface FGeometryCollectionLevelSetData {
    MinLevelSetResolution: number;
    MaxLevelSetResolution: number;
    MinClusterLevelSetResolution: number;
    MaxClusterLevelSetResolution: number;
}

declare interface FGeometryCollectionProxyMeshData {
    ProxyMeshes: UStaticMesh[];
    MeshTransforms: FTransform3f[];
}

declare interface FGeometryCollectionRenderResourceSizeInfo {
    MeshResourcesSize: number;
    NaniteResourcesSize: number;
}

declare type FGeometryCollectionRepData = object;

declare type FGeometryCollectionRepDynamicData = object;

declare type FGeometryCollectionRepStateData = object;

declare interface FGeometryCollectionSizeSpecificData {
    MaxSize: number;
    CollisionShapes: FGeometryCollectionCollisionTypeData[];
    DamageThreshold: number;
}

declare interface FGeometryCollectionSource {
    SourceGeometryObject: FSoftObjectPath;
    LocalTransform: FTransform;
    SourceMaterial: UMaterialInterface[];
    InstanceCustomData: number[];
    bAddInternalMaterials: boolean;
    bSplitComponents: boolean;
    bSetInternalFromMaterialIndex: boolean;
}

declare interface IGeometryCollectionCustomDataInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IGeometryCollectionExternalRenderInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UChaosDestructionListener extends USceneComponent {
    readonly __static_UChaosDestructionListener: {
        SortTrailingEvents(TrailingEvents: FChaosTrailingEventData[], SortMethod: EChaosTrailingSortMethod): void;
        SortRemovalEvents(RemovalEvents: FChaosRemovalEventData[], SortMethod: EChaosRemovalSortMethod): void;
        SortCollisionEvents(CollisionEvents: FChaosCollisionEventData[], SortMethod: EChaosCollisionSortMethod): void;
        SortBreakingEvents(BreakingEvents: FChaosBreakingEventData[], SortMethod: EChaosBreakingSortMethod): void;
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
    };
    readonly __properties_UChaosDestructionListener: {
        bIsCollisionEventListeningEnabled: boolean;
        bIsBreakingEventListeningEnabled: boolean;
        bIsTrailingEventListeningEnabled: boolean;
        bIsRemovalEventListeningEnabled: boolean;
        CollisionEventRequestSettings: FChaosCollisionEventRequestSettings;
        BreakingEventRequestSettings: FChaosBreakingEventRequestSettings;
        TrailingEventRequestSettings: FChaosTrailingEventRequestSettings;
        RemovalEventRequestSettings: FChaosRemovalEventRequestSettings;
        ChaosSolverActors: AChaosSolverActor[];
        GeometryCollectionActors: AGeometryCollectionActor[];
        OnCollisionEvents: FChaosDestructionListenerOnCollisionEvents;
        OnBreakingEvents: FChaosDestructionListenerOnBreakingEvents;
        OnTrailingEvents: FChaosDestructionListenerOnTrailingEvents;
        OnRemovalEvents: FChaosDestructionListenerOnRemovalEvents;
    };
    readonly __staticRegistry: 
        UChaosDestructionListener['__static_UChaosDestructionListener'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UChaosDestructionListener['__properties_UChaosDestructionListener'] &
        USceneComponent['__propertyRegistry'];
}

declare interface UGeometryCollection extends UObject {
    readonly __static_UGeometryCollection: {
        SetEnableNanite(bValue: boolean): void;
        SetDataflowAsset(InDataflowAsset: UDataflow): void;
        SetConvertVertexColorsToSRGB(bValue: boolean): void;
        GetDataflowAsset(): UDataflow;
    };
    readonly __properties_UGeometryCollection: {
        EnableClustering: boolean;
        ClusterGroupIndex: number;
        MaxClusterLevel: number;
        DamageModel: EDamageModelTypeEnum;
        DamageThreshold: number[];
        bUseSizeSpecificDamageThreshold: boolean;
        bUseMaterialDamageModifiers: boolean;
        PerClusterOnlyDamageThreshold: boolean;
        DamagePropagationData: FGeometryCollectionDamagePropagationData;
        ClusterConnectionType: EClusterConnectionTypeEnum;
        ConnectionGraphBoundsFilteringMargin: number;
        Materials: UMaterialInterface[];
        EmbeddedGeometryExemplar: FGeometryCollectionEmbeddedExemplar[];
        bUseFullPrecisionUVs: boolean;
        bStripOnCook: boolean;
        bStripRenderDataOnCook: boolean;
        CustomRendererType: UClass;
        RootProxyData: FGeometryCollectionProxyMeshData;
        AutoInstanceMeshes: FGeometryCollectionAutoInstanceMesh[];
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
        SizeSpecificData: FGeometryCollectionSizeSpecificData[];
        EnableRemovePiecesOnFracture: boolean;
        RemoveOnFractureMaterials: UMaterialInterface[];
        Overrides: TMap<string, string>;
        DataflowInstance: FDataflowInstance;
        PersistentGuid: FGuid;
        StateGuid: FGuid;
        RootIndex: number;
        BreadthFirstTransformIndices: number[];
        AutoInstanceTransformRemapIndices: number[];
        BoneSelectedMaterialIndex: number;
        AssetUserData: UAssetUserData[];
    };
    readonly __staticRegistry: 
        UGeometryCollection['__static_UGeometryCollection'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollection['__properties_UGeometryCollection'] &
        UObject['__propertyRegistry'];
}

declare interface UGeometryCollectionBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UGeometryCollectionBlueprintLibrary: {
        SetISMPoolCustomInstanceData(GeometryCollectionComponent: UGeometryCollectionComponent, CustomDataIndex: number, CustomDataValue: number): void;
        SetCustomInstanceDataByName(GeometryCollectionComponent: UGeometryCollectionComponent, CustomDataName: string, CustomDataValue: number): void;
        SetCustomInstanceDataByIndex(GeometryCollectionComponent: UGeometryCollectionComponent, CustomDataIndex: number, CustomDataValue: number): void;
    };
    readonly __staticRegistry: 
        UGeometryCollectionBlueprintLibrary['__static_UGeometryCollectionBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UGeometryCollectionCache extends UObject {
    readonly __properties_UGeometryCollectionCache: {
        RecordedData: FRecordedTransformTrack;
        SupportedCollection: UGeometryCollection;
        CompatibleCollectionState: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollectionCache['__properties_UGeometryCollectionCache'] &
        UObject['__propertyRegistry'];
}

declare interface UGeometryCollectionComponent extends UMeshComponent {
    readonly __static_UGeometryCollectionComponent: {
        SetUseStaticMeshCollisionForTraces(bInUseStaticMeshCollisionForTraces: boolean): void;
        SetUseMaterialDamageModifiers(bInUseMaterialDamageModifiers: boolean): void;
        SetSolverActor(InSolverActor: AChaosSolverActor): void;
        SetRootProxyComponentSpaceTransform(Index: number, RootProxyTransform: FTransform): void;
        SetRestCollection(RestCollectionIn: UGeometryCollection, bApplyAssetDefaults: boolean): void;
        SetPerParticleCollisionProfileName(BoneIds: number[], ProfileName: string): void;
        SetPerLevelCollisionProfileNames(ProfileNames: string[]): void;
        SetOneWayInteractionLevel(InOneWayInteractionLevel: number): void;
        SetNotifyRemovals(bNewNotifyRemovals: boolean): void;
        SetNotifyGlobalRemovals(bNewNotifyGlobalRemovals: boolean): void;
        SetNotifyGlobalCrumblings(bNewNotifyGlobalCrumblings: boolean, bGlobalNewCrumblingEventIncludesChildren: boolean): void;
        SetNotifyGlobalCollision(bNewNotifyGlobalCollisions: boolean): void;
        SetNotifyGlobalBreaks(bNewNotifyGlobalBreaks: boolean): void;
        SetNotifyCrumblings(bNewNotifyCrumblings: boolean, bNewCrumblingEventIncludesChildren: boolean): void;
        SetNotifyBreaks(bNewNotifyBreaks: boolean): void;
        SetLocalRestTransforms(Transforms: FTransform[], bOnlyLeaves: boolean): void;
        SetGravityGroupIndex(InGravityGroupIndex: number): void;
        SetEnableDamageFromCollision(bValue: boolean): void;
        SetDensityFromPhysicsMaterial(bInDensityFromPhysicsMaterial: boolean): void;
        SetDamageThreshold(InDamageThreshold: number[]): void;
        SetDamagePropagationData(InDamagePropagationData: FGeometryCollectionDamagePropagationData): void;
        SetDamageModel(InDamageModel: EDamageModelTypeEnum): void;
        SetAnchoredByTransformedBox(Box: FBox, Transform: FTransform, bAnchored: boolean, MaxLevel: number): void;
        SetAnchoredByIndex(Index: number, bAnchored: boolean): void;
        SetAnchoredByBox(WorldSpaceBox: FBox, bAnchored: boolean, MaxLevel: number): void;
        SetAbandonedParticleCollisionProfileName(CollisionProfile: string): void;
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
        GetLocalRestTransforms(bInitialTransforms: boolean): FTransform[];
        GetLocalBounds(): FBox;
        GetInitialLocalRestTransforms(): FTransform[];
        GetInitialLevel(ItemIndex: number): number;
        GetDebugInfo(): string;
        GetDamageThreshold(): number[];
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
    };
    readonly __properties_UGeometryCollectionComponent: {
        ChaosSolverActor: AChaosSolverActor;
        RestCollection: UGeometryCollection;
        InitializationFields: AFieldSystemActor[];
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
        DamageThreshold: number[];
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
        RestTransforms: FTransform[];
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
        AbandonedCollisionProfileName: string;
        ISMPool: AISMPoolActor;
        CustomRendererType: UClass;
        bOverrideCustomRenderer: boolean;
        bAutoAssignISMPool: boolean;
        bUseStaticMeshCollisionForTraces: boolean;
        ReplicationAbandonClusterLevel: number;
        CustomRenderer: TScriptInterface<IGeometryCollectionExternalRenderInterface>;
        CollisionProfilePerLevel: string[];
        ReplicationAbandonAfterLevel: number;
        ReplicationMaxPositionAndVelocityCorrectionLevel: number;
        RepData: FGeometryCollectionRepData;
        RepStateData: FGeometryCollectionRepStateData;
        RepDynamicData: FGeometryCollectionRepDynamicData;
        DummyBodySetup: UBodySetup;
        EventDispatcher: UChaosGameplayEventDispatcher;
        EmbeddedGeometryComponents: UInstancedStaticMeshComponent[];
        AngularEtherDrag: number;
    };
    readonly __staticRegistry: 
        UGeometryCollectionComponent['__static_UGeometryCollectionComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollectionComponent['__properties_UGeometryCollectionComponent'] &
        UMeshComponent['__propertyRegistry'];
}

declare interface UGeometryCollectionDebugDrawComponent extends UActorComponent {
    readonly __properties_UGeometryCollectionDebugDrawComponent: {
        GeometryCollectionDebugDrawActor: AGeometryCollectionDebugDrawActor;
        GeometryCollectionRenderLevelSetActor: AGeometryCollectionRenderLevelSetActor;
    };
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollectionDebugDrawComponent['__properties_UGeometryCollectionDebugDrawComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UGeometryCollectionISMPoolComponent extends USceneComponent {
    readonly __staticRegistry: 
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USceneComponent['__propertyRegistry'];
}

declare interface UGeometryCollectionISMPoolDebugDrawComponent extends UDebugDrawComponent {
    readonly __properties_UGeometryCollectionISMPoolDebugDrawComponent: {
        bShowGlobalStats: boolean;
        bShowStats: boolean;
        bShowBounds: boolean;
        SelectedComponent: UInstancedStaticMeshComponent;
    };
    readonly __staticRegistry: 
        UDebugDrawComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollectionISMPoolDebugDrawComponent['__properties_UGeometryCollectionISMPoolDebugDrawComponent'] &
        UDebugDrawComponent['__propertyRegistry'];
}

declare interface UGeometryCollectionISMPoolRenderer extends UObject {
    readonly __properties_UGeometryCollectionISMPoolRenderer: {
        CachedISMPoolComponent: UISMPoolComponent;
        LocalISMPoolComponent: UISMPoolComponent;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollectionISMPoolRenderer['__properties_UGeometryCollectionISMPoolRenderer'] &
        UObject['__propertyRegistry'];
}

declare interface UGeometryCollectionISMPoolSubSystem extends UWorldSubsystem {
    readonly __static_UGeometryCollectionISMPoolSubSystem: {
        OnActorEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
    };
    readonly __staticRegistry: 
        UGeometryCollectionISMPoolSubSystem['__static_UGeometryCollectionISMPoolSubSystem'] &
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UGeometryCollectionRootProxyRenderer extends UObject {
    readonly __properties_UGeometryCollectionRootProxyRenderer: {
        StaticMeshComponents: UStaticMeshComponent[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGeometryCollectionRootProxyRenderer['__properties_UGeometryCollectionRootProxyRenderer'] &
        UObject['__propertyRegistry'];
}

