declare interface UBasic_Popup_YesNoPrompt_C extends UYesNoPromptWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_MenuBackground: UITM_MenuBackground_C;
    DATA_Header: UTextBlock;
    DATA_Content: UTextBlock;
    BTN_Yes: UBasic_ButtonScalable2_C;
    BTN_No: UBasic_ButtonScalable2_C;
    BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
    Basic_ScrollBarBox: UBasic_ScrollBarBox_C;
    OnClickedYesNo: FBasic_Popup_YesNoPrompt_COnClickedYesNo;
    AllowUseOfCloseKey: boolean;
    TimeWhenShown: number;
    SetAllowUseOfCloseKey(AllowUse: boolean): void;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    OnShow(Title: FText, Message: FText): void;
    BndEvt__BTN_Yes_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    BndEvt__BTN_No_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Yes(): void;
    No(): void;
    OnClicked(Yes: boolean): void;
    ExecuteUbergraph_Basic_Popup_YesNoPrompt(EntryPoint: number): void;
    OnClickedYesNo__DelegateSignature(InYes: boolean): void;
}
declare const UBasic_Popup_YesNoPrompt_C: UBasic_Popup_YesNoPrompt_C;

