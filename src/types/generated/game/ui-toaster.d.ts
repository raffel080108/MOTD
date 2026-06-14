declare interface UUI_Toaster_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TitleText: UTextBlock;
    MessageText: UTextBlock;
    SlideIn: UWidgetAnimation;
    SlideOut: UWidgetAnimation;
    ToastQueue: TArray<FToastNotification>;
    IsToastActive: boolean;
    Finished_EE5CCA8D4C7035E7F67BCCB3C77ACF0D(): void;
    Finished_D46161AD49B5A3637E38B8A1360C96C8(): void;
    ShowToast(Title: FText, Message: FText, DisplayTime: number): void;
    SetMessage(ToastNotification: FToastNotification): void;
    ExecuteUbergraph_UI_Toaster(EntryPoint: number): void;
}
declare const UUI_Toaster_C: UUI_Toaster_C;

