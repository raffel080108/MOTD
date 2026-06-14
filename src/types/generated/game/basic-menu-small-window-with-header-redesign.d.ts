declare interface UBasic_Menu_SmallWindowWithHeader_Redesign_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WindowButton: UButton;
    PutStuffHere: UNamedSlot;
    MainBG_Outline: UBorder;
    MainBG: UBorder;
    HeaderBG: UBorder;
    DATA_headerText: UTextBlock;
    Brackets: UBorder;
    HeaderText: FText;
    ShowCounter: boolean;
    WindowIsButton: boolean;
    ButtonStyle: FButtonStyle;
    SidesActive: boolean;
    HeaderColor: ENUM_MenuColors;
    SetHeaderText(NewHeaderText: FText): void;
    IsHovering(): boolean;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_0_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetCounterText(InText: FText): void;
    ExecuteUbergraph_Basic_Menu_SmallWindowWithHeader_Redesign(EntryPoint: number): void;
}
declare const UBasic_Menu_SmallWindowWithHeader_Redesign_C: UBasic_Menu_SmallWindowWithHeader_Redesign_C;

