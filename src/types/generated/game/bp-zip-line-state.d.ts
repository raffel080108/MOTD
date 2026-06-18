declare interface UBP_ZipLineState_C extends UZipLineStateComponent {
    readonly __static_UBP_ZipLineState_C: {
        GetJumpVector(LookVector: FVector, CurrentVelocity: FVector): FVector;
        ReceiveSpeedBoostActivated(): void;
        ReceiveSpeedBoostDeactivated(): void;
        ExecuteUbergraph_BP_ZipLineState(EntryPoint: number): void;
    };
    readonly __properties_UBP_ZipLineState_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
    };
    readonly __staticRegistry: 
        UBP_ZipLineState_C['__static_UBP_ZipLineState_C'] &
        UZipLineStateComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UBP_ZipLineState_C['__properties_UBP_ZipLineState_C'] &
        UZipLineStateComponent['__propertyRegistry'];
}

