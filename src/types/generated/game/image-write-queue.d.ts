declare interface FImageWriteOptions {
    Format: EDesiredImageFormat;
    OnComplete: FImageWriteOptionsOnComplete;
    CompressionQuality: number;
    bOverwriteFile: boolean;
    bAsync: boolean;
}
declare const FImageWriteOptions: FImageWriteOptions;

declare interface UImageWriteBlueprintLibrary extends UBlueprintFunctionLibrary {
    ExportToDisk(Texture: UTexture, Filename: string | FString, Options: FImageWriteOptions): void;
}
declare const UImageWriteBlueprintLibrary: UImageWriteBlueprintLibrary;

