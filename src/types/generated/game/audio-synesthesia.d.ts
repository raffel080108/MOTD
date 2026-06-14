declare interface FConstantQResults {
    TimeSeconds: number;
    SpectrumValues: TArray<number>;
}
declare const FConstantQResults: FConstantQResults;

declare interface FLoudnessResults {
    Loudness: number;
    NormalizedLoudness: number;
    PerceptualEnergy: number;
    TimeSeconds: number;
}
declare const FLoudnessResults: FLoudnessResults;

declare interface FMeterResults {
    TimeSeconds: number;
    MeterValue: number;
    PeakValue: number;
    NumSamplesClipping: number;
    ClippingValue: number;
}
declare const FMeterResults: FMeterResults;

declare interface FSynesthesiaSpectrumResults {
    TimeSeconds: number;
    SpectrumValues: TArray<number>;
}
declare const FSynesthesiaSpectrumResults: FSynesthesiaSpectrumResults;

declare interface UAudioSynesthesiaNRT extends UAudioAnalyzerNRT {

}
declare const UAudioSynesthesiaNRT: UAudioSynesthesiaNRT;

declare interface UAudioSynesthesiaNRTSettings extends UAudioAnalyzerNRTSettings {

}
declare const UAudioSynesthesiaNRTSettings: UAudioSynesthesiaNRTSettings;

declare interface UAudioSynesthesiaSettings extends UAudioAnalyzerSettings {

}
declare const UAudioSynesthesiaSettings: UAudioSynesthesiaSettings;

declare interface UConstantQAnalyzer extends UAudioAnalyzer {
    Settings: UConstantQSettings;
    OnConstantQResults: FConstantQAnalyzerOnConstantQResults;
    OnLatestConstantQResults: FConstantQAnalyzerOnLatestConstantQResults;
    GetNumCenterFrequencies(): number;
    GetCenterFrequencies(OutCenterFrequencies: TArray<number>): void;
}
declare const UConstantQAnalyzer: UConstantQAnalyzer;

declare interface UConstantQNRT extends UAudioSynesthesiaNRT {
    Settings: UConstantQNRTSettings;
    GetNormalizedChannelConstantQAtTime(InSeconds: number, InChannel: number, OutConstantQ: TArray<number>): void;
    GetChannelConstantQAtTime(InSeconds: number, InChannel: number, OutConstantQ: TArray<number>): void;
}
declare const UConstantQNRT: UConstantQNRT;

declare interface UConstantQNRTSettings extends UAudioSynesthesiaNRTSettings {
    StartingFrequency: number;
    NumBands: number;
    NumBandsPerOctave: number;
    AnalysisPeriod: number;
    bDownmixToMono: boolean;
    FFTSize: EConstantQFFTSizeEnum;
    WindowType: EFFTWindowType;
    SpectrumType: EAudioSpectrumType;
    BandWidthStretch: number;
    CQTNormalization: EConstantQNormalizationEnum;
    NoiseFloorDb: number;
}
declare const UConstantQNRTSettings: UConstantQNRTSettings;

declare interface UConstantQSettings extends UAudioSynesthesiaSettings {
    StartingFrequencyHz: number;
    NumBands: number;
    NumBandsPerOctave: number;
    AnalysisPeriodInSeconds: number;
    bDownmixToMono: boolean;
    FFTSize: EConstantQFFTSizeEnum;
    WindowType: EFFTWindowType;
    SpectrumType: EAudioSpectrumType;
    BandWidthStretch: number;
    CQTNormalization: EConstantQNormalizationEnum;
    NoiseFloorDb: number;
}
declare const UConstantQSettings: UConstantQSettings;

declare interface ULoudnessAnalyzer extends UAudioAnalyzer {
    Settings: ULoudnessSettings;
    OnOverallLoudnessResults: FLoudnessAnalyzerOnOverallLoudnessResults;
    OnPerChannelLoudnessResults: FLoudnessAnalyzerOnPerChannelLoudnessResults;
    OnLatestOverallLoudnessResults: FLoudnessAnalyzerOnLatestOverallLoudnessResults;
    OnLatestPerChannelLoudnessResults: FLoudnessAnalyzerOnLatestPerChannelLoudnessResults;
}
declare const ULoudnessAnalyzer: ULoudnessAnalyzer;

