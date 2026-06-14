declare interface UUI_MissionStat_PreviewItem_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ValueText: UTextBlock;
    TitleText: UTextBlock;
    StatProgressBarVert: UProgressBar;
    ClassIcon_BG_1: UUI_MaskedImage_C;
    ClassIcon_BG: UUI_MaskedImage_C;
    ClassIcon: UUI_MaskedImage_C;
    MissionStat: UMissionStat;
    characterID: UPlayerCharacterID;
    TargetPct: number;
    AnimTime: number;
    PreConstruct(IsDesignTime: boolean): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    SetMissionStat(MissionStat: UMissionStat): void;
    ExecuteUbergraph_UI_MissionStat_PreviewItem(EntryPoint: number): void;
}
declare const UUI_MissionStat_PreviewItem_C: UUI_MissionStat_PreviewItem_C;

