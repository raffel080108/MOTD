declare const enum EFrameNumberDisplayFormats {
    NonDropFrameTimecode = 0,
    DropFrameTimecode = 1,
    Seconds = 2,
    Frames = 3,
    Custom = 4,
    MAX_Count = 5
}

declare const enum ETimedDataInputEvaluationType {
    None = 0,
    Timecode = 1,
    PlatformTime = 2
}

declare const enum ETimedDataInputState {
    Connected = 0,
    Unresponsive = 1,
    Disconnected = 2
}

