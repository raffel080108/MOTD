declare interface UUI_RunHistory_BasicStats_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Grid: UGridPanel;
    DamageEntry: UUI_BasicStats_Entry_C;
    ColumnsPerRow: number;
    PreviewCooper: boolean;
    DisplayDamage: boolean;
    DisplayGrid: boolean;
    GetHealthValues(RunHistoryBasicCharacterStats: FRunHistoryBasicCharacterStats, Values: TArray<FBP_BasicStatsContent>): void;
    GetAllCharacterValues(BasicStats: FRunHistoryBasicCharacterStats, Damage: number, Overkill: number, Values: TArray<FBP_BasicStatsContent>): void;
    GetAllCooperValues(BasicStats: FRunHistoryBasicCooperStats, Damage: number, Overkill: number, Values: TArray<FBP_BasicStatsContent>): void;
    SetData(Damage: number, Overkill: number, InputPin: TArray<FBP_BasicStatsContent>): void;
    SetCooperData(BasicStats: FRunHistoryBasicCooperStats): void;
    SetCharacterData(BasicStats: FRunHistoryBasicCharacterStats): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_RunHistory_BasicStats(EntryPoint: number): void;
}
declare const UUI_RunHistory_BasicStats_C: UUI_RunHistory_BasicStats_C;

