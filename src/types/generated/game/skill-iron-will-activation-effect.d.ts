declare interface USkill_IronWill_ActivationEffect_C extends UPerkEffect {
    readonly __static_USkill_IronWill_ActivationEffect_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        ExecuteUbergraph_Skill_IronWill_ActivationEffect(EntryPoint: number): void;
    };
    readonly __properties_USkill_IronWill_ActivationEffect_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        USkill_IronWill_ActivationEffect_C['__static_USkill_IronWill_ActivationEffect_C'] &
        UPerkEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        USkill_IronWill_ActivationEffect_C['__properties_USkill_IronWill_ActivationEffect_C'] &
        UPerkEffect['__propertyRegistry'];
}

