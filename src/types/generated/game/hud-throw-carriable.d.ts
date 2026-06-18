declare interface UHUD_ThrowCarriable_C extends UFSDUserWidget {
    readonly __static_UHUD_ThrowCarriable_C: {
        Construct(): void;
        OnThrowCarriableProgress_Event(Progress: number, timeToCancel: number, isDone: boolean): void;
        ExecuteUbergraph_HUD_ThrowCarriable(EntryPoint: number): void;
    };
    readonly __properties_UHUD_ThrowCarriable_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Invalidation: UInvalidationBox;
        HorizontalBox_0: UHorizontalBox;
        HoldingProgressR: UProgressBar;
        HoldingProgressL: UProgressBar;
    };
    readonly __staticRegistry: 
        UHUD_ThrowCarriable_C['__static_UHUD_ThrowCarriable_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_ThrowCarriable_C['__properties_UHUD_ThrowCarriable_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

