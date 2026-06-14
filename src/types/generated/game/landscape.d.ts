declare interface AControlPointMeshActor extends AActor {
    ControlPointMeshComponent: UControlPointMeshComponent;
}
declare const AControlPointMeshActor: AControlPointMeshActor;

declare interface ALandscape extends ALandscapeProxy {
    RenderWeightmaps(InWorldTransform: FTransform, InExtents: FBox2D, InWeightmapLayerNames: TArray<FName>, OutRenderTarget: UTextureRenderTarget): boolean;
    RenderWeightmap(InWorldTransform: FTransform, InExtents: FBox2D, InWeightmapLayerName: FName, OutRenderTarget: UTextureRenderTarget2D): boolean;
    RenderHeightmap(InWorldTransform: FTransform, InExtents: FBox2D, OutRenderTarget: UTextureRenderTarget2D): boolean;
    GetTargetLayerNames(bInIncludeVisibilityLayer: boolean): TArray<FName>;
}
declare const ALandscape: ALandscape;

declare interface ALandscapeBlueprintBrushBase extends AActor {
    UpdateOnPropertyChange: boolean;
    AffectHeightmap: boolean;
    AffectWeightmap: boolean;
    AffectVisibilityLayer: boolean;
    AffectedWeightmapLayers: TArray<FName>;
    bUsePowerOfTwoRenderTarget: boolean;
    RequestLandscapeUpdate(bInUserTriggered: boolean): void;
    RenderLayer(InParameters: FLandscapeBrushParameters): UTextureRenderTarget2D;
    Render(InIsHeightmap: boolean, InCombinedResult: UTextureRenderTarget2D, InWeightmapLayerName: FName): UTextureRenderTarget2D;
    Initialize(InLandscapeTransform: FTransform, InLandscapeSize: FIntPoint, InLandscapeRenderTargetSize: FIntPoint): void;
    GetBlueprintRenderDependencies(OutStreamableAssets: TArray<UObject>): void;
}
declare const ALandscapeBlueprintBrushBase: ALandscapeBlueprintBrushBase;

declare interface ALandscapeGizmoActiveActor extends ALandscapeGizmoActor {

}
declare const ALandscapeGizmoActiveActor: ALandscapeGizmoActiveActor;

declare interface ALandscapeGizmoActor extends AActor {

}
declare const ALandscapeGizmoActor: ALandscapeGizmoActor;

declare interface ALandscapeMeshProxyActor extends AActor {
    LandscapeMeshProxyComponent: ULandscapeMeshProxyComponent;
}
declare const ALandscapeMeshProxyActor: ALandscapeMeshProxyActor;

