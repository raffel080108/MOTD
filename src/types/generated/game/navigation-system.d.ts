declare interface AAbstractNavData extends ANavigationData {

}
declare const AAbstractNavData: AAbstractNavData;

declare interface ANavMeshBoundsVolume extends AVolume {
    SupportedAgents: FNavAgentSelector;
}
declare const ANavMeshBoundsVolume: ANavMeshBoundsVolume;

declare interface ANavModifierVolume extends AVolume {
    AreaClass: TSubclassOf<UNavArea>;
    AreaClassToReplace: TSubclassOf<UNavArea>;
    bMaskFillCollisionUnderneathForNavmesh: boolean;
    NavMeshResolution: ENavigationDataResolution;
    SetAreaClassToReplace(NewAreaClassToReplace: TSubclassOf<UNavArea>): void;
    SetAreaClass(NewAreaClass: TSubclassOf<UNavArea>): void;
}
declare const ANavModifierVolume: ANavModifierVolume;

declare interface ANavSystemConfigOverride extends AActor {
    NavigationSystemConfig: UNavigationSystemConfig;
    OverridePolicy: ENavSystemOverridePolicy;
    bLoadOnClient: boolean;
}
declare const ANavSystemConfigOverride: ANavSystemConfigOverride;

declare interface ANavigationData extends AActor {
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
    DataVersion: uint32;
    SupportedAreas: TArray<FSupportedAreaData>;
}
declare const ANavigationData: ANavigationData;

declare interface ANavigationGraph extends ANavigationData {

}
declare const ANavigationGraph: ANavigationGraph;

declare interface ANavigationGraphNode extends AActor {

}
declare const ANavigationGraphNode: ANavigationGraphNode;

declare interface ANavigationTestingActor extends AActor {
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
}
declare const ANavigationTestingActor: ANavigationTestingActor;

declare interface ARecastNavMesh extends ANavigationData {
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
    InvokerTilePriorityBumpDistanceThresholdInTileUnits: uint32;
    InvokerTilePriorityBumpIncrease: uint8;
    NavLinkJumpDownConfig: FNavLinkGenerationJumpDownConfig;
    bUseVoxelCache: boolean;
    TileSetUpdateInterval: number;
    HeuristicScale: number;
    VerticalDeviationFromGroundCompensation: number;
    K2_ReplaceAreaInTileBounds(Bounds: FBox, OldArea: TSubclassOf<UNavArea>, NewArea: TSubclassOf<UNavArea>, ReplaceLinks: boolean): boolean;
}
declare const ARecastNavMesh: ARecastNavMesh;

declare interface FNavCollisionBox {
    Offset: FVector;
    Extent: FVector;
}
declare const FNavCollisionBox: FNavCollisionBox;

declare interface FNavCollisionCylinder {
    Offset: FVector;
    Radius: number;
    Height: number;
}
declare const FNavCollisionCylinder: FNavCollisionCylinder;

declare interface FNavGraphEdge {

}
declare const FNavGraphEdge: FNavGraphEdge;

declare interface FNavGraphNode {
    Owner: UObject;
}
declare const FNavGraphNode: FNavGraphNode;

declare interface FNavLinkCustomInstanceData extends FActorComponentInstanceData {
    CustomLinkId: FNavLinkId;
    AuxiliaryCustomLinkId: FNavLinkAuxiliaryId;
}
declare const FNavLinkCustomInstanceData: FNavLinkCustomInstanceData;

declare interface FNavLinkGenerationJumpDownConfig {
    bEnabled: boolean;
    JumpLength: number;
    JumpDistanceFromEdge: number;
    JumpMaxDepth: number;
    JumpHeight: number;
    JumpEndsHeightTolerance: number;
    SamplingSeparationFactor: number;
    FilterDistanceThreshold: number;
    LinkBuilderFlags: uint16;
    DownDirectionAreaClass: TSubclassOf<UNavAreaBase>;
    UpDirectionAreaClass: TSubclassOf<UNavAreaBase>;
    LinkProxyClass: TSubclassOf<UBaseGeneratedNavLinksProxy>;
    LinkProxyId: FNavLinkId;
    LinkProxy: UBaseGeneratedNavLinksProxy;
    bLinkProxyRegistered: boolean;
}
declare const FNavLinkGenerationJumpDownConfig: FNavLinkGenerationJumpDownConfig;

