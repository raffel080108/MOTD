declare interface UBasic_OptionSwitcher_C extends UUserWidget {
    readonly __static_UBasic_OptionSwitcher_C: {
        ContainsOption(Option: string, DoesContain: boolean): void;
        RemoveOption(Item: string): boolean;
        GetOptionCount(count: number): void;
        ClearOptions(): void;
        GetSelectedValue(Value: string): void;
        GetSelectedIndex(Index: number): void;
        SetSelectedValue(Value: string): void;
        SetSelectedIndex(NewIndex: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__Button_Left_K2Node_ComponentBoundEvent_143_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__Button_Right_K2Node_ComponentBoundEvent_164_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__Button_Left_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_Left_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_Right_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_Right_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature(): void;
        ExecuteUbergraph_Basic_OptionSwitcher(EntryPoint: number): void;
        OnSelectionChanged__DelegateSignature(Value: string, Index: number): void;
    };
    readonly __properties_UBasic_OptionSwitcher_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Button_Right: UButton;
        Button_Left: UButton;
        ArrowRight: UBasic_ScrollArrow2_C;
        ArrowLeft: UBasic_ScrollArrow2_C;
        ArrowBox_Text: UTextBlock;
        Options: string[];
        SelectedIndex: number;
        Loop: boolean;
        OnSelectionChanged: FBasic_OptionSwitcher_COnSelectionChanged;
        TextCase: ENU_TextCase;
    };
    readonly __staticRegistry: 
        UBasic_OptionSwitcher_C['__static_UBasic_OptionSwitcher_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_OptionSwitcher_C['__properties_UBasic_OptionSwitcher_C'] &
        UUserWidget['__propertyRegistry'];
}

