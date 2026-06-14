declare interface UMinigame_Score_C extends UMinigameScoreWidget {
    Text: UTextBlock;
    TargetScore: UTextBlock;
    SetNumberText: UTextBlock;
    Score: UTextBlock;
    Divider: UTextBlock;
    SetNumber(newSetnumber: number): void;
    SetTarget(Target: number): void;
    SetScore(Score: number): void;
}
declare const UMinigame_Score_C: UMinigame_Score_C;

