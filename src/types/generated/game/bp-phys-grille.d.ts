declare interface ABP_Phys_Grille_C extends AActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    UseableBox: UBoxComponent;
    InstantUsable: UInstantUsable;
    StaticMeshComponent0: UStaticMeshComponent;
    CanTriggerSound: boolean;
    KickSoundLocation: FVector;
    OnRep_KickSoundLocation(): void;
    BndEvt__StaticMeshComponent0_K2Node_ComponentBoundEvent_0_ComponentHitSignature__DelegateSignature(HitComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, NormalImpulse: FVector, Hit: FHitResult): void;
    BndEvt__InstantUsable_K2Node_ComponentBoundEvent_1_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_Phys_Grille(EntryPoint: number): void;
}
declare const ABP_Phys_Grille_C: ABP_Phys_Grille_C;

