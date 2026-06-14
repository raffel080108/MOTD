declare interface UUI_MissionComplete_CharacterBox_C extends UUI_MissionComplete_CharacterBoxBase_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RunHistory_BasicStats: UUI_RunHistory_BasicStats_C;
    UI_MissionComplete_RankLevel: UUI_MissionComplete_RankLevel_C;
    Menu_CharacterStatBlock: UMenu_CharacterEquipmentBlock_C;
    DATA_playerName: UTextBlock;
    Data_CharacterClass: UTextBlock;
    BTN_Gamercard: UButton;
    InitFromBuild(BuildData: FParsedCharacterBuildData, BasicStats: FRunHistoryBasicCharacterStats): void;
    BeginCounting(): void;
    Init(PlayerState: AFSDPlayerState): void;
    SetBuildVisibility(ShouldSeeBuild: boolean): void;
    BndEvt__UI_MissionComplete_RankLevel_K2Node_ComponentBoundEvent_0_CounterAnimFinished__DelegateSignature(): void;
    BndEvt__Button_52_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnSharedRunDataReceived_Event(SharedData: FSharedRunData): void;
    OnStatBlockRefreshed(): void;
    ExecuteUbergraph_UI_MissionComplete_CharacterBox(EntryPoint: number): void;
}
declare const UUI_MissionComplete_CharacterBox_C: UUI_MissionComplete_CharacterBox_C;

