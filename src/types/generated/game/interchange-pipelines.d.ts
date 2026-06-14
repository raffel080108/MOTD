declare interface FInterchangeLodSceneNodeContainer {
    SceneNodes: TArray<UInterchangeSceneNode>;
}
declare const FInterchangeLodSceneNodeContainer: FInterchangeLodSceneNodeContainer;

declare interface FInterchangeMeshGeometry {
    MeshUid: FString;
    MeshNode: UInterchangeMeshNode;
    ReferencingMeshInstanceUids: TArray<FString>;
    AttachedSocketUids: TArray<FString>;
}
declare const FInterchangeMeshGeometry: FInterchangeMeshGeometry;

declare interface FInterchangeMeshInstance {
    MeshInstanceUid: FString;
    LodGroupNode: UInterchangeSceneNode;
    bReferenceSkinnedMesh: boolean;
    bReferenceMorphTarget: boolean;
    bHasMorphTargets: boolean;
    bIsAnimated: boolean;
    SceneNodePerLodIndex: Record<number, FInterchangeLodSceneNodeContainer>;
    ReferencingMeshGeometryUids: TArray<FString>;
}
declare const FInterchangeMeshInstance: FInterchangeMeshInstance;

declare interface FInterchangePipelineMeshesUtilitiesContext {
    bConvertStaticMeshToSkeletalMesh: boolean;
    bConvertSkeletalMeshToStaticMesh: boolean;
    bConvertStaticsWithMorphTargetsToSkeletals: boolean;
    bImportMeshesInBoneHierarchy: boolean;
    bQueryGeometryOnlyIfNoInstance: boolean;
    bIgnoreStaticMeshes: boolean;
    bIgnoreGeometryCaches: boolean;
}
declare const FInterchangePipelineMeshesUtilitiesContext: FInterchangePipelineMeshesUtilitiesContext;

declare interface UGLTFPipelineSettings extends UDeveloperSettings {
    MaterialParents: Record<FString, FSoftObjectPath>;
}
declare const UGLTFPipelineSettings: UGLTFPipelineSettings;

declare interface UInterchangeGLTFPipeline extends UInterchangePipelineBase {
    PipelineDisplayName: FString;
}
declare const UInterchangeGLTFPipeline: UInterchangeGLTFPipeline;

declare interface UInterchangeGenericAnimationPipeline extends UInterchangePipelineBase {
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
    MaterialCurveSuffixes: TArray<FString>;
    bRemoveCurveRedundantKeys: boolean;
    bDoNotImportCurveWithZero: boolean;
    bDeleteExistingNonCurveCustomAttributes: boolean;
    bDeleteExistingCustomAttributeCurves: boolean;
    bDeleteExistingMorphTargetCurves: boolean;
    SourceAnimationName: FString;
    bSceneImport: boolean;
}
declare const UInterchangeGenericAnimationPipeline: UInterchangeGenericAnimationPipeline;

declare interface UInterchangeGenericAssetsPipeline extends UInterchangePipelineBase {
    PipelineDisplayName: FString;
    ReimportStrategy: EReimportStrategyFlags;
    bUseSourceNameForAsset: boolean;
    bSceneNameSubFolder: boolean;
    bAssetTypeSubFolders: boolean;
    AssetName: FString;
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
}
declare const UInterchangeGenericAssetsPipeline: UInterchangeGenericAssetsPipeline;

declare interface UInterchangeGenericCommonMeshesProperties extends UInterchangePipelineBase {
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
}
declare const UInterchangeGenericCommonMeshesProperties: UInterchangeGenericCommonMeshesProperties;

declare interface UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties extends UInterchangePipelineBase {
    bImportOnlyAnimations: boolean;
    Skeleton: TWeakObjectPtr<USkeleton>;
    bImportMeshesInBoneHierarchy: boolean;
    bUseT0AsRefPose: boolean;
    bAddCurveMetadataToSkeleton: boolean;
    bConvertStaticsWithMorphTargetsToSkeletals: boolean;
}
declare const UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties: UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties;

declare interface UInterchangeGenericLevelPipeline extends UInterchangePipelineBase {
    PipelineDisplayName: FString;
    ReimportPropertyStrategy: EReimportStrategyFlags;
    SceneHierarchyType: EInterchangeSceneHierarchyType;
    bDeleteMissingActors: boolean;
    bForceReimportDeletedActors: boolean;
    bForceReimportDeletedAssets: boolean;
    bDeleteMissingAssets: boolean;
    bUsePhysicalInsteadOfStandardPerspectiveCamera: boolean;
}
declare const UInterchangeGenericLevelPipeline: UInterchangeGenericLevelPipeline;

