declare interface UEEC_Poisoned_C extends UElementEventComponent {
    readonly __static_UEEC_Poisoned_C: {
        ReceiveBeginPlay(): void;
        ReceiveEndPlay(EndPlayReason: EEndPlayReason): void;
        RefreshStaggerTimer(): void;
        CustomEvent(): void;
        ExecuteUbergraph_EEC_Poisoned(EntryPoint: number): void;
    };
    readonly __properties_UEEC_Poisoned_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        PathfinderCharacter: ADeepPathfinderCharacter;
        TimerHandle: FTimerHandle;
        StaggerDuration: number;
        SourcePlayer: APlayerCharacter;
    };
    readonly __staticRegistry: 
        UEEC_Poisoned_C['__static_UEEC_Poisoned_C'] &
        UElementEventComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UEEC_Poisoned_C['__properties_UEEC_Poisoned_C'] &
        UElementEventComponent['__propertyRegistry'];
}

