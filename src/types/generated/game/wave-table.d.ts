declare interface FWaveTableBankEntry {
    Transform: FWaveTableTransform;
}

declare interface FWaveTableData {
    BitDepth: EWaveTableBitDepth;
    Data: number[];
    FinalValue: number;
}

declare interface FWaveTableSettings {
    FilePath: FFilePath;
    ChannelIndex: number;
    SourceData: FWaveTableData;
    SourceSampleRate: number;
    Phase: number;
    Top: number;
    Tail: number;
    FadeIn: number;
    FadeOut: number;
    bNormalize: boolean;
    bRemoveOffset: boolean;
}

declare interface FWaveTableTransform {
    Curve: EWaveTableCurve;
    Scalar: number;
    CurveCustom: FRichCurve;
    CurveShared: UCurveFloat;
    TableData: FWaveTableData;
    duration: number;
}

declare interface UWaveTableBank extends UObject {
    readonly __properties_UWaveTableBank: {
        SampleMode: EWaveTableSamplingMode;
        Resolution: EWaveTableResolution;
        SampleRate: number;
        bBipolar: boolean;
        Entries: FWaveTableBankEntry[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWaveTableBank['__properties_UWaveTableBank'] &
        UObject['__propertyRegistry'];
}

