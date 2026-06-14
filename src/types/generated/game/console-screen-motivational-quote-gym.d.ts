declare interface UConsoleScreen_MotivationalQuote_Gym_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TXT_Main: UTextBlock;
    Image_140: UImage;
    Image_2: UImage;
    Image_1: UImage;
    Image: UImage;
    ConsoleScreen_BGtemplate: UConsoleScreen_BGtemplate_C;
    TextAnimEnter: UWidgetAnimation;
    TextAnimExit: UWidgetAnimation;
    IsQuoteActive: boolean;
    ShowQouteTime: number;
    TextsWorkout: TArray<FText>;
    Construct(): void;
    ShowQuote(): void;
    ExecuteUbergraph_ConsoleScreen_MotivationalQuote_Gym(EntryPoint: number): void;
}
declare const UConsoleScreen_MotivationalQuote_Gym_C: UConsoleScreen_MotivationalQuote_Gym_C;

