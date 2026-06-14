declare interface ACSGBuilder extends ACSGBuilderBase {
    CSGRoot: UCSGGroupComponent;
    UsedMaterials: TArray<UTerrainMaterialCore>;
    CurrentPreviewRoot: UCSGBase;
    CurrentPreviewConfig: UBakeConfig;
    PreviewScene: UCSGPreviewScene;
}
declare const ACSGBuilder: ACSGBuilder;

declare interface ACSGBuilderBase extends AActor {
    BoundingBox: FBox;
    PreviewSeed: number;
    PreviewSettings: FCSGOptions;
    EmptyMat: UTerrainMaterialCore;
    ErrorMat: UTerrainMaterialCore;
    SolidMat: UTerrainMaterialCore;
    BurnedMat: UTerrainMaterialCore;
    PreviewComponent: UCSGPreviewComponent;
    PreGenerate(builder: UBakeConfig): void;
}
declare const ACSGBuilderBase: ACSGBuilderBase;

declare interface ADeepCSGSection extends AActor {
    DeepMesh: UDeepProceduralMeshComponent;
}
declare const ADeepCSGSection: ADeepCSGSection;

declare interface ASDFBuilder extends ACSGBuilderBase {
    PreviewSize: EPreviewCellSize;
    PreviewMaterial: UTerrainMaterialCore;
    SDFRoot: USDFUnionOpComponent;
}
declare const ASDFBuilder: ASDFBuilder;

declare interface FBakeEntry {
    Tree: FDeepCSGFloatTreePacked;
    AABB: FBox;
    Materials: TArray<UTerrainMaterialCore>;
    SmartMaterials: TArray<FSmartTerrainMaterialVal>;
}
declare const FBakeEntry: FBakeEntry;

declare interface FBinaryMatPatterns {
    PatternType: EPattern;
    PatternMaterial: UTerrainMaterialCore;
    ReplaceWith: FBinaryMatProperties;
}
declare const FBinaryMatPatterns: FBinaryMatPatterns;

declare interface FBinaryMatProperties {
    Result: EBinaryComb;
    Material: UTerrainMaterialCore;
}
declare const FBinaryMatProperties: FBinaryMatProperties;

declare interface FBinaryTerrainMaterialCombiner {
    IfEmpty: FEmptyBinaryMatProperties;
    IfSolid: FBinaryMatProperties;
    Patterns: TArray<FBinaryMatPatterns>;
}
declare const FBinaryTerrainMaterialCombiner: FBinaryTerrainMaterialCombiner;

declare interface FCSGAddMaterialLayersProperties {
    Layers: TArray<FCSGLayers>;
    Inner: FBinaryTerrainMaterialCombiner;
}
declare const FCSGAddMaterialLayersProperties: FCSGAddMaterialLayersProperties;

declare interface FCSGBakedChildInstanceProperties {
    BakedCSG: UCSGBake;
    VariantIndex: number;
}
declare const FCSGBakedChildInstanceProperties: FCSGBakedChildInstanceProperties;

declare interface FCSGChildInstanceProperties {
    mesh: TSubclassOf<ACSGBuilder>;
    Settings: FCSGOptions;
    Seed: number;
}
declare const FCSGChildInstanceProperties: FCSGChildInstanceProperties;

declare interface FCSGCircleDuplicatorProperties {
    Num: number;
    Radius: number;
}
declare const FCSGCircleDuplicatorProperties: FCSGCircleDuplicatorProperties;

declare interface FCSGConeProperties {
    Height: number;
    RadiusTop: number;
    RadiusBottom: number;
    Sides: number;
}
declare const FCSGConeProperties: FCSGConeProperties;

declare interface FCSGConvexColliderProperties {
    collider: UStaticMesh;
}
declare const FCSGConvexColliderProperties: FCSGConvexColliderProperties;

declare interface FCSGCylinderProperties {
    Height: number;
    Radius: number;
    Sides: number;
}
declare const FCSGCylinderProperties: FCSGCylinderProperties;

declare interface FCSGGridDuplicatorProperties {
    NumA: number;
    NumB: number;
    DirectionA: FVector;
    DirectionB: FVector;
}
declare const FCSGGridDuplicatorProperties: FCSGGridDuplicatorProperties;

declare interface FCSGLayers {
    Offset: number;
    Above: FBinaryTerrainMaterialCombiner;
}
declare const FCSGLayers: FCSGLayers;

declare interface FCSGOption {
    Key: FName;
    IntValue: number;
    FloatValue: number;
    VectorValue: FVector;
}
declare const FCSGOption: FCSGOption;

declare interface FCSGOptions {
    Pairs: TArray<FCSGOption>;
}
declare const FCSGOptions: FCSGOptions;

declare interface FCSGRandomDisableProperties {
    DisableProbability: number;
}
declare const FCSGRandomDisableProperties: FCSGRandomDisableProperties;

