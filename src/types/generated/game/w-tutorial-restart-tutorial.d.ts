declare interface UW_Tutorial_RestartTutorial_C extends UW_TutorialContent_Base_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    TimerHandle: FTimerHandle;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnCloseTutorial(): void;
    ExecuteUbergraph_W_Tutorial_RestartTutorial(EntryPoint: number): void;
}
declare const UW_Tutorial_RestartTutorial_C: UW_Tutorial_RestartTutorial_C;

