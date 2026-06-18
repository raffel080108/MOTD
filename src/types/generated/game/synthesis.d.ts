declare interface FDynamicsBandSettings {
    CrossoverTopFrequency: number;
    AttackTimeMsec: number;
    ReleaseTimeMsec: number;
    ThresholdDb: number;
    Ratio: number;
    KneeBandwidthDb: number;
    InputGainDb: number;
    OutputGainDb: number;
}

declare interface FEpicSynth1Patch {
    PatchSource: ESynth1PatchSource;
    PatchCables: FSynth1PatchCable[];
}

declare interface FModularSynthPreset extends FTableRowBase {
    bEnablePolyphony: boolean;
    Osc1Type: ESynth1OscType;
    Osc1Gain: number;
    Osc1Octave: number;
    Osc1Semitones: number;
    Osc1Cents: number;
    Osc1PulseWidth: number;
    Osc2Type: ESynth1OscType;
    Osc2Gain: number;
    Osc2Octave: number;
    Osc2Semitones: number;
    Osc2Cents: number;
    Osc2PulseWidth: number;
    Portamento: number;
    bEnableUnison: boolean;
    bEnableOscillatorSync: boolean;
    Spread: number;
    Pan: number;
    LFO1Frequency: number;
    LFO1Gain: number;
    LFO1Type: ESynthLFOType;
    LFO1Mode: ESynthLFOMode;
    LFO1PatchType: ESynthLFOPatchType;
    LFO2Frequency: number;
    LFO2Gain: number;
    LFO2Type: ESynthLFOType;
    LFO2Mode: ESynthLFOMode;
    LFO2PatchType: ESynthLFOPatchType;
    GainDb: number;
    AttackTime: number;
    DecayTime: number;
    SustainGain: number;
    ReleaseTime: number;
    ModEnvPatchType: ESynthModEnvPatch;
    ModEnvBiasPatchType: ESynthModEnvBiasPatch;
    bInvertModulationEnvelope: boolean;
    bInvertModulationEnvelopeBias: boolean;
    ModulationEnvelopeDepth: number;
    ModulationEnvelopeAttackTime: number;
    ModulationEnvelopeDecayTime: number;
    ModulationEnvelopeSustainGain: number;
    ModulationEnvelopeReleaseTime: number;
    bLegato: boolean;
    bRetrigger: boolean;
    FilterFrequency: number;
    FilterQ: number;
    FilterType: ESynthFilterType;
    FilterAlgorithm: ESynthFilterAlgorithm;
    bStereoDelayEnabled: boolean;
    StereoDelayMode: ESynthStereoDelayMode;
    StereoDelayTime: number;
    StereoDelayFeedback: number;
    StereoDelayWetlevel: number;
    StereoDelayRatio: number;
    bChorusEnabled: boolean;
    ChorusDepth: number;
    ChorusFeedback: number;
    ChorusFrequency: number;
    Patches: FEpicSynth1Patch[];
}

declare interface FModularSynthPresetBankEntry {
    PresetName: string;
    Preset: FModularSynthPreset;
}

declare interface FPatchId {
    ID: number;
}

declare interface FSourceEffectBitCrusherBaseSettings {
    SampleRate: number;
    BitDepth: number;
}

declare interface FSourceEffectBitCrusherSettings {
    SampleRateModulation: FSoundModulationDestinationSettings;
    BitModulation: FSoundModulationDestinationSettings;
}

declare interface FSourceEffectChorusBaseSettings {
    Depth: number;
    Frequency: number;
    Feedback: number;
    WetLevel: number;
    DryLevel: number;
    Spread: number;
}

declare interface FSourceEffectChorusSettings {
    Depth: number;
    Frequency: number;
    Feedback: number;
    WetLevel: number;
    DryLevel: number;
    Spread: number;
    DepthModulation: FSoundModulationDestinationSettings;
    FrequencyModulation: FSoundModulationDestinationSettings;
    FeedbackModulation: FSoundModulationDestinationSettings;
    WetModulation: FSoundModulationDestinationSettings;
    DryModulation: FSoundModulationDestinationSettings;
    SpreadModulation: FSoundModulationDestinationSettings;
}

declare interface FSourceEffectConvolutionReverbSettings {
    NormalizationVolumeDb: number;
    WetVolumeDb: number;
    DryVolumeDb: number;
    bBypass: boolean;
}

declare interface FSourceEffectDynamicsProcessorSettings {
    DynamicsProcessorType: ESourceEffectDynamicsProcessorType;
    PeakMode: ESourceEffectDynamicsPeakMode;
    LookAheadMsec: number;
    AttackTimeMsec: number;
    ReleaseTimeMsec: number;
    ThresholdDb: number;
    Ratio: number;
    KneeBandwidthDb: number;
    InputGainDb: number;
    OutputGainDb: number;
    bStereoLinked: boolean;
    bAnalogMode: boolean;
    bBypass: boolean;
}

declare interface FSourceEffectEQBand {
    Frequency: number;
    Bandwidth: number;
    GainDb: number;
    bEnabled: boolean;
}

declare interface FSourceEffectEQSettings {
    EQBands: FSourceEffectEQBand[];
}

declare interface FSourceEffectEnvelopeFollowerSettings {
    AttackTime: number;
    ReleaseTime: number;
    PeakMode: EEnvelopeFollowerPeakMode;
    bIsAnalogMode: boolean;
}

declare interface FSourceEffectFilterAudioBusModulationSettings {
    AudioBus: UAudioBus;
    EnvelopeFollowerAttackTimeMsec: number;
    EnvelopeFollowerReleaseTimeMsec: number;
    EnvelopeGainMultiplier: number;
    FilterParam: ESourceEffectFilterParam;
    MinFrequencyModulation: number;
    MaxFrequencyModulation: number;
    MinResonanceModulation: number;
    MaxResonanceModulation: number;
}

