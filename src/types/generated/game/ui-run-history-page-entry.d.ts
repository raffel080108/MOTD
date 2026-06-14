declare interface UUI_RunHistoryPage_Entry_C extends UUI_RunHistoryPage_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RunHistoryDate: UUI_RunHistoryDate_C;
    UI_RunHistory_MissionStatus: UUI_RunHistory_MissionStatus_C;
    UI_MissionComplete_CharacterBar: UUI_MissionComplete_CharacterBar_C;
    EDITOR_ONLY_REMOVE_ENTRY: UBasic_ButtonScalable2_C;
    Column_SummaryDesc: UUI_MissionComplete_SummaryDescription_Run_C;
    Basic_Popup_YesNoPrompt: UBasic_Popup_YesNoPrompt_C;
    BackButton: UBasic_ButtonScalable2_C;
    SelectedHistoryIndex: number;
    HistoryEntry: FParsedRunHistoryEntry;
    OnEntryRemoved: FUI_RunHistoryPage_Entry_COnEntryRemoved;
    SetData(RunHistoryIndex: number): void;
    BndEvt__Menu_RunHistory_Description_BackButton_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__Menu_RunHistory_Description_EDITOR_ONLY_REMOVE_ENTRY_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    OnYesNoClicked_Event(Yes: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_RunHistoryPage_Entry(EntryPoint: number): void;
    OnEntryRemoved__DelegateSignature(): void;
}
declare const UUI_RunHistoryPage_Entry_C: UUI_RunHistoryPage_Entry_C;

