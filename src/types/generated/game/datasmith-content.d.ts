declare interface ADatasmithAreaLightActor extends AActor {
    Mobility: EComponentMobility;
    LightType: EDatasmithAreaLightActorType;
    LightShape: EDatasmithAreaLightActorShape;
    Dimensions: FVector2D;
    Intensity: number;
    IntensityUnits: ELightUnits;
    Color: FLinearColor;
    temperature: number;
    IESTexture: UTextureLightProfile;
    bUseIESBrightness: boolean;
    IESBrightnessScale: number;
    Rotation: FRotator;
    SourceRadius: number;
    SourceLength: number;
    AttenuationRadius: number;
    SpotlightInnerAngle: number;
    SpotlightOuterAngle: number;
}
declare const ADatasmithAreaLightActor: ADatasmithAreaLightActor;

declare interface ADatasmithImportedSequencesActor extends AActor {
    ImportedSequences: TArray<ULevelSequence>;
    PlayLevelSequence(SequenceToPlay: ULevelSequence): void;
}
declare const ADatasmithImportedSequencesActor: ADatasmithImportedSequencesActor;

declare interface ADatasmithSceneActor extends AActor {
    Scene: UDatasmithScene;
    RelatedActors: Record<FName, TSoftObjectPtr<AActor>>;
}
declare const ADatasmithSceneActor: ADatasmithSceneActor;

declare interface FDatasmithAssetImportOptions {
    PackagePath: FName;
}
declare const FDatasmithAssetImportOptions: FDatasmithAssetImportOptions;

declare interface FDatasmithCameraFilmbackSettingsTemplate {
    SensorWidth: number;
    SensorHeight: number;
}
declare const FDatasmithCameraFilmbackSettingsTemplate: FDatasmithCameraFilmbackSettingsTemplate;

declare interface FDatasmithCameraFocusSettingsTemplate {
    FocusMethod: ECameraFocusMethod;
    ManualFocusDistance: number;
}
declare const FDatasmithCameraFocusSettingsTemplate: FDatasmithCameraFocusSettingsTemplate;

declare interface FDatasmithCameraLensSettingsTemplate {
    MaxFStop: number;
}
declare const FDatasmithCameraLensSettingsTemplate: FDatasmithCameraLensSettingsTemplate;

declare interface FDatasmithCameraLookatTrackingSettingsTemplate {
    bEnableLookAtTracking: boolean;
    bAllowRoll: boolean;
    ActorToTrack: TSoftObjectPtr<AActor>;
}
declare const FDatasmithCameraLookatTrackingSettingsTemplate: FDatasmithCameraLookatTrackingSettingsTemplate;

declare interface FDatasmithImportBaseOptions {
    SceneHandling: EDatasmithImportScene;
    bIncludeGeometry: boolean;
    bIncludeMaterial: boolean;
    bIncludeLight: boolean;
    bIncludeCamera: boolean;
    bIncludeAnimation: boolean;
    AssetOptions: FDatasmithAssetImportOptions;
    StaticMeshOptions: FDatasmithStaticMeshImportOptions;
}
declare const FDatasmithImportBaseOptions: FDatasmithImportBaseOptions;

declare interface FDatasmithImportInfo {

}
declare const FDatasmithImportInfo: FDatasmithImportInfo;

declare interface FDatasmithMeshBuildSettingsTemplate {
    bUseMikkTSpace: boolean;
    bRecomputeNormals: boolean;
    bRecomputeTangents: boolean;
    bRemoveDegenerates: boolean;
    bUseHighPrecisionTangentBasis: boolean;
    bUseFullPrecisionUVs: boolean;
    bGenerateLightmapUVs: boolean;
    MinLightmapResolution: number;
    SrcLightmapIndex: number;
    DstLightmapIndex: number;
}
declare const FDatasmithMeshBuildSettingsTemplate: FDatasmithMeshBuildSettingsTemplate;

