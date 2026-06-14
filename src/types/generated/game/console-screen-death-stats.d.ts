declare interface UConsoleScreen_DeathStats_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_DeathStats_View: UUI_DeathStats_View_C;
    Empty: UCanvasPanel;
    ConsoleScreen_Notification: UConsoleScreen_Notification_C;
    Player: ABP_PlayerController_SpaceRig_C;
    SetStatsOwner(Player_State: AFSDPlayerState): void;
    ExecuteUbergraph_ConsoleScreen_DeathStats(EntryPoint: number): void;
}
declare const UConsoleScreen_DeathStats_C: UConsoleScreen_DeathStats_C;

