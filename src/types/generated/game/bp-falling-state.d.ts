declare interface UBP_FallingState_C extends UFallingStateComponent {
    readonly __static_UBP_FallingState_C: {
        ShowJumpBootsActivation(): void;
        ReceiveHoverBootsTick(DeltaSeconds: number): void;
        ReceiveHoverBootsActiveChanged(IsActive: boolean): void;
        ExecuteUbergraph_BP_FallingState(EntryPoint: number): void;
    };
    readonly __properties_UBP_FallingState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        JumpBootsActivated_Cue: USoundBase;
        ImpactCompensation_Impact_Cue: USoundBase;
        Impactcompensation_Impact_Particles: UNiagaraSystem;
        ImpactCompensation_Activate_Cue: USoundBase;
        ImpactCompensationDeactivateCue: USoundBase;
        IC_WasActivated: boolean;
        HoverBootsBreakingSpeed: number;
        Particles_3P: UNiagaraSystem;
        Particles_1P: UNiagaraSystem;
    };
    readonly __staticRegistry: 
        UBP_FallingState_C['__static_UBP_FallingState_C'] &
        UFallingStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_FallingState_C['__properties_UBP_FallingState_C'] &
        UFallingStateComponent['__propertyRegistry'];
}

