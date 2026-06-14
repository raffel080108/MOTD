declare interface FStateStreamHandle {

}
declare const FStateStreamHandle: FStateStreamHandle;

declare interface FTransformDynamicState {
    LocalTransform: FTransform;
    BoneTransforms: TArray<FTransform>;
    Parent: FTransformHandle;
    bVisible: boolean;
}
declare const FTransformDynamicState: FTransformDynamicState;

declare interface FTransformHandle extends FStateStreamHandle {

}
declare const FTransformHandle: FTransformHandle;

declare interface FTransformStaticState {

}
declare const FTransformStaticState: FTransformStaticState;

