declare interface UBP_JumpBoots_C extends UPerkEffectCooldown {
    readonly __static_UBP_JumpBoots_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        ExecuteUbergraph_BP_JumpBoots(EntryPoint: number): void;
    };
    readonly __properties_UBP_JumpBoots_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UBP_JumpBoots_C['__static_UBP_JumpBoots_C'] &
        UPerkEffectCooldown['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_JumpBoots_C['__properties_UBP_JumpBoots_C'] &
        UPerkEffectCooldown['__propertyRegistry'];
}

