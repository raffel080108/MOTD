declare interface USkill_FieldMedic_ActivationEffect_C extends UPerkEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    Character: APlayerCharacter;
    RevivingCharacter: APlayerCharacter;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    ExecuteUbergraph_Skill_FieldMedic_ActivationEffect(EntryPoint: number): void;
}
declare const USkill_FieldMedic_ActivationEffect_C: USkill_FieldMedic_ActivationEffect_C;

