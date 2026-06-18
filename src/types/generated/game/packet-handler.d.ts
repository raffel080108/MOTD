declare interface UHandlerComponentFactory extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UPacketHandlerProfileConfig extends UObject {
    readonly __properties_UPacketHandlerProfileConfig: {
        Components: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UPacketHandlerProfileConfig['__properties_UPacketHandlerProfileConfig'] &
        UObject['__propertyRegistry'];
}

