declare interface UEEC_Poisoned_C extends UElementEventComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    PathfinderCharacter: ADeepPathfinderCharacter;
    TimerHandle: FTimerHandle;
    StaggerDuration: number;
    SourcePlayer: APlayerCharacter;
    ReceiveBeginPlay(): void;
    ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
    RefreshStaggerTimer(): void;
    CustomEvent(): void;
    ExecuteUbergraph_EEC_Poisoned(EntryPoint: number): void;
}
declare const UEEC_Poisoned_C: UEEC_Poisoned_C;

