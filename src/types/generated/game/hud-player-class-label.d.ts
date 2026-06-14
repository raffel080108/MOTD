declare interface UHUD_PlayerClass_Label_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    DATA_ClassName: UTextBlock;
    UpdateCharacterName(): void;
    Construct(): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_HUD_PlayerClass_Label(EntryPoint: number): void;
}
declare const UHUD_PlayerClass_Label_C: UHUD_PlayerClass_Label_C;

