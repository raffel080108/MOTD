declare interface USkill_MarathonGuy_RunBoostEffect_C extends UPerkEffect {
    readonly __static_USkill_MarathonGuy_RunBoostEffect_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        ExecuteUbergraph_Skill_MarathonGuy_RunBoostEffect(EntryPoint: number): void;
    };
    readonly __properties_USkill_MarathonGuy_RunBoostEffect_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        USkill_MarathonGuy_RunBoostEffect_C['__static_USkill_MarathonGuy_RunBoostEffect_C'] &
        UPerkEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        USkill_MarathonGuy_RunBoostEffect_C['__properties_USkill_MarathonGuy_RunBoostEffect_C'] &
        UPerkEffect['__propertyRegistry'];
}

