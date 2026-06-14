declare interface UWND_Vote_C extends UVoteWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RootCanvas: UCanvasPanel;
    HUD_MutatorsAndWarnings_3: UHUD_MutatorsAndRiskVectors_C;
    HUD_Chat: UHUD_Chat_C;
    HideMouse_Overlay: UOverlay;
    Header_VBox: UVerticalBox;
    FadeToBlack_Img: UImage;
    EntriesBox: UOverlay;
    CountDown_Overlay: UOverlay;
    CountDown_Label: UBasic_Label_C;
    AnimIntro: UWidgetAnimation;
    AnimFadeout: UWidgetAnimation;
    VoteOptionWidgets: TArray<UUI_Vote_Entry_C>;
    Cursors: Record<string | number | symbol, UUI_BXE_Negotiation_Cursor_C>;
    CountdownRemaining: number;
    TickCountDown(InDeltaSeconds: number): void;
    OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    UpdateCursor(InPlayer: AFSDPlayerState, InPosition: FVector2D): void;
    UpdateButtons(): void;
    CreateVoteButtons(Vote_Options: TArray<FVoteOptionInstance>): void;
    ReceiveDataChanged(): void;
    ReceiveParticipantCursorChanged(InPlayerState: AFSDPlayerState, InViewPortPos: FVector2D): void;
    ReceiveVoteOptionsChanged(InVoteOptions: TArray<FVoteOptionInstance>): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnShown(): void;
    ReceiveVotingCompleted(InWinningIndex: number): void;
    ReceiveTimerStarted(): void;
    HideMouse(): void;
    OnChatClosed(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    ExecuteUbergraph_WND_Vote(EntryPoint: number): void;
}
declare const UWND_Vote_C: UWND_Vote_C;

