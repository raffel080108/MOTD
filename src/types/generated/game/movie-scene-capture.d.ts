declare interface FCaptureResolution {
    ResX: number;
    ResY: number;
}

declare type FCapturedPixels = object;

declare interface FCapturedPixelsID {
    Identifiers: TMap<string, string>;
}

declare interface FCompositionGraphCapturePasses {
    Value: string[];
}

declare interface FFrameMetrics {
    TotalElapsedTime: number;
    FrameDelta: number;
    FrameNumber: number;
    NumDroppedFrames: number;
}

declare interface FMovieSceneCaptureSettings {
    OutputDirectory: FDirectoryPath;
    GameModeOverride: TSubclassOf<AGameModeBase>;
    OutputFormat: string;
    bOverwriteExisting: boolean;
    bUseRelativeFrameNumbers: boolean;
    HandleFrames: number;
    MovieExtension: string;
    ZeroPadFrameNumbers: number;
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

declare interface IMovieSceneCaptureInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UCompositionGraphCaptureProtocol extends UMovieSceneImageCaptureProtocolBase {
    readonly __properties_UCompositionGraphCaptureProtocol: {
        IncludeRenderPasses: FCompositionGraphCapturePasses;
        bCaptureFramesInHDR: boolean;
        HDRCompressionQuality: number;
        CaptureGamut: EHDRCaptureGamut;
        PostProcessingMaterial: FSoftObjectPath;
        bDisableScreenPercentage: boolean;
        PostProcessingMaterialPtr: UMaterialInterface;
    };
    readonly __staticRegistry: 
        UMovieSceneImageCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompositionGraphCaptureProtocol['__properties_UCompositionGraphCaptureProtocol'] &
        UMovieSceneImageCaptureProtocolBase['__propertyRegistry'];
}

declare interface UCompressedImageSequenceProtocol extends UImageSequenceProtocol {
    readonly __properties_UCompressedImageSequenceProtocol: {
        CompressionQuality: number;
    };
    readonly __staticRegistry: 
        UImageSequenceProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompressedImageSequenceProtocol['__properties_UCompressedImageSequenceProtocol'] &
        UImageSequenceProtocol['__propertyRegistry'];
}

declare interface UFrameGrabberProtocol extends UMovieSceneImageCaptureProtocolBase {
    readonly __staticRegistry: 
        UMovieSceneImageCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneImageCaptureProtocolBase['__propertyRegistry'];
}

declare interface UImageSequenceProtocol extends UFrameGrabberProtocol {
    readonly __staticRegistry: 
        UFrameGrabberProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UFrameGrabberProtocol['__propertyRegistry'];
}

declare interface UImageSequenceProtocol_BMP extends UImageSequenceProtocol {
    readonly __staticRegistry: 
        UImageSequenceProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UImageSequenceProtocol['__propertyRegistry'];
}

declare interface UImageSequenceProtocol_EXR extends UImageSequenceProtocol {
    readonly __properties_UImageSequenceProtocol_EXR: {
        bCompressed: boolean;
        CaptureGamut: EHDRCaptureGamut;
    };
    readonly __staticRegistry: 
        UImageSequenceProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UImageSequenceProtocol_EXR['__properties_UImageSequenceProtocol_EXR'] &
        UImageSequenceProtocol['__propertyRegistry'];
}

declare interface UImageSequenceProtocol_JPG extends UCompressedImageSequenceProtocol {
    readonly __staticRegistry: 
        UCompressedImageSequenceProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompressedImageSequenceProtocol['__propertyRegistry'];
}

declare interface UImageSequenceProtocol_PNG extends UCompressedImageSequenceProtocol {
    readonly __staticRegistry: 
        UCompressedImageSequenceProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UCompressedImageSequenceProtocol['__propertyRegistry'];
}

declare interface ULevelCapture extends UMovieSceneCapture {
    readonly __properties_ULevelCapture: {
        bAutoStartCapture: boolean;
        PrerequisiteActorId: FGuid;
    };
    readonly __staticRegistry: 
        UMovieSceneCapture['__staticRegistry'];
    readonly __propertyRegistry: 
        ULevelCapture['__properties_ULevelCapture'] &
        UMovieSceneCapture['__propertyRegistry'];
}

declare interface UMasterAudioSubmixCaptureProtocol extends UMovieSceneAudioCaptureProtocolBase {
    readonly __properties_UMasterAudioSubmixCaptureProtocol: {
        Filename: string;
    };
    readonly __staticRegistry: 
        UMovieSceneAudioCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMasterAudioSubmixCaptureProtocol['__properties_UMasterAudioSubmixCaptureProtocol'] &
        UMovieSceneAudioCaptureProtocolBase['__propertyRegistry'];
}

declare interface UMovieSceneAudioCaptureProtocolBase extends UMovieSceneCaptureProtocolBase {
    readonly __staticRegistry: 
        UMovieSceneCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCaptureProtocolBase['__propertyRegistry'];
}

declare interface UMovieSceneCapture extends UObject {
    readonly __static_UMovieSceneCapture: {
        SetImageCaptureProtocolType(ProtocolType: TSubclassOf<UMovieSceneCaptureProtocolBase>): void;
        SetAudioCaptureProtocolType(ProtocolType: TSubclassOf<UMovieSceneCaptureProtocolBase>): void;
        GetImageCaptureProtocol(): UMovieSceneCaptureProtocolBase;
        GetAudioCaptureProtocol(): UMovieSceneCaptureProtocolBase;
    };
    readonly __properties_UMovieSceneCapture: {
        ImageCaptureProtocolType: FSoftClassPath;
        AudioCaptureProtocolType: FSoftClassPath;
        ImageCaptureProtocol: UMovieSceneImageCaptureProtocolBase;
        AudioCaptureProtocol: UMovieSceneAudioCaptureProtocolBase;
        Settings: FMovieSceneCaptureSettings;
        bUseSeparateProcess: boolean;
        bCloseEditorWhenCaptureStarts: boolean;
        AdditionalCommandLineArguments: string;
        InheritedCommandLineArguments: string;
    };
    readonly __staticRegistry: 
        UMovieSceneCapture['__static_UMovieSceneCapture'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCapture['__properties_UMovieSceneCapture'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneCaptureEnvironment extends UObject {
    readonly __static_UMovieSceneCaptureEnvironment: {
        IsCaptureInProgress(): boolean;
        GetCaptureFrameNumber(): number;
        GetCaptureElapsedTime(): number;
        FindImageCaptureProtocol(): UMovieSceneImageCaptureProtocolBase;
        FindAudioCaptureProtocol(): UMovieSceneAudioCaptureProtocolBase;
    };
    readonly __staticRegistry: 
        UMovieSceneCaptureEnvironment['__static_UMovieSceneCaptureEnvironment'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneCaptureProtocolBase extends UObject {
    readonly __static_UMovieSceneCaptureProtocolBase: {
        IsCapturing(): boolean;
        GetState(): EMovieSceneCaptureProtocolState;
    };
    readonly __properties_UMovieSceneCaptureProtocolBase: {
        State: EMovieSceneCaptureProtocolState;
    };
    readonly __staticRegistry: 
        UMovieSceneCaptureProtocolBase['__static_UMovieSceneCaptureProtocolBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCaptureProtocolBase['__properties_UMovieSceneCaptureProtocolBase'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneImageCaptureProtocolBase extends UMovieSceneCaptureProtocolBase {
    readonly __staticRegistry: 
        UMovieSceneCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneCaptureProtocolBase['__propertyRegistry'];
}

declare interface UNullAudioCaptureProtocol extends UMovieSceneAudioCaptureProtocolBase {
    readonly __staticRegistry: 
        UMovieSceneAudioCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneAudioCaptureProtocolBase['__propertyRegistry'];
}

declare interface UUserDefinedCaptureProtocol extends UMovieSceneImageCaptureProtocolBase {
    readonly __static_UUserDefinedCaptureProtocol: {
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
        GenerateFilename(InFrameMetrics: FFrameMetrics): string;
    };
    readonly __properties_UUserDefinedCaptureProtocol: {
        World: UWorld;
    };
    readonly __staticRegistry: 
        UUserDefinedCaptureProtocol['__static_UUserDefinedCaptureProtocol'] &
        UMovieSceneImageCaptureProtocolBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserDefinedCaptureProtocol['__properties_UUserDefinedCaptureProtocol'] &
        UMovieSceneImageCaptureProtocolBase['__propertyRegistry'];
}

declare interface UUserDefinedImageCaptureProtocol extends UUserDefinedCaptureProtocol {
    readonly __static_UUserDefinedImageCaptureProtocol: {
        WriteImageToDisk(PixelData: FCapturedPixels, StreamID: FCapturedPixelsID, FrameMetrics: FFrameMetrics, bCopyImageData: boolean): void;
        GenerateFilenameForCurrentFrame(): string;
        GenerateFilenameForBuffer(Buffer: UTexture, StreamID: FCapturedPixelsID): string;
    };
    readonly __properties_UUserDefinedImageCaptureProtocol: {
        Format: EDesiredImageFormat;
        bEnableCompression: boolean;
        CompressionQuality: number;
    };
    readonly __staticRegistry: 
        UUserDefinedImageCaptureProtocol['__static_UUserDefinedImageCaptureProtocol'] &
        UUserDefinedCaptureProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserDefinedImageCaptureProtocol['__properties_UUserDefinedImageCaptureProtocol'] &
        UUserDefinedCaptureProtocol['__propertyRegistry'];
}

declare interface UVideoCaptureProtocol extends UFrameGrabberProtocol {
    readonly __properties_UVideoCaptureProtocol: {
        bUseCompression: boolean;
        CompressionQuality: number;
    };
    readonly __staticRegistry: 
        UFrameGrabberProtocol['__staticRegistry'];
    readonly __propertyRegistry: 
        UVideoCaptureProtocol['__properties_UVideoCaptureProtocol'] &
        UFrameGrabberProtocol['__propertyRegistry'];
}

