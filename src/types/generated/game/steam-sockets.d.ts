declare interface USteamSocketsNetConnection extends UNetConnection {
    readonly __staticRegistry: 
        UNetConnection['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetConnection['__propertyRegistry'];
}

declare interface USteamSocketsNetDriver extends UNetDriver {
    readonly __staticRegistry: 
        UNetDriver['__staticRegistry'];
    readonly __propertyRegistry: 
        UNetDriver['__propertyRegistry'];
}

