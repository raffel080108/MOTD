declare interface AGroomActor extends AActor {
    GroomComponent: UGroomComponent;
}
declare const AGroomActor: AGroomActor;

declare interface FFollicleMaskOptions {
    Groom: UGroomAsset;
    Channel: EFollicleMaskChannel;
}
declare const FFollicleMaskOptions: FFollicleMaskOptions;

declare interface FGoomBindingGroupInfo {
    RenRootCount: number;
    RenLODCount: number;
    SimRootCount: number;
    SimLODCount: number;
}
declare const FGoomBindingGroupInfo: FGoomBindingGroupInfo;

declare interface FGroomAnimationInfo {
    NumFrames: uint32;
    SecondsPerFrame: number;
    duration: number;
    StartTime: number;
    EndTime: number;
    StartFrame: number;
    EndFrame: number;
    Attributes: EGroomCacheAttributes;
}
declare const FGroomAnimationInfo: FGroomAnimationInfo;

declare interface FGroomBuildSettings {
    bOverrideGuides: boolean;
    HairToGuideDensity: number;
    InterpolationQuality: EGroomInterpolationQuality;
    InterpolationDistance: EGroomInterpolationWeight;
    bRandomizeGuide: boolean;
    bUseUniqueGuide: boolean;
}
declare const FGroomBuildSettings: FGroomBuildSettings;

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
declare const FGroomCacheImportSettings: FGroomCacheImportSettings;

declare interface FGroomCacheInfo {
    Version: number;
    Type: EGroomCacheType;
    AnimationInfo: FGroomAnimationInfo;
}
declare const FGroomCacheInfo: FGroomCacheInfo;

declare interface FGroomConversionSettings {
    Rotation: FVector;
    Scale: FVector;
}
declare const FGroomConversionSettings: FGroomConversionSettings;

declare interface FGroomDataflowSettings {
    DataflowAsset: UDataflow;
    DataflowTerminal: FString;
    SkeletalMeshes: TArray<USkeletalMesh>;
    MeshLODs: TArray<number>;
}
declare const FGroomDataflowSettings: FGroomDataflowSettings;

declare interface FGroomHairGroupPreview {
    GroupIndex: number;
    GroupName: FName;
    GroupID: number;
    CurveCount: number;
    GuideCount: number;
    Attributes: uint32;
    AttributeFlags: uint32;
    Flags: uint32;
    InterpolationSettings: FHairGroupsInterpolation;
}
declare const FGroomHairGroupPreview: FGroomHairGroupPreview;

declare interface FHairAdvancedRenderingSettings {
    bUseStableRasterization: boolean;
    bScatterSceneLighting: boolean;
}
declare const FHairAdvancedRenderingSettings: FHairAdvancedRenderingSettings;

declare interface FHairBendConstraint {
    SolveBend: boolean;
    ProjectBend: boolean;
    BendDamping: number;
    BendStiffness: number;
    BendScale: FRuntimeFloatCurve;
}
declare const FHairBendConstraint: FHairBendConstraint;

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
declare const FHairCollisionConstraint: FHairCollisionConstraint;

declare interface FHairDecimationSettings {
    CurveDecimation: number;
    VertexDecimation: number;
}
declare const FHairDecimationSettings: FHairDecimationSettings;

declare interface FHairDeformationSettings {
    bEnableRigging: boolean;
    NumCurves: number;
    NumPoints: number;
}
declare const FHairDeformationSettings: FHairDeformationSettings;

declare interface FHairExternalForces {
    GravityVector: FVector;
    AirDrag: number;
    AirVelocity: FVector;
}
declare const FHairExternalForces: FHairExternalForces;

declare interface FHairGeometrySettings {
    HairWidth: number;
    HairWidth_Override: boolean;
    HairRootScale: number;
    HairTipScale: number;
}
declare const FHairGeometrySettings: FHairGeometrySettings;

