declare interface FAudioOutputDeviceInfo {
    Name: string;
    DeviceID: string;
    NumChannels: number;
    SampleRate: number;
    Format: EAudioMixerStreamDataFormatType;
    OutputChannelArray: EAudioMixerChannelType[];
    bIsSystemDefault: boolean;
    bIsCurrentDevice: boolean;
}

declare interface FSubmixEffectDynamicProcessorFilterSettings {
    bEnabled: boolean;
    Cutoff: number;
    GainDb: number;
}

declare interface FSubmixEffectDynamicsProcessorSettings {
    DynamicsProcessorType: ESubmixEffectDynamicsProcessorType;
    PeakMode: ESubmixEffectDynamicsPeakMode;
    LinkMode: ESubmixEffectDynamicsChannelLinkMode;
    InputGainDb: number;
    ThresholdDb: number;
    Ratio: number;
    KneeBandwidthDb: number;
    LookAheadMsec: number;
    AttackTimeMsec: number;
    ReleaseTimeMsec: number;
    KeySource: ESubmixEffectDynamicsKeySource;
    ExternalAudioBus: UAudioBus;
    ExternalSubmix: USoundSubmix;
    bChannelLinked: boolean;
    bAnalogMode: boolean;
    bBypass: boolean;
    bKeyAudition: boolean;
    KeyGainDb: number;
    OutputGainDb: number;
    KeyHighshelf: FSubmixEffectDynamicProcessorFilterSettings;
    KeyLowshelf: FSubmixEffectDynamicProcessorFilterSettings;
}

declare interface FSubmixEffectEQBand {
    Frequency: number;
    Bandwidth: number;
    GainDb: number;
    bEnabled: boolean;
}

declare interface FSubmixEffectReverbSettings {
    bBypassEarlyReflections: boolean;
    ReflectionsDelay: number;
    GainHF: number;
    ReflectionsGain: number;
    bBypassLateReflections: boolean;
    LateDelay: number;
    DecayTime: number;
    Density: number;
    Diffusion: number;
    AirAbsorptionGainHF: number;
    DecayHFRatio: number;
    LateGain: number;
    Gain: number;
    WetLevel: number;
    DryLevel: number;
    bBypass: boolean;
}

declare interface FSubmixEffectSubmixEQSettings {
    EQBands: FSubmixEffectEQBand[];
}

declare interface FSwapAudioOutputResult {
    CurrentDeviceId: string;
    RequestedDeviceId: string;
    Result: ESwapAudioOutputDeviceResultState;
}

declare interface UAudioBusSubsystem extends UAudioEngineSubsystem {
    readonly __staticRegistry: 
        UAudioEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioEngineSubsystem['__propertyRegistry'];
}

