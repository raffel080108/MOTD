declare interface FAnimationSetup {
    AnimSequence: UAnimSequence;
    AnimBlueprint: TSubclassOf<UAnimSharingStateInstance>;
    NumRandomizedInstances: FPerPlatformInt;
    Enabled: FPerPlatformBool;
}

declare interface FAnimationSharingScalability {
    UseBlendTransitions: FPerPlatformBool;
    BlendSignificanceValue: FPerPlatformFloat;
    MaximumNumberConcurrentBlends: FPerPlatformInt;
    TickSignificanceValue: FPerPlatformFloat;
}

declare interface FAnimationStateEntry {
    State: number;
    AnimationSetups: FAnimationSetup[];
    bOnDemand: boolean;
    bAdditive: boolean;
    BlendTime: number;
    bReturnToPreviousState: boolean;
    bSetNextState: boolean;
    NextState: number;
    MaximumNumberOfConcurrentInstances: FPerPlatformInt;
    WiggleTimePercentage: number;
    bRequiresCurves: boolean;
}

declare interface FPerSkeletonAnimationSharingSetup {
    Skeleton: USkeleton;
    SkeletalMesh: USkeletalMesh;
    BlendAnimBlueprint: TSubclassOf<UAnimSharingTransitionInstance>;
    AdditiveAnimBlueprint: TSubclassOf<UAnimSharingAdditiveInstance>;
    StateProcessorClass: TSubclassOf<UAnimationSharingStateProcessor>;
    bEnableMaterialParameterCaching: boolean;
    AnimationStates: FAnimationStateEntry[];
}

declare interface FTickAnimationSharingFunction extends FTickFunction {

}

declare interface UAnimSharingAdditiveInstance extends UAnimInstance {
    readonly __properties_UAnimSharingAdditiveInstance: {
        BaseComponent: TWeakObjectPtr<USkeletalMeshComponent>;
        AdditiveAnimation: TWeakObjectPtr<UAnimSequence>;
        alpha: number;
        bStateBool: boolean;
    };
    readonly __staticRegistry: 
        UAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimSharingAdditiveInstance['__properties_UAnimSharingAdditiveInstance'] &
        UAnimInstance['__propertyRegistry'];
}

declare interface UAnimSharingInstance extends UObject {
    readonly __properties_UAnimSharingInstance: {
        RegisteredActors: AActor[];
        StateProcessor: UAnimationSharingStateProcessor;
        UsedAnimationSequences: UAnimSequence[];
        StateEnum: UEnum;
        SharingActor: AActor;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimSharingInstance['__properties_UAnimSharingInstance'] &
        UObject['__propertyRegistry'];
}

declare interface UAnimSharingStateInstance extends UAnimInstance {
    readonly __static_UAnimSharingStateInstance: {
        GetInstancedActors(Actors: AActor[]): void;
    };
    readonly __properties_UAnimSharingStateInstance: {
        AnimationToPlay: UAnimSequence;
        PermutationTimeOffset: number;
        PlayRate: number;
        bStateBool: boolean;
        instance: UAnimSharingInstance;
    };
    readonly __staticRegistry: 
        UAnimSharingStateInstance['__static_UAnimSharingStateInstance'] &
        UAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimSharingStateInstance['__properties_UAnimSharingStateInstance'] &
        UAnimInstance['__propertyRegistry'];
}

declare interface UAnimSharingTransitionInstance extends UAnimInstance {
    readonly __properties_UAnimSharingTransitionInstance: {
        FromComponent: TWeakObjectPtr<USkeletalMeshComponent>;
        ToComponent: TWeakObjectPtr<USkeletalMeshComponent>;
        BlendTime: number;
        bBlendBool: boolean;
    };
    readonly __staticRegistry: 
        UAnimInstance['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimSharingTransitionInstance['__properties_UAnimSharingTransitionInstance'] &
        UAnimInstance['__propertyRegistry'];
}

declare interface UAnimationSharingManager extends UObject {
    readonly __static_UAnimationSharingManager: {
        RegisterActorWithSkeletonBP(InActor: AActor, SharingSkeleton: USkeleton): void;
        GetAnimationSharingManager(WorldContextObject: UObject): UAnimationSharingManager;
        CreateAnimationSharingManager(WorldContextObject: UObject, setup: UAnimationSharingSetup): boolean;
        AnimationSharingEnabled(): boolean;
    };
    readonly __properties_UAnimationSharingManager: {
        Skeletons: USkeleton[];
        PerSkeletonData: UAnimSharingInstance[];
    };
    readonly __staticRegistry: 
        UAnimationSharingManager['__static_UAnimationSharingManager'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimationSharingManager['__properties_UAnimationSharingManager'] &
        UObject['__propertyRegistry'];
}

declare interface UAnimationSharingSetup extends UObject {
    readonly __properties_UAnimationSharingSetup: {
        SkeletonSetups: FPerSkeletonAnimationSharingSetup[];
        ScalabilitySettings: FAnimationSharingScalability;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimationSharingSetup['__properties_UAnimationSharingSetup'] &
        UObject['__propertyRegistry'];
}

declare interface UAnimationSharingStateProcessor extends UObject {
    readonly __static_UAnimationSharingStateProcessor: {
        ProcessActorState(OutState: number, InActor: AActor, CurrentState: number, OnDemandState: number, bShouldProcess: boolean): void;
        GetAnimationStateEnum(): UEnum;
    };
    readonly __properties_UAnimationSharingStateProcessor: {
        AnimationStateEnum: TSoftObjectPtr<UEnum>;
    };
    readonly __staticRegistry: 
        UAnimationSharingStateProcessor['__static_UAnimationSharingStateProcessor'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAnimationSharingStateProcessor['__properties_UAnimationSharingStateProcessor'] &
        UObject['__propertyRegistry'];
}

