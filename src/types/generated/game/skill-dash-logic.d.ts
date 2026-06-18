declare interface USkill_Dash_Logic_C extends UPerkEffectCooldown {
    readonly __static_USkill_Dash_Logic_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        ExecuteUbergraph_Skill_Dash_Logic(EntryPoint: number): void;
    };
    readonly __properties_USkill_Dash_Logic_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        USkill_Dash_Logic_C['__static_USkill_Dash_Logic_C'] &
        UPerkEffectCooldown['__staticRegistry'];
    readonly __propertyRegistry: 
        USkill_Dash_Logic_C['__properties_USkill_Dash_Logic_C'] &
        UPerkEffectCooldown['__propertyRegistry'];
}

