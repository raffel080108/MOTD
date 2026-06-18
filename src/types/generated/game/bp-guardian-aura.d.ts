declare interface ABP_GuardianAura_C extends AAuraBubble {
    readonly __static_ABP_GuardianAura_C: {
        Receive_StartEffects(): void;
        Receive_StopEffects(): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_GuardianAura(EntryPoint: number): void;
    };
    readonly __properties_ABP_GuardianAura_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GuardianAuraSound: UFSDAudioComponent;
        CombatbubbleParticle: UNiagaraComponent;
        SpringArm: USpringArmComponent;
        ParticleRotation: FRotator;
        BaseRadius: number;
    };
    readonly __staticRegistry: 
        ABP_GuardianAura_C['__static_ABP_GuardianAura_C'] &
        AAuraBubble['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_GuardianAura_C['__properties_ABP_GuardianAura_C'] &
        AAuraBubble['__propertyRegistry'];
}

