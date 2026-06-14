declare interface FCaptureResolution {
    ResX: number;
    ResY: number;
}
declare const FCaptureResolution: FCaptureResolution;

declare interface FCapturedPixels {

}
declare const FCapturedPixels: FCapturedPixels;

declare interface FCapturedPixelsID {
    Identifiers: Record<FName, FName>;
}
declare const FCapturedPixelsID: FCapturedPixelsID;

declare interface FCompositionGraphCapturePasses {
    Value: TArray<FString>;
}
declare const FCompositionGraphCapturePasses: FCompositionGraphCapturePasses;

declare interface FFrameMetrics {
    TotalElapsedTime: number;
    FrameDelta: number;
    FrameNumber: number;
    NumDroppedFrames: number;
}
declare const FFrameMetrics: FFrameMetrics;

declare interface FMovieSceneCaptureSettings {
    OutputDirectory: FDirectoryPath;
    GameModeOverride: TSubclassOf<AGameModeBase>;
    OutputFormat: FString;
    bOverwriteExisting: boolean;
    bUseRelativeFrameNumbers: boolean;
    HandleFrames: number;
    MovieExtension: FString;
    ZeroPadFrameNumbers: uint8;
    FrameRate: FFrameRate;
    bUseCustomFrameRate: boolean;
    CustomFrameRate: FFrameRate;
    Resolution: FCaptureResolution;
    bEnableTextureStreaming: boolean;
    bCinematicEngineScalability: boolean;
    bCinematicMode: boolean;
    bAllowMovement: boolean;
    bAllowTurning: boolean;
    bShowPlayer: boolean;
    bShowHUD: boolean;
    bUsePathTracer: boolean;
    PathTracerSamplePerPixel: number;
}
declare const FMovieSceneCaptureSettings: FMovieSceneCaptureSettings;

declare interface IMovieSceneCaptureInterface extends IInterface {

}
declare const IMovieSceneCaptureInterface: IMovieSceneCaptureInterface;

declare interface UCompositionGraphCaptureProtocol extends UMovieSceneImageCaptureProtocolBase {
    IncludeRenderPasses: FCompositionGraphCapturePasses;
    bCaptureFramesInHDR: boolean;
    HDRCompressionQuality: number;
    CaptureGamut: EHDRCaptureGamut;
    PostProcessingMaterial: FSoftObjectPath;
    bDisableScreenPercentage: boolean;
    PostProcessingMaterialPtr: UMaterialInterface;
}
declare const UCompositionGraphCaptureProtocol: UCompositionGraphCaptureProtocol;

declare interface UCompressedImageSequenceProtocol extends UImageSequenceProtocol {
    CompressionQuality: number;
}
declare const UCompressedImageSequenceProtocol: UCompressedImageSequenceProtocol;

declare interface UFrameGrabberProtocol extends UMovieSceneImageCaptureProtocolBase {

}
declare const UFrameGrabberProtocol: UFrameGrabberProtocol;

declare interface UImageSequenceProtocol extends UFrameGrabberProtocol {

}
declare const UImageSequenceProtocol: UImageSequenceProtocol;

declare interface UImageSequenceProtocol_BMP extends UImageSequenceProtocol {

}
declare const UImageSequenceProtocol_BMP: UImageSequenceProtocol_BMP;

declare interface UImageSequenceProtocol_EXR extends UImageSequenceProtocol {
    bCompressed: boolean;
    CaptureGamut: EHDRCaptureGamut;
}
declare const UImageSequenceProtocol_EXR: UImageSequenceProtocol_EXR;

declare interface UImageSequenceProtocol_JPG extends UCompressedImageSequenceProtocol {

}
declare const UImageSequenceProtocol_JPG: UImageSequenceProtocol_JPG;

declare interface UImageSequenceProtocol_PNG extends UCompressedImageSequenceProtocol {

}
declare const UImageSequenceProtocol_PNG: UImageSequenceProtocol_PNG;

declare interface ULevelCapture extends UMovieSceneCapture {
    bAutoStartCapture: boolean;
    PrerequisiteActorId: FGuid;
}
declare const ULevelCapture: ULevelCapture;

declare interface UMasterAudioSubmixCaptureProtocol extends UMovieSceneAudioCaptureProtocolBase {
    Filename: FString;
}
declare const UMasterAudioSubmixCaptureProtocol: UMasterAudioSubmixCaptureProtocol;