declare interface FHairGroupCardsInfo {
    NumCards: number;
    NumCardVertices: number;
}
declare const FHairGroupCardsInfo: FHairGroupCardsInfo;

declare interface FHairGroupCardsTextures {
    Layout: EHairTextureLayout;
    Textures: TArray<UTexture2D>;
    DepthTexture: UTexture2D;
    CoverageTexture: UTexture2D;
    TangentTexture: UTexture2D;
    AttributeTexture: UTexture2D;
    AuxilaryDataTexture: UTexture2D;
    MaterialTexture: UTexture2D;
}
declare const FHairGroupCardsTextures: FHairGroupCardsTextures;

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
declare const FHairGroupDesc: FHairGroupDesc;

declare interface FHairGroupInfo {
    GroupIndex: number;
    GroupID: number;
    GroupName: FName;
    NumCurves: number;
    NumGuides: number;
    NumCurveVertices: number;
    NumGuideVertices: number;
    MaxCurveLength: number;
    Flags: uint32;
    LODInfos: TArray<FHairGroupLODInfo>;
}
declare const FHairGroupInfo: FHairGroupInfo;

declare interface FHairGroupInfoWithVisibility extends FHairGroupInfo {
    bIsVisible: boolean;
}
declare const FHairGroupInfoWithVisibility: FHairGroupInfoWithVisibility;

declare interface FHairGroupLODInfo {
    NumPoints: number;
    NumCurves: number;
}
declare const FHairGroupLODInfo: FHairGroupLODInfo;

declare interface FHairGroupsCardsSourceDescription {
    Material: UMaterialInterface;
    MaterialSlotName: FName;
    SourceType: EHairCardsSourceType;
    ProceduralMesh: UStaticMesh;
    bInvertUV: boolean;
    GuideType: EHairCardsGuideType;
    ImportedMesh: UStaticMesh;
    Textures: FHairGroupCardsTextures;
    GroupIndex: number;
    LODIndex: number;
    CardsInfo: FHairGroupCardsInfo;
    ImportedMeshKey: FString;
}
declare const FHairGroupsCardsSourceDescription: FHairGroupsCardsSourceDescription;

declare interface FHairGroupsInterpolation {
    DecimationSettings: FHairDecimationSettings;
    InterpolationSettings: FHairInterpolationSettings;
    RiggingSettings: FHairDeformationSettings;
}
declare const FHairGroupsInterpolation: FHairGroupsInterpolation;

declare interface FHairGroupsLOD {
    AutoLODBias: number;
    Lods: TArray<FHairLODSettings>;
}
declare const FHairGroupsLOD: FHairGroupsLOD;

declare interface FHairGroupsMaterial {
    Material: UMaterialInterface;
    slotName: FName;
}
declare const FHairGroupsMaterial: FHairGroupsMaterial;

declare interface FHairGroupsMeshesSourceDescription {
    Material: UMaterialInterface;
    MaterialSlotName: FName;
    ImportedMesh: UStaticMesh;
    Textures: FHairGroupCardsTextures;
    GroupIndex: number;
    LODIndex: number;
    ImportedMeshKey: FString;
}
declare const FHairGroupsMeshesSourceDescription: FHairGroupsMeshesSourceDescription;

declare interface FHairGroupsPhysics {
    SolverSettings: FHairSolverSettings;
    ExternalForces: FHairExternalForces;
    MaterialConstraints: FHairMaterialConstraints;
    StrandsParameters: FHairStrandsParameters;
}
declare const FHairGroupsPhysics: FHairGroupsPhysics;

declare interface FHairGroupsRendering {
    MaterialSlotName: FName;
    Material: UMaterialInterface;
    GeometrySettings: FHairGeometrySettings;
    ShadowSettings: FHairShadowSettings;
    AdvancedSettings: FHairAdvancedRenderingSettings;
}
declare const FHairGroupsRendering: FHairGroupsRendering;

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
declare const FHairInterpolationSettings: FHairInterpolationSettings;

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
declare const FHairLODSettings: FHairLODSettings;

