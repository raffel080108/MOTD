declare interface UInterchangeActorFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeActorFactoryNode: {
        SetCustomMobility(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomLocalTransform(AttributeValue: FTransform, bAddApplyDelegate: boolean): boolean;
        SetCustomGlobalTransform(AttributeValue: FTransform, bAddApplyDelegate: boolean): boolean;
        SetCustomComponentVisibility(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomActorVisibility(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomActorClassName(AttributeValue: string): boolean;
        GetCustomMobility(AttributeValue: number): boolean;
        GetCustomLocalTransform(AttributeValue: FTransform): boolean;
        GetCustomGlobalTransform(AttributeValue: FTransform): boolean;
        GetCustomComponentVisibility(AttributeValue: boolean): boolean;
        GetCustomActorVisibility(AttributeValue: boolean): boolean;
        GetCustomActorClassName(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeActorFactoryNode['__static_UInterchangeActorFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeAnimSequenceFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeAnimSequenceFactoryNode: {
        SetCustomSkeletonSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
        SetCustomSkeletonFactoryNodeUid(AttributeValue: string): boolean;
        SetCustomRemoveCurveRedundantKeys(AttributeValue: boolean): boolean;
        SetCustomMaterialDriveParameterOnCustomAttribute(AttributeValue: boolean): boolean;
        SetCustomImportBoneTracksSampleRate(AttributeValue: number): boolean;
        SetCustomImportBoneTracksRangeStop(AttributeValue: number): boolean;
        SetCustomImportBoneTracksRangeStart(AttributeValue: number): boolean;
        SetCustomImportBoneTracks(AttributeValue: boolean): boolean;
        SetCustomImportAttributeCurves(AttributeValue: boolean): boolean;
        SetCustomDoNotImportCurveWithZero(AttributeValue: boolean): boolean;
        SetCustomDeleteExistingNonCurveCustomAttributes(AttributeValue: boolean): boolean;
        SetCustomDeleteExistingMorphTargetCurves(AttributeValue: boolean): boolean;
        SetCustomDeleteExistingCustomAttributeCurves(AttributeValue: boolean): boolean;
        SetCustomAddCurveMetadataToSkeleton(AttributeValue: boolean): boolean;
        SetAnimationPayloadKeysForSceneNodeUids(SceneNodeAnimationPayloadKeyUids: TMap<string, string>, SceneNodeAnimationPayloadKeyTypes: TMap<string, number>): void;
        SetAnimationPayloadKeysForMorphTargetNodeUids(MorphTargetAnimationPayloadKeyUids: TMap<string, string>, MorphTargetAnimationPayloadKeyTypes: TMap<string, number>): void;
        SetAnimatedMaterialCurveSuffixe(MaterialCurveSuffixe: string): boolean;
        SetAnimatedAttributeStepCurveName(AttributeStepCurveName: string): boolean;
        SetAnimatedAttributeCurveName(AttributeCurveName: string): boolean;
        RemoveAnimatedMaterialCurveSuffixe(MaterialCurveSuffixe: string): boolean;
        RemoveAnimatedAttributeStepCurveName(AttributeStepCurveName: string): boolean;
        RemoveAnimatedAttributeCurveName(AttributeCurveName: string): boolean;
        InitializeAnimSequenceNode(UniqueID: string, DisplayLabel: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetSceneNodeAnimationPayloadKeys(OutSceneNodeAnimationPayloadKeys: TMap<string, FInterchangeAnimationPayLoadKey>): void;
        GetMorphTargetNodeAnimationPayloadKeys(OutMorphTargetNodeAnimationPayloads: TMap<string, FInterchangeAnimationPayLoadKey>): void;
        GetCustomSkeletonSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
        GetCustomSkeletonFactoryNodeUid(AttributeValue: string): boolean;
        GetCustomRemoveCurveRedundantKeys(AttributeValue: boolean): boolean;
        GetCustomMaterialDriveParameterOnCustomAttribute(AttributeValue: boolean): boolean;
        GetCustomImportBoneTracksSampleRate(AttributeValue: number): boolean;
        GetCustomImportBoneTracksRangeStop(AttributeValue: number): boolean;
        GetCustomImportBoneTracksRangeStart(AttributeValue: number): boolean;
        GetCustomImportBoneTracks(AttributeValue: boolean): boolean;
        GetCustomImportAttributeCurves(AttributeValue: boolean): boolean;
        GetCustomDoNotImportCurveWithZero(AttributeValue: boolean): boolean;
        GetCustomDeleteExistingNonCurveCustomAttributes(AttributeValue: boolean): boolean;
        GetCustomDeleteExistingMorphTargetCurves(AttributeValue: boolean): boolean;
        GetCustomDeleteExistingCustomAttributeCurves(AttributeValue: boolean): boolean;
        GetCustomAddCurveMetadataToSkeleton(AttributeValue: boolean): boolean;
        GetAnimatedMaterialCurveSuffixesCount(): number;
        GetAnimatedMaterialCurveSuffixes(OutMaterialCurveSuffixes: string[]): void;
        GetAnimatedMaterialCurveSuffixe(Index: number, OutMaterialCurveSuffixe: string): void;
        GetAnimatedAttributeStepCurveNamesCount(): number;
        GetAnimatedAttributeStepCurveNames(OutAttributeStepCurveNames: string[]): void;
        GetAnimatedAttributeStepCurveName(Index: number, OutAttributeStepCurveName: string): void;
        GetAnimatedAttributeCurveNamesCount(): number;
        GetAnimatedAttributeCurveNames(OutAttributeCurveNames: string[]): void;
        GetAnimatedAttributeCurveName(Index: number, OutAttributeCurveName: string): void;
    };
    readonly __staticRegistry: 
        UInterchangeAnimSequenceFactoryNode['__static_UInterchangeAnimSequenceFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeBaseLightFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangeBaseLightFactoryNode: {
        SetCustomUseTemperature(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomTemperature(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomLightColor(AttributeValue: FColor, bAddApplyDelegate: boolean): boolean;
        SetCustomIntensity(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomUseTemperature(AttributeValue: boolean): boolean;
        GetCustomTemperature(AttributeValue: number): boolean;
        GetCustomLightColor(AttributeValue: FColor): boolean;
        GetCustomIntensity(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeBaseLightFactoryNode['__static_UInterchangeBaseLightFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeBaseMaterialFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeBaseMaterialFactoryNode: {
        SetCustomIsMaterialImportEnabled(AttributeValue: boolean): boolean;
        GetCustomIsMaterialImportEnabled(AttributeValue: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeBaseMaterialFactoryNode['__static_UInterchangeBaseMaterialFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeCommonPipelineDataFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeCommonPipelineDataFactoryNode: {
        SetCustomGlobalOffsetTransform(NodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform): boolean;
        SetBakePivotMeshes(AttributeValue: boolean): boolean;
        SetBakeMeshes(AttributeValue: boolean): boolean;
        GetCustomGlobalOffsetTransform(AttributeValue: FTransform): boolean;
        GetBakePivotMeshes(AttributeValue: boolean): boolean;
        GetBakeMeshes(AttributeValue: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeCommonPipelineDataFactoryNode['__static_UInterchangeCommonPipelineDataFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeDecalActorFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangeDecalActorFactoryNode: {
        SetCustomSortOrder(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDecalSize(AttributeValue: FVector, bAddApplyDelegate: boolean): boolean;
        SetCustomDecalMaterialPathName(AttributeValue: string): boolean;
        GetCustomSortOrder(AttributeValue: number): boolean;
        GetCustomDecalSize(AttributeValue: FVector): boolean;
        GetCustomDecalMaterialPathName(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeDecalActorFactoryNode['__static_UInterchangeDecalActorFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeDecalMaterialFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    readonly __static_UInterchangeDecalMaterialFactoryNode: {
        SetCustomNormalTexturePath(AttributeValue: string): boolean;
        SetCustomDiffuseTexturePath(AttributeValue: string): boolean;
        GetCustomNormalTexturePath(AttributeValue: string): boolean;
        GetCustomDiffuseTexturePath(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeDecalMaterialFactoryNode['__static_UInterchangeDecalMaterialFactoryNode'] &
        UInterchangeBaseMaterialFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseMaterialFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeDirectionalLightFactoryNode extends UInterchangeBaseLightFactoryNode {
    readonly __staticRegistry: 
        UInterchangeBaseLightFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseLightFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeGeometryCacheFactoryNode extends UInterchangeMeshFactoryNode {
    readonly __static_UInterchangeGeometryCacheFactoryNode: {
        SetCustomStoreImportedVertexNumbers(AttributeValue: boolean): boolean;
        SetCustomStartFrame(AttributeValue: number): boolean;
        SetCustomPositionPrecision(AttributeValue: number): boolean;
        SetCustomOptimizeIndexBuffers(AttributeValue: boolean): boolean;
        SetCustomNumBitsForUVs(AttributeValue: number): boolean;
        SetCustomMotionVectorsImport(AttributeValue: EInterchangeMotionVectorsHandling): boolean;
        SetCustomFlattenTracks(AttributeValue: boolean): boolean;
        SetCustomEndFrame(AttributeValue: number): boolean;
        SetCustomApplyConstantTopologyOptimization(AttributeValue: boolean): boolean;
        InitializeGeometryCacheNode(UniqueID: string, DisplayLabel: string, InAssetClass: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetCustomStoreImportedVertexNumbers(AttributeValue: boolean): boolean;
        GetCustomStartFrame(AttributeValue: number): boolean;
        GetCustomPositionPrecision(AttributeValue: number): boolean;
        GetCustomOptimizeIndexBuffers(AttributeValue: boolean): boolean;
        GetCustomNumBitsForUVs(AttributeValue: number): boolean;
        GetCustomMotionVectorsImport(AttributeValue: EInterchangeMotionVectorsHandling): boolean;
        GetCustomFlattenTracks(AttributeValue: boolean): boolean;
        GetCustomEndFrame(AttributeValue: number): boolean;
        GetCustomApplyConstantTopologyOptimization(AttributeValue: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeGeometryCacheFactoryNode['__static_UInterchangeGeometryCacheFactoryNode'] &
        UInterchangeMeshFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeMeshFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeHeterogeneousVolumeActorFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangeHeterogeneousVolumeActorFactoryNode: {
        SetCustomVolumetricMaterialUid(MaterialFactoryNodeUid: string): boolean;
        GetCustomVolumetricMaterialUid(MaterialFactoryNodeUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeHeterogeneousVolumeActorFactoryNode['__static_UInterchangeHeterogeneousVolumeActorFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeLevelFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeLevelFactoryNode: {
        SetCustomShouldCreateLevel(AttributeValue: boolean): boolean;
        SetCustomSceneImportAssetFactoryNodeUid(AttributeValue: string): boolean;
        SetCustomCreateWorldPartitionLevel(AttributeValue: boolean): boolean;
        RemoveCustomActorFactoryNodeUid(ActorFactoryNodeUid: string): boolean;
        GetCustomShouldCreateLevel(AttributeValue: boolean): boolean;
        GetCustomSceneImportAssetFactoryNodeUid(AttributeValue: string): boolean;
        GetCustomCreateWorldPartitionLevel(AttributeValue: boolean): boolean;
        GetCustomActorFactoryNodeUids(OutActorFactoryNodeUids: string[]): void;
        GetCustomActorFactoryNodeUidCount(): number;
        GetCustomActorFactoryNodeUid(Index: number, OutActorFactoryNodeUid: string): void;
        AddCustomActorFactoryNodeUid(ActorFactoryNodeUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeLevelFactoryNode['__static_UInterchangeLevelFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeLevelInstanceActorFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangeLevelInstanceActorFactoryNode: {
        SetCustomLevelReference(AttributeValue: string): boolean;
        GetCustomLevelReference(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeLevelInstanceActorFactoryNode['__static_UInterchangeLevelInstanceActorFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeLevelSequenceFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeLevelSequenceFactoryNode: {
        SetCustomFrameRate(AttributeValue: number): boolean;
        RemoveCustomAnimationTrackUid(AnimationTrackUid: string): boolean;
        GetCustomFrameRate(AttributeValue: number): boolean;
        GetCustomAnimationTrackUids(OutAnimationTrackUids: string[]): void;
        GetCustomAnimationTrackUidCount(): number;
        GetCustomAnimationTrackUid(Index: number, OutAnimationTrackUid: string): void;
        AddCustomAnimationTrackUid(AnimationTrackUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeLevelSequenceFactoryNode['__static_UInterchangeLevelSequenceFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeLightFactoryNode extends UInterchangeBaseLightFactoryNode {
    readonly __static_UInterchangeLightFactoryNode: {
        SetCustomUseIESBrightness(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomRotation(AttributeValue: FRotator, bAddApplyDelegate: boolean): boolean;
        SetCustomIntensityUnits(AttributeValue: ELightUnits, bAddApplyDelegate: boolean): boolean;
        SetCustomIESTexture(AttributeValue: string): boolean;
        SetCustomIESBrightnessScale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAttenuationRadius(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomUseIESBrightness(AttributeValue: boolean): boolean;
        GetCustomRotation(AttributeValue: FRotator): boolean;
        GetCustomIntensityUnits(AttributeValue: ELightUnits): boolean;
        GetCustomIESTexture(AttributeValue: string): boolean;
        GetCustomIESBrightnessScale(AttributeValue: number): boolean;
        GetCustomAttenuationRadius(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeLightFactoryNode['__static_UInterchangeLightFactoryNode'] &
        UInterchangeBaseLightFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseLightFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialExpressionFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeMaterialExpressionFactoryNode: {
        SetCustomExpressionClassName(AttributeValue: string): boolean;
        GetCustomExpressionClassName(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialExpressionFactoryNode['__static_UInterchangeMaterialExpressionFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    readonly __static_UInterchangeMaterialFactoryNode: {
        SetCustomTwoSided(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomTranslucencyLightingMode(AttributeValue: ETranslucencyLightingMode, bAddApplyDelegate: boolean): boolean;
        SetCustomShadingModel(AttributeValue: EMaterialShadingModel, bAddApplyDelegate: boolean): boolean;
        SetCustomScreenSpaceReflections(AttributeValue: boolean): boolean;
        SetCustomRefractionMethod(AttributeValue: ERefractionMode, bAddApplyDelegate: boolean): boolean;
        SetCustomOpacityMaskClipValue(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDisplacementCenter(AttributeValue: number): boolean;
        SetCustomBlendMode(AttributeValue: EBlendMode, bAddApplyDelegate: boolean): boolean;
        GetTransmissionColorConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetTangentConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetSurfaceCoverageConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetSubsurfaceConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetSpecularConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetRoughnessConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetRefractionConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetOpacityConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetOcclusionConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetNormalConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetMetallicConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetFuzzColorConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetEmissiveColorConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetDisplacementConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetCustomTwoSided(AttributeValue: boolean): boolean;
        GetCustomTranslucencyLightingMode(AttributeValue: ETranslucencyLightingMode): boolean;
        GetCustomShadingModel(AttributeValue: EMaterialShadingModel): boolean;
        GetCustomScreenSpaceReflections(AttributeValue: boolean): boolean;
        GetCustomRefractionMethod(AttributeValue: ERefractionMode): boolean;
        GetCustomOpacityMaskClipValue(AttributeValue: number): boolean;
        GetCustomDisplacementCenter(AttributeValue: number): boolean;
        GetCustomBlendMode(AttributeValue: EBlendMode): boolean;
        GetClothConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetClearCoatRoughnessConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetClearCoatNormalConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetClearCoatConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetBaseColorConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        GetAnisotropyConnection(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectToTransmissionColor(AttributeValue: string): boolean;
        ConnectToTangent(ExpressionNodeUid: string): boolean;
        ConnectToSurfaceCoverage(ExpressionUid: string): boolean;
        ConnectToSubsurface(ExpressionNodeUid: string): boolean;
        ConnectToSpecular(ExpressionNodeUid: string): boolean;
        ConnectToRoughness(ExpressionNodeUid: string): boolean;
        ConnectToRefraction(AttributeValue: string): boolean;
        ConnectToOpacity(AttributeValue: string): boolean;
        ConnectToOcclusion(AttributeValue: string): boolean;
        ConnectToNormal(ExpressionNodeUid: string): boolean;
        ConnectToMetallic(AttributeValue: string): boolean;
        ConnectToFuzzColor(AttributeValue: string): boolean;
        ConnectToEmissiveColor(ExpressionNodeUid: string): boolean;
        ConnectToDisplacement(AttributeValue: string): boolean;
        ConnectToCloth(AttributeValue: string): boolean;
        ConnectToClearCoatRoughness(AttributeValue: string): boolean;
        ConnectToClearCoatNormal(AttributeValue: string): boolean;
        ConnectToClearCoat(AttributeValue: string): boolean;
        ConnectToBaseColor(AttributeValue: string): boolean;
        ConnectToAnisotropy(ExpressionNodeUid: string): boolean;
        ConnectOutputToTransmissionColor(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToTangent(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToSurfaceCoverage(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToSubsurface(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToSpecular(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToRoughness(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToRefraction(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToOpacity(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToOcclusion(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToNormal(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToMetallic(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToFuzzColor(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToEmissiveColor(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToDisplacement(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToCloth(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToClearCoatRoughness(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToClearCoatNormal(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToClearCoat(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToBaseColor(ExpressionNodeUid: string, OutputName: string): boolean;
        ConnectOutputToAnisotropy(ExpressionNodeUid: string, OutputName: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialFactoryNode['__static_UInterchangeMaterialFactoryNode'] &
        UInterchangeBaseMaterialFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseMaterialFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialFunctionCallExpressionFactoryNode extends UInterchangeMaterialExpressionFactoryNode {
    readonly __static_UInterchangeMaterialFunctionCallExpressionFactoryNode: {
        SetCustomMaterialFunctionDependency(AttributeValue: string): boolean;
        GetCustomMaterialFunctionDependency(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialFunctionCallExpressionFactoryNode['__static_UInterchangeMaterialFunctionCallExpressionFactoryNode'] &
        UInterchangeMaterialExpressionFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeMaterialExpressionFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialFunctionFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    readonly __static_UInterchangeMaterialFunctionFactoryNode: {
        GetInputConnection(InputName: string, ExpressionNodeUid: string, OutputName: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialFunctionFactoryNode['__static_UInterchangeMaterialFunctionFactoryNode'] &
        UInterchangeBaseMaterialFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseMaterialFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialInstanceFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    readonly __static_UInterchangeMaterialInstanceFactoryNode: {
        SetCustomParent(AttributeValue: string): boolean;
        SetCustomInstanceClassName(AttributeValue: string): boolean;
        GetCustomParent(AttributeValue: string): boolean;
        GetCustomInstanceClassName(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialInstanceFactoryNode['__static_UInterchangeMaterialInstanceFactoryNode'] &
        UInterchangeBaseMaterialFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseMaterialFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialReferenceFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    readonly __staticRegistry: 
        UInterchangeBaseMaterialFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseMaterialFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMeshActorFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangeMeshActorFactoryNode: {
        SetSlotMaterialDependencyUid(slotName: string, MaterialDependencyUid: string): boolean;
        SetCustomInstancedAssetFactoryNodeUid(AttributeValue: string): boolean;
        SetCustomGeometricTransform(AttributeValue: FTransform): boolean;
        SetCustomAnimationAssetUidToPlay(AttributeValue: string): boolean;
        RemoveSlotMaterialDependencyUid(slotName: string): boolean;
        GetSlotMaterialDependencyUid(slotName: string, OutMaterialDependency: string): boolean;
        GetSlotMaterialDependencies(OutMaterialDependencies: TMap<string, string>): void;
        GetCustomInstancedAssetFactoryNodeUid(AttributeValue: string): boolean;
        GetCustomGeometricTransform(AttributeValue: FTransform): boolean;
        GetCustomAnimationAssetUidToPlay(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMeshActorFactoryNode['__static_UInterchangeMeshActorFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeMeshFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeMeshFactoryNode: {
        SetSlotMaterialDependencyUid(slotName: string, MaterialDependencyUid: string): boolean;
        SetCustomVertexColorReplace(AttributeValue: boolean): boolean;
        SetCustomVertexColorOverride(AttributeValue: FColor): boolean;
        SetCustomVertexColorIgnore(AttributeValue: boolean): boolean;
        SetCustomUseMikkTSpace(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomUseHighPrecisionTangentBasis(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomUseFullPrecisionUVs(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomUseBackwardsCompatibleF16TruncUVs(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomRemoveDegenerates(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomRecomputeTangents(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomRecomputeNormals(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomLODGroup(AttributeValue: string, bAddApplyDelegate: boolean): boolean;
        SetCustomKeepSectionsSeparate(AttributeValue: boolean): boolean;
        SetCustomImportSockets(AttributeValue: boolean): boolean;
        SetCustomComputeWeightedNormals(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        ResetSlotMaterialDependencies(): boolean;
        RemoveSlotMaterialDependencyUid(slotName: string): boolean;
        RemoveLodDataUniqueId(LodDataUniqueId: string): boolean;
        GetSlotMaterialDependencyUid(slotName: string, OutMaterialDependency: string): boolean;
        GetSlotMaterialDependencies(OutMaterialDependencies: TMap<string, string>): void;
        GetPayloadKeyStringAttribute(PayloadAttributeKey: string, Value: string): boolean;
        GetPayloadKeyInt32Attribute(PayloadAttributeKey: string, Value: number): boolean;
        GetPayloadKeyFloatAttribute(PayloadAttributeKey: string, Value: number): boolean;
        GetPayloadKeyDoubleAttribute(PayloadAttributeKey: string, Value: number): boolean;
        GetPayloadKeyBooleanAttribute(PayloadAttributeKey: string, Value: boolean): boolean;
        GetLodDataUniqueIds(OutLodDataUniqueIds: string[]): void;
        GetLodDataCount(): number;
        GetCustomVertexColorReplace(AttributeValue: boolean): boolean;
        GetCustomVertexColorOverride(AttributeValue: FColor): boolean;
        GetCustomVertexColorIgnore(AttributeValue: boolean): boolean;
        GetCustomUseMikkTSpace(AttributeValue: boolean): boolean;
        GetCustomUseHighPrecisionTangentBasis(AttributeValue: boolean): boolean;
        GetCustomUseFullPrecisionUVs(AttributeValue: boolean): boolean;
        GetCustomUseBackwardsCompatibleF16TruncUVs(AttributeValue: boolean): boolean;
        GetCustomRemoveDegenerates(AttributeValue: boolean): boolean;
        GetCustomRecomputeTangents(AttributeValue: boolean): boolean;
        GetCustomRecomputeNormals(AttributeValue: boolean): boolean;
        GetCustomLODGroup(AttributeValue: string): boolean;
        GetCustomKeepSectionsSeparate(AttributeValue: boolean): boolean;
        GetCustomImportSockets(AttributeValue: boolean): boolean;
        GetCustomComputeWeightedNormals(AttributeValue: boolean): boolean;
        AddPayloadKeyStringAttribute(PayloadAttributeKey: string, Value: string): boolean;
        AddPayloadKeyInt32Attribute(PayloadAttributeKey: string, Value: number): boolean;
        AddPayloadKeyFloatAttribute(PayloadAttributeKey: string, Value: number): boolean;
        AddPayloadKeyDoubleAttribute(PayloadAttributeKey: string, Value: number): boolean;
        AddPayloadKeyBooleanAttribute(PayloadAttributeKey: string, Value: boolean): boolean;
        AddLodDataUniqueId(LodDataUniqueId: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMeshFactoryNode['__static_UInterchangeMeshFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangePhysicalCameraFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangePhysicalCameraFactoryNode: {
        SetCustomSensorWidth(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomSensorHeight(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomFocusMethod(AttributeValue: ECameraFocusMethod, bAddApplyDelegate: boolean): boolean;
        SetCustomFocalLength(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomSensorWidth(AttributeValue: number): boolean;
        GetCustomSensorHeight(AttributeValue: number): boolean;
        GetCustomFocusMethod(AttributeValue: ECameraFocusMethod): boolean;
        GetCustomFocalLength(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangePhysicalCameraFactoryNode['__static_UInterchangePhysicalCameraFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangePhysicsAssetFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangePhysicsAssetFactoryNode: {
        SetCustomSkeletalMeshUid(AttributeValue: string): boolean;
        InitializePhysicsAssetNode(UniqueID: string, DisplayLabel: string, InAssetClass: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetCustomSkeletalMeshUid(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangePhysicsAssetFactoryNode['__static_UInterchangePhysicsAssetFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangePointLightFactoryNode extends UInterchangeLightFactoryNode {
    readonly __static_UInterchangePointLightFactoryNode: {
        SetCustomUseInverseSquaredFalloff(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomLightFalloffExponent(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomUseInverseSquaredFalloff(AttributeValue: boolean): boolean;
        GetCustomLightFalloffExponent(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangePointLightFactoryNode['__static_UInterchangePointLightFactoryNode'] &
        UInterchangeLightFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeLightFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeRectLightFactoryNode extends UInterchangeLightFactoryNode {
    readonly __static_UInterchangeRectLightFactoryNode: {
        SetCustomSourceWidth(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomSourceHeight(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomSourceWidth(AttributeValue: number): boolean;
        GetCustomSourceHeight(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeRectLightFactoryNode['__static_UInterchangeRectLightFactoryNode'] &
        UInterchangeLightFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeLightFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeSceneImportAssetFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __staticRegistry: 
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSceneVariantSetsFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeSceneVariantSetsFactoryNode: {
        RemoveCustomVariantSetUid(VariantUid: string): boolean;
        GetCustomVariantSetUids(OutVariantUids: string[]): void;
        GetCustomVariantSetUidCount(): number;
        GetCustomVariantSetUid(Index: number, OutVariantUid: string): void;
        AddCustomVariantSetUid(VariantUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSceneVariantSetsFactoryNode['__static_UInterchangeSceneVariantSetsFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSkeletalMeshFactoryNode extends UInterchangeMeshFactoryNode {
    readonly __static_UInterchangeSkeletalMeshFactoryNode: {
        SetCustomUseHighPrecisionSkinWeights(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomThresholdUV(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomThresholdTangentNormal(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomThresholdPosition(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomSkeletonSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
        SetCustomPhysicAssetSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
        SetCustomMorphThresholdPosition(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomMergeMorphTargetShapeWithSameName(AttributeValue: boolean): boolean;
        SetCustomImportVertexAttributes(AttributeValue: boolean): boolean;
        SetCustomImportMorphTarget(AttributeValue: boolean): boolean;
        SetCustomImportContentType(AttributeValue: EInterchangeSkeletalMeshContentType): boolean;
        SetCustomCreatePhysicsAsset(AttributeValue: boolean): boolean;
        SetCustomBoneInfluenceLimit(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAddCurveMetadataToSkeleton(AttributeValue: boolean): boolean;
        InitializeSkeletalMeshNode(UniqueID: string, DisplayLabel: string, InAssetClass: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetCustomUseHighPrecisionSkinWeights(AttributeValue: boolean): boolean;
        GetCustomThresholdUV(AttributeValue: number): boolean;
        GetCustomThresholdTangentNormal(AttributeValue: number): boolean;
        GetCustomThresholdPosition(AttributeValue: number): boolean;
        GetCustomSkeletonSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
        GetCustomPhysicAssetSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
        GetCustomMorphThresholdPosition(AttributeValue: number): boolean;
        GetCustomMergeMorphTargetShapeWithSameName(AttributeValue: boolean): boolean;
        GetCustomImportVertexAttributes(AttributeValue: boolean): boolean;
        GetCustomImportMorphTarget(AttributeValue: boolean): boolean;
        GetCustomImportContentType(AttributeValue: EInterchangeSkeletalMeshContentType): boolean;
        GetCustomCreatePhysicsAsset(AttributeValue: boolean): boolean;
        GetCustomBoneInfluenceLimit(AttributeValue: number): boolean;
        GetCustomAddCurveMetadataToSkeleton(AttributeValue: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSkeletalMeshFactoryNode['__static_UInterchangeSkeletalMeshFactoryNode'] &
        UInterchangeMeshFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeMeshFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeSkeletalMeshLodDataNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeSkeletalMeshLodDataNode: {
        SetCustomSkeletonUid(AttributeValue: string): boolean;
        RemoveMeshUid(MeshName: string): boolean;
        RemoveAllMeshes(): boolean;
        GetMeshUidsCount(): number;
        GetMeshUids(OutMeshNames: string[]): void;
        GetCustomSkeletonUid(AttributeValue: string): boolean;
        AddMeshUid(MeshName: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSkeletalMeshLodDataNode['__static_UInterchangeSkeletalMeshLodDataNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSkeletonFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeSkeletonFactoryNode: {
        SetCustomUseTimeZeroForBindPose(AttributeValue: boolean): boolean;
        SetCustomSkeletalMeshFactoryNodeUid(AttributeValue: string): boolean;
        SetCustomRootJointUid(AttributeValue: string): boolean;
        InitializeSkeletonNode(UniqueID: string, DisplayLabel: string, InAssetClass: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetCustomUseTimeZeroForBindPose(AttributeValue: boolean): boolean;
        GetCustomSkeletalMeshFactoryNodeUid(AttributeValue: string): boolean;
        GetCustomRootJointUid(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSkeletonFactoryNode['__static_UInterchangeSkeletonFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSparseVolumeTextureFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeSparseVolumeTextureFactoryNode: {
        SetCustomAttributesBFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
        SetCustomAttributesBChannelZ(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesBChannelY(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesBChannelX(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesBChannelW(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesAFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
        SetCustomAttributesAChannelZ(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesAChannelY(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesAChannelX(GridNameAndComponentIndex: string): boolean;
        SetCustomAttributesAChannelW(GridNameAndComponentIndex: string): boolean;
        SetCustomAnimationID(InAnimationID: string): boolean;
        GetCustomAttributesBFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
        GetCustomAttributesBChannelZ(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesBChannelY(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesBChannelX(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesBChannelW(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesAFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
        GetCustomAttributesAChannelZ(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesAChannelY(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesAChannelX(GridNameAndComponentIndex: string): boolean;
        GetCustomAttributesAChannelW(GridNameAndComponentIndex: string): boolean;
        GetCustomAnimationID(OutAnimationID: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSparseVolumeTextureFactoryNode['__static_UInterchangeSparseVolumeTextureFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSpecularProfileFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeSpecularProfileFactoryNode: {
        SetCustomTexture(TextureUid: string): boolean;
        SetCustomFormat(Format: ESpecularProfileFormat): boolean;
        GetCustomTexture(TextureUid: string): boolean;
        GetCustomFormat(Format: ESpecularProfileFormat): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSpecularProfileFactoryNode['__static_UInterchangeSpecularProfileFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSpotLightFactoryNode extends UInterchangePointLightFactoryNode {
    readonly __static_UInterchangeSpotLightFactoryNode: {
        SetCustomOuterConeAngle(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomInnerConeAngle(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomOuterConeAngle(AttributeValue: number): boolean;
        GetCustomInnerConeAngle(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSpotLightFactoryNode['__static_UInterchangeSpotLightFactoryNode'] &
        UInterchangePointLightFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePointLightFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeStandardCameraFactoryNode extends UInterchangeActorFactoryNode {
    readonly __static_UInterchangeStandardCameraFactoryNode: {
        SetCustomWidth(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomProjectionMode(AttributeValue: ECameraProjectionMode, bAddApplyDelegate: boolean): boolean;
        SetCustomNearClipPlane(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomFieldOfView(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomFarClipPlane(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAspectRatio(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomWidth(AttributeValue: number): boolean;
        GetCustomProjectionMode(AttributeValue: ECameraProjectionMode): boolean;
        GetCustomNearClipPlane(AttributeValue: number): boolean;
        GetCustomFieldOfView(AttributeValue: number): boolean;
        GetCustomFarClipPlane(AttributeValue: number): boolean;
        GetCustomAspectRatio(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeStandardCameraFactoryNode['__static_UInterchangeStandardCameraFactoryNode'] &
        UInterchangeActorFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeActorFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeStaticMeshFactoryNode extends UInterchangeMeshFactoryNode {
    readonly __static_UInterchangeStaticMeshFactoryNode: {
        SetLODScreenSizes(InLODScreenSizes: number[]): boolean;
        SetCustomSupportFaceRemap(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomSrcLightmapIndex(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomMinLightmapResolution(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomMaxLumenMeshCards(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomGenerateLightmapUVs(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomGenerateDistanceFieldAsIfTwoSided(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomDstLightmapIndex(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDistanceFieldResolutionScale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDistanceFieldReplacementMesh(AttributeValue: FSoftObjectPath, bAddApplyDelegate: boolean): boolean;
        SetCustomBuildScale3D(AttributeValue: FVector, bAddApplyDelegate: boolean): boolean;
        SetCustomBuildReversedIndexBuffer(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomBuildNanite(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomAutoComputeLODScreenSizes(AttributeValue: boolean): boolean;
        RemoveSocketUd(SocketUid: string): boolean;
        InitializeStaticMeshNode(UniqueID: string, DisplayLabel: string, InAssetClass: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetSocketUids(OutSocketUids: string[]): void;
        GetSocketUidCount(): number;
        GetLODScreenSizes(OutLODScreenSizes: number[]): void;
        GetLODScreenSizeCount(): number;
        GetCustomSupportFaceRemap(AttributeValue: boolean): boolean;
        GetCustomSrcLightmapIndex(AttributeValue: number): boolean;
        GetCustomMinLightmapResolution(AttributeValue: number): boolean;
        GetCustomMaxLumenMeshCards(AttributeValue: number): boolean;
        GetCustomGenerateLightmapUVs(AttributeValue: boolean): boolean;
        GetCustomGenerateDistanceFieldAsIfTwoSided(AttributeValue: boolean): boolean;
        GetCustomDstLightmapIndex(AttributeValue: number): boolean;
        GetCustomDistanceFieldResolutionScale(AttributeValue: number): boolean;
        GetCustomDistanceFieldReplacementMesh(AttributeValue: FSoftObjectPath): boolean;
        GetCustomBuildScale3D(AttributeValue: FVector): boolean;
        GetCustomBuildReversedIndexBuffer(AttributeValue: boolean): boolean;
        GetCustomBuildNanite(AttributeValue: boolean): boolean;
        GetCustomAutoComputeLODScreenSizes(AttributeValue: boolean): boolean;
        AddSocketUids(InSocketUids: string[]): boolean;
        AddSocketUid(SocketUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeStaticMeshFactoryNode['__static_UInterchangeStaticMeshFactoryNode'] &
        UInterchangeMeshFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeMeshFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeStaticMeshLodDataNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeStaticMeshLodDataNode: {
        SetOneConvexHullPerUCX(AttributeValue: boolean): boolean;
        SetImportCollisionType(AttributeValue: EInterchangeMeshCollision): boolean;
        SetImportCollision(AttributeValue: boolean): boolean;
        SetForceCollisionPrimitiveGeneration(bGenerate: boolean): boolean;
        RemoveSphereCollisionMeshUid(ColliderMeshUid: string): boolean;
        RemoveMeshUid(MeshName: string): boolean;
        RemoveConvexCollisionMeshUid(MeshName: string): boolean;
        RemoveCapsuleCollisionMeshUid(ColliderMeshUid: string): boolean;
        RemoveBoxCollisionMeshUid(ColliderMeshUid: string): boolean;
        RemoveAllSphereCollisionMeshes(): boolean;
        RemoveAllMeshes(): boolean;
        RemoveAllConvexCollisionMeshes(): boolean;
        RemoveAllCapsuleCollisionMeshes(): boolean;
        RemoveAllBoxCollisionMeshes(): boolean;
        GetSphereCollisionMeshUidsCount(): number;
        GetSphereCollisionMeshUids(OutMeshNames: string[]): void;
        GetSphereCollisionMeshMap(): [TMap<string, string>];
        GetSphereColliderRenderMeshUid(InColliderMeshUid: string, OutRenderMeshUid: string): void;
        GetOneConvexHullPerUCX(AttributeValue: boolean): boolean;
        GetMeshUidsCount(): number;
        GetMeshUids(OutMeshNames: string[]): void;
        GetImportCollisionType(AttributeValue: EInterchangeMeshCollision): boolean;
        GetImportCollision(AttributeValue: boolean): boolean;
        GetForceCollisionPrimitiveGeneration(bGenerate: boolean): boolean;
        GetConvexCollisionMeshUidsCount(): number;
        GetConvexCollisionMeshUids(OutMeshNames: string[]): void;
        GetConvexCollisionMeshMap(): [TMap<string, string>];
        GetConvexColliderRenderMeshUid(InColliderMeshUid: string, OutRenderMeshUid: string): void;
        GetCapsuleCollisionMeshUidsCount(): number;
        GetCapsuleCollisionMeshUids(OutMeshNames: string[]): void;
        GetCapsuleCollisionMeshMap(): [TMap<string, string>];
        GetCapsuleColliderRenderMeshUid(InColliderMeshUid: string, OutRenderMeshUid: string): void;
        GetBoxCollisionMeshUidsCount(): number;
        GetBoxCollisionMeshUids(OutMeshNames: string[]): void;
        GetBoxCollisionMeshMap(): [TMap<string, string>];
        GetBoxColliderRenderMeshUid(InColliderMeshUid: string, OutRenderMeshUid: string): void;
        AddSphereCollisionMeshUids(ColliderMeshUid: string, RenderMeshUid: string): boolean;
        AddSphereCollisionMeshUid(ColliderMeshUid: string): boolean;
        AddMeshUid(MeshName: string): boolean;
        AddConvexCollisionMeshUids(ColliderMeshUid: string, RenderMeshUid: string): boolean;
        AddConvexCollisionMeshUid(ColliderMeshUid: string): boolean;
        AddCapsuleCollisionMeshUids(ColliderMeshUid: string, RenderMeshUid: string): boolean;
        AddCapsuleCollisionMeshUid(ColliderMeshUid: string): boolean;
        AddBoxCollisionMeshUids(ColliderMeshUid: string, RenderMeshUid: string): boolean;
        AddBoxCollisionMeshUid(ColliderMeshUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeStaticMeshLodDataNode['__static_UInterchangeStaticMeshLodDataNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeTexture2DArrayFactoryNode extends UInterchangeTextureFactoryNode {
    readonly __static_UInterchangeTexture2DArrayFactoryNode: {
        SetCustomAddressZ(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomAddressZ(AttributeValue: number): boolean;
        GetCustomAddressY(AttributeValue: number): boolean;
        GetCustomAddressX(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTexture2DArrayFactoryNode['__static_UInterchangeTexture2DArrayFactoryNode'] &
        UInterchangeTextureFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeTexture2DFactoryNode extends UInterchangeTextureFactoryNode {
    readonly __static_UInterchangeTexture2DFactoryNode: {
        SetSourceBlocks(InSourceBlocks: TMap<number, string>): void;
        SetSourceBlockByCoordinates(X: number, Y: number, InSourceFile: string): void;
        SetSourceBlock(BlockIndex: number, InSourceFile: string): void;
        SetCustomAddressY(AttributeValue: TextureAddress, bAddApplyDelegate: boolean): boolean;
        SetCustomAddressX(AttributeValue: TextureAddress, bAddApplyDelegate: boolean): boolean;
        GetSourceBlocks(): [TMap<number, string>];
        GetSourceBlockByCoordinates(X: number, Y: number, OutSourceFile: string): boolean;
        GetSourceBlock(BlockIndex: number, OutSourceFile: string): boolean;
        GetCustomAddressY(AttributeValue: TextureAddress): boolean;
        GetCustomAddressX(AttributeValue: TextureAddress): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTexture2DFactoryNode['__static_UInterchangeTexture2DFactoryNode'] &
        UInterchangeTextureFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeTextureCubeArrayFactoryNode extends UInterchangeTextureFactoryNode {
    readonly __staticRegistry: 
        UInterchangeTextureFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeTextureCubeFactoryNode extends UInterchangeTextureFactoryNode {
    readonly __staticRegistry: 
        UInterchangeTextureFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeTextureFactoryNode extends UInterchangeFactoryBaseNode {
    readonly __static_UInterchangeTextureFactoryNode: {
        SetCustomVirtualTextureStreaming(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomTranslatedTextureNodeUid(AttributeValue: string): boolean;
        SetCustomSRGB(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomPreferCompressedSourceData(AttributeValue: boolean): boolean;
        SetCustomPowerOfTwoMode(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomPaddingColor(AttributeValue: FColor, bAddApplyDelegate: boolean): boolean;
        SetCustomMipLoadOptions(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomMipGenSettings(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomMaxTextureSize(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomLossyCompressionAmount(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomLODGroup(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomLODBias(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomFilter(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDownscaleOptions(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDownscale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomDeferCompression(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomCompressionSettings(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomCompressionQuality(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomCompressionNoAlpha(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomCompositeTextureMode(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomCompositePower(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomColorSpace(AttributeValue: ETextureColorSpace, bAddApplyDelegate: boolean): boolean;
        SetCustomChromaKeyThreshold(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomChromaKeyColor(AttributeValue: FColor, bAddApplyDelegate: boolean): boolean;
        SetCustombUseLegacyGamma(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustombPreserveBorder(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustombFlipGreenChannel(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustombDoScaleMipsForAlphaCoverage(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustombChromaKeyTexture(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomAlphaCoverageThresholds(AttributeValue: FVector4, bAddApplyDelegate: boolean): boolean;
        SetCustomAllowNonPowerOfTwo(AttributeValue: boolean): boolean;
        SetCustomAdjustVibrance(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustSaturation(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustRGBCurve(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustMinAlpha(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustMaxAlpha(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustHue(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustBrightnessCurve(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAdjustBrightness(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        InitializeTextureNode(UniqueID: string, DisplayLabel: string, InAssetName: string, NodeContainer: UInterchangeBaseNodeContainer): void;
        GetCustomVirtualTextureStreaming(AttributeValue: boolean): boolean;
        GetCustomTranslatedTextureNodeUid(AttributeValue: string): boolean;
        GetCustomSRGB(AttributeValue: boolean): boolean;
        GetCustomPreferCompressedSourceData(AttributeValue: boolean): boolean;
        GetCustomPowerOfTwoMode(AttributeValue: number): boolean;
        GetCustomPaddingColor(AttributeValue: FColor): boolean;
        GetCustomMipLoadOptions(AttributeValue: number): boolean;
        GetCustomMipGenSettings(AttributeValue: number): boolean;
        GetCustomMaxTextureSize(AttributeValue: number): boolean;
        GetCustomLossyCompressionAmount(AttributeValue: number): boolean;
        GetCustomLODGroup(AttributeValue: number): boolean;
        GetCustomLODBias(AttributeValue: number): boolean;
        GetCustomFilter(AttributeValue: number): boolean;
        GetCustomDownscaleOptions(AttributeValue: number): boolean;
        GetCustomDownscale(AttributeValue: number): boolean;
        GetCustomDeferCompression(AttributeValue: boolean): boolean;
        GetCustomCompressionSettings(AttributeValue: number): boolean;
        GetCustomCompressionQuality(AttributeValue: number): boolean;
        GetCustomCompressionNoAlpha(AttributeValue: boolean): boolean;
        GetCustomCompositeTextureMode(AttributeValue: number): boolean;
        GetCustomCompositePower(AttributeValue: number): boolean;
        GetCustomColorSpace(AttributeValue: ETextureColorSpace): boolean;
        GetCustomChromaKeyThreshold(AttributeValue: number): boolean;
        GetCustomChromaKeyColor(AttributeValue: FColor): boolean;
        GetCustombUseLegacyGamma(AttributeValue: boolean): boolean;
        GetCustombPreserveBorder(AttributeValue: boolean): boolean;
        GetCustombFlipGreenChannel(AttributeValue: boolean): boolean;
        GetCustombDoScaleMipsForAlphaCoverage(AttributeValue: boolean): boolean;
        GetCustombChromaKeyTexture(AttributeValue: boolean): boolean;
        GetCustomAlphaCoverageThresholds(AttributeValue: FVector4): boolean;
        GetCustomAllowNonPowerOfTwo(AttributeValue: boolean): boolean;
        GetCustomAdjustVibrance(AttributeValue: number): boolean;
        GetCustomAdjustSaturation(AttributeValue: number): boolean;
        GetCustomAdjustRGBCurve(AttributeValue: number): boolean;
        GetCustomAdjustMinAlpha(AttributeValue: number): boolean;
        GetCustomAdjustMaxAlpha(AttributeValue: number): boolean;
        GetCustomAdjustHue(AttributeValue: number): boolean;
        GetCustomAdjustBrightnessCurve(AttributeValue: number): boolean;
        GetCustomAdjustBrightness(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTextureFactoryNode['__static_UInterchangeTextureFactoryNode'] &
        UInterchangeFactoryBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeFactoryBaseNode['__propertyRegistry'];
}

declare interface UInterchangeTextureLightProfileFactoryNode extends UInterchangeTexture2DFactoryNode {
    readonly __static_UInterchangeTextureLightProfileFactoryNode: {
        SetCustomTextureMultiplier(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomBrightness(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        GetCustomTextureMultiplier(AttributeValue: number): boolean;
        GetCustomBrightness(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTextureLightProfileFactoryNode['__static_UInterchangeTextureLightProfileFactoryNode'] &
        UInterchangeTexture2DFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTexture2DFactoryNode['__propertyRegistry'];
}

declare interface UInterchangeVolumeTextureFactoryNode extends UInterchangeTextureFactoryNode {
    readonly __staticRegistry: 
        UInterchangeTextureFactoryNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureFactoryNode['__propertyRegistry'];
}

