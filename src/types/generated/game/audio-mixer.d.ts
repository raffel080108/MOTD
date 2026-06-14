declare interface FAudioOutputDeviceInfo {
    Name: FString;
    DeviceID: FString;
    NumChannels: number;
    SampleRate: number;
    Format: EAudioMixerStreamDataFormatType;
    OutputChannelArray: TArray<EAudioMixerChannelType>;
    bIsSystemDefault: boolean;
    bIsCurrentDevice: boolean;
}
declare const FAudioOutputDeviceInfo: FAudioOutputDeviceInfo;

declare interface FSubmixEffectDynamicProcessorFilterSettings {
    bEnabled: boolean;
    Cutoff: number;
    GainDb: number;
}
declare const FSubmixEffectDynamicProcessorFilterSettings: FSubmixEffectDynamicProcessorFilterSettings;

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
declare const FSubmixEffectDynamicsProcessorSettings: FSubmixEffectDynamicsProcessorSettings;

declare interface FSubmixEffectEQBand {
    Frequency: number;
    Bandwidth: number;
    GainDb: number;
    bEnabled: boolean;
}
declare const FSubmixEffectEQBand: FSubmixEffectEQBand;

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
declare const FSubmixEffectReverbSettings: FSubmixEffectReverbSettings;

declare interface FSubmixEffectSubmixEQSettings {
    EQBands: TArray<FSubmixEffectEQBand>;
}
declare const FSubmixEffectSubmixEQSettings: FSubmixEffectSubmixEQSettings;

declare interface FSwapAudioOutputResult {
    CurrentDeviceId: FString;
    RequestedDeviceId: FString;
    Result: ESwapAudioOutputDeviceResultState;
}
declare const FSwapAudioOutputResult: FSwapAudioOutputResult;

declare interface UAudioBusSubsystem extends UAudioEngineSubsystem {

}
declare const UAudioBusSubsystem: UAudioBusSubsystem;

declare interface UAudioDeviceNotificationSubsystem extends UEngineSubsystem {
    DefaultCaptureDeviceChanged: FAudioDeviceNotificationSubsystemDefaultCaptureDeviceChanged;
    DefaultRenderDeviceChanged: FAudioDeviceNotificationSubsystemDefaultRenderDeviceChanged;
    DeviceAdded: FAudioDeviceNotificationSubsystemDeviceAdded;
    DeviceRemoved: FAudioDeviceNotificationSubsystemDeviceRemoved;
    DeviceStateChanged: FAudioDeviceNotificationSubsystemDeviceStateChanged;
    DeviceSwitched: FAudioDeviceNotificationSubsystemDeviceSwitched;
}
declare const UAudioDeviceNotificationSubsystem: UAudioDeviceNotificationSubsystem;

declare interface UAudioGenerator extends UObject {

}
declare const UAudioGenerator: UAudioGenerator;

