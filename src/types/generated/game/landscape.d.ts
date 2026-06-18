declare interface AControlPointMeshActor extends AActor {
    readonly __properties_AControlPointMeshActor: {
        ControlPointMeshComponent: UControlPointMeshComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AControlPointMeshActor['__properties_AControlPointMeshActor'] &
        AActor['__propertyRegistry'];
}

declare interface ALandscape extends ALandscapeProxy {
    readonly __static_ALandscape: {
        RenderWeightmaps(InWorldTransform: FTransform, InExtents: FBox2D, InWeightmapLayerNames: string[], OutRenderTarget: UTextureRenderTarget): boolean;
        RenderWeightmap(InWorldTransform: FTransform, InExtents: FBox2D, InWeightmapLayerName: string, OutRenderTarget: UTextureRenderTarget2D): boolean;
        RenderHeightmap(InWorldTransform: FTransform, InExtents: FBox2D, OutRenderTarget: UTextureRenderTarget2D): boolean;
        GetTargetLayerNames(bInIncludeVisibilityLayer: boolean): string[];
    };
    readonly __staticRegistry: 
        ALandscape['__static_ALandscape'] &
        ALandscapeProxy['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeProxy['__propertyRegistry'];
}

declare interface ALandscapeBlueprintBrushBase extends AActor {
    readonly __static_ALandscapeBlueprintBrushBase: {
        RequestLandscapeUpdate(bInUserTriggered: boolean): void;
        RenderLayer(InParameters: FLandscapeBrushParameters): UTextureRenderTarget2D;
        Render(InIsHeightmap: boolean, InCombinedResult: UTextureRenderTarget2D, InWeightmapLayerName: string): UTextureRenderTarget2D;
        Initialize(InLandscapeTransform: FTransform, InLandscapeSize: FIntPoint, InLandscapeRenderTargetSize: FIntPoint): void;
        GetBlueprintRenderDependencies(OutStreamableAssets: UObject[]): void;
    };
    readonly __properties_ALandscapeBlueprintBrushBase: {
        UpdateOnPropertyChange: boolean;
        AffectHeightmap: boolean;
        AffectWeightmap: boolean;
        AffectVisibilityLayer: boolean;
        AffectedWeightmapLayers: string[];
        bUsePowerOfTwoRenderTarget: boolean;
    };
    readonly __staticRegistry: 
        ALandscapeBlueprintBrushBase['__static_ALandscapeBlueprintBrushBase'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeBlueprintBrushBase['__properties_ALandscapeBlueprintBrushBase'] &
        AActor['__propertyRegistry'];
}

declare interface ALandscapeGizmoActiveActor extends ALandscapeGizmoActor {
    readonly __staticRegistry: 
        ALandscapeGizmoActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeGizmoActor['__propertyRegistry'];
}

declare interface ALandscapeGizmoActor extends AActor {
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AActor['__propertyRegistry'];
}

declare interface ALandscapeMeshProxyActor extends AActor {
    readonly __properties_ALandscapeMeshProxyActor: {
        LandscapeMeshProxyComponent: ULandscapeMeshProxyComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeMeshProxyActor['__properties_ALandscapeMeshProxyActor'] &
        AActor['__propertyRegistry'];
}

declare interface ALandscapeProxy extends APartitionActor {
    readonly __static_ALandscapeProxy: {
        SetVirtualTextureRenderPassType(InType: ERuntimeVirtualTextureMainPassType): void;
        SetLandscapeMaterialVectorParameterValue(ParameterName: string, Value: FLinearColor): void;
        SetLandscapeMaterialTextureParameterValue(ParameterName: string, Value: UTexture): void;
        SetLandscapeMaterialScalarParameterValue(ParameterName: string, Value: number): void;
        LandscapeExportHeightmapToRenderTarget(InRenderTarget: UTextureRenderTarget2D, InExportHeightIntoRGChannel: boolean, InExportLandscapeProxies: boolean): boolean;
        GetLandscapeActor(): ALandscape;
        EditorSetLandscapeMaterial(NewLandscapeMaterial: UMaterialInterface): void;
        EditorApplySpline(InSplineComponent: USplineComponent, StartWidth: number, EndWidth: number, StartSideFalloff: number, EndSideFalloff: number, StartRoll: number, EndRoll: number, NumSubdivisions: number, bRaiseHeights: boolean, bLowerHeights: boolean, PaintLayer: ULandscapeLayerInfoObject, EditLayerName: string): void;
        ChangeLODDistanceFactor(InLODDistanceFactor: number): void;
        ChangeComponentScreenSizeToUseSubSections(InComponentScreenSizeToUseSubSections: number): void;
    };
    readonly __properties_ALandscapeProxy: {
        SplineComponent: ULandscapeSplinesComponent;
        LandscapeGuid: FGuid;
        OriginalLandscapeGuid: FGuid;
        bEnableNanite: boolean;
        PerLODOverrideMaterials: FLandscapePerLODMaterialOverride[];
        bDisableRuntimeGrassMapGeneration: boolean;
        LandscapeSectionOffset: FIntPoint;
        MaxLODLevel: number;
        LOD0ScreenSize: number;
        LODGroupKey: number;
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
        RuntimeVirtualTextures: URuntimeVirtualTexture[];
        bSetCreateRuntimeVirtualTextureVolumes: boolean;
        bVirtualTextureRenderWithQuad: boolean;
        bVirtualTextureRenderWithQuadHQ: boolean;
        VirtualTextureNumLods: number;
        VirtualTextureLodBias: number;
        VirtualTextureRenderPassType: ERuntimeVirtualTextureMainPassType;
        NegativeZBoundsExtension: number;
        PositiveZBoundsExtension: number;
        LandscapeComponents: ULandscapeComponent[];
        CollisionComponents: ULandscapeHeightfieldCollisionComponent[];
        FoliageComponents: UHierarchicalInstancedStaticMeshComponent[];
        NaniteComponent: ULandscapeNaniteComponent;
        NaniteComponents: ULandscapeNaniteComponent[];
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
        TargetLayers: TMap<string, FLandscapeTargetLayerSettings>;
    };
    readonly __staticRegistry: 
        ALandscapeProxy['__static_ALandscapeProxy'] &
        APartitionActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeProxy['__properties_ALandscapeProxy'] &
        APartitionActor['__propertyRegistry'];
}

declare interface ALandscapeSplineActor extends AActor {
    readonly __properties_ALandscapeSplineActor: {
        LandscapeGuid: FGuid;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeSplineActor['__properties_ALandscapeSplineActor'] &
        AActor['__propertyRegistry'];
}

declare interface ALandscapeSplineMeshesActor extends APartitionActor {
    readonly __properties_ALandscapeSplineMeshesActor: {
        StaticMeshComponents: UStaticMeshComponent[];
    };
    readonly __staticRegistry: 
        APartitionActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeSplineMeshesActor['__properties_ALandscapeSplineMeshesActor'] &
        APartitionActor['__propertyRegistry'];
}

declare interface ALandscapeStreamingProxy extends ALandscapeProxy {
    readonly __properties_ALandscapeStreamingProxy: {
        LandscapeActorRef: TSoftObjectPtr<ALandscape>;
        OverriddenSharedProperties: string[];
    };
    readonly __staticRegistry: 
        ALandscapeProxy['__staticRegistry'];
    readonly __propertyRegistry: 
        ALandscapeStreamingProxy['__properties_ALandscapeStreamingProxy'] &
        ALandscapeProxy['__propertyRegistry'];
}

declare type FForeignControlPointData = object;

declare type FForeignSplineSegmentData = object;

declare type FForeignWorldSplineData = object;

declare type FGizmoSelectData = object;

declare interface FGrassInput {
    Name: string;
    GrassType: ULandscapeGrassType;
    Input: FExpressionInput;
}

declare interface FGrassVariety {
    GrassMesh: UStaticMesh;
    OverrideMaterials: UMaterialInterface[];
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
    InstanceWorldPositionOffsetDisableDistance: number;
    ShadowCacheInvalidationBehavior: EShadowCacheInvalidationBehavior;
}

declare interface FHeightmapData {
    Texture: UTexture2D;
}

declare type FHeightmapTextureEdgeSnapshot = object;

declare interface FLandscapeBrushParameters {
    RenderAreaWorldTransform: FTransform;
    RenderAreaSize: FIntPoint;
    CombinedResult: UTextureRenderTarget2D;
    LayerType: ELandscapeToolTargetType;
    WeightmapLayerName: string;
}

declare interface FLandscapeComponentMaterialOverride {
    LODIndex: FPerPlatformInt;
    Material: UMaterialInterface;
}

declare type FLandscapeEditLayerMergeRenderBlackboardItem = object;

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

declare type FLandscapeEditorLayerSettings = object;

declare type FLandscapeImportLayerInfo = object;

declare interface FLandscapeInfoLayerSettings {
    LayerInfoObj: ULandscapeLayerInfoObject;
    LayerName: string;
}

declare interface FLandscapeLayer {
    Guid: FGuid;
    Name: string;
    bVisible: boolean;
    bLocked: boolean;
    HeightmapAlpha: number;
    WeightmapAlpha: number;
    BlendMode: ELandscapeBlendMode;
    Brushes: FLandscapeLayerBrush[];
    WeightmapLayerAllocationBlend: TMap<ULandscapeLayerInfoObject, boolean>;
    EditLayer: ULandscapeEditLayerBase;
}

declare type FLandscapeLayerBrush = object;

declare interface FLandscapeLayerComponentData {
    HeightmapData: FHeightmapData;
    WeightmapData: FWeightmapData;
}

declare interface FLandscapeMaterialTextureStreamingInfo {
    TextureName: string;
    TexelFactor: number;
}

declare interface FLandscapePerLODMaterialOverride {
    LODIndex: number;
    Material: UMaterialInterface;
}

declare interface FLandscapeProxyMaterialOverride {
    LODIndex: FPerPlatformInt;
    Material: UMaterialInterface;
}

declare interface FLandscapeSplineConnection {
    Segment: ULandscapeSplineSegment;
    End: boolean;
}

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

declare interface FLandscapeSplineMeshEntry {
    mesh: UStaticMesh;
    MaterialOverrides: UMaterialInterface[];
    bCenterH: boolean;
    CenterAdjust: FVector2D;
    bScaleToWidth: boolean;
    bNoZScaling: boolean;
    Scale: FVector;
    orientation: LandscapeSplineMeshOrientation;
    ForwardAxis: ESplineMeshAxis;
    UpAxis: ESplineMeshAxis;
}

declare interface FLandscapeSplineSegmentConnection {
    ControlPoint: ULandscapeSplineControlPoint;
    TangentLen: number;
    SocketName: string;
}

declare interface FLandscapeTargetLayerSettings {
    LayerInfoObj: ULandscapeLayerInfoObject;
}

declare interface FLandscapeTexture2DMipMap {
    SizeX: number;
    SizeY: number;
    bCompressed: boolean;
}

declare interface FLayerBlendInput {
    LayerName: string;
    BlendType: ELandscapeLayerBlendType;
    LayerInput: FExpressionInput;
    HeightInput: FExpressionInput;
    PreviewWeight: number;
    ConstLayerInput: FVector;
    ConstHeightInput: number;
}

declare interface FPhysicalMaterialInput {
    PhysicalMaterial: UPhysicalMaterial;
    Input: FExpressionInput;
}

declare interface FWeightmapData {
    Textures: UTexture2D[];
    LayerAllocations: FWeightmapLayerAllocationInfo[];
    TextureUsages: ULandscapeWeightmapUsage[];
}

declare interface FWeightmapLayerAllocationInfo {
    LayerInfo: ULandscapeLayerInfoObject;
    WeightmapTextureIndex: number;
    WeightmapTextureChannel: number;
}

declare interface ILandscapeBrushRenderCallAdapter_GlobalMergeLegacySupport extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ILandscapeEditLayerRenderer extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ILandscapeSplineInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UControlPointMeshComponent extends UStaticMeshComponent {
    readonly __properties_UControlPointMeshComponent: {
        VirtualTextureMainPassMaxDrawDistance: number;
    };
    readonly __staticRegistry: 
        UStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UControlPointMeshComponent['__properties_UControlPointMeshComponent'] &
        UStaticMeshComponent['__propertyRegistry'];
}

declare interface ULandscapeComponent extends UPrimitiveComponent {
    readonly __static_ULandscapeComponent: {
        SetLODBias(InLODBias: number): void;
        SetForcedLOD(InForcedLOD: number): void;
        GetMaterialInstanceDynamic(InIndex: number): UMaterialInstanceDynamic;
        EditorGetPaintLayerWeightByNameAtLocation(InLocation: FVector, InPaintLayerName: string): number;
        EditorGetPaintLayerWeightAtLocation(InLocation: FVector, PaintLayer: ULandscapeLayerInfoObject): number;
    };
    readonly __properties_ULandscapeComponent: {
        SectionBaseX: number;
        SectionBaseY: number;
        ComponentSizeQuads: number;
        SubsectionSizeQuads: number;
        NumSubsections: number;
        OverrideMaterial: UMaterialInterface;
        OverrideHoleMaterial: UMaterialInterface;
        MaterialInstances: UMaterialInstanceConstant[];
        MaterialInstancesDynamic: UMaterialInstanceDynamic[];
        LODIndexToMaterialIndex: number[];
        XYOffsetmapTexture: UTexture2D;
        WeightmapScaleBias: FVector4;
        WeightmapSubsectionOffset: number;
        HeightmapScaleBias: FVector4;
        CachedLocalBox: FBox;
        MipToMipMaxDeltas: number[];
        CollisionComponentRef: ULandscapeHeightfieldCollisionComponent;
        bUserTriggeredChangeRequested: boolean;
        bNaniteActive: boolean;
        HeightmapTexture: UTexture2D;
        WeightmapLayerAllocations: FWeightmapLayerAllocationInfo[];
        WeightmapTextures: UTexture2D[];
        PerLODOverrideMaterials: FLandscapePerLODMaterialOverride[];
        GrassTypes: ULandscapeGrassType[];
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
        MobileMaterialInterfaces: UMaterialInterface[];
        MobileWeightmapTextures: UTexture2D[];
        MobileWeightmapTextureArray: UTexture2DArray;
        MobileWeightmapLayerAllocations: FWeightmapLayerAllocationInfo[];
    };
    readonly __staticRegistry: 
        ULandscapeComponent['__static_ULandscapeComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeComponent['__properties_ULandscapeComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface ULandscapeDefaultEditLayerRenderer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULandscapeEditLayer extends ULandscapeEditLayerPersistent {
    readonly __staticRegistry: 
        ULandscapeEditLayerPersistent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeEditLayerPersistent['__propertyRegistry'];
}

declare interface ULandscapeEditLayerBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULandscapeEditLayerPersistent extends ULandscapeEditLayerBase {
    readonly __staticRegistry: 
        ULandscapeEditLayerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeEditLayerBase['__propertyRegistry'];
}

declare interface ULandscapeEditLayerProcedural extends ULandscapeEditLayerBase {
    readonly __staticRegistry: 
        ULandscapeEditLayerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeEditLayerBase['__propertyRegistry'];
}

declare interface ULandscapeEditLayerSplines extends ULandscapeEditLayerPersistent {
    readonly __staticRegistry: 
        ULandscapeEditLayerPersistent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeEditLayerPersistent['__propertyRegistry'];
}

declare interface ULandscapeEditResourcesSubsystem extends UEngineSubsystem {
    readonly __properties_ULandscapeEditResourcesSubsystem: {
        ScratchRenderTargets: ULandscapeScratchRenderTarget[];
    };
    readonly __staticRegistry: 
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeEditResourcesSubsystem['__properties_ULandscapeEditResourcesSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface ULandscapeGizmoRenderComponent extends UPrimitiveComponent {
    readonly __staticRegistry: 
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface ULandscapeGrassType extends UObject {
    readonly __properties_ULandscapeGrassType: {
        GrassVarieties: FGrassVariety[];
        bEnableDensityScaling: boolean;
        StateHash: number;
        GrassMesh: UStaticMesh;
        GrassDensity: number;
        PlacementJitter: number;
        StartCullDistance: number;
        EndCullDistance: number;
        RandomRotation: boolean;
        AlignToSurface: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeGrassType['__properties_ULandscapeGrassType'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeHLODBuilder extends UHLODBuilder {
    readonly __staticRegistry: 
        UHLODBuilder['__staticRegistry'];
    readonly __propertyRegistry: 
        UHLODBuilder['__propertyRegistry'];
}

declare interface ULandscapeHeightfieldCollisionComponent extends UPrimitiveComponent {
    readonly __static_ULandscapeHeightfieldCollisionComponent: {
        GetRenderComponent(): ULandscapeComponent;
    };
    readonly __properties_ULandscapeHeightfieldCollisionComponent: {
        ComponentLayerInfos: ULandscapeLayerInfoObject[];
        SectionBaseX: number;
        SectionBaseY: number;
        CollisionSizeQuads: number;
        CollisionScale: number;
        SimpleCollisionSizeQuads: number;
        CollisionQuadFlags: number[];
        HeightfieldGuid: FGuid;
        CachedLocalBox: FBox;
        RenderComponentRef: ULandscapeComponent;
        CookedPhysicalMaterials: UPhysicalMaterial[];
    };
    readonly __staticRegistry: 
        ULandscapeHeightfieldCollisionComponent['__static_ULandscapeHeightfieldCollisionComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeHeightfieldCollisionComponent['__properties_ULandscapeHeightfieldCollisionComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface ULandscapeHeightmapNormalsEditLayerRenderer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULandscapeHeightmapTextureEdgeFixup extends UAssetUserData {
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UAssetUserData['__propertyRegistry'];
}

declare interface ULandscapeInfo extends UObject {
    readonly __properties_ULandscapeInfo: {
        LandscapeActor: TWeakObjectPtr<ALandscape>;
        LandscapeGuid: FGuid;
        ComponentSizeQuads: number;
        SubsectionSizeQuads: number;
        ComponentNumSubsections: number;
        StreamingProxies: TWeakObjectPtr<ALandscapeStreamingProxy>[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeInfo['__properties_ULandscapeInfo'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeInfoMap extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULandscapeLODStreamingProxy_DEPRECATED extends UStreamableRenderAsset {
    readonly __staticRegistry: 
        UStreamableRenderAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UStreamableRenderAsset['__propertyRegistry'];
}

declare interface ULandscapeLayerInfoObject extends UObject {
    readonly __properties_ULandscapeLayerInfoObject: {
        LayerName: string;
        PhysMaterial: UPhysicalMaterial;
        Hardness: number;
        LayerUsageDebugColor: FLinearColor;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeLayerInfoObject['__properties_ULandscapeLayerInfoObject'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeMaterialInstanceConstant extends UMaterialInstanceConstant {
    readonly __properties_ULandscapeMaterialInstanceConstant: {
        TextureStreamingInfo: FLandscapeMaterialTextureStreamingInfo[];
        bIsLayerThumbnail: boolean;
        bDisableTessellation: boolean;
        bMobile: boolean;
        bEditorToolUsage: boolean;
    };
    readonly __staticRegistry: 
        UMaterialInstanceConstant['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeMaterialInstanceConstant['__properties_ULandscapeMaterialInstanceConstant'] &
        UMaterialInstanceConstant['__propertyRegistry'];
}

declare interface ULandscapeMeshCollisionComponent extends ULandscapeHeightfieldCollisionComponent {
    readonly __properties_ULandscapeMeshCollisionComponent: {
        MeshGuid: FGuid;
    };
    readonly __staticRegistry: 
        ULandscapeHeightfieldCollisionComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeMeshCollisionComponent['__properties_ULandscapeMeshCollisionComponent'] &
        ULandscapeHeightfieldCollisionComponent['__propertyRegistry'];
}

declare interface ULandscapeMeshProxyComponent extends UStaticMeshComponent {
    readonly __properties_ULandscapeMeshProxyComponent: {
        LandscapeGuid: FGuid;
        ProxyComponentBases: FIntPoint[];
        ProxyComponentCentersObjectSpace: FVector[];
        ComponentXVectorObjectSpace: FVector;
        ComponentYVectorObjectSpace: FVector;
        ComponentResolution: number;
        ProxyLOD: number;
        LODGroupKey: number;
    };
    readonly __staticRegistry: 
        UStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeMeshProxyComponent['__properties_ULandscapeMeshProxyComponent'] &
        UStaticMeshComponent['__propertyRegistry'];
}

declare interface ULandscapeNaniteComponent extends UStaticMeshComponent {
    readonly __properties_ULandscapeNaniteComponent: {
        ProxyContentId: FGuid;
        bEnabled: boolean;
        SourceLandscapeComponents: ULandscapeComponent[];
    };
    readonly __staticRegistry: 
        UStaticMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeNaniteComponent['__properties_ULandscapeNaniteComponent'] &
        UStaticMeshComponent['__propertyRegistry'];
}

declare interface ULandscapeScratchRenderTarget extends UObject {
    readonly __properties_ULandscapeScratchRenderTarget: {
        RenderTarget: UTextureRenderTarget;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeScratchRenderTarget['__properties_ULandscapeScratchRenderTarget'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeSettings extends UDeveloperSettings {
    readonly __properties_ULandscapeSettings: {
        MaxNumberOfLayers: number;
        bShowDialogForAutomaticLayerCreation: boolean;
        MaxComponents: number;
        MaxImageImportCacheSizeMegaBytes: number;
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
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeSettings['__properties_ULandscapeSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface ULandscapeSplineControlPoint extends UObject {
    readonly __properties_ULandscapeSplineControlPoint: {
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
        ConnectedSegments: FLandscapeSplineConnection[];
        Points: FLandscapeSplineInterpPoint[];
        Bounds: FBox;
        LocalMeshComponent: UControlPointMeshComponent;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeSplineControlPoint['__properties_ULandscapeSplineControlPoint'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeSplineSegment extends UObject {
    readonly __properties_ULandscapeSplineSegment: {
        Connections: FLandscapeSplineSegmentConnection;
        SplineInfo: FInterpCurveVector;
        Points: FLandscapeSplineInterpPoint[];
        Bounds: FBox;
        LocalMeshComponents: USplineMeshComponent[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeSplineSegment['__properties_ULandscapeSplineSegment'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeSplinesComponent extends UPrimitiveComponent {
    readonly __static_ULandscapeSplinesComponent: {
        GetSplineMeshComponents(): USplineMeshComponent[];
    };
    readonly __properties_ULandscapeSplinesComponent: {
        ControlPoints: ULandscapeSplineControlPoint[];
        Segments: ULandscapeSplineSegment[];
        CookedForeignMeshComponents: UMeshComponent[];
    };
    readonly __staticRegistry: 
        ULandscapeSplinesComponent['__static_ULandscapeSplinesComponent'] &
        UPrimitiveComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeSplinesComponent['__properties_ULandscapeSplinesComponent'] &
        UPrimitiveComponent['__propertyRegistry'];
}

declare interface ULandscapeSubsystem extends UTickableWorldSubsystem {
    readonly __properties_ULandscapeSubsystem: {
        StreamingProxiesNeedingReregister: ALandscapeStreamingProxy[];
        LandscapeActors: ALandscape[];
        Proxies: ALandscapeProxy[];
    };
    readonly __staticRegistry: 
        UTickableWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeSubsystem['__properties_ULandscapeSubsystem'] &
        UTickableWorldSubsystem['__propertyRegistry'];
}

declare interface ULandscapeTextureHash extends UAssetUserData {
    readonly __properties_ULandscapeTextureHash: {
        TextureHashGUID: FGuid;
        LastSourceID: FGuid;
        TextureType: ELandscapeTextureType;
        TextureUsage: ELandscapeTextureUsage;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeTextureHash['__properties_ULandscapeTextureHash'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface ULandscapeTextureMipEdgeOverrideFactory extends UTextureMipDataProviderFactory {
    readonly __staticRegistry: 
        UTextureMipDataProviderFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextureMipDataProviderFactory['__propertyRegistry'];
}

declare interface ULandscapeTextureStorageProviderFactory extends UTextureAllMipDataProviderFactory {
    readonly __staticRegistry: 
        UTextureAllMipDataProviderFactory['__staticRegistry'];
    readonly __propertyRegistry: 
        UTextureAllMipDataProviderFactory['__propertyRegistry'];
}

declare interface ULandscapeWeightmapUsage extends UObject {
    readonly __properties_ULandscapeWeightmapUsage: {
        ChannelUsage: ULandscapeComponent;
        LayerGuid: FGuid;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULandscapeWeightmapUsage['__properties_ULandscapeWeightmapUsage'] &
        UObject['__propertyRegistry'];
}

declare interface ULandscapeWeightmapWeightBlendedLayersRenderer extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeGrassOutput extends UMaterialExpressionCustomOutput {
    readonly __properties_UMaterialExpressionLandscapeGrassOutput: {
        GrassTypes: FGrassInput[];
    };
    readonly __staticRegistry: 
        UMaterialExpressionCustomOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapeGrassOutput['__properties_UMaterialExpressionLandscapeGrassOutput'] &
        UMaterialExpressionCustomOutput['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeLayerBlend extends UMaterialExpression {
    readonly __properties_UMaterialExpressionLandscapeLayerBlend: {
        Layers: FLayerBlendInput[];
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapeLayerBlend['__properties_UMaterialExpressionLandscapeLayerBlend'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeLayerCoords extends UMaterialExpression {
    readonly __properties_UMaterialExpressionLandscapeLayerCoords: {
        MappingType: ETerrainCoordMappingType;
        CustomUVType: ELandscapeCustomizedCoordType;
        MappingScale: number;
        MappingRotation: number;
        MappingPanU: number;
        MappingPanV: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapeLayerCoords['__properties_UMaterialExpressionLandscapeLayerCoords'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeLayerSample extends UMaterialExpression {
    readonly __properties_UMaterialExpressionLandscapeLayerSample: {
        ParameterName: string;
        PreviewWeight: number;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapeLayerSample['__properties_UMaterialExpressionLandscapeLayerSample'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeLayerSwitch extends UMaterialExpression {
    readonly __properties_UMaterialExpressionLandscapeLayerSwitch: {
        LayerUsed: FExpressionInput;
        LayerNotUsed: FExpressionInput;
        ParameterName: string;
        PreviewUsed: boolean;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapeLayerSwitch['__properties_UMaterialExpressionLandscapeLayerSwitch'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeLayerWeight extends UMaterialExpression {
    readonly __properties_UMaterialExpressionLandscapeLayerWeight: {
        base: FExpressionInput;
        Layer: FExpressionInput;
        ParameterName: string;
        PreviewWeight: number;
        ConstBase: FVector;
    };
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapeLayerWeight['__properties_UMaterialExpressionLandscapeLayerWeight'] &
        UMaterialExpression['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapePhysicalMaterialOutput extends UMaterialExpressionCustomOutput {
    readonly __properties_UMaterialExpressionLandscapePhysicalMaterialOutput: {
        Inputs: FPhysicalMaterialInput[];
    };
    readonly __staticRegistry: 
        UMaterialExpressionCustomOutput['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpressionLandscapePhysicalMaterialOutput['__properties_UMaterialExpressionLandscapePhysicalMaterialOutput'] &
        UMaterialExpressionCustomOutput['__propertyRegistry'];
}

declare interface UMaterialExpressionLandscapeVisibilityMask extends UMaterialExpression {
    readonly __staticRegistry: 
        UMaterialExpression['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialExpression['__propertyRegistry'];
}

