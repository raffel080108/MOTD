declare const enum CurveInterpolationType {
    AUTOINTERP = 0,
    LINEAR = 1,
    CONSTANT = 2
}

declare const enum EEnvelopeFollowerPeakMode {
    MeanSquared = 0,
    RootMeanSquared = 1,
    Peak = 2,
    Count = 3
}

declare const enum EGranularSynthEnvelopeType {
    Rectangular = 0,
    Triangle = 1,
    DownwardTriangle = 2,
    UpwardTriangle = 3,
    ExponentialDecay = 4,
    ExponentialIncrease = 5,
    Gaussian = 6,
    Hanning = 7,
    Lanczos = 8,
    Cosine = 9,
    CosineSquared = 10,
    Welch = 11,
    Blackman = 12,
    BlackmanHarris = 13,
    Count = 14
}

declare const enum EGranularSynthSeekType {
    FromBeginning = 0,
    FromCurrentPosition = 1,
    Count = 2
}

declare const enum EPhaserLFOType {
    Sine = 0,
    UpSaw = 1,
    DownSaw = 2,
    Square = 3,
    Triangle = 4,
    Exponential = 5,
    RandomSampleHold = 6,
    Count = 7
}

declare const enum ERingModulatorTypeSourceEffect {
    Sine = 0,
    Saw = 1,
    Triangle = 2,
    Square = 3,
    Count = 4
}

declare const enum ESamplePlayerSeekType {
    FromBeginning = 0,
    FromCurrentPosition = 1,
    FromEnd = 2,
    Count = 3
}

declare const enum ESourceEffectDynamicsPeakMode {
    MeanSquared = 0,
    RootMeanSquared = 1,
    Peak = 2,
    Count = 3
}

declare const enum ESourceEffectDynamicsProcessorType {
    Compressor = 0,
    Limiter = 1,
    Expander = 2,
    Gate = 3,
    UpwardsCompressor = 4,
    Count = 5
}

declare const enum ESourceEffectFilterCircuit {
    OnePole = 0,
    StateVariable = 1,
    Ladder = 2,
    Count = 3
}

declare const enum ESourceEffectFilterParam {
    FilterFrequency = 0,
    FilterResonance = 1,
    Count = 2
}

declare const enum ESourceEffectFilterType {
    LowPass = 0,
    HighPass = 1,
    BandPass = 2,
    BandStop = 3,
    Count = 4
}

declare const enum ESourceEffectMotionFilterCircuit {
    OnePole = 0,
    StateVariable = 1,
    Ladder = 2,
    Count = 3
}

declare const enum ESourceEffectMotionFilterModDestination {
    FilterACutoffFrequency = 0,
    FilterAResonance = 1,
    FilterAOutputVolumeDB = 2,
    FilterBCutoffFrequency = 3,
    FilterBResonance = 4,
    FilterBOutputVolumeDB = 5,
    FilterMix = 6,
    Count = 7
}

declare const enum ESourceEffectMotionFilterModSource {
    DistanceFromListener = 0,
    SpeedRelativeToListener = 1,
    SpeedOfSourceEmitter = 2,
    SpeedOfListener = 3,
    SpeedOfAngleDelta = 4,
    Count = 5
}

declare const enum ESourceEffectMotionFilterTopology {
    SerialMode = 0,
    ParallelMode = 1,
    Count = 2
}

declare const enum ESourceEffectMotionFilterType {
    LowPass = 0,
    HighPass = 1,
    BandPass = 2,
    BandStop = 3,
    Count = 4
}

declare const enum EStereoChannelMode {
    MidSide = 0,
    LeftRight = 1,
    count = 2
}

declare const enum EStereoDelayFiltertype {
    Lowpass = 0,
    Highpass = 1,
    Bandpass = 2,
    Notch = 3,
    Count = 4
}

declare const enum EStereoDelaySourceEffect {
    Normal = 0,
    Cross = 1,
    PingPong = 2,
    Count = 3
}

