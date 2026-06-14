declare interface UMinigame_ButtonInstructions_C extends UMinigameButtonInstruction {
    UberGraphFrame: FPointerToUberGraphFrame;
    BasicImage: UBasicImage;
    PREVEIW_TEXTURE: UTexture2D;
    OVERRIDE_TEXTURE: UTexture2D;
    SetTexture(Texture: UTexture2D): void;
    PreConstruct(IsDesignTime: boolean): void;
    ExecuteUbergraph_Minigame_ButtonInstructions(EntryPoint: number): void;
}
declare const UMinigame_ButtonInstructions_C: UMinigame_ButtonInstructions_C;

