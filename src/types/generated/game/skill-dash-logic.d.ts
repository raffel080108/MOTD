declare interface USkill_Dash_Logic_C extends UPerkEffectCooldown {
    UberGraphFrame: FPointerToUberGraphFrame;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    ExecuteUbergraph_Skill_Dash_Logic(EntryPoint: number): void;
}
declare const USkill_Dash_Logic_C: USkill_Dash_Logic_C;

