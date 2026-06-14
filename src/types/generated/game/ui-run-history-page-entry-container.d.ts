declare interface UUI_RunHistoryPage_EntryContainer_C extends UUI_RunHistoryPage_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_GradientMasked_Image: UUI_GradientMasked_Image_C;
    RunEntryContainer_VerticalBox: UScrollBox;
    RecentRunsText: UTextBlock;
    OnWidgetSelected: FUI_RunHistoryPage_EntryContainer_COnWidgetSelected;
    Init(): void;
    OnCharacterDataLoaded_Event(Entry: FParsedRunHistoryEntry, HistoryIndex: number): void;
    OnEntryClicked_Event(Index: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_RunHistoryPage_EntryContainer(EntryPoint: number): void;
    OnWidgetSelected__DelegateSignature(HistoryIndex: number): void;
}
declare const UUI_RunHistoryPage_EntryContainer_C: UUI_RunHistoryPage_EntryContainer_C;

