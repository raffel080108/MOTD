declare interface UBP_DownedBomb_C extends UPerkEffect {
    UberGraphFrame: FPointerToUberGraphFrame;
    CanUse: boolean;
    Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
    CustomEvent(Active: boolean): void;
    Bomb(): void;
    ExecuteUbergraph_BP_DownedBomb(EntryPoint: number): void;
}
declare const UBP_DownedBomb_C: UBP_DownedBomb_C;