declare interface UInterchangeGenericMaterialPipeline extends UInterchangePipelineBase {
    PipelineDisplayName: FString;
    bImportMaterials: boolean;
    SearchLocation: EInterchangeMaterialSearchLocation;
    AssetName: FString;
    MaterialImport: EInterchangeMaterialImportOption;
    bIdentifyDuplicateMaterials: boolean;
    bCreateMaterialInstanceForParent: boolean;
    ParentMaterial: FSoftObjectPath;
    TexturePipeline: UInterchangeGenericTexturePipeline;
    SparseVolumeTexturePipeline: UInterchangeSparseVolumeTexturePipeline;
    bOverrideDisplacement: boolean;
    OverrideDisplacementCenter: number;
    BaseNodeContainer: UInterchangeBaseNodeContainer;
}
declare const UInterchangeGenericMaterialPipeline: UInterchangeGenericMaterialPipeline;

declare interface UInterchangeGenericMeshPipeline extends UInterchangePipelineBase {
    CommonMeshesProperties: TWeakObjectPtr<UInterchangeGenericCommonMeshesProperties>;
    CommonSkeletalMeshesAndAnimationsProperties: TWeakObjectPtr<UInterchangeGenericCommonSkeletalMeshesAndAnimationsProperties>;
    bImportStaticMeshes: boolean;
    bCombineStaticMeshes: boolean;
    LODGroup: FName;
    bAutoComputeLODScreenSizes: boolean;
    LODScreenSizes: TArray<number>;
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
    SetCombineSkeletalMeshes(InbCombineSkeletalMeshes: boolean): void;
    GetCombineSkeletalMeshes(): boolean;
}
declare const UInterchangeGenericMeshPipeline: UInterchangeGenericMeshPipeline;

declare interface UInterchangeGenericTexturePipeline extends UInterchangePipelineBase {
    PipelineDisplayName: FString;
    bImportTextures: boolean;
    AssetName: FString;
    bAllowNonPowerOfTwo: boolean;
    BaseNodeContainer: UInterchangeBaseNodeContainer;
}
declare const UInterchangeGenericTexturePipeline: UInterchangeGenericTexturePipeline;

declare interface UInterchangeMaterialXPipeline extends UInterchangePipelineBase {

}
declare const UInterchangeMaterialXPipeline: UInterchangeMaterialXPipeline;

declare interface UInterchangePipelineMeshesUtilities extends UObject {
    SetContext(Context: FInterchangePipelineMeshesUtilitiesContext): void;
    IsValidMeshInstanceUid(MeshInstanceUid: string | FString): boolean;
    IsValidMeshGeometryUid(MeshGeometryUid: string | FString): boolean;
    GetMeshInstanceSkeletonRootUid(MeshInstanceUid: string | FString): FString;
    GetMeshInstanceByUid(MeshInstanceUid: string | FString): FInterchangeMeshInstance;
    GetMeshGeometrySkeletonRootUid(MeshGeometryUid: string | FString): FString;
    GetMeshGeometryByUid(MeshGeometryUid: string | FString): FInterchangeMeshGeometry;
    GetAllStaticMeshInstance(MeshInstanceUids: string | FString[]): void;
    GetAllStaticMeshGeometry(MeshGeometryUids: string | FString[]): void;
    GetAllSkinnedMeshInstance(MeshInstanceUids: string | FString[]): void;
    GetAllSkinnedMeshGeometry(MeshGeometryUids: string | FString[]): void;
    GetAllMeshInstanceUidsUsingMeshGeometryUid(MeshGeometryUid: string | FString, MeshInstanceUids: string | FString[]): void;
    GetAllMeshInstanceUids(MeshInstanceUids: string | FString[]): void;
    GetAllMeshGeometryNotInstanced(MeshGeometryUids: string | FString[]): void;
    GetAllMeshGeometry(MeshGeometryUids: string | FString[]): void;
    GetAllGeometryCacheInstance(MeshInstanceUids: string | FString[]): void;
    GetAllGeometryCacheGeometry(MeshGeometryUids: string | FString[]): void;
    CreateInterchangePipelineMeshesUtilities(BaseNodeContainer: UInterchangeBaseNodeContainer): UInterchangePipelineMeshesUtilities;
}
declare const UInterchangePipelineMeshesUtilities: UInterchangePipelineMeshesUtilities;

declare interface UInterchangeSparseVolumeTexturePipeline extends UInterchangePipelineBase {
    PipelineDisplayName: FString;
    bImportSparseVolumeTextures: boolean;
    bImportAnimatedSparseVolumeTextures: boolean;
    AssetName: FString;
    BaseNodeContainer: UInterchangeBaseNodeContainer;
}
declare const UInterchangeSparseVolumeTexturePipeline: UInterchangeSparseVolumeTexturePipeline;

declare interface UMaterialXPipelineSettings extends UDeveloperSettings {
    PredefinedSurfaceShaders: Record<string | number | symbol, FSoftObjectPath>;
    PredefinedBSDF: Record<string | number | symbol, FSoftObjectPath>;
    PredefinedEDF: Record<string | number | symbol, FSoftObjectPath>;
    PredefinedVDF: Record<string | number | symbol, FSoftObjectPath>;
}
declare const UMaterialXPipelineSettings: UMaterialXPipelineSettings;

