declare interface UWBP_Tab_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TabName: UTextBlock;
    hithlight: UBorder;
    Button: UButton;
    OnTabClicked: FWBP_Tab_COnTabClicked;
    bIsSelected: boolean;
    Unselect(): void;
    Select(): void;
    Construct(): void;
    BndEvt__WBP_Tab_button_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__WBP_Tab_button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__WBP_Tab_button_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_WBP_Tab(EntryPoint: number): void;
    OnTabClicked__DelegateSignature(Tab: UWBP_Tab_C, modTabWidgets: TScriptInterface<IBPI_RCModUI_C>): void;
}
declare const UWBP_Tab_C: UWBP_Tab_C;

