declare interface UBasic_CheckBox_C extends UUserWidget {
    readonly __static_UBasic_CheckBox_C: {
        SetTextWidth(InWidthOverride: number): void;
        SetHovered(InHovered: boolean): void;
        SetSize(InSize: number): void;
        GetState(State: ECheckBoxState): void;
        SetState(InState: ECheckBoxState): void;
        GetUpperCased(UpperCase: boolean): void;
        SetText(InText: string, InUpperCase: boolean): void;
        GetText(Text: string): void;
        SetIsChecked(InIsChecked: boolean): void;
        GetIsChecked(): boolean;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        PreConstruct(IsDesignTime: boolean): void;
        ClickButton(): void;
        OnClicked(InChecked: boolean): void;
        ExecuteUbergraph_Basic_CheckBox(EntryPoint: number): void;
        OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    };
    readonly __properties_UBasic_CheckBox_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        StateSwitcher: UWidgetSwitcher;
        SizeBox_Text: USizeBox;
        SizeBox_CheckBox: USizeBox;
        Horizontal: UHorizontalBox;
        CheckBoxText: UTextBlock;
        Checkbox_Undetermined: UImage;
        CheckBox_Tick: UImage;
        Checkbox_Button: UButton;
        Checkbox_Border: UImage;
        Click: UWidgetAnimation;
        TickShow: UWidgetAnimation;
        OnCheckStateChanged: FBasic_CheckBox_COnCheckStateChanged;
        Size: number;
        IsChecked: boolean;
        Text: string;
        UpperCase: boolean;
        TextColor: ENUM_MenuColors;
        State: ECheckBoxState;
        FrameColor: ENUM_MenuColors;
        HoveredColor: ENUM_MenuColors;
        TextWidth: number;
    };
    readonly __staticRegistry: 
        UBasic_CheckBox_C['__static_UBasic_CheckBox_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasic_CheckBox_C['__properties_UBasic_CheckBox_C'] &
        UUserWidget['__propertyRegistry'];
}

