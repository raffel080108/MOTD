declare interface UUI_MissionComplete_RankLevel_C extends UMissionPlayerAndCharacterWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    XP_bar: UProgressBar;
    TextBlock_Level: UTextBlock;
    Image_0: UImage;
    ICON_Rank_C_0: UICON_Rank_C;
    BorderTop: UImage;
    BorderCenter: UImage;
    BorderBottom: UImage;
    CounterAnimFinished: FUI_MissionComplete_RankLevel_CCounterAnimFinished;
    StartTime: number;
    SetBorderColor(InColorAndOpacity: FLinearColor): void;
    SetRankStarsAndLevel(Rank: number, Stars: number, Level: number, LevelProgress: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Begin(PlayerState: AFSDPlayerState): void;
    Finish(PlayerState: AFSDPlayerState): void;
    PingPlayerRank(): void;
    UpdateValues(PlayerRank: number, PlayerStars: number, CharacterLevel: number, CharacterProgress: number): void;
    PingCharacterLevel(Level: number, Stars: number): void;
    ExecuteUbergraph_UI_MissionComplete_RankLevel(EntryPoint: number): void;
    CounterAnimFinished__DelegateSignature(): void;
}
declare const UUI_MissionComplete_RankLevel_C: UUI_MissionComplete_RankLevel_C;

