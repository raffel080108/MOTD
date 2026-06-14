declare interface UITM_RestoreSave_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DATA_Header: UTextBlock;
    DATA_Content: UTextBlock;
    buttons: UHorizontalBox;
    BTN_Yes: UBasic_ButtonScalable2_C;
    BTN_No: UBasic_ButtonScalable2_C;
    BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
    AnimShow: UWidgetAnimation;
    ImageReady: FITM_RestoreSave_CImageReady;
    OnShowRestoreSaveClicked: FITM_RestoreSave_COnShowRestoreSaveClicked;
    ShowWindow(): void;
    BndEvt__BTN_Yes_K2Node_ComponentBoundEvent_19_OnClicked__DelegateSignature(): void;
    BndEvt__BTN_No_K2Node_ComponentBoundEvent_28_OnClicked__DelegateSignature(): void;
    HideUIDelayed(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_RestoreSave(EntryPoint: number): void;
    OnShowRestoreSaveClicked__DelegateSignature(): void;
    ImageReady__DelegateSignature(URL: string | FString): void;
}
declare const UITM_RestoreSave_C: UITM_RestoreSave_C;

