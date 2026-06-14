declare interface UItm_HeaderCategory_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Outline_Right: UImage;
    Outline_Middle: UImage;
    Outline_Left: UImage;
    Filled_Right: UImage;
    Filled_Middle: UImage;
    Filled_Left: UImage;
    ButtonText: UTextBlock;
    Button_Main: UButton;
    Text: FText;
    IsSelected: boolean;
    UseFlatLeftside: boolean;
    OnClicked: FItm_HeaderCategory_COnClicked;
    PreConstruct(IsDesignTime: boolean): void;
    SetSelected(IsSelected: boolean): void;
    SetColor(Filled: FSlateColor, Outline: FSlateColor, Text: FSlateColor): void;
    BndEvt__Button_Main_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__Button_Main_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__Button_Main_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    SetText(Text: FText): void;
    ExecuteUbergraph_Itm_HeaderCategory(EntryPoint: number): void;
    OnClicked__DelegateSignature(): void;
}
declare const UItm_HeaderCategory_C: UItm_HeaderCategory_C;