declare interface ALandscapeProxy extends APartitionActor {
    SplineComponent: ULandscapeSplinesComponent;
    LandscapeGuid: FGuid;
    OriginalLandscapeGuid: FGuid;
    bEnableNanite: boolean;
    PerLODOverrideMaterials: TArray<FLandscapePerLODMaterialOverride>;
    bDisableRuntimeGrassMapGeneration: boolean;
    LandscapeSectionOffset: FIntPoint;
    MaxLODLevel: number;
    LOD0ScreenSize: number;
    LODGroupKey: uint32;
    LOD0DistributionSetting: number;
    LODDistributionSetting: number;
    ScalableLOD0ScreenSize: FPerQualityLevelFloat;
    ScalableLOD0DistributionSetting: FPerQualityLevelFloat;
    ScalableLODDistributionSetting: FPerQualityLevelFloat;
    bUseScalableLODSettings: boolean;
    LODBlendRange: number;
    StaticLightingLOD: number;
    DefaultPhysMaterial: UPhysicalMaterial;
    StreamingDistanceMultiplier: number;
    LandscapeMaterial: UMaterialInterface;
    LandscapeHoleMaterial: UMaterialInterface;
    RuntimeVirtualTextures: TArray<URuntimeVirtualTexture>;
    bSetCreateRuntimeVirtualTextureVolumes: boolean;
    bVirtualTextureRenderWithQuad: boolean;
    bVirtualTextureRenderWithQuadHQ: boolean;
    VirtualTextureNumLods: number;
    VirtualTextureLodBias: number;
    VirtualTextureRenderPassType: ERuntimeVirtualTextureMainPassType;
    NegativeZBoundsExtension: number;
    PositiveZBoundsExtension: number;
    LandscapeComponents: TArray<ULandscapeComponent>;
    CollisionComponents: TArray<ULandscapeHeightfieldCollisionComponent>;
    FoliageComponents: TArray<UHierarchicalInstancedStaticMeshComponent>;
    NaniteComponent: ULandscapeNaniteComponent;
    NaniteComponents: TArray<ULandscapeNaniteComponent>;
    GrassTypesMaxDiscardDistance: number;
    StaticLightingResolution: number;
    CastShadow: boolean;
    bCastDynamicShadow: boolean;
    bCastStaticShadow: boolean;
    ShadowCacheInvalidationBehavior: EShadowCacheInvalidationBehavior;
    bCastContactShadow: boolean;
    bCastFarShadow: boolean;
    bCastHiddenShadow: boolean;
    bCastShadowAsTwoSided: boolean;
    bAffectDistanceFieldLighting: boolean;
    bAffectDynamicIndirectLighting: boolean;
    bAffectIndirectLightingWhileHidden: boolean;
    LightingChannels: FLightingChannels;
    bUseMaterialPositionOffsetInStaticLighting: boolean;
    NonNaniteVirtualShadowMapConstantDepthBias: number;
    NonNaniteVirtualShadowMapInvalidationHeightErrorThreshold: number;
    NonNaniteVirtualShadowMapInvalidationScreenSizeLimit: number;
    bHoldout: boolean;
    bRenderCustomDepth: boolean;
    CustomDepthStencilWriteMask: ERendererStencilMask;
    CustomDepthStencilValue: number;
    LDMaxDrawDistance: number;
    LightmassSettings: FLightmassPrimitiveSettings;
    CollisionMipLevel: number;
    SimpleCollisionMipLevel: number;
    BodyInstance: FBodyInstance;
    bGenerateOverlapEvents: boolean;
    bBakeMaterialPositionOffsetIntoCollision: boolean;
    RegisteredToSubsystem: ULandscapeSubsystem;
    ComponentSizeQuads: number;
    SubsectionSizeQuads: number;
    NumSubsections: number;
    bUsedForNavigation: boolean;
    bFillCollisionUnderLandscapeForNavmesh: boolean;
    NavigationGeometryGatheringMode: ENavDataGatheringMode;
    bUseDynamicMaterialInstance: boolean;
    bUseLandscapeForCullingInvisibleHLODVertices: boolean;
    bHasLayersContent: boolean;
    bUseCompressedHeightmapStorage: boolean;
    bStripPhysicsWhenCookedClient: boolean;
    bStripPhysicsWhenCookedServer: boolean;
    bStripGrassWhenCookedClient: boolean;
    bStripGrassWhenCookedServer: boolean;
    TargetLayers: Record<FName, FLandscapeTargetLayerSettings>;
    SetVirtualTextureRenderPassType(InType: ERuntimeVirtualTextureMainPassType): void;
    SetLandscapeMaterialVectorParameterValue(ParameterName: FName, Value: FLinearColor): void;
    SetLandscapeMaterialTextureParameterValue(ParameterName: FName, Value: UTexture): void;
    SetLandscapeMaterialScalarParameterValue(ParameterName: FName, Value: number): void;
    LandscapeExportHeightmapToRenderTarget(InRenderTarget: UTextureRenderTarget2D, InExportHeightIntoRGChannel: boolean, InExportLandscapeProxies: boolean): boolean;
    GetLandscapeActor(): ALandscape;
    EditorSetLandscapeMaterial(NewLandscapeMaterial: UMaterialInterface): void;
    EditorApplySpline(InSplineComponent: USplineComponent, StartWidth: number, EndWidth: number, StartSideFalloff: number, EndSideFalloff: number, StartRoll: number, EndRoll: number, NumSubdivisions: number, bRaiseHeights: boolean, bLowerHeights: boolean, PaintLayer: ULandscapeLayerInfoObject, EditLayerName: FName): void;
    ChangeLODDistanceFactor(InLODDistanceFactor: number): void;
    ChangeComponentScreenSizeToUseSubSections(InComponentScreenSizeToUseSubSections: number): void;
}
declare const ALandscapeProxy: ALandscapeProxy;

declare interface ALandscapeSplineActor extends AActor {
    LandscapeGuid: FGuid;
}
declare const ALandscapeSplineActor: ALandscapeSplineActor;

