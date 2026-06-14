declare interface IAudioLinkBlueprintInterface extends IInterface {
    StopLink(): void;
    SetLinkSound(NewSound: USoundBase): void;
    PlayLink(StartTime: number): void;
    IsLinkPlaying(): boolean;
}
declare const IAudioLinkBlueprintInterface: IAudioLinkBlueprintInterface;

