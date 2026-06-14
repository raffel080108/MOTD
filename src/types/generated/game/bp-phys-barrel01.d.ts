declare interface ABP_Phys_Barrel01_C extends AFSDPhysicsActor {
    UberGraphFrame: FPointerToUberGraphFrame;
    BarrelRiderCollission: UCapsuleComponent;
    GravityChanged: UGravityChangedComponent;
    InstantUsable: UInstantUsable;
    UseCapsule: UCapsuleComponent;
    StaticMeshComponent0: UStaticMeshComponent;
    CanTriggerSound: boolean;
    KickSoundLocation: FVector;
    KickedBy: APlayerCharacter;
    KickedIntoHoop: boolean;
    BarrelRiderAchievement: UObject;
    RideBeginTime: number;
    CurrentRider: APlayerCharacter;
    OnRep_KickSoundLocation(): void;
    BndEvt__StaticMeshComponent0_K2Node_ComponentBoundEvent_0_ComponentHitSignature__DelegateSignature(HitComponent: UPrimitiveComponent, OtherActor: AActor, OtherComp: UPrimitiveComponent, NormalImpulse: FVector, Hit: FHitResult): void;
    BndEvt__InstantUsable_K2Node_ComponentBoundEvent_1_UsedBySignature__DelegateSignature(User: APlayerCharacter, Key: EInputKeys): void;
    ReceiveBeginPlay(): void;
    destroy(): void;
    DestroyOvertime(): void;
    Play_Kick(Kicker: APlayerCharacter): void;
    ExecuteUbergraph_BP_Phys_Barrel01(EntryPoint: number): void;
}
declare const ABP_Phys_Barrel01_C: ABP_Phys_Barrel01_C;

