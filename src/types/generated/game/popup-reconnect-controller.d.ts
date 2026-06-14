declare interface UPopup_ReconnectController_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    BlurBackground: UBlurBackground_C;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Basic_ButtonScalable2: UBasic_ButtonScalable2_C;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    BndEvt__Basic_ButtonScalable2_K2Node_ComponentBoundEvent_7_OnClicked__DelegateSignature(): void;
    Close(): void;
    ExecuteUbergraph_Popup_ReconnectController(EntryPoint: number): void;
}
declare const UPopup_ReconnectController_C: UPopup_ReconnectController_C;

