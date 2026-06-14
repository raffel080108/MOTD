declare interface FInterchangeAnimationPayLoadKey {
    UniqueID: FString;
    Type: EInterchangeAnimationPayLoadType;
}
declare const FInterchangeAnimationPayLoadKey: FInterchangeAnimationPayLoadKey;

declare interface FInterchangeMeshPayLoadKey {
    UniqueID: FString;
    Type: EInterchangeMeshPayLoadType;
    FrameNumber: number;
}
declare const FInterchangeMeshPayLoadKey: FInterchangeMeshPayLoadKey;

declare interface UInterchangeAnimationTrackBaseNode extends UInterchangeBaseNode {
    SetCustomCompletionMode(AttributeValue: number): boolean;
    GetCustomCompletionMode(AttributeValue: number): boolean;
}
declare const UInterchangeAnimationTrackBaseNode: UInterchangeAnimationTrackBaseNode;

declare interface UInterchangeAnimationTrackNode extends UInterchangeAnimationTrackBaseNode {
    SetCustomPropertyTrack(PropertyTrack: EInterchangePropertyTracks): boolean;
    SetCustomFrameCount(AttributeValue: number): boolean;
    SetCustomAnimationPayloadKey(InUniqueId: string | FString, InType: EInterchangeAnimationPayLoadType): boolean;
    SetCustomActorDependencyUid(DependencyUid: string | FString): boolean;
    GetCustomPropertyTrack(PropertyTrack: EInterchangePropertyTracks): boolean;
    GetCustomFrameCount(AttributeValue: number): boolean;
    GetCustomAnimationPayloadKey(AnimationPayLoadKey: FInterchangeAnimationPayLoadKey): boolean;
    GetCustomActorDependencyUid(DependencyUid: string | FString): boolean;
}
declare const UInterchangeAnimationTrackNode: UInterchangeAnimationTrackNode;

declare interface UInterchangeAnimationTrackSetInstanceNode extends UInterchangeAnimationTrackBaseNode {
    SetCustomTrackSetDependencyUid(AttributeValue: string | FString): boolean;
    SetCustomTimeScale(AttributeValue: number): boolean;
    SetCustomStartFrame(AttributeValue: number): boolean;
    SetCustomDuration(AttributeValue: number): boolean;
    GetCustomTrackSetDependencyUid(AttributeValue: string | FString): boolean;
    GetCustomTimeScale(AttributeValue: number): boolean;
    GetCustomStartFrame(AttributeValue: number): boolean;
    GetCustomDuration(AttributeValue: number): boolean;
}
declare const UInterchangeAnimationTrackSetInstanceNode: UInterchangeAnimationTrackSetInstanceNode;

declare interface UInterchangeAnimationTrackSetNode extends UInterchangeBaseNode {
    SetCustomFrameRate(AttributeValue: number): boolean;
    RemoveCustomAnimationTrackUid(AnimationTrackUid: string | FString): boolean;
    GetCustomFrameRate(AttributeValue: number): boolean;
    GetCustomAnimationTrackUids(OutAnimationTrackUids: string | FString[]): void;
    GetCustomAnimationTrackUidCount(): number;
    GetCustomAnimationTrackUid(Index: number, OutAnimationTrackUid: string | FString): void;
    AddCustomAnimationTrackUid(AnimationTrackUid: string | FString): boolean;
}
declare const UInterchangeAnimationTrackSetNode: UInterchangeAnimationTrackSetNode;

declare interface UInterchangeBaseLightNode extends UInterchangeBaseNode {
    SetCustomUseTemperature(AttributeValue: boolean): boolean;
    SetCustomTemperature(AttributeValue: number): boolean;
    SetCustomLightColor(AttributeValue: FLinearColor): boolean;
    SetCustomIntensity(AttributeValue: number): boolean;
    GetCustomUseTemperature(AttributeValue: boolean): boolean;
    GetCustomTemperature(AttributeValue: number): boolean;
    GetCustomLightColor(AttributeValue: FLinearColor): boolean;
    GetCustomIntensity(AttributeValue: number): boolean;
}
declare const UInterchangeBaseLightNode: UInterchangeBaseLightNode;