declare interface UMovieSceneAudioCaptureProtocolBase extends UMovieSceneCaptureProtocolBase {

}
declare const UMovieSceneAudioCaptureProtocolBase: UMovieSceneAudioCaptureProtocolBase;

declare interface UMovieSceneCapture extends UObject {
    ImageCaptureProtocolType: FSoftClassPath;
    AudioCaptureProtocolType: FSoftClassPath;
    ImageCaptureProtocol: UMovieSceneImageCaptureProtocolBase;
    AudioCaptureProtocol: UMovieSceneAudioCaptureProtocolBase;
    Settings: FMovieSceneCaptureSettings;
    bUseSeparateProcess: boolean;
    bCloseEditorWhenCaptureStarts: boolean;
    AdditionalCommandLineArguments: FString;
    InheritedCommandLineArguments: FString;
    SetImageCaptureProtocolType(ProtocolType: TSubclassOf<UMovieSceneCaptureProtocolBase>): void;
    SetAudioCaptureProtocolType(ProtocolType: TSubclassOf<UMovieSceneCaptureProtocolBase>): void;
    GetImageCaptureProtocol(): UMovieSceneCaptureProtocolBase;
    GetAudioCaptureProtocol(): UMovieSceneCaptureProtocolBase;
}
declare const UMovieSceneCapture: UMovieSceneCapture;

declare interface UMovieSceneCaptureEnvironment extends UObject {
    IsCaptureInProgress(): boolean;
    GetCaptureFrameNumber(): number;
    GetCaptureElapsedTime(): number;
    FindImageCaptureProtocol(): UMovieSceneImageCaptureProtocolBase;
    FindAudioCaptureProtocol(): UMovieSceneAudioCaptureProtocolBase;
}
declare const UMovieSceneCaptureEnvironment: UMovieSceneCaptureEnvironment;

declare interface UMovieSceneCaptureProtocolBase extends UObject {
    State: EMovieSceneCaptureProtocolState;
    IsCapturing(): boolean;
    GetState(): EMovieSceneCaptureProtocolState;
}
declare const UMovieSceneCaptureProtocolBase: UMovieSceneCaptureProtocolBase;

declare interface UMovieSceneImageCaptureProtocolBase extends UMovieSceneCaptureProtocolBase {

}
declare const UMovieSceneImageCaptureProtocolBase: UMovieSceneImageCaptureProtocolBase;

declare interface UNullAudioCaptureProtocol extends UMovieSceneAudioCaptureProtocolBase {

}
declare const UNullAudioCaptureProtocol: UNullAudioCaptureProtocol;

declare interface UUserDefinedCaptureProtocol extends UMovieSceneImageCaptureProtocolBase {
    World: UWorld;
    StopCapturingFinalPixels(): void;
    StartCapturingFinalPixels(StreamID: FCapturedPixelsID): void;
    ResolveBuffer(Buffer: UTexture, BufferID: FCapturedPixelsID): void;
    OnWarmUp(): void;
    OnTick(): void;
    OnStartCapture(): void;
    OnSetup(): boolean;
    OnPreTick(): void;
    OnPixelsReceived(Pixels: FCapturedPixels, ID: FCapturedPixelsID, FrameMetrics: FFrameMetrics): void;
    OnPauseCapture(): void;
    OnFinalize(): void;
    OnCaptureFrame(): void;
    OnCanFinalize(): boolean;
    OnBeginFinalize(): void;
    GetCurrentFrameMetrics(): FFrameMetrics;
    GenerateFilename(InFrameMetrics: FFrameMetrics): FString;
}
declare const UUserDefinedCaptureProtocol: UUserDefinedCaptureProtocol;

declare interface UUserDefinedImageCaptureProtocol extends UUserDefinedCaptureProtocol {
    Format: EDesiredImageFormat;
    bEnableCompression: boolean;
    CompressionQuality: number;
    WriteImageToDisk(PixelData: FCapturedPixels, StreamID: FCapturedPixelsID, FrameMetrics: FFrameMetrics, bCopyImageData: boolean): void;
    GenerateFilenameForCurrentFrame(): FString;
    GenerateFilenameForBuffer(Buffer: UTexture, StreamID: FCapturedPixelsID): FString;
}
declare const UUserDefinedImageCaptureProtocol: UUserDefinedImageCaptureProtocol;

declare interface UVideoCaptureProtocol extends UFrameGrabberProtocol {
    bUseCompression: boolean;
    CompressionQuality: number;
}
declare const UVideoCaptureProtocol: UVideoCaptureProtocol;

