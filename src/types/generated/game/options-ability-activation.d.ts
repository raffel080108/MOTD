declare interface UOptions_AbilityActivation_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ContentSwitcher: UWidgetSwitcher;
    Button_Right: UButton;
    Button_Left: UButton;
    Basic_Dots: UBasic_Dots_C;
    Counter: number;
    WrapCounter(): void;
    Next(Forward: boolean): void;
    Refresh(): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_Left_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Right_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_Options_AbilityActivation(EntryPoint: number): void;
}
declare const UOptions_AbilityActivation_C: UOptions_AbilityActivation_C;

