declare interface UBP_SelfiePoint_C extends USceneComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    Camera: ACameraActor;
    FOV: number;
    EaseMultiplier: number;
    EaseFunction: EEasingFunc;
    BlendExp: number;
    Steps: number;
    LookAtPlayerOffset: boolean;
    PlayerOffset: FVector;
    GetTargetTransform(): FTransform;
    DeactivateCamera(): void;
    ActivateCamera(): void;
    ReceiveBeginPlay(): void;
    ReceiveTick(DeltaSeconds: number): void;
    ExecuteUbergraph_BP_SelfiePoint(EntryPoint: number): void;
}
declare const UBP_SelfiePoint_C: UBP_SelfiePoint_C;

