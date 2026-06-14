declare interface UWidget_Terminal_Intercom_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_1: UTextBlock;
    Edge: UBorder;
    PlayButton: UWidgetAnimation;
    NewVar_0: FSlateColor;
    SetIsPlaying(Index: boolean): void;
    Construct(): void;
    ExecuteUbergraph_Widget_Terminal_Intercom(EntryPoint: number): void;
}
declare const UWidget_Terminal_Intercom_C: UWidget_Terminal_Intercom_C;

