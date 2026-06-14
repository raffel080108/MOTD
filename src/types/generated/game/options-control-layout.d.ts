declare interface UOptions_ControlLayout_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WidgetSwitcher_Input: UWidgetSwitcher;
    Image_Keyboard_QWERTY: UImage;
    Image_Controller: UImage;
    Construct(): void;
    OnInputSourceChanged(InputSource: EFSDInputSource): void;
    ExecuteUbergraph_Options_ControlLayout(EntryPoint: number): void;
}
declare const UOptions_ControlLayout_C: UOptions_ControlLayout_C;