declare interface FHairMaterialConstraints {
    BendConstraint: FHairBendConstraint;
    StretchConstraint: FHairStretchConstraint;
    CollisionConstraint: FHairCollisionConstraint;
}
declare const FHairMaterialConstraints: FHairMaterialConstraints;

declare interface FHairShadowSettings {
    HairShadowDensity: number;
    HairRaytracingRadiusScale: number;
    bUseHairRaytracingGeometry: boolean;
    bVoxelize: boolean;
}
declare const FHairShadowSettings: FHairShadowSettings;

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
declare const FHairSimulationConstraints: FHairSimulationConstraints;

declare interface FHairSimulationForces {
    GravityVector: FVector;
    AirDrag: number;
    AirVelocity: FVector;
}
declare const FHairSimulationForces: FHairSimulationForces;

declare interface FHairSimulationSettings {
    bOverrideSettings: boolean;
    SimulationSetup: FHairSimulationSetup;
    SolverSettings: FHairSimulationSolver;
    ExternalForces: FHairSimulationForces;
    MaterialConstraints: FHairSimulationConstraints;
}
declare const FHairSimulationSettings: FHairSimulationSettings;

declare interface FHairSimulationSetup {
    bResetSimulation: boolean;
    bDebugSimulation: boolean;
    bLocalSimulation: boolean;
    LinearVelocityScale: number;
    AngularVelocityScale: number;
    LocalBone: FString;
    TeleportDistance: number;
}
declare const FHairSimulationSetup: FHairSimulationSetup;

declare interface FHairSimulationSolver {
    bEnableSimulation: boolean;
}
declare const FHairSimulationSolver: FHairSimulationSolver;

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
declare const FHairSolverSettings: FHairSolverSettings;

declare interface FHairStrandsParameters {
    StrandsSize: EGroomStrandsSize;
    StrandsDensity: number;
    StrandsSmoothing: number;
    StrandsThickness: number;
    ThicknessScale: FRuntimeFloatCurve;
}
declare const FHairStrandsParameters: FHairStrandsParameters;

declare interface FHairStretchConstraint {
    SolveStretch: boolean;
    ProjectStretch: boolean;
    StretchDamping: number;
    StretchStiffness: number;
    StretchScale: FRuntimeFloatCurve;
}
declare const FHairStretchConstraint: FHairStretchConstraint;

declare interface FMovieSceneGroomCacheParams {
    GroomCache: UGroomCache;
    FirstLoopStartFrameOffset: FFrameNumber;
    StartFrameOffset: FFrameNumber;
    EndFrameOffset: FFrameNumber;
    PlayRate: number;
    bReverse: boolean;
}
declare const FMovieSceneGroomCacheParams: FMovieSceneGroomCacheParams;

declare interface FMovieSceneGroomCacheSectionTemplate extends FMovieSceneEvalTemplate {
    Params: FMovieSceneGroomCacheSectionTemplateParameters;
}
declare const FMovieSceneGroomCacheSectionTemplate: FMovieSceneGroomCacheSectionTemplate;

declare interface FMovieSceneGroomCacheSectionTemplateParameters extends FMovieSceneGroomCacheParams {
    SectionStartTime: FFrameNumber;
    SectionEndTime: FFrameNumber;
}
declare const FMovieSceneGroomCacheSectionTemplateParameters: FMovieSceneGroomCacheSectionTemplateParameters;

declare interface UDataflowGroomContent extends UDataflowSkeletalContent {
    BindingAsset: UGroomBindingAsset;
}
declare const UDataflowGroomContent: UDataflowGroomContent;

