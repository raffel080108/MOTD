declare interface UOptions_Gamepad_KeyCapture_C extends UInputCaptureWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    InputLabel: UBasic_Label_C;
    InputImage: UImage;
    IconSizeBox: USizeBox;
    FocusedIndicator: UImage;
    DisplaySwitcher: UWidgetSwitcher;
    IconSize: number;
    FontSize: number;
    OnCapturingChanged: FOptions_Gamepad_KeyCapture_COnCapturingChanged;
    UpdateKeyDisplay(InKey: FKey): void;
    IsInteractable(): boolean;
    ReceiveCapturingChanged(InCapturing: boolean): void;
    ReceiveKeyChanged(InKey: FKey): void;
    Construct(): void;
    OnCustomKeyBindingsChanged(): void;
    ReceiveKeyCaptured(InKey: FKey): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_Gamepad_KeyCapture(EntryPoint: number): void;
    OnCapturingChanged__DelegateSignature(InCapturing: boolean): void;
}
declare const UOptions_Gamepad_KeyCapture_C: UOptions_Gamepad_KeyCapture_C;

