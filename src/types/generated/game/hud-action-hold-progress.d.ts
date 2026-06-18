declare interface UHUD_ActionHoldProgress_C extends UFSDUserWidget {
    readonly __static_UHUD_ActionHoldProgress_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnActionHoldProgress(Description: string, Progress: number): void;
        ExecuteUbergraph_HUD_ActionHoldProgress(EntryPoint: number): void;
    };
    readonly __properties_UHUD_ActionHoldProgress_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Invalidation: UInvalidationBox;
        HoldingProgress: UProgressBar;
        ActionText: UHUD_DefaultLabel_C;
    };
    readonly __staticRegistry: 
        UHUD_ActionHoldProgress_C['__static_UHUD_ActionHoldProgress_C'] &
        UFSDUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_ActionHoldProgress_C['__properties_UHUD_ActionHoldProgress_C'] &
        UFSDUserWidget['__propertyRegistry'];
}