declare interface UGroomAsset extends UObject {
    LODMode: EGroomLODMode;
    AutoLODBias: number;
    DataflowSettings: FGroomDataflowSettings;
    HairGroupsInfo: TArray<FHairGroupInfoWithVisibility>;
    HairGroupsRendering: TArray<FHairGroupsRendering>;
    HairGroupsPhysics: TArray<FHairGroupsPhysics>;
    HairGroupsInterpolation: TArray<FHairGroupsInterpolation>;
    HairGroupsLOD: TArray<FHairGroupsLOD>;
    HairGroupsCards: TArray<FHairGroupsCardsSourceDescription>;
    HairGroupsMeshes: TArray<FHairGroupsMeshesSourceDescription>;
    HairGroupsMaterials: TArray<FHairGroupsMaterial>;
    EnableGlobalInterpolation: boolean;
    EnableSimulationCache: boolean;
    HairInterpolationType: EGroomInterpolationType;
    RiggedSkeletalMesh: USkeletalMesh;
    DeformedGroupSections: TArray<number>;
    MinLOD: FPerPlatformInt;
    DisableBelowMinLodStripping: FPerPlatformBool;
    EffectiveLODBias: TArray<number>;
    AssetUserData: TArray<UAssetUserData>;
    SetRiggedSkeletalMesh(In: USkeletalMesh): void;
    SetHairInterpolationType(In: EGroomInterpolationType): void;
    SetHairGroupsRendering(In: TArray<FHairGroupsRendering>): void;
    SetHairGroupsPhysics(In: TArray<FHairGroupsPhysics>): void;
    SetHairGroupsMeshes(In: TArray<FHairGroupsMeshesSourceDescription>): void;
    SetHairGroupsMaterials(In: TArray<FHairGroupsMaterial>): void;
    SetHairGroupsLOD(In: TArray<FHairGroupsLOD>): void;
    SetHairGroupsInterpolation(In: TArray<FHairGroupsInterpolation>): void;
    SetHairGroupsCards(In: TArray<FHairGroupsCardsSourceDescription>): void;
    SetEnableSimulationCache(In: boolean): void;
    SetEnableGlobalInterpolation(In: boolean): void;
    SetDeformedGroupSections(In: TArray<number>): void;
    GetRiggedSkeletalMesh(): USkeletalMesh;
    GetHairInterpolationType(): EGroomInterpolationType;
    GetHairGroupsRendering(): TArray<FHairGroupsRendering>;
    GetHairGroupsPhysics(): TArray<FHairGroupsPhysics>;
    GetHairGroupsMeshes(): TArray<FHairGroupsMeshesSourceDescription>;
    GetHairGroupsMaterials(): TArray<FHairGroupsMaterial>;
    GetHairGroupsLOD(): TArray<FHairGroupsLOD>;
    GetHairGroupsInterpolation(): TArray<FHairGroupsInterpolation>;
    GetHairGroupsCards(): TArray<FHairGroupsCardsSourceDescription>;
    GetEnableSimulationCache(): boolean;
    GetEnableGlobalInterpolation(): boolean;
    GetDeformedGroupSections(): TArray<number>;
}
declare const UGroomAsset: UGroomAsset;

declare interface UGroomAssetImportData extends UAssetImportData {
    ImportOptions: UGroomImportOptions;
    HairStrandsTexturesOptions: UGroomCreateStrandsTexturesOptions;
}
declare const UGroomAssetImportData: UGroomAssetImportData;

