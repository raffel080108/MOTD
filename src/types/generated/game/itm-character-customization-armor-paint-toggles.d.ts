declare interface UITM_Character_Customization_ArmorPaintToggles_C extends UITM_Character_Customization_CustomSelectorWidget_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    CheckBox_ApplyToUndersuit: UBasic_CheckBox_C;
    CheckBox_ApplyToGauntlets: UBasic_CheckBox_C;
    SelectedCharacter: UPlayerCharacterID;
    IsInitializing: boolean;
    SetSelectedCharacter(NewSelectedCharacter: UPlayerCharacterID): void;
    BndEvt__ITM_Wardrobe_ArmorPaintToggles_CheckBox_ApplyToUndersuit_K2Node_ComponentBoundEvent_0_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    BndEvt__ITM_Wardrobe_ArmorPaintToggles_CheckBox_ApplyToGauntlets_K2Node_ComponentBoundEvent_1_OnCheckStateChanged__DelegateSignature(IsChecked: boolean): void;
    ExecuteUbergraph_ITM_Character_Customization_ArmorPaintToggles(EntryPoint: number): void;
}
declare const UITM_Character_Customization_ArmorPaintToggles_C: UITM_Character_Customization_ArmorPaintToggles_C;

