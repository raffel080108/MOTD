declare interface FInterchangeAnimationPayLoadKey {
    UniqueID: string;
    Type: EInterchangeAnimationPayLoadType;
}

declare interface FInterchangeMeshPayLoadKey {
    UniqueID: string;
    Type: EInterchangeMeshPayLoadType;
    FrameNumber: number;
}

declare interface UInterchangeAnimationTrackBaseNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeAnimationTrackBaseNode: {
        SetCustomCompletionMode(AttributeValue: number): boolean;
        GetCustomCompletionMode(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeAnimationTrackBaseNode['__static_UInterchangeAnimationTrackBaseNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeAnimationTrackNode extends UInterchangeAnimationTrackBaseNode {
    readonly __static_UInterchangeAnimationTrackNode: {
        SetCustomPropertyTrack(PropertyTrack: EInterchangePropertyTracks): boolean;
        SetCustomFrameCount(AttributeValue: number): boolean;
        SetCustomAnimationPayloadKey(InUniqueId: string, InType: EInterchangeAnimationPayLoadType): boolean;
        SetCustomActorDependencyUid(DependencyUid: string): boolean;
        GetCustomPropertyTrack(PropertyTrack: EInterchangePropertyTracks): boolean;
        GetCustomFrameCount(AttributeValue: number): boolean;
        GetCustomAnimationPayloadKey(AnimationPayLoadKey: FInterchangeAnimationPayLoadKey): boolean;
        GetCustomActorDependencyUid(DependencyUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeAnimationTrackNode['__static_UInterchangeAnimationTrackNode'] &
        UInterchangeAnimationTrackBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeAnimationTrackBaseNode['__propertyRegistry'];
}

declare interface UInterchangeAnimationTrackSetInstanceNode extends UInterchangeAnimationTrackBaseNode {
    readonly __static_UInterchangeAnimationTrackSetInstanceNode: {
        SetCustomTrackSetDependencyUid(AttributeValue: string): boolean;
        SetCustomTimeScale(AttributeValue: number): boolean;
        SetCustomStartFrame(AttributeValue: number): boolean;
        SetCustomDuration(AttributeValue: number): boolean;
        GetCustomTrackSetDependencyUid(AttributeValue: string): boolean;
        GetCustomTimeScale(AttributeValue: number): boolean;
        GetCustomStartFrame(AttributeValue: number): boolean;
        GetCustomDuration(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeAnimationTrackSetInstanceNode['__static_UInterchangeAnimationTrackSetInstanceNode'] &
        UInterchangeAnimationTrackBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeAnimationTrackBaseNode['__propertyRegistry'];
}

declare interface UInterchangeAnimationTrackSetNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeAnimationTrackSetNode: {
        SetCustomFrameRate(AttributeValue: number): boolean;
        RemoveCustomAnimationTrackUid(AnimationTrackUid: string): boolean;
        GetCustomFrameRate(AttributeValue: number): boolean;
        GetCustomAnimationTrackUids(OutAnimationTrackUids: string[]): void;
        GetCustomAnimationTrackUidCount(): number;
        GetCustomAnimationTrackUid(Index: number, OutAnimationTrackUid: string): void;
        AddCustomAnimationTrackUid(AnimationTrackUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeAnimationTrackSetNode['__static_UInterchangeAnimationTrackSetNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeBaseLightNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeBaseLightNode: {
        SetCustomUseTemperature(AttributeValue: boolean): boolean;
        SetCustomTemperature(AttributeValue: number): boolean;
        SetCustomLightColor(AttributeValue: FLinearColor): boolean;
        SetCustomIntensity(AttributeValue: number): boolean;
        GetCustomUseTemperature(AttributeValue: boolean): boolean;
        GetCustomTemperature(AttributeValue: number): boolean;
        GetCustomLightColor(AttributeValue: FLinearColor): boolean;
        GetCustomIntensity(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeBaseLightNode['__static_UInterchangeBaseLightNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeDecalMaterialNode extends UInterchangeShaderNode {
    readonly __staticRegistry: 
        UInterchangeShaderNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeShaderNode['__propertyRegistry'];
}

declare interface UInterchangeDecalNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeDecalNode: {
        SetCustomSortOrder(AttributeValue: number): boolean;
        SetCustomDecalSize(AttributeValue: FVector): boolean;
        SetCustomDecalMaterialPathName(AttributeValue: string): boolean;
        GetCustomSortOrder(AttributeValue: number): boolean;
        GetCustomDecalSize(AttributeValue: FVector): boolean;
        GetCustomDecalMaterialPathName(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeDecalNode['__static_UInterchangeDecalNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeDirectionalLightNode extends UInterchangeBaseLightNode {
    readonly __staticRegistry: 
        UInterchangeBaseLightNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseLightNode['__propertyRegistry'];
}

declare interface UInterchangeFunctionCallShaderNode extends UInterchangeShaderNode {
    readonly __static_UInterchangeFunctionCallShaderNode: {
        SetCustomMaterialFunction(AttributeValue: string): boolean;
        GetCustomMaterialFunction(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeFunctionCallShaderNode['__static_UInterchangeFunctionCallShaderNode'] &
        UInterchangeShaderNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeShaderNode['__propertyRegistry'];
}

declare interface UInterchangeGeometryCacheNode extends UInterchangeMeshNode {
    readonly __static_UInterchangeGeometryCacheNode: {
        SetCustomStartFrame(AttributeValue: number): boolean;
        SetCustomHasConstantTopology(AttributeValue: boolean): boolean;
        SetCustomFrameRate(AttributeValue: number): boolean;
        SetCustomEndFrame(AttributeValue: number): boolean;
        GetCustomStartFrame(AttributeValue: number): boolean;
        GetCustomHasConstantTopology(AttributeValue: boolean): boolean;
        GetCustomFrameRate(AttributeValue: number): boolean;
        GetCustomEndFrame(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeGeometryCacheNode['__static_UInterchangeGeometryCacheNode'] &
        UInterchangeMeshNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeMeshNode['__propertyRegistry'];
}

declare interface UInterchangeLightNode extends UInterchangeBaseLightNode {
    readonly __static_UInterchangeLightNode: {
        SetCustomUseIESBrightness(AttributeValue: boolean, bAddApplyDelegate: boolean): boolean;
        SetCustomRotation(AttributeValue: FRotator, bAddApplyDelegate: boolean): boolean;
        SetCustomIntensityUnits(AttributeValue: EInterchangeLightUnits): boolean;
        SetCustomIESTexture(AttributeValue: string): boolean;
        SetCustomIESBrightnessScale(AttributeValue: number, bAddApplyDelegate: boolean): boolean;
        SetCustomAttenuationRadius(AttributeValue: number): boolean;
        GetCustomUseIESBrightness(AttributeValue: boolean): boolean;
        GetCustomRotation(AttributeValue: FRotator): boolean;
        GetCustomIntensityUnits(AttributeValue: EInterchangeLightUnits): boolean;
        GetCustomIESTexture(AttributeValue: string): boolean;
        GetCustomIESBrightnessScale(AttributeValue: number): boolean;
        GetCustomAttenuationRadius(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeLightNode['__static_UInterchangeLightNode'] &
        UInterchangeBaseLightNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseLightNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialInstanceNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeMaterialInstanceNode: {
        SetCustomParent(AttributeValue: string): boolean;
        GetVectorParameterValue(ParameterName: string, AttributeValue: FLinearColor): boolean;
        GetTextureParameterValue(ParameterName: string, AttributeValue: string): boolean;
        GetStaticSwitchParameterValue(ParameterName: string, AttributeValue: boolean): boolean;
        GetScalarParameterValue(ParameterName: string, AttributeValue: number): boolean;
        GetCustomParent(AttributeValue: string): boolean;
        AddVectorParameterValue(ParameterName: string, AttributeValue: FLinearColor): boolean;
        AddTextureParameterValue(ParameterName: string, AttributeValue: string): boolean;
        AddStaticSwitchParameterValue(ParameterName: string, AttributeValue: boolean): boolean;
        AddScalarParameterValue(ParameterName: string, AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialInstanceNode['__static_UInterchangeMaterialInstanceNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeMaterialReferenceNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeMaterialReferenceNode: {
        SetCustomContentPath(AttributeValue: string): boolean;
        GetCustomContentPath(AttributeValue: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeMaterialReferenceNode['__static_UInterchangeMaterialReferenceNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeMeshNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeMeshNode: {
        SetSlotMaterialDependencyUid(slotName: string, MaterialDependencyUid: string): boolean;
        SetSkinnedMesh(bIsSkinnedMesh: boolean): boolean;
        SetSkeletonDependencyUid(DependencyUid: string): boolean;
        SetSceneInstanceUid(DependencyUid: string): boolean;
        SetPayLoadKey(PayloadKey: string, PayLoadType: EInterchangeMeshPayLoadType): void;
        SetMorphTargetName(MorphTargetName: string): boolean;
        SetMorphTargetDependencyUid(DependencyUid: string): boolean;
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
        RemoveSlotMaterialDependencyUid(slotName: string): boolean;
        RemoveSkeletonDependencyUid(DependencyUid: string): boolean;
        RemoveSceneInstanceUid(DependencyUid: string): boolean;
        RemoveMorphTargetDependencyUid(DependencyUid: string): boolean;
        IsSkinnedMesh(): boolean;
        IsMorphTarget(): boolean;
        GetSlotMaterialDependencyUid(slotName: string, OutMaterialDependency: string): boolean;
        GetSlotMaterialDependencies(OutMaterialDependencies: TMap<string, string>): void;
        GetSkeletonDependency(Index: number, OutDependency: string): void;
        GetSkeletonDependencies(OutDependencies: string[]): void;
        GetSkeletonDependeciesCount(): number;
        GetSceneInstanceUidsCount(): number;
        GetSceneInstanceUids(OutDependencies: string[]): void;
        GetSceneInstanceUid(Index: number, OutDependency: string): void;
        GetMorphTargetName(OutMorphTargetName: string): boolean;
        GetMorphTargetDependency(Index: number, OutDependency: string): void;
        GetMorphTargetDependencies(OutDependencies: string[]): void;
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
    };
    readonly __staticRegistry: 
        UInterchangeMeshNode['__static_UInterchangeMeshNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangePhysicalCameraNode extends UInterchangeBaseNode {
    readonly __static_UInterchangePhysicalCameraNode: {
        SetCustomSensorWidth(AttributeValue: number): boolean;
        SetCustomSensorHeight(AttributeValue: number): boolean;
        SetCustomFocalLength(AttributeValue: number): boolean;
        SetCustomEnableDepthOfField(AttributeValue: boolean): boolean;
        GetCustomSensorWidth(AttributeValue: number): boolean;
        GetCustomSensorHeight(AttributeValue: number): boolean;
        GetCustomFocalLength(AttributeValue: number): boolean;
        GetCustomEnableDepthOfField(AttributeValue: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangePhysicalCameraNode['__static_UInterchangePhysicalCameraNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangePointLightNode extends UInterchangeLightNode {
    readonly __static_UInterchangePointLightNode: {
        SetCustomUseInverseSquaredFalloff(AttributeValue: boolean): boolean;
        SetCustomLightFalloffExponent(AttributeValue: number): boolean;
        GetCustomUseInverseSquaredFalloff(AttributeValue: boolean): boolean;
        GetCustomLightFalloffExponent(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangePointLightNode['__static_UInterchangePointLightNode'] &
        UInterchangeLightNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeLightNode['__propertyRegistry'];
}

declare interface UInterchangeRectLightNode extends UInterchangeLightNode {
    readonly __static_UInterchangeRectLightNode: {
        SetCustomSourceWidth(AttributeValue: number): boolean;
        SetCustomSourceHeight(AttributeValue: number): boolean;
        GetCustomSourceWidth(AttributeValue: number): boolean;
        GetCustomSourceHeight(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeRectLightNode['__static_UInterchangeRectLightNode'] &
        UInterchangeLightNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeLightNode['__propertyRegistry'];
}

declare interface UInterchangeSceneNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeSceneNode: {
        SetSlotMaterialDependencyUid(slotName: string, MaterialDependencyUid: string): boolean;
        SetMorphTargetCurveWeight(MorphTargetName: string, Weight: number): boolean;
        SetGlobalBindPoseReferenceForMeshUIDs(GlobalBindPoseReferenceForMeshUIDs: TMap<string, FMatrix>): void;
        SetCustomTimeZeroLocalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform, bResetCache: boolean): boolean;
        SetCustomPivotNodeTransform(AttributeValue: FTransform): boolean;
        SetCustomLocalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform, bResetCache: boolean): boolean;
        SetCustomHasBindPose(bHasBindPose: boolean): boolean;
        SetCustomGeometricTransform(AttributeValue: FTransform): boolean;
        SetCustomComponentVisibility(bInIsVisible: boolean): boolean;
        SetCustomBindPoseLocalTransform(BaseNodeContainer: UInterchangeBaseNodeContainer, AttributeValue: FTransform, bResetCache: boolean): boolean;
        SetCustomAssetInstanceUid(AttributeValue: string): boolean;
        SetCustomAnimationAssetUidToPlay(AttributeValue: string): boolean;
        SetCustomActorVisibility(bInIsVisible: boolean): boolean;
        SetAnimationCurveTypeForCurveName(CurveName: string, AnimationCurveType: EInterchangeAnimationPayLoadType): boolean;
        RemoveSpecializedType(SpecializedType: string): boolean;
        RemoveSlotMaterialDependencyUid(slotName: string): boolean;
        IsSpecializedTypeContains(SpecializedType: string): boolean;
        GetSpecializedTypes(OutSpecializedTypes: string[]): void;
        GetSpecializedTypeCount(): number;
        GetSpecializedType(Index: number, OutSpecializedType: string): void;
        GetSlotMaterialDependencyUid(slotName: string, OutMaterialDependency: string): boolean;
        GetSlotMaterialDependencies(OutMaterialDependencies: TMap<string, string>): void;
        GetMorphTargetCurveWeights(OutMorphTargetCurveWeights: TMap<string, number>): void;
        GetGlobalBindPoseReferenceForMeshUID(MeshUid: string, GlobalBindPoseReference: FMatrix): boolean;
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
        GetCustomAssetInstanceUid(AttributeValue: string): boolean;
        GetCustomAnimationAssetUidToPlay(AttributeValue: string): boolean;
        GetCustomActorVisibility(bOutIsVisible: boolean): boolean;
        GetAnimationCurveTypeForCurveName(CurveName: string, OutCurveAnimationType: EInterchangeAnimationPayLoadType): boolean;
        AddSpecializedType(SpecializedType: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSceneNode['__static_UInterchangeSceneNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSceneVariantSetsNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeSceneVariantSetsNode: {
        RemoveCustomVariantSetUid(VariantUid: string): boolean;
        GetCustomVariantSetUids(OutVariantUids: string[]): void;
        GetCustomVariantSetUidCount(): number;
        GetCustomVariantSetUid(Index: number, OutVariantUid: string): void;
        AddCustomVariantSetUid(VariantUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSceneVariantSetsNode['__static_UInterchangeSceneVariantSetsNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeShaderGraphNode extends UInterchangeShaderNode {
    readonly __static_UInterchangeShaderGraphNode: {
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
    };
    readonly __staticRegistry: 
        UInterchangeShaderGraphNode['__static_UInterchangeShaderGraphNode'] &
        UInterchangeShaderNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeShaderNode['__propertyRegistry'];
}

declare interface UInterchangeShaderNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeShaderNode: {
        SetCustomShaderType(AttributeValue: string): boolean;
        GetCustomShaderType(AttributeValue: string): boolean;
        AddStringInput(InputName: string, AttributeValue: string, bIsAParameter: boolean): boolean;
        AddLinearColorInput(InputName: string, AttributeValue: FLinearColor, bIsAParameter: boolean): boolean;
        AddFloatInput(InputName: string, AttributeValue: number, bIsAParameter: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeShaderNode['__static_UInterchangeShaderNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeShaderPortsAPI extends UObject {
    readonly __static_UInterchangeShaderPortsAPI: {
        MakeInputValueKey(InputName: string): string;
        MakeInputParameterKey(InputName: string): string;
        MakeInputName(InputKey: string): string;
        MakeInputConnectionKey(InputName: string): string;
        IsAParameter(AttributeKey: string): boolean;
        IsAnInput(AttributeKey: string): boolean;
        HasParameter(InterchangeNode: UInterchangeBaseNode, InInputName: string): boolean;
        HasInput(InterchangeNode: UInterchangeBaseNode, InInputName: string): boolean;
        GetInputConnection(InterchangeNode: UInterchangeBaseNode, InputName: string, OutExpressionUid: string, OutputName: string): boolean;
        GatherInputs(InterchangeNode: UInterchangeBaseNode, OutInputNames: string[]): void;
        ConnectOuputToInputByName(InterchangeNode: UInterchangeBaseNode, InputName: string, ExpressionUid: string, OutputName: string): boolean;
        ConnectOuputToInputByIndex(InterchangeNode: UInterchangeBaseNode, InputName: string, ExpressionUid: string, OutputIndex: number): boolean;
        ConnectDefaultOuputToInput(InterchangeNode: UInterchangeBaseNode, InputName: string, ExpressionUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeShaderPortsAPI['__static_UInterchangeShaderPortsAPI'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UInterchangeSkeletalAnimationTrackNode extends UInterchangeAnimationTrackBaseNode {
    readonly __static_UInterchangeSkeletalAnimationTrackNode: {
        SetCustomSourceTimelineAnimationStopTime(StopTime: number): boolean;
        SetCustomSourceTimelineAnimationStartTime(StartTime: number): boolean;
        SetCustomSkeletonNodeUid(AttributeValue: string): boolean;
        SetCustomAnimationStopTime(StopTime: number): boolean;
        SetCustomAnimationStartTime(StartTime: number): boolean;
        SetCustomAnimationSampleRate(SampleRate: number): boolean;
        SetAnimationPayloadKeyForSceneNodeUid(SceneNodeUid: string, InUniqueId: string, InType: EInterchangeAnimationPayLoadType): boolean;
        SetAnimationPayloadKeyForMorphTargetNodeUid(MorphTargetNodeUid: string, InUniqueId: string, InType: EInterchangeAnimationPayLoadType): boolean;
        IsNodeAnimatedWithBakedCurve(SceneNodeUid: string): boolean;
        GetSceneNodeAnimationPayloadKeys(OutSceneNodeAnimationPayloadKeyUids: TMap<string, string>, OutSceneNodeAnimationPayloadKeyTypes: TMap<string, number>): void;
        GetMorphTargetNodeAnimationPayloadKeys(OutMorphTargetNodeAnimationPayloadKeyUids: TMap<string, string>, OutMorphTargetNodeAnimationPayloadKeyTypes: TMap<string, number>): void;
        GetCustomSourceTimelineAnimationStopTime(StopTime: number): boolean;
        GetCustomSourceTimelineAnimationStartTime(StartTime: number): boolean;
        GetCustomSkeletonNodeUid(AttributeValue: string): boolean;
        GetCustomAnimationStopTime(StopTime: number): boolean;
        GetCustomAnimationStartTime(StartTime: number): boolean;
        GetCustomAnimationSampleRate(SampleRate: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSkeletalAnimationTrackNode['__static_UInterchangeSkeletalAnimationTrackNode'] &
        UInterchangeAnimationTrackBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeAnimationTrackBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSpecularProfileNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeSpecularProfileNode: {
        SetCustomTexture(TextureUid: string): boolean;
        SetCustomFormat(Format: number): boolean;
        GetCustomTexture(TextureUid: string): boolean;
        GetCustomFormat(Format: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSpecularProfileNode['__static_UInterchangeSpecularProfileNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeSpotLightNode extends UInterchangePointLightNode {
    readonly __static_UInterchangeSpotLightNode: {
        SetCustomOuterConeAngle(AttributeValue: number): boolean;
        SetCustomInnerConeAngle(AttributeValue: number): boolean;
        GetCustomOuterConeAngle(AttributeValue: number): boolean;
        GetCustomInnerConeAngle(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeSpotLightNode['__static_UInterchangeSpotLightNode'] &
        UInterchangePointLightNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangePointLightNode['__propertyRegistry'];
}

declare interface UInterchangeStandardCameraNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeStandardCameraNode: {
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
    };
    readonly __staticRegistry: 
        UInterchangeStandardCameraNode['__static_UInterchangeStandardCameraNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeTexture2DArrayNode extends UInterchangeTextureNode {
    readonly __staticRegistry: 
        UInterchangeTextureNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureNode['__propertyRegistry'];
}

declare interface UInterchangeTexture2DNode extends UInterchangeTextureNode {
    readonly __static_UInterchangeTexture2DNode: {
        SetCustomWrapV(AttributeValue: EInterchangeTextureWrapMode): boolean;
        SetCustomWrapU(AttributeValue: EInterchangeTextureWrapMode): boolean;
        GetSourceBlocks(): [TMap<number, string>];
        GetCustomWrapV(AttributeValue: EInterchangeTextureWrapMode): boolean;
        GetCustomWrapU(AttributeValue: EInterchangeTextureWrapMode): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTexture2DNode['__static_UInterchangeTexture2DNode'] &
        UInterchangeTextureNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureNode['__propertyRegistry'];
}

declare interface UInterchangeTextureBlurNode extends UInterchangeTexture2DNode {
    readonly __staticRegistry: 
        UInterchangeTexture2DNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTexture2DNode['__propertyRegistry'];
}

declare interface UInterchangeTextureCubeArrayNode extends UInterchangeTextureNode {
    readonly __staticRegistry: 
        UInterchangeTextureNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureNode['__propertyRegistry'];
}

declare interface UInterchangeTextureCubeNode extends UInterchangeTextureNode {
    readonly __staticRegistry: 
        UInterchangeTextureNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureNode['__propertyRegistry'];
}

declare interface UInterchangeTextureLightProfileNode extends UInterchangeTextureNode {
    readonly __staticRegistry: 
        UInterchangeTextureNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureNode['__propertyRegistry'];
}

declare interface UInterchangeTextureNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeTextureNode: {
        SetPayLoadKey(PayloadKey: string): void;
        SetCustomSRGB(AttributeValue: boolean): boolean;
        SetCustomFilter(AttributeValue: EInterchangeTextureFilterMode): boolean;
        SetCustomColorSpace(AttributeValue: EInterchangeTextureColorSpace): boolean;
        SetCustombFlipGreenChannel(AttributeValue: boolean): boolean;
        GetCustomSRGB(AttributeValue: boolean): boolean;
        GetCustomFilter(AttributeValue: EInterchangeTextureFilterMode): boolean;
        GetCustomColorSpace(AttributeValue: EInterchangeTextureColorSpace): boolean;
        GetCustombFlipGreenChannel(AttributeValue: boolean): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTextureNode['__static_UInterchangeTextureNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeTransformAnimationTrackNode extends UInterchangeAnimationTrackNode {
    readonly __static_UInterchangeTransformAnimationTrackNode: {
        SetCustomUsedChannels(AttributeValue: number): boolean;
        GetCustomUsedChannels(AttributeValue: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeTransformAnimationTrackNode['__static_UInterchangeTransformAnimationTrackNode'] &
        UInterchangeAnimationTrackNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeAnimationTrackNode['__propertyRegistry'];
}

declare interface UInterchangeVariantSetNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeVariantSetNode: {
        SetCustomVariantsPayloadKey(PayloadKey: string): boolean;
        SetCustomDisplayText(AttributeValue: string): boolean;
        RemoveCustomDependencyUid(DependencyUid: string): boolean;
        GetCustomVariantsPayloadKey(PayloadKey: string): boolean;
        GetCustomDisplayText(AttributeValue: string): boolean;
        GetCustomDependencyUids(OutDependencyUids: string[]): void;
        GetCustomDependencyUidCount(): number;
        GetCustomDependencyUid(Index: number, OutDependencyUid: string): void;
        AddCustomDependencyUid(DependencyUid: string): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeVariantSetNode['__static_UInterchangeVariantSetNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeVolumeGridNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeVolumeGridNode: {
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
    };
    readonly __staticRegistry: 
        UInterchangeVolumeGridNode['__static_UInterchangeVolumeGridNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeVolumeNode extends UInterchangeBaseNode {
    readonly __static_UInterchangeVolumeNode: {
        SetCustomFileName(AttributeValue: string): boolean;
        SetCustomAnimationID(AttributeValue: string): boolean;
        RemoveCustomGridDependency(DependencyUid: string): boolean;
        RemoveCustomFrameIndexInAnimation(Index: number): boolean;
        GetCustomGridDependency(Index: number, OutDependency: string): void;
        GetCustomGridDependeciesCount(): number;
        GetCustomGridDependecies(OutDependencies: string[]): void;
        GetCustomFrameIndicesInAnimation(OutAnimationIndices: number[]): void;
        GetCustomFrameIndexInAnimation(IndexIndex: number, OutIndex: number): void;
        GetCustomFileName(AttributeValue: string): boolean;
        GetCustomAnimationID(AttributeValue: string): boolean;
        AddCustomGridDependency(DependencyUid: string): boolean;
        AddCustomFrameIndexInAnimation(Index: number): boolean;
    };
    readonly __staticRegistry: 
        UInterchangeVolumeNode['__static_UInterchangeVolumeNode'] &
        UInterchangeBaseNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeBaseNode['__propertyRegistry'];
}

declare interface UInterchangeVolumeTextureNode extends UInterchangeTextureNode {
    readonly __staticRegistry: 
        UInterchangeTextureNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UInterchangeTextureNode['__propertyRegistry'];
}

