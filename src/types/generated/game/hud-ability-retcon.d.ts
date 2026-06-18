declare interface UHUD_Ability_Retcon_C extends UAbilityWidget {
    readonly __static_UHUD_Ability_Retcon_C: {
        SetCenterProgress(InProgress: number, InIsDraining: boolean): void;
        UpdateRage(): void;
        GetCooldownDuration(): number;
        UpdateCoolDownTextAndIcon(InProgress: number): void;
        Construct(): void;
        SetupAbilityComponent(): void;
        OnCooldownTick(FloatValue: number): void;
        OnContingencyplanTriggered(): void;
        BndEvt__HUD_Ability_Retcon_Input_Right_K2Node_ComponentBoundEvent_0_OnCoolDownChanged__DelegateSignature(InProgress: number): void;
        BndEvt__HUD_Ability_Retcon_Input_Right_K2Node_ComponentBoundEvent_1_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
        OnDrainingProgressChanged_Event(InProgress: number): void;
        SetupRageComponent(): void;
        RageChanged(Value: number): void;
        RageActiveChanged(): void;
        ExecuteUbergraph_HUD_Ability_Retcon(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Ability_Retcon_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Right_ProgressBar: UUI_ProgressBar_SingleImage_C;
        Right_Input: UHUD_Ability_ClassSkill_C;
        Right_Icon: UBasicImage;
        Left_ProgressBar: UUI_ProgressBar_SingleImage_C;
        Left_Input: UHUD_Ability_ClassSkill_C;
        Left_Icon: UBasicImage;
        Center_Text: UTextBlock;
        Center_ProgressBar: UBasicImage;
        Center_Input: UHUD_Ability_ClassSkill_C;
        Center_Icon: UBasicImage;
        AnimDraining: UWidgetAnimation;
        PhazeSuitAbility: UAbilityComponent;
        IsDraining: boolean;
        TimeRewind: ATimeRewinder;
        CoolDownProgress: number;
        RageComponent: URageUnlockComponent;
        ContingencyComponent: UContingencyPlanUnlockComponent;
        RageTick: FTimerHandle;
    };
    readonly __staticRegistry: 
        UHUD_Ability_Retcon_C['__static_UHUD_Ability_Retcon_C'] &
        UAbilityWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Ability_Retcon_C['__properties_UHUD_Ability_Retcon_C'] &
        UAbilityWidget['__propertyRegistry'];
}

