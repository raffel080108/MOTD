declare interface AConstraintsActor extends AActor {
    ConstraintsManager: UConstraintsManager;
}
declare const AConstraintsActor: AConstraintsActor;

declare interface FConstraintAndActiveChannel {
    ActiveChannel: FMovieSceneConstraintChannel;
    ConstraintCopyToSpawn: UTickableConstraint;
}
declare const FConstraintAndActiveChannel: FConstraintAndActiveChannel;

declare interface FConstraintTickFunction extends FTickFunction {

}
declare const FConstraintTickFunction: FConstraintTickFunction;

declare interface FConstraintsInWorld {
    World: TWeakObjectPtr<UWorld>;
    Constraints: TArray<TWeakObjectPtr<UTickableConstraint>>;
}
declare const FConstraintsInWorld: FConstraintsInWorld;

declare interface FMovieSceneConstraintChannel extends FMovieSceneBoolChannel {

}
declare const FMovieSceneConstraintChannel: FMovieSceneConstraintChannel;

declare interface UConstraintSubsystem extends UEngineSubsystem {
    OnConstraintAddedToSystem_BP: FConstraintSubsystemOnConstraintAddedToSystem_BP;
    OnConstraintRemovedFromSystem_BP: FConstraintSubsystemOnConstraintRemovedFromSystem_BP;
    ConstraintsInWorld: TArray<FConstraintsInWorld>;
    OnConstraintRemovedFromSystem__DelegateSignature(Mananger: UConstraintSubsystem, Constraint: UTickableConstraint, bDoNotCompensate: boolean): void;
    OnConstraintAddedToSystem__DelegateSignature(Mananger: UConstraintSubsystem, Constraint: UTickableConstraint): void;
}
declare const UConstraintSubsystem: UConstraintSubsystem;

declare interface UConstraintsManager extends UObject {
    OnConstraintAdded_BP: FConstraintsManagerOnConstraintAdded_BP;
    OnConstraintRemoved_BP: FConstraintsManagerOnConstraintRemoved_BP;
    Constraints: TArray<UTickableConstraint>;
    OnConstraintRemoved__DelegateSignature(Mananger: UConstraintsManager, Constraint: UTickableConstraint, bDoNotCompensate: boolean): void;
    OnConstraintAdded__DelegateSignature(Mananger: UConstraintsManager, Constraint: UTickableConstraint): void;
}
declare const UConstraintsManager: UConstraintsManager;

declare interface UConstraintsScriptingLibrary extends UBlueprintFunctionLibrary {
    RemoveThisConstraint(InWorld: UWorld, InTickableConstraint: UTickableConstraint): boolean;
    RemoveConstraint(InWorld: UWorld, InIndex: number): boolean;
    GetConstraintsArray(InWorld: UWorld): TArray<UTickableConstraint>;
    CreateTransformableHandle(InWorld: UWorld, InObject: UObject, InAttachmentName: FName): UTransformableHandle;
    CreateTransformableComponentHandle(InWorld: UWorld, InSceneComponent: USceneComponent, InSocketName: FName): UTransformableComponentHandle;
    CreateFromType(InWorld: UWorld, InType: ETransformConstraintType): UTickableTransformConstraint;
    AddConstraint(InWorld: UWorld, InParentHandle: UTransformableHandle, InChildHandle: UTransformableHandle, InConstraint: UTickableTransformConstraint, bMaintainOffset: boolean): boolean;
}
declare const UConstraintsScriptingLibrary: UConstraintsScriptingLibrary;

declare interface UTickableConstraint extends UObject {
    Active: boolean;
    bValid: boolean;
}
declare const UTickableConstraint: UTickableConstraint;

declare interface UTickableLookAtConstraint extends UTickableTransformConstraint {
    Axis: FVector;
}
declare const UTickableLookAtConstraint: UTickableLookAtConstraint;

declare interface UTickableParentConstraint extends UTickableTransformConstraint {
    OffsetTransform: FTransform;
    bScaling: boolean;
    TransformFilter: FTransformFilter;
}
declare const UTickableParentConstraint: UTickableParentConstraint;

declare interface UTickableRotationConstraint extends UTickableTransformConstraint {
    OffsetRotation: FQuat;
    AxisFilter: FFilterOptionPerAxis;
}
declare const UTickableRotationConstraint: UTickableRotationConstraint;

declare interface UTickableScaleConstraint extends UTickableTransformConstraint {
    OffsetScale: FVector;
    AxisFilter: FFilterOptionPerAxis;
}
declare const UTickableScaleConstraint: UTickableScaleConstraint;

declare interface UTickableTransformConstraint extends UTickableConstraint {
    ParentTRSHandle: UTransformableHandle;
    ChildTRSHandle: UTransformableHandle;
    bMaintainOffset: boolean;
    Weight: number;
    bDynamicOffset: boolean;
    Type: ETransformConstraintType;
}
declare const UTickableTransformConstraint: UTickableTransformConstraint;

declare interface UTickableTranslationConstraint extends UTickableTransformConstraint {
    OffsetTranslation: FVector;
    AxisFilter: FFilterOptionPerAxis;
}
declare const UTickableTranslationConstraint: UTickableTranslationConstraint;

declare interface UTransformableComponentHandle extends UTransformableHandle {
    Component: TWeakObjectPtr<USceneComponent>;
    SocketName: FName;
}
declare const UTransformableComponentHandle: UTransformableComponentHandle;

declare interface UTransformableHandle extends UObject {
    ConstraintBindingID: FMovieSceneObjectBindingID;
}
declare const UTransformableHandle: UTransformableHandle;