declare interface UInterchangeDecalMaterialNode extends UInterchangeShaderNode {

}
declare const UInterchangeDecalMaterialNode: UInterchangeDecalMaterialNode;

declare interface UInterchangeDecalNode extends UInterchangeBaseNode {
    SetCustomSortOrder(AttributeValue: number): boolean;
    SetCustomDecalSize(AttributeValue: FVector): boolean;
    SetCustomDecalMaterialPathName(AttributeValue: string | FString): boolean;
    GetCustomSortOrder(AttributeValue: number): boolean;
    GetCustomDecalSize(AttributeValue: FVector): boolean;
    GetCustomDecalMaterialPathName(AttributeValue: string | FString): boolean;
}
declare const UInterchangeDecalNode: UInterchangeDecalNode;

declare interface UInterchangeDirectionalLightNode extends UInterchangeBaseLightNode {

}
declare const UInterchangeDirectionalLightNode: UInterchangeDirectionalLightNode;

declare interface UInterchangeFunctionCallShaderNode extends UInterchangeShaderNode {
    SetCustomMaterialFunction(AttributeValue: string | FString): boolean;
    GetCustomMaterialFunction(AttributeValue: string | FString): boolean;
}
declare const UInterchangeFunctionCallShaderNode: UInterchangeFunctionCallShaderNode;

declare interface UInterchangeGeometryCacheNode extends UInterchangeMeshNode {
    SetCustomStartFrame(AttributeValue: number): boolean;
    SetCustomHasConstantTopology(AttributeValue: boolean): boolean;
    SetCustomFrameRate(AttributeValue: number): boolean;
    SetCustomEndFrame(AttributeValue: number): boolean;
    GetCustomStartFrame(AttributeValue: number): boolean;
    GetCustomHasConstantTopology(AttributeValue: boolean): boolean;
    GetCustomFrameRate(AttributeValue: number): boolean;
    GetCustomEndFrame(AttributeValue: number): boolean;
}
declare const UInterchangeGeometryCacheNode: UInterchangeGeometryCacheNode;

