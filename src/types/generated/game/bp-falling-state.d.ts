declare interface UBP_FallingState_C extends UFallingStateComponent {
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
    ShowJumpBootsActivation(): void;
    ReceiveHoverBootsTick(DeltaSeconds: number): void;
    ReceiveHoverBootsActiveChanged(IsActive: boolean): void;
    ExecuteUbergraph_BP_FallingState(EntryPoint: number): void;
}
declare const UBP_FallingState_C: UBP_FallingState_C;

