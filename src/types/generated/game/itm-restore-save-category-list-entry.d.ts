declare interface UITM_RestoreSaveCategoryList_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_TimeStamp: UTextBlock;
    TXT_SaveName: UTextBlock;
    Text_StarDescription: UTextBlock;
    Text_RankDescription: UTextBlock;
    Text_CreditsDescription: UTextBlock;
    IMG_MissionIcon: UImage;
    Button_0: UButton;
    Session: FBlueprintSessionResult;
    Construct(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_10_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_ITM_RestoreSaveCategoryList_Entry(EntryPoint: number): void;
}
declare const UITM_RestoreSaveCategoryList_Entry_C: UITM_RestoreSaveCategoryList_Entry_C;

