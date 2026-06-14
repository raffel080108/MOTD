declare interface UMinigame_Life_C extends UMinigameLifeWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Minigame_LIfe_Widget_80: UMinigame_LIfe_Widget_C;
    Minigame_LIfe_Widget_37: UMinigame_LIfe_Widget_C;
    Minigame_LIfe_Widget: UMinigame_LIfe_Widget_C;
    Lives: UWrapBox;
    OuterColorNotInUse: FLinearColor;
    OuterColorInUse: FLinearColor;
    OuterColorExpended: FLinearColor;
    PREVIEW_MAXlIFE: number;
    PREVIEW_LIFE: number;
    SetMaxLives(Lives: number): void;
    SetTimer(Time: number): void;
    SetLives(Lives: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    Construct(): void;
    ExecuteUbergraph_Minigame_Life(EntryPoint: number): void;
}
declare const UMinigame_Life_C: UMinigame_Life_C;

