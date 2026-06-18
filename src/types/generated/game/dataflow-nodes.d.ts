declare interface FBreakAttributeKeyDataflowNode extends FDataflowNode {
    AttributeKeyIn: FCollectionAttributeKey;
    AttributeOut: string;
    GroupOut: string;
}

declare interface FDataflowCollectionAddScalarVertexPropertyNode extends FDataflowNode {
    Collection: FManagedArrayCollection;
    Name: string;
    AttributeKey: FCollectionAttributeKey;
    VertexWeights: number[];
    TargetGroup: FScalarVertexPropertyGroup;
    OverrideType: EDataflowWeightMapOverrideType;
}

declare interface FDataflowCollectionEditSkinWeightsNode extends FDataflowPrimitiveNode {
    Collection: FManagedArrayCollection;
    BoneIndicesName: string;
    BoneWeightsName: string;
    VertexGroup: FScalarVertexPropertyGroup;
    BoneIndicesKey: FCollectionAttributeKey;
    BoneWeightsKey: FCollectionAttributeKey;
    ObjectSkeleton: USkeleton;
    bCompressSkinWeights: boolean;
    SkinWeights: FDataflowSkinWeightData[];
    SkeletalMeshes: USkeletalMesh[];
}

declare type FDataflowFunctionProperty = object;

declare interface FDataflowPrimitiveNode extends FDataflowNode {

}

declare interface FDataflowSkinWeightData {
    BoneWeights: number[];
    BoneIndices: number[];
}

declare interface FFloatOverrideDataflowNode extends FDataflowNode {
    PropertyName: string;
    KeyName: string;
    ValueOut: number;
}

declare interface FGetPhysicsAssetFromSkeletalMeshDataflowNode extends FDataflowNode {
    SkeletalMesh: USkeletalMesh;
    PhysicsAsset: UPhysicsAsset;
}

declare interface FGetSkeletalMeshDataflowNode extends FDataflowNode {
    SkeletalMesh: USkeletalMesh;
    PropertyName: string;
}

declare interface FGetSkeletonDataflowNode extends FDataflowNode {
    Skeleton: USkeleton;
    PropertyName: string;
}

declare interface FGetStaticMeshDataflowNode extends FDataflowNode {
    StaticMesh: UStaticMesh;
    PropertyName: string;
}

declare interface FMakeAttributeKeyDataflowNode extends FDataflowNode {
    GroupIn: string;
    AttributeIn: string;
    AttributeKeyOut: FCollectionAttributeKey;
}

declare interface FScalarVertexPropertyGroup {
    Name: string;
}

declare interface FSelectionSetDataflowNode extends FDataflowNode {
    Indices: string;
    IndicesOut: number[];
}

declare interface FSkeletalMeshBoneDataflowNode extends FDataflowNode {
    BoneName: string;
    SkeletalMesh: USkeletalMesh;
    BoneIndexOut: number;
    PropertyName: string;
}

declare interface FSkeletalMeshReferenceTransformDataflowNode extends FDataflowNode {
    SkeletalMeshIn: USkeletalMesh;
    BoneIndexIn: number;
    TransformOut: FTransform;
}

