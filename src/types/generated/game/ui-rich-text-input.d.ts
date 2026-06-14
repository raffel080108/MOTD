declare interface UUI_RichTextInput_C extends URichTextInputWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Switcher: UWidgetSwitcher;
    Sizer: USizeBox;
    OverlayText: UOverlay;
    OverlayIcon: UOverlay;
    InteractionText: UTextBlock;
    InputText: UTextBlock;
    InputIcon: UImage;
    ShowFromDisplayDetails(details: FInputDisplay): void;
    SetInteraction(InInteraction: EInputInteraction): void;
    ShowAsText(InText: FText, InTint: FLinearColor): void;
    SetSize(InHeightOverride: number, InWidthOverride: number, InMinDesiredWidth: number): void;
    ShowAsIcon(InTexture: UTexture2D, InTint: FLinearColor): void;
    ReceiveInputDetails(InDisplay: FInputDisplay): void;
    ReceiveInputUnknown(): void;
    ExecuteUbergraph_UI_RichTextInput(EntryPoint: number): void;
}
declare const UUI_RichTextInput_C: UUI_RichTextInput_C;

