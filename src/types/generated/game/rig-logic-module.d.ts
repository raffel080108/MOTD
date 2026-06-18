declare interface FAnimNode_RigLogic extends FAnimNode_Base {
    AnimSequence: FPoseLink;
    CacheAnimCurveNames: boolean;
    LODThreshold: number;
}

declare type FBoneIndexControlAttributeMapping = object;

declare interface FCoordinateSystem {
    XAxis: EDirection;
    YAxis: EDirection;
    ZAxis: EDirection;
}

declare interface FMeshBlendShapeChannelMapping {
    MeshIndex: number;
    BlendShapeChannelIndex: number;
}

declare interface FRigLogicConfiguration {
    CalculationType: ERigLogicCalculationType;
    LoadJoints: boolean;
    LoadBlendShapes: boolean;
    LoadAnimatedMaps: boolean;
    LoadMachineLearnedBehavior: boolean;
    LoadRBFBehavior: boolean;
    LoadTwistSwingBehavior: boolean;
    TranslationType: ERigLogicTranslationType;
    RotationType: ERigLogicRotationType;
    RotationOrder: ERigLogicRotationOrder;
    ScaleType: ERigLogicScaleType;
    TranslationPruningThreshold: number;
    RotationPruningThreshold: number;
    ScalePruningThreshold: number;
}

declare interface FRigUnit_RigLogic extends FRigUnitMutable {
    Data: FRigUnit_RigLogic_Data;
    bIsInitialized: boolean;
}

declare interface FRigUnit_RigLogic_Data {
    SkelMeshComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    InputCurveIndices: number[];
    NeuralNetMaskCurveIndices: number[];
    HierarchyBoneIndices: number[];
    DriverJointsToControlAttributesMap: FBoneIndexControlAttributeMapping[];
    MorphTargetCurveIndices: FRigUnit_RigLogic_IntArray[];
    BlendShapeIndices: FRigUnit_RigLogic_IntArray[];
    CurveElementIndicesForAnimMaps: FRigUnit_RigLogic_IntArray[];
    RigLogicIndicesForAnimMaps: FRigUnit_RigLogic_IntArray[];
    CurrentLOD: number;
}

declare interface FRigUnit_RigLogic_IntArray {
    Values: number[];
}

declare interface FTextureCoordinate {
    U: number;
    V: number;
}

declare interface FVertexLayout {
    position: number;
    TextureCoordinate: number;
    Normal: number;
}

declare interface UDEPRECATED_DNAIndexMapping extends UAssetUserData {
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UAssetUserData['__propertyRegistry'];
}

declare interface UDNAAsset extends UAssetUserData {
    readonly __properties_UDNAAsset: {
        DnaFileName: string;
        bKeepDNAAfterInitialization: boolean;
        MetaData: TMap<string, string>;
        RigLogicConfiguration: FRigLogicConfiguration;
    };
    readonly __staticRegistry: 
        UAssetUserData['__staticRegistry'];
    readonly __propertyRegistry: 
        UDNAAsset['__properties_UDNAAsset'] &
        UAssetUserData['__propertyRegistry'];
}

declare interface USkelMeshDNAUtils extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

