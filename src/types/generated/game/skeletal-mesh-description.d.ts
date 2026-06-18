declare interface FBoneID extends FElementID {

}

declare interface FSourceGeometryPartID extends FElementID {

}

declare interface USkeletalMeshDescription extends UMeshDescriptionBase {
    readonly __staticRegistry: 
        UMeshDescriptionBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMeshDescriptionBase['__propertyRegistry'];
}

