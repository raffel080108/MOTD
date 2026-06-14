declare interface UMenu_ServerStatus_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WND_MissionBar_BXE: UWND_MissionBar_BXE_C;
    CharSelect_Countdown: ULobby_BarTop_Countdown_C;
    Construct(): void;
    ChangeVisibilityOnMission(entered: boolean): void;
    ExecuteUbergraph_Menu_ServerStatus(EntryPoint: number): void;
}
declare const UMenu_ServerStatus_C: UMenu_ServerStatus_C;

