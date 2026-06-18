declare interface FNamedInterface {
    InterfaceName: string;
    InterfaceObject: UObject;
}

declare interface FNamedInterfaceDef {
    InterfaceName: string;
    InterfaceClassName: string;
}

declare interface ITurnBasedMatchInterface extends IInterface {
    readonly __static_ITurnBasedMatchInterface: {
        OnMatchReceivedTurn(Match: string, bDidBecomeActive: boolean): void;
        OnMatchEnded(Match: string): void;
    };
    readonly __staticRegistry: 
        ITurnBasedMatchInterface['__static_ITurnBasedMatchInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UNamedInterfaces extends UObject {
    readonly __properties_UNamedInterfaces: {
        NamedInterfaces: FNamedInterface[];
        NamedInterfaceDefs: FNamedInterfaceDef[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UNamedInterfaces['__properties_UNamedInterfaces'] &
        UObject['__propertyRegistry'];
}

