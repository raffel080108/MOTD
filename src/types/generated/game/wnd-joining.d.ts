declare interface UWND_Joining_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_0: UTextBlock;
    FadeOverlay: UImage;
    CircularThrobber_2: UCircularThrobber;
    Button_Close: UBasic_ButtonScalable2_C;
    BlurBackground: UBlurBackground_C;
    BasicWindow_Minimal: UBasic_Menu_MinimalWindow_C;
    FadeInAnimation: UWidgetAnimation;
    ShowCancelButton: boolean;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    OnKeyDown(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    BndEvt__Button_Close_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    HideCancel(): void;
    OnShown(): void;
    Close(): void;
    OnClosed(): void;
    ShowCancel(): void;
    ExecuteUbergraph_WND_Joining(EntryPoint: number): void;
}
declare const UWND_Joining_C: UWND_Joining_C;

