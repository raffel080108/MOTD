declare interface FOpenColorIOColorConversionSettings {
    ConfigurationSource: UOpenColorIOConfiguration;
    SourceColorSpace: FOpenColorIOColorSpace;
    DestinationColorSpace: FOpenColorIOColorSpace;
    DestinationDisplayView: FOpenColorIODisplayView;
    DisplayViewDirection: EOpenColorIOViewTransformDirection;
}
declare const FOpenColorIOColorConversionSettings: FOpenColorIOColorConversionSettings;

declare interface FOpenColorIOColorSpace {
    ColorSpaceName: FString;
    FamilyName: FString;
    Description: FString;
}
declare const FOpenColorIOColorSpace: FOpenColorIOColorSpace;

declare interface FOpenColorIODisplayConfiguration {
    bIsEnabled: boolean;
    ColorConfiguration: FOpenColorIOColorConversionSettings;
}
declare const FOpenColorIODisplayConfiguration: FOpenColorIODisplayConfiguration;

declare interface FOpenColorIODisplayView {
    Display: FString;
    View: FString;
    Description: FString;
}
declare const FOpenColorIODisplayView: FOpenColorIODisplayView;

declare interface UOpenColorIOBlueprintLibrary extends UBlueprintFunctionLibrary {
    ApplyColorSpaceTransform(WorldContextObject: UObject, ConversionSettings: FOpenColorIOColorConversionSettings, InputTexture: UTexture, OutputRenderTarget: UTextureRenderTarget2D): boolean;
}
declare const UOpenColorIOBlueprintLibrary: UOpenColorIOBlueprintLibrary;

declare interface UOpenColorIOColorTransform extends UObject {
    bIsDisplayViewType: boolean;
    SourceColorSpace: FString;
    DestinationColorSpace: FString;
    Display: FString;
    View: FString;
    DisplayViewDirection: EOpenColorIOViewTransformDirection;
    LookupTextures: TArray<UTexture>;
}
declare const UOpenColorIOColorTransform: UOpenColorIOColorTransform;

declare interface UOpenColorIOConfiguration extends UObject {
    ConfigurationFile: FFilePath;
    DesiredColorSpaces: TArray<FOpenColorIOColorSpace>;
    DesiredDisplayViews: TArray<FOpenColorIODisplayView>;
    Context: Record<FString, FString>;
    ColorTransforms: TArray<UOpenColorIOColorTransform>;
    ConfigHash: FString;
    ReloadExistingColorspaces(bForce: boolean): void;
}
declare const UOpenColorIOConfiguration: UOpenColorIOConfiguration;

declare interface UOpenColorIODisplayExtensionWrapper extends UObject {
    SetSceneExtensionIsActiveFunctions(IsActiveFunctions: TArray<FSceneViewExtensionIsActiveFunctor>): void;
    SetSceneExtensionIsActiveFunction(IsActiveFunction: FSceneViewExtensionIsActiveFunctor): void;
    SetOpenColorIOConfiguration(InDisplayConfiguration: FOpenColorIODisplayConfiguration): void;
    RemoveSceneExtension(): void;
    GetOpenColorIOConfiguration(): FOpenColorIODisplayConfiguration;
    CreateOpenColorIODisplayExtension(InDisplayConfiguration: FOpenColorIODisplayConfiguration, IsActiveFunction: FSceneViewExtensionIsActiveFunctor): UOpenColorIODisplayExtensionWrapper;
    CreateInGameOpenColorIODisplayExtension(InDisplayConfiguration: FOpenColorIODisplayConfiguration): UOpenColorIODisplayExtensionWrapper;
}
declare const UOpenColorIODisplayExtensionWrapper: UOpenColorIODisplayExtensionWrapper;

declare interface UOpenColorIOSettings extends UDeveloperSettings {
    bUseLegacyProcessor: boolean;
    bUse32fLUT: boolean;
    bSupportInverseViewTransforms: boolean;
}
declare const UOpenColorIOSettings: UOpenColorIOSettings;

