declare interface UMoviePipelineBurnInSetting extends UMoviePipelineRenderPass {
    BurnInClass: FSoftClassPath;
    bCompositeOntoFinalImage: boolean;
    RenderTarget: UTextureRenderTarget2D;
    BurnInWidgetInstances: TArray<UMoviePipelineBurnInWidget>;
}
declare const UMoviePipelineBurnInSetting: UMoviePipelineBurnInSetting;

declare interface UMoviePipelineBurnInWidget extends UUserWidget {
    OnOutputFrameStarted(ForPipeline: UMoviePipeline): void;
}
declare const UMoviePipelineBurnInWidget: UMoviePipelineBurnInWidget;

declare interface UMoviePipelineConsoleVariableSetting extends UMoviePipelineSetting {
    ConsoleVariablePresets: TArray<TScriptInterface<IMovieSceneConsoleVariableTrackInterface>>;
    StartConsoleCommands: TArray<FString>;
    EndConsoleCommands: TArray<FString>;
    CVars: TArray<FMoviePipelineConsoleVariableEntry>;
    UpdateConsoleVariableEnableState(Name: string | FString, bIsEnabled: boolean): boolean;
    RemoveConsoleVariable(Name: string | FString, bRemoveAllInstances: boolean): boolean;
    GetConsoleVariables(): TArray<FMoviePipelineConsoleVariableEntry>;
    AddOrUpdateConsoleVariable(Name: string | FString, Value: number): boolean;
    AddConsoleVariable(Name: string | FString, Value: number): boolean;
}
declare const UMoviePipelineConsoleVariableSetting: UMoviePipelineConsoleVariableSetting;

declare interface UMoviePipelineWidgetRenderer extends UMoviePipelineRenderPass {
    bCompositeOntoFinalImage: boolean;
    RenderTarget: UTextureRenderTarget2D;
}
declare const UMoviePipelineWidgetRenderer: UMoviePipelineWidgetRenderer;

