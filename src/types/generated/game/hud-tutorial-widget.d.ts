declare interface UHUD_TutorialWidget_C extends UTutorialWidget {
    readonly __static_UHUD_TutorialWidget_C: {
        OnShow(Text: string, Title: string, TaskText: string, Image: UTexture2D): void;
        Construct(): void;
        OnHide(watched: boolean): void;
        BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_0_RemoveAnimationFinished__DelegateSignature(): void;
        BndEvt__ITM_BasicTutorialWindow_K2Node_ComponentBoundEvent_1_CompleteAnimationFinished__DelegateSignature(): void;
        ContinueChange(): void;
        ExecuteUbergraph_HUD_TutorialWidget(EntryPoint: number): void;
    };
    readonly __properties_UHUD_TutorialWidget_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        ITM_BasicTutorialWindow: UITM_BasicTutorialWindow_C;
        AnimationSpeed: number;
        DefaultHeader: string;
        IsChangingHintText: boolean;
    };
    readonly __staticRegistry: 
        UHUD_TutorialWidget_C['__static_UHUD_TutorialWidget_C'] &
        UTutorialWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UHUD_TutorialWidget_C['__properties_UHUD_TutorialWidget_C'] &
        UTutorialWidget['__propertyRegistry'];
}

