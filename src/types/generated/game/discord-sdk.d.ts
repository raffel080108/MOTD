declare interface FDiscordUserDataSDK {
    UserId: FString;
    Username: FString;
    discriminator: FString;
    avatar: FString;
}
declare const FDiscordUserDataSDK: FDiscordUserDataSDK;

declare interface UDiscordSDKInterface extends UGameInstanceSubsystem {
    OnJoinRequest: FDiscordSDKInterfaceOnJoinRequest;
    RejectInvite(UserId: string | FString): void;
    IgnoreInvite(UserId: string | FString): void;
    Get(WorldContextObject: UObject): UDiscordSDKInterface;
    AcceptInvite(UserId: string | FString): void;
}
declare const UDiscordSDKInterface: UDiscordSDKInterface;