declare interface ALandscapeSplineMeshesActor extends APartitionActor {
    StaticMeshComponents: TArray<UStaticMeshComponent>;
}
declare const ALandscapeSplineMeshesActor: ALandscapeSplineMeshesActor;

declare interface ALandscapeStreamingProxy extends ALandscapeProxy {
    LandscapeActorRef: TSoftObjectPtr<ALandscape>;
    OverriddenSharedProperties: TSet<FName>;
}
declare const ALandscapeStreamingProxy: ALandscapeStreamingProxy;

declare interface FForeignControlPointData {

}
declare const FForeignControlPointData: FForeignControlPointData;

declare interface FForeignSplineSegmentData {

}
declare const FForeignSplineSegmentData: FForeignSplineSegmentData;

declare interface FForeignWorldSplineData {

}
declare const FForeignWorldSplineData: FForeignWorldSplineData;

declare interface FGizmoSelectData {

}
declare const FGizmoSelectData: FGizmoSelectData;

declare interface FGrassInput {
    Name: FName;
    GrassType: ULandscapeGrassType;
    Input: FExpressionInput;
}
declare const FGrassInput: FGrassInput;

declare interface FGrassVariety {
    GrassMesh: UStaticMesh;
    OverrideMaterials: TArray<UMaterialInterface>;
    GrassDensity: FPerPlatformFloat;
    GrassDensityQuality: FPerQualityLevelFloat;
    bUseGrid: boolean;
    PlacementJitter: number;
    StartCullDistance: FPerPlatformInt;
    StartCullDistanceQuality: FPerQualityLevelInt;
    EndCullDistance: FPerPlatformInt;
    EndCullDistanceQuality: FPerQualityLevelInt;
    MinLOD: number;
    AllowedDensityRange: FFloatInterval;
    Scaling: EGrassScaling;
    ScaleX: FFloatInterval;
    ScaleY: FFloatInterval;
    ScaleZ: FFloatInterval;
    bWeightAttenuatesMaxScale: boolean;
    MaxScaleWeightAttenuation: number;
    RandomRotation: boolean;
    AlignToSurface: boolean;
    bUseLandscapeLightmap: boolean;
    LightingChannels: FLightingChannels;
    bReceivesDecals: boolean;
    bAffectDistanceFieldLighting: boolean;
    bCastDynamicShadow: boolean;
    bCastContactShadow: boolean;
    bKeepInstanceBufferCPUCopy: boolean;
    InstanceWorldPositionOffsetDisableDistance: uint32;
    ShadowCacheInvalidationBehavior: EShadowCacheInvalidationBehavior;
}
declare const FGrassVariety: FGrassVariety;

declare interface FHeightmapData {
    Texture: UTexture2D;
}
declare const FHeightmapData: FHeightmapData;

declare interface FHeightmapTextureEdgeSnapshot {

}
declare const FHeightmapTextureEdgeSnapshot: FHeightmapTextureEdgeSnapshot;

declare interface FLandscapeBrushParameters {
    RenderAreaWorldTransform: FTransform;
    RenderAreaSize: FIntPoint;
    CombinedResult: UTextureRenderTarget2D;
    LayerType: ELandscapeToolTargetType;
    WeightmapLayerName: FName;
}
declare const FLandscapeBrushParameters: FLandscapeBrushParameters;

declare interface FLandscapeComponentMaterialOverride {
    LODIndex: FPerPlatformInt;
    Material: UMaterialInterface;
}
declare const FLandscapeComponentMaterialOverride: FLandscapeComponentMaterialOverride;

declare interface FLandscapeEditLayerMergeRenderBlackboardItem {

}
declare const FLandscapeEditLayerMergeRenderBlackboardItem: FLandscapeEditLayerMergeRenderBlackboardItem;

declare interface FLandscapeEditToolRenderData {
    ToolMaterial: UMaterialInterface;
    GizmoMaterial: UMaterialInterface;
    SelectedType: number;
    DebugChannelR: number;
    DebugChannelG: number;
    DebugChannelB: number;
    DataTexture: UTexture2D;
    LayerContributionTexture: UTexture2D;
    DirtyTexture: UTexture2D;
}
declare const FLandscapeEditToolRenderData: FLandscapeEditToolRenderData;

declare interface FLandscapeEditorLayerSettings {

}
declare const FLandscapeEditorLayerSettings: FLandscapeEditorLayerSettings;

