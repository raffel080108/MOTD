declare interface UStreamlineLibraryDLSSG extends UBlueprintFunctionLibrary {
    SetDLSSGMode(DLSSGMode: EStreamlineDLSSGMode): void;
    QueryDLSSGSupport(): EStreamlineFeatureSupport;
    IsDLSSGSupported(): boolean;
    IsDLSSGModeSupported(DLSSGMode: EStreamlineDLSSGMode): boolean;
    GetSupportedDLSSGModes(): TArray<EStreamlineDLSSGMode>;
    GetDLSSGMode(): EStreamlineDLSSGMode;
    GetDLSSGFrameTiming(FrameRateInHertz: number, FramesPresented: number): void;
    GetDefaultDLSSGMode(): EStreamlineDLSSGMode;
}
declare const UStreamlineLibraryDLSSG: UStreamlineLibraryDLSSG;

