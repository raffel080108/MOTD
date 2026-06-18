declare interface FPerPlatformSettings {
    Settings: UPlatformSettings[];
}

declare interface FPlatformSettingsInstances {
    PlatformInstance: UPlatformSettings;
    OtherPlatforms: TMap<string, UPlatformSettings>;
}

declare interface UDeveloperSettings extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDeveloperSettingsBackedByCVars extends UDeveloperSettings {
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UPlatformSettings extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPlatformSettingsManager extends UObject {
    readonly __properties_UPlatformSettingsManager: {
        SettingsMap: TMap<TSubclassOf<UPlatformSettings>, FPlatformSettingsInstances>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPlatformSettingsManager['__properties_UPlatformSettingsManager'] &
        UObject['__propertyRegistry'];
}

