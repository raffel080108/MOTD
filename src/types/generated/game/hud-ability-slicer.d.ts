declare interface UHUD_Ability_Slicer_C extends UAbilityWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Progress_Right: UUI_ProgressBar_SingleImage_C;
    Progress_Left: UUI_ProgressBar_SingleImage_C;
    Progress_Big: UUI_ProgressBar_SingleImage_C;
    Input_Right: UHUD_Ability_ClassSkill_C;
    Input_Left: UHUD_Ability_ClassSkill_C;
    Input_Big: UHUD_Ability_ClassSkill_C;
    Icon_Right: UImage;
    Icon_Left: UImage;
    Icon_Big: UImage;
    Ability: UAbilityComponent;
    IsCountingCooldown: boolean;
    OldCharges: number;
    CoolDownProgress: number;
    GetCoolDownProgress(Progress: number): void;
    GetCurrentUseTimeLeft(TimeLeft: number): void;
    GetCooldownDuration(): number;
    SetCounter(TimeLeft: number): void;
    InitPhazeSuit(): void;
    CooldownStarted(FloatValue: number): void;
    BeginCoolDown(duration: number): void;
    UpdateCooldown(TimeRemaining: number): void;
    OnCooldownTick(FloatValue: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    BndEvt__HUD_Ability_Swipe_Input_Left_K2Node_ComponentBoundEvent_0_OnCoolDownChanged__DelegateSignature(InProgress: number): void;
    BndEvt__HUD_Ability_Swipe_Input_Left_K2Node_ComponentBoundEvent_1_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
    BndEvt__HUD_Ability_Swipe_Input_Right_K2Node_ComponentBoundEvent_2_OnCoolDownChanged__DelegateSignature(InProgress: number): void;
    BndEvt__HUD_Ability_Swipe_Input_Right_K2Node_ComponentBoundEvent_3_OnCanUseChanged__DelegateSignature(InCanUse: boolean): void;
    ExecuteUbergraph_HUD_Ability_Slicer(EntryPoint: number): void;
}
declare const UHUD_Ability_Slicer_C: UHUD_Ability_Slicer_C;

