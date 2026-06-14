declare interface UUI_ShoutBox_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DATA_Message: UFSDLabelWidget;
    DATA_Distance: UTextBlock;
    DATA_Class: UTextBlock;
    CharacterIcon: UImage;
    AnimIntro: UWidgetAnimation;
    TimeoutHandle: FTimerHandle;
    ShoutActive: boolean;
    OnShoutActiveChanged: FUI_ShoutBox_COnShoutActiveChanged;
    UpdateBoxWidth(): void;
    SetDistance(InDistance: number): void;
    OnShoutEnd(): void;
    ShoutStart(InSender: APlayerCharacter, InText: FText, InDuration: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_UI_ShoutBox(EntryPoint: number): void;
    OnShoutActiveChanged__DelegateSignature(InShoutActive: boolean): void;
}
declare const UUI_ShoutBox_C: UUI_ShoutBox_C;

