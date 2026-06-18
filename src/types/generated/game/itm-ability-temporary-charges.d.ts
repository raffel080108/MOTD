declare interface UITM_Ability_TemporaryCharges_C extends UUserWidget {
    readonly __static_UITM_Ability_TemporaryCharges_C: {
        SetCooldown(alpha: number): void;
        SetCurrentCharges(charges: number): void;
        SetTotalCharges(NumberOfCharges: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnTempChargesChanged_Event(IntValue: number): void;
        ExecuteUbergraph_ITM_Ability_TemporaryCharges(EntryPoint: number): void;
    };
    readonly __properties_UITM_Ability_TemporaryCharges_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_SizeBox: USizeBox;
        HBox_Charges: UHorizontalBox;
        FadeIn: UWidgetAnimation;
        Charge_Widgets: UITM_PhazeSuit_TempCharge_C[];
        CurrentCharges: number;
        HadZero: boolean;
    };
    readonly __staticRegistry: 
        UITM_Ability_TemporaryCharges_C['__static_UITM_Ability_TemporaryCharges_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_Ability_TemporaryCharges_C['__properties_UITM_Ability_TemporaryCharges_C'] &
        UUserWidget['__propertyRegistry'];
}

