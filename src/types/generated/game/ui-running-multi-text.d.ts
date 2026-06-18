declare interface UUI_RunningMultiText_C extends UBasic_Label_C {
    readonly __static_UUI_RunningMultiText_C: {
        PlayCue(InSound: USoundCue): void;
        InitRun(): void;
        SetNextLine(): void;
        SetRunnerProgress(InProgress: number, Finished: boolean): void;
        SetTextRunnerActive(Inactive: boolean): void;
        SetTexts(InTexts: string[]): void;
        OnTick_B06C42A944ABEA2C4BF8E7AF24421023(DeltaTime: number, NormalizedTime: number): void;
        Completed_B06C42A944ABEA2C4BF8E7AF24421023(DeltaTime: number, NormalizedTime: number): void;
        PreConstruct(IsDesignTime: boolean): void;
        DoRun(): void;
        Destruct(): void;
        ExecuteUbergraph_UI_RunningMultiText(EntryPoint: number): void;
    };
    readonly __properties_UUI_RunningMultiText_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        texts: string[];
        DelayBetweenText: number;
        TextDuration: number;
        RandomizeText: boolean;
        RunnerProgress: number;
        RunnerActive: boolean;
        NextIndex: number;
        CurrentLine: string;
        AudioBeginLine: USoundCue;
        AudioEndLine: USoundCue;
    };
    readonly __staticRegistry: 
        UUI_RunningMultiText_C['__static_UUI_RunningMultiText_C'] &
        UBasic_Label_C['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_RunningMultiText_C['__properties_UUI_RunningMultiText_C'] &
        UBasic_Label_C['__propertyRegistry'];
}

