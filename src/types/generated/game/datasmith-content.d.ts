declare interface ADatasmithAreaLightActor extends AActor {
    readonly __properties_ADatasmithAreaLightActor: {
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
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ADatasmithAreaLightActor['__properties_ADatasmithAreaLightActor'] &
        AActor['__propertyRegistry'];
}

declare interface ADatasmithImportedSequencesActor extends AActor {
    readonly __static_ADatasmithImportedSequencesActor: {
        PlayLevelSequence(SequenceToPlay: ULevelSequence): void;
    };
    readonly __properties_ADatasmithImportedSequencesActor: {
        ImportedSequences: ULevelSequence[];
    };
    readonly __staticRegistry: 
        ADatasmithImportedSequencesActor['__static_ADatasmithImportedSequencesActor'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ADatasmithImportedSequencesActor['__properties_ADatasmithImportedSequencesActor'] &
        AActor['__propertyRegistry'];
}

declare interface ADatasmithSceneActor extends AActor {
    readonly __properties_ADatasmithSceneActor: {
        Scene: UDatasmithScene;
        RelatedActors: TMap<string, TSoftObjectPtr<AActor>>;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ADatasmithSceneActor['__properties_ADatasmithSceneActor'] &
        AActor['__propertyRegistry'];
}

declare interface FDatasmithAssetImportOptions {
    PackagePath: string;
}

declare interface FDatasmithCameraFilmbackSettingsTemplate {
    SensorWidth: number;
    SensorHeight: number;
}

declare interface FDatasmithCameraFocusSettingsTemplate {
    FocusMethod: ECameraFocusMethod;
    ManualFocusDistance: number;
}

declare interface FDatasmithCameraLensSettingsTemplate {
    MaxFStop: number;
}

declare interface FDatasmithCameraLookatTrackingSettingsTemplate {
    bEnableLookAtTracking: boolean;
    bAllowRoll: boolean;
    ActorToTrack: TSoftObjectPtr<AActor>;
}

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

declare type FDatasmithImportInfo = object;

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

declare interface FDatasmithMeshSectionInfoMapTemplate {
    Map: TMap<number, FDatasmithMeshSectionInfoTemplate>;
}

declare interface FDatasmithMeshSectionInfoTemplate {
    MaterialIndex: number;
}

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

declare interface FDatasmithReimportOptions {
    bUpdateActors: boolean;
    bRespawnDeletedActors: boolean;
}

declare interface FDatasmithRetessellationOptions extends FDatasmithTessellationOptions {
    RetessellationRule: EDatasmithCADRetessellationRule;
}

declare interface FDatasmithStaticMaterialTemplate {
    MaterialSlotName: string;
    MaterialInterface: UMaterialInterface;
}

declare interface FDatasmithStaticMeshImportOptions {
    MinLightmapResolution: EDatasmithImportLightmapMin;
    MaxLightmapResolution: EDatasmithImportLightmapMax;
    bGenerateLightmapUVs: boolean;
    bRemoveDegenerates: boolean;
}

declare interface FDatasmithStaticParameterSetTemplate {
    StaticSwitchParameters: TMap<string, boolean>;
}

declare interface FDatasmithTessellationOptions {
    ChordTolerance: number;
    MaxEdgeLength: number;
    NormalTolerance: number;
    StitchingTechnique: EDatasmithCADStitchingTechnique;
    GeometricTolerance: number;
    StitchingTolerance: number;
}

declare interface UDatasmithActorTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithActorTemplate: {
        Layers: string[];
        Tags: string[];
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithActorTemplate['__properties_UDatasmithActorTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithAdditionalData extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDatasmithAreaLightActorTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithAreaLightActorTemplate: {
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
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithAreaLightActorTemplate['__properties_UDatasmithAreaLightActorTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithAssetImportData extends UAssetImportData {
    readonly __staticRegistry: 
        UAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UAssetImportData['__propertyRegistry'];
}

declare interface UDatasmithAssetUserData extends UAssetUserData {
    readonly __properties_UDatasmithAssetUserData: {
        MetaData: TMap<string, string>;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithAssetUserData['__properties_UDatasmithAssetUserData'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface UDatasmithCADImportSceneData extends UDatasmithSceneImportData {
    readonly __staticRegistry: 
        UDatasmithSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithSceneImportData['__propertyRegistry'];
}

declare interface UDatasmithCineCameraActorTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithCineCameraActorTemplate: {
        LookatTrackingSettings: FDatasmithCameraLookatTrackingSettingsTemplate;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithCineCameraActorTemplate['__properties_UDatasmithCineCameraActorTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithCineCameraComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithCineCameraComponentTemplate: {
        FilmbackSettings: FDatasmithCameraFilmbackSettingsTemplate;
        LensSettings: FDatasmithCameraLensSettingsTemplate;
        FocusSettings: FDatasmithCameraFocusSettingsTemplate;
        CurrentFocalLength: number;
        CurrentAperture: number;
        PostProcessSettings: FDatasmithPostProcessSettingsTemplate;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithCineCameraComponentTemplate['__properties_UDatasmithCineCameraComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithCommonTessellationOptions extends UDatasmithOptionsBase {
    readonly __properties_UDatasmithCommonTessellationOptions: {
        Options: FDatasmithTessellationOptions;
    };
    readonly __staticRegistry: 
        UDatasmithOptionsBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithCommonTessellationOptions['__properties_UDatasmithCommonTessellationOptions'] &
        UDatasmithOptionsBase['__propertyRegistry'];
}

declare interface UDatasmithContentBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UDatasmithContentBlueprintLibrary: {
        GetDatasmithUserDataValuesForKey(Object: UObject, Key: string, bPartialMatchKey: boolean): string[];
        GetDatasmithUserDataValueForKey(Object: UObject, Key: string, bPartialMatchKey: boolean): string;
        GetDatasmithUserDataKeysAndValuesForValue(Object: UObject, StringToMatch: string, OutKeys: string[], OutValues: string[]): void;
        GetDatasmithUserData(Object: UObject): UDatasmithAssetUserData;
    };
    readonly __staticRegistry: 
        UDatasmithContentBlueprintLibrary['__static_UDatasmithContentBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UDatasmithCustomActionBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDatasmithDecalComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithDecalComponentTemplate: {
        SortOrder: number;
        DecalSize: FVector;
        Material: UMaterialInterface;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithDecalComponentTemplate['__properties_UDatasmithDecalComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithDeltaGenAssetImportData extends UDatasmithAssetImportData {
    readonly __staticRegistry: 
        UDatasmithAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithAssetImportData['__propertyRegistry'];
}

declare interface UDatasmithDeltaGenSceneImportData extends UDatasmithFBXSceneImportData {
    readonly __properties_UDatasmithDeltaGenSceneImportData: {
        bMergeNodes: boolean;
        bOptimizeDuplicatedNodes: boolean;
        bRemoveInvisibleNodes: boolean;
        bSimplifyNodeHierarchy: boolean;
        bImportVar: boolean;
        VarPath: string;
        bImportPos: boolean;
        PosPath: string;
        bImportTml: boolean;
        TmlPath: string;
    };
    readonly __staticRegistry: 
        UDatasmithFBXSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithDeltaGenSceneImportData['__properties_UDatasmithDeltaGenSceneImportData'] &
        UDatasmithFBXSceneImportData['__propertyRegistry'];
}

declare interface UDatasmithFBXSceneImportData extends UDatasmithSceneImportData {
    readonly __properties_UDatasmithFBXSceneImportData: {
        bGenerateLightmapUVs: boolean;
        TexturesDir: string;
        IntermediateSerialization: number;
        bColorizeMaterials: boolean;
    };
    readonly __staticRegistry: 
        UDatasmithSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithFBXSceneImportData['__properties_UDatasmithFBXSceneImportData'] &
        UDatasmithSceneImportData['__propertyRegistry'];
}

declare interface UDatasmithGLTFSceneImportData extends UDatasmithSceneImportData {
    readonly __properties_UDatasmithGLTFSceneImportData: {
        Generator: string;
        Version: number;
        Author: string;
        License: string;
        Source: string;
    };
    readonly __staticRegistry: 
        UDatasmithSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithGLTFSceneImportData['__properties_UDatasmithGLTFSceneImportData'] &
        UDatasmithSceneImportData['__propertyRegistry'];
}

declare interface UDatasmithImportOptions extends UDatasmithOptionsBase {
    readonly __properties_UDatasmithImportOptions: {
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
        Filename: string;
        FilePath: string;
        SourceUri: string;
    };
    readonly __staticRegistry: 
        UDatasmithOptionsBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithImportOptions['__properties_UDatasmithImportOptions'] &
        UDatasmithOptionsBase['__propertyRegistry'];
}

declare interface UDatasmithLandscapeTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithLandscapeTemplate: {
        LandscapeMaterial: UMaterialInterface;
        StaticLightingLOD: number;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithLandscapeTemplate['__properties_UDatasmithLandscapeTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithLightComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithLightComponentTemplate: {
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
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithLightComponentTemplate['__properties_UDatasmithLightComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithMDLSceneImportData extends UDatasmithSceneImportData {
    readonly __staticRegistry: 
        UDatasmithSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithSceneImportData['__propertyRegistry'];
}

declare interface UDatasmithMaterialInstanceTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithMaterialInstanceTemplate: {
        ParentMaterial: TSoftObjectPtr<UMaterialInterface>;
        ScalarParameterValues: TMap<string, number>;
        VectorParameterValues: TMap<string, FLinearColor>;
        TextureParameterValues: TMap<string, TSoftObjectPtr<UTexture>>;
        StaticParameters: FDatasmithStaticParameterSetTemplate;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithMaterialInstanceTemplate['__properties_UDatasmithMaterialInstanceTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithObjectTemplate extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDatasmithOptionsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDatasmithPointLightComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithPointLightComponentTemplate: {
        IntensityUnits: ELightUnits;
        SourceRadius: number;
        SourceLength: number;
        AttenuationRadius: number;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithPointLightComponentTemplate['__properties_UDatasmithPointLightComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithPostProcessVolumeTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithPostProcessVolumeTemplate: {
        Settings: FDatasmithPostProcessSettingsTemplate;
        bEnabled: boolean;
        bUnbound: boolean;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithPostProcessVolumeTemplate['__properties_UDatasmithPostProcessVolumeTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithScene extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDatasmithSceneComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithSceneComponentTemplate: {
        RelativeTransform: FTransform;
        Mobility: EComponentMobility;
        AttachParent: TSoftObjectPtr<USceneComponent>;
        bVisible: boolean;
        bCastShadow: boolean;
        Tags: string[];
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithSceneComponentTemplate['__properties_UDatasmithSceneComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithSceneImportData extends UAssetImportData {
    readonly __staticRegistry: 
        UAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UAssetImportData['__propertyRegistry'];
}

declare interface UDatasmithSkyLightComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithSkyLightComponentTemplate: {
        SourceType: ESkyLightSourceType;
        CubemapResolution: number;
        Cubemap: UTextureCube;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithSkyLightComponentTemplate['__properties_UDatasmithSkyLightComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithSpotLightComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithSpotLightComponentTemplate: {
        InnerConeAngle: number;
        OuterConeAngle: number;
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithSpotLightComponentTemplate['__properties_UDatasmithSpotLightComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithStaticMeshCADImportData extends UDatasmithStaticMeshImportData {
    readonly __staticRegistry: 
        UDatasmithStaticMeshImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithStaticMeshImportData['__propertyRegistry'];
}

declare interface UDatasmithStaticMeshComponentTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithStaticMeshComponentTemplate: {
        StaticMesh: UStaticMesh;
        OverrideMaterials: UMaterialInterface[];
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithStaticMeshComponentTemplate['__properties_UDatasmithStaticMeshComponentTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithStaticMeshGLTFImportData extends UDatasmithStaticMeshImportData {
    readonly __properties_UDatasmithStaticMeshGLTFImportData: {
        SourceMeshName: string;
    };
    readonly __staticRegistry: 
        UDatasmithStaticMeshImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithStaticMeshGLTFImportData['__properties_UDatasmithStaticMeshGLTFImportData'] &
        UDatasmithStaticMeshImportData['__propertyRegistry'];
}

declare interface UDatasmithStaticMeshImportData extends UDatasmithAssetImportData {
    readonly __staticRegistry: 
        UDatasmithAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithAssetImportData['__propertyRegistry'];
}

declare interface UDatasmithStaticMeshTemplate extends UDatasmithObjectTemplate {
    readonly __properties_UDatasmithStaticMeshTemplate: {
        SectionInfoMap: FDatasmithMeshSectionInfoMapTemplate;
        LightMapCoordinateIndex: number;
        LightMapResolution: number;
        BuildSettings: FDatasmithMeshBuildSettingsTemplate[];
        StaticMaterials: FDatasmithStaticMaterialTemplate[];
    };
    readonly __staticRegistry: 
        UDatasmithObjectTemplate['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithStaticMeshTemplate['__properties_UDatasmithStaticMeshTemplate'] &
        UDatasmithObjectTemplate['__propertyRegistry'];
}

declare interface UDatasmithTranslatedSceneImportData extends UDatasmithSceneImportData {
    readonly __staticRegistry: 
        UDatasmithSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithSceneImportData['__propertyRegistry'];
}

declare interface UDatasmithVREDAssetImportData extends UDatasmithAssetImportData {
    readonly __staticRegistry: 
        UDatasmithAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithAssetImportData['__propertyRegistry'];
}

declare interface UDatasmithVREDSceneImportData extends UDatasmithFBXSceneImportData {
    readonly __properties_UDatasmithVREDSceneImportData: {
        bMergeNodes: boolean;
        bOptimizeDuplicatedNodes: boolean;
        bImportMats: boolean;
        MatsPath: string;
        bImportVar: boolean;
        bCleanVar: boolean;
        VarPath: string;
        bImportLightInfo: boolean;
        LightInfoPath: string;
        bImportClipInfo: boolean;
        ClipInfoPath: string;
    };
    readonly __staticRegistry: 
        UDatasmithFBXSceneImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDatasmithVREDSceneImportData['__properties_UDatasmithVREDSceneImportData'] &
        UDatasmithFBXSceneImportData['__propertyRegistry'];
}

