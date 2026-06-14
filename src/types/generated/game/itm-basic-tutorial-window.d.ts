declare interface UITM_BasicTutorialWindow_C extends UUserWidget {
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
    SetText(Header: FText, MainText: FText, TaskText: FText): void;
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
}
declare const UITM_BasicTutorialWindow_C: UITM_BasicTutorialWindow_C;

