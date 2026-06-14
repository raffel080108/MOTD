declare interface UUI_Menu_ScreenTitle_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Root_Overlay: UOverlay;
    Bar_TextBlock: UTextBlock;
    Bar_SizeBox: USizeBox;
    Title: FText;
    SetTitle(InText: FText): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_Menu_ScreenTitle(EntryPoint: number): void;
}
declare const UUI_Menu_ScreenTitle_C: UUI_Menu_ScreenTitle_C;

