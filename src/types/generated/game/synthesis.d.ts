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
declare const FDynamicsBandSettings: FDynamicsBandSettings;

declare interface FEpicSynth1Patch {
    PatchSource: ESynth1PatchSource;
    PatchCables: TArray<FSynth1PatchCable>;
}
declare const FEpicSynth1Patch: FEpicSynth1Patch;

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
    Patches: TArray<FEpicSynth1Patch>;
}
declare const FModularSynthPreset: FModularSynthPreset;

declare interface FModularSynthPresetBankEntry {
    PresetName: FString;
    Preset: FModularSynthPreset;
}
declare const FModularSynthPresetBankEntry: FModularSynthPresetBankEntry;

declare interface FPatchId {
    ID: number;
}
declare const FPatchId: FPatchId;

declare interface FSourceEffectBitCrusherBaseSettings {
    SampleRate: number;
    BitDepth: number;
}
declare const FSourceEffectBitCrusherBaseSettings: FSourceEffectBitCrusherBaseSettings;

declare interface FSourceEffectBitCrusherSettings {
    SampleRateModulation: FSoundModulationDestinationSettings;
    BitModulation: FSoundModulationDestinationSettings;
}
declare const FSourceEffectBitCrusherSettings: FSourceEffectBitCrusherSettings;

declare interface FSourceEffectChorusBaseSettings {
    Depth: number;
    Frequency: number;
    Feedback: number;
    WetLevel: number;
    DryLevel: number;
    Spread: number;
}
declare const FSourceEffectChorusBaseSettings: FSourceEffectChorusBaseSettings;

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
declare const FSourceEffectChorusSettings: FSourceEffectChorusSettings;

declare interface FSourceEffectConvolutionReverbSettings {
    NormalizationVolumeDb: number;
    WetVolumeDb: number;
    DryVolumeDb: number;
    bBypass: boolean;
}
declare const FSourceEffectConvolutionReverbSettings: FSourceEffectConvolutionReverbSettings;

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
declare const FSourceEffectDynamicsProcessorSettings: FSourceEffectDynamicsProcessorSettings;

declare interface FSourceEffectEQBand {
    Frequency: number;
    Bandwidth: number;
    GainDb: number;
    bEnabled: boolean;
}
declare const FSourceEffectEQBand: FSourceEffectEQBand;

declare interface FSourceEffectEQSettings {
    EQBands: TArray<FSourceEffectEQBand>;
}
declare const FSourceEffectEQSettings: FSourceEffectEQSettings;

declare interface FSourceEffectEnvelopeFollowerSettings {
    AttackTime: number;
    ReleaseTime: number;
    PeakMode: EEnvelopeFollowerPeakMode;
    bIsAnalogMode: boolean;
}
declare const FSourceEffectEnvelopeFollowerSettings: FSourceEffectEnvelopeFollowerSettings;

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
declare const FSourceEffectFilterAudioBusModulationSettings: FSourceEffectFilterAudioBusModulationSettings;

declare interface FSourceEffectFilterSettings {
    FilterCircuit: ESourceEffectFilterCircuit;
    FilterType: ESourceEffectFilterType;
    CutoffFrequency: number;
    FilterQ: number;
    AudioBusModulation: TArray<FSourceEffectFilterAudioBusModulationSettings>;
}
declare const FSourceEffectFilterSettings: FSourceEffectFilterSettings;

declare interface FSourceEffectFoldbackDistortionSettings {
    InputGainDb: number;
    ThresholdDb: number;
    OutputGainDb: number;
}
declare const FSourceEffectFoldbackDistortionSettings: FSourceEffectFoldbackDistortionSettings;

declare interface FSourceEffectIndividualFilterSettings {
    FilterCircuit: ESourceEffectMotionFilterCircuit;
    FilterType: ESourceEffectMotionFilterType;
    CutoffFrequency: number;
    FilterQ: number;
}
declare const FSourceEffectIndividualFilterSettings: FSourceEffectIndividualFilterSettings;

declare interface FSourceEffectMidSideSpreaderSettings {
    SpreadAmount: number;
    InputMode: EStereoChannelMode;
    OutputMode: EStereoChannelMode;
    bEqualPower: boolean;
}
declare const FSourceEffectMidSideSpreaderSettings: FSourceEffectMidSideSpreaderSettings;

