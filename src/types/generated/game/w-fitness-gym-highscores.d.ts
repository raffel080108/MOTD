declare interface UW_FitnessGym_Highscores_C extends UActorContextWidget {
    HighscoresVerticalBox: UVerticalBox;
    UpdateHighscore(ID: number, Score: number, Name: FText): void;
    AddActivity(Amount: number, Textures: TArray<UTexture2D>, Ids: TArray<number>): void;
}
declare const UW_FitnessGym_Highscores_C: UW_FitnessGym_Highscores_C;

