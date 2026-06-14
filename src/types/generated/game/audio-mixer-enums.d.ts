declare const enum EAudioDeviceChangedRole {
    Invalid = 0,
    Console = 1,
    Multimedia = 2,
    Communications = 3,
    Count = 4
}

declare const enum EAudioDeviceChangedState {
    Invalid = 0,
    Active = 1,
    Disabled = 2,
    NotPresent = 3,
    Unplugged = 4,
    Count = 5
}

declare const enum EAudioMixerChannelType {
    FrontLeft = 0,
    FrontRight = 1,
    FrontCenter = 2,
    LowFrequency = 3,
    BackLeft = 4,
    BackRight = 5,
    FrontLeftOfCenter = 6,
    FrontRightOfCenter = 7,
    BackCenter = 8,
    SideLeft = 9,
    SideRight = 10,
    TopCenter = 11,
    TopFrontLeft = 12,
    TopFrontCenter = 13,
    TopFrontRight = 14,
    TopBackLeft = 15,
    TopBackCenter = 16,
    TopBackRight = 17,
    Unknown = 18,
    ChannelTypeCount = 19,
    DefaultChannel = 0
}

declare const enum EAudioMixerStreamDataFormatType {
    Unknown = 0,
    Float = 1,
    Int16 = 2,
    Unsupported = 3
}

declare const enum EMusicalNoteName {
    C = 0,
    Db = 1,
    D = 2,
    Eb = 3,
    E = 4,
    F = 5,
    Gb = 6,
    G = 7,
    Ab = 8,
    A = 9,
    Bb = 10,
    B = 11
}

declare const enum ERequiredSubmixes {
    Main = 0,
    BaseDefault = 1,
    Reverb = 2,
    EQ = 3,
    Count = 4
}

declare const enum ESourceManagerRenderThreadPhase {
    Begin = 0,
    PumpMpscCmds = 1,
    PumpCmds = 2,
    ProcessModulators = 3,
    UpdatePendingReleaseData = 4,
    GenerateSrcAudio_WithBusses = 5,
    ComputeBusses = 6,
    GenerateSrcAudio_WithoutBusses = 7,
    UpdateBusses = 8,
    SpatialInterface_OnAllSourcesProcessed = 9,
    SourceDataOverride_OnAllSourcesProcessed = 10,
    UpdateGameThreadCopies = 11,
    Finished = 12
}

declare const enum ESubmixEffectDynamicsChannelLinkMode {
    Disabled = 0,
    Average = 1,
    Peak = 2,
    Count = 3
}

declare const enum ESubmixEffectDynamicsKeySource {
    Default = 0,
    AudioBus = 1,
    Submix = 2,
    Count = 3
}

declare const enum ESubmixEffectDynamicsPeakMode {
    MeanSquared = 0,
    RootMeanSquared = 1,
    Peak = 2,
    Count = 3
}

declare const enum ESubmixEffectDynamicsProcessorType {
    Compressor = 0,
    Limiter = 1,
    Expander = 2,
    Gate = 3,
    UpwardsCompressor = 4,
    Count = 5
}

declare const enum ESwapAudioOutputDeviceResultState {
    Failure = 0,
    Success = 1,
    None = 2
}

