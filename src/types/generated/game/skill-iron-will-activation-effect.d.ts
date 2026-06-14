declare interface USkill_IronWill_ActivationEffect_C extends UPerkEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    ExecuteUbergraph_Skill_IronWill_ActivationEffect(EntryPoint: number): void;
}
declare const USkill_IronWill_ActivationEffect_C: USkill_IronWill_ActivationEffect_C;

