declare interface UAudioAnalyzer extends UObject {
    AudioBus: UAudioBus;
    AudioAnalyzerSubsystem: UAudioAnalyzerSubsystem;
    StopAnalyzing(WorldContextObject: UObject): void;
    StartAnalyzing(WorldContextObject: UObject, AudioBusToAnalyze: UAudioBus): void;
}
declare const UAudioAnalyzer: UAudioAnalyzer;

declare interface UAudioAnalyzerAssetBase extends UObject {

}
declare const UAudioAnalyzerAssetBase: UAudioAnalyzerAssetBase;

declare interface UAudioAnalyzerNRT extends UAudioAnalyzerAssetBase {
    Sound: USoundWave;
    DurationInSeconds: number;
}
declare const UAudioAnalyzerNRT: UAudioAnalyzerNRT;

declare interface UAudioAnalyzerNRTSettings extends UAudioAnalyzerAssetBase {

}
declare const UAudioAnalyzerNRTSettings: UAudioAnalyzerNRTSettings;

declare interface UAudioAnalyzerSettings extends UAudioAnalyzerAssetBase {

}
declare const UAudioAnalyzerSettings: UAudioAnalyzerSettings;

declare interface UAudioAnalyzerSubsystem extends UEngineSubsystem {
    AudioAnalyzers: TArray<UAudioAnalyzer>;
}
declare const UAudioAnalyzerSubsystem: UAudioAnalyzerSubsystem;

