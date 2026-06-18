declare interface UBP_DownedBomb_C extends UPerkEffect {
    readonly __static_UBP_DownedBomb_C: {
        Receive_ActivatePerk(Character: APlayerCharacter, Value: number): void;
        CustomEvent(Active: boolean): void;
        Bomb(): void;
        ExecuteUbergraph_BP_DownedBomb(EntryPoint: number): void;
    };
    readonly __properties_UBP_DownedBomb_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        CanUse: boolean;
    };
    readonly __staticRegistry: 
        UBP_DownedBomb_C['__static_UBP_DownedBomb_C'] &
        UPerkEffect['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_DownedBomb_C['__properties_UBP_DownedBomb_C'] &
        UPerkEffect['__propertyRegistry'];
}

