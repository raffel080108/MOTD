declare type FStateStreamHandle = object;

declare interface FTransformDynamicState {
    LocalTransform: FTransform;
    BoneTransforms: FTransform[];
    Parent: FTransformHandle;
    bVisible: boolean;
}

declare interface FTransformHandle extends FStateStreamHandle {

}

declare type FTransformStaticState = object;

