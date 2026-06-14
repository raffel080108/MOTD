declare interface ABP_TimeRewinder_C extends ATimeRewinder {
    UberGraphFrame: FPointerToUberGraphFrame;
    Warning_Sound: UFSDAudioComponent;
    TP_Active_Idle: UFirstPersonNiagaraComponent;
    TP_Activation: UFirstPersonNiagaraComponent;
    Particles_Activation: UFirstPersonNiagaraComponent;
    Particles_Active_Idle: UFirstPersonNiagaraComponent;
    IsActive: boolean;
    RetconAudioEcho: USubmixEffectStereoDelayPreset;
    RetconAudioFilter: USubmixEffectFilterPreset;
    RetconAudioEcho_High: USubmixEffectStereoDelayPreset;
    RetconAudioFilter_High: USubmixEffectFilterPreset;
    Retcon_GlobalReverb: USoundSubmix;
    Player: APlayerCharacter;
    CooldownParticles: UNiagaraSystem;
    ParticleInstance: UNiagaraComponent;
    CooldownMaterial: UMaterial;
    OriginalMaterial: UMaterialInterface;
    ReceiveBeginPlay(): void;
    RecieveEquipped(): void;
    RecieveUnequipped(): void;
    OnActivated(): void;
    OnDeactivated(): void;
    Receive_RewindPointPlaced(): void;
    Receive_AlmonstOverWarning(): void;
    Receive_OnParadoxBlastTriggered(Location: FVector): void;
    Receive_ShowOnCooldownEffects(): void;
    Receive_HideOnCooldownEffects(): void;
    Receive_PopSoundMixes(): void;
    Receive_Rewind(): void;
    ExecuteUbergraph_BP_TimeRewinder(EntryPoint: number): void;
}
declare const ABP_TimeRewinder_C: ABP_TimeRewinder_C;

