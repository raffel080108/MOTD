declare interface UW_FitnessGym_Activity_Highscore_C extends UActorContextWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    HighscoreName: UTextBlock;
    HighscoreAmount: UTextBlock;
    ActivityImage: UImage;
    ID: number;
    GetID(ID: number): void;
    SetID(ID: number): void;
    SetIcon(Texture: UTexture2D): void;
    SetHighscore(PlayerName: FText, HighscoreAmount: number): void;
    Construct(): void;
    Tick(MyGeometry: FGeometry, InDeltaTime: number): void;
    ExecuteUbergraph_W_FitnessGym_Activity_Highscore(EntryPoint: number): void;
}
declare const UW_FitnessGym_Activity_Highscore_C: UW_FitnessGym_Activity_Highscore_C;

