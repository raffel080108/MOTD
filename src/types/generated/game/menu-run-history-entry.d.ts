declare interface UMenu_RunHistoryEntry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_RunHistoryDate: UUI_RunHistoryDate_C;
    UI_RunHistory_MissionStatus: UUI_RunHistory_MissionStatus_C;
    UI_RunHistory_BasicStats: UUI_RunHistory_BasicStats_C;
    UI_BXE_EquippedItems: UUI_BXE_EquippedItems_C;
    TeamMatesContainer: UHorizontalBox;
    ITM_CharacterIcon: UITM_CharacterIcon_C;
    HUD_BXE_Unlocks: UHUD_BXE_Unlocks_C;
    HUD_BXE_Artifacts: UHUD_BXE_Artifacts_C;
    FacilityDescription_Text: UTextBlock;
    Button_46: UButton;
    Background_Image: UImage;
    Index: number;
    OnEntryClicked: FMenu_RunHistoryEntry_COnEntryClicked;
    SelectedPlayerId: number;
    SetEquippedItems(Items: TArray<FUnlockableItemData>): void;
    SetFacilityText(RunTemplate: URunTemplate): void;
    SetRunData(RunData: FParsedRunHistoryEntry, Index: number): void;
    SetMissionStatus(SharedRunInfo: FSharedRunData): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Menu_RunHistoryEntry_Button_46_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Menu_RunHistoryEntry(EntryPoint: number): void;
    OnEntryClicked__DelegateSignature(Index: number): void;
}
declare const UMenu_RunHistoryEntry_C: UMenu_RunHistoryEntry_C;

