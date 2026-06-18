declare interface FImageWriteOptions {
    Format: EDesiredImageFormat;
    OnComplete: FImageWriteOptionsOnComplete;
    CompressionQuality: number;
    bOverwriteFile: boolean;
    bAsync: boolean;
}

declare interface UImageWriteBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UImageWriteBlueprintLibrary: {
        ExportToDisk(Texture: UTexture, Filename: string, Options: FImageWriteOptions): void;
    };
    readonly __staticRegistry: 
        UImageWriteBlueprintLibrary['__static_UImageWriteBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

