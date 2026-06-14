declare interface UOptions_MouseKeyboard_KeyCapture_C extends UInputCaptureWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    KeyLabel: UTextBlock;
    FocusedImage: UImage;
    ClearButton: UButton;
    OnKeyCaptureFinished: FOptions_MouseKeyboard_KeyCapture_COnKeyCaptureFinished;
    OnKeyCaptureError: FOptions_MouseKeyboard_KeyCapture_COnKeyCaptureError;
    OnKeyCaptureChanged: FOptions_MouseKeyboard_KeyCapture_COnKeyCaptureChanged;
    OnKeyCaptureCancelled: FOptions_MouseKeyboard_KeyCapture_COnKeyCaptureCancelled;
    CapturedKey: FKey;
    ConflictingAction: FCustomKeySetting;
    NoneKey: FKey;
    CurrentKey: FKey;
    UpdateClearButton(): void;
    UpdateKeyInfo(Key: FKey): void;
    No_8623E71E42D4951E6FF011979EF3C667(): void;
    Yes_8623E71E42D4951E6FF011979EF3C667(): void;
    BndEvt__ClearButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    OnMouseEnter(MyGeometry: FGeometry, MouseEvent: FPointerEvent): void;
    OnMouseLeave(MouseEvent: FPointerEvent): void;
    PreConstruct(IsDesignTime: boolean): void;
    OnCustomKeyBindingsChanged(): void;
    Construct(): void;
    ReceiveKeyChanged(InKey: FKey): void;
    ReceiveKeyCaptured(InKey: FKey): void;
    ReceiveCapturingChanged(InCapturing: boolean): void;
    ExecuteUbergraph_Options_MouseKeyboard_KeyCapture(EntryPoint: number): void;
    OnKeyCaptureCancelled__DelegateSignature(): void;
    OnKeyCaptureChanged__DelegateSignature(): void;
    OnKeyCaptureError__DelegateSignature(): void;
    OnKeyCaptureFinished__DelegateSignature(): void;
}
declare const UOptions_MouseKeyboard_KeyCapture_C: UOptions_MouseKeyboard_KeyCapture_C;