declare interface FLandscapeImportLayerInfo {

}
declare const FLandscapeImportLayerInfo: FLandscapeImportLayerInfo;

declare interface FLandscapeInfoLayerSettings {
    LayerInfoObj: ULandscapeLayerInfoObject;
    LayerName: FName;
}
declare const FLandscapeInfoLayerSettings: FLandscapeInfoLayerSettings;

declare interface FLandscapeLayer {
    Guid: FGuid;
    Name: FName;
    bVisible: boolean;
    bLocked: boolean;
    HeightmapAlpha: number;
    WeightmapAlpha: number;
    BlendMode: ELandscapeBlendMode;
    Brushes: TArray<FLandscapeLayerBrush>;
    WeightmapLayerAllocationBlend: Record<string | number | symbol, boolean>;
    EditLayer: ULandscapeEditLayerBase;
}
declare const FLandscapeLayer: FLandscapeLayer;

declare interface FLandscapeLayerBrush {

}
declare const FLandscapeLayerBrush: FLandscapeLayerBrush;

declare interface FLandscapeLayerComponentData {
    HeightmapData: FHeightmapData;
    WeightmapData: FWeightmapData;
}
declare const FLandscapeLayerComponentData: FLandscapeLayerComponentData;

declare interface FLandscapeMaterialTextureStreamingInfo {
    TextureName: FName;
    TexelFactor: number;
}
declare const FLandscapeMaterialTextureStreamingInfo: FLandscapeMaterialTextureStreamingInfo;

declare interface FLandscapePerLODMaterialOverride {
    LODIndex: number;
    Material: UMaterialInterface;
}
declare const FLandscapePerLODMaterialOverride: FLandscapePerLODMaterialOverride;

declare interface FLandscapeProxyMaterialOverride {
    LODIndex: FPerPlatformInt;
    Material: UMaterialInterface;
}
declare const FLandscapeProxyMaterialOverride: FLandscapeProxyMaterialOverride;

declare interface FLandscapeSplineConnection {
    Segment: ULandscapeSplineSegment;
    End: boolean;
}
declare const FLandscapeSplineConnection: FLandscapeSplineConnection;

declare interface FLandscapeSplineInterpPoint {
    Center: FVector;
    Left: FVector;
    Right: FVector;
    FalloffLeft: FVector;
    FalloffRight: FVector;
    LayerLeft: FVector;
    LayerRight: FVector;
    LayerFalloffLeft: FVector;
    LayerFalloffRight: FVector;
    StartEndFalloff: number;
}
declare const FLandscapeSplineInterpPoint: FLandscapeSplineInterpPoint;

declare interface FLandscapeSplineMeshEntry {
    mesh: UStaticMesh;
    MaterialOverrides: TArray<UMaterialInterface>;
    bCenterH: boolean;
    CenterAdjust: FVector2D;
    bScaleToWidth: boolean;
    bNoZScaling: boolean;
    Scale: FVector;
    orientation: LandscapeSplineMeshOrientation;
    ForwardAxis: ESplineMeshAxis;
    UpAxis: ESplineMeshAxis;
}
declare const FLandscapeSplineMeshEntry: FLandscapeSplineMeshEntry;

declare interface FLandscapeSplineSegmentConnection {
    ControlPoint: ULandscapeSplineControlPoint;
    TangentLen: number;
    SocketName: FName;
}
declare const FLandscapeSplineSegmentConnection: FLandscapeSplineSegmentConnection;

declare interface FLandscapeTargetLayerSettings {
    LayerInfoObj: ULandscapeLayerInfoObject;
}
declare const FLandscapeTargetLayerSettings: FLandscapeTargetLayerSettings;

declare interface FLandscapeTexture2DMipMap {
    SizeX: number;
    SizeY: number;
    bCompressed: boolean;
}
declare const FLandscapeTexture2DMipMap: FLandscapeTexture2DMipMap;

declare interface FLayerBlendInput {
    LayerName: FName;
    BlendType: ELandscapeLayerBlendType;
    LayerInput: FExpressionInput;
    HeightInput: FExpressionInput;
    PreviewWeight: number;
    ConstLayerInput: FVector;
    ConstHeightInput: number;
}
declare const FLayerBlendInput: FLayerBlendInput;

