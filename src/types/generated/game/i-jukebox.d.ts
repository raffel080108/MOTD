declare interface IIJukebox_C extends IInterface {
    readonly __static_IIJukebox_C: {
        TryStartJukebox(Player: APlayerCharacter): void;
        StopJukebox(): void;
    };
    readonly __staticRegistry: 
        IIJukebox_C['__static_IIJukebox_C'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

