declare interface UUI_BXE_Negotiation_Participant_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Unlock_Icon: UUI_BXE_Unlock_Icon_C;
    PlayerName_Label: UBasic_Label_C;
    Overlay_1: UOverlay;
    Menu_CharacterStatBlock: UMenu_CharacterEquipmentBlock_C;
    HasTurn_Img: UBasic_Image_C;
    HasTurn_GradientBackground: UBasic_Image_C;
    Data_CharacterClass: UTextBlock;
    Button_33: UButton;
    participant: FBXENegotiationParticipant;
    HasTurn: boolean;
    GetUnlockToolTip(): UWidget;
    UnbindEvents(): void;
    SetParticipant(InParticipant: FBXENegotiationParticipant, InHasTurn: boolean): void;
    UpdateHasTurn(): void;
    UpdatePlayerName(): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnPlayerDestroyed(DestroyedActor: AActor): void;
    Destruct(): void;
    BndEvt__UI_BXE_Negotiation_Participant_Button_33_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_BXE_Negotiation_Participant_Button_33_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_BXE_Negotiation_Participant(EntryPoint: number): void;
}
declare const UUI_BXE_Negotiation_Participant_C: UUI_BXE_Negotiation_Participant_C;