declare interface FSourceEffectFilterSettings {
    FilterCircuit: ESourceEffectFilterCircuit;
    FilterType: ESourceEffectFilterType;
    CutoffFrequency: number;
    FilterQ: number;
    AudioBusModulation: FSourceEffectFilterAudioBusModulationSettings[];
}

declare interface FSourceEffectFoldbackDistortionSettings {
    InputGainDb: number;
    ThresholdDb: number;
    OutputGainDb: number;
}

declare interface FSourceEffectIndividualFilterSettings {
    FilterCircuit: ESourceEffectMotionFilterCircuit;
    FilterType: ESourceEffectMotionFilterType;
    CutoffFrequency: number;
    FilterQ: number;
}

declare interface FSourceEffectMidSideSpreaderSettings {
    SpreadAmount: number;
    InputMode: EStereoChannelMode;
    OutputMode: EStereoChannelMode;
    bEqualPower: boolean;
}

declare interface FSourceEffectMotionFilterModulationSettings {
    ModulationSource: ESourceEffectMotionFilterModSource;
    ModulationInputRange: FVector2D;
    ModulationOutputMinimumRange: FVector2D;
    ModulationOutputMaximumRange: FVector2D;
    UpdateEaseMS: number;
}

declare interface FSourceEffectMotionFilterSettings {
    MotionFilterTopology: ESourceEffectMotionFilterTopology;
    MotionFilterMix: number;
    FilterASettings: FSourceEffectIndividualFilterSettings;
    FilterBSettings: FSourceEffectIndividualFilterSettings;
    ModulationMappings: TMap<ESourceEffectMotionFilterModDestination, FSourceEffectMotionFilterModulationSettings>;
    DryVolumeDb: number;
}

declare interface FSourceEffectPannerSettings {
    Spread: number;
    Pan: number;
}

declare interface FSourceEffectPhaserSettings {
    WetLevel: number;
    Frequency: number;
    Feedback: number;
    LFOType: EPhaserLFOType;
    UseQuadraturePhase: boolean;
}

declare interface FSourceEffectRingModulationSettings {
    ModulatorType: ERingModulatorTypeSourceEffect;
    Frequency: number;
    Depth: number;
    DryLevel: number;
    WetLevel: number;
    AudioBusModulator: UAudioBus;
}

declare interface FSourceEffectSimpleDelaySettings {
    SpeedOfSound: number;
    DelayAmount: number;
    DryAmount: number;
    WetAmount: number;
    Feedback: number;
    bDelayBasedOnDistance: boolean;
    bUseDistanceOverride: boolean;
}

declare interface FSourceEffectStereoDelaySettings {
    DelayMode: EStereoDelaySourceEffect;
    DelayTimeMsec: number;
    Feedback: number;
    DelayRatio: number;
    WetLevel: number;
    DryLevel: number;
    bFilterEnabled: boolean;
    FilterType: EStereoDelayFiltertype;
    FilterFrequency: number;
    FilterQ: number;
}

declare interface FSourceEffectWaveShaperSettings {
    Amount: number;
    OutputGainDb: number;
}

declare interface FSubmixEffectConvolutionReverbSettings {
    NormalizationVolumeDb: number;
    WetVolumeDb: number;
    DryVolumeDb: number;
    bBypass: boolean;
    bMixInputChannelFormatToImpulseResponseFormat: boolean;
    bMixReverbOutputToOutputChannelFormat: boolean;
    SurroundRearChannelBleedDb: number;
    bInvertRearChannelBleedPhase: boolean;
    bSurroundRearChannelFlip: boolean;
    SurroundRearChannelBleedAmount: number;
    ImpulseResponse: UAudioImpulseResponse;
    AllowHardwareAcceleration: boolean;
}

declare interface FSubmixEffectDelaySettings {
    MaximumDelayLength: number;
    InterpolationTime: number;
    DelayLength: number;
}

declare interface FSubmixEffectFilterSettings {
    FilterType: ESubmixFilterType;
    FilterAlgorithm: ESubmixFilterAlgorithm;
    FilterFrequency: number;
    FilterQ: number;
}

declare interface FSubmixEffectFlexiverbSettings {
    PreDelay: number;
    DecayTime: number;
    RoomDampening: number;
    Complexity: number;
}

declare interface FSubmixEffectMultibandCompressorSettings {
    DynamicsProcessorType: ESubmixEffectDynamicsProcessorType;
    PeakMode: ESubmixEffectDynamicsPeakMode;
    LinkMode: ESubmixEffectDynamicsChannelLinkMode;
    LookAheadMsec: number;
    bAnalogMode: boolean;
    bFourPole: boolean;
    bBypass: boolean;
    KeySource: ESubmixEffectDynamicsKeySource;
    ExternalAudioBus: UAudioBus;
    ExternalSubmix: USoundSubmix;
    KeyGainDb: number;
    bKeyAudition: boolean;
    Bands: FDynamicsBandSettings[];
}

declare interface FSubmixEffectStereoDelaySettings {
    DelayMode: EStereoDelaySourceEffect;
    DelayTimeMsec: number;
    Feedback: number;
    DelayRatio: number;
    WetLevel: number;
    DryLevel: number;
    bFilterEnabled: boolean;
    FilterType: EStereoDelayFiltertype;
    FilterFrequency: number;
    FilterQ: number;
}

declare interface FSubmixEffectStereoToQuadSettings {
    bFlipChannels: boolean;
    RearChannelGain: number;
}

declare interface FSubmixEffectTapDelaySettings {
    MaximumDelayLength: number;
    InterpolationTime: number;
    Taps: FTapDelayInfo[];
}

declare interface FSynth1PatchCable {
    Depth: number;
    Destination: ESynth1PatchDestination;
}

