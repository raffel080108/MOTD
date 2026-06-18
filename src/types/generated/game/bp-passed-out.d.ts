declare interface UBP_PassedOut_C extends UPassedOutStateComponent {
    readonly __static_UBP_PassedOut_C: {
        AllPassedOut(AllPassedOut: boolean): void;
        ReceiveBeginPlay(): void;
        BeginFadeToBlack(): void;
        ReceiveStateEnter(): void;
        ReceiveStateExit(): void;
        ReceiveTeamPassedOut(): void;
        Cleanup_Gym(): void;
        ExecuteUbergraph_BP_PassedOut(EntryPoint: number): void;
    };
    readonly __properties_UBP_PassedOut_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        WakeInBed: boolean;
    };
    readonly __staticRegistry: 
        UBP_PassedOut_C['__static_UBP_PassedOut_C'] &
        UPassedOutStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_PassedOut_C['__properties_UBP_PassedOut_C'] &
        UPassedOutStateComponent['__propertyRegistry'];
}

