declare interface UHUD_ActionHoldProgress_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Invalidation: UInvalidationBox;
    HoldingProgress: UProgressBar;
    ActionText: UHUD_DefaultLabel_C;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnActionHoldProgress(Description: FText, Progress: number): void;
    ExecuteUbergraph_HUD_ActionHoldProgress(EntryPoint: number): void;
}
declare const UHUD_ActionHoldProgress_C: UHUD_ActionHoldProgress_C;

