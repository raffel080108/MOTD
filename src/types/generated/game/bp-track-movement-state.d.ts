declare interface UBP_TrackMovementState_C extends UTrackMovementStateComponent {
    readonly __static_UBP_TrackMovementState_C: {
        ReceiveTick(DeltaSeconds: number): void;
        ReceiveBeginPlay(): void;
        ExecuteUbergraph_BP_TrackMovementState(EntryPoint: number): void;
    };
    readonly __properties_UBP_TrackMovementState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UBP_TrackMovementState_C['__static_UBP_TrackMovementState_C'] &
        UTrackMovementStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_TrackMovementState_C['__properties_UBP_TrackMovementState_C'] &
        UTrackMovementStateComponent['__propertyRegistry'];
}

