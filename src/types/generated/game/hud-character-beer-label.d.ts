declare interface UHUD_CharacterBeerLabel_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    BarBuff: UImage;
    buff: UTemporaryBuff;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_CharacterBeerLabel(EntryPoint: number): void;
}
declare const UHUD_CharacterBeerLabel_C: UHUD_CharacterBeerLabel_C;