declare const enum ESubmixEffectConvolutionReverbBlockSize {
    BlockSize256 = 0,
    BlockSize512 = 1,
    BlockSize1024 = 2
}

declare const enum ESubmixFilterAlgorithm {
    OnePole = 0,
    StateVariable = 1,
    Ladder = 2,
    Count = 3
}

declare const enum ESubmixFilterType {
    LowPass = 0,
    HighPass = 1,
    BandPass = 2,
    BandStop = 3,
    Count = 4
}

declare const enum ESynth1OscType {
    Sine = 0,
    Saw = 1,
    Triangle = 2,
    Square = 3,
    Noise = 4,
    Count = 5
}

declare const enum ESynth1PatchDestination {
    Osc1Gain = 0,
    Osc1Frequency = 1,
    Osc1Pulsewidth = 2,
    Osc2Gain = 3,
    Osc2Frequency = 4,
    Osc2Pulsewidth = 5,
    FilterFrequency = 6,
    FilterQ = 7,
    Gain = 8,
    Pan = 9,
    LFO1Frequency = 10,
    LFO1Gain = 11,
    LFO2Frequency = 12,
    LFO2Gain = 13,
    Count = 14
}

declare const enum ESynth1PatchSource {
    LFO1 = 0,
    LFO2 = 1,
    Envelope = 2,
    BiasEnvelope = 3,
    Count = 4
}

declare const enum ESynthFilterAlgorithm {
    OnePole = 0,
    StateVariable = 1,
    Ladder = 2,
    Count = 3
}

declare const enum ESynthFilterType {
    LowPass = 0,
    HighPass = 1,
    BandPass = 2,
    BandStop = 3,
    Count = 4
}

declare const enum ESynthKnobSize {
    Medium = 0,
    Large = 1,
    Count = 2
}

declare const enum ESynthLFOMode {
    Sync = 0,
    OneShot = 1,
    Free = 2,
    Count = 3
}

declare const enum ESynthLFOPatchType {
    PatchToNone = 0,
    PatchToGain = 1,
    PatchToOscFreq = 2,
    PatchToFilterFreq = 3,
    PatchToFilterQ = 4,
    PatchToOscPulseWidth = 5,
    PatchToOscPan = 6,
    PatchLFO1ToLFO2Frequency = 7,
    PatchLFO1ToLFO2Gain = 8,
    Count = 9
}

declare const enum ESynthLFOType {
    Sine = 0,
    UpSaw = 1,
    DownSaw = 2,
    Square = 3,
    Triangle = 4,
    Exponential = 5,
    RandomSampleHold = 6,
    Count = 7
}

declare const enum ESynthModEnvBiasPatch {
    PatchToNone = 0,
    PatchToOscFreq = 1,
    PatchToFilterFreq = 2,
    PatchToFilterQ = 3,
    PatchToLFO1Gain = 4,
    PatchToLFO2Gain = 5,
    PatchToLFO1Freq = 6,
    PatchToLFO2Freq = 7,
    Count = 8
}

declare const enum ESynthModEnvPatch {
    PatchToNone = 0,
    PatchToOscFreq = 1,
    PatchToFilterFreq = 2,
    PatchToFilterQ = 3,
    PatchToLFO1Gain = 4,
    PatchToLFO2Gain = 5,
    PatchToLFO1Freq = 6,
    PatchToLFO2Freq = 7,
    Count = 8
}

declare const enum ESynthSlateColorStyle {
    Light = 0,
    Dark = 1,
    Count = 2
}

declare const enum ESynthSlateSizeType {
    Small = 0,
    Medium = 1,
    Large = 2,
    Count = 3
}

declare const enum ESynthStereoDelayMode {
    Normal = 0,
    Cross = 1,
    PingPong = 2,
    Count = 3
}

declare const enum ETapLineMode {
    SendToChannel = 0,
    Panning = 1,
    Disabled = 2
}

