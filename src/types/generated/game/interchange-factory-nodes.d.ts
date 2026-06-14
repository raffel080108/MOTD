declare interface UInterchangeActorFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomMobility(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomLocalTransform(AttributeValue: FTransform, bAddApplyDelegate: boolean): boolean;
    SetCustomGlobalTransform(AttributeValue: FTransform, bAddApplyDelegate: boolean): boolean;
    SetCustomComponentVisibility(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomActorVisibility(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomActorClassName(AttributeValue: string | FString): boolean;
    GetCustomMobility(AttributeValue: uint8): boolean;
    GetCustomLocalTransform(AttributeValue: FTransform): boolean;
    GetCustomGlobalTransform(AttributeValue: FTransform): boolean;
    GetCustomComponentVisibility(AttributeValue: boolean): boolean;
    GetCustomActorVisibility(AttributeValue: boolean): boolean;
    GetCustomActorClassName(AttributeValue: string | FString): boolean;
}
declare const UInterchangeActorFactoryNode: UInterchangeActorFactoryNode;

declare interface UInterchangeAnimSequenceFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomSkeletonSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
    SetCustomSkeletonFactoryNodeUid(AttributeValue: string | FString): boolean;
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
    SetAnimationPayloadKeysForSceneNodeUids(SceneNodeAnimationPayloadKeyUids: Record<FString, FString>, SceneNodeAnimationPayloadKeyTypes: Record<FString, uint8>): void;
    SetAnimationPayloadKeysForMorphTargetNodeUids(MorphTargetAnimationPayloadKeyUids: Record<FString, FString>, MorphTargetAnimationPayloadKeyTypes: Record<FString, uint8>): void;
    SetAnimatedMaterialCurveSuffixe(MaterialCurveSuffixe: string | FString): boolean;
    SetAnimatedAttributeStepCurveName(AttributeStepCurveName: string | FString): boolean;
    SetAnimatedAttributeCurveName(AttributeCurveName: string | FString): boolean;
    RemoveAnimatedMaterialCurveSuffixe(MaterialCurveSuffixe: string | FString): boolean;
    RemoveAnimatedAttributeStepCurveName(AttributeStepCurveName: string | FString): boolean;
    RemoveAnimatedAttributeCurveName(AttributeCurveName: string | FString): boolean;
    InitializeAnimSequenceNode(UniqueID: string | FString, DisplayLabel: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetSceneNodeAnimationPayloadKeys(OutSceneNodeAnimationPayloadKeys: Record<FString, FInterchangeAnimationPayLoadKey>): void;
    GetMorphTargetNodeAnimationPayloadKeys(OutMorphTargetNodeAnimationPayloads: Record<FString, FInterchangeAnimationPayLoadKey>): void;
    GetCustomSkeletonSoftObjectPath(AttributeValue: FSoftObjectPath): boolean;
    GetCustomSkeletonFactoryNodeUid(AttributeValue: string | FString): boolean;
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
    GetAnimatedMaterialCurveSuffixes(OutMaterialCurveSuffixes: string | FString[]): void;
    GetAnimatedMaterialCurveSuffixe(Index: number, OutMaterialCurveSuffixe: string | FString): void;
    GetAnimatedAttributeStepCurveNamesCount(): number;
    GetAnimatedAttributeStepCurveNames(OutAttributeStepCurveNames: string | FString[]): void;
    GetAnimatedAttributeStepCurveName(Index: number, OutAttributeStepCurveName: string | FString): void;
    GetAnimatedAttributeCurveNamesCount(): number;
    GetAnimatedAttributeCurveNames(OutAttributeCurveNames: string | FString[]): void;
    GetAnimatedAttributeCurveName(Index: number, OutAttributeCurveName: string | FString): void;
}
declare const UInterchangeAnimSequenceFactoryNode: UInterchangeAnimSequenceFactoryNode;

declare interface UInterchangeBaseLightFactoryNode extends UInterchangeActorFactoryNode {
    SetCustomUseTemperature(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomTemperature(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomLightColor(AttributeValue: FColor, bAddApplyDelegate: boolean): boolean;
    SetCustomIntensity(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomUseTemperature(AttributeValue: boolean): boolean;
    GetCustomTemperature(AttributeValue: number): boolean;
    GetCustomLightColor(AttributeValue: FColor): boolean;
    GetCustomIntensity(AttributeValue: number): boolean;
}
declare const UInterchangeBaseLightFactoryNode: UInterchangeBaseLightFactoryNode;

declare interface UInterchangeBaseMaterialFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomIsMaterialImportEnabled(AttributeValue: boolean): boolean;
    GetCustomIsMaterialImportEnabled(AttributeValue: boolean): boolean;
}
declare const UInterchangeBaseMaterialFactoryNode: UInterchangeBaseMaterialFactoryNode;

declare interface UInterchangeCommonPipelineDataFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomGlobalOffsetTransform(NodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform): boolean;
    SetBakePivotMeshes(AttributeValue: boolean): boolean;
    SetBakeMeshes(AttributeValue: boolean): boolean;
    GetCustomGlobalOffsetTransform(AttributeValue: FTransform): boolean;
    GetBakePivotMeshes(AttributeValue: boolean): boolean;
    GetBakeMeshes(AttributeValue: boolean): boolean;
}
declare const UInterchangeCommonPipelineDataFactoryNode: UInterchangeCommonPipelineDataFactoryNode;

declare interface UInterchangeDecalActorFactoryNode extends UInterchangeActorFactoryNode {
    SetCustomSortOrder(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomDecalSize(AttributeValue: FVector, bAddApplyDelegate: boolean): boolean;
    SetCustomDecalMaterialPathName(AttributeValue: string | FString): boolean;
    GetCustomSortOrder(AttributeValue: number): boolean;
    GetCustomDecalSize(AttributeValue: FVector): boolean;
    GetCustomDecalMaterialPathName(AttributeValue: string | FString): boolean;
}
declare const UInterchangeDecalActorFactoryNode: UInterchangeDecalActorFactoryNode;

declare interface UInterchangeDecalMaterialFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    SetCustomNormalTexturePath(AttributeValue: string | FString): boolean;
    SetCustomDiffuseTexturePath(AttributeValue: string | FString): boolean;
    GetCustomNormalTexturePath(AttributeValue: string | FString): boolean;
    GetCustomDiffuseTexturePath(AttributeValue: string | FString): boolean;
}
declare const UInterchangeDecalMaterialFactoryNode: UInterchangeDecalMaterialFactoryNode;

declare interface UInterchangeDirectionalLightFactoryNode extends UInterchangeBaseLightFactoryNode {

}
declare const UInterchangeDirectionalLightFactoryNode: UInterchangeDirectionalLightFactoryNode;

declare interface UInterchangeGeometryCacheFactoryNode extends UInterchangeMeshFactoryNode {
    SetCustomStoreImportedVertexNumbers(AttributeValue: boolean): boolean;
    SetCustomStartFrame(AttributeValue: number): boolean;
    SetCustomPositionPrecision(AttributeValue: number): boolean;
    SetCustomOptimizeIndexBuffers(AttributeValue: boolean): boolean;
    SetCustomNumBitsForUVs(AttributeValue: number): boolean;
    SetCustomMotionVectorsImport(AttributeValue: EInterchangeMotionVectorsHandling): boolean;
    SetCustomFlattenTracks(AttributeValue: boolean): boolean;
    SetCustomEndFrame(AttributeValue: number): boolean;
    SetCustomApplyConstantTopologyOptimization(AttributeValue: boolean): boolean;
    InitializeGeometryCacheNode(UniqueID: string | FString, DisplayLabel: string | FString, InAssetClass: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetCustomStoreImportedVertexNumbers(AttributeValue: boolean): boolean;
    GetCustomStartFrame(AttributeValue: number): boolean;
    GetCustomPositionPrecision(AttributeValue: number): boolean;
    GetCustomOptimizeIndexBuffers(AttributeValue: boolean): boolean;
    GetCustomNumBitsForUVs(AttributeValue: number): boolean;
    GetCustomMotionVectorsImport(AttributeValue: EInterchangeMotionVectorsHandling): boolean;
    GetCustomFlattenTracks(AttributeValue: boolean): boolean;
    GetCustomEndFrame(AttributeValue: number): boolean;
    GetCustomApplyConstantTopologyOptimization(AttributeValue: boolean): boolean;
}
declare const UInterchangeGeometryCacheFactoryNode: UInterchangeGeometryCacheFactoryNode;

declare interface UInterchangeHeterogeneousVolumeActorFactoryNode extends UInterchangeActorFactoryNode {
    SetCustomVolumetricMaterialUid(MaterialFactoryNodeUid: string | FString): boolean;
    GetCustomVolumetricMaterialUid(MaterialFactoryNodeUid: string | FString): boolean;
}
declare const UInterchangeHeterogeneousVolumeActorFactoryNode: UInterchangeHeterogeneousVolumeActorFactoryNode;

declare interface UInterchangeLevelFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomShouldCreateLevel(AttributeValue: boolean): boolean;
    SetCustomSceneImportAssetFactoryNodeUid(AttributeValue: string | FString): boolean;
    SetCustomCreateWorldPartitionLevel(AttributeValue: boolean): boolean;
    RemoveCustomActorFactoryNodeUid(ActorFactoryNodeUid: string | FString): boolean;
    GetCustomShouldCreateLevel(AttributeValue: boolean): boolean;
    GetCustomSceneImportAssetFactoryNodeUid(AttributeValue: string | FString): boolean;
    GetCustomCreateWorldPartitionLevel(AttributeValue: boolean): boolean;
    GetCustomActorFactoryNodeUids(OutActorFactoryNodeUids: string | FString[]): void;
    GetCustomActorFactoryNodeUidCount(): number;
    GetCustomActorFactoryNodeUid(Index: number, OutActorFactoryNodeUid: string | FString): void;
    AddCustomActorFactoryNodeUid(ActorFactoryNodeUid: string | FString): boolean;
}
declare const UInterchangeLevelFactoryNode: UInterchangeLevelFactoryNode;

declare interface UInterchangeLevelInstanceActorFactoryNode extends UInterchangeActorFactoryNode {
    SetCustomLevelReference(AttributeValue: string | FString): boolean;
    GetCustomLevelReference(AttributeValue: string | FString): boolean;
}
declare const UInterchangeLevelInstanceActorFactoryNode: UInterchangeLevelInstanceActorFactoryNode;

declare interface UInterchangeLevelSequenceFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomFrameRate(AttributeValue: number): boolean;
    RemoveCustomAnimationTrackUid(AnimationTrackUid: string | FString): boolean;
    GetCustomFrameRate(AttributeValue: number): boolean;
    GetCustomAnimationTrackUids(OutAnimationTrackUids: string | FString[]): void;
    GetCustomAnimationTrackUidCount(): number;
    GetCustomAnimationTrackUid(Index: number, OutAnimationTrackUid: string | FString): void;
    AddCustomAnimationTrackUid(AnimationTrackUid: string | FString): boolean;
}
declare const UInterchangeLevelSequenceFactoryNode: UInterchangeLevelSequenceFactoryNode;

declare interface UInterchangeLightFactoryNode extends UInterchangeBaseLightFactoryNode {
    SetCustomUseIESBrightness(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomRotation(AttributeValue: FRotator, bAddApplyDelegate: boolean): boolean;
    SetCustomIntensityUnits(AttributeValue: ELightUnits, bAddApplyDelegate: boolean): boolean;
    SetCustomIESTexture(AttributeValue: string | FString): boolean;
    SetCustomIESBrightnessScale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomAttenuationRadius(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomUseIESBrightness(AttributeValue: boolean): boolean;
    GetCustomRotation(AttributeValue: FRotator): boolean;
    GetCustomIntensityUnits(AttributeValue: ELightUnits): boolean;
    GetCustomIESTexture(AttributeValue: string | FString): boolean;
    GetCustomIESBrightnessScale(AttributeValue: number): boolean;
    GetCustomAttenuationRadius(AttributeValue: number): boolean;
}
declare const UInterchangeLightFactoryNode: UInterchangeLightFactoryNode;

declare interface UInterchangeMaterialExpressionFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomExpressionClassName(AttributeValue: string | FString): boolean;
    GetCustomExpressionClassName(AttributeValue: string | FString): boolean;
}
declare const UInterchangeMaterialExpressionFactoryNode: UInterchangeMaterialExpressionFactoryNode;

declare interface UInterchangeMaterialFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    SetCustomTwoSided(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomTranslucencyLightingMode(AttributeValue: ETranslucencyLightingMode, bAddApplyDelegate: boolean): boolean;
    SetCustomShadingModel(AttributeValue: EMaterialShadingModel, bAddApplyDelegate: boolean): boolean;
    SetCustomScreenSpaceReflections(AttributeValue: boolean): boolean;
    SetCustomRefractionMethod(AttributeValue: ERefractionMode, bAddApplyDelegate: boolean): boolean;
    SetCustomOpacityMaskClipValue(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomDisplacementCenter(AttributeValue: number): boolean;
    SetCustomBlendMode(AttributeValue: EBlendMode, bAddApplyDelegate: boolean): boolean;
    GetTransmissionColorConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetTangentConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetSurfaceCoverageConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetSubsurfaceConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetSpecularConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetRoughnessConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetRefractionConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetOpacityConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetOcclusionConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetNormalConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetMetallicConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetFuzzColorConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetEmissiveColorConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetDisplacementConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetCustomTwoSided(AttributeValue: boolean): boolean;
    GetCustomTranslucencyLightingMode(AttributeValue: ETranslucencyLightingMode): boolean;
    GetCustomShadingModel(AttributeValue: EMaterialShadingModel): boolean;
    GetCustomScreenSpaceReflections(AttributeValue: boolean): boolean;
    GetCustomRefractionMethod(AttributeValue: ERefractionMode): boolean;
    GetCustomOpacityMaskClipValue(AttributeValue: number): boolean;
    GetCustomDisplacementCenter(AttributeValue: number): boolean;
    GetCustomBlendMode(AttributeValue: EBlendMode): boolean;
    GetClothConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetClearCoatRoughnessConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetClearCoatNormalConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetClearCoatConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetBaseColorConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    GetAnisotropyConnection(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectToTransmissionColor(AttributeValue: string | FString): boolean;
    ConnectToTangent(ExpressionNodeUid: string | FString): boolean;
    ConnectToSurfaceCoverage(ExpressionUid: string | FString): boolean;
    ConnectToSubsurface(ExpressionNodeUid: string | FString): boolean;
    ConnectToSpecular(ExpressionNodeUid: string | FString): boolean;
    ConnectToRoughness(ExpressionNodeUid: string | FString): boolean;
    ConnectToRefraction(AttributeValue: string | FString): boolean;
    ConnectToOpacity(AttributeValue: string | FString): boolean;
    ConnectToOcclusion(AttributeValue: string | FString): boolean;
    ConnectToNormal(ExpressionNodeUid: string | FString): boolean;
    ConnectToMetallic(AttributeValue: string | FString): boolean;
    ConnectToFuzzColor(AttributeValue: string | FString): boolean;
    ConnectToEmissiveColor(ExpressionNodeUid: string | FString): boolean;
    ConnectToDisplacement(AttributeValue: string | FString): boolean;
    ConnectToCloth(AttributeValue: string | FString): boolean;
    ConnectToClearCoatRoughness(AttributeValue: string | FString): boolean;
    ConnectToClearCoatNormal(AttributeValue: string | FString): boolean;
    ConnectToClearCoat(AttributeValue: string | FString): boolean;
    ConnectToBaseColor(AttributeValue: string | FString): boolean;
    ConnectToAnisotropy(ExpressionNodeUid: string | FString): boolean;
    ConnectOutputToTransmissionColor(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToTangent(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToSurfaceCoverage(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToSubsurface(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToSpecular(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToRoughness(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToRefraction(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToOpacity(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToOcclusion(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToNormal(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToMetallic(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToFuzzColor(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToEmissiveColor(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToDisplacement(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToCloth(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToClearCoatRoughness(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToClearCoatNormal(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToClearCoat(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToBaseColor(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
    ConnectOutputToAnisotropy(ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
}
declare const UInterchangeMaterialFactoryNode: UInterchangeMaterialFactoryNode;

declare interface UInterchangeMaterialFunctionCallExpressionFactoryNode extends UInterchangeMaterialExpressionFactoryNode {
    SetCustomMaterialFunctionDependency(AttributeValue: string | FString): boolean;
    GetCustomMaterialFunctionDependency(AttributeValue: string | FString): boolean;
}
declare const UInterchangeMaterialFunctionCallExpressionFactoryNode: UInterchangeMaterialFunctionCallExpressionFactoryNode;

declare interface UInterchangeMaterialFunctionFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    GetInputConnection(InputName: string | FString, ExpressionNodeUid: string | FString, OutputName: string | FString): boolean;
}
declare const UInterchangeMaterialFunctionFactoryNode: UInterchangeMaterialFunctionFactoryNode;

declare interface UInterchangeMaterialInstanceFactoryNode extends UInterchangeBaseMaterialFactoryNode {
    SetCustomParent(AttributeValue: string | FString): boolean;
    SetCustomInstanceClassName(AttributeValue: string | FString): boolean;
    GetCustomParent(AttributeValue: string | FString): boolean;
    GetCustomInstanceClassName(AttributeValue: string | FString): boolean;
}
declare const UInterchangeMaterialInstanceFactoryNode: UInterchangeMaterialInstanceFactoryNode;

declare interface UInterchangeMaterialReferenceFactoryNode extends UInterchangeBaseMaterialFactoryNode {

}
declare const UInterchangeMaterialReferenceFactoryNode: UInterchangeMaterialReferenceFactoryNode;

declare interface UInterchangeMeshActorFactoryNode extends UInterchangeActorFactoryNode {
    SetSlotMaterialDependencyUid(slotName: string | FString, MaterialDependencyUid: string | FString): boolean;
    SetCustomInstancedAssetFactoryNodeUid(AttributeValue: string | FString): boolean;
    SetCustomGeometricTransform(AttributeValue: FTransform): boolean;
    SetCustomAnimationAssetUidToPlay(AttributeValue: string | FString): boolean;
    RemoveSlotMaterialDependencyUid(slotName: string | FString): boolean;
    GetSlotMaterialDependencyUid(slotName: string | FString, OutMaterialDependency: string | FString): boolean;
    GetSlotMaterialDependencies(OutMaterialDependencies: Record<FString, FString>): void;
    GetCustomInstancedAssetFactoryNodeUid(AttributeValue: string | FString): boolean;
    GetCustomGeometricTransform(AttributeValue: FTransform): boolean;
    GetCustomAnimationAssetUidToPlay(AttributeValue: string | FString): boolean;
}
declare const UInterchangeMeshActorFactoryNode: UInterchangeMeshActorFactoryNode;

declare interface UInterchangeMeshFactoryNode extends UInterchangeFactoryBaseNode {
    SetSlotMaterialDependencyUid(slotName: string | FString, MaterialDependencyUid: string | FString): boolean;
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
    SetCustomLODGroup(AttributeValue: FName, bAddApplyDelegate: boolean): boolean;
    SetCustomKeepSectionsSeparate(AttributeValue: boolean): boolean;
    SetCustomImportSockets(AttributeValue: boolean): boolean;
    SetCustomComputeWeightedNormals(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    ResetSlotMaterialDependencies(): boolean;
    RemoveSlotMaterialDependencyUid(slotName: string | FString): boolean;
    RemoveLodDataUniqueId(LodDataUniqueId: string | FString): boolean;
    GetSlotMaterialDependencyUid(slotName: string | FString, OutMaterialDependency: string | FString): boolean;
    GetSlotMaterialDependencies(OutMaterialDependencies: Record<FString, FString>): void;
    GetPayloadKeyStringAttribute(PayloadAttributeKey: string | FString, Value: string | FString): boolean;
    GetPayloadKeyInt32Attribute(PayloadAttributeKey: string | FString, Value: number): boolean;
    GetPayloadKeyFloatAttribute(PayloadAttributeKey: string | FString, Value: number): boolean;
    GetPayloadKeyDoubleAttribute(PayloadAttributeKey: string | FString, Value: number): boolean;
    GetPayloadKeyBooleanAttribute(PayloadAttributeKey: string | FString, Value: boolean): boolean;
    GetLodDataUniqueIds(OutLodDataUniqueIds: string | FString[]): void;
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
    GetCustomLODGroup(AttributeValue: FName): boolean;
    GetCustomKeepSectionsSeparate(AttributeValue: boolean): boolean;
    GetCustomImportSockets(AttributeValue: boolean): boolean;
    GetCustomComputeWeightedNormals(AttributeValue: boolean): boolean;
    AddPayloadKeyStringAttribute(PayloadAttributeKey: string | FString, Value: string | FString): boolean;
    AddPayloadKeyInt32Attribute(PayloadAttributeKey: string | FString, Value: number): boolean;
    AddPayloadKeyFloatAttribute(PayloadAttributeKey: string | FString, Value: number): boolean;
    AddPayloadKeyDoubleAttribute(PayloadAttributeKey: string | FString, Value: number): boolean;
    AddPayloadKeyBooleanAttribute(PayloadAttributeKey: string | FString, Value: boolean): boolean;
    AddLodDataUniqueId(LodDataUniqueId: string | FString): boolean;
}
declare const UInterchangeMeshFactoryNode: UInterchangeMeshFactoryNode;

declare interface UInterchangePhysicalCameraFactoryNode extends UInterchangeActorFactoryNode {
    SetCustomSensorWidth(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomSensorHeight(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomFocusMethod(AttributeValue: ECameraFocusMethod, bAddApplyDelegate: boolean): boolean;
    SetCustomFocalLength(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomSensorWidth(AttributeValue: number): boolean;
    GetCustomSensorHeight(AttributeValue: number): boolean;
    GetCustomFocusMethod(AttributeValue: ECameraFocusMethod): boolean;
    GetCustomFocalLength(AttributeValue: number): boolean;
}
declare const UInterchangePhysicalCameraFactoryNode: UInterchangePhysicalCameraFactoryNode;

declare interface UInterchangePhysicsAssetFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomSkeletalMeshUid(AttributeValue: string | FString): boolean;
    InitializePhysicsAssetNode(UniqueID: string | FString, DisplayLabel: string | FString, InAssetClass: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetCustomSkeletalMeshUid(AttributeValue: string | FString): boolean;
}
declare const UInterchangePhysicsAssetFactoryNode: UInterchangePhysicsAssetFactoryNode;

declare interface UInterchangePointLightFactoryNode extends UInterchangeLightFactoryNode {
    SetCustomUseInverseSquaredFalloff(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomLightFalloffExponent(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomUseInverseSquaredFalloff(AttributeValue: boolean): boolean;
    GetCustomLightFalloffExponent(AttributeValue: number): boolean;
}
declare const UInterchangePointLightFactoryNode: UInterchangePointLightFactoryNode;

declare interface UInterchangeRectLightFactoryNode extends UInterchangeLightFactoryNode {
    SetCustomSourceWidth(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomSourceHeight(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomSourceWidth(AttributeValue: number): boolean;
    GetCustomSourceHeight(AttributeValue: number): boolean;
}
declare const UInterchangeRectLightFactoryNode: UInterchangeRectLightFactoryNode;

declare interface UInterchangeSceneImportAssetFactoryNode extends UInterchangeFactoryBaseNode {

}
declare const UInterchangeSceneImportAssetFactoryNode: UInterchangeSceneImportAssetFactoryNode;

declare interface UInterchangeSceneVariantSetsFactoryNode extends UInterchangeFactoryBaseNode {
    RemoveCustomVariantSetUid(VariantUid: string | FString): boolean;
    GetCustomVariantSetUids(OutVariantUids: string | FString[]): void;
    GetCustomVariantSetUidCount(): number;
    GetCustomVariantSetUid(Index: number, OutVariantUid: string | FString): void;
    AddCustomVariantSetUid(VariantUid: string | FString): boolean;
}
declare const UInterchangeSceneVariantSetsFactoryNode: UInterchangeSceneVariantSetsFactoryNode;

declare interface UInterchangeSkeletalMeshFactoryNode extends UInterchangeMeshFactoryNode {
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
    InitializeSkeletalMeshNode(UniqueID: string | FString, DisplayLabel: string | FString, InAssetClass: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
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
}
declare const UInterchangeSkeletalMeshFactoryNode: UInterchangeSkeletalMeshFactoryNode;

declare interface UInterchangeSkeletalMeshLodDataNode extends UInterchangeFactoryBaseNode {
    SetCustomSkeletonUid(AttributeValue: string | FString): boolean;
    RemoveMeshUid(MeshName: string | FString): boolean;
    RemoveAllMeshes(): boolean;
    GetMeshUidsCount(): number;
    GetMeshUids(OutMeshNames: string | FString[]): void;
    GetCustomSkeletonUid(AttributeValue: string | FString): boolean;
    AddMeshUid(MeshName: string | FString): boolean;
}
declare const UInterchangeSkeletalMeshLodDataNode: UInterchangeSkeletalMeshLodDataNode;

declare interface UInterchangeSkeletonFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomUseTimeZeroForBindPose(AttributeValue: boolean): boolean;
    SetCustomSkeletalMeshFactoryNodeUid(AttributeValue: string | FString): boolean;
    SetCustomRootJointUid(AttributeValue: string | FString): boolean;
    InitializeSkeletonNode(UniqueID: string | FString, DisplayLabel: string | FString, InAssetClass: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetCustomUseTimeZeroForBindPose(AttributeValue: boolean): boolean;
    GetCustomSkeletalMeshFactoryNodeUid(AttributeValue: string | FString): boolean;
    GetCustomRootJointUid(AttributeValue: string | FString): boolean;
}
declare const UInterchangeSkeletonFactoryNode: UInterchangeSkeletonFactoryNode;

declare interface UInterchangeSparseVolumeTextureFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomAttributesBFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
    SetCustomAttributesBChannelZ(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesBChannelY(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesBChannelX(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesBChannelW(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesAFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
    SetCustomAttributesAChannelZ(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesAChannelY(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesAChannelX(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAttributesAChannelW(GridNameAndComponentIndex: string | FString): boolean;
    SetCustomAnimationID(InAnimationID: string | FString): boolean;
    GetCustomAttributesBFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
    GetCustomAttributesBChannelZ(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesBChannelY(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesBChannelX(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesBChannelW(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesAFormat(Format: EInterchangeSparseVolumeTextureFormat): boolean;
    GetCustomAttributesAChannelZ(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesAChannelY(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesAChannelX(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAttributesAChannelW(GridNameAndComponentIndex: string | FString): boolean;
    GetCustomAnimationID(OutAnimationID: string | FString): boolean;
}
declare const UInterchangeSparseVolumeTextureFactoryNode: UInterchangeSparseVolumeTextureFactoryNode;

declare interface UInterchangeSpecularProfileFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomTexture(TextureUid: string | FString): boolean;
    SetCustomFormat(Format: ESpecularProfileFormat): boolean;
    GetCustomTexture(TextureUid: string | FString): boolean;
    GetCustomFormat(Format: ESpecularProfileFormat): boolean;
}
declare const UInterchangeSpecularProfileFactoryNode: UInterchangeSpecularProfileFactoryNode;

declare interface UInterchangeSpotLightFactoryNode extends UInterchangePointLightFactoryNode {
    SetCustomOuterConeAngle(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomInnerConeAngle(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomOuterConeAngle(AttributeValue: number): boolean;
    GetCustomInnerConeAngle(AttributeValue: number): boolean;
}
declare const UInterchangeSpotLightFactoryNode: UInterchangeSpotLightFactoryNode;

declare interface UInterchangeStandardCameraFactoryNode extends UInterchangeActorFactoryNode {
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
}
declare const UInterchangeStandardCameraFactoryNode: UInterchangeStandardCameraFactoryNode;

declare interface UInterchangeStaticMeshFactoryNode extends UInterchangeMeshFactoryNode {
    SetLODScreenSizes(InLODScreenSizes: TArray<number>): boolean;
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
    RemoveSocketUd(SocketUid: string | FString): boolean;
    InitializeStaticMeshNode(UniqueID: string | FString, DisplayLabel: string | FString, InAssetClass: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetSocketUids(OutSocketUids: string | FString[]): void;
    GetSocketUidCount(): number;
    GetLODScreenSizes(OutLODScreenSizes: TArray<number>): void;
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
    AddSocketUids(InSocketUids: string | FString[]): boolean;
    AddSocketUid(SocketUid: string | FString): boolean;
}
declare const UInterchangeStaticMeshFactoryNode: UInterchangeStaticMeshFactoryNode;

declare interface UInterchangeStaticMeshLodDataNode extends UInterchangeFactoryBaseNode {
    SetOneConvexHullPerUCX(AttributeValue: boolean): boolean;
    SetImportCollisionType(AttributeValue: EInterchangeMeshCollision): boolean;
    SetImportCollision(AttributeValue: boolean): boolean;
    SetForceCollisionPrimitiveGeneration(bGenerate: boolean): boolean;
    RemoveSphereCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
    RemoveMeshUid(MeshName: string | FString): boolean;
    RemoveConvexCollisionMeshUid(MeshName: string | FString): boolean;
    RemoveCapsuleCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
    RemoveBoxCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
    RemoveAllSphereCollisionMeshes(): boolean;
    RemoveAllMeshes(): boolean;
    RemoveAllConvexCollisionMeshes(): boolean;
    RemoveAllCapsuleCollisionMeshes(): boolean;
    RemoveAllBoxCollisionMeshes(): boolean;
    GetSphereCollisionMeshUidsCount(): number;
    GetSphereCollisionMeshUids(OutMeshNames: string | FString[]): void;
    GetSphereCollisionMeshMap(): [Record<FString, FString>];
    GetSphereColliderRenderMeshUid(InColliderMeshUid: string | FString, OutRenderMeshUid: string | FString): void;
    GetOneConvexHullPerUCX(AttributeValue: boolean): boolean;
    GetMeshUidsCount(): number;
    GetMeshUids(OutMeshNames: string | FString[]): void;
    GetImportCollisionType(AttributeValue: EInterchangeMeshCollision): boolean;
    GetImportCollision(AttributeValue: boolean): boolean;
    GetForceCollisionPrimitiveGeneration(bGenerate: boolean): boolean;
    GetConvexCollisionMeshUidsCount(): number;
    GetConvexCollisionMeshUids(OutMeshNames: string | FString[]): void;
    GetConvexCollisionMeshMap(): [Record<FString, FString>];
    GetConvexColliderRenderMeshUid(InColliderMeshUid: string | FString, OutRenderMeshUid: string | FString): void;
    GetCapsuleCollisionMeshUidsCount(): number;
    GetCapsuleCollisionMeshUids(OutMeshNames: string | FString[]): void;
    GetCapsuleCollisionMeshMap(): [Record<FString, FString>];
    GetCapsuleColliderRenderMeshUid(InColliderMeshUid: string | FString, OutRenderMeshUid: string | FString): void;
    GetBoxCollisionMeshUidsCount(): number;
    GetBoxCollisionMeshUids(OutMeshNames: string | FString[]): void;
    GetBoxCollisionMeshMap(): [Record<FString, FString>];
    GetBoxColliderRenderMeshUid(InColliderMeshUid: string | FString, OutRenderMeshUid: string | FString): void;
    AddSphereCollisionMeshUids(ColliderMeshUid: string | FString, RenderMeshUid: string | FString): boolean;
    AddSphereCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
    AddMeshUid(MeshName: string | FString): boolean;
    AddConvexCollisionMeshUids(ColliderMeshUid: string | FString, RenderMeshUid: string | FString): boolean;
    AddConvexCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
    AddCapsuleCollisionMeshUids(ColliderMeshUid: string | FString, RenderMeshUid: string | FString): boolean;
    AddCapsuleCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
    AddBoxCollisionMeshUids(ColliderMeshUid: string | FString, RenderMeshUid: string | FString): boolean;
    AddBoxCollisionMeshUid(ColliderMeshUid: string | FString): boolean;
}
declare const UInterchangeStaticMeshLodDataNode: UInterchangeStaticMeshLodDataNode;

declare interface UInterchangeTexture2DArrayFactoryNode extends UInterchangeTextureFactoryNode {
    SetCustomAddressZ(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    GetCustomAddressZ(AttributeValue: uint8): boolean;
    GetCustomAddressY(AttributeValue: uint8): boolean;
    GetCustomAddressX(AttributeValue: uint8): boolean;
}
declare const UInterchangeTexture2DArrayFactoryNode: UInterchangeTexture2DArrayFactoryNode;

declare interface UInterchangeTexture2DFactoryNode extends UInterchangeTextureFactoryNode {
    SetSourceBlocks(InSourceBlocks: Record<number, FString>): void;
    SetSourceBlockByCoordinates(X: number, Y: number, InSourceFile: string | FString): void;
    SetSourceBlock(BlockIndex: number, InSourceFile: string | FString): void;
    SetCustomAddressY(AttributeValue: TextureAddress, bAddApplyDelegate: boolean): boolean;
    SetCustomAddressX(AttributeValue: TextureAddress, bAddApplyDelegate: boolean): boolean;
    GetSourceBlocks(): [Record<number, FString>];
    GetSourceBlockByCoordinates(X: number, Y: number, OutSourceFile: string | FString): boolean;
    GetSourceBlock(BlockIndex: number, OutSourceFile: string | FString): boolean;
    GetCustomAddressY(AttributeValue: TextureAddress): boolean;
    GetCustomAddressX(AttributeValue: TextureAddress): boolean;
}
declare const UInterchangeTexture2DFactoryNode: UInterchangeTexture2DFactoryNode;

declare interface UInterchangeTextureCubeArrayFactoryNode extends UInterchangeTextureFactoryNode {

}
declare const UInterchangeTextureCubeArrayFactoryNode: UInterchangeTextureCubeArrayFactoryNode;

declare interface UInterchangeTextureCubeFactoryNode extends UInterchangeTextureFactoryNode {

}
declare const UInterchangeTextureCubeFactoryNode: UInterchangeTextureCubeFactoryNode;

declare interface UInterchangeTextureFactoryNode extends UInterchangeFactoryBaseNode {
    SetCustomVirtualTextureStreaming(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomTranslatedTextureNodeUid(AttributeValue: string | FString): boolean;
    SetCustomSRGB(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomPreferCompressedSourceData(AttributeValue: boolean): boolean;
    SetCustomPowerOfTwoMode(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomPaddingColor(AttributeValue: FColor, bAddApplyDelegate: boolean): boolean;
    SetCustomMipLoadOptions(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomMipGenSettings(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomMaxTextureSize(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomLossyCompressionAmount(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomLODGroup(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomLODBias(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomFilter(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomDownscaleOptions(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomDownscale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomDeferCompression(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomCompressionSettings(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomCompressionQuality(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
    SetCustomCompressionNoAlpha(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomCompositeTextureMode(AttributeValue: uint8, bAddApplyDelegate: boolean): boolean;
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
    InitializeTextureNode(UniqueID: string | FString, DisplayLabel: string | FString, InAssetName: string | FString, NodeContainer: UInterchangeBaseNodeContainer): void;
    GetCustomVirtualTextureStreaming(AttributeValue: boolean): boolean;
    GetCustomTranslatedTextureNodeUid(AttributeValue: string | FString): boolean;
    GetCustomSRGB(AttributeValue: boolean): boolean;
    GetCustomPreferCompressedSourceData(AttributeValue: boolean): boolean;
    GetCustomPowerOfTwoMode(AttributeValue: uint8): boolean;
    GetCustomPaddingColor(AttributeValue: FColor): boolean;
    GetCustomMipLoadOptions(AttributeValue: uint8): boolean;
    GetCustomMipGenSettings(AttributeValue: uint8): boolean;
    GetCustomMaxTextureSize(AttributeValue: number): boolean;
    GetCustomLossyCompressionAmount(AttributeValue: uint8): boolean;
    GetCustomLODGroup(AttributeValue: uint8): boolean;
    GetCustomLODBias(AttributeValue: number): boolean;
    GetCustomFilter(AttributeValue: uint8): boolean;
    GetCustomDownscaleOptions(AttributeValue: uint8): boolean;
    GetCustomDownscale(AttributeValue: number): boolean;
    GetCustomDeferCompression(AttributeValue: boolean): boolean;
    GetCustomCompressionSettings(AttributeValue: uint8): boolean;
    GetCustomCompressionQuality(AttributeValue: uint8): boolean;
    GetCustomCompressionNoAlpha(AttributeValue: boolean): boolean;
    GetCustomCompositeTextureMode(AttributeValue: uint8): boolean;
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
}
declare const UInterchangeTextureFactoryNode: UInterchangeTextureFactoryNode;

declare interface UInterchangeTextureLightProfileFactoryNode extends UInterchangeTexture2DFactoryNode {
    SetCustomTextureMultiplier(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomBrightness(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    GetCustomTextureMultiplier(AttributeValue: number): boolean;
    GetCustomBrightness(AttributeValue: number): boolean;
}
declare const UInterchangeTextureLightProfileFactoryNode: UInterchangeTextureLightProfileFactoryNode;

declare interface UInterchangeVolumeTextureFactoryNode extends UInterchangeTextureFactoryNode {

}
declare const UInterchangeVolumeTextureFactoryNode: UInterchangeVolumeTextureFactoryNode;