declare interface FCSGRandomizeTransformProperties {
    Translation: FBox;
    RotationMinZ: number;
    RotationMaxZ: number;
    RotationMinY: number;
    RotationMaxY: number;
    RotationMinX: number;
    RotationMaxX: number;
    ScaleMin: FVector;
    ScaleMax: FVector;
    ScaleAxesIndependent: boolean;
    DisableRandomize: boolean;
    Seed: number;
}
declare const FCSGRandomizeTransformProperties: FCSGRandomizeTransformProperties;

declare interface FCSGSDFInstanceProperties {
    SDF: TSubclassOf<ASDFBuilder>;
    CellSize: EPreviewCellSize;
    Settings: FCSGOptions;
    Seed: number;
}
declare const FCSGSDFInstanceProperties: FCSGSDFInstanceProperties;

declare interface FCSGSDFModulatedInstanceProperties {
    SDF: TSubclassOf<ASDFBuilder>;
    ModulateSDF: TSubclassOf<ASDFBuilder>;
    CellSize: EPreviewCellSize;
    SDFSettings: FCSGOptions;
    ModulateSettings: FCSGOptions;
    Seed: number;
    ModulateMode: ESDFModulateMode;
    ModulateLayers: TArray<FSDFModulateLayer>;
}
declare const FCSGSDFModulatedInstanceProperties: FCSGSDFModulatedInstanceProperties;

declare interface FCSGSTLProperties {
    mesh: UStaticMeshCarver;
}
declare const FCSGSTLProperties: FCSGSTLProperties;

declare interface FCSGSphereProperties {
    Radius: number;
    AngleTop: number;
    AngleBottom: number;
    SidesTopBottom: number;
    Sides: number;
}
declare const FCSGSphereProperties: FCSGSphereProperties;

declare interface FCarveSplineSegment {
    SplineStart: FVector3f;
    SplineStartTangent: FVector3f;
    SplineEnd: FVector3f;
    SplineEndTangent: FVector3f;
    Radius: number;
}
declare const FCarveSplineSegment: FCarveSplineSegment;

declare interface FCellBox {
    min: FCellId;
    max: FCellId;
}
declare const FCellBox: FCellBox;

declare interface FCellId {
    X: int16;
    Y: int16;
    Z: int16;
}
declare const FCellId: FCellId;

declare interface FChunckIDAndOffset {
    ChunkId: FChunkId;
    Offset: FChunkOffset;
}
declare const FChunckIDAndOffset: FChunckIDAndOffset;

declare interface FChunckIDAndOffsetBox {
    ChunkId: FChunkId;
    minOffset: FChunkOffset;
    maxOffset: FChunkOffset;
}
declare const FChunckIDAndOffsetBox: FChunckIDAndOffsetBox;

declare interface FChunkId {
    X: int16;
    Y: int16;
    Z: int16;
}
declare const FChunkId: FChunkId;

declare interface FChunkOffset {
    X: int16;
    Y: int16;
    Z: int16;
}
declare const FChunkOffset: FChunkOffset;

declare interface FConvexNoiseProperties {
    Amplitude: number;
    GridSize: number;
    Seed: number;
}
declare const FConvexNoiseProperties: FConvexNoiseProperties;

declare interface FDeepCSGFloatPlane {
    Plane: FVector4f;
    Top: FDeepCSGNode;
    Bottom: FDeepCSGNode;
}
declare const FDeepCSGFloatPlane: FDeepCSGFloatPlane;

declare interface FDeepCSGFloatTree {
    Root: FDeepCSGNode;
    planes: TArray<FDeepCSGFloatPlane>;
}
declare const FDeepCSGFloatTree: FDeepCSGFloatTree;

declare interface FDeepCSGFloatTreePacked {
    Root: FDeepCSGNode;
    encplanes: TArray<number>;
}
declare const FDeepCSGFloatTreePacked: FDeepCSGFloatTreePacked;

declare interface FDeepCSGNode {
    Val: uint32;
}
declare const FDeepCSGNode: FDeepCSGNode;

declare interface FDeepCSGTree {

}
declare const FDeepCSGTree: FDeepCSGTree;

declare interface FDeepCSGTreeOperations {

}
declare const FDeepCSGTreeOperations: FDeepCSGTreeOperations;

declare interface FDeepCSGUtils {

}
declare const FDeepCSGUtils: FDeepCSGUtils;

declare interface FEmptyBinaryMatProperties {
    Result: EEmptyBinaryComb;
    Material: UTerrainMaterialCore;
}
declare const FEmptyBinaryMatProperties: FEmptyBinaryMatProperties;

declare interface FEncodedChunkCellId {
    ChunkId: FEncodedChunkId;
    cellOffset: uint16;
}
declare const FEncodedChunkCellId: FEncodedChunkCellId;

declare interface FEncodedChunkId {
    ID: uint32;
}
declare const FEncodedChunkId: FEncodedChunkId;

