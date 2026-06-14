declare interface UMenu_RestoreSaves_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WaitinForCloudCircularThrobber: UCircularThrobber;
    SavesScrollBox: UScrollBox;
    RetrieveText: UTextBlock;
    RetrieveCloudBox: UVerticalBox;
    RefreshButton: UBasic_ButtonScalable2_C;
    LoadingCloudsaves: UCircularThrobber;
    ITM_RestoreSaveCategoryList_Entry: UITM_RestoreSaveCategoryList_Entry_C;
    FailedCloudText: UTextBlock;
    CurrentSave_Entry: UITM_RestoreSaveList_Entry_C;
    Basic_Menu_ColorBar: UBasic_Menu_ColorBar_C;
    TimeoutTimerHandle: FTimerHandle;
    IsShowing: boolean;
    ShowDownloadError(): void;
    ShowDownloadSuccess(): void;
    LoadCloudSaveList(): void;
    ClearCloudSaveList(): void;
    CreateCloudSaveList(): void;
    Construct(): void;
    Back(): void;
    OnShown(): void;
    OnClosed(): void;
    BndEvt__LoadMoreCloudsavesButton_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    ReceiveOkCommand(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ReEnableRefreshButton(): void;
    DownloadTimeout(): void;
    DownloadComplete(success: boolean): void;
    FailWithDelay(): void;
    ExecuteUbergraph_Menu_RestoreSaves(EntryPoint: number): void;
}
declare const UMenu_RestoreSaves_C: UMenu_RestoreSaves_C;

