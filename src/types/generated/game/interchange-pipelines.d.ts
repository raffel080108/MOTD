declare interface FInterchangeLodSceneNodeContainer {
    SceneNodes: UInterchangeSceneNode[];
}

declare interface FInterchangeMeshGeometry {
    MeshUid: string;
    MeshNode: UInterchangeMeshNode;
    ReferencingMeshInstanceUids: string[];
    AttachedSocketUids: string[];
}

declare interface FInterchangeMeshInstance {
    MeshInstanceUid: string;
    LodGroupNode: UInterchangeSceneNode;
    bReferenceSkinnedMesh: boolean;
    bReferenceMorphTarget: boolean;
    bHasMorphTargets: boolean;
    bIsAnimated: boolean;
    SceneNodePerLodIndex: TMap<number, FInterchangeLodSceneNodeContainer>;
    ReferencingMeshGeometryUids: string[];
}

declare interface FInterchangePipelineMeshesUtilitiesContext {
    bConvertStaticMeshToSkeletalMesh: boolean;
    bConvertSkeletalMeshToStaticMesh: boolean;
    bConvertStaticsWithMorphTargetsToSkeletals: boolean;
    bImportMeshesInBoneHierarchy: boolean;
    bQueryGeometryOnlyIfNoInstance: boolean;
    bIgnoreStaticMeshes: boolean;
    bIgnoreGeometryCaches: boolean;
}

