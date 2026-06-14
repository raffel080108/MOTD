declare interface FImgMediaSourceCustomizationSequenceProxy {

}
declare const FImgMediaSourceCustomizationSequenceProxy: FImgMediaSourceCustomizationSequenceProxy;

declare interface FMediaSourceColorSettings {
    EncodingOverride: EMediaSourceEncoding;
    ColorSpaceOverride: ETextureColorSpace;
    RedChromaticityCoordinate: FVector2D;
    GreenChromaticityCoordinate: FVector2D;
    BlueChromaticityCoordinate: FVector2D;
    WhiteChromaticityCoordinate: FVector2D;
    ChromaticAdaptationMethod: ETextureChromaticAdaptationMethod;
}
declare const FMediaSourceColorSettings: FMediaSourceColorSettings;

declare interface UImgMediaSource extends UBaseMediaSource {
    IsPathRelativeToProjectRoot: boolean;
    FrameRateOverride: FFrameRate;
    ProxyOverride: FString;
    bFillGapsInSequence: boolean;
    StartTimecode: FTimecode;
    SourceColorSettings: FMediaSourceColorSettings;
    SequencePath: FDirectoryPath;
    SetTokenizedSequencePath(Path: string | FString): void;
    SetSequencePath(Path: string | FString): void;
    RemoveTargetObject(InActor: AActor): void;
    GetSequencePath(): FString;
    GetProxies(OutProxies: string | FString[]): void;
    AddTargetObject(InActor: AActor): void;
}
declare const UImgMediaSource: UImgMediaSource;

