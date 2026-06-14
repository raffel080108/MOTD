declare const enum EMediaAudioCaptureDeviceFilter {
    None = 0,
    Card = 1,
    Microphone = 2,
    Software = 4,
    Unknown = 8
}

declare const enum EMediaPlayerTrack {
    Audio = 0,
    Caption = 1,
    Metadata = 2,
    Script = 3,
    Subtitle = 4,
    Text = 5,
    Video = 6
}

declare const enum EMediaSoundChannels {
    Mono = 0,
    Stereo = 1,
    Surround = 2
}

declare const enum EMediaSoundComponentFFTSize {
    Min_64 = 0,
    Small_256 = 1,
    Medium_512 = 2,
    Large_1024 = 3
}

declare const enum EMediaTextureVisibleMipsTiles {
    None = 0,
    Plane = 1,
    Sphere = 2
}

declare const enum EMediaTimeRangeBPType {
    Absolute = 0,
    Current = 1
}

declare const enum EMediaVideoCaptureDeviceFilter {
    None = 0,
    Card = 1,
    Software = 2,
    Unknown = 4,
    Webcam = 8
}

declare const enum EMediaWebcamCaptureDeviceFilter {
    None = 0,
    DepthSensor = 1,
    Front = 2,
    Rear = 4,
    Unknown = 8
}

declare const enum MediaTextureOrientation {
    MTORI_Original = 0,
    MTORI_CW90 = 1,
    MTORI_CW180 = 2,
    MTORI_CW270 = 3
}

