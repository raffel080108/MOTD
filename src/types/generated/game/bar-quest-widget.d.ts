declare interface UBar_Quest_Widget_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SetgoalText: UTextBlock;
    Exercise_Icon: UImage;
    Divider: UTextBlock;
    CurrentSetText: UTextBlock;
    CheckMark_Image: UImage;
    AppearScale: UWidgetAnimation;
    FadeOut: UWidgetAnimation;
    SetGoal: number;
    Identifier: UResourceData;
    SetRep: number;
    OnRep_CurrentScore(): void;
    GetIdentifier(Identifier: UResourceData): void;
    ChangeCurrentSet(New: number): void;
    Construct(): void;
    ExecuteUbergraph_Bar_Quest_Widget(EntryPoint: number): void;
}
declare const UBar_Quest_Widget_C: UBar_Quest_Widget_C;

