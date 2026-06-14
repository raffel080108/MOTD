declare interface UPopup_ExitGame_C extends UYesNoPromptWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_2: UTextBlock;
    ITM_SocialMediaButtons_1: UITM_SocialMediaButtons_C;
    Image_Background_Smoke: UImage;
    Image_Background: UImage;
    Image_411: UImage;
    Image_307: UImage;
    Image_3: UImage;
    Image_2: UImage;
    Image_1: UImage;
    Image: UImage;
    DATA_Header_2: UTextBlock;
    DATA_Header_1: UTextBlock;
    BTN_Yes: UBasic_ButtonScalable2_C;
    BTN_SignUp: UBasic_ButtonScalable2_C;
    BG_Frame: UImage;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    OnShow(Title: FText, Message: FText): void;
    BndEvt__BTN_Yes_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Yes(): void;
    No(): void;
    BndEvt__BTN_Survey2_K2Node_ComponentBoundEvent_2_OnClicked__DelegateSignature(): void;
    ExecuteUbergraph_Popup_ExitGame(EntryPoint: number): void;
}
declare const UPopup_ExitGame_C: UPopup_ExitGame_C;

