declare interface ABP_CombatBubbleProjectorNew_C extends AGuardianAbilityItem {
    UberGraphFrame: FPointerToUberGraphFrame;
    Gauntlet_IdleSound: UFSDAudioComponent;
    CombatBubbleInstance: UObject;
    BubbleActive: boolean;
    IsActive: boolean;
    InputPressedTime: FTimerHandle;
    AbilityChargeTime: number;
    ForwardRepelInstance: ABP_CombatBubbleRepelForwardType_C;
    AbilityChargeIpuntSwitch: number;
    inputKeyReleased: boolean;
    isOnCooldown: boolean;
    OnRep_BubbleActive(): void;
    ReceiveBeginPlay(): void;
    OnAbilityPressed_Delegate_Event(): void;
    Server_ActivateForwardRepel(Location: FVector, Rotation: FRotator): void;
    RecieveUnequipped(): void;
    ExecuteUbergraph_BP_CombatBubbleProjectorNew(EntryPoint: number): void;
}
declare const ABP_CombatBubbleProjectorNew_C: ABP_CombatBubbleProjectorNew_C;

