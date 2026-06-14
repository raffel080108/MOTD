declare interface UUI_DeathStats_View_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_3: UVerticalBox;
    TextBlock_1: UTextBlock;
    TextBlock_0: UTextBlock;
    StatsParent: UVerticalBox;
    PlayerName: UTextBlock;
    HealthInsuranceEvaluation: UTextBlock;
    Header: UVerticalBox;
    Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
    Basic_Menu_ColorBar_C_0: UBasic_Menu_ColorBar_C;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    MissionStatLines: TArray<UUI_InfirmaryStats_Item_C>;
    StoreModeStats: TArray<UMissionStat>;
    SelectedLine: UUI_InfirmaryStats_Item_C;
    StoreMode: boolean;
    StoreModePause: number;
    CategoryIcons: TArray<UTexture2D>;
    CategoryFilter: TArray<UTexture2D>;
    OwningPlayer: AFSDPlayerController;
    StopStoreMode: boolean;
    OwningState: AFSDPlayerState;
    Debug: boolean;
    SortStats(InStats: TArray<UMissionStat>, Categories: TArray<UTexture2D>, Sorted_Stats: TArray<UMissionStat>): void;
    GetMissionStats(Assets: TArray<UMissionStat>): void;
    SetStatsOwner(Player_State: AFSDPlayerState): void;
    ChangeName(NewName: string | FString): void;
    Rebuild(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_DeathStats_View(EntryPoint: number): void;
}
declare const UUI_DeathStats_View_C: UUI_DeathStats_View_C;