declare interface FSynth2DSliderStyle extends FSlateWidgetStyle {
    NormalThumbImage: FSlateBrush;
    DisabledThumbImage: FSlateBrush;
    NormalBarImage: FSlateBrush;
    DisabledBarImage: FSlateBrush;
    BackgroundImage: FSlateBrush;
    BarThickness: number;
}

declare interface FSynthKnobStyle extends FSlateWidgetStyle {
    LargeKnob: FSlateBrush;
    LargeKnobOverlay: FSlateBrush;
    MediumKnob: FSlateBrush;
    MediumKnobOverlay: FSlateBrush;
    MinValueAngle: number;
    MaxValueAngle: number;
    KnobSize: ESynthKnobSize;
}

declare interface FSynthSlateStyle extends FSlateWidgetStyle {
    SizeType: ESynthSlateSizeType;
    ColorStyle: ESynthSlateColorStyle;
}

declare interface FTapDelayInfo {
    TapLineMode: ETapLineMode;
    DelayLength: number;
    Gain: number;
    OutputChannel: number;
    PanInDegrees: number;
    TapId: number;
}

declare interface UAudioImpulseResponse extends UObject {
    readonly __properties_UAudioImpulseResponse: {
        ImpulseResponse: number[];
        NumChannels: number;
        SampleRate: number;
        NormalizationVolumeDb: number;
        bTrueStereo: boolean;
        IRData: number[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioImpulseResponse['__properties_UAudioImpulseResponse'] &
        UObject['__propertyRegistry'];
}

declare interface UEnvelopeFollowerListener extends UActorComponent {
    readonly __properties_UEnvelopeFollowerListener: {
        OnEnvelopeFollowerUpdate: FEnvelopeFollowerListenerOnEnvelopeFollowerUpdate;
    };
    readonly __staticRegistry: 
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEnvelopeFollowerListener['__properties_UEnvelopeFollowerListener'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UGranularSynth extends USynthComponent {
    readonly __static_UGranularSynth: {
        SetSustainGain(SustainGain: number): void;
        SetSoundWave(InSoundWave: USoundWave): void;
        SetScrubMode(bScrubMode: boolean): void;
        SetReleaseTimeMsec(ReleaseTimeMsec: number): void;
        SetPlayheadTime(InPositionSec: number, LerpTimeSec: number, SeekType: EGranularSynthSeekType): void;
        SetPlaybackSpeed(InPlayheadRate: number): void;
        SetGrainVolume(BaseVolume: number, VolumeRange: FVector2D): void;
        SetGrainsPerSecond(InGrainsPerSecond: number): void;
        SetGrainProbability(InGrainProbability: number): void;
        SetGrainPitch(BasePitch: number, PitchRange: FVector2D): void;
        SetGrainPan(BasePan: number, PanRange: FVector2D): void;
        SetGrainEnvelopeType(EnvelopeType: EGranularSynthEnvelopeType): void;
        SetGrainDuration(BaseDurationMsec: number, DurationRange: FVector2D): void;
        SetDecayTime(DecayTimeMsec: number): void;
        SetAttackTime(AttackTimeMsec: number): void;
        NoteOn(Note: number, Velocity: number, duration: number): void;
        NoteOff(Note: number, bKill: boolean): void;
        IsLoaded(): boolean;
        GetSampleDuration(): number;
        GetCurrentPlayheadTime(): number;
    };
    readonly __properties_UGranularSynth: {
        GranulatedSoundWave: USoundWave;
    };
    readonly __staticRegistry: 
        UGranularSynth['__static_UGranularSynth'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UGranularSynth['__properties_UGranularSynth'] &
        USynthComponent['__propertyRegistry'];
}

declare interface UModularSynthComponent extends USynthComponent {
    readonly __static_UModularSynthComponent: {
        SetSynthPreset(SynthPreset: FModularSynthPreset): void;
        SetSustainGain(SustainGain: number): void;
        SetStereoDelayWetlevel(DelayWetlevel: number): void;
        SetStereoDelayTime(DelayTimeMsec: number): void;
        SetStereoDelayRatio(DelayRatio: number): void;
        SetStereoDelayMode(StereoDelayMode: ESynthStereoDelayMode): void;
        SetStereoDelayIsEnabled(StereoDelayEnabled: boolean): void;
        SetStereoDelayFeedback(DelayFeedback: number): void;
        SetSpread(Spread: number): void;
        SetReleaseTime(ReleaseTimeMsec: number): void;
        SetPortamento(Portamento: number): void;
        SetPitchBend(PitchBend: number): void;
        SetPan(Pan: number): void;
        SetOscType(OscIndex: number, OscType: ESynth1OscType): void;
        SetOscSync(bIsSynced: boolean): void;
        SetOscSemitones(OscIndex: number, Semitones: number): void;
        SetOscPulsewidth(OscIndex: number, Pulsewidth: number): void;
        SetOscOctave(OscIndex: number, Octave: number): void;
        SetOscGainMod(OscIndex: number, OscGainMod: number): void;
        SetOscGain(OscIndex: number, OscGain: number): void;
        SetOscFrequencyMod(OscIndex: number, OscFreqMod: number): void;
        SetOscCents(OscIndex: number, Cents: number): void;
        SetModEnvSustainGain(SustainGain: number): void;
        SetModEnvReleaseTime(Release: number): void;
        SetModEnvPatch(InPatchType: ESynthModEnvPatch): void;
        SetModEnvInvert(bInvert: boolean): void;
        SetModEnvDepth(Depth: number): void;
        SetModEnvDecayTime(DecayTimeMsec: number): void;
        SetModEnvBiasPatch(InPatchType: ESynthModEnvBiasPatch): void;
        SetModEnvBiasInvert(bInvert: boolean): void;
        SetModEnvAttackTime(AttackTimeMsec: number): void;
        SetLFOType(LFOIndex: number, LFOType: ESynthLFOType): void;
        SetLFOPatch(LFOIndex: number, LFOPatchType: ESynthLFOPatchType): void;
        SetLFOMode(LFOIndex: number, LFOMode: ESynthLFOMode): void;
        SetLFOGainMod(LFOIndex: number, GainMod: number): void;
        SetLFOGain(LFOIndex: number, Gain: number): void;
        SetLFOFrequencyMod(LFOIndex: number, FrequencyModHz: number): void;
        SetLFOFrequency(LFOIndex: number, FrequencyHz: number): void;
        SetGainDb(GainDb: number): void;
        SetFilterType(FilterType: ESynthFilterType): void;
        SetFilterQMod(FilterQ: number): void;
        SetFilterQ(FilterQ: number): void;
        SetFilterFrequencyMod(FilterFrequencyHz: number): void;
        SetFilterFrequency(FilterFrequencyHz: number): void;
        SetFilterAlgorithm(FilterAlgorithm: ESynthFilterAlgorithm): void;
        SetEnableUnison(EnableUnison: boolean): void;
        SetEnableRetrigger(RetriggerEnabled: boolean): void;
        SetEnablePolyphony(bEnablePolyphony: boolean): void;
        SetEnablePatch(PatchId: FPatchId, bIsEnabled: boolean): boolean;
        SetEnableLegato(LegatoEnabled: boolean): void;
        SetDecayTime(DecayTimeMsec: number): void;
        SetChorusFrequency(Frequency: number): void;
        SetChorusFeedback(Feedback: number): void;
        SetChorusEnabled(EnableChorus: boolean): void;
        SetChorusDepth(Depth: number): void;
        SetAttackTime(AttackTimeMsec: number): void;
        NoteOn(Note: number, Velocity: number, duration: number): void;
        NoteOff(Note: number, bAllNotesOff: boolean, bKillAllNotes: boolean): void;
        CreatePatch(PatchSource: ESynth1PatchSource, PatchCables: FSynth1PatchCable[], bEnableByDefault: boolean): FPatchId;
    };
    readonly __properties_UModularSynthComponent: {
        VoiceCount: number;
    };
    readonly __staticRegistry: 
        UModularSynthComponent['__static_UModularSynthComponent'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UModularSynthComponent['__properties_UModularSynthComponent'] &
        USynthComponent['__propertyRegistry'];
}

declare interface UModularSynthLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UModularSynthLibrary: {
        AddModularSynthPresetToBankAsset(InBank: UModularSynthPresetBank, Preset: FModularSynthPreset, PresetName: string): void;
    };
    readonly __staticRegistry: 
        UModularSynthLibrary['__static_UModularSynthLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UModularSynthPresetBank extends UObject {
    readonly __properties_UModularSynthPresetBank: {
        Presets: FModularSynthPresetBankEntry[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UModularSynthPresetBank['__properties_UModularSynthPresetBank'] &
        UObject['__propertyRegistry'];
}

declare interface UMonoWaveTableSynthPreset extends UObject {
    readonly __properties_UMonoWaveTableSynthPreset: {
        PresetName: string;
        bLockKeyframesToGridBool: boolean;
        LockKeyframesToGrid: number;
        WaveTableResolution: number;
        WaveTable: FRuntimeFloatCurve[];
        bNormalizeWaveTables: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMonoWaveTableSynthPreset['__properties_UMonoWaveTableSynthPreset'] &
        UObject['__propertyRegistry'];
}

declare interface USourceEffectBitCrusherPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectBitCrusherPreset: {
        SetSettings(Settings: FSourceEffectBitCrusherBaseSettings): void;
        SetSampleRateModulators(InModulators: USoundModulatorBase[]): void;
        SetSampleRateModulator(Modulator: USoundModulatorBase): void;
        SetSampleRate(SampleRate: number): void;
        SetModulationSettings(ModulationSettings: FSourceEffectBitCrusherSettings): void;
        SetBits(Bits: number): void;
        SetBitModulators(InModulators: USoundModulatorBase[]): void;
        SetBitModulator(Modulator: USoundModulatorBase): void;
    };
    readonly __properties_USourceEffectBitCrusherPreset: {
        Settings: FSourceEffectBitCrusherSettings;
    };
    readonly __staticRegistry: 
        USourceEffectBitCrusherPreset['__static_USourceEffectBitCrusherPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectBitCrusherPreset['__properties_USourceEffectBitCrusherPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectChorusPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectChorusPreset: {
        SetWetModulators(Modulators: USoundModulatorBase[]): void;
        SetWetModulator(Modulator: USoundModulatorBase): void;
        SetWet(WetAmount: number): void;
        SetSpreadModulators(Modulators: USoundModulatorBase[]): void;
        SetSpreadModulator(Modulator: USoundModulatorBase): void;
        SetSpread(Spread: number): void;
        SetSettings(Settings: FSourceEffectChorusBaseSettings): void;
        SetModulationSettings(ModulationSettings: FSourceEffectChorusSettings): void;
        SetFrequencyModulators(Modulators: USoundModulatorBase[]): void;
        SetFrequencyModulator(Modulator: USoundModulatorBase): void;
        SetFrequency(Frequency: number): void;
        SetFeedbackModulators(Modulators: USoundModulatorBase[]): void;
        SetFeedbackModulator(Modulator: USoundModulatorBase): void;
        SetFeedback(Feedback: number): void;
        SetDryModulators(Modulators: USoundModulatorBase[]): void;
        SetDryModulator(Modulator: USoundModulatorBase): void;
        SetDry(DryAmount: number): void;
        SetDepthModulators(Modulators: USoundModulatorBase[]): void;
        SetDepthModulator(Modulator: USoundModulatorBase): void;
        SetDepth(Depth: number): void;
    };
    readonly __properties_USourceEffectChorusPreset: {
        Settings: FSourceEffectChorusSettings;
    };
    readonly __staticRegistry: 
        USourceEffectChorusPreset['__static_USourceEffectChorusPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectChorusPreset['__properties_USourceEffectChorusPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectConvolutionReverbPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectConvolutionReverbPreset: {
        SetSettings(InSettings: FSourceEffectConvolutionReverbSettings): void;
        SetImpulseResponse(InImpulseResponse: UAudioImpulseResponse): void;
    };
    readonly __properties_USourceEffectConvolutionReverbPreset: {
        ImpulseResponse: UAudioImpulseResponse;
        Settings: FSourceEffectConvolutionReverbSettings;
        BlockSize: ESubmixEffectConvolutionReverbBlockSize;
        bEnableHardwareAcceleration: boolean;
    };
    readonly __staticRegistry: 
        USourceEffectConvolutionReverbPreset['__static_USourceEffectConvolutionReverbPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectConvolutionReverbPreset['__properties_USourceEffectConvolutionReverbPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectDynamicsProcessorPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectDynamicsProcessorPreset: {
        SetSettings(InSettings: FSourceEffectDynamicsProcessorSettings): void;
    };
    readonly __properties_USourceEffectDynamicsProcessorPreset: {
        Settings: FSourceEffectDynamicsProcessorSettings;
    };
    readonly __staticRegistry: 
        USourceEffectDynamicsProcessorPreset['__static_USourceEffectDynamicsProcessorPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectDynamicsProcessorPreset['__properties_USourceEffectDynamicsProcessorPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectEQPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectEQPreset: {
        SetSettings(InSettings: FSourceEffectEQSettings): void;
    };
    readonly __properties_USourceEffectEQPreset: {
        Settings: FSourceEffectEQSettings;
    };
    readonly __staticRegistry: 
        USourceEffectEQPreset['__static_USourceEffectEQPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectEQPreset['__properties_USourceEffectEQPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectEnvelopeFollowerPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectEnvelopeFollowerPreset: {
        UnregisterEnvelopeFollowerListener(EnvelopeFollowerListener: UEnvelopeFollowerListener): void;
        SetSettings(InSettings: FSourceEffectEnvelopeFollowerSettings): void;
        RegisterEnvelopeFollowerListener(EnvelopeFollowerListener: UEnvelopeFollowerListener): void;
    };
    readonly __properties_USourceEffectEnvelopeFollowerPreset: {
        Settings: FSourceEffectEnvelopeFollowerSettings;
    };
    readonly __staticRegistry: 
        USourceEffectEnvelopeFollowerPreset['__static_USourceEffectEnvelopeFollowerPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectEnvelopeFollowerPreset['__properties_USourceEffectEnvelopeFollowerPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectFilterPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectFilterPreset: {
        SetSettings(InSettings: FSourceEffectFilterSettings): void;
    };
    readonly __properties_USourceEffectFilterPreset: {
        Settings: FSourceEffectFilterSettings;
    };
    readonly __staticRegistry: 
        USourceEffectFilterPreset['__static_USourceEffectFilterPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectFilterPreset['__properties_USourceEffectFilterPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectFoldbackDistortionPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectFoldbackDistortionPreset: {
        SetSettings(InSettings: FSourceEffectFoldbackDistortionSettings): void;
    };
    readonly __properties_USourceEffectFoldbackDistortionPreset: {
        Settings: FSourceEffectFoldbackDistortionSettings;
    };
    readonly __staticRegistry: 
        USourceEffectFoldbackDistortionPreset['__static_USourceEffectFoldbackDistortionPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectFoldbackDistortionPreset['__properties_USourceEffectFoldbackDistortionPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectMidSideSpreaderPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectMidSideSpreaderPreset: {
        SetSettings(InSettings: FSourceEffectMidSideSpreaderSettings): void;
    };
    readonly __properties_USourceEffectMidSideSpreaderPreset: {
        Settings: FSourceEffectMidSideSpreaderSettings;
    };
    readonly __staticRegistry: 
        USourceEffectMidSideSpreaderPreset['__static_USourceEffectMidSideSpreaderPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectMidSideSpreaderPreset['__properties_USourceEffectMidSideSpreaderPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectMotionFilterPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectMotionFilterPreset: {
        SetSettings(InSettings: FSourceEffectMotionFilterSettings): void;
    };
    readonly __properties_USourceEffectMotionFilterPreset: {
        Settings: FSourceEffectMotionFilterSettings;
    };
    readonly __staticRegistry: 
        USourceEffectMotionFilterPreset['__static_USourceEffectMotionFilterPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectMotionFilterPreset['__properties_USourceEffectMotionFilterPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectPannerPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectPannerPreset: {
        SetSettings(InSettings: FSourceEffectPannerSettings): void;
    };
    readonly __properties_USourceEffectPannerPreset: {
        Settings: FSourceEffectPannerSettings;
    };
    readonly __staticRegistry: 
        USourceEffectPannerPreset['__static_USourceEffectPannerPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectPannerPreset['__properties_USourceEffectPannerPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectPhaserPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectPhaserPreset: {
        SetSettings(InSettings: FSourceEffectPhaserSettings): void;
    };
    readonly __properties_USourceEffectPhaserPreset: {
        Settings: FSourceEffectPhaserSettings;
    };
    readonly __staticRegistry: 
        USourceEffectPhaserPreset['__static_USourceEffectPhaserPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectPhaserPreset['__properties_USourceEffectPhaserPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectRingModulationPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectRingModulationPreset: {
        SetSettings(InSettings: FSourceEffectRingModulationSettings): void;
    };
    readonly __properties_USourceEffectRingModulationPreset: {
        Settings: FSourceEffectRingModulationSettings;
    };
    readonly __staticRegistry: 
        USourceEffectRingModulationPreset['__static_USourceEffectRingModulationPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectRingModulationPreset['__properties_USourceEffectRingModulationPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectSimpleDelayPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectSimpleDelayPreset: {
        SetSettings(InSettings: FSourceEffectSimpleDelaySettings): void;
    };
    readonly __properties_USourceEffectSimpleDelayPreset: {
        Settings: FSourceEffectSimpleDelaySettings;
    };
    readonly __staticRegistry: 
        USourceEffectSimpleDelayPreset['__static_USourceEffectSimpleDelayPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectSimpleDelayPreset['__properties_USourceEffectSimpleDelayPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectStereoDelayPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectStereoDelayPreset: {
        SetSettings(InSettings: FSourceEffectStereoDelaySettings): void;
    };
    readonly __properties_USourceEffectStereoDelayPreset: {
        Settings: FSourceEffectStereoDelaySettings;
    };
    readonly __staticRegistry: 
        USourceEffectStereoDelayPreset['__static_USourceEffectStereoDelayPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectStereoDelayPreset['__properties_USourceEffectStereoDelayPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USourceEffectWaveShaperPreset extends USoundEffectSourcePreset {
    readonly __static_USourceEffectWaveShaperPreset: {
        SetSettings(InSettings: FSourceEffectWaveShaperSettings): void;
    };
    readonly __properties_USourceEffectWaveShaperPreset: {
        Settings: FSourceEffectWaveShaperSettings;
    };
    readonly __staticRegistry: 
        USourceEffectWaveShaperPreset['__static_USourceEffectWaveShaperPreset'] &
        USoundEffectSourcePreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USourceEffectWaveShaperPreset['__properties_USourceEffectWaveShaperPreset'] &
        USoundEffectSourcePreset['__propertyRegistry'];
}

declare interface USubmixEffectConvolutionReverbPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectConvolutionReverbPreset: {
        SetSettings(InSettings: FSubmixEffectConvolutionReverbSettings): void;
        SetImpulseResponse(InImpulseResponse: UAudioImpulseResponse): void;
    };
    readonly __properties_USubmixEffectConvolutionReverbPreset: {
        ImpulseResponse: UAudioImpulseResponse;
        Settings: FSubmixEffectConvolutionReverbSettings;
        BlockSize: ESubmixEffectConvolutionReverbBlockSize;
        bEnableHardwareAcceleration: boolean;
    };
    readonly __staticRegistry: 
        USubmixEffectConvolutionReverbPreset['__static_USubmixEffectConvolutionReverbPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectConvolutionReverbPreset['__properties_USubmixEffectConvolutionReverbPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectDelayPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectDelayPreset: {
        SetSettings(InSettings: FSubmixEffectDelaySettings): void;
        SetInterpolationTime(Time: number): void;
        SetDelay(Length: number): void;
        SetDefaultSettings(InSettings: FSubmixEffectDelaySettings): void;
        GetMaxDelayInMilliseconds(): number;
    };
    readonly __properties_USubmixEffectDelayPreset: {
        Settings: FSubmixEffectDelaySettings;
        DynamicSettings: FSubmixEffectDelaySettings;
    };
    readonly __staticRegistry: 
        USubmixEffectDelayPreset['__static_USubmixEffectDelayPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectDelayPreset['__properties_USubmixEffectDelayPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectDelayStatics extends UBlueprintFunctionLibrary {
    readonly __static_USubmixEffectDelayStatics: {
        SetMaximumDelayLength(DelaySettings: FSubmixEffectDelaySettings, MaximumDelayLength: number): FSubmixEffectDelaySettings;
        SetInterpolationTime(DelaySettings: FSubmixEffectDelaySettings, InterpolationTime: number): FSubmixEffectDelaySettings;
        SetDelayLength(DelaySettings: FSubmixEffectDelaySettings, DelayLength: number): FSubmixEffectDelaySettings;
    };
    readonly __staticRegistry: 
        USubmixEffectDelayStatics['__static_USubmixEffectDelayStatics'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface USubmixEffectFilterPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectFilterPreset: {
        SetSettings(InSettings: FSubmixEffectFilterSettings): void;
        SetFilterType(InType: ESubmixFilterType): void;
        SetFilterQMod(InQ: number): void;
        SetFilterQ(InQ: number): void;
        SetFilterCutoffFrequencyMod(InFrequency: number): void;
        SetFilterCutoffFrequency(InFrequency: number): void;
        SetFilterAlgorithm(InAlgorithm: ESubmixFilterAlgorithm): void;
    };
    readonly __properties_USubmixEffectFilterPreset: {
        Settings: FSubmixEffectFilterSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectFilterPreset['__static_USubmixEffectFilterPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectFilterPreset['__properties_USubmixEffectFilterPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectFlexiverbPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectFlexiverbPreset: {
        SetSettings(InSettings: FSubmixEffectFlexiverbSettings): void;
    };
    readonly __properties_USubmixEffectFlexiverbPreset: {
        Settings: FSubmixEffectFlexiverbSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectFlexiverbPreset['__static_USubmixEffectFlexiverbPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectFlexiverbPreset['__properties_USubmixEffectFlexiverbPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectMultibandCompressorPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectMultibandCompressorPreset: {
        SetSettings(InSettings: FSubmixEffectMultibandCompressorSettings): void;
        SetExternalSubmix(Submix: USoundSubmix): void;
        SetAudioBus(AudioBus: UAudioBus): void;
        ResetKey(): void;
    };
    readonly __properties_USubmixEffectMultibandCompressorPreset: {
        Settings: FSubmixEffectMultibandCompressorSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectMultibandCompressorPreset['__static_USubmixEffectMultibandCompressorPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectMultibandCompressorPreset['__properties_USubmixEffectMultibandCompressorPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectStereoDelayPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectStereoDelayPreset: {
        SetSettings(InSettings: FSubmixEffectStereoDelaySettings): void;
    };
    readonly __properties_USubmixEffectStereoDelayPreset: {
        Settings: FSubmixEffectStereoDelaySettings;
    };
    readonly __staticRegistry: 
        USubmixEffectStereoDelayPreset['__static_USubmixEffectStereoDelayPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectStereoDelayPreset['__properties_USubmixEffectStereoDelayPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectStereoToQuadPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectStereoToQuadPreset: {
        SetSettings(InSettings: FSubmixEffectStereoToQuadSettings): void;
    };
    readonly __properties_USubmixEffectStereoToQuadPreset: {
        Settings: FSubmixEffectStereoToQuadSettings;
    };
    readonly __staticRegistry: 
        USubmixEffectStereoToQuadPreset['__static_USubmixEffectStereoToQuadPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectStereoToQuadPreset['__properties_USubmixEffectStereoToQuadPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USubmixEffectTapDelayPreset extends USoundEffectSubmixPreset {
    readonly __static_USubmixEffectTapDelayPreset: {
        SetTap(TapId: number, TapInfo: FTapDelayInfo): void;
        SetSettings(InSettings: FSubmixEffectTapDelaySettings): void;
        SetInterpolationTime(Time: number): void;
        RemoveTap(TapId: number): void;
        GetTapIds(TapIds: number[]): void;
        GetTap(TapId: number, TapInfo: FTapDelayInfo): void;
        GetMaxDelayInMilliseconds(): number;
        AddTap(TapId: number): void;
    };
    readonly __properties_USubmixEffectTapDelayPreset: {
        Settings: FSubmixEffectTapDelaySettings;
    };
    readonly __staticRegistry: 
        USubmixEffectTapDelayPreset['__static_USubmixEffectTapDelayPreset'] &
        USoundEffectSubmixPreset['__staticRegistry'];
    readonly __propertyRegistry: 
        USubmixEffectTapDelayPreset['__properties_USubmixEffectTapDelayPreset'] &
        USoundEffectSubmixPreset['__propertyRegistry'];
}

declare interface USynth2DSlider extends UWidget {
    readonly __static_USynth2DSlider: {
        SetValue(InValue: FVector2D): void;
        SetStepSize(InValue: number): void;
        SetSliderHandleColor(InValue: FLinearColor): void;
        SetLocked(InValue: boolean): void;
        SetIndentHandle(InValue: boolean): void;
        GetValue(): FVector2D;
    };
    readonly __properties_USynth2DSlider: {
        ValueX: number;
        ValueY: number;
        ValueXDelegate: FSynth2DSliderValueXDelegate;
        ValueYDelegate: FSynth2DSliderValueYDelegate;
        WidgetStyle: FSynth2DSliderStyle;
        SliderHandleColor: FLinearColor;
        IndentHandle: boolean;
        Locked: boolean;
        StepSize: number;
        IsFocusable: boolean;
        OnMouseCaptureBegin: FSynth2DSliderOnMouseCaptureBegin;
        OnMouseCaptureEnd: FSynth2DSliderOnMouseCaptureEnd;
        OnControllerCaptureBegin: FSynth2DSliderOnControllerCaptureBegin;
        OnControllerCaptureEnd: FSynth2DSliderOnControllerCaptureEnd;
        OnValueChangedX: FSynth2DSliderOnValueChangedX;
        OnValueChangedY: FSynth2DSliderOnValueChangedY;
    };
    readonly __staticRegistry: 
        USynth2DSlider['__static_USynth2DSlider'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USynth2DSlider['__properties_USynth2DSlider'] &
        UWidget['__propertyRegistry'];
}

declare interface USynthComponentMonoWaveTable extends USynthComponent {
    readonly __static_USynthComponentMonoWaveTable: {
        SetWaveTablePosition(InPosition: number): void;
        SetSustainPedalState(InSustainPedalState: boolean): void;
        SetPosLfoType(InLfoType: ESynthLFOType): void;
        SetPosLfoFrequency(InLfoFrequency: number): void;
        SetPosLfoDepth(InLfoDepth: number): void;
        SetPositionEnvelopeSustainGain(InSustainGain: number): void;
        SetPositionEnvelopeReleaseTime(InReleaseTimeMsec: number): void;
        SetPositionEnvelopeInvert(bInInvert: boolean): void;
        SetPositionEnvelopeDepth(InDepth: number): void;
        SetPositionEnvelopeDecayTime(InDecayTimeMsec: number): void;
        SetPositionEnvelopeBiasInvert(bInBiasInvert: boolean): void;
        SetPositionEnvelopeBiasDepth(InDepth: number): void;
        SetPositionEnvelopeAttackTime(InAttackTimeMsec: number): void;
        SetLowPassFilterResonance(InNewQ: number): void;
        SetFrequencyWithMidiNote(InMidiNote: number): void;
        SetFrequencyPitchBend(FrequencyOffsetCents: number): void;
        SetFrequency(FrequencyHz: number): void;
        SetFilterEnvelopeSustainGain(InSustainGain: number): void;
        SetFilterEnvelopeReleaseTime(InReleaseTimeMsec: number): void;
        SetFilterEnvelopenDecayTime(InDecayTimeMsec: number): void;
        SetFilterEnvelopeInvert(bInInvert: boolean): void;
        SetFilterEnvelopeDepth(InDepth: number): void;
        SetFilterEnvelopeBiasInvert(bInBiasInvert: boolean): void;
        SetFilterEnvelopeBiasDepth(InDepth: number): void;
        SetFilterEnvelopeAttackTime(InAttackTimeMsec: number): void;
        SetCurveValue(TableIndex: number, KeyframeIndex: number, NewValue: number): boolean;
        SetCurveTangent(TableIndex: number, InNewTangent: number): boolean;
        SetCurveInterpolationType(InterpolationType: CurveInterpolationType, TableIndex: number): boolean;
        SetAmpEnvelopeSustainGain(InSustainGain: number): void;
        SetAmpEnvelopeReleaseTime(InReleaseTimeMsec: number): void;
        SetAmpEnvelopeInvert(bInInvert: boolean): void;
        SetAmpEnvelopeDepth(InDepth: number): void;
        SetAmpEnvelopeDecayTime(InDecayTimeMsec: number): void;
        SetAmpEnvelopeBiasInvert(bInBiasInvert: boolean): void;
        SetAmpEnvelopeBiasDepth(InDepth: number): void;
        SetAmpEnvelopeAttackTime(InAttackTimeMsec: number): void;
        RefreshWaveTable(Index: number): void;
        RefreshAllWaveTables(): void;
        NoteOn(InMidiNote: number, InVelocity: number): void;
        NoteOff(InMidiNote: number): void;
        GetNumTableEntries(): number;
        GetMaxTableIndex(): number;
        GetKeyFrameValuesForTable(TableIndex: number): number[];
        GetCurveTangent(TableIndex: number): number;
    };
    readonly __properties_USynthComponentMonoWaveTable: {
        OnTableAltered: FSynthComponentMonoWaveTableOnTableAltered;
        OnNumTablesChanged: FSynthComponentMonoWaveTableOnNumTablesChanged;
        CurrentPreset: UMonoWaveTableSynthPreset;
    };
    readonly __staticRegistry: 
        USynthComponentMonoWaveTable['__static_USynthComponentMonoWaveTable'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthComponentMonoWaveTable['__properties_USynthComponentMonoWaveTable'] &
        USynthComponent['__propertyRegistry'];
}

declare interface USynthComponentToneGenerator extends USynthComponent {
    readonly __static_USynthComponentToneGenerator: {
        SetVolume(InVolume: number): void;
        SetFrequency(InFrequency: number): void;
    };
    readonly __properties_USynthComponentToneGenerator: {
        Frequency: number;
        Volume: number;
        DistanceAttenuationCurve: FRuntimeFloatCurve;
        DistanceRange: FVector2D;
        AttenuationDbAtMaxRange: number;
    };
    readonly __staticRegistry: 
        USynthComponentToneGenerator['__static_USynthComponentToneGenerator'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthComponentToneGenerator['__properties_USynthComponentToneGenerator'] &
        USynthComponent['__propertyRegistry'];
}

declare interface USynthKnob extends UWidget {
    readonly __static_USynthKnob: {
        SetValue(InValue: number): void;
        SetStepSize(InValue: number): void;
        SetLocked(InValue: boolean): void;
        GetValue(): number;
    };
    readonly __properties_USynthKnob: {
        Value: number;
        StepSize: number;
        MouseSpeed: number;
        MouseFineTuneSpeed: number;
        ShowTooltipInfo: boolean;
        ParameterName: string;
        ParameterUnits: string;
        ValueDelegate: FSynthKnobValueDelegate;
        WidgetStyle: FSynthKnobStyle;
        Locked: boolean;
        IsFocusable: boolean;
        OnMouseCaptureBegin: FSynthKnobOnMouseCaptureBegin;
        OnMouseCaptureEnd: FSynthKnobOnMouseCaptureEnd;
        OnControllerCaptureBegin: FSynthKnobOnControllerCaptureBegin;
        OnControllerCaptureEnd: FSynthKnobOnControllerCaptureEnd;
        OnValueChanged: FSynthKnobOnValueChanged;
    };
    readonly __staticRegistry: 
        USynthKnob['__static_USynthKnob'] &
        UWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthKnob['__properties_USynthKnob'] &
        UWidget['__propertyRegistry'];
}

declare interface USynthSamplePlayer extends USynthComponent {
    readonly __static_USynthSamplePlayer: {
        SetSoundWave(InSoundWave: USoundWave): void;
        SetScrubTimeWidth(InScrubTimeWidthSec: number): void;
        SetScrubMode(bScrubMode: boolean): void;
        SetPitch(InPitch: number, TimeSec: number): void;
        SeekToTime(TimeSec: number, SeekType: ESamplePlayerSeekType, bWrap: boolean): void;
        IsLoaded(): boolean;
        GetSampleDuration(): number;
        GetCurrentPlaybackProgressTime(): number;
        GetCurrentPlaybackProgressPercent(): number;
    };
    readonly __properties_USynthSamplePlayer: {
        SoundWave: USoundWave;
        OnSampleLoaded: FSynthSamplePlayerOnSampleLoaded;
        OnSamplePlaybackProgress: FSynthSamplePlayerOnSamplePlaybackProgress;
    };
    readonly __staticRegistry: 
        USynthSamplePlayer['__static_USynthSamplePlayer'] &
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        USynthSamplePlayer['__properties_USynthSamplePlayer'] &
        USynthComponent['__propertyRegistry'];
}

declare interface USynthesisUtilitiesBlueprintFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_USynthesisUtilitiesBlueprintFunctionLibrary: {
        GetLogFrequency(InLinearValue: number, InDomainMin: number, InDomainMax: number, InRangeMin: number, InRangeMax: number): number;
        GetLinearFrequency(InLogFrequencyValue: number, InDomainMin: number, InDomainMax: number, InRangeMin: number, InRangeMax: number): number;
    };
    readonly __staticRegistry: 
        USynthesisUtilitiesBlueprintFunctionLibrary['__static_USynthesisUtilitiesBlueprintFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

