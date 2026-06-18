declare interface UMoviePipelineBurnInSetting extends UMoviePipelineRenderPass {
    readonly __properties_UMoviePipelineBurnInSetting: {
        BurnInClass: FSoftClassPath;
        bCompositeOntoFinalImage: boolean;
        RenderTarget: UTextureRenderTarget2D;
        BurnInWidgetInstances: UMoviePipelineBurnInWidget[];
    };
    readonly __staticRegistry: 
        UMoviePipelineRenderPass['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineBurnInSetting['__properties_UMoviePipelineBurnInSetting'] &
        UMoviePipelineRenderPass['__propertyRegistry'];
}

declare interface UMoviePipelineBurnInWidget extends UUserWidget {
    readonly __static_UMoviePipelineBurnInWidget: {
        OnOutputFrameStarted(ForPipeline: UMoviePipeline): void;
    };
    readonly __staticRegistry: 
        UMoviePipelineBurnInWidget['__static_UMoviePipelineBurnInWidget'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUserWidget['__propertyRegistry'];
}

declare interface UMoviePipelineConsoleVariableSetting extends UMoviePipelineSetting {
    readonly __static_UMoviePipelineConsoleVariableSetting: {
        UpdateConsoleVariableEnableState(Name: string, bIsEnabled: boolean): boolean;
        RemoveConsoleVariable(Name: string, bRemoveAllInstances: boolean): boolean;
        GetConsoleVariables(): FMoviePipelineConsoleVariableEntry[];
        AddOrUpdateConsoleVariable(Name: string, Value: number): boolean;
        AddConsoleVariable(Name: string, Value: number): boolean;
    };
    readonly __properties_UMoviePipelineConsoleVariableSetting: {
        ConsoleVariablePresets: TScriptInterface<IMovieSceneConsoleVariableTrackInterface>[];
        StartConsoleCommands: string[];
        EndConsoleCommands: string[];
        CVars: FMoviePipelineConsoleVariableEntry[];
    };
    readonly __staticRegistry: 
        UMoviePipelineConsoleVariableSetting['__static_UMoviePipelineConsoleVariableSetting'] &
        UMoviePipelineSetting['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineConsoleVariableSetting['__properties_UMoviePipelineConsoleVariableSetting'] &
        UMoviePipelineSetting['__propertyRegistry'];
}

declare interface UMoviePipelineWidgetRenderer extends UMoviePipelineRenderPass {
    readonly __properties_UMoviePipelineWidgetRenderer: {
        bCompositeOntoFinalImage: boolean;
        RenderTarget: UTextureRenderTarget2D;
    };
    readonly __staticRegistry: 
        UMoviePipelineRenderPass['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineWidgetRenderer['__properties_UMoviePipelineWidgetRenderer'] &
        UMoviePipelineRenderPass['__propertyRegistry'];
}

