declare interface UITM_Ability_Charges_C extends UUserWidget {
    readonly __static_UITM_Ability_Charges_C: {
        SetCooldown(alpha: number): void;
        SetCurrentCharges(charges: number): void;
        SetTotalCharges(NumberOfCharges: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        NewMaxCharges(IntValue: number): void;
        ExecuteUbergraph_ITM_Ability_Charges(EntryPoint: number): void;
    };
    readonly __properties_UITM_Ability_Charges_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Root_Overlay: UOverlay;
        I_Background_Right: UImage;
        I_Background_Middle: UImage;
        I_Background_Left: UImage;
        HBox_Charges: UHorizontalBox;
        Charge_Widgets: UITM_PhazeSuit_Charge_C[];
        CurrentCharges: number;
        FlipVertically: boolean;
    };
    readonly __staticRegistry: 
        UITM_Ability_Charges_C['__static_UITM_Ability_Charges_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_Ability_Charges_C['__properties_UITM_Ability_Charges_C'] &
        UUserWidget['__propertyRegistry'];
}

