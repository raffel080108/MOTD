declare interface UBP_EnemyControlState_C extends UEnemyControlStateComponent {
    readonly __static_UBP_EnemyControlState_C: {
        OnNotifyEnd_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: string): void;
        OnNotifyBegin_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: string): void;
        OnInterrupted_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: string): void;
        OnBlendOut_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: string): void;
        OnCompleted_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: string): void;
        OnControllingEnemy(IsControlling: boolean): void;
        OnControllingEnemyAttached(): void;
        ExecuteUbergraph_BP_EnemyControlState(EntryPoint: number): void;
    };
    readonly __properties_UBP_EnemyControlState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        GetOnMontage: UAnimMontage;
    };
    readonly __staticRegistry: 
        UBP_EnemyControlState_C['__static_UBP_EnemyControlState_C'] &
        UEnemyControlStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_EnemyControlState_C['__properties_UBP_EnemyControlState_C'] &
        UEnemyControlStateComponent['__propertyRegistry'];
}

