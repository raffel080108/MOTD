declare interface UAutomationUtilsBlueprintLibrary extends UBlueprintFunctionLibrary {
    TakeGameplayAutomationScreenshot(ScreenshotName: string | FString, MaxGlobalError: number, MaxLocalError: number, MapNameOverride: string | FString): void;
}
declare const UAutomationUtilsBlueprintLibrary: UAutomationUtilsBlueprintLibrary;

