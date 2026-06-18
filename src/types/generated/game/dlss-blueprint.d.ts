declare interface UDLSSLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UDLSSLibrary: {
        SetDLSSMode(WorldContextObject: UObject, DLSSMode: UDLSSMode): void;
        QueryDLSSSupport(): UDLSSSupport;
        QueryDLSSRRSupport(): UDLSSSupport;
        IsRayTracingAvailable(): boolean;
        IsDLSSSupported(): boolean;
        IsDLSSRRSupported(): boolean;
        IsDLSSRREnabled(): boolean;
        IsDLSSModeSupported(DLSSMode: UDLSSMode): boolean;
        IsDLSSEnabled(): boolean;
        IsDLAAEnabled(): boolean;
        GetSupportedDLSSModes(): UDLSSMode[];
        GetDLSSScreenPercentageRange(MinScreenPercentage: number, MaxScreenPercentage: number): void;
        GetDLSSRRMinimumDriverVersion(MinDriverVersionMajor: number, MinDriverVersionMinor: number): void;
        GetDLSSModeInformation(DLSSMode: UDLSSMode, ScreenResolution: FVector2D, bIsSupported: boolean, OptimalScreenPercentage: number, bIsFixedScreenPercentage: boolean, MinScreenPercentage: number, MaxScreenPercentage: number, OptimalSharpness: number): void;
        GetDLSSMode(): UDLSSMode;
        GetDLSSMinimumDriverVersion(MinDriverVersionMajor: number, MinDriverVersionMinor: number): void;
        GetDefaultDLSSMode(): UDLSSMode;
        EnableDLSSRR(bEnabled: boolean): void;
        EnableDLSS(bEnabled: boolean): void;
        EnableDLAA(bEnabled: boolean): void;
    };
    readonly __staticRegistry: 
        UDLSSLibrary['__static_UDLSSLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

