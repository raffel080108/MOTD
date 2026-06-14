declare interface USQ_Condition_GetMissionSuccessfull_C extends UMovieSceneCondition {
    TemplateCollection: UTemplateSequenceCollection;
    StartframeOffsetRandomRange: number;
    BP_GetScope(): EMovieSceneConditionScope;
    BP_EvaluateCondition(ConditionContext: FMovieSceneConditionContext): boolean;
}
declare const USQ_Condition_GetMissionSuccessfull_C: USQ_Condition_GetMissionSuccessfull_C;