declare interface UInterchangeLightNode extends UInterchangeBaseLightNode {
    SetCustomUseIESBrightness(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
    SetCustomRotation(AttributeValue: FRotator, bAddApplyDelegate: boolean): boolean;
    SetCustomIntensityUnits(AttributeValue: EInterchangeLightUnits): boolean;
    SetCustomIESTexture(AttributeValue: string | FString): boolean;
    SetCustomIESBrightnessScale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomAttenuationRadius(AttributeValue: number): boolean;
    GetCustomUseIESBrightness(AttributeValue: boolean): boolean;
    GetCustomRotation(AttributeValue: FRotator): boolean;
    GetCustomIntensityUnits(AttributeValue: EInterchangeLightUnits): boolean;
    GetCustomIESTexture(AttributeValue: string | FString): boolean;
    GetCustomIESBrightnessScale(AttributeValue: number): boolean;
    GetCustomAttenuationRadius(AttributeValue: number): boolean;
}
declare const UInterchangeLightNode: UInterchangeLightNode;

declare interface UInterchangeMaterialInstanceNode extends UInterchangeBaseNode {
    SetCustomParent(AttributeValue: string | FString): boolean;
    GetVectorParameterValue(ParameterName: string | FString, AttributeValue: FLinearColor): boolean;
    GetTextureParameterValue(ParameterName: string | FString, AttributeValue: string | FString): boolean;
    GetStaticSwitchParameterValue(ParameterName: string | FString, AttributeValue: boolean): boolean;
    GetScalarParameterValue(ParameterName: string | FString, AttributeValue: number): boolean;
    GetCustomParent(AttributeValue: string | FString): boolean;
    AddVectorParameterValue(ParameterName: string | FString, AttributeValue: FLinearColor): boolean;
    AddTextureParameterValue(ParameterName: string | FString, AttributeValue: string | FString): boolean;
    AddStaticSwitchParameterValue(ParameterName: string | FString, AttributeValue: boolean): boolean;
    AddScalarParameterValue(ParameterName: string | FString, AttributeValue: number): boolean;
}
declare const UInterchangeMaterialInstanceNode: UInterchangeMaterialInstanceNode;

declare interface UInterchangeMaterialReferenceNode extends UInterchangeBaseNode {
    SetCustomContentPath(AttributeValue: string | FString): boolean;
    GetCustomContentPath(AttributeValue: string | FString): boolean;
}
declare const UInterchangeMaterialReferenceNode: UInterchangeMaterialReferenceNode;

declare interface UInterchangeMeshNode extends UInterchangeBaseNode {
    SetSlotMaterialDependencyUid(slotName: string | FString, MaterialDependencyUid: string | FString): boolean;
    SetSkinnedMesh(bIsSkinnedMesh: boolean): boolean;
    SetSkeletonDependencyUid(DependencyUid: string | FString): boolean;
    SetSceneInstanceUid(DependencyUid: string | FString): boolean;
    SetPayLoadKey(PayloadKey: string | FString, PayLoadType: EInterchangeMeshPayLoadType): void;
    SetMorphTargetName(MorphTargetName: string | FString): boolean;
    SetMorphTargetDependencyUid(DependencyUid: string | FString): boolean;
    SetMorphTarget(bIsMorphTarget: boolean): boolean;
    SetCustomVertexCount(AttributeValue: number): boolean;
    SetCustomUVCount(AttributeValue: number): boolean;
    SetCustomPolygonCount(AttributeValue: number): boolean;
    SetCustomHasVertexTangent(AttributeValue: boolean): boolean;
    SetCustomHasVertexNormal(AttributeValue: boolean): boolean;
    SetCustomHasVertexColor(AttributeValue: boolean): boolean;
    SetCustomHasVertexBinormal(AttributeValue: boolean): boolean;
    SetCustomHasSmoothGroup(AttributeValue: boolean): boolean;
    SetCustomCollisionType(AttributeValue: EInterchangeMeshCollision): boolean;
    SetCustomBoundingBox(AttributeValue: FBox): boolean;
    RemoveSlotMaterialDependencyUid(slotName: string | FString): boolean;
    RemoveSkeletonDependencyUid(DependencyUid: string | FString): boolean;
    RemoveSceneInstanceUid(DependencyUid: string | FString): boolean;
    RemoveMorphTargetDependencyUid(DependencyUid: string | FString): boolean;
    IsSkinnedMesh(): boolean;
    IsMorphTarget(): boolean;
    GetSlotMaterialDependencyUid(slotName: string | FString, OutMaterialDependency: string | FString): boolean;
    GetSlotMaterialDependencies(OutMaterialDependencies: Record<FString, FString>): void;
    GetSkeletonDependency(Index: number, OutDependency: string | FString): void;
    GetSkeletonDependencies(OutDependencies: string | FString[]): void;
    GetSkeletonDependeciesCount(): number;
    GetSceneInstanceUidsCount(): number;
    GetSceneInstanceUids(OutDependencies: string | FString[]): void;
    GetSceneInstanceUid(Index: number, OutDependency: string | FString): void;
    GetMorphTargetName(OutMorphTargetName: string | FString): boolean;
    GetMorphTargetDependency(Index: number, OutDependency: string | FString): void;
    GetMorphTargetDependencies(OutDependencies: string | FString[]): void;
    GetMorphTargetDependeciesCount(): number;
    GetCustomVertexCount(AttributeValue: number): boolean;
    GetCustomUVCount(AttributeValue: number): boolean;
    GetCustomPolygonCount(AttributeValue: number): boolean;
    GetCustomHasVertexTangent(AttributeValue: boolean): boolean;
    GetCustomHasVertexNormal(AttributeValue: boolean): boolean;
    GetCustomHasVertexColor(AttributeValue: boolean): boolean;
    GetCustomHasVertexBinormal(AttributeValue: boolean): boolean;
    GetCustomHasSmoothGroup(AttributeValue: boolean): boolean;
    GetCustomCollisionType(AttributeValue: EInterchangeMeshCollision): boolean;
    GetCustomBoundingBox(AttributeValue: FBox): boolean;
}
declare const UInterchangeMeshNode: UInterchangeMeshNode;

declare interface UInterchangePhysicalCameraNode extends UInterchangeBaseNode {
    SetCustomSensorWidth(AttributeValue: number): boolean;
    SetCustomSensorHeight(AttributeValue: number): boolean;
    SetCustomFocalLength(AttributeValue: number): boolean;
    SetCustomEnableDepthOfField(AttributeValue: boolean): boolean;
    GetCustomSensorWidth(AttributeValue: number): boolean;
    GetCustomSensorHeight(AttributeValue: number): boolean;
    GetCustomFocalLength(AttributeValue: number): boolean;
    GetCustomEnableDepthOfField(AttributeValue: boolean): boolean;
}
declare const UInterchangePhysicalCameraNode: UInterchangePhysicalCameraNode;

declare interface UInterchangePointLightNode extends UInterchangeLightNode {
    SetCustomUseInverseSquaredFalloff(AttributeValue: boolean): boolean;
    SetCustomLightFalloffExponent(AttributeValue: number): boolean;
    GetCustomUseInverseSquaredFalloff(AttributeValue: boolean): boolean;
    GetCustomLightFalloffExponent(AttributeValue: number): boolean;
}
declare const UInterchangePointLightNode: UInterchangePointLightNode;

declare interface UInterchangeRectLightNode extends UInterchangeLightNode {
    SetCustomSourceWidth(AttributeValue: number): boolean;
    SetCustomSourceHeight(AttributeValue: number): boolean;
    GetCustomSourceWidth(AttributeValue: number): boolean;
    GetCustomSourceHeight(AttributeValue: number): boolean;
}
declare const UInterchangeRectLightNode: UInterchangeRectLightNode;

declare interface UInterchangeSceneNode extends UInterchangeBaseNode {
    SetSlotMaterialDependencyUid(slotName: string | FString, MaterialDependencyUid: string | FString): boolean;
    SetMorphTargetCurveWeight(MorphTargetName: string | FString, Weight: number): boolean;
    SetGlobalBindPoseReferenceForMeshUIDs(GlobalBindPoseReferenceForMeshUIDs: Record<FString, FMatrix>): void;
    SetCustomTimeZeroLocalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform, bResetCache: boolean): boolean;
    SetCustomPivotNodeTransform(AttributeValue: FTransform): boolean;
    SetCustomLocalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform, bResetCache: boolean): boolean;
    SetCustomHasBindPose(bHasBindPose: boolean): boolean;
    SetCustomGeometricTransform(AttributeValue: FTransform): boolean;
    SetCustomComponentVisibility(bInIsVisible: boolean): boolean;
    SetCustomBindPoseLocalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform, bResetCache: boolean): boolean;
    SetCustomAssetInstanceUid(AttributeValue: string | FString): boolean;
    SetCustomAnimationAssetUidToPlay(AttributeValue: string | FString): boolean;
    SetCustomActorVisibility(bInIsVisible: boolean): boolean;
    SetAnimationCurveTypeForCurveName(CurveName: string | FString, AnimationCurveType: EInterchangeAnimationPayLoadType): boolean;
    RemoveSpecializedType(SpecializedType: string | FString): boolean;
    RemoveSlotMaterialDependencyUid(slotName: string | FString): boolean;
    IsSpecializedTypeContains(SpecializedType: string | FString): boolean;
    GetSpecializedTypes(OutSpecializedTypes: string | FString[]): void;
    GetSpecializedTypeCount(): number;
    GetSpecializedType(Index: number, OutSpecializedType: string | FString): void;
    GetSlotMaterialDependencyUid(slotName: string | FString, OutMaterialDependency: string | FString): boolean;
    GetSlotMaterialDependencies(OutMaterialDependencies: Record<FString, FString>): void;
    GetMorphTargetCurveWeights(OutMorphTargetCurveWeights: Record<FString, number>): void;
    GetGlobalBindPoseReferenceForMeshUID(MeshUid: string | FString, GlobalBindPoseReference: FMatrix): boolean;
    GetCustomTimeZeroLocalTransform(AttributeValue: FTransform): boolean;
    GetCustomTimeZeroGlobalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, GlobalOffsetTransform: FTransform, AttributeValue: FTransform, bForceRecache: boolean): boolean;
    GetCustomPivotNodeTransform(AttributeValue: FTransform): boolean;
    GetCustomLocalTransform(AttributeValue: FTransform): boolean;
    GetCustomHasBindPose(bHasBindPose: boolean): boolean;
    GetCustomGlobalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, GlobalOffsetTransform: FTransform, AttributeValue: FTransform, bForceRecache: boolean): boolean;
    GetCustomGeometricTransform(AttributeValue: FTransform): boolean;
    GetCustomComponentVisibility(bOutIsVisible: boolean): boolean;
    GetCustomBindPoseLocalTransform(AttributeValue: FTransform): boolean;
    GetCustomBindPoseGlobalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, GlobalOffsetTransform: FTransform, AttributeValue: FTransform, bForceRecache: boolean): boolean;
    GetCustomAssetInstanceUid(AttributeValue: string | FString): boolean;
    GetCustomAnimationAssetUidToPlay(AttributeValue: string | FString): boolean;
    GetCustomActorVisibility(bOutIsVisible: boolean): boolean;
    GetAnimationCurveTypeForCurveName(CurveName: string | FString, OutCurveAnimationType: EInterchangeAnimationPayLoadType): boolean;
    AddSpecializedType(SpecializedType: string | FString): boolean;
}
declare const UInterchangeSceneNode: UInterchangeSceneNode;

