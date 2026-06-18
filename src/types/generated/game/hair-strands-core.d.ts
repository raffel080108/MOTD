declare interface AGroomActor extends AActor {
    readonly __properties_AGroomActor: {
        GroomComponent: UGroomComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        AGroomActor['__properties_AGroomActor'] &
        AActor['__propertyRegistry'];
}

declare interface FFollicleMaskOptions {
    Groom: UGroomAsset;
    Channel: EFollicleMaskChannel;
}

declare interface FGoomBindingGroupInfo {
    RenRootCount: number;
    RenLODCount: number;
    SimRootCount: number;
    SimLODCount: number;
}

declare interface FGroomAnimationInfo {
    NumFrames: number;
    SecondsPerFrame: number;
    duration: number;
    StartTime: number;
    EndTime: number;
    StartFrame: number;
    EndFrame: number;
    Attributes: EGroomCacheAttributes;
}

declare interface FGroomBuildSettings {
    bOverrideGuides: boolean;
    HairToGuideDensity: number;
    InterpolationQuality: EGroomInterpolationQuality;
    InterpolationDistance: EGroomInterpolationWeight;
    bRandomizeGuide: boolean;
    bUseUniqueGuide: boolean;
}

declare interface FGroomCacheImportSettings {
    bImportGroomCache: boolean;
    ImportType: EGroomCacheImportType;
    FrameStart: number;
    FrameEnd: number;
    bSkipEmptyFrames: boolean;
    bImportGroomAsset: boolean;
    GroomAsset: FSoftObjectPath;
    bOverrideConversionSettings: boolean;
    ConversionSettings: FGroomConversionSettings;
}

declare interface FGroomCacheInfo {
    Version: number;
    Type: EGroomCacheType;
    AnimationInfo: FGroomAnimationInfo;
}

declare interface FGroomConversionSettings {
    Rotation: FVector;
    Scale: FVector;
}

declare interface FGroomDataflowSettings {
    DataflowAsset: UDataflow;
    DataflowTerminal: string;
    SkeletalMeshes: USkeletalMesh[];
    MeshLODs: number[];
}

declare interface FGroomHairGroupPreview {
    GroupIndex: number;
    GroupName: string;
    GroupID: number;
    CurveCount: number;
    GuideCount: number;
    Attributes: number;
    AttributeFlags: number;
    Flags: number;
    InterpolationSettings: FHairGroupsInterpolation;
}

declare interface FHairAdvancedRenderingSettings {
    bUseStableRasterization: boolean;
    bScatterSceneLighting: boolean;
}

declare interface FHairBendConstraint {
    SolveBend: boolean;
    ProjectBend: boolean;
    BendDamping: number;
    BendStiffness: number;
    BendScale: FRuntimeFloatCurve;
}

declare interface FHairCollisionConstraint {
    SolveCollision: boolean;
    ProjectCollision: boolean;
    StaticFriction: number;
    KineticFriction: number;
    StrandsViscosity: number;
    GridDimension: FIntVector;
    CollisionRadius: number;
    RadiusScale: FRuntimeFloatCurve;
}

declare interface FHairDecimationSettings {
    CurveDecimation: number;
    VertexDecimation: number;
}

declare interface FHairDeformationSettings {
    bEnableRigging: boolean;
    NumCurves: number;
    NumPoints: number;
}

declare interface FHairExternalForces {
    GravityVector: FVector;
    AirDrag: number;
    AirVelocity: FVector;
}

declare interface FHairGeometrySettings {
    HairWidth: number;
    HairWidth_Override: boolean;
    HairRootScale: number;
    HairTipScale: number;
}

declare interface FHairGroupCardsInfo {
    NumCards: number;
    NumCardVertices: number;
}

declare interface FHairGroupCardsTextures {
    Layout: EHairTextureLayout;
    Textures: UTexture2D[];
    DepthTexture: UTexture2D;
    CoverageTexture: UTexture2D;
    TangentTexture: UTexture2D;
    AttributeTexture: UTexture2D;
    AuxilaryDataTexture: UTexture2D;
    MaterialTexture: UTexture2D;
}

declare interface FHairGroupDesc {
    HairLength: number;
    HairWidth: number;
    HairWidth_Override: boolean;
    HairRootScale: number;
    HairRootScale_Override: boolean;
    HairTipScale: number;
    HairTipScale_Override: boolean;
    HairShadowDensity: number;
    HairShadowDensity_Override: boolean;
    HairRaytracingRadiusScale: number;
    HairRaytracingRadiusScale_Override: boolean;
    bUseHairRaytracingGeometry: boolean;
    bUseHairRaytracingGeometry_Override: boolean;
    LODBias: number;
    bUseStableRasterization: boolean;
    bUseStableRasterization_Override: boolean;
    bScatterSceneLighting: boolean;
    bScatterSceneLighting_Override: boolean;
    bSupportVoxelization: boolean;
    bSupportVoxelization_Override: boolean;
    HairLengthScale: number;
    HairLengthScale_Override: boolean;
}

declare interface FHairGroupInfo {
    GroupIndex: number;
    GroupID: number;
    GroupName: string;
    NumCurves: number;
    NumGuides: number;
    NumCurveVertices: number;
    NumGuideVertices: number;
    MaxCurveLength: number;
    Flags: number;
    LODInfos: FHairGroupLODInfo[];
}

declare interface FHairGroupInfoWithVisibility extends FHairGroupInfo {
    bIsVisible: boolean;
}

declare interface FHairGroupLODInfo {
    NumPoints: number;
    NumCurves: number;
}

declare interface FHairGroupsCardsSourceDescription {
    Material: UMaterialInterface;
    MaterialSlotName: string;
    SourceType: EHairCardsSourceType;
    ProceduralMesh: UStaticMesh;
    bInvertUV: boolean;
    GuideType: EHairCardsGuideType;
    ImportedMesh: UStaticMesh;
    Textures: FHairGroupCardsTextures;
    GroupIndex: number;
    LODIndex: number;
    CardsInfo: FHairGroupCardsInfo;
    ImportedMeshKey: string;
}

declare interface FHairGroupsInterpolation {
    DecimationSettings: FHairDecimationSettings;
    InterpolationSettings: FHairInterpolationSettings;
    RiggingSettings: FHairDeformationSettings;
}

declare interface FHairGroupsLOD {
    AutoLODBias: number;
    Lods: FHairLODSettings[];
}

declare interface FHairGroupsMaterial {
    Material: UMaterialInterface;
    slotName: string;
}

declare interface FHairGroupsMeshesSourceDescription {
    Material: UMaterialInterface;
    MaterialSlotName: string;
    ImportedMesh: UStaticMesh;
    Textures: FHairGroupCardsTextures;
    GroupIndex: number;
    LODIndex: number;
    ImportedMeshKey: string;
}

declare interface FHairGroupsPhysics {
    SolverSettings: FHairSolverSettings;
    ExternalForces: FHairExternalForces;
    MaterialConstraints: FHairMaterialConstraints;
    StrandsParameters: FHairStrandsParameters;
}

declare interface FHairGroupsRendering {
    MaterialSlotName: string;
    Material: UMaterialInterface;
    GeometrySettings: FHairGeometrySettings;
    ShadowSettings: FHairShadowSettings;
    AdvancedSettings: FHairAdvancedRenderingSettings;
}

declare interface FHairInterpolationSettings {
    GuideType: EGroomGuideType;
    bOverrideGuides: boolean;
    HairToGuideDensity: number;
    RiggedGuideNumCurves: number;
    RiggedGuideNumPoints: number;
    InterpolationQuality: EHairInterpolationQuality;
    InterpolationDistance: EHairInterpolationWeight;
    bRandomizeGuide: boolean;
    bUseUniqueGuide: boolean;
}

declare interface FHairLODSettings {
    CurveDecimation: number;
    VertexDecimation: number;
    AngularThreshold: number;
    ScreenSize: number;
    ThicknessScale: number;
    bVisible: boolean;
    GeometryType: EGroomGeometryType;
    BindingType: EGroomBindingType;
    Simulation: EGroomOverrideType;
    GlobalInterpolation: EGroomOverrideType;
}

declare interface FHairMaterialConstraints {
    BendConstraint: FHairBendConstraint;
    StretchConstraint: FHairStretchConstraint;
    CollisionConstraint: FHairCollisionConstraint;
}

declare interface FHairShadowSettings {
    HairShadowDensity: number;
    HairRaytracingRadiusScale: number;
    bUseHairRaytracingGeometry: boolean;
    bVoxelize: boolean;
}

declare interface FHairSimulationConstraints {
    BendDamping: number;
    BendStiffness: number;
    StretchDamping: number;
    StretchStiffness: number;
    StaticFriction: number;
    KineticFriction: number;
    StrandsViscosity: number;
    CollisionRadius: number;
}

declare interface FHairSimulationForces {
    GravityVector: FVector;
    AirDrag: number;
    AirVelocity: FVector;
}

declare interface FHairSimulationSettings {
    bOverrideSettings: boolean;
    SimulationSetup: FHairSimulationSetup;
    SolverSettings: FHairSimulationSolver;
    ExternalForces: FHairSimulationForces;
    MaterialConstraints: FHairSimulationConstraints;
}

declare interface FHairSimulationSetup {
    bResetSimulation: boolean;
    bDebugSimulation: boolean;
    bLocalSimulation: boolean;
    LinearVelocityScale: number;
    AngularVelocityScale: number;
    LocalBone: string;
    TeleportDistance: number;
}

declare interface FHairSimulationSolver {
    bEnableSimulation: boolean;
}

declare interface FHairSolverSettings {
    bEnableDeformation: boolean;
    EnableSimulation: boolean;
    NiagaraSolver: EGroomNiagaraSolvers;
    CustomSystem: TSoftObjectPtr<UNiagaraSystem>;
    GravityPreloading: number;
    SubSteps: number;
    IterationCount: number;
    bForceVisible: boolean;
}

declare interface FHairStrandsParameters {
    StrandsSize: EGroomStrandsSize;
    StrandsDensity: number;
    StrandsSmoothing: number;
    StrandsThickness: number;
    ThicknessScale: FRuntimeFloatCurve;
}

declare interface FHairStretchConstraint {
    SolveStretch: boolean;
    ProjectStretch: boolean;
    StretchDamping: number;
    StretchStiffness: number;
    StretchScale: FRuntimeFloatCurve;
}

declare interface FMovieSceneGroomCacheParams {
    GroomCache: UGroomCache;
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: number;
    bReverse: boolean;
}

declare interface FMovieSceneGroomCacheSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneGroomCacheSectionTemplateParameters;
}

