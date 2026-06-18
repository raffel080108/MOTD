declare type FImgMediaSourceCustomizationSequenceProxy = object;

declare interface FMediaSourceColorSettings {
    EncodingOverride: EMediaSourceEncoding;
    ColorSpaceOverride: ETextureColorSpace;
    RedChromaticityCoordinate: FVector2D;
    GreenChromaticityCoordinate: FVector2D;
    BlueChromaticityCoordinate: FVector2D;
    WhiteChromaticityCoordinate: FVector2D;
    ChromaticAdaptationMethod: ETextureChromaticAdaptationMethod;
}

declare interface UImgMediaSource extends UBaseMediaSource {
    readonly __static_UImgMediaSource: {
        SetTokenizedSequencePath(Path: string): void;
        SetSequencePath(Path: string): void;
        RemoveTargetObject(InActor: AActor): void;
        GetSequencePath(): string;
        GetProxies(OutProxies: string[]): void;
        AddTargetObject(InActor: AActor): void;
    };
    readonly __properties_UImgMediaSource: {
        IsPathRelativeToProjectRoot: boolean;
        FrameRateOverride: FFrameRate;
        ProxyOverride: string;
        bFillGapsInSequence: boolean;
        StartTimecode: FTimecode;
        SourceColorSettings: FMediaSourceColorSettings;
        SequencePath: FDirectoryPath;
    };
    readonly __staticRegistry: 
        UImgMediaSource['__static_UImgMediaSource'] &
        UBaseMediaSource['__staticRegistry'];
    readonly __propertyRegistry: 
        UImgMediaSource['__properties_UImgMediaSource'] &
        UBaseMediaSource['__propertyRegistry'];
}

