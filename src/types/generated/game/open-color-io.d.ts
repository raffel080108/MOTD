declare interface FOpenColorIOColorConversionSettings {
    ConfigurationSource: UOpenColorIOConfiguration;
    SourceColorSpace: FOpenColorIOColorSpace;
    DestinationColorSpace: FOpenColorIOColorSpace;
    DestinationDisplayView: FOpenColorIODisplayView;
    DisplayViewDirection: EOpenColorIOViewTransformDirection;
}

declare interface FOpenColorIOColorSpace {
    ColorSpaceName: string;
    FamilyName: string;
    Description: string;
}

declare interface FOpenColorIODisplayConfiguration {
    bIsEnabled: boolean;
    ColorConfiguration: FOpenColorIOColorConversionSettings;
}

declare interface FOpenColorIODisplayView {
    Display: string;
    View: string;
    Description: string;
}

declare interface UOpenColorIOBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UOpenColorIOBlueprintLibrary: {
        ApplyColorSpaceTransform(WorldContextObject: UObject, ConversionSettings: FOpenColorIOColorConversionSettings, InputTexture: UTexture, OutputRenderTarget: UTextureRenderTarget2D): boolean;
    };
    readonly __staticRegistry: 
        UOpenColorIOBlueprintLibrary['__static_UOpenColorIOBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UOpenColorIOColorTransform extends UObject {
    readonly __properties_UOpenColorIOColorTransform: {
        bIsDisplayViewType: boolean;
        SourceColorSpace: string;
        DestinationColorSpace: string;
        Display: string;
        View: string;
        DisplayViewDirection: EOpenColorIOViewTransformDirection;
        LookupTextures: UTexture[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOpenColorIOColorTransform['__properties_UOpenColorIOColorTransform'] &
        UObject['__propertyRegistry'];
}

declare interface UOpenColorIOConfiguration extends UObject {
    readonly __static_UOpenColorIOConfiguration: {
        ReloadExistingColorspaces(bForce: boolean): void;
    };
    readonly __properties_UOpenColorIOConfiguration: {
        ConfigurationFile: FFilePath;
        DesiredColorSpaces: FOpenColorIOColorSpace[];
        DesiredDisplayViews: FOpenColorIODisplayView[];
        Context: TMap<string, string>;
        ColorTransforms: UOpenColorIOColorTransform[];
        ConfigHash: string;
    };
    readonly __staticRegistry: 
        UOpenColorIOConfiguration['__static_UOpenColorIOConfiguration'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UOpenColorIOConfiguration['__properties_UOpenColorIOConfiguration'] &
        UObject['__propertyRegistry'];
}

declare interface UOpenColorIODisplayExtensionWrapper extends UObject {
    readonly __static_UOpenColorIODisplayExtensionWrapper: {
        SetSceneExtensionIsActiveFunctions(IsActiveFunctions: FSceneViewExtensionIsActiveFunctor[]): void;
        SetSceneExtensionIsActiveFunction(IsActiveFunction: FSceneViewExtensionIsActiveFunctor): void;
        SetOpenColorIOConfiguration(InDisplayConfiguration: FOpenColorIODisplayConfiguration): void;
        RemoveSceneExtension(): void;
        GetOpenColorIOConfiguration(): FOpenColorIODisplayConfiguration;
        CreateOpenColorIODisplayExtension(InDisplayConfiguration: FOpenColorIODisplayConfiguration, IsActiveFunction: FSceneViewExtensionIsActiveFunctor): UOpenColorIODisplayExtensionWrapper;
        CreateInGameOpenColorIODisplayExtension(InDisplayConfiguration: FOpenColorIODisplayConfiguration): UOpenColorIODisplayExtensionWrapper;
    };
    readonly __staticRegistry: 
        UOpenColorIODisplayExtensionWrapper['__static_UOpenColorIODisplayExtensionWrapper'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UOpenColorIOSettings extends UDeveloperSettings {
    readonly __properties_UOpenColorIOSettings: {
        bUseLegacyProcessor: boolean;
        bUse32fLUT: boolean;
        bSupportInverseViewTransforms: boolean;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UOpenColorIOSettings['__properties_UOpenColorIOSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

