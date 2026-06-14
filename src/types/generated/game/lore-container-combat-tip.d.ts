declare interface ULore_Container_CombatTip_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    VerticalBox_19: UVerticalBox;
    TextBlock_Headline: UTextBlock;
    RichTextBlock_Body: URichTextBlock;
    Image_ExclamaitonMark: UImage;
    Basic_Window: UBasic_Window_CutCorner_C;
    Intro: UWidgetAnimation;
    Headline: FText;
    Text: FText;
    SetText(Headline: FText, Body: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    PlayIntro(): void;
    ExecuteUbergraph_Lore_Container_CombatTip(EntryPoint: number): void;
}
declare const ULore_Container_CombatTip_C: ULore_Container_CombatTip_C;

