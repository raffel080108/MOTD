declare interface FDirectPathObjectLocator {
    Path: FSoftObjectPath;
}

declare interface FSubObjectLocator {
    PathWithinContext: string;
}

declare interface FUniversalObjectLocator {
    Fragments: FUniversalObjectLocatorFragment[];
}

declare type FUniversalObjectLocatorEmptyPayload = object;

declare type FUniversalObjectLocatorFragment = object;

