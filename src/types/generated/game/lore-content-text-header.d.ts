declare interface ULore_Content_Text_Header_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Headline: UTextBlock;
    Spacer_Size: USpacer;
    ITM_MisSel_MissionIconBasic: UITM_MisSel_MissionIconBasic_C;
    Image_Icon: UImage;
    Basic_BG_Window_65: UBasic_BG_CutCorner_C;
    MinDesiredWidth: number;
    SetData(Header_Text: FText, Icon: UTexture2D, MissionIcon: FObjectiveMissionIcon): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Lore_Content_Text_Header(EntryPoint: number): void;
}
declare const ULore_Content_Text_Header_C: ULore_Content_Text_Header_C;

