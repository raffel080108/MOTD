declare interface ABP_TruckerBalls_C extends AActor {
    readonly __static_ABP_TruckerBalls_C: {
        ReceiveBeginPlay(): void;
        BndEvt__InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
        Move_ALL(SelectFirst: boolean): void;
        ExecuteUbergraph_BP_TruckerBalls(EntryPoint: number): void;
    };
    readonly __properties_ABP_TruckerBalls_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SK_Dice1: USkeletalMeshComponent;
        SK_Dice: USkeletalMeshComponent;
        InstantUsable: UInstantUsable;
        Capsule: UCapsuleComponent;
        DefaultSceneRoot: USceneComponent;
    };
    readonly __staticRegistry: 
        ABP_TruckerBalls_C['__static_ABP_TruckerBalls_C'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_TruckerBalls_C['__properties_ABP_TruckerBalls_C'] &
        AActor['__propertyRegistry'];
}

