declare interface UStartupScreenSettings extends UDeveloperSettings {
    readonly __properties_UStartupScreenSettings: {
        MinimumDisplayTime: number;
        MoviesToPlay: string[];
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UStartupScreenSettings['__properties_UStartupScreenSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

