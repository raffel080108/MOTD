declare interface UBP_BerzerkComp_C extends UPerkEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    OnItemEquipped_Event_0(Item: AItem): void;
    ExecuteUbergraph_BP_BerzerkComp(EntryPoint: number): void;
}
declare const UBP_BerzerkComp_C: UBP_BerzerkComp_C;

