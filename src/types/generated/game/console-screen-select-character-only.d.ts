declare interface UConsoleScreen_SelectCharacterOnly_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    ConsoleScreen_BGtemplate: UConsoleScreen_BGtemplate_C;
    TextAnim: UWidgetAnimation;
    Construct(): void;
    ExecuteUbergraph_ConsoleScreen_SelectCharacterOnly(EntryPoint: number): void;
}
declare const UConsoleScreen_SelectCharacterOnly_C: UConsoleScreen_SelectCharacterOnly_C;

