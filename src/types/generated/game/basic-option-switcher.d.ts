declare interface UBasic_OptionSwitcher_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Button_Right: UButton;
    Button_Left: UButton;
    ArrowRight: UBasic_ScrollArrow2_C;
    ArrowLeft: UBasic_ScrollArrow2_C;
    ArrowBox_Text: UTextBlock;
    Options: TArray<FText>;
    SelectedIndex: number;
    Loop: boolean;
    OnSelectionChanged: FBasic_OptionSwitcher_COnSelectionChanged;
    TextCase: ENU_TextCase;
    ContainsOption(Option: FText, DoesContain: boolean): void;
    RemoveOption(Item: FText): boolean;
    GetOptionCount(count: number): void;
    ClearOptions(): void;
    GetSelectedValue(Value: FText): void;
    GetSelectedIndex(Index: number): void;
    SetSelectedValue(Value: FText): void;
    SetSelectedIndex(NewIndex: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__Button_Left_K2Node_ComponentBoundEvent_143_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Right_K2Node_ComponentBoundEvent_164_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Left_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_Left_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_Right_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_Right_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_Basic_OptionSwitcher(EntryPoint: number): void;
    OnSelectionChanged__DelegateSignature(Value: FText, Index: number): void;
}
declare const UBasic_OptionSwitcher_C: UBasic_OptionSwitcher_C;

