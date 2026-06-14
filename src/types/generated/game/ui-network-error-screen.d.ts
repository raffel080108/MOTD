declare interface UUI_NetworkErrorScreen_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TEXT_Header: UTextBlock;
    FadeOverlay: UImage;
    DisconnectReasonText: UTextBlock;
    BlurBackground: UBlurBackground_C;
    Basic_Menu_MinimalWindow: UBasic_Menu_MinimalWindow_C;
    Basic_ButtonScalable2: UBasic_ButtonScalable2_C;
    FadeOut: UWidgetAnimation;
    FadeIn: UWidgetAnimation;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    FadeIt(FadeIn: boolean, duration: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Basic_ButtonScalable2_K2Node_ComponentBoundEvent_6_OnClicked__DelegateSignature(): void;
    Close(): void;
    ExecuteUbergraph_UI_NetworkErrorScreen(EntryPoint: number): void;
}
declare const UUI_NetworkErrorScreen_C: UUI_NetworkErrorScreen_C;

