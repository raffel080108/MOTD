declare interface UBP_DeadState_C extends UDeadStateComponent {
    readonly __static_UBP_DeadState_C: {
        ReceiveBeginPlay(): void;
        ReceiveStateExit(): void;
        ReceiveStateEnter(): void;
        SetDeathParameters(respawnDelay: number, effectDelay: number, deathMontage: UAnimMontage, deathEffect: UFXSystemAsset, useAnimationTimeAsRespawnTime: boolean): void;
        ExecuteUbergraph_BP_DeadState(EntryPoint: number): void;
    };
    readonly __properties_UBP_DeadState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        deathEffect: UFXSystemAsset;
        deathMontage: UAnimMontage;
    };
    readonly __staticRegistry: 
        UBP_DeadState_C['__static_UBP_DeadState_C'] &
        UDeadStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_DeadState_C['__properties_UBP_DeadState_C'] &
        UDeadStateComponent['__propertyRegistry'];
}