declare interface UAudioMixerBlueprintLibrary extends UBlueprintFunctionLibrary {
    UnregisterAudioBusFromSubmix(WorldContextObject: UObject, SoundSubmix: USoundSubmix, AudioBus: UAudioBus): void;
    TrimAudioCache(InMegabytesToFree: number): number;
    SwapAudioOutputDevice(WorldContextObject: UObject, NewDeviceId: string | FString, OnCompletedDeviceSwap: FSwapAudioOutputDeviceOnCompletedDeviceSwap): void;
    StopRecordingOutput(WorldContextObject: UObject, ExportType: EAudioRecordingExportType, Name: string | FString, Path: string | FString, SubmixToRecord: USoundSubmix, ExistingSoundWaveToOverwrite: USoundWave): USoundWave;
    StopAudioBus(WorldContextObject: UObject, AudioBus: UAudioBus): void;
    StopAnalyzingOutput(WorldContextObject: UObject, SubmixToStopAnalyzing: USoundSubmix): void;
    StartRecordingOutput(WorldContextObject: UObject, ExpectedDuration: number, SubmixToRecord: USoundSubmix): void;
    StartAudioBus(WorldContextObject: UObject, AudioBus: UAudioBus): void;
    StartAnalyzingOutput(WorldContextObject: UObject, SubmixToAnalyze: USoundSubmix, FFTSize: EFFTSize, InterpolationMethod: EFFTPeakInterpolationMethod, WindowType: EFFTWindowType, HopSize: number, SpectrumType: EAudioSpectrumType): void;
    SetSubmixEffectChainOverride(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixEffectPresetChain: TArray<USoundEffectSubmixPreset>, FadeTimeSec: number): void;
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
    MakePresetSpectralAnalysisBandSettings(InBandPresetType: EAudioSpectrumBandPresetType, InNumBands: number, InAttackTimeMsec: number, InReleaseTimeMsec: number): TArray<FSoundSubmixSpectralAnalysisBandSettings>;
    MakeMusicalSpectralAnalysisBandSettings(InNumSemitones: number, InStartingMusicalNote: EMusicalNoteName, InStartingOctave: number, InAttackTimeMsec: number, InReleaseTimeMsec: number): TArray<FSoundSubmixSpectralAnalysisBandSettings>;
    MakeFullSpectrumSpectralAnalysisBandSettings(InNumBands: number, InMinimumFrequency: number, InMaximumFrequency: number, InAttackTimeMsec: number, InReleaseTimeMsec: number): TArray<FSoundSubmixSpectralAnalysisBandSettings>;
    IsAudioBusActive(WorldContextObject: UObject, AudioBus: UAudioBus): boolean;
    GetPhaseForFrequencies(WorldContextObject: UObject, Frequencies: TArray<number>, Phases: TArray<number>, SubmixToAnalyze: USoundSubmix): void;
    GetNumberOfEntriesInSourceEffectChain(WorldContextObject: UObject, PresetChain: USoundEffectSourcePresetChain): number;
    GetMagnitudeForFrequencies(WorldContextObject: UObject, Frequencies: TArray<number>, Magnitudes: TArray<number>, SubmixToAnalyze: USoundSubmix): void;
    GetCurrentAudioOutputDeviceName(WorldContextObject: UObject, OnObtainCurrentDeviceEvent: FGetCurrentAudioOutputDeviceNameOnObtainCurrentDeviceEvent): void;
    GetAvailableAudioOutputDevices(WorldContextObject: UObject, OnObtainDevicesEvent: FGetAvailableAudioOutputDevicesOnObtainDevicesEvent): void;
    Conv_AudioOutputDeviceInfoToString(Info: FAudioOutputDeviceInfo): FString;
    ClearSubmixEffects(WorldContextObject: UObject, SoundSubmix: USoundSubmix): void;
    ClearSubmixEffectChainOverride(WorldContextObject: UObject, SoundSubmix: USoundSubmix, FadeTimeSec: number): void;
    ClearMasterSubmixEffects(WorldContextObject: UObject): void;
    AddSubmixEffect(WorldContextObject: UObject, SoundSubmix: USoundSubmix, SubmixEffectPreset: USoundEffectSubmixPreset): number;
    AddSourceEffectToPresetChain(WorldContextObject: UObject, PresetChain: USoundEffectSourcePresetChain, Entry: FSourceEffectChainEntry): void;
    AddMasterSubmixEffect(WorldContextObject: UObject, SubmixEffectPreset: USoundEffectSubmixPreset): void;
}
declare const UAudioMixerBlueprintLibrary: UAudioMixerBlueprintLibrary;

declare interface UQuartzClockHandle extends UObject {
    UnsubscribeFromTimeDivision(WorldContextObject: UObject, InQuantizationBoundary: EQuartzCommandQuantization, ClockHandle: UQuartzClockHandle): void;
    UnsubscribeFromAllTimeDivisions(WorldContextObject: UObject, ClockHandle: UQuartzClockHandle): void;
    SubscribeToQuantizationEvent(WorldContextObject: UObject, InQuantizationBoundary: EQuartzCommandQuantization, OnQuantizationEvent: FSubscribeToQuantizationEventOnQuantizationEvent, ClockHandle: UQuartzClockHandle): void;
    SubscribeToAllQuantizationEvents(WorldContextObject: UObject, OnQuantizationEvent: FSubscribeToAllQuantizationEventsOnQuantizationEvent, ClockHandle: UQuartzClockHandle): void;
    StopClock(WorldContextObject: UObject, CancelPendingEvents: boolean, ClockHandle: UQuartzClockHandle): void;
    StartOtherClock(WorldContextObject: UObject, OtherClockName: FName, InQuantizationBoundary: FQuartzQuantizationBoundary, InDelegate: FStartOtherClockInDelegate): void;
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
}
declare const UQuartzClockHandle: UQuartzClockHandle;

declare interface UQuartzSubsystem extends UTickableWorldSubsystem {
    SetQuartzSubsystemTickableWhenPaused(bInTickableWhenPaused: boolean): void;
    IsQuartzEnabled(): boolean;
    IsClockRunning(WorldContextObject: UObject, ClockName: FName): boolean;
    GetRoundTripMinLatency(WorldContextObject: UObject): number;
    GetRoundTripMaxLatency(WorldContextObject: UObject): number;
    GetRoundTripAverageLatency(WorldContextObject: UObject): number;
    GetHandleForClock(WorldContextObject: UObject, ClockName: FName): UQuartzClockHandle;
    GetGameThreadToAudioRenderThreadMinLatency(WorldContextObject: UObject): number;
    GetGameThreadToAudioRenderThreadMaxLatency(WorldContextObject: UObject): number;
    GetGameThreadToAudioRenderThreadAverageLatency(WorldContextObject: UObject): number;
    GetEstimatedClockRunTime(WorldContextObject: UObject, InClockName: FName): number;
    GetDurationOfQuantizationTypeInSeconds(WorldContextObject: UObject, ClockName: FName, QuantizationType: EQuartzCommandQuantization, Multiplier: number): number;
    GetCurrentClockTimestamp(WorldContextObject: UObject, InClockName: FName): FQuartzTransportTimeStamp;
    GetAudioRenderThreadToGameThreadMinLatency(): number;
    GetAudioRenderThreadToGameThreadMaxLatency(): number;
    GetAudioRenderThreadToGameThreadAverageLatency(): number;
    DoesClockExist(WorldContextObject: UObject, ClockName: FName): boolean;
    DeleteClockByName(WorldContextObject: UObject, ClockName: FName): void;
    DeleteClockByHandle(WorldContextObject: UObject, InClockHandle: UQuartzClockHandle): void;
    CreateNewClock(WorldContextObject: UObject, ClockName: FName, InSettings: FQuartzClockSettings, bOverrideSettingsIfClockExists: boolean, bUseAudioEngineClockManager: boolean): UQuartzClockHandle;
}
declare const UQuartzSubsystem: UQuartzSubsystem;

