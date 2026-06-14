declare interface UUI_BXE_Negotiation_Request_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UnrequestButton: UButton;
    Root_Overlay: UOverlay;
    RequestButton: UButton;
    ButtonSwitcher: UWidgetSwitcher;
    OnButtonHovered: FUI_BXE_Negotiation_Request_COnButtonHovered;
    OnButtonUnhovered: FUI_BXE_Negotiation_Request_COnButtonUnhovered;
    Shout(InShout: UDialogDataAsset): void;
    Refresh(): void;
    SetData(InNegotiationWindow: UBXENegotiationWidget, InUnlockIndex: number): void;
    BndEvt__UI_BXE_Negotiation_Request_UnrequestButton_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature(): void;
    PreConstruct(IsDesignTime: boolean): void;
    BndEvt__UI_BXE_Negotiation_Request_RequestButton_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_BXE_Negotiation_Request(EntryPoint: number): void;
    OnButtonUnhovered__DelegateSignature(): void;
    OnButtonHovered__DelegateSignature(): void;
}
declare const UUI_BXE_Negotiation_Request_C: UUI_BXE_Negotiation_Request_C;

