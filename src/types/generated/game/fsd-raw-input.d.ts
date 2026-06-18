declare interface FFSDRawInputDeviceAxisProperties {
    bEnabled: boolean;
    Key: FKey;
    bInverted: boolean;
    bGamepadStick: boolean;
    Offset: number;
    IsPlayStationDPad: boolean;
}

declare interface FFSDRawInputDeviceButtonProperties {
    bEnabled: boolean;
    Key: FKey;
}

declare interface FFSDRawInputDeviceConfiguration {
    DeviceType: EFSDRawInputControllerType;
    VendorID: string;
    ProductId: string;
    VersionID: number;
    AxisProperties: FFSDRawInputDeviceAxisProperties[];
    ButtonProperties: FFSDRawInputDeviceButtonProperties[];
}

declare interface FFSDRegisteredDeviceInfo {
    Handle: number;
    VendorID: number;
    ProductId: number;
    VersionID: number;
    DeviceName: string;
}

declare interface UFSDRawInputFunctionLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UFSDRawInputFunctionLibrary: {
        GetRegisteredDevices(): FFSDRegisteredDeviceInfo[];
    };
    readonly __staticRegistry: 
        UFSDRawInputFunctionLibrary['__static_UFSDRawInputFunctionLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UFSDRawInputSettings extends UDeveloperSettings {
    readonly __properties_UFSDRawInputSettings: {
        DeviceConfigurations: FFSDRawInputDeviceConfiguration[];
        bRegisterDefaultDevice: boolean;
        OnlyConnectConfiguredDevices: boolean;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UFSDRawInputSettings['__properties_UFSDRawInputSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

