declare interface UTutorial_Hint_Losing_C extends UTutorialHintComponent {
    UberGraphFrame: FPointerToUberGraphFrame;
    AccumilatedDamage: number;
    TotalDamageBeforeShowingHint: number;
    Drilldozer: AEscortMule;
    DrilldozerHealth: UFriendlyHealthComponent;
    ReceiveOnInitialized(): void;
    TriggerHintLosing(): void;
    ExecuteUbergraph_Tutorial_Hint_Losing(EntryPoint: number): void;
}
declare const UTutorial_Hint_Losing_C: UTutorial_Hint_Losing_C;

