declare interface USkill_FieldMedic_ActivationEffect_C extends UPerkEffect {
    readonly __static_USkill_FieldMedic_ActivationEffect_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        ExecuteUbergraph_Skill_FieldMedic_ActivationEffect(EntryPoint: number): void;
    };
    readonly __properties_USkill_FieldMedic_ActivationEffect_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Character: APlayerCharacter;
        RevivingCharacter: APlayerCharacter;
    };
    readonly __staticRegistry: 
        USkill_FieldMedic_ActivationEffect_C['__static_USkill_FieldMedic_ActivationEffect_C'] &
        UPerkEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        USkill_FieldMedic_ActivationEffect_C['__properties_USkill_FieldMedic_ActivationEffect_C'] &
        UPerkEffect['__propertyRegistry'];
}

