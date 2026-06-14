declare interface UBasic_Menu_LargeWindowWithHeader_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    PutStuffHere: UNamedSlot;
    MainWindowBG: UBorder;
    MainBG_Outline: UBorder;
    HeaderBG: UBorder;
    DATA_headerText: UTextBlock;
    BackgroundBlur_2: UBackgroundBlur;
    BackgroundBlur_1: UBackgroundBlur;
    Edge_Tint: FLinearColor;
    HeaderText: FText;
    DisableBackgroundBlur: boolean;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Basic_Menu_LargeWindowWithHeader(EntryPoint: number): void;
}
declare const UBasic_Menu_LargeWindowWithHeader_C: UBasic_Menu_LargeWindowWithHeader_C;

