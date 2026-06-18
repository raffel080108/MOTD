declare interface FConstantQResults {
    TimeSeconds: number;
    SpectrumValues: number[];
}

declare interface FLoudnessResults {
    Loudness: number;
    NormalizedLoudness: number;
    PerceptualEnergy: number;
    TimeSeconds: number;
}

declare interface FMeterResults {
    TimeSeconds: number;
    MeterValue: number;
    PeakValue: number;
    NumSamplesClipping: number;
    ClippingValue: number;
}

declare interface FSynesthesiaSpectrumResults {
    TimeSeconds: number;
    SpectrumValues: number[];
}

declare interface UAudioSynesthesiaNRT extends UAudioAnalyzerNRT {
    readonly __staticRegistry: 
        UAudioAnalyzerNRT['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerNRT['__propertyRegistry'];
}

declare interface UAudioSynesthesiaNRTSettings extends UAudioAnalyzerNRTSettings {
    readonly __staticRegistry: 
        UAudioAnalyzerNRTSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerNRTSettings['__propertyRegistry'];
}

declare interface UAudioSynesthesiaSettings extends UAudioAnalyzerSettings {
    readonly __staticRegistry: 
        UAudioAnalyzerSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerSettings['__propertyRegistry'];
}

declare interface UConstantQAnalyzer extends UAudioAnalyzer {
    readonly __static_UConstantQAnalyzer: {
        GetNumCenterFrequencies(): number;
        GetCenterFrequencies(OutCenterFrequencies: number[]): void;
    };
    readonly __properties_UConstantQAnalyzer: {
        Settings: UConstantQSettings;
        OnConstantQResults: FConstantQAnalyzerOnConstantQResults;
        OnLatestConstantQResults: FConstantQAnalyzerOnLatestConstantQResults;
    };
    readonly __staticRegistry: 
        UConstantQAnalyzer['__static_UConstantQAnalyzer'] &
        UAudioAnalyzer['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstantQAnalyzer['__properties_UConstantQAnalyzer'] &
        UAudioAnalyzer['__propertyRegistry'];
}

declare interface UConstantQNRT extends UAudioSynesthesiaNRT {
    readonly __static_UConstantQNRT: {
        GetNormalizedChannelConstantQAtTime(InSeconds: number, InChannel: number, OutConstantQ: number[]): void;
        GetChannelConstantQAtTime(InSeconds: number, InChannel: number, OutConstantQ: number[]): void;
    };
    readonly __properties_UConstantQNRT: {
        Settings: UConstantQNRTSettings;
    };
    readonly __staticRegistry: 
        UConstantQNRT['__static_UConstantQNRT'] &
        UAudioSynesthesiaNRT['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstantQNRT['__properties_UConstantQNRT'] &
        UAudioSynesthesiaNRT['__propertyRegistry'];
}

declare interface UConstantQNRTSettings extends UAudioSynesthesiaNRTSettings {
    readonly __properties_UConstantQNRTSettings: {
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
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaNRTSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstantQNRTSettings['__properties_UConstantQNRTSettings'] &
        UAudioSynesthesiaNRTSettings['__propertyRegistry'];
}

declare interface UConstantQSettings extends UAudioSynesthesiaSettings {
    readonly __properties_UConstantQSettings: {
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
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UConstantQSettings['__properties_UConstantQSettings'] &
        UAudioSynesthesiaSettings['__propertyRegistry'];
}

declare interface ULoudnessAnalyzer extends UAudioAnalyzer {
    readonly __properties_ULoudnessAnalyzer: {
        Settings: ULoudnessSettings;
        OnOverallLoudnessResults: FLoudnessAnalyzerOnOverallLoudnessResults;
        OnPerChannelLoudnessResults: FLoudnessAnalyzerOnPerChannelLoudnessResults;
        OnLatestOverallLoudnessResults: FLoudnessAnalyzerOnLatestOverallLoudnessResults;
        OnLatestPerChannelLoudnessResults: FLoudnessAnalyzerOnLatestPerChannelLoudnessResults;
    };
    readonly __staticRegistry: 
        UAudioAnalyzer['__staticRegistry'];
    readonly __propertyRegistry: 
        ULoudnessAnalyzer['__properties_ULoudnessAnalyzer'] &
        UAudioAnalyzer['__propertyRegistry'];
}

declare interface ULoudnessNRT extends UAudioSynesthesiaNRT {
    readonly __static_ULoudnessNRT: {
        GetNormalizedLoudnessAtTime(InSeconds: number, OutLoudness: number): void;
        GetNormalizedChannelLoudnessAtTime(InSeconds: number, InChannel: number, OutLoudness: number): void;
        GetLoudnessAtTime(InSeconds: number, OutLoudness: number): void;
        GetChannelLoudnessAtTime(InSeconds: number, InChannel: number, OutLoudness: number): void;
    };
    readonly __properties_ULoudnessNRT: {
        Settings: ULoudnessNRTSettings;
    };
    readonly __staticRegistry: 
        ULoudnessNRT['__static_ULoudnessNRT'] &
        UAudioSynesthesiaNRT['__staticRegistry'];
    readonly __propertyRegistry: 
        ULoudnessNRT['__properties_ULoudnessNRT'] &
        UAudioSynesthesiaNRT['__propertyRegistry'];
}

declare interface ULoudnessNRTSettings extends UAudioSynesthesiaNRTSettings {
    readonly __properties_ULoudnessNRTSettings: {
        AnalysisPeriod: number;
        MinimumFrequency: number;
        MaximumFrequency: number;
        CurveType: ELoudnessNRTCurveTypeEnum;
        NoiseFloorDb: number;
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaNRTSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        ULoudnessNRTSettings['__properties_ULoudnessNRTSettings'] &
        UAudioSynesthesiaNRTSettings['__propertyRegistry'];
}

declare interface ULoudnessSettings extends UAudioSynesthesiaSettings {
    readonly __properties_ULoudnessSettings: {
        AnalysisPeriod: number;
        MinimumFrequency: number;
        MaximumFrequency: number;
        CurveType: ELoudnessCurveTypeEnum;
        NoiseFloorDb: number;
        ExpectedMaxLoudness: number;
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        ULoudnessSettings['__properties_ULoudnessSettings'] &
        UAudioSynesthesiaSettings['__propertyRegistry'];
}

declare interface UMeterAnalyzer extends UAudioAnalyzer {
    readonly __properties_UMeterAnalyzer: {
        Settings: UMeterSettings;
        OnOverallMeterResults: FMeterAnalyzerOnOverallMeterResults;
        OnPerChannelMeterResults: FMeterAnalyzerOnPerChannelMeterResults;
        OnLatestOverallMeterResults: FMeterAnalyzerOnLatestOverallMeterResults;
        OnLatestPerChannelMeterResults: FMeterAnalyzerOnLatestPerChannelMeterResults;
    };
    readonly __staticRegistry: 
        UAudioAnalyzer['__staticRegistry'];
    readonly __propertyRegistry: 
        UMeterAnalyzer['__properties_UMeterAnalyzer'] &
        UAudioAnalyzer['__propertyRegistry'];
}

declare interface UMeterSettings extends UAudioSynesthesiaSettings {
    readonly __properties_UMeterSettings: {
        AnalysisPeriod: number;
        PeakMode: EMeterPeakType;
        MeterAttackTime: number;
        MeterReleaseTime: number;
        PeakHoldTime: number;
        ClippingThreshold: number;
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UMeterSettings['__properties_UMeterSettings'] &
        UAudioSynesthesiaSettings['__propertyRegistry'];
}

declare interface UOnsetNRT extends UAudioSynesthesiaNRT {
    readonly __static_UOnsetNRT: {
        GetNormalizedChannelOnsetsBetweenTimes(InStartSeconds: number, InEndSeconds: number, InChannel: number, OutOnsetTimestamps: number[], OutOnsetStrengths: number[]): void;
        GetChannelOnsetsBetweenTimes(InStartSeconds: number, InEndSeconds: number, InChannel: number, OutOnsetTimestamps: number[], OutOnsetStrengths: number[]): void;
    };
    readonly __properties_UOnsetNRT: {
        Settings: UOnsetNRTSettings;
    };
    readonly __staticRegistry: 
        UOnsetNRT['__static_UOnsetNRT'] &
        UAudioSynesthesiaNRT['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnsetNRT['__properties_UOnsetNRT'] &
        UAudioSynesthesiaNRT['__propertyRegistry'];
}

declare interface UOnsetNRTSettings extends UAudioSynesthesiaNRTSettings {
    readonly __properties_UOnsetNRTSettings: {
        bDownmixToMono: boolean;
        GranularityInSeconds: number;
        Sensitivity: number;
        MinimumFrequency: number;
        MaximumFrequency: number;
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaNRTSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UOnsetNRTSettings['__properties_UOnsetNRTSettings'] &
        UAudioSynesthesiaNRTSettings['__propertyRegistry'];
}

declare interface USynesthesiaSpectrumAnalysisSettings extends UAudioSynesthesiaSettings {
    readonly __properties_USynesthesiaSpectrumAnalysisSettings: {
        AnalysisPeriod: number;
        FFTSize: EFFTSize;
        SpectrumType: EAudioSpectrumType;
        WindowType: EFFTWindowType;
        bDownmixToMono: boolean;
    };
    readonly __staticRegistry: 
        UAudioSynesthesiaSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        USynesthesiaSpectrumAnalysisSettings['__properties_USynesthesiaSpectrumAnalysisSettings'] &
        UAudioSynesthesiaSettings['__propertyRegistry'];
}

declare interface USynesthesiaSpectrumAnalyzer extends UAudioAnalyzer {
    readonly __static_USynesthesiaSpectrumAnalyzer: {
        GetNumCenterFrequencies(): number;
        GetCenterFrequencies(InSampleRate: number, OutCenterFrequencies: number[]): void;
    };
    readonly __properties_USynesthesiaSpectrumAnalyzer: {
        Settings: USynesthesiaSpectrumAnalysisSettings;
        OnSpectrumResults: FSynesthesiaSpectrumAnalyzerOnSpectrumResults;
        OnLatestSpectrumResults: FSynesthesiaSpectrumAnalyzerOnLatestSpectrumResults;
    };
    readonly __staticRegistry: 
        USynesthesiaSpectrumAnalyzer['__static_USynesthesiaSpectrumAnalyzer'] &
        UAudioAnalyzer['__staticRegistry'];
    readonly __propertyRegistry: 
        USynesthesiaSpectrumAnalyzer['__properties_USynesthesiaSpectrumAnalyzer'] &
        UAudioAnalyzer['__propertyRegistry'];
}

