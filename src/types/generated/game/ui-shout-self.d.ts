declare interface UUI_Shout_Self_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Shout_Text: UBasicTextBlock;
    Root_Overlay: UOverlay;
    Content_SizeBox: USizeBox;
    TimerHandle: FTimerHandle;
    CREATEDELEGATE_PROXYFUNCTION_0(InSender: APlayerCharacter, InText: FText, InDuration: number): void;
    TimerEnded(): void;
    Shout(InSender: APlayerCharacter, InText: FText, InDuration: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_UI_Shout_Self(EntryPoint: number): void;
}
declare const UUI_Shout_Self_C: UUI_Shout_Self_C;

