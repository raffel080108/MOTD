declare interface ABP_Ramrod_PunchingBag_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    Customizer: UCustomizerComponent;
    AC_AudioFromReaper: UAC_AudioFromReaper_C;
    InstantUsable: UInstantUsable;
    Sphere: USphereComponent;
    SkeletalMesh: USkeletalMeshComponent;
    DefaultSceneRoot: USceneComponent;
    PunchStrenght: number;
    Left_Right: boolean;
    Punch_rng: number;
    CalorieBurnCount: number;
    GetImpulse(Character: APlayerCharacter, Impulse: FVector): void;
    BndEvt__BP_Ramrod_PunchingBag_InstantUsable_K2Node_ComponentBoundEvent_0_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    BndEvt__BP_Ramrod_PunchingBag_InstantUsable_K2Node_ComponentBoundEvent_1_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    All_AddImpulseAndPlayAnim(Character: APlayerCharacter, Key: EInputKeys): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Ramrod_PunchingBag(EntryPoint: number): void;
}
declare const ABP_Ramrod_PunchingBag_C: ABP_Ramrod_PunchingBag_C;