declare interface FDatasmithMeshSectionInfoMapTemplate {
    Map: Record<string | number | symbol, FDatasmithMeshSectionInfoTemplate>;
}
declare const FDatasmithMeshSectionInfoMapTemplate: FDatasmithMeshSectionInfoMapTemplate;

declare interface FDatasmithMeshSectionInfoTemplate {
    MaterialIndex: number;
}
declare const FDatasmithMeshSectionInfoTemplate: FDatasmithMeshSectionInfoTemplate;

declare interface FDatasmithPostProcessSettingsTemplate {
    bOverride_WhiteTemp: boolean;
    bOverride_ColorSaturation: boolean;
    bOverride_VignetteIntensity: boolean;
    bOverride_AutoExposureMethod: boolean;
    bOverride_CameraISO: boolean;
    bOverride_CameraShutterSpeed: boolean;
    bOverride_DepthOfFieldFstop: boolean;
    WhiteTemp: number;
    VignetteIntensity: number;
    ColorSaturation: FVector4;
    AutoExposureMethod: EAutoExposureMethod;
    CameraISO: number;
    CameraShutterSpeed: number;
    DepthOfFieldFstop: number;
}
declare const FDatasmithPostProcessSettingsTemplate: FDatasmithPostProcessSettingsTemplate;

declare interface FDatasmithReimportOptions {
    bUpdateActors: boolean;
    bRespawnDeletedActors: boolean;
}
declare const FDatasmithReimportOptions: FDatasmithReimportOptions;

declare interface FDatasmithRetessellationOptions extends FDatasmithTessellationOptions {
    RetessellationRule: EDatasmithCADRetessellationRule;
}
declare const FDatasmithRetessellationOptions: FDatasmithRetessellationOptions;

declare interface FDatasmithStaticMaterialTemplate {
    MaterialSlotName: FName;
    MaterialInterface: UMaterialInterface;
}
declare const FDatasmithStaticMaterialTemplate: FDatasmithStaticMaterialTemplate;

declare interface FDatasmithStaticMeshImportOptions {
    MinLightmapResolution: EDatasmithImportLightmapMin;
    MaxLightmapResolution: EDatasmithImportLightmapMax;
    bGenerateLightmapUVs: boolean;
    bRemoveDegenerates: boolean;
}
declare const FDatasmithStaticMeshImportOptions: FDatasmithStaticMeshImportOptions;

declare interface FDatasmithStaticParameterSetTemplate {
    StaticSwitchParameters: Record<FName, boolean>;
}
declare const FDatasmithStaticParameterSetTemplate: FDatasmithStaticParameterSetTemplate;

declare interface FDatasmithTessellationOptions {
    ChordTolerance: number;
    MaxEdgeLength: number;
    NormalTolerance: number;
    StitchingTechnique: EDatasmithCADStitchingTechnique;
    GeometricTolerance: number;
    StitchingTolerance: number;
}
declare const FDatasmithTessellationOptions: FDatasmithTessellationOptions;

declare interface UDatasmithActorTemplate extends UDatasmithObjectTemplate {
    Layers: TSet<FName>;
    Tags: TSet<FName>;
}
declare const UDatasmithActorTemplate: UDatasmithActorTemplate;

declare interface UDatasmithAdditionalData extends UObject {

}
declare const UDatasmithAdditionalData: UDatasmithAdditionalData;

declare interface UDatasmithAreaLightActorTemplate extends UDatasmithObjectTemplate {
    LightType: EDatasmithAreaLightActorType;
    LightShape: EDatasmithAreaLightActorShape;
    Dimensions: FVector2D;
    Color: FLinearColor;
    Intensity: number;
    IntensityUnits: ELightUnits;
    temperature: number;
    IESTexture: TSoftObjectPtr<UTextureLightProfile>;
    bUseIESBrightness: boolean;
    IESBrightnessScale: number;
    Rotation: FRotator;
    SourceRadius: number;
    SourceLength: number;
    AttenuationRadius: number;
}
declare const UDatasmithAreaLightActorTemplate: UDatasmithAreaLightActorTemplate;

