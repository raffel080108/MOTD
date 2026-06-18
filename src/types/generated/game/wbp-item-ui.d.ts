declare interface UWBP_ItemUI_C extends UUserWidget {
    readonly __static_UWBP_ItemUI_C: {
        SetUnselected(): void;
        Update(): void;
        SetSelected(): void;
        Construct(): void;
        BndEvt__WBP_ItemUI_openModButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature(): void;
        BndEvt__WBP_ItemUI_openModButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
        BndEvt__WBP_ItemUI_openModButton_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature(): void;
        ExecuteUbergraph_WBP_ItemUI(EntryPoint: number): void;
        OnClicked__DelegateSignature(Item: UWBP_ItemUI_C): void;
    };
    readonly __properties_UWBP_ItemUI_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        openModButton: UButton;
        Main: UCanvasPanel;
        Highlight: UBorder;
        ButtonText: UTextBlock;
        Object: AActor;
        OnClicked: FWBP_ItemUI_COnClicked;
        bIsSelected: boolean;
        bIsHovered: boolean;
    };
    readonly __staticRegistry: 
        UWBP_ItemUI_C['__static_UWBP_ItemUI_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UWBP_ItemUI_C['__properties_UWBP_ItemUI_C'] &
        UUserWidget['__propertyRegistry'];
}

