declare interface AAbstractNavData extends ANavigationData {
    readonly __staticRegistry: 
        ANavigationData['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavigationData['__propertyRegistry'];
}

declare interface ANavMeshBoundsVolume extends AVolume {
    readonly __properties_ANavMeshBoundsVolume: {
        SupportedAgents: FNavAgentSelector;
    };
    readonly __staticRegistry: 
        AVolume['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavMeshBoundsVolume['__properties_ANavMeshBoundsVolume'] &
        AVolume['__propertyRegistry'];
}

declare interface ANavModifierVolume extends AVolume {
    readonly __static_ANavModifierVolume: {
        SetAreaClassToReplace(NewAreaClassToReplace: TSubclassOf<UNavArea>): void;
        SetAreaClass(NewAreaClass: TSubclassOf<UNavArea>): void;
    };
    readonly __properties_ANavModifierVolume: {
        AreaClass: TSubclassOf<UNavArea>;
        AreaClassToReplace: TSubclassOf<UNavArea>;
        bMaskFillCollisionUnderneathForNavmesh: boolean;
        NavMeshResolution: ENavigationDataResolution;
    };
    readonly __staticRegistry: 
        ANavModifierVolume['__static_ANavModifierVolume'] &
        AVolume['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavModifierVolume['__properties_ANavModifierVolume'] &
        AVolume['__propertyRegistry'];
}

declare interface ANavSystemConfigOverride extends AActor {
    readonly __properties_ANavSystemConfigOverride: {
        NavigationSystemConfig: UNavigationSystemConfig;
        OverridePolicy: ENavSystemOverridePolicy;
        bLoadOnClient: boolean;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavSystemConfigOverride['__properties_ANavSystemConfigOverride'] &
        AActor['__propertyRegistry'];
}

declare interface ANavigationData extends AActor {
    readonly __properties_ANavigationData: {
        RenderingComp: UPrimitiveComponent;
        NavDataConfig: FNavDataConfig;
        bEnableDrawing: boolean;
        bForceRebuildOnLoad: boolean;
        bAutoDestroyWhenNoNavigation: boolean;
        bCanBeMainNavData: boolean;
        bCanSpawnOnRebuild: boolean;
        bRebuildAtRuntime: boolean;
        RuntimeGeneration: ERuntimeGenerationType;
        ObservedPathsTickInterval: number;
        DataVersion: number;
        SupportedAreas: FSupportedAreaData[];
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavigationData['__properties_ANavigationData'] &
        AActor['__propertyRegistry'];
}

declare interface ANavigationGraph extends ANavigationData {
    readonly __staticRegistry: 
        ANavigationData['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavigationData['__propertyRegistry'];
}

declare interface ANavigationGraphNode extends AActor {
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AActor['__propertyRegistry'];
}

declare interface ANavigationTestingActor extends AActor {
    readonly __properties_ANavigationTestingActor: {
        CapsuleComponent: UCapsuleComponent;
        InvokerComponent: UNavigationInvokerComponent;
        bActAsNavigationInvoker: boolean;
        NavAgentProps: FNavAgentProperties;
        QueryingExtent: FVector;
        MyNavData: ANavigationData;
        ProjectedLocation: FVector;
        bProjectedLocationValid: boolean;
        bSearchStart: boolean;
        CostLimitFactor: number;
        MinimumCostLimit: number;
        bBacktracking: boolean;
        bUseHierarchicalPathfinding: boolean;
        bGatherDetailedInfo: boolean;
        bRequireNavigableEndLocation: boolean;
        bDrawDistanceToWall: boolean;
        bDrawIfNavDataIsReadyInRadius: boolean;
        bDrawIfNavDataIsReadyToQueryTargetActor: boolean;
        bDrawRaycastToQueryTargetActor: boolean;
        QueryTargetActor: AActor;
        bShowNodePool: boolean;
        bShowBestPath: boolean;
        bShowDiffWithPreviousStep: boolean;
        bShouldBeVisibleInGame: boolean;
        RadiusUsedToValidateNavData: number;
        CostDisplayMode: ENavCostDisplay;
        TextCanvasOffset: FVector2D;
        bPathExist: boolean;
        bPathIsPartial: boolean;
        bPathSearchOutOfNodes: boolean;
        PathfindingTime: number;
        PathCost: number;
        PathfindingSteps: number;
        OtherActor: ANavigationTestingActor;
        FilterClass: TSubclassOf<UNavigationQueryFilter>;
        ShowStepIndex: number;
        OffsetFromCornersDistance: number;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ANavigationTestingActor['__properties_ANavigationTestingActor'] &
        AActor['__propertyRegistry'];
}

declare interface ARecastNavMesh extends ANavigationData {
    readonly __static_ARecastNavMesh: {
        K2_ReplaceAreaInTileBounds(Bounds: FBox, OldArea: TSubclassOf<UNavArea>, NewArea: TSubclassOf<UNavArea>, ReplaceLinks: boolean): boolean;
    };
    readonly __properties_ARecastNavMesh: {
        bDrawTriangleEdges: boolean;
        bDrawPolyEdges: boolean;
        bDrawFilledPolys: boolean;
        bDrawNavMeshEdges: boolean;
        bDrawTileBounds: boolean;
        bDrawTileResolutions: boolean;
        bDrawPathCollidingGeometry: boolean;
        bDrawTileLabels: boolean;
        bDrawTileBuildTimes: boolean;
        bDrawTileBuildTimesHeatMap: boolean;
        bDrawPolygonLabels: boolean;
        bDrawDefaultPolygonCost: boolean;
        bDrawPolygonFlags: boolean;
        bDrawLabelsOnPathNodes: boolean;
        bDrawNavLinks: boolean;
        bDrawFailedNavLinks: boolean;
        bDrawClusters: boolean;
        bDrawOctree: boolean;
        bDrawOctreeDetails: boolean;
        bDrawMarkedForbiddenPolys: boolean;
        bDistinctlyDrawTilesBeingBuilt: boolean;
        DrawOffset: number;
        TileGenerationDebug: FRecastNavMeshTileGenerationDebug;
        bFixedTilePoolSize: boolean;
        TilePoolSize: number;
        TileSizeUU: number;
        CellSize: number;
        CellHeight: number;
        AgentMaxStepHeight: number;
        NavMeshResolutionParams: FNavMeshResolutionParam;
        AgentRadius: number;
        AgentHeight: number;
        AgentMaxSlope: number;
        MinRegionArea: number;
        MergeRegionSize: number;
        MaxVerticalMergeError: number;
        MaxSimplificationError: number;
        SimplificationElevationRatio: number;
        MaxSimultaneousTileGenerationJobsCount: number;
        TileNumberHardLimit: number;
        ExpectedMaxLayersPerTile: number;
        PolyRefTileBits: number;
        PolyRefNavPolyBits: number;
        PolyRefSaltBits: number;
        NavMeshOriginOffset: FVector;
        DefaultDrawDistance: number;
        DefaultMaxSearchNodes: number;
        DefaultMaxHierarchicalSearchNodes: number;
        LedgeSlopeFilterMode: ENavigationLedgeSlopeFilterMode;
        RegionPartitioning: ERecastPartitioning;
        LayerPartitioning: ERecastPartitioning;
        RegionChunkSplits: number;
        LayerChunkSplits: number;
        bSortNavigationAreasByCost: boolean;
        bIsWorldPartitioned: boolean;
        bGenerateNavLinks: boolean;
        bPerformVoxelFiltering: boolean;
        bMarkLowHeightAreas: boolean;
        bUseExtraTopCellWhenMarkingAreas: boolean;
        bFilterLowSpanSequences: boolean;
        bFilterLowSpanFromTileCache: boolean;
        bDoFullyAsyncNavDataGathering: boolean;
        bUseBetterOffsetsFromCorners: boolean;
        bStoreEmptyTileLayers: boolean;
        bUseVirtualFilters: boolean;
        bUseVirtualGeometryFilteringAndDirtying: boolean;
        bAllowNavLinkAsPathEnd: boolean;
        TimeSliceFilterLedgeSpansMaxYProcess: number;
        TimeSliceLongDurationDebug: number;
        InvokerTilePriorityBumpDistanceThresholdInTileUnits: number;
        InvokerTilePriorityBumpIncrease: number;
        NavLinkJumpDownConfig: FNavLinkGenerationJumpDownConfig;
        bUseVoxelCache: boolean;
        TileSetUpdateInterval: number;
        HeuristicScale: number;
        VerticalDeviationFromGroundCompensation: number;
    };
    readonly __staticRegistry: 
        ARecastNavMesh['__static_ARecastNavMesh'] &
        ANavigationData['__staticRegistry'];
    readonly __propertyRegistry: 
        ARecastNavMesh['__properties_ARecastNavMesh'] &
        ANavigationData['__propertyRegistry'];
}

declare interface FNavCollisionBox {
    Offset: FVector;
    Extent: FVector;
}

declare interface FNavCollisionCylinder {
    Offset: FVector;
    Radius: number;
    Height: number;
}

declare type FNavGraphEdge = object;

declare interface FNavGraphNode {
    Owner: UObject;
}

declare interface FNavLinkCustomInstanceData extends FActorComponentInstanceData {
    CustomLinkId: FNavLinkId;
    AuxiliaryCustomLinkId: FNavLinkAuxiliaryId;
}

declare interface FNavLinkGenerationJumpDownConfig {
    bEnabled: boolean;
    JumpLength: number;
    JumpDistanceFromEdge: number;
    JumpMaxDepth: number;
    JumpHeight: number;
    JumpEndsHeightTolerance: number;
    SamplingSeparationFactor: number;
    FilterDistanceThreshold: number;
    LinkBuilderFlags: number;
    DownDirectionAreaClass: TSubclassOf<UNavAreaBase>;
    UpDirectionAreaClass: TSubclassOf<UNavAreaBase>;
    LinkProxyClass: TSubclassOf<UBaseGeneratedNavLinksProxy>;
    LinkProxyId: FNavLinkId;
    LinkProxy: UBaseGeneratedNavLinksProxy;
    bLinkProxyRegistered: boolean;
}

declare interface FNavMeshResolutionParam {
    CellSize: number;
    CellHeight: number;
    AgentMaxStepHeight: number;
}

declare interface FNavigationFilterArea {
    AreaClass: TSubclassOf<UNavArea>;
    TravelCostOverride: number;
    EnteringCostOverride: number;
    bIsExcluded: boolean;
    bOverrideTravelCost: boolean;
    bOverrideEnteringCost: boolean;
}

declare interface FNavigationFilterFlags {
    bNavFlag0: boolean;
    bNavFlag1: boolean;
    bNavFlag2: boolean;
    bNavFlag3: boolean;
    bNavFlag4: boolean;
    bNavFlag5: boolean;
    bNavFlag6: boolean;
    bNavFlag7: boolean;
    bNavFlag8: boolean;
    bNavFlag9: boolean;
    bNavFlag10: boolean;
    bNavFlag11: boolean;
    bNavFlag12: boolean;
    bNavFlag13: boolean;
    bNavFlag14: boolean;
    bNavFlag15: boolean;
}

declare interface FRecastNavMeshTileGenerationDebug {
    bEnabled: boolean;
    TileCoordinate: FIntVector;
    MaxTileCoordinate: FIntVector;
    bGenerateDebugTileOnly: boolean;
    bCollisionGeometry: boolean;
    HeightFieldRenderMode: EHeightFieldRenderMode;
    bHeightfieldFromRasterization: boolean;
    bHeightfieldPostInclusionBoundsFiltering: boolean;
    bHeightfieldPostHeightFiltering: boolean;
    bHeightfieldBounds: boolean;
    bCompactHeightfield: boolean;
    bCompactHeightfieldEroded: boolean;
    bHeightFieldLayers: boolean;
    bCompactHeightfieldRegions: boolean;
    bCompactHeightfieldDistances: boolean;
    bTileCacheLayerAreas: boolean;
    bTileCacheLayerRegions: boolean;
    bSkipContourSimplification: boolean;
    bTileCacheContours: boolean;
    bTileCachePolyMesh: boolean;
    bTileCacheDetailMesh: boolean;
    bUseMaxTileCoordinate: boolean;
    LinkGenerationDebugFlags: number;
    LinkGenerationSelectedEdge: number;
}

declare interface FSupportedAreaData {
    AreaClassName: string;
    AreaID: number;
    AreaClass: UClass;
}

declare interface INavLinkCustomInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INavLinkHostInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INavNodeInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface INavigationPathGenerator extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBaseGeneratedNavLinksProxy extends UObject {
    readonly __properties_UBaseGeneratedNavLinksProxy: {
        LinkProxyId: FNavLinkId;
        Owner: UObject;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBaseGeneratedNavLinksProxy['__properties_UBaseGeneratedNavLinksProxy'] &
        UObject['__propertyRegistry'];
}

declare interface UCrowdManagerBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UNavArea extends UNavAreaBase {
    readonly __properties_UNavArea: {
        DefaultCost: number;
        FixedAreaEnteringCost: number;
        DrawColor: FColor;
        SupportedAgents: FNavAgentSelector;
        bSupportsAgent0: boolean;
        bSupportsAgent1: boolean;
        bSupportsAgent2: boolean;
        bSupportsAgent3: boolean;
        bSupportsAgent4: boolean;
        bSupportsAgent5: boolean;
        bSupportsAgent6: boolean;
        bSupportsAgent7: boolean;
        bSupportsAgent8: boolean;
        bSupportsAgent9: boolean;
        bSupportsAgent10: boolean;
        bSupportsAgent11: boolean;
        bSupportsAgent12: boolean;
        bSupportsAgent13: boolean;
        bSupportsAgent14: boolean;
        bSupportsAgent15: boolean;
    };
    readonly __staticRegistry: 
        UNavAreaBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavArea['__properties_UNavArea'] &
        UNavAreaBase['__propertyRegistry'];
}

declare interface UNavAreaMeta extends UNavArea {
    readonly __staticRegistry: 
        UNavArea['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavArea['__propertyRegistry'];
}

declare interface UNavAreaMeta_SwitchByAgent extends UNavAreaMeta {
    readonly __properties_UNavAreaMeta_SwitchByAgent: {
        Agent0Area: TSubclassOf<UNavArea>;
        Agent1Area: TSubclassOf<UNavArea>;
        Agent2Area: TSubclassOf<UNavArea>;
        Agent3Area: TSubclassOf<UNavArea>;
        Agent4Area: TSubclassOf<UNavArea>;
        Agent5Area: TSubclassOf<UNavArea>;
        Agent6Area: TSubclassOf<UNavArea>;
        Agent7Area: TSubclassOf<UNavArea>;
        Agent8Area: TSubclassOf<UNavArea>;
        Agent9Area: TSubclassOf<UNavArea>;
        Agent10Area: TSubclassOf<UNavArea>;
        Agent11Area: TSubclassOf<UNavArea>;
        Agent12Area: TSubclassOf<UNavArea>;
        Agent13Area: TSubclassOf<UNavArea>;
        Agent14Area: TSubclassOf<UNavArea>;
        Agent15Area: TSubclassOf<UNavArea>;
    };
    readonly __staticRegistry: 
        UNavAreaMeta['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavAreaMeta_SwitchByAgent['__properties_UNavAreaMeta_SwitchByAgent'] &
        UNavAreaMeta['__propertyRegistry'];
}

declare interface UNavArea_Default extends UNavArea {
    readonly __staticRegistry: 
        UNavArea['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavArea['__propertyRegistry'];
}

declare interface UNavArea_LowHeight extends UNavArea {
    readonly __staticRegistry: 
        UNavArea['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavArea['__propertyRegistry'];
}

declare interface UNavArea_Null extends UNavArea {
    readonly __staticRegistry: 
        UNavArea['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavArea['__propertyRegistry'];
}

declare interface UNavArea_Obstacle extends UNavArea {
    readonly __staticRegistry: 
        UNavArea['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavArea['__propertyRegistry'];
}

declare interface UNavCollision extends UNavCollisionBase {
    readonly __properties_UNavCollision: {
        CylinderCollision: FNavCollisionCylinder[];
        BoxCollision: FNavCollisionBox[];
        AreaClass: TSubclassOf<UNavArea>;
        bGatherConvexGeometry: boolean;
        bCreateOnClient: boolean;
    };
    readonly __staticRegistry: 
        UNavCollisionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavCollision['__properties_UNavCollision'] &
        UNavCollisionBase['__propertyRegistry'];
}

declare interface UNavLinkComponent extends UPrimitiveComponent {
    readonly __properties_UNavLinkComponent: {
        Links: FNavigationLink[];
    };
    readonly __staticRegistry: 
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavLinkComponent['__properties_UNavLinkComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface UNavLinkCustomComponent extends UNavRelevantComponent {
    readonly __properties_UNavLinkCustomComponent: {
        NavLinkUserId: number;
        CustomLinkId: FNavLinkId;
        AuxiliaryCustomLinkId: FNavLinkAuxiliaryId;
        EnabledAreaClass: TSubclassOf<UNavArea>;
        DisabledAreaClass: TSubclassOf<UNavArea>;
        SupportedAgents: FNavAgentSelector;
        LinkRelativeStart: FVector;
        LinkRelativeEnd: FVector;
        LinkDirection: ENavLinkDirection;
        bLinkEnabled: boolean;
        bNotifyWhenEnabled: boolean;
        bNotifyWhenDisabled: boolean;
        bCreateBoxObstacle: boolean;
        ObstacleOffset: FVector;
        ObstacleExtent: FVector;
        ObstacleAreaClass: TSubclassOf<UNavArea>;
        BroadcastRadius: number;
        BroadcastInterval: number;
        BroadcastChannel: ECollisionChannel;
    };
    readonly __staticRegistry: 
        UNavRelevantComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavLinkCustomComponent['__properties_UNavLinkCustomComponent'] &
        UNavRelevantComponent['__propertyRegistry'];
}

declare interface UNavLinkRenderingComponent extends UPrimitiveComponent {
    readonly __staticRegistry: 
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface UNavLinkTrivial extends UNavLinkDefinition {
    readonly __staticRegistry: 
        UNavLinkDefinition['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavLinkDefinition['__propertyRegistry'];
}

declare interface UNavMeshRenderingComponent extends UDebugDrawComponent {
    readonly __staticRegistry: 
        UDebugDrawComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDebugDrawComponent['__propertyRegistry'];
}

declare interface UNavModifierComponent extends UNavRelevantComponent {
    readonly __static_UNavModifierComponent: {
        SetAreaClassToReplace(NewAreaClassToReplace: TSubclassOf<UNavArea>): void;
        SetAreaClass(NewAreaClass: TSubclassOf<UNavArea>): void;
    };
    readonly __properties_UNavModifierComponent: {
        AreaClass: TSubclassOf<UNavArea>;
        AreaClassToReplace: TSubclassOf<UNavArea>;
        FailsafeExtent: FVector;
        NavMeshResolution: ENavigationDataResolution;
        bIncludeAgentHeight: boolean;
    };
    readonly __staticRegistry: 
        UNavModifierComponent['__static_UNavModifierComponent'] &
        UNavRelevantComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavModifierComponent['__properties_UNavModifierComponent'] &
        UNavRelevantComponent['__propertyRegistry'];
}

declare interface UNavRelevantComponent extends UActorComponent {
    readonly __static_UNavRelevantComponent: {
        SetNavigationRelevancy(bRelevant: boolean): void;
    };
    readonly __properties_UNavRelevantComponent: {
        bAttachToOwnersRoot: boolean;
        CachedNavParent: UObject;
    };
    readonly __staticRegistry: 
        UNavRelevantComponent['__static_UNavRelevantComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavRelevantComponent['__properties_UNavRelevantComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UNavigationGraphNodeComponent extends USceneComponent {
    readonly __properties_UNavigationGraphNodeComponent: {
        Node: FNavGraphNode;
        NextNodeComponent: UNavigationGraphNodeComponent;
        PrevNodeComponent: UNavigationGraphNodeComponent;
    };
    readonly __staticRegistry: 
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationGraphNodeComponent['__properties_UNavigationGraphNodeComponent'] &
        USceneComponent['__propertyRegistry'];
}

declare interface UNavigationInvokerComponent extends UActorComponent {
    readonly __properties_UNavigationInvokerComponent: {
        TileGenerationRadius: number;
        TileRemovalRadius: number;
        SupportedAgents: FNavAgentSelector;
        Priority: ENavigationInvokerPriority;
    };
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationInvokerComponent['__properties_UNavigationInvokerComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UNavigationObjectRepository extends UWorldSubsystem {
    readonly __staticRegistry: 
        UWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UWorldSubsystem['__propertyRegistry'];
}

declare interface UNavigationPath extends UObject {
    readonly __static_UNavigationPath: {
        IsValid(): boolean;
        IsStringPulled(): boolean;
        IsPartial(): boolean;
        GetPathLength(): number;
        GetPathCost(): number;
        GetDebugString(): string;
        EnableRecalculationOnInvalidation(DoRecalculation: ENavigationOptionFlag): void;
        EnableDebugDrawing(bShouldDrawDebugData: boolean, PathColor: FLinearColor): void;
    };
    readonly __properties_UNavigationPath: {
        PathUpdatedNotifier: FNavigationPathPathUpdatedNotifier;
        PathPoints: FVector[];
        RecalculateOnInvalidation: ENavigationOptionFlag;
    };
    readonly __staticRegistry: 
        UNavigationPath['__static_UNavigationPath'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationPath['__properties_UNavigationPath'] &
        UObject['__propertyRegistry'];
}

declare interface UNavigationQueryFilter extends UObject {
    readonly __properties_UNavigationQueryFilter: {
        Areas: FNavigationFilterArea[];
        IncludeFlags: FNavigationFilterFlags;
        ExcludeFlags: FNavigationFilterFlags;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationQueryFilter['__properties_UNavigationQueryFilter'] &
        UObject['__propertyRegistry'];
}

declare interface UNavigationSystemModuleConfig extends UNavigationSystemConfig {
    readonly __properties_UNavigationSystemModuleConfig: {
        bStrictlyStatic: boolean;
        bCreateOnClient: boolean;
        bAutoSpawnMissingNavData: boolean;
        bSpawnNavDataInNavBoundsLevel: boolean;
    };
    readonly __staticRegistry: 
        UNavigationSystemConfig['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationSystemModuleConfig['__properties_UNavigationSystemModuleConfig'] &
        UNavigationSystemConfig['__propertyRegistry'];
}

declare interface UNavigationSystemV1 extends UNavigationSystemBase {
    readonly __static_UNavigationSystemV1: {
        UnregisterNavigationInvoker(Invoker: AActor): void;
        SetMaxSimultaneousTileGenerationJobsCount(MaxNumberOfJobs: number): void;
        SetGeometryGatheringMode(NewMode: ENavDataGatheringModeConfig): void;
        ResetMaxSimultaneousTileGenerationJobsCount(): void;
        RegisterNavigationInvoker(Invoker: AActor, TileGenerationRadius: number, TileRemovalRadius: number): void;
        OnNavigationBoundsUpdated(NavVolume: ANavMeshBoundsVolume): void;
        NavigationRaycast(WorldContextObject: UObject, RayStart: FVector, RayEnd: FVector, HitLocation: FVector, FilterClass: TSubclassOf<UNavigationQueryFilter>, Querier: AController): boolean;
        K2_ReplaceAreaInOctreeData(Object: UObject, OldArea: TSubclassOf<UNavArea>, NewArea: TSubclassOf<UNavArea>): boolean;
        K2_ProjectPointToNavigation(WorldContextObject: UObject, Point: FVector, ProjectedLocation: FVector, NavData: ANavigationData, FilterClass: TSubclassOf<UNavigationQueryFilter>, QueryExtent: FVector): boolean;
        K2_GetRandomReachablePointInRadius(WorldContextObject: UObject, Origin: FVector, RandomLocation: FVector, Radius: number, NavData: ANavigationData, FilterClass: TSubclassOf<UNavigationQueryFilter>): boolean;
        K2_GetRandomPointInNavigableRadius(WorldContextObject: UObject, Origin: FVector, RandomLocation: FVector, Radius: number, NavData: ANavigationData, FilterClass: TSubclassOf<UNavigationQueryFilter>): boolean;
        K2_GetRandomLocationInNavigableRadius(WorldContextObject: UObject, Origin: FVector, RandomLocation: FVector, Radius: number, NavData: ANavigationData, FilterClass: TSubclassOf<UNavigationQueryFilter>): boolean;
        IsNavigationBeingBuiltOrLocked(WorldContextObject: UObject): boolean;
        IsNavigationBeingBuilt(WorldContextObject: UObject): boolean;
        GetPathLength(WorldContextObject: UObject, PathStart: FVector, PathEnd: FVector, PathLength: number, NavData: ANavigationData, FilterClass: TSubclassOf<UNavigationQueryFilter>): ENavigationQueryResult;
        GetPathCost(WorldContextObject: UObject, PathStart: FVector, PathEnd: FVector, PathCost: number, NavData: ANavigationData, FilterClass: TSubclassOf<UNavigationQueryFilter>): ENavigationQueryResult;
        GetNavigationSystem(WorldContextObject: UObject): UNavigationSystemV1;
        FindPathToLocationSynchronously(WorldContextObject: UObject, PathStart: FVector, PathEnd: FVector, PathfindingContext: AActor, FilterClass: TSubclassOf<UNavigationQueryFilter>): UNavigationPath;
        FindPathToActorSynchronously(WorldContextObject: UObject, PathStart: FVector, GoalActor: AActor, TetherDistance: number, PathfindingContext: AActor, FilterClass: TSubclassOf<UNavigationQueryFilter>): UNavigationPath;
    };
    readonly __properties_UNavigationSystemV1: {
        MainNavData: ANavigationData;
        AbstractNavData: ANavigationData;
        DefaultAgentName: string;
        CrowdManagerClass: TSoftClassPtr<UCrowdManagerBase>;
        bAutoCreateNavigationData: boolean;
        bSpawnNavDataInNavBoundsLevel: boolean;
        bAllowClientSideNavigation: boolean;
        bShouldDiscardSubLevelNavData: boolean;
        bTickWhilePaused: boolean;
        bSupportRebuilding: boolean;
        bInitialBuildingLocked: boolean;
        bSkipAgentHeightCheckWhenPickingNavData: boolean;
        GeometryExportTriangleCountWarningThreshold: number;
        bGenerateNavigationOnlyAroundNavigationInvokers: boolean;
        ActiveTilesUpdateInterval: number;
        InvokersMaximumDistanceFromSeed: number;
        DataGatheringMode: ENavDataGatheringModeConfig;
        DirtyAreaWarningSizeThreshold: number;
        GatheringNavModifiersWarningLimitTime: number;
        SupportedAgents: FNavDataConfig[];
        SupportedAgentsMask: FNavAgentSelector;
        BuildBounds: FBox;
        NavDataSet: ANavigationData[];
        NavDataRegistrationQueue: ANavigationData[];
        OnNavDataRegisteredEvent: FNavigationSystemV1OnNavDataRegisteredEvent;
        OnNavigationGenerationFinishedDelegate: FNavigationSystemV1OnNavigationGenerationFinishedDelegate;
        OperationMode: FNavigationSystemRunMode;
        Repository: UNavigationObjectRepository;
    };
    readonly __staticRegistry: 
        UNavigationSystemV1['__static_UNavigationSystemV1'] &
        UNavigationSystemBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationSystemV1['__properties_UNavigationSystemV1'] &
        UNavigationSystemBase['__propertyRegistry'];
}

declare interface URecastFilter_UseDefaultArea extends UNavigationQueryFilter {
    readonly __staticRegistry: 
        UNavigationQueryFilter['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationQueryFilter['__propertyRegistry'];
}

declare interface URecastNavMeshDataChunk extends UNavigationDataChunk {
    readonly __staticRegistry: 
        UNavigationDataChunk['__staticRegistry'];
    readonly __propertyRegistry: 
        UNavigationDataChunk['__propertyRegistry'];
}

declare interface USplineNavModifierComponent extends UNavModifierComponent {
    readonly __static_USplineNavModifierComponent: {
        UpdateNavigationWithComponentData(): void;
    };
    readonly __properties_USplineNavModifierComponent: {
        bUpdateNavDataOnSplineChange: boolean;
        AttachedSpline: FComponentReference;
        StrokeWidth: number;
        StrokeHeight: number;
        SubdivisionLOD: ESubdivisionLOD;
    };
    readonly __staticRegistry: 
        USplineNavModifierComponent['__static_USplineNavModifierComponent'] &
        UNavModifierComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USplineNavModifierComponent['__properties_USplineNavModifierComponent'] &
        UNavModifierComponent['__propertyRegistry'];
}

