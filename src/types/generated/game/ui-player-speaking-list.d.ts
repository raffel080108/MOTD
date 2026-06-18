declare interface UUI_PlayerSpeaking_List_C extends UUserWidget {
    readonly __static_UUI_PlayerSpeaking_List_C: {
        CreateEntries(): void;
        GetPlayerStates(OutStates: AFSDPlayerState[]): void;
        GetPlayerState(Index: number, State: AFSDPlayerState): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        UpdateEntries(): void;
        OnPlayerJoined(PlayerState: AFSDPlayerState): void;
        OnPlayerLeave(PlayerState: AFSDPlayerState): void;
        ExecuteUbergraph_UI_PlayerSpeaking_List(EntryPoint: number): void;
    };
    readonly __properties_UUI_PlayerSpeaking_List_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Box_Vertical: UVerticalBox;
        Box_Horizontal: UHorizontalBox;
        Entries: UUI_PlayerSpeaking_WithName_C[];
        Vertical: boolean;
        PlayerStates: AFSDPlayerState[];
    };
    readonly __staticRegistry: 
        UUI_PlayerSpeaking_List_C['__static_UUI_PlayerSpeaking_List_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_PlayerSpeaking_List_C['__properties_UUI_PlayerSpeaking_List_C'] &
        UUserWidget['__propertyRegistry'];
}

