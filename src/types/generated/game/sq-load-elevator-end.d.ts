declare interface USQ_Load_Elevator_End_DirectorBP_C extends ULevelSequenceDirector {
    UberGraphFrame: FPointerToUberGraphFrame;
    Characters: TArray<AActor>;
    SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP_2(): FMovieSceneDynamicBindingResolveResult;
    SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP_1(): FMovieSceneDynamicBindingResolveResult;
    SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP_0(): FMovieSceneDynamicBindingResolveResult;
    SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP(): FMovieSceneDynamicBindingResolveResult;
    BP_PlayerCharacter_DynamicBinding(PlayerControllerIndex: number): FMovieSceneDynamicBindingResolveResult;
    OnCreated(): void;
    OnStop_Event(): void;
    ExecuteUbergraph_SQ_Load_Elevator_End_DirectorBP(EntryPoint: number): void;
}
declare const USQ_Load_Elevator_End_DirectorBP_C: USQ_Load_Elevator_End_DirectorBP_C;