declare interface UScrubbedSound extends USoundWave {
    SoundWaveToScrub: USoundWave;
    SetSoundWave(InSoundWave: USoundWave): void;
    SetPlayheadTime(InPlayheadTimeSeconds: number): void;
    SetIsScrubbingWhileStationary(bInScrubWhileStationary: boolean): void;
    SetIsScrubbing(bInIsScrubbing: boolean): void;
    SetGrainDurationRange(InGrainDurationRangeSeconds: FVector2D): void;
    GetPlayheadTime(): number;
}
declare const UScrubbedSound: UScrubbedSound;

declare interface USubmixEffectDynamicsProcessorPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectDynamicsProcessorSettings;
    SetSettings(Settings: FSubmixEffectDynamicsProcessorSettings): void;
    SetExternalSubmix(Submix: USoundSubmix): void;
    SetAudioBus(AudioBus: UAudioBus): void;
    ResetKey(): void;
}
declare const USubmixEffectDynamicsProcessorPreset: USubmixEffectDynamicsProcessorPreset;

declare interface USubmixEffectReverbPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectReverbSettings;
    SetSettingsWithReverbEffect(InReverbEffect: UReverbEffect, WetLevel: number, DryLevel: number): void;
    SetSettings(InSettings: FSubmixEffectReverbSettings): void;
}
declare const USubmixEffectReverbPreset: USubmixEffectReverbPreset;

declare interface USubmixEffectSubmixEQPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectSubmixEQSettings;
    SetSettings(InSettings: FSubmixEffectSubmixEQSettings): void;
}
declare const USubmixEffectSubmixEQPreset: USubmixEffectSubmixEQPreset;

declare interface USynthComponent extends USceneComponent {
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
    ConcurrencySet: TSet<USoundConcurrency>;
    ModulationRouting: FSoundModulationDefaultRoutingSettings;
    SoundClass: USoundClass;
    SourceEffectChain: USoundEffectSourcePresetChain;
    SoundSubmix: USoundSubmixBase;
    SoundSubmixSends: TArray<FSoundSubmixSendInfo>;
    BusSends: TArray<FSoundSourceBusSendInfo>;
    PreEffectBusSends: TArray<FSoundSourceBusSendInfo>;
    bIsUISound: boolean;
    bIsPreviewSound: boolean;
    EnvelopeFollowerAttackTime: number;
    EnvelopeFollowerReleaseTime: number;
    OnAudioEnvelopeValue: FSynthComponentOnAudioEnvelopeValue;
    Synth: USynthSound;
    AudioComponent: UAudioComponent;
    Stop(): void;
    Start(): void;
    SetVolumeMultiplier(VolumeMultiplier: number): void;
    SetSubmixSend(Submix: USoundSubmixBase, SendLevel: number): void;
    SetSourceBusSendPreEffect(SoundSourceBus: USoundSourceBus, SourceBusSendLevel: number): void;
    SetSourceBusSendPostEffect(SoundSourceBus: USoundSourceBus, SourceBusSendLevel: number): void;
    SetOutputToBusOnly(bInOutputToBusOnly: boolean): void;
    SetModulationRouting(Modulators: TSet<USoundModulatorBase>, Destination: EModulationDestination, RoutingMethod: EModulationRouting): void;
    SetLowPassFilterFrequency(InLowPassFilterFrequency: number): void;
    SetLowPassFilterEnabled(InLowPassFilterEnabled: boolean): void;
    SetAudioBusSendPreEffect(AudioBus: UAudioBus, AudioBusSendLevel: number): void;
    SetAudioBusSendPostEffect(AudioBus: UAudioBus, AudioBusSendLevel: number): void;
    IsPlaying(): boolean;
    GetModulators(Destination: EModulationDestination): TSet<USoundModulatorBase>;
    FadeOut(FadeoutDuration: number, FadeVolumeLevel: number, FadeCurve: EAudioFaderCurve): void;
    FadeIn(FadeInDuration: number, FadeVolumeLevel: number, StartTime: number, FadeCurve: EAudioFaderCurve): void;
    AdjustVolume(AdjustVolumeDuration: number, AdjustVolumeLevel: number, FadeCurve: EAudioFaderCurve): void;
}
declare const USynthComponent: USynthComponent;

declare interface USynthSound extends USoundWaveProcedural {
    OwningSynthComponent: TWeakObjectPtr<USynthComponent>;
}
declare const USynthSound: USynthSound;