declare interface FFastNoiseProperties {
    Frequency: number;
    NoiseType: EFNNoiseType;
    RotationType3d: EFNRotationType3D;
    FractalType: EFNFractalType;
    Octaves: number;
    Lacunarity: number;
    Gain: number;
    WeightedStrength: number;
    PingPongStrength: number;
    CellularDistanceFunc: EFNCellularDistanceFunc;
    CellularReturnYype: EFNCellularReturnType;
    CellularJitterMod: number;
    DomainWarpType: EFNDomainWarpType;
    WarpAmplitude: number;
}
declare const FFastNoiseProperties: FFastNoiseProperties;

declare interface FGeneralMatPatterns {
    PatternType: EGeneralPattern;
    PatternMaterial: UTerrainMaterialCore;
    ReplaceWith: FGeneralMatProperties;
}
declare const FGeneralMatPatterns: FGeneralMatPatterns;

declare interface FGeneralMatProperties {
    Result: EGeneralComb;
    Material: UTerrainMaterialCore;
}
declare const FGeneralMatProperties: FGeneralMatProperties;

declare interface FGeneralMatPropertiesEmpty {
    Result: EGeneralCombEmpty;
    Material: UTerrainMaterialCore;
}
declare const FGeneralMatPropertiesEmpty: FGeneralMatPropertiesEmpty;

declare interface FGeneralTerrainMaterialCombiner {
    IfBothEmpty: FGeneralMatPropertiesEmpty;
    Patterns: TArray<FGeneralMatPatterns>;
    IfBothSolid: FGeneralMatProperties;
    IfSrcSolid: FGeneralMatProperties;
    IfDestSolid: FGeneralMatProperties;
}
declare const FGeneralTerrainMaterialCombiner: FGeneralTerrainMaterialCombiner;

declare interface FHMMinMaxLevel {
    Entries: TArray<number>;
}
declare const FHMMinMaxLevel: FHMMinMaxLevel;

declare interface FLinearCellId {
    X: uint16;
    Y: uint16;
    Z: uint16;
}
declare const FLinearCellId: FLinearCellId;

declare interface FMatrixWithExactSync {
    Values: number;
}
declare const FMatrixWithExactSync: FMatrixWithExactSync;

declare interface FMeshBaseProperties {
    Enabled: boolean;
}
declare const FMeshBaseProperties: FMeshBaseProperties;

declare interface FMeshBoxProperties {
    HalfSize: FVector;
    BevelSegments: number;
    BevelSize: number;
}
declare const FMeshBoxProperties: FMeshBoxProperties;

declare interface FMeshCellNoiseProperties {
    CellSize: FVector;
    CellOffsetFactor: number;
    InsideFraction: number;
    Distance: number;
    Seed: number;
}
declare const FMeshCellNoiseProperties: FMeshCellNoiseProperties;

declare interface FMeshLayerProperties {
    StartMaterial: UTerrainMaterialCore;
    BoundingBox: FBox;
}
declare const FMeshLayerProperties: FMeshLayerProperties;

declare interface FSDFBaseProperties {
    Enabled: boolean;
}
declare const FSDFBaseProperties: FSDFBaseProperties;

declare interface FSDFBoxProperties {
    HalfSize: FVector;
}
declare const FSDFBoxProperties: FSDFBoxProperties;

declare interface FSDFCapsuleProperties {
    HalfLength: number;
    Radius: number;
}
declare const FSDFCapsuleProperties: FSDFCapsuleProperties;

declare interface FSDFCylinderProperties {
    HalfLength: number;
    Radius: number;
}
declare const FSDFCylinderProperties: FSDFCylinderProperties;

declare interface FSDFHeightMaproperties {
    Scale: FVector;
}
declare const FSDFHeightMaproperties: FSDFHeightMaproperties;

declare interface FSDFModifierProperties {
    Offset: number;
    Noise: FFastNoiseProperties;
    NoiseAmplitude: number;
    Seed: number;
}
declare const FSDFModifierProperties: FSDFModifierProperties;

declare interface FSDFModulateLayer {
    ModulateDistance: number;
    SDFOffset: number;
}
declare const FSDFModulateLayer: FSDFModulateLayer;

declare interface FSDFOnionProperties {
    Thickness: number;
}
declare const FSDFOnionProperties: FSDFOnionProperties;

declare interface FSDFRandomDisableProperties {
    DisableProbability: number;
}
declare const FSDFRandomDisableProperties: FSDFRandomDisableProperties;

declare interface FSDFRandomizeTransformProperties {
    Translation: FBox;
    RotationMinZ: number;
    RotationMaxZ: number;
    RotationMinY: number;
    RotationMaxY: number;
    RotationMinX: number;
    RotationMaxX: number;
    ScaleMin: FVector;
    ScaleMax: FVector;
    ScaleAxesIndependent: boolean;
    DisableRandomize: boolean;
    Seed: number;
}
declare const FSDFRandomizeTransformProperties: FSDFRandomizeTransformProperties;

declare interface FSDFSmoothingProperties {
    SmoothingDist: number;
    SmoothingEnabled: boolean;
}
declare const FSDFSmoothingProperties: FSDFSmoothingProperties;

