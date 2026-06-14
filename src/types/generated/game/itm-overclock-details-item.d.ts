declare interface UITM_Overclock_Details_Item_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DetailText: UTextBlock;
    AdvantagousIcon: UImage;
    Text: FText;
    IsAdvantagous: boolean;
    FontSize: number;
    SetFontSize(NewSize: number): void;
    SetData(InText: FText, InIsAdvantagous: boolean): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_ITM_Overclock_Details_Item(EntryPoint: number): void;
}
declare const UITM_Overclock_Details_Item_C: UITM_Overclock_Details_Item_C;