declare interface UDatasmithAssetImportData extends UAssetImportData {

}
declare const UDatasmithAssetImportData: UDatasmithAssetImportData;

declare interface UDatasmithAssetUserData extends UAssetUserData {
    MetaData: Record<FName, FString>;
}
declare const UDatasmithAssetUserData: UDatasmithAssetUserData;

declare interface UDatasmithCADImportSceneData extends UDatasmithSceneImportData {

}
declare const UDatasmithCADImportSceneData: UDatasmithCADImportSceneData;

declare interface UDatasmithCineCameraActorTemplate extends UDatasmithObjectTemplate {
    LookatTrackingSettings: FDatasmithCameraLookatTrackingSettingsTemplate;
}
declare const UDatasmithCineCameraActorTemplate: UDatasmithCineCameraActorTemplate;

declare interface UDatasmithCineCameraComponentTemplate extends UDatasmithObjectTemplate {
    FilmbackSettings: FDatasmithCameraFilmbackSettingsTemplate;
    LensSettings: FDatasmithCameraLensSettingsTemplate;
    FocusSettings: FDatasmithCameraFocusSettingsTemplate;
    CurrentFocalLength: number;
    CurrentAperture: number;
    PostProcessSettings: FDatasmithPostProcessSettingsTemplate;
}
declare const UDatasmithCineCameraComponentTemplate: UDatasmithCineCameraComponentTemplate;

declare interface UDatasmithCommonTessellationOptions extends UDatasmithOptionsBase {
    Options: FDatasmithTessellationOptions;
}
declare const UDatasmithCommonTessellationOptions: UDatasmithCommonTessellationOptions;

declare interface UDatasmithContentBlueprintLibrary extends UBlueprintFunctionLibrary {
    GetDatasmithUserDataValuesForKey(Object: UObject, Key: FName, bPartialMatchKey: boolean): TArray<FString>;
    GetDatasmithUserDataValueForKey(Object: UObject, Key: FName, bPartialMatchKey: boolean): FString;
    GetDatasmithUserDataKeysAndValuesForValue(Object: UObject, StringToMatch: string | FString, OutKeys: TArray<FName>, OutValues: string | FString[]): void;
    GetDatasmithUserData(Object: UObject): UDatasmithAssetUserData;
}
declare const UDatasmithContentBlueprintLibrary: UDatasmithContentBlueprintLibrary;

declare interface UDatasmithCustomActionBase extends UObject {

}
declare const UDatasmithCustomActionBase: UDatasmithCustomActionBase;

declare interface UDatasmithDecalComponentTemplate extends UDatasmithObjectTemplate {
    SortOrder: number;
    DecalSize: FVector;
    Material: UMaterialInterface;
}
declare const UDatasmithDecalComponentTemplate: UDatasmithDecalComponentTemplate;

declare interface UDatasmithDeltaGenAssetImportData extends UDatasmithAssetImportData {

}
declare const UDatasmithDeltaGenAssetImportData: UDatasmithDeltaGenAssetImportData;

declare interface UDatasmithDeltaGenSceneImportData extends UDatasmithFBXSceneImportData {
    bMergeNodes: boolean;
    bOptimizeDuplicatedNodes: boolean;
    bRemoveInvisibleNodes: boolean;
    bSimplifyNodeHierarchy: boolean;
    bImportVar: boolean;
    VarPath: FString;
    bImportPos: boolean;
    PosPath: FString;
    bImportTml: boolean;
    TmlPath: FString;
}
declare const UDatasmithDeltaGenSceneImportData: UDatasmithDeltaGenSceneImportData;