declare interface FSDFSphereProperties {
    Radius: number;
    RadiusOverrideName: FName;
}
declare const FSDFSphereProperties: FSDFSphereProperties;

declare interface FSDFTorusProperties {
    Radius: number;
    TubeRadius: number;
    SizeOverrideName: FName;
}
declare const FSDFTorusProperties: FSDFTorusProperties;

declare interface FSmartTerrainMaterialVal {
    IfEmpty: uint32;
    IfSolid: uint32;
    OverrideKeys: TArray<uint32>;
    OverrideValues: TArray<uint32>;
}
declare const FSmartTerrainMaterialVal: FSmartTerrainMaterialVal;

declare interface FSplineWarpProperties {
    ElementBox: FBox;
    SplineWarpType: ESplineWarpType;
}
declare const FSplineWarpProperties: FSplineWarpProperties;

declare interface FVoronoiProperties {
    HalfSize: FVector;
    NumPoints: number;
    Seed: number;
    Distance: number;
    Inverted: boolean;
}
declare const FVoronoiProperties: FVoronoiProperties;

declare interface FWarpNoiseProperties {
    Frequency: number;
    RotationType3d: EFNRotationType3D;
    FractalType: EFNFractalType;
    Octaves: number;
    Lacunarity: number;
    Gain: number;
    WeightedStrength: number;
    DomainWarpType: EFNDomainWarpType;
    Amplitude: number;
}
declare const FWarpNoiseProperties: FWarpNoiseProperties;

declare interface FWarpedProperties {
    CellSize: EPreviewCellSize;
    WarpNoise: FWarpNoiseProperties;
    Seed: number;
}
declare const FWarpedProperties: FWarpedProperties;

declare interface UBakeConfig extends UObject {
    Settings: FCSGOptions;
    Objects: Record<FName, UBuilderBase>;
    Warnings: TArray<FString>;
    GetVectorSetting(Name: FName, defaultVal: FVector): FVector;
    GetRandomStream(): FRandomStream;
    GetObject(Name: FName): UBuilderBase;
    GetIntSetting(Name: FName, defaultVal: number): number;
    GetFloatSetting(Name: FName, defaultVal: number): number;
    GetBoolSetting(Name: FName, defaultVal: boolean): boolean;
}
declare const UBakeConfig: UBakeConfig;

declare interface UBuilderBase extends UObject {

}
declare const UBuilderBase: UBuilderBase;

declare interface UCSGAddMaterialLayers extends UCSGSingleChildBase {
    Properties: FCSGAddMaterialLayersProperties;
}
declare const UCSGAddMaterialLayers: UCSGAddMaterialLayers;

declare interface UCSGAddMaterialLayersComponent extends UCSGBaseComponent {
    Properties: FCSGAddMaterialLayersProperties;
}
declare const UCSGAddMaterialLayersComponent: UCSGAddMaterialLayersComponent;

declare interface UCSGBake extends UDataAsset {
    BakeSettings: FCSGOptions;
    NumVariations: number;
    InitialSeed: number;
    CSG: TSoftClassPtr<ACSGBuilder>;
    status: FString;
    CombinedAABB: FBox;
    Entries: TArray<FBakeEntry>;
    IsBaking: boolean;
    CurrentBakeConfigs: TArray<UBakeConfig>;
    CDO: ACSGBuilder;
    BakeCSG(): void;
}
declare const UCSGBake: UCSGBake;

declare interface UCSGBakedChildInstance extends UCSGBase {
    Properties: FCSGBakedChildInstanceProperties;
    ChildLocalSpaceBoundingBox: FBox;
    WorldSpaceBoundingBox: FBox;
    TransformMatInv: FMatrix;
    TempTree: FDeepCSGFloatTree;
}
declare const UCSGBakedChildInstance: UCSGBakedChildInstance;

declare interface UCSGBakedChildInstanceComponent extends UCSGBaseComponent {
    Properties: FCSGBakedChildInstanceProperties;
}
declare const UCSGBakedChildInstanceComponent: UCSGBakedChildInstanceComponent;

declare interface UCSGBase extends UBuilderBase {
    BaseProperties: FMeshBaseProperties;
    RelativeTransform: FTransform;
}
declare const UCSGBase: UCSGBase;

declare interface UCSGBaseComponent extends UCSGBuilderBaseSceneComponent {
    BaseProperties: FMeshBaseProperties;
}
declare const UCSGBaseComponent: UCSGBaseComponent;

declare interface UCSGBox extends UConvexMeshWithCachedTree {
    Properties: FMeshBoxProperties;
}
declare const UCSGBox: UCSGBox;

declare interface UCSGBoxComponent extends UConvexMeshWithCachedTreeComponent {
    Properties: FMeshBoxProperties;
}
declare const UCSGBoxComponent: UCSGBoxComponent;

declare interface UCSGBuilderBaseSceneComponent extends USceneComponent {

}
declare const UCSGBuilderBaseSceneComponent: UCSGBuilderBaseSceneComponent;

