declare interface UBP_SelfiePoint_C extends USceneComponent {
    readonly __static_UBP_SelfiePoint_C: {
        GetTargetTransform(): FTransform;
        DeactivateCamera(): void;
        ActivateCamera(): void;
        ReceiveBeginPlay(): void;
        ReceiveTick(DeltaSeconds: number): void;
        ExecuteUbergraph_BP_SelfiePoint(EntryPoint: number): void;
    };
    readonly __properties_UBP_SelfiePoint_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Camera: ACameraActor;
        FOV: number;
        EaseMultiplier: number;
        EaseFunction: EEasingFunc;
        BlendExp: number;
        Steps: number;
        LookAtPlayerOffset: boolean;
        PlayerOffset: FVector;
    };
    readonly __staticRegistry: 
        UBP_SelfiePoint_C['__static_UBP_SelfiePoint_C'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_SelfiePoint_C['__properties_UBP_SelfiePoint_C'] &
        USceneComponent['__propertyRegistry'];
}

