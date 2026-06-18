declare interface UNetConnectionEOS extends UIpConnection {
    readonly __staticRegistry: 
        UIpConnection['__staticRegistry'];
    readonly __propertyRegistry: 
        UIpConnection['__propertyRegistry'];
}

declare interface UNetDriverEOS extends UIpNetDriver {
    readonly __properties_UNetDriverEOS: {
        bIsPassthrough: boolean;
        bIsUsingP2PSockets: boolean;
    };
    readonly __staticRegistry: 
        UIpNetDriver['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetDriverEOS['__properties_UNetDriverEOS'] &
        UIpNetDriver['__propertyRegistry'];
}

declare interface UNetDriverEOSBase extends UNetDriverEOS {
    readonly __staticRegistry: 
        UNetDriverEOS['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetDriverEOS['__propertyRegistry'];
}

