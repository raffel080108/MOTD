declare interface UHUD_Ability_Guardian_C extends UAbilityWidget {
    readonly __static_UHUD_Ability_Guardian_C: {
        Update_Charges(): void;
        Update_ChargedInput(): void;
        InitializeItem(): void;
        Construct(): void;
        InitPhazeSuit(): void;
        CooldownStarted(FloatValue: number): void;
        OnAbilityActivated(FloatValue: number): void;
        OnCooldownTick(FloatValue: number): void;
        OnChargesChanged(IntValue: number): void;
        BndEvt__HUD_Ability_Guardian_Input_Bottom_K2Node_ComponentBoundEvent_1_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
        BndEvt__HUD_Ability_Guardian_Input_Bottom_K2Node_ComponentBoundEvent_2_OnCoolDownChanged__DelegateSignature(InProgress: number): void;
        ExecuteUbergraph_HUD_Ability_Guardian(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Ability_Guardian_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Progress_Right: UUI_ProgressBar_SingleImage_C;
        Progress_Left: UUI_ProgressBar_SingleImage_C;
        Progress_Center: UBasicImage;
        Progress_Bottom: UUI_ProgressBar_SingleImage_C;
        Input_Right: UHUD_Ability_ClassSkill_C;
        Input_Left: UHUD_Ability_ClassSkill_C;
        Input_Bottom: UHUD_Ability_ClassSkill_C;
        Icon_Right: UImage;
        Icon_Left: UImage;
        Icon_Bottom: UImage;
        CounterLabel: UBasic_Label_C;
        PhazeSuitAbility: UAbilityComponent;
        IsCountingCooldown: boolean;
        OldCharges: number;
        CoolDownProgress: number;
        GuardianAbilityItem: AGuardianAbilityItem;
    };
    readonly __staticRegistry: 
        UHUD_Ability_Guardian_C['__static_UHUD_Ability_Guardian_C'] &
        UAbilityWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Ability_Guardian_C['__properties_UHUD_Ability_Guardian_C'] &
        UAbilityWidget['__propertyRegistry'];
}

