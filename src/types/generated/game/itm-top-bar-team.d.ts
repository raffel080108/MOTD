declare interface UITM_TopBar_Team_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Members_Box: UStackBox;
    MemberWidgets: TArray<UITM_TopBar_Team_Member_C>;
    Update(): void;
    Construct(): void;
    OnPlayerJoined_Event(PlayerState: AFSDPlayerState): void;
    OnPlayerLeave_Event(PlayerState: AFSDPlayerState): void;
    ExecuteUbergraph_ITM_TopBar_Team(EntryPoint: number): void;
}
declare const UITM_TopBar_Team_C: UITM_TopBar_Team_C;

