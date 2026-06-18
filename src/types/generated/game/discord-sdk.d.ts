declare interface FDiscordUserDataSDK {
    UserId: string;
    Username: string;
    discriminator: string;
    avatar: string;
}

declare interface UDiscordSDKInterface extends UGameInstanceSubsystem {
    readonly __static_UDiscordSDKInterface: {
        RejectInvite(UserId: string): void;
        IgnoreInvite(UserId: string): void;
        Get(WorldContextObject: UObject): UDiscordSDKInterface;
        AcceptInvite(UserId: string): void;
    };
    readonly __properties_UDiscordSDKInterface: {
        OnJoinRequest: FDiscordSDKInterfaceOnJoinRequest;
    };
    readonly __staticRegistry: 
        UDiscordSDKInterface['__static_UDiscordSDKInterface'] &
        UGameInstanceSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UDiscordSDKInterface['__properties_UDiscordSDKInterface'] &
        UGameInstanceSubsystem['__propertyRegistry'];
}