declare interface FSourceEffectMotionFilterModulationSettings {
    ModulationSource: ESourceEffectMotionFilterModSource;
    ModulationInputRange: FVector2D;
    ModulationOutputMinimumRange: FVector2D;
    ModulationOutputMaximumRange: FVector2D;
    UpdateEaseMS: number;
}
declare const FSourceEffectMotionFilterModulationSettings: FSourceEffectMotionFilterModulationSettings;

declare interface FSourceEffectMotionFilterSettings {
    MotionFilterTopology: ESourceEffectMotionFilterTopology;
    MotionFilterMix: number;
    FilterASettings: FSourceEffectIndividualFilterSettings;
    FilterBSettings: FSourceEffectIndividualFilterSettings;
    ModulationMappings: Record<string | number | symbol, FSourceEffectMotionFilterModulationSettings>;
    DryVolumeDb: number;
}
declare const FSourceEffectMotionFilterSettings: FSourceEffectMotionFilterSettings;

declare interface FSourceEffectPannerSettings {
    Spread: number;
    Pan: number;
}
declare const FSourceEffectPannerSettings: FSourceEffectPannerSettings;

declare interface FSourceEffectPhaserSettings {
    WetLevel: number;
    Frequency: number;
    Feedback: number;
    LFOType: EPhaserLFOType;
    UseQuadraturePhase: boolean;
}
declare const FSourceEffectPhaserSettings: FSourceEffectPhaserSettings;

declare interface FSourceEffectRingModulationSettings {
    ModulatorType: ERingModulatorTypeSourceEffect;
    Frequency: number;
    Depth: number;
    DryLevel: number;
    WetLevel: number;
    AudioBusModulator: UAudioBus;
}
declare const FSourceEffectRingModulationSettings: FSourceEffectRingModulationSettings;

declare interface FSourceEffectSimpleDelaySettings {
    SpeedOfSound: number;
    DelayAmount: number;
    DryAmount: number;
    WetAmount: number;
    Feedback: number;
    bDelayBasedOnDistance: boolean;
    bUseDistanceOverride: boolean;
}
declare const FSourceEffectSimpleDelaySettings: FSourceEffectSimpleDelaySettings;

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
declare const FSourceEffectStereoDelaySettings: FSourceEffectStereoDelaySettings;

declare interface FSourceEffectWaveShaperSettings {
    Amount: number;
    OutputGainDb: number;
}
declare const FSourceEffectWaveShaperSettings: FSourceEffectWaveShaperSettings;

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
declare const FSubmixEffectConvolutionReverbSettings: FSubmixEffectConvolutionReverbSettings;

declare interface FSubmixEffectDelaySettings {
    MaximumDelayLength: number;
    InterpolationTime: number;
    DelayLength: number;
}
declare const FSubmixEffectDelaySettings: FSubmixEffectDelaySettings;

declare interface FSubmixEffectFilterSettings {
    FilterType: ESubmixFilterType;
    FilterAlgorithm: ESubmixFilterAlgorithm;
    FilterFrequency: number;
    FilterQ: number;
}
declare const FSubmixEffectFilterSettings: FSubmixEffectFilterSettings;

declare interface FSubmixEffectFlexiverbSettings {
    PreDelay: number;
    DecayTime: number;
    RoomDampening: number;
    Complexity: number;
}
declare const FSubmixEffectFlexiverbSettings: FSubmixEffectFlexiverbSettings;

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
    Bands: TArray<FDynamicsBandSettings>;
}
declare const FSubmixEffectMultibandCompressorSettings: FSubmixEffectMultibandCompressorSettings;

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
declare const FSubmixEffectStereoDelaySettings: FSubmixEffectStereoDelaySettings;

declare interface FSubmixEffectStereoToQuadSettings {
    bFlipChannels: boolean;
    RearChannelGain: number;
}
declare const FSubmixEffectStereoToQuadSettings: FSubmixEffectStereoToQuadSettings;

declare interface FSubmixEffectTapDelaySettings {
    MaximumDelayLength: number;
    InterpolationTime: number;
    Taps: TArray<FTapDelayInfo>;
}
declare const FSubmixEffectTapDelaySettings: FSubmixEffectTapDelaySettings;

declare interface FSynth1PatchCable {
    Depth: number;
    Destination: ESynth1PatchDestination;
}
declare const FSynth1PatchCable: FSynth1PatchCable;

declare interface FSynth2DSliderStyle extends FSlateWidgetStyle {
    NormalThumbImage: FSlateBrush;
    DisabledThumbImage: FSlateBrush;
    NormalBarImage: FSlateBrush;
    DisabledBarImage: FSlateBrush;
    BackgroundImage: FSlateBrush;
    BarThickness: number;
}
declare const FSynth2DSliderStyle: FSynth2DSliderStyle;

