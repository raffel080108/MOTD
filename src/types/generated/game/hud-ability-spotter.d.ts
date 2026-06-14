declare interface UHUD_Ability_Spotter_C extends UAbilityWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Sonar: UWB_RadarMap_SonarRadar_C;
    Input_Sonar: UHUD_Ability_ClassSkill_C;
    Input_Darts: UHUD_Ability_ClassSkill_C;
    Input_AmmoCrate: UHUD_Ability_ClassSkill_C;
    Dart_Box: UVerticalBox;
    AmmoCrate_Icon: UBasicImage;
    Ability: UAbilityComponent;
    Darts: TArray<UUI_Spotter_Dart_C>;
    UpdateDarts(): void;
    SetDarts(InTotal: number, InCurrent: number, InProgress: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnAbilityChargesChanged(IntValue: number): void;
    BndEvt__HUD_Ability_Spotter_Input_AmmoCrate_K2Node_ComponentBoundEvent_0_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
    OnCooldownTick(FloatValue: number): void;
    ExecuteUbergraph_HUD_Ability_Spotter(EntryPoint: number): void;
}
declare const UHUD_Ability_Spotter_C: UHUD_Ability_Spotter_C;

