declare interface USmallDataWindow_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PutStuffHere: UNamedSlot;
    Image_67: UImage;
    Image_1: UImage;
    Image: UImage;
    HeaderBG: UBorder;
    DATA_headerText: UTextBlock;
    ContentBG: UBorder;
    HeaderText: FText;
    HeaderColor: ENUM_MenuColors;
    UpdateColors(): void;
    SetHeaderColor(Color: ENUM_MenuColors): void;
    SetHeaderText(DATA_headerText: UTextBlock, InText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_SmallDataWindow(EntryPoint: number): void;
}
declare const USmallDataWindow_C: USmallDataWindow_C;

