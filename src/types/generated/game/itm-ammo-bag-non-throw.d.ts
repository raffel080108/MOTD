declare interface AITM_AmmoBag_NonThrow_C extends AAnimatedItem {
    readonly __static_AITM_AmmoBag_NonThrow_C: {
        AddedToInventory(ItemOwner: APlayerCharacter): void;
        RemovedFromInventory(oldCharacter: ACharacter): void;
        ExecuteUbergraph_ITM_AmmoBag_NonThrow(EntryPoint: number): void;
    };
    readonly __properties_AITM_AmmoBag_NonThrow_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        SM_AmmoCase50Cal_FP: UStaticMeshComponent;
        SM_AmmoCase50Cal_TP: UStaticMeshComponent;
        ammoScale: number;
    };
    readonly __staticRegistry: 
        AITM_AmmoBag_NonThrow_C['__static_AITM_AmmoBag_NonThrow_C'] &
        AAnimatedItem['__staticRegistry'];
    readonly __propertyRegistry: 
        AITM_AmmoBag_NonThrow_C['__properties_AITM_AmmoBag_NonThrow_C'] &
        AAnimatedItem['__propertyRegistry'];
}