declare interface FPhysicalMaterialInput {
    PhysicalMaterial: UPhysicalMaterial;
    Input: FExpressionInput;
}
declare const FPhysicalMaterialInput: FPhysicalMaterialInput;

declare interface FWeightmapData {
    Textures: TArray<UTexture2D>;
    LayerAllocations: TArray<FWeightmapLayerAllocationInfo>;
    TextureUsages: TArray<ULandscapeWeightmapUsage>;
}
declare const FWeightmapData: FWeightmapData;

declare interface FWeightmapLayerAllocationInfo {
    LayerInfo: ULandscapeLayerInfoObject;
    WeightmapTextureIndex: uint8;
    WeightmapTextureChannel: uint8;
}
declare const FWeightmapLayerAllocationInfo: FWeightmapLayerAllocationInfo;

declare interface ILandscapeBrushRenderCallAdapter_GlobalMergeLegacySupport extends IInterface {

}
declare const ILandscapeBrushRenderCallAdapter_GlobalMergeLegacySupport: ILandscapeBrushRenderCallAdapter_GlobalMergeLegacySupport;

declare interface ILandscapeEditLayerRenderer extends IInterface {

}
declare const ILandscapeEditLayerRenderer: ILandscapeEditLayerRenderer;

declare interface ILandscapeSplineInterface extends IInterface {

}
declare const ILandscapeSplineInterface: ILandscapeSplineInterface;

declare interface UControlPointMeshComponent extends UStaticMeshComponent {
    VirtualTextureMainPassMaxDrawDistance: number;
}
declare const UControlPointMeshComponent: UControlPointMeshComponent;

declare interface ULandscapeComponent extends UPrimitiveComponent {
    SectionBaseX: number;
    SectionBaseY: number;
    ComponentSizeQuads: number;
    SubsectionSizeQuads: number;
    NumSubsections: number;
    OverrideMaterial: UMaterialInterface;
    OverrideHoleMaterial: UMaterialInterface;
    MaterialInstances: TArray<UMaterialInstanceConstant>;
    MaterialInstancesDynamic: TArray<UMaterialInstanceDynamic>;
    LODIndexToMaterialIndex: TArray<int8>;
    XYOffsetmapTexture: UTexture2D;
    WeightmapScaleBias: FVector4;
    WeightmapSubsectionOffset: number;
    HeightmapScaleBias: FVector4;
    CachedLocalBox: FBox;
    MipToMipMaxDeltas: TArray<number>;
    CollisionComponentRef: ULandscapeHeightfieldCollisionComponent;
    bUserTriggeredChangeRequested: boolean;
    bNaniteActive: boolean;
    HeightmapTexture: UTexture2D;
    WeightmapLayerAllocations: TArray<FWeightmapLayerAllocationInfo>;
    WeightmapTextures: TArray<UTexture2D>;
    PerLODOverrideMaterials: TArray<FLandscapePerLODMaterialOverride>;
    GrassTypes: TArray<ULandscapeGrassType>;
    MapBuildDataId: FGuid;
    CollisionMipLevel: number;
    SimpleCollisionMipLevel: number;
    NegativeZBoundsExtension: number;
    PositiveZBoundsExtension: number;
    StaticLightingResolution: number;
    ForcedLOD: number;
    LODBias: number;
    StateId: FGuid;
    RegisteredEdgeFixup: ULandscapeHeightmapTextureEdgeFixup;
    MobileMaterialInterfaces: TArray<UMaterialInterface>;
    MobileWeightmapTextures: TArray<UTexture2D>;
    MobileWeightmapTextureArray: UTexture2DArray;
    MobileWeightmapLayerAllocations: TArray<FWeightmapLayerAllocationInfo>;
    SetLODBias(InLODBias: number): void;
    SetForcedLOD(InForcedLOD: number): void;
    GetMaterialInstanceDynamic(InIndex: number): UMaterialInstanceDynamic;
    EditorGetPaintLayerWeightByNameAtLocation(InLocation: FVector, InPaintLayerName: FName): number;
    EditorGetPaintLayerWeightAtLocation(InLocation: FVector, PaintLayer: ULandscapeLayerInfoObject): number;
}
declare const ULandscapeComponent: ULandscapeComponent;

declare interface ULandscapeDefaultEditLayerRenderer extends UObject {

}
declare const ULandscapeDefaultEditLayerRenderer: ULandscapeDefaultEditLayerRenderer;

