declare interface IAquisitionSource extends IInterface {
    GetAquisitionSourceTag(): FGameplayTag;
}
declare const IAquisitionSource: IAquisitionSource;

declare interface IAquisitionable extends IInterface {
    GetAquisitionSource(): TScriptInterface<IAquisitionSource>;
}
declare const IAquisitionable: IAquisitionable;

declare interface ISaveGameIDInterface extends IInterface {

}
declare const ISaveGameIDInterface: ISaveGameIDInterface;

declare interface UBuildRestriction extends UDataAsset {
    BuildType: number;
    Platform: number;
}
declare const UBuildRestriction: UBuildRestriction;

declare interface UFrontendBlueprintLibrary extends UBlueprintFunctionLibrary {
    OpenURLInExternalBrowser(URL: string | FString): void;
    IsShippingBuild(): boolean;
    GetStringFromClipboard(fromClipboard: string | FString): void;
    FSDTargetPlatformIsXSX(): boolean;
    FSDTargetPlatform(): EFSDTargetPlatform;
    CopyStringToClipboard(toClipboard: string | FString): void;
}
declare const UFrontendBlueprintLibrary: UFrontendBlueprintLibrary;

