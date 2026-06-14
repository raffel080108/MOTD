declare interface ULore_InfoBox_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_TextBody: UTextBlock;
    TextBlock_Grayed: UTextBlock;
    Image_Icon: UImage;
    Basic_BG_Window_59: UBasic_BG_CutCorner_C;
    Text: FText;
    Icon: FObjectiveMissionIcon;
    GrayText: FText;
    SetData(Text: FText, Icon: FObjectiveMissionIcon, GrayText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetColor(InColorAndOpacity: FLinearColor): void;
    ExecuteUbergraph_Lore_InfoBox(EntryPoint: number): void;
}
declare const ULore_InfoBox_C: ULore_InfoBox_C;