declare interface UCSGCellNoise extends UCSGBase {
    Properties: FMeshCellNoiseProperties;
    Materials: FBinaryTerrainMaterialCombiner;
    ReciprocalCellSize: FVector;
    ApplyTree: FDeepCSGFloatTree;
    CellPositions: TArray<FVector>;
    CellLeaves: TArray<FDeepCSGNode>;
}
declare const UCSGCellNoise: UCSGCellNoise;

declare interface UCSGCellNoiseComponent extends UCSGBaseComponent {
    Properties: FMeshCellNoiseProperties;
    Materials: FBinaryTerrainMaterialCombiner;
}
declare const UCSGCellNoiseComponent: UCSGCellNoiseComponent;

declare interface UCSGChildInstance extends UCSGBase {
    Properties: FCSGChildInstanceProperties;
    Materials: FGeneralTerrainMaterialCombiner;
    CSGChildInstanceRoot: UCSGBase;
    CurrentBakeConfig: UBakeConfig;
    ChildLocalSpaceBoundingBox: FBox;
    WorldSpaceBoundingBox: FBox;
    BoundingTree: FDeepCSGFloatTree;
    TransformMatInv: FMatrix;
    TempTree: FDeepCSGTree;
}
declare const UCSGChildInstance: UCSGChildInstance;

declare interface UCSGChildInstanceComponent extends UCSGBaseComponent {
    Properties: FCSGChildInstanceProperties;
    Materials: FGeneralTerrainMaterialCombiner;
}
declare const UCSGChildInstanceComponent: UCSGChildInstanceComponent;

declare interface UCSGCircleDuplicator extends UCSGDuplicateSingleChildBase {
    Properties: FCSGCircleDuplicatorProperties;
}
declare const UCSGCircleDuplicator: UCSGCircleDuplicator;

declare interface UCSGCircleDuplicatorComponent extends UCSGBaseComponent {
    Properties: FCSGCircleDuplicatorProperties;
}
declare const UCSGCircleDuplicatorComponent: UCSGCircleDuplicatorComponent;

declare interface UCSGCone extends UConvexMeshWithCachedTree {
    Properties: FCSGConeProperties;
}
declare const UCSGCone: UCSGCone;

declare interface UCSGConeComponent extends UConvexMeshWithCachedTreeComponent {
    Properties: FCSGConeProperties;
}
declare const UCSGConeComponent: UCSGConeComponent;

declare interface UCSGConvexCollider extends UConvexMeshWithCachedTree {
    Properties: FCSGConvexColliderProperties;
}
declare const UCSGConvexCollider: UCSGConvexCollider;

declare interface UCSGConvexColliderComponent extends UConvexMeshWithCachedTreeComponent {
    Properties: FCSGConvexColliderProperties;
}
declare const UCSGConvexColliderComponent: UCSGConvexColliderComponent;

declare interface UCSGCylinder extends UConvexMeshWithCachedTree {
    Properties: FCSGCylinderProperties;
}
declare const UCSGCylinder: UCSGCylinder;

declare interface UCSGCylinderComponent extends UConvexMeshWithCachedTreeComponent {
    Properties: FCSGCylinderProperties;
}
declare const UCSGCylinderComponent: UCSGCylinderComponent;

declare interface UCSGDuplicateSingleChildBase extends UCSGBase {
    Children: TArray<UCSGBase>;
}
declare const UCSGDuplicateSingleChildBase: UCSGDuplicateSingleChildBase;

declare interface UCSGGridDuplicator extends UCSGDuplicateSingleChildBase {
    Properties: FCSGGridDuplicatorProperties;
}
declare const UCSGGridDuplicator: UCSGGridDuplicator;

declare interface UCSGGridDuplicatorComponent extends UCSGBaseComponent {
    Properties: FCSGGridDuplicatorProperties;
}
declare const UCSGGridDuplicatorComponent: UCSGGridDuplicatorComponent;

declare interface UCSGGroup extends UCSGBase {
    Children: TArray<UCSGBase>;
}
declare const UCSGGroup: UCSGGroup;

declare interface UCSGGroupComponent extends UCSGBaseComponent {

}
declare const UCSGGroupComponent: UCSGGroupComponent;

declare interface UCSGLayer extends UCSGGroup {
    Properties: FMeshLayerProperties;
    Materials: FGeneralTerrainMaterialCombiner;
    WorldSpaceBoundingBox: FBox;
    BoundingTree: FDeepCSGFloatTree;
    TempTree: FDeepCSGTree;
    TransformMatInv: FMatrix;
}
declare const UCSGLayer: UCSGLayer;

declare interface UCSGLayerComponent extends UCSGGroupComponent {
    Properties: FMeshLayerProperties;
    Materials: FGeneralTerrainMaterialCombiner;
}
declare const UCSGLayerComponent: UCSGLayerComponent;

