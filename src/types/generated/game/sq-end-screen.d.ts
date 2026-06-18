declare interface USQ_EndScreen_DirectorBP_C extends ULevelSequenceDirector {
    readonly __static_USQ_EndScreen_DirectorBP_C: {
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP_5(): void;
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP_4(): void;
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP_3(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP_2(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP_1(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP_0(): FMovieSceneDynamicBindingResolveResult;
        SequenceEvent__ENTRYPOINTSQ_EndScreen_DirectorBP(): FMovieSceneDynamicBindingResolveResult;
        BindToBosco(TemplateSequence: UTemplateSequenceCollection, EditorClassOverride: TSubclassOf<ABosco>): FMovieSceneDynamicBindingResolveResult;
        RepositionPlayer(PlayerIndex: number): void;
        IsPlayerCount(ConditionContext: FMovieSceneConditionContext, PlayerCount: number): boolean;
        GetBoundPlayerCount(PlayerCount: number): void;
        GetPlayerCharacterFromBinding(BindingContext: FMovieSceneConditionContext, PlayerCharacter: APlayerCharacter): void;
        SetAnimationFromClass(BindingContext: FMovieSceneConditionContext, Anims: UAnimSequence[]): void;
        EvaluateWalkInAnimation(ConditionContext: FMovieSceneConditionContext): boolean;
        BindToPlayerCharacter(PlayerIndex: number, TemplateSequence: UTemplateSequenceCollection, EditorClassOverride: TSubclassOf<ABP_PlayerCharacter_C>): FMovieSceneDynamicBindingResolveResult;
        LoopStart(): void;
        LoopEnd(): void;
        OnCreated(): void;
        OnStop_Event(): void;
        ExecuteUbergraph_SQ_EndScreen_DirectorBP(EntryPoint: number): void;
    };
    readonly __properties_USQ_EndScreen_DirectorBP_C: {
        UberGraphFrame: FPointerToUberGraphFrame;
        Characters: AActor[];
        LoopStartTime: FQualifiedFrameTime;
        PlayerIdleMontagesOnSuccess: FTemplateSequenceMontages;
        PlayerIdleMontagesOnFailure: FTemplateSequenceMontages;
        BoscoIdleMontagesOnSucess: FTemplateSequenceMontages;
        BoscoIdleMontagesOnFailure: FTemplateSequenceMontages;
    };
    readonly __staticRegistry: 
        USQ_EndScreen_DirectorBP_C['__static_USQ_EndScreen_DirectorBP_C'] &
        ULevelSequenceDirector['__staticRegistry'];
    readonly __propertyRegistry: 
        USQ_EndScreen_DirectorBP_C['__properties_USQ_EndScreen_DirectorBP_C'] &
        ULevelSequenceDirector['__propertyRegistry'];
}

