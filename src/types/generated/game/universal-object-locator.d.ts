declare interface FDirectPathObjectLocator {
    Path: FSoftObjectPath;
}
declare const FDirectPathObjectLocator: FDirectPathObjectLocator;

declare interface FSubObjectLocator {
    PathWithinContext: FString;
}
declare const FSubObjectLocator: FSubObjectLocator;

declare interface FUniversalObjectLocator {
    Fragments: TArray<FUniversalObjectLocatorFragment>;
}
declare const FUniversalObjectLocator: FUniversalObjectLocator;

declare interface FUniversalObjectLocatorEmptyPayload {

}
declare const FUniversalObjectLocatorEmptyPayload: FUniversalObjectLocatorEmptyPayload;

declare interface FUniversalObjectLocatorFragment {

}
declare const FUniversalObjectLocatorFragment: FUniversalObjectLocatorFragment;

