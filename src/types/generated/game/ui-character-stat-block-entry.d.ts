declare interface UUI_CharacterStatBlock_Entry_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TitleSlot: UNamedSlot;
    TextBlock_2: UTextBlock;
    SizeBox: USizeBox;
    Content: UNamedSlot;
    Basic_Image_3: UBasic_Image_C;
    TitleHeight: number;
    Text: FText;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_CharacterStatBlock_Entry(EntryPoint: number): void;
}
declare const UUI_CharacterStatBlock_Entry_C: UUI_CharacterStatBlock_Entry_C;