declare interface FNavMeshResolutionParam {
    CellSize: number;
    CellHeight: number;
    AgentMaxStepHeight: number;
}
declare const FNavMeshResolutionParam: FNavMeshResolutionParam;

declare interface FNavigationFilterArea {
    AreaClass: TSubclassOf<UNavArea>;
    TravelCostOverride: number;
    EnteringCostOverride: number;
    bIsExcluded: boolean;
    bOverrideTravelCost: boolean;
    bOverrideEnteringCost: boolean;
}
declare const FNavigationFilterArea: FNavigationFilterArea;

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
declare const FNavigationFilterFlags: FNavigationFilterFlags;

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
    LinkGenerationDebugFlags: uint16;
    LinkGenerationSelectedEdge: number;
}
declare const FRecastNavMeshTileGenerationDebug: FRecastNavMeshTileGenerationDebug;

declare interface FSupportedAreaData {
    AreaClassName: FString;
    AreaID: number;
    AreaClass: UClass;
}
declare const FSupportedAreaData: FSupportedAreaData;

declare interface INavLinkCustomInterface extends IInterface {

}
declare const INavLinkCustomInterface: INavLinkCustomInterface;

declare interface INavLinkHostInterface extends IInterface {

}
declare const INavLinkHostInterface: INavLinkHostInterface;

declare interface INavNodeInterface extends IInterface {

}
declare const INavNodeInterface: INavNodeInterface;

declare interface INavigationPathGenerator extends IInterface {

}
declare const INavigationPathGenerator: INavigationPathGenerator;

declare interface UBaseGeneratedNavLinksProxy extends UObject {
    LinkProxyId: FNavLinkId;
    Owner: UObject;
}
declare const UBaseGeneratedNavLinksProxy: UBaseGeneratedNavLinksProxy;

declare interface UCrowdManagerBase extends UObject {

}
declare const UCrowdManagerBase: UCrowdManagerBase;

declare interface UNavArea extends UNavAreaBase {
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
}
declare const UNavArea: UNavArea;

declare interface UNavAreaMeta extends UNavArea {

}
declare const UNavAreaMeta: UNavAreaMeta;

declare interface UNavAreaMeta_SwitchByAgent extends UNavAreaMeta {
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
}
declare const UNavAreaMeta_SwitchByAgent: UNavAreaMeta_SwitchByAgent;

declare interface UNavArea_Default extends UNavArea {

}
declare const UNavArea_Default: UNavArea_Default;

declare interface UNavArea_LowHeight extends UNavArea {

}
declare const UNavArea_LowHeight: UNavArea_LowHeight;

declare interface UNavArea_Null extends UNavArea {

}
declare const UNavArea_Null: UNavArea_Null;

declare interface UNavArea_Obstacle extends UNavArea {

}
declare const UNavArea_Obstacle: UNavArea_Obstacle;

declare interface UNavCollision extends UNavCollisionBase {
    CylinderCollision: TArray<FNavCollisionCylinder>;
    BoxCollision: TArray<FNavCollisionBox>;
    AreaClass: TSubclassOf<UNavArea>;
    bGatherConvexGeometry: boolean;
    bCreateOnClient: boolean;
}
declare const UNavCollision: UNavCollision;

declare interface UNavLinkComponent extends UPrimitiveComponent {
    Links: TArray<FNavigationLink>;
}
declare const UNavLinkComponent: UNavLinkComponent;

declare interface UNavLinkCustomComponent extends UNavRelevantComponent {
    NavLinkUserId: uint32;
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
}
declare const UNavLinkCustomComponent: UNavLinkCustomComponent;

declare interface UNavLinkRenderingComponent extends UPrimitiveComponent {

}
declare const UNavLinkRenderingComponent: UNavLinkRenderingComponent;

declare interface UNavLinkTrivial extends UNavLinkDefinition {

}
declare const UNavLinkTrivial: UNavLinkTrivial;

declare interface UNavMeshRenderingComponent extends UDebugDrawComponent {

}
declare const UNavMeshRenderingComponent: UNavMeshRenderingComponent;

declare interface UNavModifierComponent extends UNavRelevantComponent {
    AreaClass: TSubclassOf<UNavArea>;
    AreaClassToReplace: TSubclassOf<UNavArea>;
    FailsafeExtent: FVector;
    NavMeshResolution: ENavigationDataResolution;
    bIncludeAgentHeight: boolean;
    SetAreaClassToReplace(NewAreaClassToReplace: TSubclassOf<UNavArea>): void;
    SetAreaClass(NewAreaClass: TSubclassOf<UNavArea>): void;
}
declare const UNavModifierComponent: UNavModifierComponent;

