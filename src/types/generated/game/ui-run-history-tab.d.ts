declare interface UUI_RunHistoryTab_C extends UUI_KPI_Tab_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher: UWidgetSwitcher;
    UI_RunHistoryPage_EntryContainer: UUI_RunHistoryPage_EntryContainer_C;
    UI_RunHistoryPage_Entry: UUI_RunHistoryPage_Entry_C;
    UI_RunHistoryPage_Empty: UUI_RunHistoryPage_Empty_C;
    OnPageSwap(toIndex: number): void;
    InitWidgetIndex(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    BndEvt__Menu_RunHistoryNew_UI_RunHistory_EntryContainer_K2Node_ComponentBoundEvent_1_OnWidgetSelected__DelegateSignature(HistoryIndex: number): void;
    OnEntryRemoved_Event(): void;
    ExecuteUbergraph_UI_RunHistoryTab(EntryPoint: number): void;
}
declare const UUI_RunHistoryTab_C: UUI_RunHistoryTab_C;

