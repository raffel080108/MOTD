declare interface UITM_PhazeSuit_TempCharge_C extends UUserWidget {
    readonly __static_UITM_PhazeSuit_TempCharge_C: {
        SetPercent(InPercent: number): void;
        SetUsed(IsChargeUsed: boolean): void;
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        ExecuteUbergraph_ITM_PhazeSuit_TempCharge(EntryPoint: number): void;
    };
    readonly __properties_UITM_PhazeSuit_TempCharge_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ProgressBar_Middle: UProgressBar;
        Flash: UWidgetAnimation;
        Index: number;
        Total: number;
    };
    readonly __staticRegistry: 
        UITM_PhazeSuit_TempCharge_C['__static_UITM_PhazeSuit_TempCharge_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_PhazeSuit_TempCharge_C['__properties_UITM_PhazeSuit_TempCharge_C'] &
        UUserWidget['__propertyRegistry'];
}