declare interface UDatasmithFBXSceneImportData extends UDatasmithSceneImportData {
    bGenerateLightmapUVs: boolean;
    TexturesDir: FString;
    IntermediateSerialization: uint8;
    bColorizeMaterials: boolean;
}
declare const UDatasmithFBXSceneImportData: UDatasmithFBXSceneImportData;

declare interface UDatasmithGLTFSceneImportData extends UDatasmithSceneImportData {
    Generator: FString;
    Version: number;
    Author: FString;
    License: FString;
    Source: FString;
}
declare const UDatasmithGLTFSceneImportData: UDatasmithGLTFSceneImportData;

declare interface UDatasmithImportOptions extends UDatasmithOptionsBase {
    SearchPackagePolicy: EDatasmithImportSearchPackagePolicy;
    MaterialConflictPolicy: EDatasmithImportAssetConflictPolicy;
    TextureConflictPolicy: EDatasmithImportAssetConflictPolicy;
    StaticMeshActorImportPolicy: EDatasmithImportActorPolicy;
    LightImportPolicy: EDatasmithImportActorPolicy;
    CameraImportPolicy: EDatasmithImportActorPolicy;
    OtherActorImportPolicy: EDatasmithImportActorPolicy;
    MaterialQuality: EDatasmithImportMaterialQuality;
    BaseOptions: FDatasmithImportBaseOptions;
    ReimportOptions: FDatasmithReimportOptions;
    Filename: FString;
    FilePath: FString;
    SourceUri: FString;
}
declare const UDatasmithImportOptions: UDatasmithImportOptions;

declare interface UDatasmithLandscapeTemplate extends UDatasmithObjectTemplate {
    LandscapeMaterial: UMaterialInterface;
    StaticLightingLOD: number;
}
declare const UDatasmithLandscapeTemplate: UDatasmithLandscapeTemplate;

declare interface UDatasmithLightComponentTemplate extends UDatasmithObjectTemplate {
    bVisible: boolean;
    CastShadows: boolean;
    bUseTemperature: boolean;
    bUseIESBrightness: boolean;
    Intensity: number;
    temperature: number;
    IESBrightnessScale: number;
    LightColor: FLinearColor;
    LightFunctionMaterial: UMaterialInterface;
    IESTexture: UTextureLightProfile;
}
declare const UDatasmithLightComponentTemplate: UDatasmithLightComponentTemplate;

declare interface UDatasmithMDLSceneImportData extends UDatasmithSceneImportData {

}
declare const UDatasmithMDLSceneImportData: UDatasmithMDLSceneImportData;

declare interface UDatasmithMaterialInstanceTemplate extends UDatasmithObjectTemplate {
    ParentMaterial: TSoftObjectPtr<UMaterialInterface>;
    ScalarParameterValues: Record<FName, number>;
    VectorParameterValues: Record<FName, FLinearColor>;
    TextureParameterValues: Record<FName, TSoftObjectPtr<UTexture>>;
    StaticParameters: FDatasmithStaticParameterSetTemplate;
}
declare const UDatasmithMaterialInstanceTemplate: UDatasmithMaterialInstanceTemplate;

declare interface UDatasmithObjectTemplate extends UObject {

}
declare const UDatasmithObjectTemplate: UDatasmithObjectTemplate;

declare interface UDatasmithOptionsBase extends UObject {

}
declare const UDatasmithOptionsBase: UDatasmithOptionsBase;

declare interface UDatasmithPointLightComponentTemplate extends UDatasmithObjectTemplate {
    IntensityUnits: ELightUnits;
    SourceRadius: number;
    SourceLength: number;
    AttenuationRadius: number;
}
declare const UDatasmithPointLightComponentTemplate: UDatasmithPointLightComponentTemplate;

declare interface UDatasmithPostProcessVolumeTemplate extends UDatasmithObjectTemplate {
    Settings: FDatasmithPostProcessSettingsTemplate;
    bEnabled: boolean;
    bUnbound: boolean;
}
declare const UDatasmithPostProcessVolumeTemplate: UDatasmithPostProcessVolumeTemplate;

