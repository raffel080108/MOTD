declare interface UUI_PlayerSpeaking_List_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Box_Vertical: UVerticalBox;
    Box_Horizontal: UHorizontalBox;
    Entries: TArray<UUI_PlayerSpeaking_WithName_C>;
    Vertical: boolean;
    PlayerStates: TArray<AFSDPlayerState>;
    CreateEntries(): void;
    GetPlayerStates(OutStates: TArray<AFSDPlayerState>): void;
    GetPlayerState(Index: number, State: AFSDPlayerState): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    UpdateEntries(): void;
    OnPlayerJoined(PlayerState: AFSDPlayerState): void;
    OnPlayerLeave(PlayerState: AFSDPlayerState): void;
    ExecuteUbergraph_UI_PlayerSpeaking_List(EntryPoint: number): void;
}
declare const UUI_PlayerSpeaking_List_C: UUI_PlayerSpeaking_List_C;

