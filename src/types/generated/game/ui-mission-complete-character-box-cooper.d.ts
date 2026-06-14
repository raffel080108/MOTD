declare interface UUI_MissionComplete_CharacterBox_Cooper_C extends UUI_MissionComplete_CharacterBoxBase_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RunHistory_BasicStats: UUI_RunHistory_BasicStats_C;
    UI_MissionComplete_CooperIcon: UUI_MissionComplete_CooperIcon_C;
    Menu_CooperStatBlock: UMenu_CooperStatBlock_C;
    Data_CharacterClass: UTextBlock;
    InitFromBuild(Build: FParsedRunHistoryEntry): void;
    RefreshDamageStats(BasicStats: FRunHistoryBasicCooperStats): void;
    BeginCounting(): void;
    SetBuildVisibility(ShouldSeeBuild: boolean): void;
    Init(PlayerState: AFSDPlayerState): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnSharedRunDataReceived_Event(SharedData: FSharedRunData): void;
    ExecuteUbergraph_UI_MissionComplete_CharacterBox_Cooper(EntryPoint: number): void;
}
declare const UUI_MissionComplete_CharacterBox_Cooper_C: UUI_MissionComplete_CharacterBox_Cooper_C;

