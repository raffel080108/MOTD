declare interface UAudioAnalyzer extends UObject {
    readonly __static_UAudioAnalyzer: {
        StopAnalyzing(WorldContextObject: UObject): void;
        StartAnalyzing(WorldContextObject: UObject, AudioBusToAnalyze: UAudioBus): void;
    };
    readonly __properties_UAudioAnalyzer: {
        AudioBus: UAudioBus;
        AudioAnalyzerSubsystem: UAudioAnalyzerSubsystem;
    };
    readonly __staticRegistry: 
        UAudioAnalyzer['__static_UAudioAnalyzer'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzer['__properties_UAudioAnalyzer'] &
        UObject['__propertyRegistry'];
}

declare interface UAudioAnalyzerAssetBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UAudioAnalyzerNRT extends UAudioAnalyzerAssetBase {
    readonly __properties_UAudioAnalyzerNRT: {
        Sound: USoundWave;
        DurationInSeconds: number;
    };
    readonly __staticRegistry: 
        UAudioAnalyzerAssetBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerNRT['__properties_UAudioAnalyzerNRT'] &
        UAudioAnalyzerAssetBase['__propertyRegistry'];
}

declare interface UAudioAnalyzerNRTSettings extends UAudioAnalyzerAssetBase {
    readonly __staticRegistry: 
        UAudioAnalyzerAssetBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerAssetBase['__propertyRegistry'];
}

declare interface UAudioAnalyzerSettings extends UAudioAnalyzerAssetBase {
    readonly __staticRegistry: 
        UAudioAnalyzerAssetBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerAssetBase['__propertyRegistry'];
}

declare interface UAudioAnalyzerSubsystem extends UEngineSubsystem {
    readonly __properties_UAudioAnalyzerSubsystem: {
        AudioAnalyzers: UAudioAnalyzer[];
    };
    readonly __staticRegistry: 
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioAnalyzerSubsystem['__properties_UAudioAnalyzerSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

