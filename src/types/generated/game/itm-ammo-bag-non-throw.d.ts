declare interface AITM_AmmoBag_NonThrow_C extends AAnimatedItem {
    UberGraphFrame: FPointerToUberGraphFrame;
    SM_AmmoCase50Cal_FP: UStaticMeshComponent;
    SM_AmmoCase50Cal_TP: UStaticMeshComponent;
    ammoScale: number;
    AddedToInventory(ItemOwner: APlayerCharacter): void;
    RemovedFromInventory(oldCharacter: ACharacter): void;
    ExecuteUbergraph_ITM_AmmoBag_NonThrow(EntryPoint: number): void;
}
declare const AITM_AmmoBag_NonThrow_C: AITM_AmmoBag_NonThrow_C;