declare interface UCSGModulatedSDFInstance extends UCSGBase {
    Properties: FCSGSDFModulatedInstanceProperties;
    Materials: FBinaryTerrainMaterialCombiner;
    CSGSDFInstanceRoot: USDFBase;
    CurrentBakeConfig: UBakeConfig;
    CSGSDFModulatedInstanceRoot: USDFBase;
    CurrentModulatedBakeConfig: UBakeConfig;
    ChildLocalSpaceBoundingBox: FBox;
    WorldSpaceBoundingBox: FBox;
    BoundingTree: FDeepCSGFloatTree;
    TransformMatInv: FMatrix;
}
declare const UCSGModulatedSDFInstance: UCSGModulatedSDFInstance;

declare interface UCSGModulatedSDFInstanceComponent extends UCSGBaseComponent {
    Properties: FCSGSDFModulatedInstanceProperties;
    Materials: FBinaryTerrainMaterialCombiner;
}
declare const UCSGModulatedSDFInstanceComponent: UCSGModulatedSDFInstanceComponent;

declare interface UCSGPlane extends UConvexMeshWithCachedTree {

}
declare const UCSGPlane: UCSGPlane;

declare interface UCSGPlaneComponent extends UConvexMeshWithCachedTreeComponent {

}
declare const UCSGPlaneComponent: UCSGPlaneComponent;

declare interface UCSGPreviewComponent extends USceneComponent {
    BaseBuilder: ACSGBuilderBase;
    CurrentBakeConfig: UBakeConfig;
    Meshes: Record<string | number | symbol, UDeepProceduralMeshComponent>;
    UsePreviewScene: boolean;
    ChangeCount: number;
}
declare const UCSGPreviewComponent: UCSGPreviewComponent;

declare interface UCSGPreviewScene extends UDataAsset {
    mesh: TSubclassOf<ACSGBuilder>;
    Settings: FCSGOptions;
    Seed: number;
    TerrainMaterial: UTerrainMaterialCore;
}
declare const UCSGPreviewScene: UCSGPreviewScene;

declare interface UCSGRandomDisable extends UCSGSingleChildBase {
    Properties: FCSGRandomDisableProperties;
}
declare const UCSGRandomDisable: UCSGRandomDisable;

declare interface UCSGRandomDisableComponent extends UCSGBaseComponent {
    Properties: FCSGRandomDisableProperties;
}
declare const UCSGRandomDisableComponent: UCSGRandomDisableComponent;

declare interface UCSGRandomizeTransform extends UCSGSingleChildBase {
    Properties: FCSGRandomizeTransformProperties;
}
declare const UCSGRandomizeTransform: UCSGRandomizeTransform;

declare interface UCSGRandomizeTransformComponent extends UCSGBaseComponent {
    Properties: FCSGRandomizeTransformProperties;
}
declare const UCSGRandomizeTransformComponent: UCSGRandomizeTransformComponent;

declare interface UCSGSDFInstance extends UCSGBase {
    Properties: FCSGSDFInstanceProperties;
    Materials: FBinaryTerrainMaterialCombiner;
    CSGSDFInstanceRoot: USDFBase;
    CurrentBakeConfig: UBakeConfig;
    ChildLocalSpaceBoundingBox: FBox;
    WorldSpaceBoundingBox: FBox;
    BoundingTree: FDeepCSGFloatTree;
    TransformMatInv: FMatrix;
}
declare const UCSGSDFInstance: UCSGSDFInstance;

declare interface UCSGSDFInstanceComponent extends UCSGBaseComponent {
    Properties: FCSGSDFInstanceProperties;
    Materials: FBinaryTerrainMaterialCombiner;
}
declare const UCSGSDFInstanceComponent: UCSGSDFInstanceComponent;

declare interface UCSGSTL extends USimpleMeshWithCachedTree {
    Properties: FCSGSTLProperties;
}
declare const UCSGSTL: UCSGSTL;

declare interface UCSGSTLComponent extends USimpleMeshWithCachedTreeComponent {
    Properties: FCSGSTLProperties;
}
declare const UCSGSTLComponent: UCSGSTLComponent;

declare interface UCSGSingleChildBase extends UCSGBase {
    Child: UCSGBase;
}
declare const UCSGSingleChildBase: UCSGSingleChildBase;

declare interface UCSGSphere extends UConvexMeshWithCachedTree {
    Properties: FCSGSphereProperties;
}
declare const UCSGSphere: UCSGSphere;

declare interface UCSGSphereComponent extends UConvexMeshWithCachedTreeComponent {
    Properties: FCSGSphereProperties;
}
declare const UCSGSphereComponent: UCSGSphereComponent;

declare interface UCSGSplineWarp extends UCSGWarped {
    SplineProperties: FSplineWarpProperties;
    SplineCurves: FSplineCurves;
    AABBs: TArray<FBox>;
    Keys: TArray<number>;
    planes: TArray<FVector4>;
    TotalAABB: FBox;
}
declare const UCSGSplineWarp: UCSGSplineWarp;

declare interface UCSGSplineWarpComponent extends UCSGWarpedComponent {
    SplineProperties: FSplineWarpProperties;
}
declare const UCSGSplineWarpComponent: UCSGSplineWarpComponent;

