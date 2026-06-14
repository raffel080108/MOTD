declare interface FAnimNode_RigLogic extends FAnimNode_Base {
    AnimSequence: FPoseLink;
    CacheAnimCurveNames: boolean;
    LODThreshold: number;
}
declare const FAnimNode_RigLogic: FAnimNode_RigLogic;

declare interface FBoneIndexControlAttributeMapping {

}
declare const FBoneIndexControlAttributeMapping: FBoneIndexControlAttributeMapping;

declare interface FCoordinateSystem {
    XAxis: EDirection;
    YAxis: EDirection;
    ZAxis: EDirection;
}
declare const FCoordinateSystem: FCoordinateSystem;

declare interface FMeshBlendShapeChannelMapping {
    MeshIndex: number;
    BlendShapeChannelIndex: number;
}
declare const FMeshBlendShapeChannelMapping: FMeshBlendShapeChannelMapping;

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
declare const FRigLogicConfiguration: FRigLogicConfiguration;

declare interface FRigUnit_RigLogic extends FRigUnitMutable {
    Data: FRigUnit_RigLogic_Data;
    bIsInitialized: boolean;
}
declare const FRigUnit_RigLogic: FRigUnit_RigLogic;

declare interface FRigUnit_RigLogic_Data {
    SkelMeshComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    InputCurveIndices: TArray<number>;
    NeuralNetMaskCurveIndices: TArray<number>;
    HierarchyBoneIndices: TArray<number>;
    DriverJointsToControlAttributesMap: TArray<FBoneIndexControlAttributeMapping>;
    MorphTargetCurveIndices: TArray<FRigUnit_RigLogic_IntArray>;
    BlendShapeIndices: TArray<FRigUnit_RigLogic_IntArray>;
    CurveElementIndicesForAnimMaps: TArray<FRigUnit_RigLogic_IntArray>;
    RigLogicIndicesForAnimMaps: TArray<FRigUnit_RigLogic_IntArray>;
    CurrentLOD: uint32;
}
declare const FRigUnit_RigLogic_Data: FRigUnit_RigLogic_Data;

declare interface FRigUnit_RigLogic_IntArray {
    Values: TArray<number>;
}
declare const FRigUnit_RigLogic_IntArray: FRigUnit_RigLogic_IntArray;

declare interface FTextureCoordinate {
    U: number;
    V: number;
}
declare const FTextureCoordinate: FTextureCoordinate;

declare interface FVertexLayout {
    position: number;
    TextureCoordinate: number;
    Normal: number;
}
declare const FVertexLayout: FVertexLayout;

declare interface UDEPRECATED_DNAIndexMapping extends UAssetUserData {

}
declare const UDEPRECATED_DNAIndexMapping: UDEPRECATED_DNAIndexMapping;

declare interface UDNAAsset extends UAssetUserData {
    DnaFileName: FString;
    bKeepDNAAfterInitialization: boolean;
    MetaData: Record<FString, FString>;
    RigLogicConfiguration: FRigLogicConfiguration;
}
declare const UDNAAsset: UDNAAsset;

declare interface USkelMeshDNAUtils extends UObject {

}
declare const USkelMeshDNAUtils: USkelMeshDNAUtils;

