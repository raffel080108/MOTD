declare interface UWmfMediaSettings extends UObject {
    readonly __properties_UWmfMediaSettings: {
        AllowNonStandardCodecs: boolean;
        LowLatency: boolean;
        NativeAudioOut: boolean;
        HardwareAcceleratedVideoDecoding: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWmfMediaSettings['__properties_UWmfMediaSettings'] &
        UObject['__propertyRegistry'];
}

