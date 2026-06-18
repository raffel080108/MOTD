declare interface UBP_AudioControl_LowHealth_C extends UActorComponent {
    readonly __static_UBP_AudioControl_LowHealth_C: {
        SetSoundFromAlpha(FadeAlpha: number): void;
        ShouldSetTimestamp(IsActivate: boolean): boolean;
        FadeInLowHealth(): void;
        FadeOutLowHealth(): void;
        HandleHeartbeat(TurnOn: boolean): void;
        HandleLowHealthMuffling(TurnOn: boolean): void;
        OnDeath_Event(HealthComponent: UHealthComponentBase): void;
        OnDestroyed_Event(DestroyedActor: AActor): void;
        OnDeahtAndDestroyed(): void;
        ReceiveBeginPlay(): void;
        HealthChanged(Amount: number): void;
        ReceiveTick(DeltaSeconds: number): void;
        ExecuteUbergraph_BP_AudioControl_LowHealth(EntryPoint: number): void;
    };
    readonly __properties_UBP_AudioControl_LowHealth_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        wasAbove: boolean;
        IronWillIsSpawned: UAudioComponent;
        LowHealthEq: USubmixEffectSubmixEQPreset;
        Health_Low_Cue: UAudioComponent;
        PlayerCharacter: APlayerCharacter;
        PlayerHealthComponent: UPlayerHealthComponent;
        LowHealthReverb: USubmixEffectReverbPreset;
        fadeInCurve: UCurveFloat;
        FadeTimeLeft: number;
        FadeInTime: number;
        alpha: number;
        IsFadingIn: boolean;
        FadeOutTime: number;
        prevIsLowHealth: boolean;
        HealthChange: number;
        IsLowHealthOn: boolean;
        Temperature_Low_Cue: UAudioComponent;
        PlagueInfected: USoundCue;
        Temperature_VeryLow_Cue: UAudioComponent;
        PlagueInfectedAudioEcho: USubmixEffectStereoDelayPreset;
        PlagueInfectedFilter: USubmixEffectFilterPreset;
        InfectedSound: UAudioComponent;
    };
    readonly __staticRegistry: 
        UBP_AudioControl_LowHealth_C['__static_UBP_AudioControl_LowHealth_C'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_AudioControl_LowHealth_C['__properties_UBP_AudioControl_LowHealth_C'] &
        UActorComponent['__propertyRegistry'];
}