declare interface UGLTFPipelineSettings extends UDeveloperSettings {
    readonly __properties_UGLTFPipelineSettings: {
        MaterialParents: TMap<string, FSoftObjectPath>;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UGLTFPipelineSettings['__properties_UGLTFPipelineSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UInterchangeGLTFPipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGLTFPipeline: {
        PipelineDisplayName: string;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGLTFPipeline['__properties_UInterchangeGLTFPipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericAnimationPipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericAnimationPipeline: {
        CommonSkeletalMeshesAndAnimationsProperties: TWeakObjectPtr<UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties>;
        CommonMeshesProperties: TWeakObjectPtr<UInterchangeGenericCommonMeshesProperties>;
        bImportAnimations: boolean;
        bImportBoneTracks: boolean;
        AnimationRange: EInterchangeAnimationRange;
        FrameImportRange: FInt32Interval;
        bUse30HzToBakeBoneAnimation: boolean;
        CustomBoneAnimationSampleRate: number;
        bSnapToClosestFrameBoundary: boolean;
        bImportCustomAttribute: boolean;
        bAddCurveMetadataToSkeleton: boolean;
        bSetMaterialDriveParameterOnCustomAttribute: boolean;
        MaterialCurveSuffixes: string[];
        bRemoveCurveRedundantKeys: boolean;
        bDoNotImportCurveWithZero: boolean;
        bDeleteExistingNonCurveCustomAttributes: boolean;
        bDeleteExistingCustomAttributeCurves: boolean;
        bDeleteExistingMorphTargetCurves: boolean;
        SourceAnimationName: string;
        bSceneImport: boolean;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericAnimationPipeline['__properties_UInterchangeGenericAnimationPipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericAssetsPipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericAssetsPipeline: {
        PipelineDisplayName: string;
        ReimportStrategy: EReimportStrategyFlags;
        bUseSourceNameForAsset: boolean;
        bSceneNameSubFolder: boolean;
        bAssetTypeSubFolders: boolean;
        AssetName: string;
        ImportOffsetTranslation: FVector;
        ImportOffsetRotation: FRotator;
        ImportOffsetUniformScale: number;
        CommonMeshesProperties: UInterchangeGenericCommonMeshesProperties;
        CommonSkeletalMeshesAndAnimationsProperties: UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties;
        MeshPipeline: UInterchangeGenericMeshPipeline;
        AnimationPipeline: UInterchangeGenericAnimationPipeline;
        MaterialPipeline: UInterchangeGenericMaterialPipeline;
        ContentPathExistingSkeleton: FSoftObjectPath;
        bImportOnlyAnimationAdjusted: boolean;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericAssetsPipeline['__properties_UInterchangeGenericAssetsPipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericCommonMeshesProperties extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericCommonMeshesProperties: {
        ForceAllMeshAsType: EInterchangeForceMeshType;
        bAutoDetectMeshType: boolean;
        bImportLods: boolean;
        bBakeMeshes: boolean;
        bBakePivotMeshes: boolean;
        bKeepSectionsSeparate: boolean;
        VertexColorImportOption: EInterchangeVertexColorImportOption;
        VertexOverrideColor: FColor;
        bImportSockets: boolean;
        bRecomputeNormals: boolean;
        bRecomputeTangents: boolean;
        bUseMikkTSpace: boolean;
        bComputeWeightedNormals: boolean;
        bUseHighPrecisionTangentBasis: boolean;
        bUseFullPrecisionUVs: boolean;
        bUseBackwardsCompatibleF16TruncUVs: boolean;
        bRemoveDegenerates: boolean;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericCommonMeshesProperties['__properties_UInterchangeGenericCommonMeshesProperties'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties: {
        bImportOnlyAnimations: boolean;
        Skeleton: TWeakObjectPtr<USkeleton>;
        bImportMeshesInBoneHierarchy: boolean;
        bUseT0AsRefPose: boolean;
        bAddCurveMetadataToSkeleton: boolean;
        bConvertStaticsWithMorphTargetsToSkeletals: boolean;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties['__properties_UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericLevelPipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericLevelPipeline: {
        PipelineDisplayName: string;
        ReimportPropertyStrategy: EReimportStrategyFlags;
        SceneHierarchyType: EInterchangeSceneHierarchyType;
        bDeleteMissingActors: boolean;
        bForceReimportDeletedActors: boolean;
        bForceReimportDeletedAssets: boolean;
        bDeleteMissingAssets: boolean;
        bUsePhysicalInsteadOfStandardPerspectiveCamera: boolean;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericLevelPipeline['__properties_UInterchangeGenericLevelPipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericMaterialPipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericMaterialPipeline: {
        PipelineDisplayName: string;
        bImportMaterials: boolean;
        SearchLocation: EInterchangeMaterialSearchLocation;
        AssetName: string;
        MaterialImport: EInterchangeMaterialImportOption;
        bIdentifyDuplicateMaterials: boolean;
        bCreateMaterialInstanceForParent: boolean;
        ParentMaterial: FSoftObjectPath;
        TexturePipeline: UInterchangeGenericTexturePipeline;
        SparseVolumeTexturePipeline: UInterchangeSparseVolumeTexturePipeline;
        bOverrideDisplacement: boolean;
        OverrideDisplacementCenter: number;
        BaseNodeContainer: UInterchangeBaseNodeContainer;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericMaterialPipeline['__properties_UInterchangeGenericMaterialPipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericMeshPipeline extends UInterchangePipelineBase {
    readonly __static_UInterchangeGenericMeshPipeline: {
        SetCombineSkeletalMeshes(InbCombineSkeletalMeshes: boolean): void;
        GetCombineSkeletalMeshes(): boolean;
    };
    readonly __properties_UInterchangeGenericMeshPipeline: {
        CommonMeshesProperties: TWeakObjectPtr<UInterchangeGenericCommonMeshesProperties>;
        CommonSkeletalMeshesAndAnimationsProperties: TWeakObjectPtr<UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties>;
        bImportStaticMeshes: boolean;
        bCombineStaticMeshes: boolean;
        LODGroup: string;
        bAutoComputeLODScreenSizes: boolean;
        LODScreenSizes: number[];
        bImportCollision: boolean;
        bCollision: boolean;
        bImportCollisionAccordingToMeshName: boolean;
        bOneConvexHullPerUCX: boolean;
        Collision: EInterchangeMeshCollision;
        bForceCollisionPrimitiveGeneration: boolean;
        bBuildNanite: boolean;
        bBuildReversedIndexBuffer: boolean;
        bGenerateLightmapUVs: boolean;
        bGenerateDistanceFieldAsIfTwoSided: boolean;
        bSupportFaceRemap: boolean;
        MinLightmapResolution: number;
        SrcLightmapIndex: number;
        DstLightmapIndex: number;
        BuildScale3D: FVector;
        DistanceFieldResolutionScale: number;
        DistanceFieldReplacementMesh: TWeakObjectPtr<UStaticMesh>;
        MaxLumenMeshCards: number;
        bImportSkeletalMeshes: boolean;
        SkeletalMeshImportContentType: EInterchangeSkeletalMeshContentType;
        LastSkeletalMeshImportContentType: EInterchangeSkeletalMeshContentType;
        bCombineSkeletalMeshes: boolean;
        bImportMorphTargets: boolean;
        bMergeMorphTargetsWithSameName: boolean;
        bImportVertexAttributes: boolean;
        bUpdateSkeletonReferencePose: boolean;
        bCreatePhysicsAsset: boolean;
        PhysicsAsset: TWeakObjectPtr<UPhysicsAsset>;
        bUseHighPrecisionSkinWeights: boolean;
        ThresholdPosition: number;
        ThresholdTangentNormal: number;
        ThresholdUV: number;
        MorphThresholdPosition: number;
        BoneInfluenceLimit: number;
        bImportGeometryCaches: boolean;
        bFlattenTracks: boolean;
        CompressedPositionPrecision: number;
        CompressedTextureCoordinatesNumberOfBits: number;
        bOverrideTimeRange: boolean;
        FrameStart: number;
        FrameEnd: number;
        MotionVectors: EInterchangeMotionVectorsHandling;
        bApplyConstantTopologyOptimizations: boolean;
        bStoreImportedVertexNumbers: boolean;
        bOptimizeIndexBuffers: boolean;
    };
    readonly __staticRegistry: 
        UInterchangeGenericMeshPipeline['__static_UInterchangeGenericMeshPipeline'] &
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericMeshPipeline['__properties_UInterchangeGenericMeshPipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeGenericTexturePipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeGenericTexturePipeline: {
        PipelineDisplayName: string;
        bImportTextures: boolean;
        AssetName: string;
        bAllowNonPowerOfTwo: boolean;
        BaseNodeContainer: UInterchangeBaseNodeContainer;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeGenericTexturePipeline['__properties_UInterchangeGenericTexturePipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangeMaterialXPipeline extends UInterchangePipelineBase {
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UInterchangePipelineMeshesUtilities extends UObject {
    readonly __static_UInterchangePipelineMeshesUtilities: {
        SetContext(Context: FInterchangePipelineMeshesUtilitiesContext): void;
        IsValidMeshInstanceUid(MeshInstanceUid: string): boolean;
        IsValidMeshGeometryUid(MeshGeometryUid: string): boolean;
        GetMeshInstanceSkeletonRootUid(MeshInstanceUid: string): string;
        GetMeshInstanceByUid(MeshInstanceUid: string): FInterchangeMeshInstance;
        GetMeshGeometrySkeletonRootUid(MeshGeometryUid: string): string;
        GetMeshGeometryByUid(MeshGeometryUid: string): FInterchangeMeshGeometry;
        GetAllStaticMeshInstance(MeshInstanceUids: string[]): void;
        GetAllStaticMeshGeometry(MeshGeometryUids: string[]): void;
        GetAllSkinnedMeshInstance(MeshInstanceUids: string[]): void;
        GetAllSkinnedMeshGeometry(MeshGeometryUids: string[]): void;
        GetAllMeshInstanceUidsUsingMeshGeometryUid(MeshGeometryUid: string, MeshInstanceUids: string[]): void;
        GetAllMeshInstanceUids(MeshInstanceUids: string[]): void;
        GetAllMeshGeometryNotInstanced(MeshGeometryUids: string[]): void;
        GetAllMeshGeometry(MeshGeometryUids: string[]): void;
        GetAllGeometryCacheInstance(MeshInstanceUids: string[]): void;
        GetAllGeometryCacheGeometry(MeshGeometryUids: string[]): void;
        CreateInterchangePipelineMeshesUtilities(BaseNodeContainer: UInterchangeBaseNodeContainer): UInterchangePipelineMeshesUtilities;
    };
    readonly __staticRegistry: 
        UInterchangePipelineMeshesUtilities['__static_UInterchangePipelineMeshesUtilities'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeSparseVolumeTexturePipeline extends UInterchangePipelineBase {
    readonly __properties_UInterchangeSparseVolumeTexturePipeline: {
        PipelineDisplayName: string;
        bImportSparseVolumeTextures: boolean;
        bImportAnimatedSparseVolumeTextures: boolean;
        AssetName: string;
        BaseNodeContainer: UInterchangeBaseNodeContainer;
    };
    readonly __staticRegistry: 
        UInterchangePipelineBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeSparseVolumeTexturePipeline['__properties_UInterchangeSparseVolumeTexturePipeline'] &
        UInterchangePipelineBase['__propertyRegistry'];
}

declare interface UMaterialXPipelineSettings extends UDeveloperSettings {
    readonly __properties_UMaterialXPipelineSettings: {
        PredefinedSurfaceShaders: TMap<EInterchangeMaterialXShaders, FSoftObjectPath>;
        PredefinedBSDF: TMap<EInterchangeMaterialXBSDF, FSoftObjectPath>;
        PredefinedEDF: TMap<EInterchangeMaterialXEDF, FSoftObjectPath>;
        PredefinedVDF: TMap<EInterchangeMaterialXVDF, FSoftObjectPath>;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMaterialXPipelineSettings['__properties_UMaterialXPipelineSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

