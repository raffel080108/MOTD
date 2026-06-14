declare interface UOptions_Gamepad_Turn180Mode_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    StickIcon: UBasic_Image_C;
    ContentSwitcher: UWidgetSwitcher;
    ButtonIcon: UBasic_Image_C;
    Button_Right: UButton;
    Button_Left: UButton;
    Basic_Label: UBasic_Label_C;
    Basic_Dots: UBasic_Dots_C;
    Modes: TArray<ETurn180Mode>;
    Next(Forward: boolean): void;
    SetMode(InMode: ETurn180Mode): void;
    Construct(): void;
    OnRefresh(): void;
    BndEvt__Button_Left_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Right_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Options_Gamepad_Turn180Mode(EntryPoint: number): void;
}
declare const UOptions_Gamepad_Turn180Mode_C: UOptions_Gamepad_Turn180Mode_C;

