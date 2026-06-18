declare interface USQ_Condition_GetMissionSuccessfull_C extends UMovieSceneCondition {
    readonly __static_USQ_Condition_GetMissionSuccessfull_C: {
        BP_GetScope(): EMovieSceneConditionScope;
        BP_EvaluateCondition(ConditionContext: FMovieSceneConditionContext): boolean;
    };
    readonly __properties_USQ_Condition_GetMissionSuccessfull_C: {
        TemplateCollection: UTemplateSequenceCollection;
        StartframeOffsetRandomRange: number;
    };
    readonly __staticRegistry: 
        USQ_Condition_GetMissionSuccessfull_C['__static_USQ_Condition_GetMissionSuccessfull_C'] &
        UMovieSceneCondition['__staticRegistry'];
    readonly __propertyRegistry: 
        USQ_Condition_GetMissionSuccessfull_C['__properties_USQ_Condition_GetMissionSuccessfull_C'] &
        UMovieSceneCondition['__propertyRegistry'];
}

