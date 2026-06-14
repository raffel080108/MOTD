declare interface UW_FitnessGym_ScoreDisplay_C extends UActorContextWidget {
    TEMPREPCOUNT: UTextBlock;
    TEMPLIVESTEXT_1: UTextBlock;
    RepsPerSet: UTextBlock;
    SetRepsPerSet(RepsPerSetAmount: number): void;
    SetRemainingReps(Amount: number): void;
}
declare const UW_FitnessGym_ScoreDisplay_C: UW_FitnessGym_ScoreDisplay_C;

