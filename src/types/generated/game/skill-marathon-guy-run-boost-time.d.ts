declare interface USkill_MarathonGuy_RunBoostTime_C extends UPerkEffect {
    readonly __static_USkill_MarathonGuy_RunBoostTime_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        ExecuteUbergraph_Skill_MarathonGuy_RunBoostTime(EntryPoint: number): void;
    };
    readonly __properties_USkill_MarathonGuy_RunBoostTime_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        USkill_MarathonGuy_RunBoostTime_C['__static_USkill_MarathonGuy_RunBoostTime_C'] &
        UPerkEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        USkill_MarathonGuy_RunBoostTime_C['__properties_USkill_MarathonGuy_RunBoostTime_C'] &
        UPerkEffect['__propertyRegistry'];
}

