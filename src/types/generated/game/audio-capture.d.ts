declare interface FAudioCaptureDeviceInfo {
    DeviceName: string;
    NumInputChannels: number;
    SampleRate: number;
}

declare interface FAudioInputDeviceInfo {
    DeviceName: string;
    DeviceID: string;
    InputChannels: number;
    PreferredSampleRate: number;
    bSupportsHardwareAEC: boolean;
}

declare interface UAudioCapture extends UAudioGenerator {
    readonly __static_UAudioCapture: {
        StopCapturingAudio(): void;
        StartCapturingAudio(): void;
        IsCapturingAudio(): boolean;
        GetAudioCaptureDeviceInfo(OutInfo: FAudioCaptureDeviceInfo): boolean;
    };
    readonly __staticRegistry: 
        UAudioCapture['__static_UAudioCapture'] &
        UAudioGenerator['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioGenerator['__propertyRegistry'];
}

declare interface UAudioCaptureBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAudioCaptureBlueprintLibrary: {
        GetAvailableAudioInputDevices(WorldContextObject: UObject, OnObtainDevicesEvent: FGetAvailableAudioInputDevicesOnObtainDevicesEvent): void;
        Conv_AudioInputDeviceInfoToString(Info: FAudioInputDeviceInfo): string;
    };
    readonly __staticRegistry: 
        UAudioCaptureBlueprintLibrary['__static_UAudioCaptureBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UAudioCaptureComponent extends USynthComponent {
    readonly __properties_UAudioCaptureComponent: {
        JitterLatencyFrames: number;
    };
    readonly __staticRegistry: 
        USynthComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioCaptureComponent['__properties_UAudioCaptureComponent'] &
        USynthComponent['__propertyRegistry'];
}

declare interface UAudioCaptureFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAudioCaptureFunctionLibrary: {
        CreateAudioCapture(): UAudioCapture;
    };
    readonly __staticRegistry: 
        UAudioCaptureFunctionLibrary['__static_UAudioCaptureFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

