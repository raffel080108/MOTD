declare interface UUI_BXE_Negotiation_RequestList_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    RequestedByBox: UVerticalBox;
    RequestedBy: TArray<AFSDPlayerState>;
    ForcedHover: boolean;
    OnButtonHovered: FUI_BXE_Negotiation_RequestList_COnButtonHovered;
    OnButtonUnhovered: FUI_BXE_Negotiation_RequestList_COnButtonUnhovered;
    SetData(InNegotiationWindow: UBXENegotiationWidget, InUnlockIndex: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_BXE_Negotiation_RequestList(EntryPoint: number): void;
    OnButtonUnhovered__DelegateSignature(): void;
    OnButtonHovered__DelegateSignature(): void;
}
declare const UUI_BXE_Negotiation_RequestList_C: UUI_BXE_Negotiation_RequestList_C;

