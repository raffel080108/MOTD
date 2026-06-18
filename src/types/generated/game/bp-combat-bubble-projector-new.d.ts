declare interface ABP_CombatBubbleProjectorNew_C extends AGuardianAbilityItem {
    readonly __static_ABP_CombatBubbleProjectorNew_C: {
        OnRep_BubbleActive(): void;
        ReceiveBeginPlay(): void;
        OnAbilityPressed_Delegate_Event(): void;
        Server_ActivateForwardRepel(Location: FVector, Rotation: FRotator): void;
        RecieveUnequipped(): void;
        ExecuteUbergraph_BP_CombatBubbleProjectorNew(EntryPoint: number): void;
    };
    readonly __properties_ABP_CombatBubbleProjectorNew_C: {
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
    };
    readonly __staticRegistry: 
        ABP_CombatBubbleProjectorNew_C['__static_ABP_CombatBubbleProjectorNew_C'] &
        AGuardianAbilityItem['__staticRegistry'];
    readonly __propertyRegistry: 
        ABP_CombatBubbleProjectorNew_C['__properties_ABP_CombatBubbleProjectorNew_C'] &
        AGuardianAbilityItem['__propertyRegistry'];
}

