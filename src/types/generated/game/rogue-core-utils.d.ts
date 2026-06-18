declare interface IAquisitionSource extends IInterface {
    readonly __static_IAquisitionSource: {
        GetAquisitionSourceTag(): FGameplayTag;
    };
    readonly __staticRegistry: 
        IAquisitionSource['__static_IAquisitionSource'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IAquisitionable extends IInterface {
    readonly __static_IAquisitionable: {
        GetAquisitionSource(): TScriptInterface<IAquisitionSource>;
    };
    readonly __staticRegistry: 
        IAquisitionable['__static_IAquisitionable'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface ISaveGameIDInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UBuildRestriction extends UDataAsset {
    readonly __properties_UBuildRestriction: {
        BuildType: number;
        Platform: number;
    };
    readonly __staticRegistry: 
        UDataAsset['__staticRegistry'];
    readonly __propertyRegistry: 
        UBuildRestriction['__properties_UBuildRestriction'] &
        UDataAsset['__propertyRegistry'];
}

declare interface UFrontendBlueprintLibrary extends UBlueprintFunctionLibrary {
    readonly __static_UFrontendBlueprintLibrary: {
        OpenURLInExternalBrowser(URL: string): void;
        IsShippingBuild(): boolean;
        GetStringFromClipboard(fromClipboard: string): void;
        FSDTargetPlatformIsXSX(): boolean;
        FSDTargetPlatform(): EFSDTargetPlatform;
        CopyStringToClipboard(toClipboard: string): void;
    };
    readonly __staticRegistry: 
        UFrontendBlueprintLibrary['__static_UFrontendBlueprintLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

