declare interface UUI_RichTextInput_C extends URichTextInputWidget {
    readonly __static_UUI_RichTextInput_C: {
        ShowFromDisplayDetails(details: FInputDisplay): void;
        SetInteraction(InInteraction: EInputInteraction): void;
        ShowAsText(InText: string, InTint: FLinearColor): void;
        SetSize(InHeightOverride: number, InWidthOverride: number, InMinDesiredWidth: number): void;
        ShowAsIcon(InTexture: UTexture2D, InTint: FLinearColor): void;
        ReceiveInputDetails(InDisplay: FInputDisplay): void;
        ReceiveInputUnknown(): void;
        ExecuteUbergraph_UI_RichTextInput(EntryPoint: number): void;
    };
    readonly __properties_UUI_RichTextInput_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Switcher: UWidgetSwitcher;
        Sizer: USizeBox;
        OverlayText: UOverlay;
        OverlayIcon: UOverlay;
        InteractionText: UTextBlock;
        InputText: UTextBlock;
        InputIcon: UImage;
    };
    readonly __staticRegistry: 
        UUI_RichTextInput_C['__static_UUI_RichTextInput_C'] &
        URichTextInputWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_RichTextInput_C['__properties_UUI_RichTextInput_C'] &
        URichTextInputWidget['__propertyRegistry'];
}