declare interface ULandscapeEditLayer extends ULandscapeEditLayerPersistent {

}
declare const ULandscapeEditLayer: ULandscapeEditLayer;

declare interface ULandscapeEditLayerBase extends UObject {

}
declare const ULandscapeEditLayerBase: ULandscapeEditLayerBase;

declare interface ULandscapeEditLayerPersistent extends ULandscapeEditLayerBase {

}
declare const ULandscapeEditLayerPersistent: ULandscapeEditLayerPersistent;

declare interface ULandscapeEditLayerProcedural extends ULandscapeEditLayerBase {

}
declare const ULandscapeEditLayerProcedural: ULandscapeEditLayerProcedural;

declare interface ULandscapeEditLayerSplines extends ULandscapeEditLayerPersistent {

}
declare const ULandscapeEditLayerSplines: ULandscapeEditLayerSplines;

declare interface ULandscapeEditResourcesSubsystem extends UEngineSubsystem {
    ScratchRenderTargets: TArray<ULandscapeScratchRenderTarget>;
}
declare const ULandscapeEditResourcesSubsystem: ULandscapeEditResourcesSubsystem;

declare interface ULandscapeGizmoRenderComponent extends UPrimitiveComponent {

}
declare const ULandscapeGizmoRenderComponent: ULandscapeGizmoRenderComponent;

declare interface ULandscapeGrassType extends UObject {
    GrassVarieties: TArray<FGrassVariety>;
    bEnableDensityScaling: boolean;
    StateHash: uint32;
    GrassMesh: UStaticMesh;
    GrassDensity: number;
    PlacementJitter: number;
    StartCullDistance: number;
    EndCullDistance: number;
    RandomRotation: boolean;
    AlignToSurface: boolean;
}
declare const ULandscapeGrassType: ULandscapeGrassType;

declare interface ULandscapeHLODBuilder extends UHLODBuilder {

}
declare const ULandscapeHLODBuilder: ULandscapeHLODBuilder;

declare interface ULandscapeHeightfieldCollisionComponent extends UPrimitiveComponent {
    ComponentLayerInfos: TArray<ULandscapeLayerInfoObject>;
    SectionBaseX: number;
    SectionBaseY: number;
    CollisionSizeQuads: number;
    CollisionScale: number;
    SimpleCollisionSizeQuads: number;
    CollisionQuadFlags: TArray<uint8>;
    HeightfieldGuid: FGuid;
    CachedLocalBox: FBox;
    RenderComponentRef: ULandscapeComponent;
    CookedPhysicalMaterials: TArray<UPhysicalMaterial>;
    GetRenderComponent(): ULandscapeComponent;
}
declare const ULandscapeHeightfieldCollisionComponent: ULandscapeHeightfieldCollisionComponent;

declare interface ULandscapeHeightmapNormalsEditLayerRenderer extends UObject {

}
declare const ULandscapeHeightmapNormalsEditLayerRenderer: ULandscapeHeightmapNormalsEditLayerRenderer;

declare interface ULandscapeHeightmapTextureEdgeFixup extends UAssetUserData {

}
declare const ULandscapeHeightmapTextureEdgeFixup: ULandscapeHeightmapTextureEdgeFixup;

declare interface ULandscapeInfo extends UObject {
    LandscapeActor: TWeakObjectPtr<ALandscape>;
    LandscapeGuid: FGuid;
    ComponentSizeQuads: number;
    SubsectionSizeQuads: number;
    ComponentNumSubsections: number;
    StreamingProxies: TArray<TWeakObjectPtr<ALandscapeStreamingProxy>>;
}
declare const ULandscapeInfo: ULandscapeInfo;

declare interface ULandscapeInfoMap extends UObject {

}
declare const ULandscapeInfoMap: ULandscapeInfoMap;

declare interface ULandscapeLODStreamingProxy_DEPRECATED extends UStreamableRenderAsset {

}
declare const ULandscapeLODStreamingProxy_DEPRECATED: ULandscapeLODStreamingProxy_DEPRECATED;

declare interface ULandscapeLayerInfoObject extends UObject {
    LayerName: FName;
    PhysMaterial: UPhysicalMaterial;
    Hardness: number;
    LayerUsageDebugColor: FLinearColor;
}
declare const ULandscapeLayerInfoObject: ULandscapeLayerInfoObject;

