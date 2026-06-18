declare interface UAndroidFileServerBPLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAndroidFileServerBPLibrary: {
        StopFileServer(bUSB: boolean, bNetwork: boolean): boolean;
        StartFileServer(bUSB: boolean, bNetwork: boolean, Port: number): boolean;
        IsFileServerRunning(): EAFSActiveType;
    };
    readonly __staticRegistry: 
        UAndroidFileServerBPLibrary['__static_UAndroidFileServerBPLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