declare interface UNavRelevantComponent extends UActorComponent {
    bAttachToOwnersRoot: boolean;
    CachedNavParent: UObject;
    SetNavigationRelevancy(bRelevant: boolean): void;
}
declare const UNavRelevantComponent: UNavRelevantComponent;

declare interface UNavigationGraphNodeComponent extends USceneComponent {
    Node: FNavGraphNode;
    NextNodeComponent: UNavigationGraphNodeComponent;
    PrevNodeComponent: UNavigationGraphNodeComponent;
}
declare const UNavigationGraphNodeComponent: UNavigationGraphNodeComponent;

declare interface UNavigationInvokerComponent extends UActorComponent {
    TileGenerationRadius: number;
    TileRemovalRadius: number;
    SupportedAgents: FNavAgentSelector;
    Priority: ENavigationInvokerPriority;
}
declare const UNavigationInvokerComponent: UNavigationInvokerComponent;

declare interface UNavigationObjectRepository extends UWorldSubsystem {

}
declare const UNavigationObjectRepository: UNavigationObjectRepository;

declare interface UNavigationPath extends UObject {
    PathUpdatedNotifier: FNavigationPathPathUpdatedNotifier;
    PathPoints: TArray<FVector>;
    RecalculateOnInvalidation: ENavigationOptionFlag;
    IsValid(): boolean;
    IsStringPulled(): boolean;
    IsPartial(): boolean;
    GetPathLength(): number;
    GetPathCost(): number;
    GetDebugString(): FString;
    EnableRecalculationOnInvalidation(DoRecalculation: ENavigationOptionFlag): void;
    EnableDebugDrawing(bShouldDrawDebugData: boolean, PathColor: FLinearColor): void;
}
declare const UNavigationPath: UNavigationPath;

declare interface UNavigationQueryFilter extends UObject {
    Areas: TArray<FNavigationFilterArea>;
    IncludeFlags: FNavigationFilterFlags;
    ExcludeFlags: FNavigationFilterFlags;
}
declare const UNavigationQueryFilter: UNavigationQueryFilter;

declare interface UNavigationSystemModuleConfig extends UNavigationSystemConfig {
    bStrictlyStatic: boolean;
    bCreateOnClient: boolean;
    bAutoSpawnMissingNavData: boolean;
    bSpawnNavDataInNavBoundsLevel: boolean;
}
declare const UNavigationSystemModuleConfig: UNavigationSystemModuleConfig;

declare interface UNavigationSystemV1 extends UNavigationSystemBase {
    MainNavData: ANavigationData;
    AbstractNavData: ANavigationData;
    DefaultAgentName: FName;
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
    SupportedAgents: TArray<FNavDataConfig>;
    SupportedAgentsMask: FNavAgentSelector;
    BuildBounds: FBox;
    NavDataSet: TArray<ANavigationData>;
    NavDataRegistrationQueue: TArray<ANavigationData>;
    OnNavDataRegisteredEvent: FNavigationSystemV1OnNavDataRegisteredEvent;
    OnNavigationGenerationFinishedDelegate: FNavigationSystemV1OnNavigationGenerationFinishedDelegate;
    OperationMode: FNavigationSystemRunMode;
    Repository: UNavigationObjectRepository;
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
}
declare const UNavigationSystemV1: UNavigationSystemV1;

declare interface URecastFilter_UseDefaultArea extends UNavigationQueryFilter {

}
declare const URecastFilter_UseDefaultArea: URecastFilter_UseDefaultArea;

declare interface URecastNavMeshDataChunk extends UNavigationDataChunk {

}
declare const URecastNavMeshDataChunk: URecastNavMeshDataChunk;

declare interface USplineNavModifierComponent extends UNavModifierComponent {
    bUpdateNavDataOnSplineChange: boolean;
    AttachedSpline: FComponentReference;
    StrokeWidth: number;
    StrokeHeight: number;
    SubdivisionLOD: ESubdivisionLOD;
    UpdateNavigationWithComponentData(): void;
}
declare const USplineNavModifierComponent: USplineNavModifierComponent;