declare interface ULandscapeMaterialInstanceConstant extends UMaterialInstanceConstant {
    TextureStreamingInfo: TArray<FLandscapeMaterialTextureStreamingInfo>;
    bIsLayerThumbnail: boolean;
    bDisableTessellation: boolean;
    bMobile: boolean;
    bEditorToolUsage: boolean;
}
declare const ULandscapeMaterialInstanceConstant: ULandscapeMaterialInstanceConstant;

declare interface ULandscapeMeshCollisionComponent extends ULandscapeHeightfieldCollisionComponent {
    MeshGuid: FGuid;
}
declare const ULandscapeMeshCollisionComponent: ULandscapeMeshCollisionComponent;

declare interface ULandscapeMeshProxyComponent extends UStaticMeshComponent {
    LandscapeGuid: FGuid;
    ProxyComponentBases: TArray<FIntPoint>;
    ProxyComponentCentersObjectSpace: TArray<FVector>;
    ComponentXVectorObjectSpace: FVector;
    ComponentYVectorObjectSpace: FVector;
    ComponentResolution: number;
    ProxyLOD: int8;
    LODGroupKey: uint32;
}
declare const ULandscapeMeshProxyComponent: ULandscapeMeshProxyComponent;

declare interface ULandscapeNaniteComponent extends UStaticMeshComponent {
    ProxyContentId: FGuid;
    bEnabled: boolean;
    SourceLandscapeComponents: TArray<ULandscapeComponent>;
}
declare const ULandscapeNaniteComponent: ULandscapeNaniteComponent;

declare interface ULandscapeScratchRenderTarget extends UObject {
    RenderTarget: UTextureRenderTarget;
}
declare const ULandscapeScratchRenderTarget: ULandscapeScratchRenderTarget;

declare interface ULandscapeSettings extends UDeveloperSettings {
    MaxNumberOfLayers: number;
    bShowDialogForAutomaticLayerCreation: boolean;
    MaxComponents: number;
    MaxImageImportCacheSizeMegaBytes: uint32;
    PaintStrengthGamma: number;
    bDisablePaintingStartupSlowdown: boolean;
    LandscapeDirtyingMode: ELandscapeDirtyingMode;
    SideResolutionLimit: number;
    DefaultLandscapeMaterial: TSoftObjectPtr<UMaterialInterface>;
    DefaultLayerInfoObject: TSoftObjectPtr<ULandscapeLayerInfoObject>;
    BrushSizeUIMax: number;
    BrushSizeClampMax: number;
    HLODMaxTextureSize: number;
    bShouldUpdateEditLayersDuringInteractiveChanges: boolean;
    bRestrictiveMode: boolean;
    SplineIconWorldZOffset: number;
    SplineIconScale: number;
    bDisplayTargetLayerThumbnails: boolean;
    bDisableTemporalAntiAliasingInLandscapeMode: boolean;
}
declare const ULandscapeSettings: ULandscapeSettings;

declare interface ULandscapeSplineControlPoint extends UObject {
    Location: FVector;
    Rotation: FRotator;
    Width: number;
    LayerWidthRatio: number;
    SideFalloff: number;
    LeftSideFalloffFactor: number;
    RightSideFalloffFactor: number;
    LeftSideLayerFalloffFactor: number;
    RightSideLayerFalloffFactor: number;
    EndFalloff: number;
    ConnectedSegments: TArray<FLandscapeSplineConnection>;
    Points: TArray<FLandscapeSplineInterpPoint>;
    Bounds: FBox;
    LocalMeshComponent: UControlPointMeshComponent;
}
declare const ULandscapeSplineControlPoint: ULandscapeSplineControlPoint;

declare interface ULandscapeSplineSegment extends UObject {
    Connections: FLandscapeSplineSegmentConnection;
    SplineInfo: FInterpCurveVector;
    Points: TArray<FLandscapeSplineInterpPoint>;
    Bounds: FBox;
    LocalMeshComponents: TArray<USplineMeshComponent>;
}
declare const ULandscapeSplineSegment: ULandscapeSplineSegment;

declare interface ULandscapeSplinesComponent extends UPrimitiveComponent {
    ControlPoints: TArray<ULandscapeSplineControlPoint>;
    Segments: TArray<ULandscapeSplineSegment>;
    CookedForeignMeshComponents: TArray<UMeshComponent>;
    GetSplineMeshComponents(): TArray<USplineMeshComponent>;
}
declare const ULandscapeSplinesComponent: ULandscapeSplinesComponent;