declare interface UCSGVoronoi extends USimpleMeshWithCachedTree {
    Properties: FVoronoiProperties;
}
declare const UCSGVoronoi: UCSGVoronoi;

declare interface UCSGVoronoiComponent extends USimpleMeshWithCachedTreeComponent {
    Properties: FVoronoiProperties;
}
declare const UCSGVoronoiComponent: UCSGVoronoiComponent;

declare interface UCSGWarped extends UCSGSingleChildBase {
    Properties: FWarpedProperties;
}
declare const UCSGWarped: UCSGWarped;

declare interface UCSGWarpedComponent extends UCSGBaseComponent {
    Properties: FWarpedProperties;
}
declare const UCSGWarpedComponent: UCSGWarpedComponent;

declare interface UConvexMeshWithCachedTree extends USimpleMeshWithCachedTree {
    Noise: FConvexNoiseProperties;
}
declare const UConvexMeshWithCachedTree: UConvexMeshWithCachedTree;

declare interface UConvexMeshWithCachedTreeComponent extends USimpleMeshWithCachedTreeComponent {
    Noise: FConvexNoiseProperties;
}
declare const UConvexMeshWithCachedTreeComponent: UConvexMeshWithCachedTreeComponent;

declare interface UDeepProceduralMeshComponent extends UMeshComponent {
    ProcMeshBodySetup: UBodySetup;
    FindTerrainMaterialFromPhysicalMaterial(Material: UPhysicalMaterial): UTerrainMaterialCore;
}
declare const UDeepProceduralMeshComponent: UDeepProceduralMeshComponent;

declare interface UHeightMapWithMinMaxQuadTree extends UDataAsset {
    status: FString;
    InputRenderTarget: TSoftObjectPtr<UTextureRenderTarget2D>;
    InputTexture: TSoftObjectPtr<UTexture>;
    MinMaxTree: TArray<FHMMinMaxLevel>;
    MinHeight: number;
    MaxHeight: number;
    Heights: TArray<number>;
    Dimensions: number;
    Initialized: boolean;
    Generate(): void;
}
declare const UHeightMapWithMinMaxQuadTree: UHeightMapWithMinMaxQuadTree;

declare interface USDFBase extends UBuilderBase {
    BaseProperties: FSDFBaseProperties;
    RelativeTransform: FTransform;
}
declare const USDFBase: USDFBase;

declare interface USDFBaseComponent extends UCSGBuilderBaseSceneComponent {
    BaseProperties: FSDFBaseProperties;
}
declare const USDFBaseComponent: USDFBaseComponent;

declare interface USDFBaseWithTransform extends USDFBase {

}
declare const USDFBaseWithTransform: USDFBaseWithTransform;

declare interface USDFBaseWithTransformComponent extends USDFBaseComponent {

}
declare const USDFBaseWithTransformComponent: USDFBaseWithTransformComponent;

declare interface USDFBox extends USDFBaseWithTransform {
    Properties: FSDFBoxProperties;
}
declare const USDFBox: USDFBox;

declare interface USDFBoxComponent extends USDFBaseWithTransformComponent {
    Properties: FSDFBoxProperties;
}
declare const USDFBoxComponent: USDFBoxComponent;

declare interface USDFCapsule extends USDFBaseWithTransform {
    Properties: FSDFCapsuleProperties;
}
declare const USDFCapsule: USDFCapsule;

declare interface USDFCapsuleComponent extends USDFBaseWithTransformComponent {
    Properties: FSDFCapsuleProperties;
}
declare const USDFCapsuleComponent: USDFCapsuleComponent;

declare interface USDFCylinder extends USDFBaseWithTransform {
    Properties: FSDFCylinderProperties;
}
declare const USDFCylinder: USDFCylinder;

declare interface USDFCylinderComponent extends USDFBaseWithTransformComponent {
    Properties: FSDFCylinderProperties;
}
declare const USDFCylinderComponent: USDFCylinderComponent;

declare interface USDFHeightMap extends USDFBase {
    Properties: FSDFHeightMaproperties;
    Heightmap: UHeightMapWithMinMaxQuadTree;
}
declare const USDFHeightMap: USDFHeightMap;

declare interface USDFHeightMapComponent extends USDFBaseComponent {
    Properties: FSDFHeightMaproperties;
    Heightmap: UHeightMapWithMinMaxQuadTree;
}
declare const USDFHeightMapComponent: USDFHeightMapComponent;

declare interface USDFIntersectOp extends USDFBase {
    Properties: FSDFSmoothingProperties;
    Arguments: TArray<USDFBase>;
}
declare const USDFIntersectOp: USDFIntersectOp;

declare interface USDFIntersectOpComponent extends USDFBaseComponent {
    Properties: FSDFSmoothingProperties;
}
declare const USDFIntersectOpComponent: USDFIntersectOpComponent;

declare interface USDFModifier extends USDFSingleChildBase {
    Properties: FSDFModifierProperties;
}
declare const USDFModifier: USDFModifier;

