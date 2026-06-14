declare interface UITM_CharacterBuffIcon_C extends UFSDUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    SizeBox_0: USizeBox;
    HBox_Beers: UHorizontalBox;
    Intro: UWidgetAnimation;
    Size: number;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    OnTemporaryBuffChanged(buff: UTemporaryBuff, AffectedPlayer: APlayerCharacter): void;
    ExecuteUbergraph_ITM_CharacterBuffIcon(EntryPoint: number): void;
}
declare const UITM_CharacterBuffIcon_C: UITM_CharacterBuffIcon_C;