declare interface ULoudnessNRT extends UAudioSynesthesiaNRT {
    Settings: ULoudnessNRTSettings;
    GetNormalizedLoudnessAtTime(InSeconds: number, OutLoudness: number): void;
    GetNormalizedChannelLoudnessAtTime(InSeconds: number, InChannel: number, OutLoudness: number): void;
    GetLoudnessAtTime(InSeconds: number, OutLoudness: number): void;
    GetChannelLoudnessAtTime(InSeconds: number, InChannel: number, OutLoudness: number): void;
}
declare const ULoudnessNRT: ULoudnessNRT;

declare interface ULoudnessNRTSettings extends UAudioSynesthesiaNRTSettings {
    AnalysisPeriod: number;
    MinimumFrequency: number;
    MaximumFrequency: number;
    CurveType: ELoudnessNRTCurveTypeEnum;
    NoiseFloorDb: number;
}
declare const ULoudnessNRTSettings: ULoudnessNRTSettings;

declare interface ULoudnessSettings extends UAudioSynesthesiaSettings {
    AnalysisPeriod: number;
    MinimumFrequency: number;
    MaximumFrequency: number;
    CurveType: ELoudnessCurveTypeEnum;
    NoiseFloorDb: number;
    ExpectedMaxLoudness: number;
}
declare const ULoudnessSettings: ULoudnessSettings;

declare interface UMeterAnalyzer extends UAudioAnalyzer {
    Settings: UMeterSettings;
    OnOverallMeterResults: FMeterAnalyzerOnOverallMeterResults;
    OnPerChannelMeterResults: FMeterAnalyzerOnPerChannelMeterResults;
    OnLatestOverallMeterResults: FMeterAnalyzerOnLatestOverallMeterResults;
    OnLatestPerChannelMeterResults: FMeterAnalyzerOnLatestPerChannelMeterResults;
}
declare const UMeterAnalyzer: UMeterAnalyzer;

declare interface UMeterSettings extends UAudioSynesthesiaSettings {
    AnalysisPeriod: number;
    PeakMode: EMeterPeakType;
    MeterAttackTime: number;
    MeterReleaseTime: number;
    PeakHoldTime: number;
    ClippingThreshold: number;
}
declare const UMeterSettings: UMeterSettings;

declare interface UOnsetNRT extends UAudioSynesthesiaNRT {
    Settings: UOnsetNRTSettings;
    GetNormalizedChannelOnsetsBetweenTimes(InStartSeconds: number, InEndSeconds: number, InChannel: number, OutOnsetTimestamps: TArray<number>, OutOnsetStrengths: TArray<number>): void;
    GetChannelOnsetsBetweenTimes(InStartSeconds: number, InEndSeconds: number, InChannel: number, OutOnsetTimestamps: TArray<number>, OutOnsetStrengths: TArray<number>): void;
}
declare const UOnsetNRT: UOnsetNRT;

declare interface UOnsetNRTSettings extends UAudioSynesthesiaNRTSettings {
    bDownmixToMono: boolean;
    GranularityInSeconds: number;
    Sensitivity: number;
    MinimumFrequency: number;
    MaximumFrequency: number;
}
declare const UOnsetNRTSettings: UOnsetNRTSettings;

declare interface USynesthesiaSpectrumAnalysisSettings extends UAudioSynesthesiaSettings {
    AnalysisPeriod: number;
    FFTSize: EFFTSize;
    SpectrumType: EAudioSpectrumType;
    WindowType: EFFTWindowType;
    bDownmixToMono: boolean;
}
declare const USynesthesiaSpectrumAnalysisSettings: USynesthesiaSpectrumAnalysisSettings;

declare interface USynesthesiaSpectrumAnalyzer extends UAudioAnalyzer {
    Settings: USynesthesiaSpectrumAnalysisSettings;
    OnSpectrumResults: FSynesthesiaSpectrumAnalyzerOnSpectrumResults;
    OnLatestSpectrumResults: FSynesthesiaSpectrumAnalyzerOnLatestSpectrumResults;
    GetNumCenterFrequencies(): number;
    GetCenterFrequencies(InSampleRate: number, OutCenterFrequencies: TArray<number>): void;
}
declare const USynesthesiaSpectrumAnalyzer: USynesthesiaSpectrumAnalyzer;

