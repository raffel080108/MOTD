declare interface UITM_Character_Customization_CustomSelectorWidget_C extends UUserWidget {
    OnSettingChanged: FITM_Character_Customization_CustomSelectorWidget_COnSettingChanged;
    SetSelectedCharacter(NewSelectedCharacter: UPlayerCharacterID): void;
    OnSettingChanged__DelegateSignature(): void;
}
declare const UITM_Character_Customization_CustomSelectorWidget_C: UITM_Character_Customization_CustomSelectorWidget_C;

