declare interface USQ_Load_Elevator_End_DirectorBP_C extends ULevelSequenceDirector {
    readonly __static_USQ_Load_Elevator_End_DirectorBP_C: {
        SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP_2(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP_1(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP_0(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_Load_Elevator_End_DirectorBP(): FMovieSceneDynamicBindingResolveResult;
        BP_PlayerCharacter_DynamicBinding(PlayerControllerIndex: number): FMovieSceneDynamicBindingResolveResult;
        OnCreated(): void;
        OnStop_Event(): void;
        ExecuteUbergraph_SQ_Load_Elevator_End_DirectorBP(EntryPoint: number): void;
    };
    readonly __properties_USQ_Load_Elevator_End_DirectorBP_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Characters: AActor[];
    };
    readonly __staticRegistry: 
        USQ_Load_Elevator_End_DirectorBP_C['__static_USQ_Load_Elevator_End_DirectorBP_C'] &
        ULevelSequenceDirector['__staticRegistry'];
    readonly __propertyRegistry: 
        USQ_Load_Elevator_End_DirectorBP_C['__properties_USQ_Load_Elevator_End_DirectorBP_C'] &
        ULevelSequenceDirector['__propertyRegistry'];
}

