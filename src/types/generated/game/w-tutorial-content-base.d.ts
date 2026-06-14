declare interface UW_TutorialContent_Base_C extends UTutorialContentWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_BasicTutorialWindow: UITM_BasicTutorialWindow_C;
    MainObjectiveAnim: UWidgetAnimation;
    CompleteWithAnim(): void;
    OnShown(): void;
    SetText(TaskHeader: FText, TaskText: FText, CheckBoxText: FText): void;
    SetImage(Image: UTexture2D): void;
    BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_0_CompleteAnimationFinished__DelegateSignature(): void;
    BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_1_RemoveAnimationFinished__DelegateSignature(): void;
    PlayTaskProgress(): void;
    OnRemoveWidget(): void;
    SetTaskCounter(Counter: number, Denominator: number): void;
    ExecuteUbergraph_W_TutorialContent_Base(EntryPoint: number): void;
}
declare const UW_TutorialContent_Base_C: UW_TutorialContent_Base_C;

