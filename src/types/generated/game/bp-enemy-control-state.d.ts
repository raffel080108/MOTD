declare interface UBP_EnemyControlState_C extends UEnemyControlStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    GetOnMontage: UAnimMontage;
    OnNotifyEnd_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: FName): void;
    OnNotifyBegin_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: FName): void;
    OnInterrupted_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: FName): void;
    OnBlendOut_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: FName): void;
    OnCompleted_C6BE400543D83DD77DB15BA38DC1ED24(NotifyName: FName): void;
    OnControllingEnemy(IsControlling: boolean): void;
    OnControllingEnemyAttached(): void;
    ExecuteUbergraph_BP_EnemyControlState(EntryPoint: number): void;
}
declare const UBP_EnemyControlState_C: UBP_EnemyControlState_C;

