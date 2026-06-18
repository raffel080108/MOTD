declare interface AWPN_Pickaxe_C extends APickaxeItem {
    readonly __static_AWPN_Pickaxe_C: {
        GetGearStatEntry(PlayerState: AFSDPlayerState, Stats: FGearStatEntry[]): void;
        SpecialTargetDamageEffects(ImpactPoint: FVector, ImpactNormal: FVector): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_WPN_Pickaxe(EntryPoint: number): void;
    };
    readonly __properties_AWPN_Pickaxe_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WeaponTagContainer: UWeaponTagContainerComponent;
        CrosshairAggregator: UCrosshairAggregator;
        NextHitTime: number;
    };
    readonly __staticRegistry: 
        AWPN_Pickaxe_C['__static_AWPN_Pickaxe_C'] &
        APickaxeItem['__staticRegistry'];
    readonly __propertyRegistry: 
        AWPN_Pickaxe_C['__properties_AWPN_Pickaxe_C'] &
        APickaxeItem['__propertyRegistry'];
}

