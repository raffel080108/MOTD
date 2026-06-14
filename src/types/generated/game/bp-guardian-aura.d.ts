declare interface ABP_GuardianAura_C extends AAuraBubble {
    UberGraphFrame: FPointerToUberGraphFrame;
    GuardianAuraSound: UFSDAudioComponent;
    CombatbubbleParticle: UNiagaraComponent;
    SpringArm: USpringArmComponent;
    ParticleRotation: FRotator;
    BaseRadius: number;
    Receive_StartEffects(): void;
    Receive_StopEffects(): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_BP_GuardianAura(EntryPoint: number): void;
}
declare const ABP_GuardianAura_C: ABP_GuardianAura_C;

