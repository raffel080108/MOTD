declare interface UBP_DeadState_C extends UDeadStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    deathEffect: UFXSystemAsset;
    deathMontage: UAnimMontage;
    ReceiveBeginPlay(): void;
    ReceiveStateExit(): void;
    ReceiveStateEnter(): void;
    SetDeathParameters(respawnDelay: number, effectDelay: number, deathMontage: UAnimMontage, deathEffect: UFXSystemAsset, useAnimationTimeAsRespawnTime: boolean): void;
    ExecuteUbergraph_BP_DeadState(EntryPoint: number): void;
}
declare const UBP_DeadState_C: UBP_DeadState_C;

