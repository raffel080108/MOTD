declare interface UUI_RandomizeLoadoutWithUndo_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    UI_UndoIcon: UUI_UndoIcon_C;
    UI_RandomizeIcon: UUI_RandomizeIcon_C;
    Button_Undo: UButton;
    Button_Randomize: UButton;
    Loadouts: TArray<FLoadoutCopy>;
    RandomizeVanity: boolean;
    RandomizeWeapons: boolean;
    RandomizePickaxe: boolean;
    CurrIndex: number;
    LoadoutRefreshed: FUI_RandomizeLoadoutWithUndo_CLoadoutRefreshed;
    characterID: UPlayerCharacterID;
    GetCharacterID(characterID: UPlayerCharacterID): void;
    GetCharacter(AsPlayer_Character: APlayerCharacter): void;
    BndEvt__UI_RandomizeLoadoutWithUndo_ShuffleButton_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__UI_RandomizeLoadoutWithUndo_Button_Undo_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature(): void;
    BndEvt__UI_RandomizeLoadoutWithUndo_Button_Undo_K2Node_ComponentBoundEvent_9_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_RandomizeLoadoutWithUndo_Button_Undo_K2Node_ComponentBoundEvent_4_OnButtonHoverEvent__DelegateSignature(): void;
    Clear(): void;
    SetCharacter(characterID: UPlayerCharacterID): void;
    BndEvt__UI_RandomizeLoadoutWithUndo_Button_Randomize_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature(): void;
    BndEvt__UI_RandomizeLoadoutWithUndo_Button_Randomize_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature(): void;
    ExecuteUbergraph_UI_RandomizeLoadoutWithUndo(EntryPoint: number): void;
    LoadoutRefreshed__DelegateSignature(): void;
}
declare const UUI_RandomizeLoadoutWithUndo_C: UUI_RandomizeLoadoutWithUndo_C;

