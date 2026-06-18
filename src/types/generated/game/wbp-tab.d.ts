declare interface UWBP_Tab_C extends UUserWidget {
    readonly __static_UWBP_Tab_C: {
        Unselect(): void;
        Select(): void;
        Construct(): void;
        BndEvt__WBP_Tab_button_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__WBP_Tab_button_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__WBP_Tab_button_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        ExecuteUbergraph_WBP_Tab(EntryPoint: number): void;
        OnTabClicked__DelegateSignature(Tab: UWBP_Tab_C, modTabWidgets: TScriptInterface<IBPI_RCModUI_C>): void;
    };
    readonly __properties_UWBP_Tab_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TabName: UTextBlock;
        hithlight: UBorder;
        Button: UButton;
        OnTabClicked: FWBP_Tab_COnTabClicked;
        bIsSelected: boolean;
    };
    readonly __staticRegistry: 
        UWBP_Tab_C['__static_UWBP_Tab_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_Tab_C['__properties_UWBP_Tab_C'] &
        UUserWidget['__propertyRegistry'];
}