declare interface FSynthKnobStyle extends FSlateWidgetStyle {
    LargeKnob: FSlateBrush;
    LargeKnobOverlay: FSlateBrush;
    MediumKnob: FSlateBrush;
    MediumKnobOverlay: FSlateBrush;
    MinValueAngle: number;
    MaxValueAngle: number;
    KnobSize: ESynthKnobSize;
}
declare const FSynthKnobStyle: FSynthKnobStyle;

declare interface FSynthSlateStyle extends FSlateWidgetStyle {
    SizeType: ESynthSlateSizeType;
    ColorStyle: ESynthSlateColorStyle;
}
declare const FSynthSlateStyle: FSynthSlateStyle;

declare interface FTapDelayInfo {
    TapLineMode: ETapLineMode;
    DelayLength: number;
    Gain: number;
    OutputChannel: number;
    PanInDegrees: number;
    TapId: number;
}
declare const FTapDelayInfo: FTapDelayInfo;

declare interface UAudioImpulseResponse extends UObject {
    ImpulseResponse: TArray<number>;
    NumChannels: number;
    SampleRate: number;
    NormalizationVolumeDb: number;
    bTrueStereo: boolean;
    IRData: TArray<number>;
}
declare const UAudioImpulseResponse: UAudioImpulseResponse;

declare interface UEnvelopeFollowerListener extends UActorComponent {
    OnEnvelopeFollowerUpdate: FEnvelopeFollowerListenerOnEnvelopeFollowerUpdate;
}
declare const UEnvelopeFollowerListener: UEnvelopeFollowerListener;

declare interface UGranularSynth extends USynthComponent {
    GranulatedSoundWave: USoundWave;
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
}
declare const UGranularSynth: UGranularSynth;

declare interface UModularSynthComponent extends USynthComponent {
    VoiceCount: number;
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
    CreatePatch(PatchSource: ESynth1PatchSource, PatchCables: TArray<FSynth1PatchCable>, bEnableByDefault: boolean): FPatchId;
}
declare const UModularSynthComponent: UModularSynthComponent;

declare interface UModularSynthLibrary extends UBlueprintFunctionLibrary {
    AddModularSynthPresetToBankAsset(InBank: UModularSynthPresetBank, Preset: FModularSynthPreset, PresetName: string | FString): void;
}
declare const UModularSynthLibrary: UModularSynthLibrary;

declare interface UModularSynthPresetBank extends UObject {
    Presets: TArray<FModularSynthPresetBankEntry>;
}
declare const UModularSynthPresetBank: UModularSynthPresetBank;

declare interface UMonoWaveTableSynthPreset extends UObject {
    PresetName: FString;
    bLockKeyframesToGridBool: boolean;
    LockKeyframesToGrid: number;
    WaveTableResolution: number;
    WaveTable: TArray<FRuntimeFloatCurve>;
    bNormalizeWaveTables: boolean;
}
declare const UMonoWaveTableSynthPreset: UMonoWaveTableSynthPreset;

declare interface USourceEffectBitCrusherPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectBitCrusherSettings;
    SetSettings(Settings: FSourceEffectBitCrusherBaseSettings): void;
    SetSampleRateModulators(InModulators: TSet<USoundModulatorBase>): void;
    SetSampleRateModulator(Modulator: USoundModulatorBase): void;
    SetSampleRate(SampleRate: number): void;
    SetModulationSettings(ModulationSettings: FSourceEffectBitCrusherSettings): void;
    SetBits(Bits: number): void;
    SetBitModulators(InModulators: TSet<USoundModulatorBase>): void;
    SetBitModulator(Modulator: USoundModulatorBase): void;
}
declare const USourceEffectBitCrusherPreset: USourceEffectBitCrusherPreset;

