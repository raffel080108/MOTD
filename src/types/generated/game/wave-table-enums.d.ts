declare const enum EWaveTableBitDepth {
    PCM_16 = 0,
    IEEE_Float = 1,
    COUNT = 2
}

declare const enum EWaveTableCurve {
    Linear = 0,
    Linear_Inv = 1,
    Exp = 2,
    Exp_Inverse = 3,
    Log = 4,
    Sin = 5,
    Sin_Full = 6,
    SCurve = 7,
    Shared = 8,
    Custom = 9,
    File = 10,
    Count = 11
}

declare const enum EWaveTableResolution {
    None = 0,
    Res_8 = 3,
    Res_16 = 4,
    Res_32 = 5,
    Res_64 = 6,
    Res_128 = 7,
    Res_256 = 8,
    Res_512 = 9,
    Res_1024 = 10,
    Res_2048 = 11,
    Res_4096 = 12,
    Res_Max = 12,
    Maximum = 13
}

declare const enum EWaveTableSamplingMode {
    FixedSampleRate = 0,
    FixedResolution = 1,
    COUNT = 2
}

