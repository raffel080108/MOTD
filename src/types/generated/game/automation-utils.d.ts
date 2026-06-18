declare interface UAutomationUtilsBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UAutomationUtilsBlueprintLibrary: {
        TakeGameplayAutomationScreenshot(ScreenshotName: string, MaxGlobalError: number, MaxLocalError: number, MapNameOverride: string): void;
    };
    readonly __staticRegistry: 
        UAutomationUtilsBlueprintLibrary['__static_UAutomationUtilsBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

