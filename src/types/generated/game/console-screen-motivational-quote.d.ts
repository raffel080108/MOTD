declare interface UConsoleScreen_MotivationalQuote_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_Main: UTextBlock;
    Image_140: UImage;
    Image_2: UImage;
    Image_1: UImage;
    Image: UImage;
    ConsoleScreen_BGtemplate: UConsoleScreen_BGtemplate_C;
    TextAnimEnter: UWidgetAnimation;
    TextAnimExit: UWidgetAnimation;
    TextsReclaimer: TArray<FText>;
    IsQuoteActive: boolean;
    ShowQouteTime: number;
    Construct(): void;
    ShowQuote(): void;
    ExecuteUbergraph_ConsoleScreen_MotivationalQuote(EntryPoint: number): void;
}
declare const UConsoleScreen_MotivationalQuote_C: UConsoleScreen_MotivationalQuote_C;

