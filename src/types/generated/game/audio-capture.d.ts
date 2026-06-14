declare interface FAudioCaptureDeviceInfo {
    DeviceName: FName;
    NumInputChannels: number;
    SampleRate: number;
}
declare const FAudioCaptureDeviceInfo: FAudioCaptureDeviceInfo;

declare interface FAudioInputDeviceInfo {
    DeviceName: FString;
    DeviceID: FString;
    InputChannels: number;
    PreferredSampleRate: number;
    bSupportsHardwareAEC: boolean;
}
declare const FAudioInputDeviceInfo: FAudioInputDeviceInfo;

declare interface UAudioCapture extends UAudioGenerator {
    StopCapturingAudio(): void;
    StartCapturingAudio(): void;
    IsCapturingAudio(): boolean;
    GetAudioCaptureDeviceInfo(OutInfo: FAudioCaptureDeviceInfo): boolean;
}
declare const UAudioCapture: UAudioCapture;

declare interface UAudioCaptureBlueprintLibrary extends UBlueprintFunctionLibrary {
    GetAvailableAudioInputDevices(WorldContextObject: UObject, OnObtainDevicesEvent: FGetAvailableAudioInputDevicesOnObtainDevicesEvent): void;
    Conv_AudioInputDeviceInfoToString(Info: FAudioInputDeviceInfo): FString;
}
declare const UAudioCaptureBlueprintLibrary: UAudioCaptureBlueprintLibrary;

declare interface UAudioCaptureComponent extends USynthComponent {
    JitterLatencyFrames: number;
}
declare const UAudioCaptureComponent: UAudioCaptureComponent;

declare interface UAudioCaptureFunctionLibrary extends UBlueprintFunctionLibrary {
    CreateAudioCapture(): UAudioCapture;
}
declare const UAudioCaptureFunctionLibrary: UAudioCaptureFunctionLibrary;

