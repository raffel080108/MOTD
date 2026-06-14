declare interface UUI_Bar_QuestWarning_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    QuestBox: USizeBox;
    Image_86: UImage;
    Image_85: UImage;
    Anim_InfoBoxAppear: UWidgetAnimation;
    AnimStop(): void;
    AnimPlay(): void;
    Construct(): void;
    ExecuteUbergraph_UI_Bar_QuestWarning(EntryPoint: number): void;
}
declare const UUI_Bar_QuestWarning_C: UUI_Bar_QuestWarning_C;