declare interface UAudioDeviceNotificationSubsystem extends UEngineSubsystem {
    readonly __properties_UAudioDeviceNotificationSubsystem: {
        DefaultCaptureDeviceChanged: FAudioDeviceNotificationSubsystemDefaultCaptureDeviceChanged;
        DefaultRenderDeviceChanged: FAudioDeviceNotificationSubsystemDefaultRenderDeviceChanged;
        DeviceAdded: FAudioDeviceNotificationSubsystemDeviceAdded;
        DeviceRemoved: FAudioDeviceNotificationSubsystemDeviceRemoved;
        DeviceStateChanged: FAudioDeviceNotificationSubsystemDeviceStateChanged;
        DeviceSwitched: FAudioDeviceNotificationSubsystemDeviceSwitched;
    };
    readonly __staticRegistry: 
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioDeviceNotificationSubsystem['__properties_UAudioDeviceNotificationSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UAudioGenerator extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UAudioMixerBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAudioMixerBlueprintLibrary: {
        UnregisterAudioBusFromSubmix(WorldContextObject: UObject, SoundSubmix: USoundSubmix, AudioBus: UAudioBus): void;
        TrimAudioCache(InMegabytesToFree: number): number;
        SwapAudioOutputDevice(WorldContextObject: UObject, NewDeviceId: string, OnCompletedDeviceSwap: FSwapAudioOutputDeviceOnCompletedDeviceSwap): void;
        StopRecordingOutput(WorldContextObject: UObject, ExportType: EAudioRecordingExportType, Name: string, Path: string, SubmixToRecord: USoundSubmix, ExistingSoundWaveToOverwrite: USoundWave): USoundWave;
        StopAudioBus(WorldContextObject: UObject, AudioBus: UAudioBus): void;
        StopAnalyzingOutput(WorldContextObject: UObject, SubmixToStopAnalyzing: USoundSubmix): void;
        StartRecordingOutput(WorldContextObject: UObject, ExpectedDuration: number, SubmixToRecord: USoundSubmix): void;
        StartAudioBus(WorldContextObject: UObject, AudioBus: UAudioBus): void;
        StartAnalyzingOutput(WorldContextObject: UObject, SubmixToAnalyze: USoundSubmix, FFTSize: EFFTSize, InterpolationMethod: EFFTPeakInterpolationMethod, WindowType: EFFTWindowType, HopSize: number, SpectrumType: EAudioSpectrumType): void;
        SetSubmixEffectChainOverride(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixEffectPresetChain: USoundEffectSubmixPreset[], FadeTimeSec: number): void;
        SetBypassSourceEffectChainEntry(WorldContextObject: UObject, PresetChain: USoundEffectSourcePresetChain, EntryIndex: number, bBypassed: boolean): void;
        ResumeRecordingOutput(WorldContextObject: UObject, SubmixToPause: USoundSubmix): void;
        ReplaceSubmixEffect(WorldContextObject: UObject, InSoundSubmix: USoundSubmix, SubmixChainIndex: number, SubmixEffectPreset: USoundEffectSubmixPreset): void;
        ReplaceSoundEffectSubmix(WorldContextObject: UObject, InSoundSubmix: USoundSubmix, SubmixChainIndex: number, SubmixEffectPreset: USoundEffectSubmixPreset): void;
        RemoveSubmixEffectPresetAtIndex(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixChainIndex: number): void;
        RemoveSubmixEffectPreset(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixEffectPreset: USoundEffectSubmixPreset): void;
        RemoveSubmixEffectAtIndex(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixChainIndex: number): void;
        RemoveSubmixEffect(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixEffectPreset: USoundEffectSubmixPreset): void;
        RemoveSourceEffectFromPresetChain(WorldContextObject: UObject, PresetChain: USoundEffectSourcePresetChain, EntryIndex: number): void;
        RemoveMasterSubmixEffect(WorldContextObject: UObject, SubmixEffectPreset: USoundEffectSubmixPreset): void;
        RegisterAudioBusToSubmix(WorldContextObject: UObject, SoundSubmix: USoundSubmix, AudioBus: UAudioBus): void;
        PrimeSoundForPlayback(SoundWave: USoundWave, OnLoadCompletion: FPrimeSoundForPlaybackOnLoadCompletion): void;
        PrimeSoundCueForPlayback(SoundCue: USoundCue): void;
        PauseRecordingOutput(WorldContextObject: UObject, SubmixToPause: USoundSubmix): void;
        MakePresetSpectralAnalysisBandSettings(InBandPresetType: EAudioSpectrumBandPresetType, InNumBands: number, InAttackTimeMsec: number, InReleaseTimeMsec: number): FSoundSubmixSpectralAnalysisBandSettings[];
        MakeMusicalSpectralAnalysisBandSettings(InNumSemitones: number, InStartingMusicalNote: EMusicalNoteName, InStartingOctave: number, InAttackTimeMsec: number, InReleaseTimeMsec: number): FSoundSubmixSpectralAnalysisBandSettings[];
        MakeFullSpectrumSpectralAnalysisBandSettings(InNumBands: number, InMinimumFrequency: number, InMaximumFrequency: number, InAttackTimeMsec: number, InReleaseTimeMsec: number): FSoundSubmixSpectralAnalysisBandSettings[];
        IsAudioBusActive(WorldContextObject: UObject, AudioBus: UAudioBus): boolean;
        GetPhaseForFrequencies(WorldContextObject: UObject, Frequencies: number[], Phases: number[], SubmixToAnalyze: USoundSubmix): void;
        GetNumberOfEntriesInSourceEffectChain(WorldContextObject: UObject, PresetChain: USoundEffectSourcePresetChain): number;
        GetMagnitudeForFrequencies(WorldContextObject: UObject, Frequencies: number[], Magnitudes: number[], SubmixToAnalyze: USoundSubmix): void;
        GetCurrentAudioOutputDeviceName(WorldContextObject: UObject, OnObtainCurrentDeviceEvent: FGetCurrentAudioOutputDeviceNameOnObtainCurrentDeviceEvent): void;
        GetAvailableAudioOutputDevices(WorldContextObject: UObject, OnObtainDevicesEvent: FGetAvailableAudioOutputDevicesOnObtainDevicesEvent): void;
        Conv_AudioOutputDeviceInfoToString(Info: FAudioOutputDeviceInfo): string;
        ClearSubmixEffects(WorldContextObject: UObject, SoundSubmix: USoundSubmix): void;
        ClearSubmixEffectChainOverride(WorldContextObject: UObject, SoundSubmix: USoundSubmix, FadeTimeSec: number): void;
        ClearMasterSubmixEffects(WorldContextObject: UObject): void;
        AddSubmixEffect(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixEffectPreset: USoundEffectSubmixPreset): number;
        AddSourceEffectToPresetChain(WorldContextObject: UObject, PresetChain: USoundEffectSourcePresetChain, Entry: FSourceEffectChainEntry): void;
        AddMasterSubmixEffect(WorldContextObject: UObject, SubmixEffectPreset: USoundEffectSubmixPreset): void;
    };
    readonly __staticRegistry: 
        UAudioMixerBlueprintLibrary['__static_UAudioMixerBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UQuartzClockHandle extends UObject {
    readonly __static_UQuartzClockHandle: {
        UnsubscribeFromTimeDivision(WorldContextObject: UObject, InQuantizationBoundary: EQuartzCommandQuantization, ClockHandle: UQuartzClockHandle): void;
        UnsubscribeFromAllTimeDivisions(WorldContextObject: UObject, ClockHandle: UQuartzClockHandle): void;
        SubscribeToQuantizationEvent(WorldContextObject: UObject, InQuantizationBoundary: EQuartzCommandQuantization, OnQuantizationEvent: FSubscribeToQuantizationEventOnQuantizationEvent, ClockHandle: UQuartzClockHandle): void;
        SubscribeToAllQuantizationEvents(WorldContextObject: UObject, OnQuantizationEvent: FSubscribeToAllQuantizationEventsOnQuantizationEvent, ClockHandle: UQuartzClockHandle): void;
        StopClock(WorldContextObject: UObject, CancelPendingEvents: boolean, ClockHandle: UQuartzClockHandle): void;
        StartOtherClock(WorldContextObject: UObject, OtherClockName: string, InQuantizationBoundary: FQuartzQuantizationBoundary, InDelegate: FStartOtherClockInDelegate): void;
        StartClock(WorldContextObject: UObject, ClockHandle: UQuartzClockHandle): void;
        SetTicksPerSecond(WorldContextObject: UObject, QuantizationBoundary: FQuartzQuantizationBoundary, Delegate: FSetTicksPerSecondDelegate, ClockHandle: UQuartzClockHandle, TicksPerSecond: number): void;
        SetThirtySecondNotesPerMinute(WorldContextObject: UObject, QuantizationBoundary: FQuartzQuantizationBoundary, Delegate: FSetThirtySecondNotesPerMinuteDelegate, ClockHandle: UQuartzClockHandle, ThirtySecondsNotesPerMinute: number): void;
        SetSecondsPerTick(WorldContextObject: UObject, QuantizationBoundary: FQuartzQuantizationBoundary, Delegate: FSetSecondsPerTickDelegate, ClockHandle: UQuartzClockHandle, SecondsPerTick: number): void;
        SetMillisecondsPerTick(WorldContextObject: UObject, QuantizationBoundary: FQuartzQuantizationBoundary, Delegate: FSetMillisecondsPerTickDelegate, ClockHandle: UQuartzClockHandle, MillisecondsPerTick: number): void;
        SetBeatsPerMinute(WorldContextObject: UObject, QuantizationBoundary: FQuartzQuantizationBoundary, Delegate: FSetBeatsPerMinuteDelegate, ClockHandle: UQuartzClockHandle, BeatsPerMinute: number): void;
        ResumeClock(WorldContextObject: UObject, ClockHandle: UQuartzClockHandle): void;
        ResetTransportQuantized(WorldContextObject: UObject, InQuantizationBoundary: FQuartzQuantizationBoundary, InDelegate: FResetTransportQuantizedInDelegate, ClockHandle: UQuartzClockHandle): void;
        ResetTransport(WorldContextObject: UObject, InDelegate: FResetTransportInDelegate): void;
        PauseClock(WorldContextObject: UObject, ClockHandle: UQuartzClockHandle): void;
        NotifyOnQuantizationBoundary(WorldContextObject: UObject, InQuantizationBoundary: FQuartzQuantizationBoundary, InDelegate: FNotifyOnQuantizationBoundaryInDelegate, InMsOffset: number): void;
        IsClockRunning(WorldContextObject: UObject): boolean;
        GetTicksPerSecond(WorldContextObject: UObject): number;
        GetThirtySecondNotesPerMinute(WorldContextObject: UObject): number;
        GetSecondsPerTick(WorldContextObject: UObject): number;
        GetMillisecondsPerTick(WorldContextObject: UObject): number;
        GetEstimatedRunTime(WorldContextObject: UObject): number;
        GetDurationOfQuantizationTypeInSeconds(WorldContextObject: UObject, QuantizationType: EQuartzCommandQuantization, Multiplier: number): number;
        GetCurrentTimestamp(WorldContextObject: UObject): FQuartzTransportTimeStamp;
        GetBeatsPerMinute(WorldContextObject: UObject): number;
        GetBeatProgressPercent(QuantizationBoundary: EQuartzCommandQuantization, PhaseOffset: number, MsOffset: number): number;
    };
    readonly __staticRegistry: 
        UQuartzClockHandle['__static_UQuartzClockHandle'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UQuartzSubsystem extends UTickableWorldSubsystem {
    readonly __static_UQuartzSubsystem: {
        SetQuartzSubsystemTickableWhenPaused(bInTickableWhenPaused: boolean): void;
        IsQuartzEnabled(): boolean;
        IsClockRunning(WorldContextObject: UObject, ClockName: string): boolean;
        GetRoundTripMinLatency(WorldContextObject: UObject): number;
        GetRoundTripMaxLatency(WorldContextObject: UObject): number;
        GetRoundTripAverageLatency(WorldContextObject: UObject): number;
        GetHandleForClock(WorldContextObject: UObject, ClockName: string): UQuartzClockHandle;
        GetGameThreadToAudioRenderThreadMinLatency(WorldContextObject: UObject): number;
        GetGameThreadToAudioRenderThreadMaxLatency(WorldContextObject: UObject): number;
        GetGameThreadToAudioRenderThreadAverageLatency(WorldContextObject: UObject): number;
        GetEstimatedClockRunTime(WorldContextObject: UObject, InClockName: string): number;
        GetDurationOfQuantizationTypeInSeconds(WorldContextObject: UObject, ClockName: string, QuantizationType: EQuartzCommandQuantization, Multiplier: number): number;
        GetCurrentClockTimestamp(WorldContextObject: UObject, InClockName: string): FQuartzTransportTimeStamp;
        GetAudioRenderThreadToGameThreadMinLatency(): number;
        GetAudioRenderThreadToGameThreadMaxLatency(): number;
        GetAudioRenderThreadToGameThreadAverageLatency(): number;
        DoesClockExist(WorldContextObject: UObject, ClockName: string): boolean;
        DeleteClockByName(WorldContextObject: UObject, ClockName: string): void;
        DeleteClockByHandle(WorldContextObject: UObject, InClockHandle: UQuartzClockHandle): void;
        CreateNewClock(WorldContextObject: UObject, ClockName: string, InSettings: FQuartzClockSettings, bOverrideSettingsIfClockExists: boolean, bUseAudioEngineClockManager: boolean): UQuartzClockHandle;
    };
    readonly __staticRegistry: 
        UQuartzSubsystem['__static_UQuartzSubsystem'] &
        UTickableWorldSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UTickableWorldSubsystem['__propertyRegistry'];
}

declare interface UScrubbedSound extends USoundWave {
    readonly __static_UScrubbedSound: {
        SetSoundWave(InSoundWave: USoundWave): void;
        SetPlayheadTime(InPlayheadTimeSeconds: number): void;
        SetIsScrubbingWhileStationary(bInScrubWhileStationary: boolean): void;
        SetIsScrubbing(bInIsScrubbing: boolean): void;
        SetGrainDurationRange(InGrainDurationRangeSeconds: FVector2D): void;
        GetPlayheadTime(): number;
    };
    readonly __properties_UScrubbedSound: {
        SoundWaveToScrub: USoundWave;
    };
    readonly __staticRegistry: 
        UScrubbedSound['__static_UScrubbedSound'] &
        USoundWave['__staticRegistry'];
    readonly __propertyRegistry: 
        UScrubbedSound['__properties_UScrubbedSound'] &
        USoundWave['__propertyRegistry'];
}

declare interface USubmixEffectDynamicsProcessorPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectDynamicsProcessorPreset: {
        SetSettings(Settings: FSubmixEffectDynamicsProcessorSettings): void;
        SetExternalSubmix(Submix: USoundSubmix): void;
        SetAudioBus(AudioBus: UAudioBus): void;
        ResetKey(): void;
    };
    readonly __properties_USubmixEffectDynamicsProcessorPreset: {
        Settings: FSubmixEffectDynamicsProcessorSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectDynamicsProcessorPreset['__static_USubmixEffectDynamicsProcessorPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectDynamicsProcessorPreset['__properties_USubmixEffectDynamicsProcessorPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectReverbPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectReverbPreset: {
        SetSettingsWithReverbEffect(InReverbEffect: UReverbEffect, WetLevel: number, DryLevel: number): void;
        SetSettings(InSettings: FSubmixEffectReverbSettings): void;
    };
    readonly __properties_USubmixEffectReverbPreset: {
        Settings: FSubmixEffectReverbSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectReverbPreset['__static_USubmixEffectReverbPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectReverbPreset['__properties_USubmixEffectReverbPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectSubmixEQPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectSubmixEQPreset: {
        SetSettings(InSettings: FSubmixEffectSubmixEQSettings): void;
    };
    readonly __properties_USubmixEffectSubmixEQPreset: {
        Settings: FSubmixEffectSubmixEQSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectSubmixEQPreset['__static_USubmixEffectSubmixEQPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectSubmixEQPreset['__properties_USubmixEffectSubmixEQPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USynthComponent extends USceneComponent {
    readonly __static_USynthComponent: {
        Stop(): void;
        Start(): void;
        SetVolumeMultiplier(VolumeMultiplier: number): void;
        SetSubmixSend(Submix: USoundSubmixBase, SendLevel: number): void;
        SetSourceBusSendPreEffect(SoundSourceBus: USoundSourceBus, SourceBusSendLevel: number): void;
        SetSourceBusSendPostEffect(SoundSourceBus: USoundSourceBus, SourceBusSendLevel: number): void;
        SetOutputToBusOnly(bInOutputToBusOnly: boolean): void;
        SetModulationRouting(Modulators: USoundModulatorBase[], Destination: EModulationDestination, RoutingMethod: EModulationRouting): void;
        SetLowPassFilterFrequency(InLowPassFilterFrequency: number): void;
        SetLowPassFilterEnabled(InLowPassFilterEnabled: boolean): void;
        SetAudioBusSendPreEffect(AudioBus: UAudioBus, AudioBusSendLevel: number): void;
        SetAudioBusSendPostEffect(AudioBus: UAudioBus, AudioBusSendLevel: number): void;
        IsPlaying(): boolean;
        GetModulators(Destination: EModulationDestination): USoundModulatorBase[];
        FadeOut(FadeoutDuration: number, FadeVolumeLevel: number, FadeCurve: EAudioFaderCurve): void;
        FadeIn(FadeInDuration: number, FadeVolumeLevel: number, StartTime: number, FadeCurve: EAudioFaderCurve): void;
        AdjustVolume(AdjustVolumeDuration: number, AdjustVolumeLevel: number, FadeCurve: EAudioFaderCurve): void;
    };
    readonly __properties_USynthComponent: {
        bAutoDestroy: boolean;
        bStopWhenOwnerDestroyed: boolean;
        bAllowSpatialization: boolean;
        bOverrideAttenuation: boolean;
        bEnableBusSends: boolean;
        bEnableBaseSubmix: boolean;
        bEnableSubmixSends: boolean;
        AttenuationSettings: USoundAttenuation;
        AttenuationOverrides: FSoundAttenuationSettings;
        ConcurrencySettings: USoundConcurrency;
        ConcurrencySet: USoundConcurrency[];
        ModulationRouting: FSoundModulationDefaultRoutingSettings;
        SoundClass: USoundClass;
        SourceEffectChain: USoundEffectSourcePresetChain;
        SoundSubmix: USoundSubmixBase;
        SoundSubmixSends: FSoundSubmixSendInfo[];
        BusSends: FSoundSourceBusSendInfo[];
        PreEffectBusSends: FSoundSourceBusSendInfo[];
        bIsUISound: boolean;
        bIsPreviewSound: boolean;
        EnvelopeFollowerAttackTime: number;
        EnvelopeFollowerReleaseTime: number;
        OnAudioEnvelopeValue: FSynthComponentOnAudioEnvelopeValue;
        Synth: USynthSound;
        AudioComponent: UAudioComponent;
    };
    readonly __staticRegistry: 
        USynthComponent['__static_USynthComponent'] &
        USceneComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthComponent['__properties_USynthComponent'] &
        USceneComponent['__propertyRegistry'];
}

declare interface USynthSound extends USoundWaveProcedural {
    readonly __properties_USynthSound: {
        OwningSynthComponent: TWeakObjectPtr<USynthComponent>;
    };
    readonly __staticRegistry: 
        USoundWaveProcedural['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthSound['__properties_USynthSound'] &
        USoundWaveProcedural['__propertyRegistry'];
}

