declare interface UITDSpatializationSourceSettings extends USpatializationPluginSourceSettingsBase {
    readonly __properties_UITDSpatializationSourceSettings: {
        bEnableILD: boolean;
        PanningIntensityOverDistance: FRuntimeFloatCurve;
    };
    readonly __staticRegistry: 
        USpatializationPluginSourceSettingsBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UITDSpatializationSourceSettings['__properties_UITDSpatializationSourceSettings'] &
        USpatializationPluginSourceSettingsBase['__propertyRegistry'];
}

