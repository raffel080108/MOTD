declare interface ACSGBuilder extends ACSGBuilderBase {
    readonly __properties_ACSGBuilder: {
        CSGRoot: UCSGGroupComponent;
        UsedMaterials: UTerrainMaterialCore[];
        CurrentPreviewRoot: UCSGBase;
        CurrentPreviewConfig: UBakeConfig;
        PreviewScene: UCSGPreviewScene;
    };
    readonly __staticRegistry: 
        ACSGBuilderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ACSGBuilder['__properties_ACSGBuilder'] &
        ACSGBuilderBase['__propertyRegistry'];
}

declare interface ACSGBuilderBase extends AActor {
    readonly __static_ACSGBuilderBase: {
        PreGenerate(builder: UBakeConfig): void;
    };
    readonly __properties_ACSGBuilderBase: {
        BoundingBox: FBox;
        PreviewSeed: number;
        PreviewSettings: FCSGOptions;
        EmptyMat: UTerrainMaterialCore;
        ErrorMat: UTerrainMaterialCore;
        SolidMat: UTerrainMaterialCore;
        BurnedMat: UTerrainMaterialCore;
        PreviewComponent: UCSGPreviewComponent;
    };
    readonly __staticRegistry: 
        ACSGBuilderBase['__static_ACSGBuilderBase'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACSGBuilderBase['__properties_ACSGBuilderBase'] &
        AActor['__propertyRegistry'];
}

declare interface ADeepCSGSection extends AActor {
    readonly __properties_ADeepCSGSection: {
        DeepMesh: UDeepProceduralMeshComponent;
    };
    readonly __staticRegistry: 
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ADeepCSGSection['__properties_ADeepCSGSection'] &
        AActor['__propertyRegistry'];
}

declare interface ASDFBuilder extends ACSGBuilderBase {
    readonly __properties_ASDFBuilder: {
        PreviewSize: EPreviewCellSize;
        PreviewMaterial: UTerrainMaterialCore;
        SDFRoot: USDFUnionOpComponent;
    };
    readonly __staticRegistry: 
        ACSGBuilderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ASDFBuilder['__properties_ASDFBuilder'] &
        ACSGBuilderBase['__propertyRegistry'];
}

declare interface FBakeEntry {
    Tree: FDeepCSGFloatTreePacked;
    AABB: FBox;
    Materials: UTerrainMaterialCore[];
    SmartMaterials: FSmartTerrainMaterialVal[];
}

declare interface FBinaryMatPatterns {
    PatternType: EPattern;
    PatternMaterial: UTerrainMaterialCore;
    ReplaceWith: FBinaryMatProperties;
}

declare interface FBinaryMatProperties {
    Result: EBinaryComb;
    Material: UTerrainMaterialCore;
}

declare interface FBinaryTerrainMaterialCombiner {
    IfEmpty: FEmptyBinaryMatProperties;
    IfSolid: FBinaryMatProperties;
    Patterns: FBinaryMatPatterns[];
}

declare interface FCSGAddMaterialLayersProperties {
    Layers: FCSGLayers[];
    Inner: FBinaryTerrainMaterialCombiner;
}

declare interface FCSGBakedChildInstanceProperties {
    BakedCSG: UCSGBake;
    VariantIndex: number;
}

declare interface FCSGChildInstanceProperties {
    mesh: TSubclassOf<ACSGBuilder>;
    Settings: FCSGOptions;
    Seed: number;
}

declare interface FCSGCircleDuplicatorProperties {
    Num: number;
    Radius: number;
}

declare interface FCSGConeProperties {
    Height: number;
    RadiusTop: number;
    RadiusBottom: number;
    Sides: number;
}

declare interface FCSGConvexColliderProperties {
    collider: UStaticMesh;
}

declare interface FCSGCylinderProperties {
    Height: number;
    Radius: number;
    Sides: number;
}

declare interface FCSGGridDuplicatorProperties {
    NumA: number;
    NumB: number;
    DirectionA: FVector;
    DirectionB: FVector;
}

declare interface FCSGLayers {
    Offset: number;
    Above: FBinaryTerrainMaterialCombiner;
}

declare interface FCSGOption {
    Key: string;
    IntValue: number;
    FloatValue: number;
    VectorValue: FVector;
}

declare interface FCSGOptions {
    Pairs: FCSGOption[];
}

declare interface FCSGRandomDisableProperties {
    DisableProbability: number;
}

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

declare interface FCSGSDFInstanceProperties {
    SDF: TSubclassOf<ASDFBuilder>;
    CellSize: EPreviewCellSize;
    Settings: FCSGOptions;
    Seed: number;
}

declare interface FCSGSDFModulatedInstanceProperties {
    SDF: TSubclassOf<ASDFBuilder>;
    ModulateSDF: TSubclassOf<ASDFBuilder>;
    CellSize: EPreviewCellSize;
    SDFSettings: FCSGOptions;
    ModulateSettings: FCSGOptions;
    Seed: number;
    ModulateMode: ESDFModulateMode;
    ModulateLayers: FSDFModulateLayer[];
}

declare interface FCSGSTLProperties {
    mesh: UStaticMeshCarver;
}

declare interface FCSGSphereProperties {
    Radius: number;
    AngleTop: number;
    AngleBottom: number;
    SidesTopBottom: number;
    Sides: number;
}

declare interface FCarveSplineSegment {
    SplineStart: FVector3f;
    SplineStartTangent: FVector3f;
    SplineEnd: FVector3f;
    SplineEndTangent: FVector3f;
    Radius: number;
}

declare interface FCellBox {
    min: FCellId;
    max: FCellId;
}

declare interface FCellId {
    X: number;
    Y: number;
    Z: number;
}

declare interface FChunckIDAndOffset {
    ChunkId: FChunkId;
    Offset: FChunkOffset;
}

declare interface FChunckIDAndOffsetBox {
    ChunkId: FChunkId;
    minOffset: FChunkOffset;
    maxOffset: FChunkOffset;
}

declare interface FChunkId {
    X: number;
    Y: number;
    Z: number;
}

declare interface FChunkOffset {
    X: number;
    Y: number;
    Z: number;
}

declare interface FConvexNoiseProperties {
    Amplitude: number;
    GridSize: number;
    Seed: number;
}

declare interface FDeepCSGFloatPlane {
    Plane: FVector4f;
    Top: FDeepCSGNode;
    Bottom: FDeepCSGNode;
}

declare interface FDeepCSGFloatTree {
    Root: FDeepCSGNode;
    planes: FDeepCSGFloatPlane[];
}

declare interface FDeepCSGFloatTreePacked {
    Root: FDeepCSGNode;
    encplanes: number[];
}

declare interface FDeepCSGNode {
    Val: number;
}

declare type FDeepCSGTree = object;

declare type FDeepCSGTreeOperations = object;

declare type FDeepCSGUtils = object;

declare interface FEmptyBinaryMatProperties {
    Result: EEmptyBinaryComb;
    Material: UTerrainMaterialCore;
}

declare interface FEncodedChunkCellId {
    ChunkId: FEncodedChunkId;
    cellOffset: number;
}

declare interface FEncodedChunkId {
    ID: number;
}

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

declare interface FGeneralMatPatterns {
    PatternType: EGeneralPattern;
    PatternMaterial: UTerrainMaterialCore;
    ReplaceWith: FGeneralMatProperties;
}

declare interface FGeneralMatProperties {
    Result: EGeneralComb;
    Material: UTerrainMaterialCore;
}

declare interface FGeneralMatPropertiesEmpty {
    Result: EGeneralCombEmpty;
    Material: UTerrainMaterialCore;
}

declare interface FGeneralTerrainMaterialCombiner {
    IfBothEmpty: FGeneralMatPropertiesEmpty;
    Patterns: FGeneralMatPatterns[];
    IfBothSolid: FGeneralMatProperties;
    IfSrcSolid: FGeneralMatProperties;
    IfDestSolid: FGeneralMatProperties;
}

declare interface FHMMinMaxLevel {
    Entries: number[];
}

declare interface FLinearCellId {
    X: number;
    Y: number;
    Z: number;
}

declare interface FMatrixWithExactSync {
    Values: number;
}

declare interface FMeshBaseProperties {
    Enabled: boolean;
}

declare interface FMeshBoxProperties {
    HalfSize: FVector;
    BevelSegments: number;
    BevelSize: number;
}

declare interface FMeshCellNoiseProperties {
    CellSize: FVector;
    CellOffsetFactor: number;
    InsideFraction: number;
    Distance: number;
    Seed: number;
}

declare interface FMeshLayerProperties {
    StartMaterial: UTerrainMaterialCore;
    BoundingBox: FBox;
}

declare interface FSDFBaseProperties {
    Enabled: boolean;
}

declare interface FSDFBoxProperties {
    HalfSize: FVector;
}

declare interface FSDFCapsuleProperties {
    HalfLength: number;
    Radius: number;
}

declare interface FSDFCylinderProperties {
    HalfLength: number;
    Radius: number;
}

declare interface FSDFHeightMaproperties {
    Scale: FVector;
}

declare interface FSDFModifierProperties {
    Offset: number;
    Noise: FFastNoiseProperties;
    NoiseAmplitude: number;
    Seed: number;
}

declare interface FSDFModulateLayer {
    ModulateDistance: number;
    SDFOffset: number;
}

declare interface FSDFOnionProperties {
    Thickness: number;
}

declare interface FSDFRandomDisableProperties {
    DisableProbability: number;
}

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

declare interface FSDFSmoothingProperties {
    SmoothingDist: number;
    SmoothingEnabled: boolean;
}

declare interface FSDFSphereProperties {
    Radius: number;
    RadiusOverrideName: string;
}

declare interface FSDFTorusProperties {
    Radius: number;
    TubeRadius: number;
    SizeOverrideName: string;
}

declare interface FSmartTerrainMaterialVal {
    IfEmpty: number;
    IfSolid: number;
    OverrideKeys: number[];
    OverrideValues: number[];
}

declare interface FSplineWarpProperties {
    ElementBox: FBox;
    SplineWarpType: ESplineWarpType;
}

declare interface FVoronoiProperties {
    HalfSize: FVector;
    NumPoints: number;
    Seed: number;
    Distance: number;
    Inverted: boolean;
}

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

declare interface FWarpedProperties {
    CellSize: EPreviewCellSize;
    WarpNoise: FWarpNoiseProperties;
    Seed: number;
}

declare interface UBakeConfig extends UObject {
    readonly __static_UBakeConfig: {
        GetVectorSetting(Name: string, defaultVal: FVector): FVector;
        GetRandomStream(): FRandomStream;
        GetObject(Name: string): UBuilderBase;
        GetIntSetting(Name: string, defaultVal: number): number;
        GetFloatSetting(Name: string, defaultVal: number): number;
        GetBoolSetting(Name: string, defaultVal: boolean): boolean;
    };
    readonly __properties_UBakeConfig: {
        Settings: FCSGOptions;
        Objects: TMap<string, UBuilderBase>;
        Warnings: string[];
    };
    readonly __staticRegistry: 
        UBakeConfig['__static_UBakeConfig'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UBakeConfig['__properties_UBakeConfig'] &
        UObject['__propertyRegistry'];
}

declare interface UBuilderBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UCSGAddMaterialLayers extends UCSGSingleChildBase {
    readonly __properties_UCSGAddMaterialLayers: {
        Properties: FCSGAddMaterialLayersProperties;
    };
    readonly __staticRegistry: 
        UCSGSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGAddMaterialLayers['__properties_UCSGAddMaterialLayers'] &
        UCSGSingleChildBase['__propertyRegistry'];
}

declare interface UCSGAddMaterialLayersComponent extends UCSGBaseComponent {
    readonly __properties_UCSGAddMaterialLayersComponent: {
        Properties: FCSGAddMaterialLayersProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGAddMaterialLayersComponent['__properties_UCSGAddMaterialLayersComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGBake extends UDataAsset {
    readonly __static_UCSGBake: {
        BakeCSG(): void;
    };
    readonly __properties_UCSGBake: {
        BakeSettings: FCSGOptions;
        NumVariations: number;
        InitialSeed: number;
        CSG: TSoftClassPtr<ACSGBuilder>;
        status: string;
        CombinedAABB: FBox;
        Entries: FBakeEntry[];
        IsBaking: boolean;
        CurrentBakeConfigs: UBakeConfig[];
        CDO: ACSGBuilder;
    };
    readonly __staticRegistry: 
        UCSGBake['__static_UCSGBake'] &
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBake['__properties_UCSGBake'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UCSGBakedChildInstance extends UCSGBase {
    readonly __properties_UCSGBakedChildInstance: {
        Properties: FCSGBakedChildInstanceProperties;
        ChildLocalSpaceBoundingBox: FBox;
        WorldSpaceBoundingBox: FBox;
        TransformMatInv: FMatrix;
        TempTree: FDeepCSGFloatTree;
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBakedChildInstance['__properties_UCSGBakedChildInstance'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGBakedChildInstanceComponent extends UCSGBaseComponent {
    readonly __properties_UCSGBakedChildInstanceComponent: {
        Properties: FCSGBakedChildInstanceProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBakedChildInstanceComponent['__properties_UCSGBakedChildInstanceComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGBase extends UBuilderBase {
    readonly __properties_UCSGBase: {
        BaseProperties: FMeshBaseProperties;
        RelativeTransform: FTransform;
    };
    readonly __staticRegistry: 
        UBuilderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBase['__properties_UCSGBase'] &
        UBuilderBase['__propertyRegistry'];
}

declare interface UCSGBaseComponent extends UCSGBuilderBaseSceneComponent {
    readonly __properties_UCSGBaseComponent: {
        BaseProperties: FMeshBaseProperties;
    };
    readonly __staticRegistry: 
        UCSGBuilderBaseSceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBaseComponent['__properties_UCSGBaseComponent'] &
        UCSGBuilderBaseSceneComponent['__propertyRegistry'];
}

declare interface UCSGBox extends UConvexMeshWithCachedTree {
    readonly __properties_UCSGBox: {
        Properties: FMeshBoxProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBox['__properties_UCSGBox'] &
        UConvexMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGBoxComponent extends UConvexMeshWithCachedTreeComponent {
    readonly __properties_UCSGBoxComponent: {
        Properties: FMeshBoxProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBoxComponent['__properties_UCSGBoxComponent'] &
        UConvexMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGBuilderBaseSceneComponent extends USceneComponent {
    readonly __staticRegistry: 
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USceneComponent['__propertyRegistry'];
}

declare interface UCSGCellNoise extends UCSGBase {
    readonly __properties_UCSGCellNoise: {
        Properties: FMeshCellNoiseProperties;
        Materials: FBinaryTerrainMaterialCombiner;
        ReciprocalCellSize: FVector;
        ApplyTree: FDeepCSGFloatTree;
        CellPositions: FVector[];
        CellLeaves: FDeepCSGNode[];
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCellNoise['__properties_UCSGCellNoise'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGCellNoiseComponent extends UCSGBaseComponent {
    readonly __properties_UCSGCellNoiseComponent: {
        Properties: FMeshCellNoiseProperties;
        Materials: FBinaryTerrainMaterialCombiner;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCellNoiseComponent['__properties_UCSGCellNoiseComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGChildInstance extends UCSGBase {
    readonly __properties_UCSGChildInstance: {
        Properties: FCSGChildInstanceProperties;
        Materials: FGeneralTerrainMaterialCombiner;
        CSGChildInstanceRoot: UCSGBase;
        CurrentBakeConfig: UBakeConfig;
        ChildLocalSpaceBoundingBox: FBox;
        WorldSpaceBoundingBox: FBox;
        BoundingTree: FDeepCSGFloatTree;
        TransformMatInv: FMatrix;
        TempTree: FDeepCSGTree;
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGChildInstance['__properties_UCSGChildInstance'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGChildInstanceComponent extends UCSGBaseComponent {
    readonly __properties_UCSGChildInstanceComponent: {
        Properties: FCSGChildInstanceProperties;
        Materials: FGeneralTerrainMaterialCombiner;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGChildInstanceComponent['__properties_UCSGChildInstanceComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGCircleDuplicator extends UCSGDuplicateSingleChildBase {
    readonly __properties_UCSGCircleDuplicator: {
        Properties: FCSGCircleDuplicatorProperties;
    };
    readonly __staticRegistry: 
        UCSGDuplicateSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCircleDuplicator['__properties_UCSGCircleDuplicator'] &
        UCSGDuplicateSingleChildBase['__propertyRegistry'];
}

declare interface UCSGCircleDuplicatorComponent extends UCSGBaseComponent {
    readonly __properties_UCSGCircleDuplicatorComponent: {
        Properties: FCSGCircleDuplicatorProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCircleDuplicatorComponent['__properties_UCSGCircleDuplicatorComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGCone extends UConvexMeshWithCachedTree {
    readonly __properties_UCSGCone: {
        Properties: FCSGConeProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCone['__properties_UCSGCone'] &
        UConvexMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGConeComponent extends UConvexMeshWithCachedTreeComponent {
    readonly __properties_UCSGConeComponent: {
        Properties: FCSGConeProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGConeComponent['__properties_UCSGConeComponent'] &
        UConvexMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGConvexCollider extends UConvexMeshWithCachedTree {
    readonly __properties_UCSGConvexCollider: {
        Properties: FCSGConvexColliderProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGConvexCollider['__properties_UCSGConvexCollider'] &
        UConvexMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGConvexColliderComponent extends UConvexMeshWithCachedTreeComponent {
    readonly __properties_UCSGConvexColliderComponent: {
        Properties: FCSGConvexColliderProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGConvexColliderComponent['__properties_UCSGConvexColliderComponent'] &
        UConvexMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGCylinder extends UConvexMeshWithCachedTree {
    readonly __properties_UCSGCylinder: {
        Properties: FCSGCylinderProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCylinder['__properties_UCSGCylinder'] &
        UConvexMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGCylinderComponent extends UConvexMeshWithCachedTreeComponent {
    readonly __properties_UCSGCylinderComponent: {
        Properties: FCSGCylinderProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGCylinderComponent['__properties_UCSGCylinderComponent'] &
        UConvexMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGDuplicateSingleChildBase extends UCSGBase {
    readonly __properties_UCSGDuplicateSingleChildBase: {
        Children: UCSGBase[];
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGDuplicateSingleChildBase['__properties_UCSGDuplicateSingleChildBase'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGGridDuplicator extends UCSGDuplicateSingleChildBase {
    readonly __properties_UCSGGridDuplicator: {
        Properties: FCSGGridDuplicatorProperties;
    };
    readonly __staticRegistry: 
        UCSGDuplicateSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGGridDuplicator['__properties_UCSGGridDuplicator'] &
        UCSGDuplicateSingleChildBase['__propertyRegistry'];
}

declare interface UCSGGridDuplicatorComponent extends UCSGBaseComponent {
    readonly __properties_UCSGGridDuplicatorComponent: {
        Properties: FCSGGridDuplicatorProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGGridDuplicatorComponent['__properties_UCSGGridDuplicatorComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGGroup extends UCSGBase {
    readonly __properties_UCSGGroup: {
        Children: UCSGBase[];
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGGroup['__properties_UCSGGroup'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGGroupComponent extends UCSGBaseComponent {
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGLayer extends UCSGGroup {
    readonly __properties_UCSGLayer: {
        Properties: FMeshLayerProperties;
        Materials: FGeneralTerrainMaterialCombiner;
        WorldSpaceBoundingBox: FBox;
        BoundingTree: FDeepCSGFloatTree;
        TempTree: FDeepCSGTree;
        TransformMatInv: FMatrix;
    };
    readonly __staticRegistry: 
        UCSGGroup['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGLayer['__properties_UCSGLayer'] &
        UCSGGroup['__propertyRegistry'];
}

declare interface UCSGLayerComponent extends UCSGGroupComponent {
    readonly __properties_UCSGLayerComponent: {
        Properties: FMeshLayerProperties;
        Materials: FGeneralTerrainMaterialCombiner;
    };
    readonly __staticRegistry: 
        UCSGGroupComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGLayerComponent['__properties_UCSGLayerComponent'] &
        UCSGGroupComponent['__propertyRegistry'];
}

declare interface UCSGModulatedSDFInstance extends UCSGBase {
    readonly __properties_UCSGModulatedSDFInstance: {
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
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGModulatedSDFInstance['__properties_UCSGModulatedSDFInstance'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGModulatedSDFInstanceComponent extends UCSGBaseComponent {
    readonly __properties_UCSGModulatedSDFInstanceComponent: {
        Properties: FCSGSDFModulatedInstanceProperties;
        Materials: FBinaryTerrainMaterialCombiner;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGModulatedSDFInstanceComponent['__properties_UCSGModulatedSDFInstanceComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGPlane extends UConvexMeshWithCachedTree {
    readonly __staticRegistry: 
        UConvexMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UConvexMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGPlaneComponent extends UConvexMeshWithCachedTreeComponent {
    readonly __staticRegistry: 
        UConvexMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UConvexMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGPreviewComponent extends USceneComponent {
    readonly __properties_UCSGPreviewComponent: {
        BaseBuilder: ACSGBuilderBase;
        CurrentBakeConfig: UBakeConfig;
        Meshes: TMap<FChunkId, UDeepProceduralMeshComponent>;
        UsePreviewScene: boolean;
        ChangeCount: number;
    };
    readonly __staticRegistry: 
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGPreviewComponent['__properties_UCSGPreviewComponent'] &
        USceneComponent['__propertyRegistry'];
}

declare interface UCSGPreviewScene extends UDataAsset {
    readonly __properties_UCSGPreviewScene: {
        mesh: TSubclassOf<ACSGBuilder>;
        Settings: FCSGOptions;
        Seed: number;
        TerrainMaterial: UTerrainMaterialCore;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGPreviewScene['__properties_UCSGPreviewScene'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UCSGRandomDisable extends UCSGSingleChildBase {
    readonly __properties_UCSGRandomDisable: {
        Properties: FCSGRandomDisableProperties;
    };
    readonly __staticRegistry: 
        UCSGSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGRandomDisable['__properties_UCSGRandomDisable'] &
        UCSGSingleChildBase['__propertyRegistry'];
}

declare interface UCSGRandomDisableComponent extends UCSGBaseComponent {
    readonly __properties_UCSGRandomDisableComponent: {
        Properties: FCSGRandomDisableProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGRandomDisableComponent['__properties_UCSGRandomDisableComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGRandomizeTransform extends UCSGSingleChildBase {
    readonly __properties_UCSGRandomizeTransform: {
        Properties: FCSGRandomizeTransformProperties;
    };
    readonly __staticRegistry: 
        UCSGSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGRandomizeTransform['__properties_UCSGRandomizeTransform'] &
        UCSGSingleChildBase['__propertyRegistry'];
}

declare interface UCSGRandomizeTransformComponent extends UCSGBaseComponent {
    readonly __properties_UCSGRandomizeTransformComponent: {
        Properties: FCSGRandomizeTransformProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGRandomizeTransformComponent['__properties_UCSGRandomizeTransformComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGSDFInstance extends UCSGBase {
    readonly __properties_UCSGSDFInstance: {
        Properties: FCSGSDFInstanceProperties;
        Materials: FBinaryTerrainMaterialCombiner;
        CSGSDFInstanceRoot: USDFBase;
        CurrentBakeConfig: UBakeConfig;
        ChildLocalSpaceBoundingBox: FBox;
        WorldSpaceBoundingBox: FBox;
        BoundingTree: FDeepCSGFloatTree;
        TransformMatInv: FMatrix;
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSDFInstance['__properties_UCSGSDFInstance'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGSDFInstanceComponent extends UCSGBaseComponent {
    readonly __properties_UCSGSDFInstanceComponent: {
        Properties: FCSGSDFInstanceProperties;
        Materials: FBinaryTerrainMaterialCombiner;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSDFInstanceComponent['__properties_UCSGSDFInstanceComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UCSGSTL extends USimpleMeshWithCachedTree {
    readonly __properties_UCSGSTL: {
        Properties: FCSGSTLProperties;
    };
    readonly __staticRegistry: 
        USimpleMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSTL['__properties_UCSGSTL'] &
        USimpleMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGSTLComponent extends USimpleMeshWithCachedTreeComponent {
    readonly __properties_UCSGSTLComponent: {
        Properties: FCSGSTLProperties;
    };
    readonly __staticRegistry: 
        USimpleMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSTLComponent['__properties_UCSGSTLComponent'] &
        USimpleMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGSingleChildBase extends UCSGBase {
    readonly __properties_UCSGSingleChildBase: {
        Child: UCSGBase;
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSingleChildBase['__properties_UCSGSingleChildBase'] &
        UCSGBase['__propertyRegistry'];
}

declare interface UCSGSphere extends UConvexMeshWithCachedTree {
    readonly __properties_UCSGSphere: {
        Properties: FCSGSphereProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSphere['__properties_UCSGSphere'] &
        UConvexMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGSphereComponent extends UConvexMeshWithCachedTreeComponent {
    readonly __properties_UCSGSphereComponent: {
        Properties: FCSGSphereProperties;
    };
    readonly __staticRegistry: 
        UConvexMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSphereComponent['__properties_UCSGSphereComponent'] &
        UConvexMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGSplineWarp extends UCSGWarped {
    readonly __properties_UCSGSplineWarp: {
        SplineProperties: FSplineWarpProperties;
        SplineCurves: FSplineCurves;
        AABBs: FBox[];
        Keys: number[];
        planes: FVector4[];
        TotalAABB: FBox;
    };
    readonly __staticRegistry: 
        UCSGWarped['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSplineWarp['__properties_UCSGSplineWarp'] &
        UCSGWarped['__propertyRegistry'];
}

declare interface UCSGSplineWarpComponent extends UCSGWarpedComponent {
    readonly __properties_UCSGSplineWarpComponent: {
        SplineProperties: FSplineWarpProperties;
    };
    readonly __staticRegistry: 
        UCSGWarpedComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGSplineWarpComponent['__properties_UCSGSplineWarpComponent'] &
        UCSGWarpedComponent['__propertyRegistry'];
}

declare interface UCSGVoronoi extends USimpleMeshWithCachedTree {
    readonly __properties_UCSGVoronoi: {
        Properties: FVoronoiProperties;
    };
    readonly __staticRegistry: 
        USimpleMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGVoronoi['__properties_UCSGVoronoi'] &
        USimpleMeshWithCachedTree['__propertyRegistry'];
}

declare interface UCSGVoronoiComponent extends USimpleMeshWithCachedTreeComponent {
    readonly __properties_UCSGVoronoiComponent: {
        Properties: FVoronoiProperties;
    };
    readonly __staticRegistry: 
        USimpleMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGVoronoiComponent['__properties_UCSGVoronoiComponent'] &
        USimpleMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UCSGWarped extends UCSGSingleChildBase {
    readonly __properties_UCSGWarped: {
        Properties: FWarpedProperties;
    };
    readonly __staticRegistry: 
        UCSGSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGWarped['__properties_UCSGWarped'] &
        UCSGSingleChildBase['__propertyRegistry'];
}

declare interface UCSGWarpedComponent extends UCSGBaseComponent {
    readonly __properties_UCSGWarpedComponent: {
        Properties: FWarpedProperties;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCSGWarpedComponent['__properties_UCSGWarpedComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UConvexMeshWithCachedTree extends USimpleMeshWithCachedTree {
    readonly __properties_UConvexMeshWithCachedTree: {
        Noise: FConvexNoiseProperties;
    };
    readonly __staticRegistry: 
        USimpleMeshWithCachedTree['__staticRegistry'];
    readonly __propertyRegistry: 
        UConvexMeshWithCachedTree['__properties_UConvexMeshWithCachedTree'] &
        USimpleMeshWithCachedTree['__propertyRegistry'];
}

declare interface UConvexMeshWithCachedTreeComponent extends USimpleMeshWithCachedTreeComponent {
    readonly __properties_UConvexMeshWithCachedTreeComponent: {
        Noise: FConvexNoiseProperties;
    };
    readonly __staticRegistry: 
        USimpleMeshWithCachedTreeComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UConvexMeshWithCachedTreeComponent['__properties_UConvexMeshWithCachedTreeComponent'] &
        USimpleMeshWithCachedTreeComponent['__propertyRegistry'];
}

declare interface UDeepProceduralMeshComponent extends UMeshComponent {
    readonly __static_UDeepProceduralMeshComponent: {
        FindTerrainMaterialFromPhysicalMaterial(Material: UPhysicalMaterial): UTerrainMaterialCore;
    };
    readonly __properties_UDeepProceduralMeshComponent: {
        ProcMeshBodySetup: UBodySetup;
    };
    readonly __staticRegistry: 
        UDeepProceduralMeshComponent['__static_UDeepProceduralMeshComponent'] &
        UMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UDeepProceduralMeshComponent['__properties_UDeepProceduralMeshComponent'] &
        UMeshComponent['__propertyRegistry'];
}

declare interface UHeightMapWithMinMaxQuadTree extends UDataAsset {
    readonly __static_UHeightMapWithMinMaxQuadTree: {
        Generate(): void;
    };
    readonly __properties_UHeightMapWithMinMaxQuadTree: {
        status: string;
        InputRenderTarget: TSoftObjectPtr<UTextureRenderTarget2D>;
        InputTexture: TSoftObjectPtr<UTexture>;
        MinMaxTree: FHMMinMaxLevel[];
        MinHeight: number;
        MaxHeight: number;
        Heights: number[];
        Dimensions: number;
        Initialized: boolean;
    };
    readonly __staticRegistry: 
        UHeightMapWithMinMaxQuadTree['__static_UHeightMapWithMinMaxQuadTree'] &
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UHeightMapWithMinMaxQuadTree['__properties_UHeightMapWithMinMaxQuadTree'] &
        UDataAsset['__propertyRegistry'];
}

declare interface USDFBase extends UBuilderBase {
    readonly __properties_USDFBase: {
        BaseProperties: FSDFBaseProperties;
        RelativeTransform: FTransform;
    };
    readonly __staticRegistry: 
        UBuilderBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBase['__properties_USDFBase'] &
        UBuilderBase['__propertyRegistry'];
}

declare interface USDFBaseComponent extends UCSGBuilderBaseSceneComponent {
    readonly __properties_USDFBaseComponent: {
        BaseProperties: FSDFBaseProperties;
    };
    readonly __staticRegistry: 
        UCSGBuilderBaseSceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBaseComponent['__properties_USDFBaseComponent'] &
        UCSGBuilderBaseSceneComponent['__propertyRegistry'];
}

declare interface USDFBaseWithTransform extends USDFBase {
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBase['__propertyRegistry'];
}

declare interface USDFBaseWithTransformComponent extends USDFBaseComponent {
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFBox extends USDFBaseWithTransform {
    readonly __properties_USDFBox: {
        Properties: FSDFBoxProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransform['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBox['__properties_USDFBox'] &
        USDFBaseWithTransform['__propertyRegistry'];
}

declare interface USDFBoxComponent extends USDFBaseWithTransformComponent {
    readonly __properties_USDFBoxComponent: {
        Properties: FSDFBoxProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransformComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBoxComponent['__properties_USDFBoxComponent'] &
        USDFBaseWithTransformComponent['__propertyRegistry'];
}

declare interface USDFCapsule extends USDFBaseWithTransform {
    readonly __properties_USDFCapsule: {
        Properties: FSDFCapsuleProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransform['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFCapsule['__properties_USDFCapsule'] &
        USDFBaseWithTransform['__propertyRegistry'];
}

declare interface USDFCapsuleComponent extends USDFBaseWithTransformComponent {
    readonly __properties_USDFCapsuleComponent: {
        Properties: FSDFCapsuleProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransformComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFCapsuleComponent['__properties_USDFCapsuleComponent'] &
        USDFBaseWithTransformComponent['__propertyRegistry'];
}

declare interface USDFCylinder extends USDFBaseWithTransform {
    readonly __properties_USDFCylinder: {
        Properties: FSDFCylinderProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransform['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFCylinder['__properties_USDFCylinder'] &
        USDFBaseWithTransform['__propertyRegistry'];
}

declare interface USDFCylinderComponent extends USDFBaseWithTransformComponent {
    readonly __properties_USDFCylinderComponent: {
        Properties: FSDFCylinderProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransformComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFCylinderComponent['__properties_USDFCylinderComponent'] &
        USDFBaseWithTransformComponent['__propertyRegistry'];
}

declare interface USDFHeightMap extends USDFBase {
    readonly __properties_USDFHeightMap: {
        Properties: FSDFHeightMaproperties;
        Heightmap: UHeightMapWithMinMaxQuadTree;
    };
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFHeightMap['__properties_USDFHeightMap'] &
        USDFBase['__propertyRegistry'];
}

declare interface USDFHeightMapComponent extends USDFBaseComponent {
    readonly __properties_USDFHeightMapComponent: {
        Properties: FSDFHeightMaproperties;
        Heightmap: UHeightMapWithMinMaxQuadTree;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFHeightMapComponent['__properties_USDFHeightMapComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFIntersectOp extends USDFBase {
    readonly __properties_USDFIntersectOp: {
        Properties: FSDFSmoothingProperties;
        Arguments: USDFBase[];
    };
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFIntersectOp['__properties_USDFIntersectOp'] &
        USDFBase['__propertyRegistry'];
}

declare interface USDFIntersectOpComponent extends USDFBaseComponent {
    readonly __properties_USDFIntersectOpComponent: {
        Properties: FSDFSmoothingProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFIntersectOpComponent['__properties_USDFIntersectOpComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFModifier extends USDFSingleChildBase {
    readonly __properties_USDFModifier: {
        Properties: FSDFModifierProperties;
    };
    readonly __staticRegistry: 
        USDFSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFModifier['__properties_USDFModifier'] &
        USDFSingleChildBase['__propertyRegistry'];
}

declare interface USDFModifierComponent extends USDFBaseComponent {
    readonly __properties_USDFModifierComponent: {
        Properties: FSDFModifierProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFModifierComponent['__properties_USDFModifierComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFOnion extends USDFBase {
    readonly __properties_USDFOnion: {
        Properties: FSDFOnionProperties;
        Argument: USDFBase;
    };
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFOnion['__properties_USDFOnion'] &
        USDFBase['__propertyRegistry'];
}

declare interface USDFOnionComponent extends USDFBaseComponent {
    readonly __properties_USDFOnionComponent: {
        Properties: FSDFOnionProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFOnionComponent['__properties_USDFOnionComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFPlane extends USDFBaseWithTransform {
    readonly __staticRegistry: 
        USDFBaseWithTransform['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBaseWithTransform['__propertyRegistry'];
}

declare interface USDFPlaneComponent extends USDFBaseWithTransformComponent {
    readonly __staticRegistry: 
        USDFBaseWithTransformComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFBaseWithTransformComponent['__propertyRegistry'];
}

declare interface USDFRandomDisable extends USDFSingleChildBase {
    readonly __properties_USDFRandomDisable: {
        Properties: FSDFRandomDisableProperties;
    };
    readonly __staticRegistry: 
        USDFSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFRandomDisable['__properties_USDFRandomDisable'] &
        USDFSingleChildBase['__propertyRegistry'];
}

declare interface USDFRandomDisableComponent extends USDFBaseComponent {
    readonly __properties_USDFRandomDisableComponent: {
        Properties: FSDFRandomDisableProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFRandomDisableComponent['__properties_USDFRandomDisableComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFRandomizeTransform extends USDFSingleChildBase {
    readonly __properties_USDFRandomizeTransform: {
        Properties: FSDFRandomizeTransformProperties;
    };
    readonly __staticRegistry: 
        USDFSingleChildBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFRandomizeTransform['__properties_USDFRandomizeTransform'] &
        USDFSingleChildBase['__propertyRegistry'];
}

declare interface USDFRandomizeTransformComponent extends USDFBaseComponent {
    readonly __properties_USDFRandomizeTransformComponent: {
        Properties: FSDFRandomizeTransformProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFRandomizeTransformComponent['__properties_USDFRandomizeTransformComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFSingleChildBase extends USDFBase {
    readonly __properties_USDFSingleChildBase: {
        Child: USDFBase;
    };
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFSingleChildBase['__properties_USDFSingleChildBase'] &
        USDFBase['__propertyRegistry'];
}

declare interface USDFSphere extends USDFBaseWithTransform {
    readonly __properties_USDFSphere: {
        Properties: FSDFSphereProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransform['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFSphere['__properties_USDFSphere'] &
        USDFBaseWithTransform['__propertyRegistry'];
}

declare interface USDFSphereComponent extends USDFBaseWithTransformComponent {
    readonly __properties_USDFSphereComponent: {
        Properties: FSDFSphereProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransformComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFSphereComponent['__properties_USDFSphereComponent'] &
        USDFBaseWithTransformComponent['__propertyRegistry'];
}

declare interface USDFSubOp extends USDFBase {
    readonly __properties_USDFSubOp: {
        Properties: FSDFSmoothingProperties;
        A: USDFBase;
        B: USDFBase;
    };
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFSubOp['__properties_USDFSubOp'] &
        USDFBase['__propertyRegistry'];
}

declare interface USDFSubOpComponent extends USDFBaseComponent {
    readonly __properties_USDFSubOpComponent: {
        Properties: FSDFSmoothingProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFSubOpComponent['__properties_USDFSubOpComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USDFTorus extends USDFBaseWithTransform {
    readonly __properties_USDFTorus: {
        Properties: FSDFTorusProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransform['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFTorus['__properties_USDFTorus'] &
        USDFBaseWithTransform['__propertyRegistry'];
}

declare interface USDFTorusComponent extends USDFBaseWithTransformComponent {
    readonly __properties_USDFTorusComponent: {
        Properties: FSDFTorusProperties;
    };
    readonly __staticRegistry: 
        USDFBaseWithTransformComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFTorusComponent['__properties_USDFTorusComponent'] &
        USDFBaseWithTransformComponent['__propertyRegistry'];
}

declare interface USDFUnionOp extends USDFBase {
    readonly __properties_USDFUnionOp: {
        Properties: FSDFSmoothingProperties;
        Arguments: USDFBase[];
    };
    readonly __staticRegistry: 
        USDFBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFUnionOp['__properties_USDFUnionOp'] &
        USDFBase['__propertyRegistry'];
}

declare interface USDFUnionOpComponent extends USDFBaseComponent {
    readonly __properties_USDFUnionOpComponent: {
        Properties: FSDFSmoothingProperties;
    };
    readonly __staticRegistry: 
        USDFBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USDFUnionOpComponent['__properties_USDFUnionOpComponent'] &
        USDFBaseComponent['__propertyRegistry'];
}

declare interface USimpleMeshWithCachedTree extends UCSGBase {
    readonly __properties_USimpleMeshWithCachedTree: {
        Materials: FBinaryTerrainMaterialCombiner;
        InvertCSG: boolean;
    };
    readonly __staticRegistry: 
        UCSGBase['__staticRegistry'];
    readonly __propertyRegistry: 
        USimpleMeshWithCachedTree['__properties_USimpleMeshWithCachedTree'] &
        UCSGBase['__propertyRegistry'];
}

declare interface USimpleMeshWithCachedTreeComponent extends UCSGBaseComponent {
    readonly __properties_USimpleMeshWithCachedTreeComponent: {
        Materials: FBinaryTerrainMaterialCombiner;
        InvertCSG: boolean;
    };
    readonly __staticRegistry: 
        UCSGBaseComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USimpleMeshWithCachedTreeComponent['__properties_USimpleMeshWithCachedTreeComponent'] &
        UCSGBaseComponent['__propertyRegistry'];
}

declare interface UStaticMeshCarver extends UDataAsset {
    readonly __static_UStaticMeshCarver: {
        Generate(): void;
        ExportPreviewMesh(): void;
    };
    readonly __properties_UStaticMeshCarver: {
        status: string;
        mesh: TSoftObjectPtr<UStaticMesh>;
        AABB: FBox;
        BSPTree: FDeepCSGFloatTree;
        BSPTreePacked: FDeepCSGFloatTreePacked;
    };
    readonly __staticRegistry: 
        UStaticMeshCarver['__static_UStaticMeshCarver'] &
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UStaticMeshCarver['__properties_UStaticMeshCarver'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UTerrainMaterialBase extends UPrimaryDataAsset {
    readonly __staticRegistry: 
        UPrimaryDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UPrimaryDataAsset['__propertyRegistry'];
}

declare interface UTerrainMaterialCore extends UTerrainMaterialBase {
    readonly __properties_UTerrainMaterialCore: {
        BurntMaterial: UTerrainMaterialCore;
        BulletBurntMaterial: UTerrainMaterialCore;
        PathfinderDanger: boolean;
        PathfinderPreventSpawning: boolean;
        ScannerMaterial: UMaterialInterface;
        RenderMaterial: TSoftObjectPtr<UMaterialInterface>;
        NumDynamicRenderMaterialInstances: number;
        InstancingDuration: number;
        DynamicRenderMaterials: UMaterialInstanceDynamic[];
        LastDynamicIndex: number;
    };
    readonly __staticRegistry: 
        UTerrainMaterialBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UTerrainMaterialCore['__properties_UTerrainMaterialCore'] &
        UTerrainMaterialBase['__propertyRegistry'];
}

