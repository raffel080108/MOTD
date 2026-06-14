declare interface FWaveTableBankEntry {
    Transform: FWaveTableTransform;
}
declare const FWaveTableBankEntry: FWaveTableBankEntry;

declare interface FWaveTableData {
    BitDepth: EWaveTableBitDepth;
    Data: TArray<uint8>;
    FinalValue: number;
}
declare const FWaveTableData: FWaveTableData;

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
declare const FWaveTableSettings: FWaveTableSettings;

declare interface FWaveTableTransform {
    Curve: EWaveTableCurve;
    Scalar: number;
    CurveCustom: FRichCurve;
    CurveShared: UCurveFloat;
    TableData: FWaveTableData;
    duration: number;
}
declare const FWaveTableTransform: FWaveTableTransform;

declare interface UWaveTableBank extends UObject {
    SampleMode: EWaveTableSamplingMode;
    Resolution: EWaveTableResolution;
    SampleRate: number;
    bBipolar: boolean;
    Entries: TArray<FWaveTableBankEntry>;
}
declare const UWaveTableBank: UWaveTableBank;

