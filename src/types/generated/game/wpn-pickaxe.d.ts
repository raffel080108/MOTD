declare interface AWPN_Pickaxe_C extends APickaxeItem {
    UberGraphFrame: FPointerToUberGraphFrame;
    WeaponTagContainer: UWeaponTagContainerComponent;
    CrosshairAggregator: UCrosshairAggregator;
    NextHitTime: number;
    GetGearStatEntry(PlayerState: AFSDPlayerState, Stats: TArray<FGearStatEntry>): void;
    SpecialTargetDamageEffects(ImpactPoint: FVector, ImpactNormal: FVector): void;
    ReceiveBeginPlay(): void;
    ExecuteUbergraph_WPN_Pickaxe(EntryPoint: number): void;
}
declare const AWPN_Pickaxe_C: AWPN_Pickaxe_C;

