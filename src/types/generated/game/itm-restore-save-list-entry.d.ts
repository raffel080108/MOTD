declare interface UITM_RestoreSaveList_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_TimeStamp: UTextBlock;
    TXT_SlotName: UTextBlock;
    Text_Rank: UTextBlock;
    Text_Playtime: UTextBlock;
    Text_GameVersion: UTextBlock;
    IMG_MissionIcon: UImage;
    ImageRank: UImage;
    Image_2: UImage;
    Image: UImage;
    Button_0: UButton;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    Session: FBlueprintSessionResult;
    MutatorToolTip: UBasic_ToolTip_C;
    WarningToolTip: UBasic_ToolTip_C;
    BiomeToolTip: UBiome_ToolTip_C;
    CurrentIndex: number;
    CurrentName: FString;
    ToolTip: UBasic_ToolTip_C;
    TextForTooltip: FText;
    Generation: int64;
    IsActiveSave: boolean;
    SetValuesFromCloudSave(MetaData: FCloudSaveMetadata): void;
    UpdateName(): void;
    CreateToolTipWidget(): UWidget;
    SetValues(PlayerRank: number, playtime: int64, Timestamp: string | FString, Generation: int64, Version: number): void;
    OnFailure_23C135EA40C299E24DF9B5A6B28B48A5(): void;
    OnSuccess_23C135EA40C299E24DF9B5A6B28B48A5(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_10_OnButtonClickedEvent__DelegateSignature(): void;
    Answer(Yes: boolean): void;
    DownloadSavegameDelegate_Event(success: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_RestoreSaveList_Entry(EntryPoint: number): void;
}
declare const UITM_RestoreSaveList_Entry_C: UITM_RestoreSaveList_Entry_C;

