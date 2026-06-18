declare interface UHUD_Ability_Falconer_C extends UAbilityWidget {
    readonly __static_UHUD_Ability_Falconer_C: {
        SetSideProgress(InProgressBar: UProgressBar, InProgress: number, OutProgressVisible: boolean): void;
        SetCenterProgress(InProgress: number): void;
        SetProgressBarRanged(InProgressBar: UProgressBar, InPercent: number, InStart: number, InEnd: number, OutProgressVisible: boolean): void;
        UpdateReviveTarget(): void;
        OnReviveTargetChanged(): void;
        UpdateStateLabel(): void;
        UpdateStateVisibility(): void;
        SetActiveState(State: EAbilityDroneState): void;
        GetCoolDownProgress(Progress: number): void;
        GetCurrentUseTimeLeft(TimeLeft: number): void;
        GetCooldownDuration(): number;
        SetCounter(TimeLeft: number): void;
        SetProgress(InProgress: number, OutProgress: number): void;
        OnTick_B7DF549D47CC851052A7F3A1B40DF31A(DeltaTime: number, NormalizedTime: number): void;
        Completed_B7DF549D47CC851052A7F3A1B40DF31A(DeltaTime: number, NormalizedTime: number): void;
        Construct(): void;
        OnAnimCoolDownFinished(): void;
        InitPhazeSuit(): void;
        CooldownStarted(FloatValue: number): void;
        OnAbilityActivated(FloatValue: number): void;
        BeginActivated(duration: number): void;
        UpdateCooldown(TimeRemaining: number): void;
        OnCooldownTick(FloatValue: number): void;
        OnChargesChanged(IntValue: number): void;
        OnChargesUpdated(charges: number): void;
        TransitionFinished(): void;
        StartIdleAnimation(): void;
        OnEnterStateDelegate_Event(State: EAbilityDroneState): void;
        PreConstruct(IsDesignTime: boolean): void;
        BndEvt__HUD_Ability_ShockDrone_Input_Right_K2Node_ComponentBoundEvent_0_OnCoolDownChanged__DelegateSignature(InProgress: number): void;
        BndEvt__HUD_Ability_ShockDrone_Input_Left_K2Node_ComponentBoundEvent_1_OnCoolDownChanged__DelegateSignature(InProgress: number): void;
        BndEvt__HUD_Ability_ShockDrone_Input_Right_K2Node_ComponentBoundEvent_2_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
        BndEvt__HUD_Ability_ShockDrone_Input_Left_K2Node_ComponentBoundEvent_3_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
        ExecuteUbergraph_HUD_Ability_Falconer(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Ability_Falconer_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        State_Label: UBasic_Label_C;
        ProgressBar_Right: UProgressBar;
        ProgressBar_Left: UProgressBar;
        ProgressBar_Center: UProgressBar;
        ITM_Ability_TemporaryCharges: UITM_Ability_TemporaryCharges_C;
        ITM_Ability_Charges: UITM_Ability_Charges_C;
        Input_Right: UHUD_Ability_ClassSkill_C;
        Input_Left: UHUD_Ability_ClassSkill_C;
        Input_Center_Switcher: UWidgetSwitcher;
        Icon_Right: UImage;
        Icon_Left: UImage;
        Icon_Center: UImage;
        Counter_Right: UTextBlock;
        Counter_Center: UBasic_Label_C;
        AnimCoolDownChargeFilled: UWidgetAnimation;
        AnimCoolingDownIdle: UWidgetAnimation;
        AnimCoolingDown_transition: UWidgetAnimation;
        AnimIdle: UWidgetAnimation;
        AnimStateChanged: UWidgetAnimation;
        RefreshHandle: FTimerHandle;
        Ability: UAbilityComponent;
        IsCountingCooldown: boolean;
        OldCharges: number;
        StateText: TMap<EAbilityDroneState, FStruct_ShockdroneStateData>;
        CoolDownProgress: number;
        ActiveState: EAbilityDroneState;
        DroneControllerItem: ABP_ShockDroneController_C;
        RevivePerk: UPerkAsset;
    };
    readonly __staticRegistry: 
        UHUD_Ability_Falconer_C['__static_UHUD_Ability_Falconer_C'] &
        UAbilityWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Ability_Falconer_C['__properties_UHUD_Ability_Falconer_C'] &
        UAbilityWidget['__propertyRegistry'];
}

