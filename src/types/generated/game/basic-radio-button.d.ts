declare interface UBasic_RadioButton_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Tick: UImage & (() => any); /* Systemic inheritance field-vs-method collision intersection override */
    RadioText: UTextBlock;
    Horizontal: UHorizontalBox;
    Checkbox_Button: UButton;
    Button_SizeBox: USizeBox;
    BorderOuter: UImage;
    BorderInner: UImage;
    AnimClick: UWidgetAnimation;
    AnimTickShow: UWidgetAnimation;
    OnCheckStateChanged: FBasic_RadioButton_COnCheckStateChanged;
    Size: number;
    IsChecked: boolean;
    CanUncheck: boolean;
    Text: FText;
    UpperCase: boolean;
    Index: number;
    TextColor: ENUM_MenuColors;
    GetText(Text: FText): void;
    SetTextColor(Color: ENUM_MenuColors): void;
    SetText(InText: FText, InUpperCase: boolean): void;
    SetIsChecked(InIsChecked: boolean): void;
    GetIsChecked(): boolean;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_Basic_RadioButton(EntryPoint: number): void;
    OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
}
declare const UBasic_RadioButton_C: UBasic_RadioButton_C;