declare interface UGroomBindingAsset extends UObject {
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
    TargetBindingAttribute: FName;
    GroupInfos: TArray<FGoomBindingGroupInfo>;
    SetTargetSkeletalMesh(InSkeletalMesh: USkeletalMesh): void;
    SetTargetMeshUsedMinLOD(InTargetMeshUsedMinLOD: number): void;
    SetTargetMeshRequestedMinLOD(InTargetMeshRequestedMinLOD: number): void;
    SetTargetGeometryCache(InGeometryCache: UGeometryCache): void;
    SetTargetBindingAttribute(InAttributeName: FName): void;
    SetSourceSkeletalMesh(InSkeletalMesh: USkeletalMesh): void;
    SetSourceMeshUsedLOD(InSourceMeshUsedLOD: number): void;
    SetSourceMeshRequestedLOD(InSourceMeshRequestedLOD: number): void;
    SetSourceGeometryCache(InGeometryCache: UGeometryCache): void;
    SetNumInterpolationPoints(InNumInterpolationPoints: number): void;
    SetMatchingSection(InMatchingSection: number): void;
    SetGroupInfos(InGroupInfos: TArray<FGoomBindingGroupInfo>): void;
    SetGroomBindingType(InGroomBindingType: EGroomBindingMeshType): void;
    SetGroom(InGroom: UGroomAsset): void;
    GetTargetSkeletalMesh(): USkeletalMesh;
    GetTargetMeshUsedMinLOD(): number;
    GetTargetMeshRequestedMinLOD(): number;
    GetTargetGeometryCache(): UGeometryCache;
    GetTargetBindingAttribute(): FName;
    GetSourceSkeletalMesh(): USkeletalMesh;
    GetSourceMeshUsedLOD(): number;
    GetSourceMeshRequestedLOD(): number;
    GetSourceGeometryCache(): UGeometryCache;
    GetNumInterpolationPoints(): number;
    GetMatchingSection(): number;
    GetGroupInfos(): TArray<FGoomBindingGroupInfo>;
    GetGroomBindingType(): EGroomBindingMeshType;
    GetGroom(): UGroomAsset;
    Build(CompletionDelegate: FBuildCompletionDelegate): void;
}
declare const UGroomBindingAsset: UGroomBindingAsset;

declare interface UGroomBindingAssetList extends UObject {
    Bindings: TArray<UGroomBindingAsset>;
}
declare const UGroomBindingAssetList: UGroomBindingAssetList;

declare interface UGroomBlueprintLibrary extends UBlueprintFunctionLibrary {
    IsHairStrandsSupportedInWorld(WorldContextObject: UObject): boolean;
    CreateNewGroomBindingAssetWithPath(InDesiredPackagePath: string | FString, InGroomAsset: UGroomAsset, InSkeletalMesh: USkeletalMesh, InNumInterpolationPoints: number, InSourceSkeletalMeshForTransfer: USkeletalMesh, InMatchingSection: number): UGroomBindingAsset;
    CreateNewGroomBindingAsset(InGroomAsset: UGroomAsset, InSkeletalMesh: USkeletalMesh, InNumInterpolationPoints: number, InSourceSkeletalMeshForTransfer: USkeletalMesh, InMatchingSection: number): UGroomBindingAsset;
    CreateNewGeometryCacheGroomBindingAssetWithPath(DesiredPackagePath: string | FString, GroomAsset: UGroomAsset, GeometryCache: UGeometryCache, NumInterpolationPoints: number, SourceGeometryCacheForTransfer: UGeometryCache, MatchingSection: number): UGroomBindingAsset;
    CreateNewGeometryCacheGroomBindingAsset(GroomAsset: UGroomAsset, GeometryCache: UGeometryCache, NumInterpolationPoints: number, SourceGeometryCacheForTransfer: UGeometryCache, MatchingSection: number): UGroomBindingAsset;
}
declare const UGroomBlueprintLibrary: UGroomBlueprintLibrary;

declare interface UGroomCache extends UObject {
    AssetUserData: TArray<UAssetUserData>;
    GroomCacheInfo: FGroomCacheInfo;
}
declare const UGroomCache: UGroomCache;

declare interface UGroomCacheImportData extends UAssetImportData {
    Settings: FGroomCacheImportSettings;
}
declare const UGroomCacheImportData: UGroomCacheImportData;

declare interface UGroomCacheImportOptions extends UObject {
    ImportSettings: FGroomCacheImportSettings;
}
declare const UGroomCacheImportOptions: UGroomCacheImportOptions;

