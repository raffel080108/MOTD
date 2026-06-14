declare interface UOptions_Gamepad_EnableChat_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Icon02: UBasic_Image_C;
    Icon01: UBasic_Image_C;
    ContentSwitcher: UWidgetSwitcher;
    Button_Right: UButton;
    Button_Left: UButton;
    Basic_Dots: UBasic_Dots_C;
    Next(Forward: boolean): void;
    Refresh(): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_Left_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Right_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Options_Gamepad_EnableChat(EntryPoint: number): void;
}
declare const UOptions_Gamepad_EnableChat_C: UOptions_Gamepad_EnableChat_C;

