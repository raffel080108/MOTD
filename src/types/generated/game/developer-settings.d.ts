declare interface FPerPlatformSettings {
    Settings: TArray<UPlatformSettings>;
}
declare const FPerPlatformSettings: FPerPlatformSettings;

declare interface FPlatformSettingsInstances {
    PlatformInstance: UPlatformSettings;
    OtherPlatforms: Record<FName, UPlatformSettings>;
}
declare const FPlatformSettingsInstances: FPlatformSettingsInstances;

declare interface UDeveloperSettings extends UObject {

}
declare const UDeveloperSettings: UDeveloperSettings;

declare interface UDeveloperSettingsBackedByCVars extends UDeveloperSettings {

}
declare const UDeveloperSettingsBackedByCVars: UDeveloperSettingsBackedByCVars;

declare interface UPlatformSettings extends UObject {

}
declare const UPlatformSettings: UPlatformSettings;

declare interface UPlatformSettingsManager extends UObject {
    SettingsMap: Record<string | number | symbol, FPlatformSettingsInstances>;
}
declare const UPlatformSettingsManager: UPlatformSettingsManager;

