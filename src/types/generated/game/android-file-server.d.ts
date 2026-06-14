declare interface UAndroidFileServerBPLibrary extends UBlueprintFunctionLibrary {
    StopFileServer(bUSB: boolean, bNetwork: boolean): boolean;
    StartFileServer(bUSB: boolean, bNetwork: boolean, Port: number): boolean;
    IsFileServerRunning(): EAFSActiveType;
}
declare const UAndroidFileServerBPLibrary: UAndroidFileServerBPLibrary;

