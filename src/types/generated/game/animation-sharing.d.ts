declare interface FAnimationSetup {
    AnimSequence: UAnimSequence;
    AnimBlueprint: TSubclassOf<UAnimSharingStateInstance>;
    NumRandomizedInstances: FPerPlatformInt;
    Enabled: FPerPlatformBool;
}
declare const FAnimationSetup: FAnimationSetup;

declare interface FAnimationSharingScalability {
    UseBlendTransitions: FPerPlatformBool;
    BlendSignificanceValue: FPerPlatformFloat;
    MaximumNumberConcurrentBlends: FPerPlatformInt;
    TickSignificanceValue: FPerPlatformFloat;
}
declare const FAnimationSharingScalability: FAnimationSharingScalability;

declare interface FAnimationStateEntry {
    State: uint8;
    AnimationSetups: TArray<FAnimationSetup>;
    bOnDemand: boolean;
    bAdditive: boolean;
    BlendTime: number;
    bReturnToPreviousState: boolean;
    bSetNextState: boolean;
    NextState: uint8;
    MaximumNumberOfConcurrentInstances: FPerPlatformInt;
    WiggleTimePercentage: number;
    bRequiresCurves: boolean;
}
declare const FAnimationStateEntry: FAnimationStateEntry;

declare interface FPerSkeletonAnimationSharingSetup {
    Skeleton: USkeleton;
    SkeletalMesh: USkeletalMesh;
    BlendAnimBlueprint: TSubclassOf<UAnimSharingTransitionInstance>;
    AdditiveAnimBlueprint: TSubclassOf<UAnimSharingAdditiveInstance>;
    StateProcessorClass: TSubclassOf<UAnimationSharingStateProcessor>;
    bEnableMaterialParameterCaching: boolean;
    AnimationStates: TArray<FAnimationStateEntry>;
}
declare const FPerSkeletonAnimationSharingSetup: FPerSkeletonAnimationSharingSetup;

declare interface FTickAnimationSharingFunction extends FTickFunction {

}
declare const FTickAnimationSharingFunction: FTickAnimationSharingFunction;

declare interface UAnimSharingAdditiveInstance extends UAnimInstance {
    BaseComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    AdditiveAnimation: TWeakObjectPtr<UAnimSequence>;
    alpha: number;
    bStateBool: boolean;
}
declare const UAnimSharingAdditiveInstance: UAnimSharingAdditiveInstance;

declare interface UAnimSharingInstance extends UObject {
    RegisteredActors: TArray<AActor>;
    StateProcessor: UAnimationSharingStateProcessor;
    UsedAnimationSequences: TArray<UAnimSequence>;
    StateEnum: UEnum;
    SharingActor: AActor;
}
declare const UAnimSharingInstance: UAnimSharingInstance;

declare interface UAnimSharingStateInstance extends UAnimInstance {
    AnimationToPlay: UAnimSequence;
    PermutationTimeOffset: number;
    PlayRate: number;
    bStateBool: boolean;
    instance: UAnimSharingInstance;
    GetInstancedActors(Actors: TArray<AActor>): void;
}
declare const UAnimSharingStateInstance: UAnimSharingStateInstance;

declare interface UAnimSharingTransitionInstance extends UAnimInstance {
    FromComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    ToComponent: TWeakObjectPtr<USkeletalMeshComponent>;
    BlendTime: number;
    bBlendBool: boolean;
}
declare const UAnimSharingTransitionInstance: UAnimSharingTransitionInstance;

declare interface UAnimationSharingManager extends UObject {
    Skeletons: TArray<USkeleton>;
    PerSkeletonData: TArray<UAnimSharingInstance>;
    RegisterActorWithSkeletonBP(InActor: AActor, SharingSkeleton: USkeleton): void;
    GetAnimationSharingManager(WorldContextObject: UObject): UAnimationSharingManager;
    CreateAnimationSharingManager(WorldContextObject: UObject, setup: UAnimationSharingSetup): boolean;
    AnimationSharingEnabled(): boolean;
}
declare const UAnimationSharingManager: UAnimationSharingManager;

declare interface UAnimationSharingSetup extends UObject {
    SkeletonSetups: TArray<FPerSkeletonAnimationSharingSetup>;
    ScalabilitySettings: FAnimationSharingScalability;
}
declare const UAnimationSharingSetup: UAnimationSharingSetup;

declare interface UAnimationSharingStateProcessor extends UObject {
    AnimationStateEnum: TSoftObjectPtr<UEnum>;
    ProcessActorState(OutState: number, InActor: AActor, CurrentState: uint8, OnDemandState: uint8, bShouldProcess: boolean): void;
    GetAnimationStateEnum(): UEnum;
}
declare const UAnimationSharingStateProcessor: UAnimationSharingStateProcessor;

