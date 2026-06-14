declare interface UUI_HomePage_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    LevelNameLabel: UTextBlock;
    GetPageInfo(Name: FText): void;
    OnPageClosed(): void;
    Construct(): void;
    OnPageOpened(ModHub: TScriptInterface<IIModHub_C>): void;
    ExecuteUbergraph_UI_HomePage(EntryPoint: number): void;
}
declare const UUI_HomePage_C: UUI_HomePage_C;