declare interface FMovieSceneGroomCacheSectionTemplateParameters extends FMovieSceneGroomCacheParams {
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
}

declare interface UDataflowGroomContent extends UDataflowSkeletalContent {
    readonly __properties_UDataflowGroomContent: {
        BindingAsset: UGroomBindingAsset;
    };
    readonly __staticRegistry: 
        UDataflowSkeletalContent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDataflowGroomContent['__properties_UDataflowGroomContent'] &
        UDataflowSkeletalContent['__propertyRegistry'];
}

declare interface UGroomAsset extends UObject {
    readonly __static_UGroomAsset: {
        SetRiggedSkeletalMesh(In: USkeletalMesh): void;
        SetHairInterpolationType(In: EGroomInterpolationType): void;
        SetHairGroupsRendering(In: FHairGroupsRendering[]): void;
        SetHairGroupsPhysics(In: FHairGroupsPhysics[]): void;
        SetHairGroupsMeshes(In: FHairGroupsMeshesSourceDescription[]): void;
        SetHairGroupsMaterials(In: FHairGroupsMaterial[]): void;
        SetHairGroupsLOD(In: FHairGroupsLOD[]): void;
        SetHairGroupsInterpolation(In: FHairGroupsInterpolation[]): void;
        SetHairGroupsCards(In: FHairGroupsCardsSourceDescription[]): void;
        SetEnableSimulationCache(In: boolean): void;
        SetEnableGlobalInterpolation(In: boolean): void;
        SetDeformedGroupSections(In: number[]): void;
        GetRiggedSkeletalMesh(): USkeletalMesh;
        GetHairInterpolationType(): EGroomInterpolationType;
        GetHairGroupsRendering(): FHairGroupsRendering[];
        GetHairGroupsPhysics(): FHairGroupsPhysics[];
        GetHairGroupsMeshes(): FHairGroupsMeshesSourceDescription[];
        GetHairGroupsMaterials(): FHairGroupsMaterial[];
        GetHairGroupsLOD(): FHairGroupsLOD[];
        GetHairGroupsInterpolation(): FHairGroupsInterpolation[];
        GetHairGroupsCards(): FHairGroupsCardsSourceDescription[];
        GetEnableSimulationCache(): boolean;
        GetEnableGlobalInterpolation(): boolean;
        GetDeformedGroupSections(): number[];
    };
    readonly __properties_UGroomAsset: {
        LODMode: EGroomLODMode;
        AutoLODBias: number;
        DataflowSettings: FGroomDataflowSettings;
        HairGroupsInfo: FHairGroupInfoWithVisibility[];
        HairGroupsRendering: FHairGroupsRendering[];
        HairGroupsPhysics: FHairGroupsPhysics[];
        HairGroupsInterpolation: FHairGroupsInterpolation[];
        HairGroupsLOD: FHairGroupsLOD[];
        HairGroupsCards: FHairGroupsCardsSourceDescription[];
        HairGroupsMeshes: FHairGroupsMeshesSourceDescription[];
        HairGroupsMaterials: FHairGroupsMaterial[];
        EnableGlobalInterpolation: boolean;
        EnableSimulationCache: boolean;
        HairInterpolationType: EGroomInterpolationType;
        RiggedSkeletalMesh: USkeletalMesh;
        DeformedGroupSections: number[];
        MinLOD: FPerPlatformInt;
        DisableBelowMinLodStripping: FPerPlatformBool;
        EffectiveLODBias: number[];
        AssetUserData: UAssetUserData[];
    };
    readonly __staticRegistry: 
        UGroomAsset['__static_UGroomAsset'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomAsset['__properties_UGroomAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomAssetImportData extends UAssetImportData {
    readonly __properties_UGroomAssetImportData: {
        ImportOptions: UGroomImportOptions;
        HairStrandsTexturesOptions: UGroomCreateStrandsTexturesOptions;
    };
    readonly __staticRegistry: 
        UAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomAssetImportData['__properties_UGroomAssetImportData'] &
        UAssetImportData['__propertyRegistry'];
}

declare interface UGroomBindingAsset extends UObject {
    readonly __static_UGroomBindingAsset: {
        SetTargetSkeletalMesh(InSkeletalMesh: USkeletalMesh): void;
        SetTargetMeshUsedMinLOD(InTargetMeshUsedMinLOD: number): void;
        SetTargetMeshRequestedMinLOD(InTargetMeshRequestedMinLOD: number): void;
        SetTargetGeometryCache(InGeometryCache: UGeometryCache): void;
        SetTargetBindingAttribute(InAttributeName: string): void;
        SetSourceSkeletalMesh(InSkeletalMesh: USkeletalMesh): void;
        SetSourceMeshUsedLOD(InSourceMeshUsedLOD: number): void;
        SetSourceMeshRequestedLOD(InSourceMeshRequestedLOD: number): void;
        SetSourceGeometryCache(InGeometryCache: UGeometryCache): void;
        SetNumInterpolationPoints(InNumInterpolationPoints: number): void;
        SetMatchingSection(InMatchingSection: number): void;
        SetGroupInfos(InGroupInfos: FGoomBindingGroupInfo[]): void;
        SetGroomBindingType(InGroomBindingType: EGroomBindingMeshType): void;
        SetGroom(InGroom: UGroomAsset): void;
        GetTargetSkeletalMesh(): USkeletalMesh;
        GetTargetMeshUsedMinLOD(): number;
        GetTargetMeshRequestedMinLOD(): number;
        GetTargetGeometryCache(): UGeometryCache;
        GetTargetBindingAttribute(): string;
        GetSourceSkeletalMesh(): USkeletalMesh;
        GetSourceMeshUsedLOD(): number;
        GetSourceMeshRequestedLOD(): number;
        GetSourceGeometryCache(): UGeometryCache;
        GetNumInterpolationPoints(): number;
        GetMatchingSection(): number;
        GetGroupInfos(): FGoomBindingGroupInfo[];
        GetGroomBindingType(): EGroomBindingMeshType;
        GetGroom(): UGroomAsset;
        Build(CompletionDelegate: FBuildCompletionDelegate): void;
    };
    readonly __properties_UGroomBindingAsset: {
        GroomBindingType: EGroomBindingMeshType;
        Groom: UGroomAsset;
        SourceSkeletalMesh: USkeletalMesh;
        SourceMeshRequestedLOD: number;
        SourceMeshUsedLOD: number;
        TargetSkeletalMesh: USkeletalMesh;
        TargetMeshRequestedMinLOD: number;
        TargetMeshUsedMinLOD: number;
        SourceGeometryCache: UGeometryCache;
        TargetGeometryCache: UGeometryCache;
        NumInterpolationPoints: number;
        MatchingSection: number;
        TargetBindingAttribute: string;
        GroupInfos: FGoomBindingGroupInfo[];
    };
    readonly __staticRegistry: 
        UGroomBindingAsset['__static_UGroomBindingAsset'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomBindingAsset['__properties_UGroomBindingAsset'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomBindingAssetList extends UObject {
    readonly __properties_UGroomBindingAssetList: {
        Bindings: UGroomBindingAsset[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomBindingAssetList['__properties_UGroomBindingAssetList'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UGroomBlueprintLibrary: {
        IsHairStrandsSupportedInWorld(WorldContextObject: UObject): boolean;
        CreateNewGroomBindingAssetWithPath(InDesiredPackagePath: string, InGroomAsset: UGroomAsset, InSkeletalMesh: USkeletalMesh, InNumInterpolationPoints: number, InSourceSkeletalMeshForTransfer: USkeletalMesh, InMatchingSection: number): UGroomBindingAsset;
        CreateNewGroomBindingAsset(InGroomAsset: UGroomAsset, InSkeletalMesh: USkeletalMesh, InNumInterpolationPoints: number, InSourceSkeletalMeshForTransfer: USkeletalMesh, InMatchingSection: number): UGroomBindingAsset;
        CreateNewGeometryCacheGroomBindingAssetWithPath(DesiredPackagePath: string, GroomAsset: UGroomAsset, GeometryCache: UGeometryCache, NumInterpolationPoints: number, SourceGeometryCacheForTransfer: UGeometryCache, MatchingSection: number): UGroomBindingAsset;
        CreateNewGeometryCacheGroomBindingAsset(GroomAsset: UGroomAsset, GeometryCache: UGeometryCache, NumInterpolationPoints: number, SourceGeometryCacheForTransfer: UGeometryCache, MatchingSection: number): UGroomBindingAsset;
    };
    readonly __staticRegistry: 
        UGroomBlueprintLibrary['__static_UGroomBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UGroomCache extends UObject {
    readonly __properties_UGroomCache: {
        AssetUserData: UAssetUserData[];
        GroomCacheInfo: FGroomCacheInfo;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomCache['__properties_UGroomCache'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomCacheImportData extends UAssetImportData {
    readonly __properties_UGroomCacheImportData: {
        Settings: FGroomCacheImportSettings;
    };
    readonly __staticRegistry: 
        UAssetImportData['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomCacheImportData['__properties_UGroomCacheImportData'] &
        UAssetImportData['__propertyRegistry'];
}

declare interface UGroomCacheImportOptions extends UObject {
    readonly __properties_UGroomCacheImportOptions: {
        ImportSettings: FGroomCacheImportSettings;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomCacheImportOptions['__properties_UGroomCacheImportOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomComponent extends UMeshComponent {
    readonly __static_UGroomComponent: {
        SetPhysicsAsset(InPhysicsAsset: UPhysicsAsset): void;
        SetMeshDeformer(InMeshDeformer: UMeshDeformer): void;
        SetHairLengthScaleEnable(bEnable: boolean): void;
        SetHairLengthScale(Scale: number): void;
        SetGroomCache(InGroomCache: UGroomCache): void;
        SetGroomAsset(Asset: UGroomAsset): void;
        SetEnableSimulation(bInEnableSimulation: boolean): void;
        SetBindingAsset(InBinding: UGroomBindingAsset): void;
        ResetSimulation(): void;
        ResetCollisionComponents(): void;
        GetNiagaraComponent(GroupIndex: number): UNiagaraComponent;
        GetIsHairLengthScaleEnabled(): boolean;
        AddCollisionComponent(SkeletalMeshComponent: USkeletalMeshComponent): void;
    };
    readonly __properties_UGroomComponent: {
        GroomAsset: UGroomAsset;
        GroomCache: UGroomCache;
        NiagaraComponents: UNiagaraComponent[];
        SourceSkeletalMesh: USkeletalMesh;
        BindingAsset: UGroomBindingAsset;
        PhysicsAsset: UPhysicsAsset;
        SimulationSettings: FHairSimulationSettings;
        MeshDeformer: UMeshDeformer;
        MeshDeformerInstance: UMeshDeformerInstance;
        MeshDeformerInstanceSettings: UMeshDeformerInstanceSettings;
        Strands_DebugMaterial: UMaterialInterface;
        Strands_DefaultMaterial: UMaterialInterface;
        Cards_DefaultMaterial: UMaterialInterface;
        Meshes_DefaultMaterial: UMaterialInterface;
        AngularSpringsSystem: UNiagaraSystem;
        CosseratRodsSystem: UNiagaraSystem;
        AttachmentName: string;
        GroomGroupsDesc: FHairGroupDesc[];
        bUseCards: boolean;
        bRunning: boolean;
        bLooping: boolean;
        bManualTick: boolean;
        ElapsedTime: number;
    };
    readonly __staticRegistry: 
        UGroomComponent['__static_UGroomComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomComponent['__properties_UGroomComponent'] &
        UMeshComponent['__propertyRegistry'];
}

declare interface UGroomCreateBindingOptions extends UObject {
    readonly __properties_UGroomCreateBindingOptions: {
        GroomAsset: TWeakObjectPtr<UGroomAsset>;
        GroomBindingType: EGroomBindingMeshType;
        SourceSkeletalMesh: USkeletalMesh;
        TargetSkeletalMesh: USkeletalMesh;
        SourceGeometryCache: UGeometryCache;
        TargetGeometryCache: UGeometryCache;
        NumInterpolationPoints: number;
        MatchingSection: number;
        TargetBindingAttribute: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomCreateBindingOptions['__properties_UGroomCreateBindingOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomCreateFollicleMaskOptions extends UObject {
    readonly __properties_UGroomCreateFollicleMaskOptions: {
        Resolution: number;
        RootRadius: number;
        Grooms: FFollicleMaskOptions[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomCreateFollicleMaskOptions['__properties_UGroomCreateFollicleMaskOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomCreateStrandsTexturesOptions extends UObject {
    readonly __properties_UGroomCreateStrandsTexturesOptions: {
        Layout: EHairTextureLayout;
        Resolution: number;
        TraceType: EStrandsTexturesTraceType;
        TraceDistance: number;
        MeshType: EStrandsTexturesMeshType;
        StaticMesh: UStaticMesh;
        SkeletalMesh: USkeletalMesh;
        LODIndex: number;
        SectionIndex: number;
        UVChannelIndex: number;
        GroupIndex: number[];
        Dilation: number;
        GeneratedTextures: UTexture2D[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomCreateStrandsTexturesOptions['__properties_UGroomCreateStrandsTexturesOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomHairGroupsMapping extends UObject {
    readonly __properties_UGroomHairGroupsMapping: {
        OldGroupNames: string[];
        NewGroupNames: string[];
        OldToNewGroupIndexMapping: number[];
        NewToOldGroupIndexMapping: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomHairGroupsMapping['__properties_UGroomHairGroupsMapping'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomHairGroupsPreview extends UObject {
    readonly __properties_UGroomHairGroupsPreview: {
        Groups: FGroomHairGroupPreview[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomHairGroupsPreview['__properties_UGroomHairGroupsPreview'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomImportOptions extends UObject {
    readonly __properties_UGroomImportOptions: {
        ConversionSettings: FGroomConversionSettings;
        InterpolationSettings: FHairGroupsInterpolation[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomImportOptions['__properties_UGroomImportOptions'] &
        UObject['__propertyRegistry'];
}

declare interface UGroomPluginSettings extends UObject {
    readonly __properties_UGroomPluginSettings: {
        GroomCacheLookAheadBuffer: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UGroomPluginSettings['__properties_UGroomPluginSettings'] &
        UObject['__propertyRegistry'];
}

declare interface UHairCardGenerationSettings extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneGroomCacheSection extends UMovieSceneSection {
    readonly __properties_UMovieSceneGroomCacheSection: {
        Params: FMovieSceneGroomCacheParams;
    };
    readonly __staticRegistry: 
        UMovieSceneSection['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneGroomCacheSection['__properties_UMovieSceneGroomCacheSection'] &
        UMovieSceneSection['__propertyRegistry'];
}

declare interface UMovieSceneGroomCacheTrack extends UMovieSceneNameableTrack {
    readonly __properties_UMovieSceneGroomCacheTrack: {
        AnimationSections: UMovieSceneSection[];
    };
    readonly __staticRegistry: 
        UMovieSceneNameableTrack['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneGroomCacheTrack['__properties_UMovieSceneGroomCacheTrack'] &
        UMovieSceneNameableTrack['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceHairStrands extends UNiagaraDataInterface {
    readonly __properties_UNiagaraDataInterfaceHairStrands: {
        DefaultSource: UGroomAsset;
        SourceActor: AActor;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceHairStrands['__properties_UNiagaraDataInterfaceHairStrands'] &
        UNiagaraDataInterface['__propertyRegistry'];
}

declare interface UNiagaraDataInterfacePressureGrid extends UNiagaraDataInterfaceVelocityGrid {
    readonly __staticRegistry: 
        UNiagaraDataInterfaceVelocityGrid['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVelocityGrid['__propertyRegistry'];
}

declare interface UNiagaraDataInterfaceVelocityGrid extends UNiagaraDataInterfaceRWBase {
    readonly __properties_UNiagaraDataInterfaceVelocityGrid: {
        GridSize: FIntVector;
    };
    readonly __staticRegistry: 
        UNiagaraDataInterfaceRWBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UNiagaraDataInterfaceVelocityGrid['__properties_UNiagaraDataInterfaceVelocityGrid'] &
        UNiagaraDataInterfaceRWBase['__propertyRegistry'];
}

