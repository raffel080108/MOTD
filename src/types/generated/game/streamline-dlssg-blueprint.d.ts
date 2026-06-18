declare interface UStreamlineLibraryDLSSG extends UBlueprintFunctionLibrary {
    readonly __static_UStreamlineLibraryDLSSG: {
        SetDLSSGMode(DLSSGMode: EStreamlineDLSSGMode): void;
        QueryDLSSGSupport(): EStreamlineFeatureSupport;
        IsDLSSGSupported(): boolean;
        IsDLSSGModeSupported(DLSSGMode: EStreamlineDLSSGMode): boolean;
        GetSupportedDLSSGModes(): EStreamlineDLSSGMode[];
        GetDLSSGMode(): EStreamlineDLSSGMode;
        GetDLSSGFrameTiming(FrameRateInHertz: number, FramesPresented: number): void;
        GetDefaultDLSSGMode(): EStreamlineDLSSGMode;
    };
    readonly __staticRegistry: 
        UStreamlineLibraryDLSSG['__static_UStreamlineLibraryDLSSG'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