declare interface ULandscapeSubsystem extends UTickableWorldSubsystem {
    StreamingProxiesNeedingReregister: TSet<ALandscapeStreamingProxy>;
    LandscapeActors: TArray<ALandscape>;
    Proxies: TArray<ALandscapeProxy>;
}
declare const ULandscapeSubsystem: ULandscapeSubsystem;

declare interface ULandscapeTextureHash extends UAssetUserData {
    TextureHashGUID: FGuid;
    LastSourceID: FGuid;
    TextureType: ELandscapeTextureType;
    TextureUsage: ELandscapeTextureUsage;
}
declare const ULandscapeTextureHash: ULandscapeTextureHash;

declare interface ULandscapeTextureMipEdgeOverrideFactory extends UTextureMipDataProviderFactory {

}
declare const ULandscapeTextureMipEdgeOverrideFactory: ULandscapeTextureMipEdgeOverrideFactory;

declare interface ULandscapeTextureStorageProviderFactory extends UTextureAllMipDataProviderFactory {

}
declare const ULandscapeTextureStorageProviderFactory: ULandscapeTextureStorageProviderFactory;

declare interface ULandscapeWeightmapUsage extends UObject {
    ChannelUsage: ULandscapeComponent;
    LayerGuid: FGuid;
}
declare const ULandscapeWeightmapUsage: ULandscapeWeightmapUsage;

declare interface ULandscapeWeightmapWeightBlendedLayersRenderer extends UObject {

}
declare const ULandscapeWeightmapWeightBlendedLayersRenderer: ULandscapeWeightmapWeightBlendedLayersRenderer;

declare interface UMaterialExpressionLandscapeGrassOutput extends UMaterialExpressionCustomOutput {
    GrassTypes: TArray<FGrassInput>;
}
declare const UMaterialExpressionLandscapeGrassOutput: UMaterialExpressionLandscapeGrassOutput;

declare interface UMaterialExpressionLandscapeLayerBlend extends UMaterialExpression {
    Layers: TArray<FLayerBlendInput>;
}
declare const UMaterialExpressionLandscapeLayerBlend: UMaterialExpressionLandscapeLayerBlend;

declare interface UMaterialExpressionLandscapeLayerCoords extends UMaterialExpression {
    MappingType: ETerrainCoordMappingType;
    CustomUVType: ELandscapeCustomizedCoordType;
    MappingScale: number;
    MappingRotation: number;
    MappingPanU: number;
    MappingPanV: number;
}
declare const UMaterialExpressionLandscapeLayerCoords: UMaterialExpressionLandscapeLayerCoords;

declare interface UMaterialExpressionLandscapeLayerSample extends UMaterialExpression {
    ParameterName: FName;
    PreviewWeight: number;
}
declare const UMaterialExpressionLandscapeLayerSample: UMaterialExpressionLandscapeLayerSample;

declare interface UMaterialExpressionLandscapeLayerSwitch extends UMaterialExpression {
    LayerUsed: FExpressionInput;
    LayerNotUsed: FExpressionInput;
    ParameterName: FName;
    PreviewUsed: boolean;
}
declare const UMaterialExpressionLandscapeLayerSwitch: UMaterialExpressionLandscapeLayerSwitch;

declare interface UMaterialExpressionLandscapeLayerWeight extends UMaterialExpression {
    base: FExpressionInput;
    Layer: FExpressionInput;
    ParameterName: FName;
    PreviewWeight: number;
    ConstBase: FVector;
}
declare const UMaterialExpressionLandscapeLayerWeight: UMaterialExpressionLandscapeLayerWeight;

declare interface UMaterialExpressionLandscapePhysicalMaterialOutput extends UMaterialExpressionCustomOutput {
    Inputs: TArray<FPhysicalMaterialInput>;
}
declare const UMaterialExpressionLandscapePhysicalMaterialOutput: UMaterialExpressionLandscapePhysicalMaterialOutput;

declare interface UMaterialExpressionLandscapeVisibilityMask extends UMaterialExpression {

}
declare const UMaterialExpressionLandscapeVisibilityMask: UMaterialExpressionLandscapeVisibilityMask;