declare interface USourceEffectChorusPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectChorusSettings;
    SetWetModulators(Modulators: TSet<USoundModulatorBase>): void;
    SetWetModulator(Modulator: USoundModulatorBase): void;
    SetWet(WetAmount: number): void;
    SetSpreadModulators(Modulators: TSet<USoundModulatorBase>): void;
    SetSpreadModulator(Modulator: USoundModulatorBase): void;
    SetSpread(Spread: number): void;
    SetSettings(Settings: FSourceEffectChorusBaseSettings): void;
    SetModulationSettings(ModulationSettings: FSourceEffectChorusSettings): void;
    SetFrequencyModulators(Modulators: TSet<USoundModulatorBase>): void;
    SetFrequencyModulator(Modulator: USoundModulatorBase): void;
    SetFrequency(Frequency: number): void;
    SetFeedbackModulators(Modulators: TSet<USoundModulatorBase>): void;
    SetFeedbackModulator(Modulator: USoundModulatorBase): void;
    SetFeedback(Feedback: number): void;
    SetDryModulators(Modulators: TSet<USoundModulatorBase>): void;
    SetDryModulator(Modulator: USoundModulatorBase): void;
    SetDry(DryAmount: number): void;
    SetDepthModulators(Modulators: TSet<USoundModulatorBase>): void;
    SetDepthModulator(Modulator: USoundModulatorBase): void;
    SetDepth(Depth: number): void;
}
declare const USourceEffectChorusPreset: USourceEffectChorusPreset;

declare interface USourceEffectConvolutionReverbPreset extends USoundEffectSourcePreset {
    ImpulseResponse: UAudioImpulseResponse;
    Settings: FSourceEffectConvolutionReverbSettings;
    BlockSize: ESubmixEffectConvolutionReverbBlockSize;
    bEnableHardwareAcceleration: boolean;
    SetSettings(InSettings: FSourceEffectConvolutionReverbSettings): void;
    SetImpulseResponse(InImpulseResponse: UAudioImpulseResponse): void;
}
declare const USourceEffectConvolutionReverbPreset: USourceEffectConvolutionReverbPreset;

declare interface USourceEffectDynamicsProcessorPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectDynamicsProcessorSettings;
    SetSettings(InSettings: FSourceEffectDynamicsProcessorSettings): void;
}
declare const USourceEffectDynamicsProcessorPreset: USourceEffectDynamicsProcessorPreset;

declare interface USourceEffectEQPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectEQSettings;
    SetSettings(InSettings: FSourceEffectEQSettings): void;
}
declare const USourceEffectEQPreset: USourceEffectEQPreset;

declare interface USourceEffectEnvelopeFollowerPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectEnvelopeFollowerSettings;
    UnregisterEnvelopeFollowerListener(EnvelopeFollowerListener: UEnvelopeFollowerListener): void;
    SetSettings(InSettings: FSourceEffectEnvelopeFollowerSettings): void;
    RegisterEnvelopeFollowerListener(EnvelopeFollowerListener: UEnvelopeFollowerListener): void;
}
declare const USourceEffectEnvelopeFollowerPreset: USourceEffectEnvelopeFollowerPreset;

declare interface USourceEffectFilterPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectFilterSettings;
    SetSettings(InSettings: FSourceEffectFilterSettings): void;
}
declare const USourceEffectFilterPreset: USourceEffectFilterPreset;

declare interface USourceEffectFoldbackDistortionPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectFoldbackDistortionSettings;
    SetSettings(InSettings: FSourceEffectFoldbackDistortionSettings): void;
}
declare const USourceEffectFoldbackDistortionPreset: USourceEffectFoldbackDistortionPreset;

declare interface USourceEffectMidSideSpreaderPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectMidSideSpreaderSettings;
    SetSettings(InSettings: FSourceEffectMidSideSpreaderSettings): void;
}
declare const USourceEffectMidSideSpreaderPreset: USourceEffectMidSideSpreaderPreset;

declare interface USourceEffectMotionFilterPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectMotionFilterSettings;
    SetSettings(InSettings: FSourceEffectMotionFilterSettings): void;
}
declare const USourceEffectMotionFilterPreset: USourceEffectMotionFilterPreset;

declare interface USourceEffectPannerPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectPannerSettings;
    SetSettings(InSettings: FSourceEffectPannerSettings): void;
}
declare const USourceEffectPannerPreset: USourceEffectPannerPreset;

declare interface USourceEffectPhaserPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectPhaserSettings;
    SetSettings(InSettings: FSourceEffectPhaserSettings): void;
}
declare const USourceEffectPhaserPreset: USourceEffectPhaserPreset;

declare interface USourceEffectRingModulationPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectRingModulationSettings;
    SetSettings(InSettings: FSourceEffectRingModulationSettings): void;
}
declare const USourceEffectRingModulationPreset: USourceEffectRingModulationPreset;

declare interface USourceEffectSimpleDelayPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectSimpleDelaySettings;
    SetSettings(InSettings: FSourceEffectSimpleDelaySettings): void;
}
declare const USourceEffectSimpleDelayPreset: USourceEffectSimpleDelayPreset;

declare interface USourceEffectStereoDelayPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectStereoDelaySettings;
    SetSettings(InSettings: FSourceEffectStereoDelaySettings): void;
}
declare const USourceEffectStereoDelayPreset: USourceEffectStereoDelayPreset;

declare interface USourceEffectWaveShaperPreset extends USoundEffectSourcePreset {
    Settings: FSourceEffectWaveShaperSettings;
    SetSettings(InSettings: FSourceEffectWaveShaperSettings): void;
}
declare const USourceEffectWaveShaperPreset: USourceEffectWaveShaperPreset;

declare interface USubmixEffectConvolutionReverbPreset extends USoundEffectSubmixPreset {
    ImpulseResponse: UAudioImpulseResponse;
    Settings: FSubmixEffectConvolutionReverbSettings;
    BlockSize: ESubmixEffectConvolutionReverbBlockSize;
    bEnableHardwareAcceleration: boolean;
    SetSettings(InSettings: FSubmixEffectConvolutionReverbSettings): void;
    SetImpulseResponse(InImpulseResponse: UAudioImpulseResponse): void;
}
declare const USubmixEffectConvolutionReverbPreset: USubmixEffectConvolutionReverbPreset;

declare interface USubmixEffectDelayPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectDelaySettings;
    DynamicSettings: FSubmixEffectDelaySettings;
    SetSettings(InSettings: FSubmixEffectDelaySettings): void;
    SetInterpolationTime(Time: number): void;
    SetDelay(Length: number): void;
    SetDefaultSettings(InSettings: FSubmixEffectDelaySettings): void;
    GetMaxDelayInMilliseconds(): number;
}
declare const USubmixEffectDelayPreset: USubmixEffectDelayPreset;

declare interface USubmixEffectDelayStatics extends UBlueprintFunctionLibrary {
    SetMaximumDelayLength(DelaySettings: FSubmixEffectDelaySettings, MaximumDelayLength: number): FSubmixEffectDelaySettings;
    SetInterpolationTime(DelaySettings: FSubmixEffectDelaySettings, InterpolationTime: number): FSubmixEffectDelaySettings;
    SetDelayLength(DelaySettings: FSubmixEffectDelaySettings, DelayLength: number): FSubmixEffectDelaySettings;
}
declare const USubmixEffectDelayStatics: USubmixEffectDelayStatics;

declare interface USubmixEffectFilterPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectFilterSettings;
    SetSettings(InSettings: FSubmixEffectFilterSettings): void;
    SetFilterType(InType: ESubmixFilterType): void;
    SetFilterQMod(InQ: number): void;
    SetFilterQ(InQ: number): void;
    SetFilterCutoffFrequencyMod(InFrequency: number): void;
    SetFilterCutoffFrequency(InFrequency: number): void;
    SetFilterAlgorithm(InAlgorithm: ESubmixFilterAlgorithm): void;
}
declare const USubmixEffectFilterPreset: USubmixEffectFilterPreset;

declare interface USubmixEffectFlexiverbPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectFlexiverbSettings;
    SetSettings(InSettings: FSubmixEffectFlexiverbSettings): void;
}
declare const USubmixEffectFlexiverbPreset: USubmixEffectFlexiverbPreset;

declare interface USubmixEffectMultibandCompressorPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectMultibandCompressorSettings;
    SetSettings(InSettings: FSubmixEffectMultibandCompressorSettings): void;
    SetExternalSubmix(Submix: USoundSubmix): void;
    SetAudioBus(AudioBus: UAudioBus): void;
    ResetKey(): void;
}
declare const USubmixEffectMultibandCompressorPreset: USubmixEffectMultibandCompressorPreset;

declare interface USubmixEffectStereoDelayPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectStereoDelaySettings;
    SetSettings(InSettings: FSubmixEffectStereoDelaySettings): void;
}
declare const USubmixEffectStereoDelayPreset: USubmixEffectStereoDelayPreset;

declare interface USubmixEffectStereoToQuadPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectStereoToQuadSettings;
    SetSettings(InSettings: FSubmixEffectStereoToQuadSettings): void;
}
declare const USubmixEffectStereoToQuadPreset: USubmixEffectStereoToQuadPreset;

