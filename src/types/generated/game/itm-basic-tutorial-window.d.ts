declare interface UITM_BasicTutorialWindow_C extends UUserWidget {
    readonly __static_UITM_BasicTutorialWindow_C: {
        SetText(Header: string, MainText: string, TaskText: string): void;
        PlayRemove(): void;
        PlayShow(): void;
        PlayComplete(): void;
        CompleteAnimFinished(): void;
        SetImage(Texture: UTexture2D): void;
        PlayTaskProgress(): void;
        SetTaskCounter(Counter: number, Denominator: number): void;
        Construct(): void;
        ExecuteUbergraph_ITM_BasicTutorialWindow(EntryPoint: number): void;
        RemoveAnimationFinished__DelegateSignature(): void;
        CompleteAnimationFinished__DelegateSignature(): void;
    };
    readonly __properties_UITM_BasicTutorialWindow_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        TextHeadline: UTextBlock;
        TaskText: URichTextSizable;
        TaskCounter: URichTextSizable;
        MainText: URichTextSizable;
        Image_Tutorial: UImage;
        Image_79: UImage;
        HorizontalBox_TaskBar: UHorizontalBox;
        Border_Checkbox: UBorder;
        Basic_CheckBox: UBasic_CheckBox_C;
        RemoveAnim: UWidgetAnimation;
        CompleteAnim: UWidgetAnimation;
        TaskProgress: UWidgetAnimation;
        CompleteAnimationFinished: FITM_BasicTutorialWindow_CCompleteAnimationFinished;
        RemoveAnimationFinished: FITM_BasicTutorialWindow_CRemoveAnimationFinished;
        TaskVisible: boolean;
    };
    readonly __staticRegistry: 
        UITM_BasicTutorialWindow_C['__static_UITM_BasicTutorialWindow_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UITM_BasicTutorialWindow_C['__properties_UITM_BasicTutorialWindow_C'] &
        UUserWidget['__propertyRegistry'];
}

