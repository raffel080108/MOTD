declare interface FBreakAttributeKeyDataflowNode extends FDataflowNode {
    AttributeKeyIn: FCollectionAttributeKey;
    AttributeOut: FString;
    GroupOut: FString;
}
declare const FBreakAttributeKeyDataflowNode: FBreakAttributeKeyDataflowNode;

declare interface FDataflowCollectionAddScalarVertexPropertyNode extends FDataflowNode {
    Collection: FManagedArrayCollection;
    Name: FString;
    AttributeKey: FCollectionAttributeKey;
    VertexWeights: TArray<number>;
    TargetGroup: FScalarVertexPropertyGroup;
    OverrideType: EDataflowWeightMapOverrideType;
}
declare const FDataflowCollectionAddScalarVertexPropertyNode: FDataflowCollectionAddScalarVertexPropertyNode;

declare interface FDataflowCollectionEditSkinWeightsNode extends FDataflowPrimitiveNode {
    Collection: FManagedArrayCollection;
    BoneIndicesName: FString;
    BoneWeightsName: FString;
    VertexGroup: FScalarVertexPropertyGroup;
    BoneIndicesKey: FCollectionAttributeKey;
    BoneWeightsKey: FCollectionAttributeKey;
    ObjectSkeleton: USkeleton;
    bCompressSkinWeights: boolean;
    SkinWeights: TArray<FDataflowSkinWeightData>;
    SkeletalMeshes: TArray<USkeletalMesh>;
}
declare const FDataflowCollectionEditSkinWeightsNode: FDataflowCollectionEditSkinWeightsNode;

declare interface FDataflowFunctionProperty {

}
declare const FDataflowFunctionProperty: FDataflowFunctionProperty;

declare interface FDataflowPrimitiveNode extends FDataflowNode {

}
declare const FDataflowPrimitiveNode: FDataflowPrimitiveNode;

declare interface FDataflowSkinWeightData {
    BoneWeights: TArray<number>;
    BoneIndices: TArray<number>;
}
declare const FDataflowSkinWeightData: FDataflowSkinWeightData;

declare interface FFloatOverrideDataflowNode extends FDataflowNode {
    PropertyName: FName;
    KeyName: FName;
    ValueOut: number;
}
declare const FFloatOverrideDataflowNode: FFloatOverrideDataflowNode;

declare interface FGetPhysicsAssetFromSkeletalMeshDataflowNode extends FDataflowNode {
    SkeletalMesh: USkeletalMesh;
    PhysicsAsset: UPhysicsAsset;
}
declare const FGetPhysicsAssetFromSkeletalMeshDataflowNode: FGetPhysicsAssetFromSkeletalMeshDataflowNode;

declare interface FGetSkeletalMeshDataflowNode extends FDataflowNode {
    SkeletalMesh: USkeletalMesh;
    PropertyName: FName;
}
declare const FGetSkeletalMeshDataflowNode: FGetSkeletalMeshDataflowNode;

declare interface FGetSkeletonDataflowNode extends FDataflowNode {
    Skeleton: USkeleton;
    PropertyName: FName;
}
declare const FGetSkeletonDataflowNode: FGetSkeletonDataflowNode;

declare interface FGetStaticMeshDataflowNode extends FDataflowNode {
    StaticMesh: UStaticMesh;
    PropertyName: FName;
}
declare const FGetStaticMeshDataflowNode: FGetStaticMeshDataflowNode;

declare interface FMakeAttributeKeyDataflowNode extends FDataflowNode {
    GroupIn: FString;
    AttributeIn: FString;
    AttributeKeyOut: FCollectionAttributeKey;
}
declare const FMakeAttributeKeyDataflowNode: FMakeAttributeKeyDataflowNode;

declare interface FScalarVertexPropertyGroup {
    Name: FName;
}
declare const FScalarVertexPropertyGroup: FScalarVertexPropertyGroup;

declare interface FSelectionSetDataflowNode extends FDataflowNode {
    Indices: FString;
    IndicesOut: TArray<number>;
}
declare const FSelectionSetDataflowNode: FSelectionSetDataflowNode;

declare interface FSkeletalMeshBoneDataflowNode extends FDataflowNode {
    BoneName: FName;
    SkeletalMesh: USkeletalMesh;
    BoneIndexOut: number;
    PropertyName: FName;
}
declare const FSkeletalMeshBoneDataflowNode: FSkeletalMeshBoneDataflowNode;

declare interface FSkeletalMeshReferenceTransformDataflowNode extends FDataflowNode {
    SkeletalMeshIn: USkeletalMesh;
    BoneIndexIn: number;
    TransformOut: FTransform;
}
declare const FSkeletalMeshReferenceTransformDataflowNode: FSkeletalMeshReferenceTransformDataflowNode;

