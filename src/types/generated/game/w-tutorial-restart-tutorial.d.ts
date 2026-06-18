declare interface UW_Tutorial_RestartTutorial_C extends UW_TutorialContent_Base_C {
    readonly __static_UW_Tutorial_RestartTutorial_C: {
        PreConstruct(IsDesignTime: boolean): void;
        Construct(): void;
        OnCloseTutorial(): void;
        ExecuteUbergraph_W_Tutorial_RestartTutorial(EntryPoint: number): void;
    };
    readonly __properties_UW_Tutorial_RestartTutorial_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TimerHandle: FTimerHandle;
    };
    readonly __staticRegistry: 
        UW_Tutorial_RestartTutorial_C['__static_UW_Tutorial_RestartTutorial_C'] &
        UW_TutorialContent_Base_C['__staticRegistry'];
    readonly __propertyRegistry: 
        UW_Tutorial_RestartTutorial_C['__properties_UW_Tutorial_RestartTutorial_C'] &
        UW_TutorialContent_Base_C['__propertyRegistry'];
}