declare interface UInterchangeSceneVariantSetsNode extends UInterchangeBaseNode {
    RemoveCustomVariantSetUid(VariantUid: string | FString): boolean;
    GetCustomVariantSetUids(OutVariantUids: string | FString[]): void;
    GetCustomVariantSetUidCount(): number;
    GetCustomVariantSetUid(Index: number, OutVariantUid: string | FString): void;
    AddCustomVariantSetUid(VariantUid: string | FString): boolean;
}
declare const UInterchangeSceneVariantSetsNode: UInterchangeSceneVariantSetsNode;

declare interface UInterchangeShaderGraphNode extends UInterchangeShaderNode {
    SetCustomTwoSidedTransmission(AttributeValue: boolean): boolean;
    SetCustomTwoSided(AttributeValue: boolean): boolean;
    SetCustomScreenSpaceReflections(AttributeValue: boolean): boolean;
    SetCustomOpacityMaskClipValue(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
    SetCustomIsAShaderFunction(AttributeValue: boolean): boolean;
    SetCustomDisplacementCenterMode(AttributeValue: number): boolean;
    SetCustomBlendMode(AttributeValue: number): boolean;
    GetCustomTwoSidedTransmission(AttributeValue: boolean): boolean;
    GetCustomTwoSided(AttributeValue: boolean): boolean;
    GetCustomScreenSpaceReflections(AttributeValue: boolean): boolean;
    GetCustomOpacityMaskClipValue(AttributeValue: number): boolean;
    GetCustomIsAShaderFunction(AttributeValue: boolean): boolean;
    GetCustomDisplacementCenterMode(AttributeValue: number): boolean;
    GetCustomBlendMode(AttributeValue: number): boolean;
}
declare const UInterchangeShaderGraphNode: UInterchangeShaderGraphNode;

declare interface UInterchangeShaderNode extends UInterchangeBaseNode {
    SetCustomShaderType(AttributeValue: string | FString): boolean;
    GetCustomShaderType(AttributeValue: string | FString): boolean;
    AddStringInput(InputName: string | FString, AttributeValue: string | FString, bIsAParameter: boolean): boolean;
    AddLinearColorInput(InputName: string | FString, AttributeValue: FLinearColor, bIsAParameter: boolean): boolean;
    AddFloatInput(InputName: string | FString, AttributeValue: number, bIsAParameter: boolean): boolean;
}
declare const UInterchangeShaderNode: UInterchangeShaderNode;

declare interface UInterchangeShaderPortsAPI extends UObject {
    MakeInputValueKey(InputName: string | FString): FString;
    MakeInputParameterKey(InputName: string | FString): FString;
    MakeInputName(InputKey: string | FString): FString;
    MakeInputConnectionKey(InputName: string | FString): FString;
    IsAParameter(AttributeKey: string | FString): boolean;
    IsAnInput(AttributeKey: string | FString): boolean;
    HasParameter(InterchangeNode: UInterchangeBaseNode, InInputName: FName): boolean;
    HasInput(InterchangeNode: UInterchangeBaseNode, InInputName: FName): boolean;
    GetInputConnection(InterchangeNode: UInterchangeBaseNode, InputName: string | FString, OutExpressionUid: string | FString, OutputName: string | FString): boolean;
    GatherInputs(InterchangeNode: UInterchangeBaseNode, OutInputNames: string | FString[]): void;
    ConnectOuputToInputByName(InterchangeNode: UInterchangeBaseNode, InputName: string | FString, ExpressionUid: string | FString, OutputName: string | FString): boolean;
    ConnectOuputToInputByIndex(InterchangeNode: UInterchangeBaseNode, InputName: string | FString, ExpressionUid: string | FString, OutputIndex: number): boolean;
    ConnectDefaultOuputToInput(InterchangeNode: UInterchangeBaseNode, InputName: string | FString, ExpressionUid: string | FString): boolean;
}
declare const UInterchangeShaderPortsAPI: UInterchangeShaderPortsAPI;

declare interface UInterchangeSkeletalAnimationTrackNode extends UInterchangeAnimationTrackBaseNode {
    SetCustomSourceTimelineAnimationStopTime(StopTime: number): boolean;
    SetCustomSourceTimelineAnimationStartTime(StartTime: number): boolean;
    SetCustomSkeletonNodeUid(AttributeValue: string | FString): boolean;
    SetCustomAnimationStopTime(StopTime: number): boolean;
    SetCustomAnimationStartTime(StartTime: number): boolean;
    SetCustomAnimationSampleRate(SampleRate: number): boolean;
    SetAnimationPayloadKeyForSceneNodeUid(SceneNodeUid: string | FString, InUniqueId: string | FString, InType: EInterchangeAnimationPayLoadType): boolean;
    SetAnimationPayloadKeyForMorphTargetNodeUid(MorphTargetNodeUid: string | FString, InUniqueId: string | FString, InType: EInterchangeAnimationPayLoadType): boolean;
    IsNodeAnimatedWithBakedCurve(SceneNodeUid: string | FString): boolean;
    GetSceneNodeAnimationPayloadKeys(OutSceneNodeAnimationPayloadKeyUids: Record<FString, FString>, OutSceneNodeAnimationPayloadKeyTypes: Record<FString, uint8>): void;
    GetMorphTargetNodeAnimationPayloadKeys(OutMorphTargetNodeAnimationPayloadKeyUids: Record<FString, FString>, OutMorphTargetNodeAnimationPayloadKeyTypes: Record<FString, uint8>): void;
    GetCustomSourceTimelineAnimationStopTime(StopTime: number): boolean;
    GetCustomSourceTimelineAnimationStartTime(StartTime: number): boolean;
    GetCustomSkeletonNodeUid(AttributeValue: string | FString): boolean;
    GetCustomAnimationStopTime(StopTime: number): boolean;
    GetCustomAnimationStartTime(StartTime: number): boolean;
    GetCustomAnimationSampleRate(SampleRate: number): boolean;
}
declare const UInterchangeSkeletalAnimationTrackNode: UInterchangeSkeletalAnimationTrackNode;

declare interface UInterchangeSpecularProfileNode extends UInterchangeBaseNode {
    SetCustomTexture(TextureUid: string | FString): boolean;
    SetCustomFormat(Format: uint8): boolean;
    GetCustomTexture(TextureUid: string | FString): boolean;
    GetCustomFormat(Format: uint8): boolean;
}
declare const UInterchangeSpecularProfileNode: UInterchangeSpecularProfileNode;

declare interface UInterchangeSpotLightNode extends UInterchangePointLightNode {
    SetCustomOuterConeAngle(AttributeValue: number): boolean;
    SetCustomInnerConeAngle(AttributeValue: number): boolean;
    GetCustomOuterConeAngle(AttributeValue: number): boolean;
    GetCustomInnerConeAngle(AttributeValue: number): boolean;
}
declare const UInterchangeSpotLightNode: UInterchangeSpotLightNode;

declare interface UInterchangeStandardCameraNode extends UInterchangeBaseNode {
    SetCustomWidth(AttributeValue: number): boolean;
    SetCustomProjectionMode(AttributeValue: EInterchangeCameraProjectionType): boolean;
    SetCustomNearClipPlane(AttributeValue: number): boolean;
    SetCustomFieldOfView(AttributeValue: number): boolean;
    SetCustomFarClipPlane(AttributeValue: number): boolean;
    SetCustomAspectRatio(AttributeValue: number): boolean;
    GetCustomWidth(AttributeValue: number): boolean;
    GetCustomProjectionMode(AttributeValue: EInterchangeCameraProjectionType): boolean;
    GetCustomNearClipPlane(AttributeValue: number): boolean;
    GetCustomFieldOfView(AttributeValue: number): boolean;
    GetCustomFarClipPlane(AttributeValue: number): boolean;
    GetCustomAspectRatio(AttributeValue: number): boolean;
}
declare const UInterchangeStandardCameraNode: UInterchangeStandardCameraNode;

declare interface UInterchangeTexture2DArrayNode extends UInterchangeTextureNode {

}
declare const UInterchangeTexture2DArrayNode: UInterchangeTexture2DArrayNode;

declare interface UInterchangeTexture2DNode extends UInterchangeTextureNode {
    SetCustomWrapV(AttributeValue: EInterchangeTextureWrapMode): boolean;
    SetCustomWrapU(AttributeValue: EInterchangeTextureWrapMode): boolean;
    GetSourceBlocks(): [Record<number, FString>];
    GetCustomWrapV(AttributeValue: EInterchangeTextureWrapMode): boolean;
    GetCustomWrapU(AttributeValue: EInterchangeTextureWrapMode): boolean;
}
declare const UInterchangeTexture2DNode: UInterchangeTexture2DNode;

declare interface UInterchangeTextureBlurNode extends UInterchangeTexture2DNode {

}
declare const UInterchangeTextureBlurNode: UInterchangeTextureBlurNode;

declare interface UInterchangeTextureCubeArrayNode extends UInterchangeTextureNode {

}
declare const UInterchangeTextureCubeArrayNode: UInterchangeTextureCubeArrayNode;

declare interface UInterchangeTextureCubeNode extends UInterchangeTextureNode {

}
declare const UInterchangeTextureCubeNode: UInterchangeTextureCubeNode;

declare interface UInterchangeTextureLightProfileNode extends UInterchangeTextureNode {

}
declare const UInterchangeTextureLightProfileNode: UInterchangeTextureLightProfileNode;

declare interface UInterchangeTextureNode extends UInterchangeBaseNode {
    SetPayLoadKey(PayloadKey: string | FString): void;
    SetCustomSRGB(AttributeValue: boolean): boolean;
    SetCustomFilter(AttributeValue: EInterchangeTextureFilterMode): boolean;
    SetCustomColorSpace(AttributeValue: EInterchangeTextureColorSpace): boolean;
    SetCustombFlipGreenChannel(AttributeValue: boolean): boolean;
    GetCustomSRGB(AttributeValue: boolean): boolean;
    GetCustomFilter(AttributeValue: EInterchangeTextureFilterMode): boolean;
    GetCustomColorSpace(AttributeValue: EInterchangeTextureColorSpace): boolean;
    GetCustombFlipGreenChannel(AttributeValue: boolean): boolean;
}
declare const UInterchangeTextureNode: UInterchangeTextureNode;

declare interface UInterchangeTransformAnimationTrackNode extends UInterchangeAnimationTrackNode {
    SetCustomUsedChannels(AttributeValue: number): boolean;
    GetCustomUsedChannels(AttributeValue: number): boolean;
}
declare const UInterchangeTransformAnimationTrackNode: UInterchangeTransformAnimationTrackNode;

declare interface UInterchangeVariantSetNode extends UInterchangeBaseNode {
    SetCustomVariantsPayloadKey(PayloadKey: string | FString): boolean;
    SetCustomDisplayText(AttributeValue: string | FString): boolean;
    RemoveCustomDependencyUid(DependencyUid: string | FString): boolean;
    GetCustomVariantsPayloadKey(PayloadKey: string | FString): boolean;
    GetCustomDisplayText(AttributeValue: string | FString): boolean;
    GetCustomDependencyUids(OutDependencyUids: string | FString[]): void;
    GetCustomDependencyUidCount(): number;
    GetCustomDependencyUid(Index: number, OutDependencyUid: string | FString): void;
    AddCustomDependencyUid(DependencyUid: string | FString): boolean;
}
declare const UInterchangeVariantSetNode: UInterchangeVariantSetNode;

declare interface UInterchangeVolumeGridNode extends UInterchangeBaseNode {
    SetCustomNumComponents(NumComponents: number): boolean;
    SetCustomGridTransform(AttributeValue: FTransform): boolean;
    SetCustomGridActiveDimensions(AttributeValue: FIntVector): boolean;
    SetCustomGridActiveAABBMin(AttributeValue: FIntVector): boolean;
    SetCustomGridActiveAABBMax(AttributeValue: FIntVector): boolean;
    SetCustomElementType(AttributeValue: EVolumeGridElementType): boolean;
    GetCustomNumComponents(NumComponents: number): boolean;
    GetCustomGridTransform(AttributeValue: FTransform): boolean;
    GetCustomGridActiveDimensions(AttributeValue: FIntVector): boolean;
    GetCustomGridActiveAABBMin(AttributeValue: FIntVector): boolean;
    GetCustomGridActiveAABBMax(AttributeValue: FIntVector): boolean;
    GetCustomElementType(AttributeValue: EVolumeGridElementType): boolean;
}
declare const UInterchangeVolumeGridNode: UInterchangeVolumeGridNode;

declare interface UInterchangeVolumeNode extends UInterchangeBaseNode {
    SetCustomFileName(AttributeValue: string | FString): boolean;
    SetCustomAnimationID(AttributeValue: string | FString): boolean;
    RemoveCustomGridDependency(DependencyUid: string | FString): boolean;
    RemoveCustomFrameIndexInAnimation(Index: number): boolean;
    GetCustomGridDependency(Index: number, OutDependency: string | FString): void;
    GetCustomGridDependeciesCount(): number;
    GetCustomGridDependecies(OutDependencies: string | FString[]): void;
    GetCustomFrameIndicesInAnimation(OutAnimationIndices: TArray<number>): void;
    GetCustomFrameIndexInAnimation(IndexIndex: number, OutIndex: number): void;
    GetCustomFileName(AttributeValue: string | FString): boolean;
    GetCustomAnimationID(AttributeValue: string | FString): boolean;
    AddCustomGridDependency(DependencyUid: string | FString): boolean;
    AddCustomFrameIndexInAnimation(Index: number): boolean;
}
declare const UInterchangeVolumeNode: UInterchangeVolumeNode;

declare interface UInterchangeVolumeTextureNode extends UInterchangeTextureNode {

}
declare const UInterchangeVolumeTextureNode: UInterchangeVolumeTextureNode;

