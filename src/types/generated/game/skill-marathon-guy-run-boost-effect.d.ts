declare interface USkill_MarathonGuy_RunBoostEffect_C extends UPerkEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    ExecuteUbergraph_Skill_MarathonGuy_RunBoostEffect(EntryPoint: number): void;
}
declare const USkill_MarathonGuy_RunBoostEffect_C: USkill_MarathonGuy_RunBoostEffect_C;

