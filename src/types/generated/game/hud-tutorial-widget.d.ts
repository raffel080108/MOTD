declare interface UHUD_TutorialWidget_C extends UTutorialWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ITM_BasicTutorialWindow: UITM_BasicTutorialWindow_C;
    AnimationSpeed: number;
    DefaultHeader: FText;
    IsChangingHintText: boolean;
    OnShow(Text: FText, Title: FText, TaskText: FText, Image: UTexture2D): void;
    Construct(): void;
    OnHide(watched: boolean): void;
    BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_0_RemoveAnimationFinished__DelegateSignature(): void;
    BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_1_CompleteAnimationFinished__DelegateSignature(): void;
    ContinueChange(): void;
    ExecuteUbergraph_HUD_TutorialWidget(EntryPoint: number): void;
}
declare const UHUD_TutorialWidget_C: UHUD_TutorialWidget_C;