declare interface USDFModifierComponent extends USDFBaseComponent {
    Properties: FSDFModifierProperties;
}
declare const USDFModifierComponent: USDFModifierComponent;

declare interface USDFOnion extends USDFBase {
    Properties: FSDFOnionProperties;
    Argument: USDFBase;
}
declare const USDFOnion: USDFOnion;

declare interface USDFOnionComponent extends USDFBaseComponent {
    Properties: FSDFOnionProperties;
}
declare const USDFOnionComponent: USDFOnionComponent;

declare interface USDFPlane extends USDFBaseWithTransform {

}
declare const USDFPlane: USDFPlane;

declare interface USDFPlaneComponent extends USDFBaseWithTransformComponent {

}
declare const USDFPlaneComponent: USDFPlaneComponent;

declare interface USDFRandomDisable extends USDFSingleChildBase {
    Properties: FSDFRandomDisableProperties;
}
declare const USDFRandomDisable: USDFRandomDisable;

declare interface USDFRandomDisableComponent extends USDFBaseComponent {
    Properties: FSDFRandomDisableProperties;
}
declare const USDFRandomDisableComponent: USDFRandomDisableComponent;

declare interface USDFRandomizeTransform extends USDFSingleChildBase {
    Properties: FSDFRandomizeTransformProperties;
}
declare const USDFRandomizeTransform: USDFRandomizeTransform;

declare interface USDFRandomizeTransformComponent extends USDFBaseComponent {
    Properties: FSDFRandomizeTransformProperties;
}
declare const USDFRandomizeTransformComponent: USDFRandomizeTransformComponent;

declare interface USDFSingleChildBase extends USDFBase {
    Child: USDFBase;
}
declare const USDFSingleChildBase: USDFSingleChildBase;

declare interface USDFSphere extends USDFBaseWithTransform {
    Properties: FSDFSphereProperties;
}
declare const USDFSphere: USDFSphere;

declare interface USDFSphereComponent extends USDFBaseWithTransformComponent {
    Properties: FSDFSphereProperties;
}
declare const USDFSphereComponent: USDFSphereComponent;

declare interface USDFSubOp extends USDFBase {
    Properties: FSDFSmoothingProperties;
    A: USDFBase;
    B: USDFBase;
}
declare const USDFSubOp: USDFSubOp;

declare interface USDFSubOpComponent extends USDFBaseComponent {
    Properties: FSDFSmoothingProperties;
}
declare const USDFSubOpComponent: USDFSubOpComponent;

declare interface USDFTorus extends USDFBaseWithTransform {
    Properties: FSDFTorusProperties;
}
declare const USDFTorus: USDFTorus;

declare interface USDFTorusComponent extends USDFBaseWithTransformComponent {
    Properties: FSDFTorusProperties;
}
declare const USDFTorusComponent: USDFTorusComponent;

declare interface USDFUnionOp extends USDFBase {
    Properties: FSDFSmoothingProperties;
    Arguments: TArray<USDFBase>;
}
declare const USDFUnionOp: USDFUnionOp;

declare interface USDFUnionOpComponent extends USDFBaseComponent {
    Properties: FSDFSmoothingProperties;
}
declare const USDFUnionOpComponent: USDFUnionOpComponent;

declare interface USimpleMeshWithCachedTree extends UCSGBase {
    Materials: FBinaryTerrainMaterialCombiner;
    InvertCSG: boolean;
}
declare const USimpleMeshWithCachedTree: USimpleMeshWithCachedTree;

declare interface USimpleMeshWithCachedTreeComponent extends UCSGBaseComponent {
    Materials: FBinaryTerrainMaterialCombiner;
    InvertCSG: boolean;
}
declare const USimpleMeshWithCachedTreeComponent: USimpleMeshWithCachedTreeComponent;

declare interface UStaticMeshCarver extends UDataAsset {
    status: FString;
    mesh: TSoftObjectPtr<UStaticMesh>;
    AABB: FBox;
    BSPTree: FDeepCSGFloatTree;
    BSPTreePacked: FDeepCSGFloatTreePacked;
    Generate(): void;
    ExportPreviewMesh(): void;
}
declare const UStaticMeshCarver: UStaticMeshCarver;

declare interface UTerrainMaterialBase extends UPrimaryDataAsset {

}
declare const UTerrainMaterialBase: UTerrainMaterialBase;

declare interface UTerrainMaterialCore extends UTerrainMaterialBase {
    BurntMaterial: UTerrainMaterialCore;
    BulletBurntMaterial: UTerrainMaterialCore;
    PathfinderDanger: boolean;
    PathfinderPreventSpawning: boolean;
    ScannerMaterial: UMaterialInterface;
    RenderMaterial: TSoftObjectPtr<UMaterialInterface>;
    NumDynamicRenderMaterialInstances: number;
    InstancingDuration: number;
    DynamicRenderMaterials: TArray<UMaterialInstanceDynamic>;
    LastDynamicIndex: number;
}
declare const UTerrainMaterialCore: UTerrainMaterialCore;

