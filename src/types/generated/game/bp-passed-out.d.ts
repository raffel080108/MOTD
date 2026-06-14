declare interface UBP_PassedOut_C extends UPassedOutStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    WakeInBed: boolean;
    AllPassedOut(AllPassedOut: boolean): void;
    ReceiveBeginPlay(): void;
    BeginFadeToBlack(): void;
    ReceiveStateEnter(): void;
    ReceiveStateExit(): void;
    ReceiveTeamPassedOut(): void;
    Cleanup_Gym(): void;
    ExecuteUbergraph_BP_PassedOut(EntryPoint: number): void;
}
declare const UBP_PassedOut_C: UBP_PassedOut_C;

