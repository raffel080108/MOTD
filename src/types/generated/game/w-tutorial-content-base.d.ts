declare interface UW_TutorialContent_Base_C extends UTutorialContentWidget {
    readonly __static_UW_TutorialContent_Base_C: {
        CompleteWithAnim(): void;
        OnShown(): void;
        SetText(TaskHeader: string, TaskText: string, CheckBoxText: string): void;
        SetImage(Image: UTexture2D): void;
        BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_0_CompleteAnimationFinished__DelegateSignature(): void;
        BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_1_RemoveAnimationFinished__DelegateSignature(): void;
        PlayTaskProgress(): void;
        OnRemoveWidget(): void;
        SetTaskCounter(Counter: number, Denominator: number): void;
        ExecuteUbergraph_W_TutorialContent_Base(EntryPoint: number): void;
    };
    readonly __properties_UW_TutorialContent_Base_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ITM_BasicTutorialWindow: UITM_BasicTutorialWindow_C;
        MainObjectiveAnim: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UW_TutorialContent_Base_C['__static_UW_TutorialContent_Base_C'] &
        UTutorialContentWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UW_TutorialContent_Base_C['__properties_UW_TutorialContent_Base_C'] &
        UTutorialContentWidget['__propertyRegistry'];
}

