declare interface UBP_JumpBoots_C extends UPerkEffectCooldown {
    UberGraphFrame: FPointerToUberGraphFrame;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    ExecuteUbergraph_BP_JumpBoots(EntryPoint: number): void;
}
declare const UBP_JumpBoots_C: UBP_JumpBoots_C;

