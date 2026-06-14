declare interface FFSDRawInputDeviceAxisProperties {
    bEnabled: boolean;
    Key: FKey;
    bInverted: boolean;
    bGamepadStick: boolean;
    Offset: number;
    IsPlayStationDPad: boolean;
}
declare const FFSDRawInputDeviceAxisProperties: FFSDRawInputDeviceAxisProperties;

declare interface FFSDRawInputDeviceButtonProperties {
    bEnabled: boolean;
    Key: FKey;
}
declare const FFSDRawInputDeviceButtonProperties: FFSDRawInputDeviceButtonProperties;

declare interface FFSDRawInputDeviceConfiguration {
    DeviceType: EFSDRawInputControllerType;
    VendorID: FString;
    ProductId: FString;
    VersionID: number;
    AxisProperties: TArray<FFSDRawInputDeviceAxisProperties>;
    ButtonProperties: TArray<FFSDRawInputDeviceButtonProperties>;
}
declare const FFSDRawInputDeviceConfiguration: FFSDRawInputDeviceConfiguration;

declare interface FFSDRegisteredDeviceInfo {
    Handle: number;
    VendorID: number;
    ProductId: number;
    VersionID: number;
    DeviceName: FString;
}
declare const FFSDRegisteredDeviceInfo: FFSDRegisteredDeviceInfo;

declare interface UFSDRawInputFunctionLibrary extends UBlueprintFunctionLibrary {
    GetRegisteredDevices(): TArray<FFSDRegisteredDeviceInfo>;
}
declare const UFSDRawInputFunctionLibrary: UFSDRawInputFunctionLibrary;

declare interface UFSDRawInputSettings extends UDeveloperSettings {
    DeviceConfigurations: TArray<FFSDRawInputDeviceConfiguration>;
    bRegisterDefaultDevice: boolean;
    OnlyConnectConfiguredDevices: boolean;
}
declare const UFSDRawInputSettings: UFSDRawInputSettings;

