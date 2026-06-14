declare interface UMENU_CharacterLoadout_C extends UWindowWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    WBP_CooperEnabledCheckbox: UWBP_CooperEnabledCheckbox_C;
    UI_BioBooster_Decks: UUI_BioBooster_Deck_Selection_C;
    MENU_SpaceRigTemplate: UMENU_SpaceRigTemplate_C;
    Itm_Rotateable_Showroom: UItm_Rotatable_Showroom_C;
    ITM_Enhancements: UITM_Enhancements_EquipBar_C;
    ITM_CharacterDescription: UITM_CharacterDescription_C;
    ClassSelector: UITM_Wardrobe_ClassSelector_C;
    CharacterClassLogo: USCREEN_CharacterClassLogo_C;
    CloseAll(): void;
    UpdateClassLogo(): void;
    OnKeyUp(MyGeometry: FGeometry, InKeyEvent: FKeyEvent): FEventReply;
    OnShown(): void;
    SetPlayerCharacterID(): void;
    BndEvt___Menu_CharacterSetup_ClassSelector_K2Node_ComponentBoundEvent_0_OnCharacterChanged__DelegateSignature(Character: TSubclassOf<APlayerCharacter>): void;
    Refresh(): void;
    OnClosed(): void;
    BndEvt___Menu_CharacterSetup_MENU_SpaceRigTemplate_K2Node_ComponentBoundEvent_1_OnNewLoadoutSelected__DelegateSignature(): void;
    BndEvt__MENU_CharacterLoadout_UI_BioBooster_Decks_K2Node_ComponentBoundEvent_2_OnOpened__DelegateSignature(): void;
    BndEvt__MENU_CharacterLoadout_ITM_Enhancements_K2Node_ComponentBoundEvent_3_OnOpened__DelegateSignature(): void;
    ExecuteUbergraph_MENU_CharacterLoadout(EntryPoint: number): void;
}
declare const UMENU_CharacterLoadout_C: UMENU_CharacterLoadout_C;