declare interface UDatasmithScene extends UObject {

}
declare const UDatasmithScene: UDatasmithScene;

declare interface UDatasmithSceneComponentTemplate extends UDatasmithObjectTemplate {
    RelativeTransform: FTransform;
    Mobility: EComponentMobility;
    AttachParent: TSoftObjectPtr<USceneComponent>;
    bVisible: boolean;
    bCastShadow: boolean;
    Tags: TSet<FName>;
}
declare const UDatasmithSceneComponentTemplate: UDatasmithSceneComponentTemplate;

declare interface UDatasmithSceneImportData extends UAssetImportData {

}
declare const UDatasmithSceneImportData: UDatasmithSceneImportData;

declare interface UDatasmithSkyLightComponentTemplate extends UDatasmithObjectTemplate {
    SourceType: ESkyLightSourceType;
    CubemapResolution: number;
    Cubemap: UTextureCube;
}
declare const UDatasmithSkyLightComponentTemplate: UDatasmithSkyLightComponentTemplate;

declare interface UDatasmithSpotLightComponentTemplate extends UDatasmithObjectTemplate {
    InnerConeAngle: number;
    OuterConeAngle: number;
}
declare const UDatasmithSpotLightComponentTemplate: UDatasmithSpotLightComponentTemplate;

declare interface UDatasmithStaticMeshCADImportData extends UDatasmithStaticMeshImportData {

}
declare const UDatasmithStaticMeshCADImportData: UDatasmithStaticMeshCADImportData;

declare interface UDatasmithStaticMeshComponentTemplate extends UDatasmithObjectTemplate {
    StaticMesh: UStaticMesh;
    OverrideMaterials: TArray<UMaterialInterface>;
}
declare const UDatasmithStaticMeshComponentTemplate: UDatasmithStaticMeshComponentTemplate;

declare interface UDatasmithStaticMeshGLTFImportData extends UDatasmithStaticMeshImportData {
    SourceMeshName: FString;
}
declare const UDatasmithStaticMeshGLTFImportData: UDatasmithStaticMeshGLTFImportData;

declare interface UDatasmithStaticMeshImportData extends UDatasmithAssetImportData {

}
declare const UDatasmithStaticMeshImportData: UDatasmithStaticMeshImportData;

declare interface UDatasmithStaticMeshTemplate extends UDatasmithObjectTemplate {
    SectionInfoMap: FDatasmithMeshSectionInfoMapTemplate;
    LightMapCoordinateIndex: number;
    LightMapResolution: number;
    BuildSettings: TArray<FDatasmithMeshBuildSettingsTemplate>;
    StaticMaterials: TArray<FDatasmithStaticMaterialTemplate>;
}
declare const UDatasmithStaticMeshTemplate: UDatasmithStaticMeshTemplate;

declare interface UDatasmithTranslatedSceneImportData extends UDatasmithSceneImportData {

}
declare const UDatasmithTranslatedSceneImportData: UDatasmithTranslatedSceneImportData;

declare interface UDatasmithVREDAssetImportData extends UDatasmithAssetImportData {

}
declare const UDatasmithVREDAssetImportData: UDatasmithVREDAssetImportData;

declare interface UDatasmithVREDSceneImportData extends UDatasmithFBXSceneImportData {
    bMergeNodes: boolean;
    bOptimizeDuplicatedNodes: boolean;
    bImportMats: boolean;
    MatsPath: FString;
    bImportVar: boolean;
    bCleanVar: boolean;
    VarPath: FString;
    bImportLightInfo: boolean;
    LightInfoPath: FString;
    bImportClipInfo: boolean;
    ClipInfoPath: FString;
}
declare const UDatasmithVREDSceneImportData: UDatasmithVREDSceneImportData;

