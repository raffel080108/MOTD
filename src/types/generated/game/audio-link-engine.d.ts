declare interface IAudioLinkBlueprintInterface extends IInterface {
    readonly __static_IAudioLinkBlueprintInterface: {
        StopLink(): void;
        SetLinkSound(NewSound: USoundBase): void;
        PlayLink(StartTime: number): void;
        IsLinkPlaying(): boolean;
    };
    readonly __staticRegistry: 
        IAudioLinkBlueprintInterface['__static_IAudioLinkBlueprintInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