declare interface USubmixEffectTapDelayPreset extends USoundEffectSubmixPreset {
    Settings: FSubmixEffectTapDelaySettings;
    SetTap(TapId: number, TapInfo: FTapDelayInfo): void;
    SetSettings(InSettings: FSubmixEffectTapDelaySettings): void;
    SetInterpolationTime(Time: number): void;
    RemoveTap(TapId: number): void;
    GetTapIds(TapIds: TArray<number>): void;
    GetTap(TapId: number, TapInfo: FTapDelayInfo): void;
    GetMaxDelayInMilliseconds(): number;
    AddTap(TapId: number): void;
}
declare const USubmixEffectTapDelayPreset: USubmixEffectTapDelayPreset;

declare interface USynth2DSlider extends UWidget {
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
    SetValue(InValue: FVector2D): void;
    SetStepSize(InValue: number): void;
    SetSliderHandleColor(InValue: FLinearColor): void;
    SetLocked(InValue: boolean): void;
    SetIndentHandle(InValue: boolean): void;
    GetValue(): FVector2D;
}
declare const USynth2DSlider: USynth2DSlider;

declare interface USynthComponentMonoWaveTable extends USynthComponent {
    OnTableAltered: FSynthComponentMonoWaveTableOnTableAltered;
    OnNumTablesChanged: FSynthComponentMonoWaveTableOnNumTablesChanged;
    CurrentPreset: UMonoWaveTableSynthPreset;
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
    GetKeyFrameValuesForTable(TableIndex: number): TArray<number>;
    GetCurveTangent(TableIndex: number): number;
}
declare const USynthComponentMonoWaveTable: USynthComponentMonoWaveTable;

declare interface USynthComponentToneGenerator extends USynthComponent {
    Frequency: number;
    Volume: number;
    DistanceAttenuationCurve: FRuntimeFloatCurve;
    DistanceRange: FVector2D;
    AttenuationDbAtMaxRange: number;
    SetVolume(InVolume: number): void;
    SetFrequency(InFrequency: number): void;
}
declare const USynthComponentToneGenerator: USynthComponentToneGenerator;

declare interface USynthKnob extends UWidget {
    Value: number;
    StepSize: number;
    MouseSpeed: number;
    MouseFineTuneSpeed: number;
    ShowTooltipInfo: boolean;
    ParameterName: FText;
    ParameterUnits: FText;
    ValueDelegate: FSynthKnobValueDelegate;
    WidgetStyle: FSynthKnobStyle;
    Locked: boolean;
    IsFocusable: boolean;
    OnMouseCaptureBegin: FSynthKnobOnMouseCaptureBegin;
    OnMouseCaptureEnd: FSynthKnobOnMouseCaptureEnd;
    OnControllerCaptureBegin: FSynthKnobOnControllerCaptureBegin;
    OnControllerCaptureEnd: FSynthKnobOnControllerCaptureEnd;
    OnValueChanged: FSynthKnobOnValueChanged;
    SetValue(InValue: number): void;
    SetStepSize(InValue: number): void;
    SetLocked(InValue: boolean): void;
    GetValue(): number;
}
declare const USynthKnob: USynthKnob;

declare interface USynthSamplePlayer extends USynthComponent {
    SoundWave: USoundWave;
    OnSampleLoaded: FSynthSamplePlayerOnSampleLoaded;
    OnSamplePlaybackProgress: FSynthSamplePlayerOnSamplePlaybackProgress;
    SetSoundWave(InSoundWave: USoundWave): void;
    SetScrubTimeWidth(InScrubTimeWidthSec: number): void;
    SetScrubMode(bScrubMode: boolean): void;
    SetPitch(InPitch: number, TimeSec: number): void;
    SeekToTime(TimeSec: number, SeekType: ESamplePlayerSeekType, bWrap: boolean): void;
    IsLoaded(): boolean;
    GetSampleDuration(): number;
    GetCurrentPlaybackProgressTime(): number;
    GetCurrentPlaybackProgressPercent(): number;
}
declare const USynthSamplePlayer: USynthSamplePlayer;

declare interface USynthesisUtilitiesBlueprintFunctionLibrary extends UBlueprintFunctionLibrary {
    GetLogFrequency(InLinearValue: number, InDomainMin: number, InDomainMax: number, InRangeMin: number, InRangeMax: number): number;
    GetLinearFrequency(InLogFrequencyValue: number, InDomainMin: number, InDomainMax: number, InRangeMin: number, InRangeMax: number): number;
}
declare const USynthesisUtilitiesBlueprintFunctionLibrary: USynthesisUtilitiesBlueprintFunctionLibrary;

