declare interface UHUD_Ability_Spotter_C extends UAbilityWidget {
    readonly __static_UHUD_Ability_Spotter_C: {
        UpdateDarts(): void;
        SetDarts(InTotal: number, InCurrent: number, InProgress: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnAbilityChargesChanged(IntValue: number): void;
        BndEvt__HUD_Ability_Spotter_Input_AmmoCrate_K2Node_ComponentBoundEvent_0_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
        OnCooldownTick(FloatValue: number): void;
        ExecuteUbergraph_HUD_Ability_Spotter(EntryPoint: number): void;
    };
    readonly __properties_UHUD_Ability_Spotter_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Sonar: UWB_RadarMap_SonarRadar_C;
        Input_Sonar: UHUD_Ability_ClassSkill_C;
        Input_Darts: UHUD_Ability_ClassSkill_C;
        Input_AmmoCrate: UHUD_Ability_ClassSkill_C;
        Dart_Box: UVerticalBox;
        AmmoCrate_Icon: UBasicImage;
        Ability: UAbilityComponent;
        Darts: UUI_Spotter_Dart_C[];
    };
    readonly __staticRegistry: 
        UHUD_Ability_Spotter_C['__static_UHUD_Ability_Spotter_C'] &
        UAbilityWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_Ability_Spotter_C['__properties_UHUD_Ability_Spotter_C'] &
        UAbilityWidget['__propertyRegistry'];
}

