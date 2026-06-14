declare interface UBP_FrozenState_C extends UFrozenStateComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    ReceiveStateEnter(): void;
    ReceiveStateExit(): void;
    ReceiveOnDefrosting(): void;
    ExecuteUbergraph_BP_FrozenState(EntryPoint: number): void;
}
declare const UBP_FrozenState_C: UBP_FrozenState_C;