declare interface UGroomComponent extends UMeshComponent {
    GroomAsset: UGroomAsset;
    GroomCache: UGroomCache;
    NiagaraComponents: TArray<UNiagaraComponent>;
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
    AttachmentName: FString;
    GroomGroupsDesc: TArray<FHairGroupDesc>;
    bUseCards: boolean;
    bRunning: boolean;
    bLooping: boolean;
    bManualTick: boolean;
    ElapsedTime: number;
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
}
declare const UGroomComponent: UGroomComponent;

declare interface UGroomCreateBindingOptions extends UObject {
    GroomAsset: TWeakObjectPtr<UGroomAsset>;
    GroomBindingType: EGroomBindingMeshType;
    SourceSkeletalMesh: USkeletalMesh;
    TargetSkeletalMesh: USkeletalMesh;
    SourceGeometryCache: UGeometryCache;
    TargetGeometryCache: UGeometryCache;
    NumInterpolationPoints: number;
    MatchingSection: number;
    TargetBindingAttribute: FName;
}
declare const UGroomCreateBindingOptions: UGroomCreateBindingOptions;

declare interface UGroomCreateFollicleMaskOptions extends UObject {
    Resolution: number;
    RootRadius: number;
    Grooms: TArray<FFollicleMaskOptions>;
}
declare const UGroomCreateFollicleMaskOptions: UGroomCreateFollicleMaskOptions;

declare interface UGroomCreateStrandsTexturesOptions extends UObject {
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
    GroupIndex: TArray<number>;
    Dilation: number;
    GeneratedTextures: TArray<UTexture2D>;
}
declare const UGroomCreateStrandsTexturesOptions: UGroomCreateStrandsTexturesOptions;

declare interface UGroomHairGroupsMapping extends UObject {
    OldGroupNames: TArray<FName>;
    NewGroupNames: TArray<FName>;
    OldToNewGroupIndexMapping: TArray<number>;
    NewToOldGroupIndexMapping: TArray<number>;
}
declare const UGroomHairGroupsMapping: UGroomHairGroupsMapping;

declare interface UGroomHairGroupsPreview extends UObject {
    Groups: TArray<FGroomHairGroupPreview>;
}
declare const UGroomHairGroupsPreview: UGroomHairGroupsPreview;

declare interface UGroomImportOptions extends UObject {
    ConversionSettings: FGroomConversionSettings;
    InterpolationSettings: TArray<FHairGroupsInterpolation>;
}
declare const UGroomImportOptions: UGroomImportOptions;

declare interface UGroomPluginSettings extends UObject {
    GroomCacheLookAheadBuffer: number;
}
declare const UGroomPluginSettings: UGroomPluginSettings;

declare interface UHairCardGenerationSettings extends UObject {

}
declare const UHairCardGenerationSettings: UHairCardGenerationSettings;

declare interface UMovieSceneGroomCacheSection extends UMovieSceneSection {
    Params: FMovieSceneGroomCacheParams;
}
declare const UMovieSceneGroomCacheSection: UMovieSceneGroomCacheSection;

declare interface UMovieSceneGroomCacheTrack extends UMovieSceneNameableTrack {
    AnimationSections: TArray<UMovieSceneSection>;
}
declare const UMovieSceneGroomCacheTrack: UMovieSceneGroomCacheTrack;

declare interface UNiagaraDataInterfaceHairStrands extends UNiagaraDataInterface {
    DefaultSource: UGroomAsset;
    SourceActor: AActor;
}
declare const UNiagaraDataInterfaceHairStrands: UNiagaraDataInterfaceHairStrands;

declare interface UNiagaraDataInterfacePressureGrid extends UNiagaraDataInterfaceVelocityGrid {

}
declare const UNiagaraDataInterfacePressureGrid: UNiagaraDataInterfacePressureGrid;

declare interface UNiagaraDataInterfaceVelocityGrid extends UNiagaraDataInterfaceRWBase {
    GridSize: FIntVector;
}
declare const UNiagaraDataInterfaceVelocityGrid: UNiagaraDataInterfaceVelocityGrid;

