declare const enum EHDRCaptureGamut {
    HCGM_Rec709 = 0,
    HCGM_P3DCI = 1,
    HCGM_Rec2020 = 2,
    HCGM_ACES = 3,
    HCGM_ACEScg = 4,
    HCGM_Linear = 5
}

declare const enum EMovieSceneCaptureProtocolState {
    Idle = 0,
    Initialized = 1,
    Capturing = 2,
    Finalizing = 3
}

