declare interface ULore_List_Header_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Headline: UTextBlock;
    SetText(Headline: FText): void;
    ExecuteUbergraph_Lore_List_Header(EntryPoint: number): void;
}
declare const ULore_List_Header_C: ULore_List_Header_C;

