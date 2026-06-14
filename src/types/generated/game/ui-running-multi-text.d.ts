declare interface UUI_RunningMultiText_C extends UBasic_Label_C {
    UberGraphFrame: FPointerToUberGraphFrame;
    texts: TArray<FText>;
    DelayBetweenText: number;
    TextDuration: number;
    RandomizeText: boolean;
    RunnerProgress: number;
    RunnerActive: boolean;
    NextIndex: number;
    CurrentLine: FString;
    AudioBeginLine: USoundCue;
    AudioEndLine: USoundCue;
    PlayCue(InSound: USoundCue): void;
    InitRun(): void;
    SetNextLine(): void;
    SetRunnerProgress(InProgress: number, Finished: boolean): void;
    SetTextRunnerActive(Inactive: boolean): void;
    SetTexts(InTexts: TArray<FText>): void;
    OnTick_B06C42A944ABEA2C4BF8E7AF24421023(DeltaTime: number, NormalizedTime: number): void;
    Completed_B06C42A944ABEA2C4BF8E7AF24421023(DeltaTime: number, NormalizedTime: number): void;
    PreConstruct(IsDesignTime: boolean): void;
    DoRun(): void;
    Destruct(): void;
    ExecuteUbergraph_UI_RunningMultiText(EntryPoint: number): void;
}
declare const UUI_RunningMultiText_C: UUI_RunningMultiText_C;

