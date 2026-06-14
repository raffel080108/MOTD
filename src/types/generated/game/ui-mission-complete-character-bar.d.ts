declare interface UUI_MissionComplete_CharacterBar_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    CharactersBar: UHorizontalBox;
    Character4: UUI_MissionComplete_CharacterBox_Cooper_C;
    Character3: UUI_MissionComplete_CharacterBox_C;
    Character2: UUI_MissionComplete_CharacterBox_C;
    Character1: UUI_MissionComplete_CharacterBox_C;
    ActiveCharacterWidgets: TArray<UUI_MissionComplete_CharacterBoxBase_C>;
    ShowBuilds: boolean;
    HasLoadedWidgets: boolean;
    SetShowBuildsWithoutRefresh(ShowBuilds: boolean): void;
    SetShowBuilds(ShowBuilds: boolean): void;
    SetDataFromEntry(RunHistoryEntry: FParsedRunHistoryEntry): void;
    OnCharacterStatsLoaded(): void;
    SetRunHistoryData(Entry: FParsedRunHistoryEntry): void;
    AddEntry_Internal(AddSpacer: boolean, Class: TSubclassOf<UUI_MissionComplete_CharacterBoxBase_C>, OutWidget: UUI_MissionComplete_CharacterBoxBase_C): void;
    ToggleShowBuilds(): void;
    SetData(): void;
    AddSpacerIf(Condition: boolean): void;
    OnCharacterStatsLoaded_Event(): void;
    ExecuteUbergraph_UI_MissionComplete_CharacterBar(EntryPoint: number): void;
}
declare const UUI_MissionComplete_CharacterBar_C: UUI_MissionComplete_CharacterBar_C;

