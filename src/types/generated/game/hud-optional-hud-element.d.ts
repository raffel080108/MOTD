declare interface UHUD_OptionalHudElement_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Content: UNamedSlot;
    VisibilityGroup: UHUDVisibilityGroup;
    VisibleMode: ESlateVisibility;
    HiddenMode: ESlateVisibility;
    Flags: TSet<FName>;
    VisibilityDurationHandle: FTimerHandle;
    TimerEnded(): void;
    IsDynamicallyVisible(): boolean;
    UpdateVisibility(): void;
    SetDynamicallyVisibleForDuration(InDuration: number): void;
    ClearDynamicallyVisibleFlags(): void;
    SetDynamicallyVisibleFlag(InName: FName, InFlagSet: boolean, OutIsDynamicallyVisible: boolean): void;
    Construct(): void;
    OnToggleTrackingEvent_Event(boolValue: boolean): void;
    ExecuteUbergraph_HUD_OptionalHudElement(EntryPoint: number): void;
}
declare const UHUD_OptionalHudElement_C: UHUD_OptionalHudElement_C;

