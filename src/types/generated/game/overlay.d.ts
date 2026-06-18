declare interface FOverlayItem {
    StartTime: FTimespan;
    EndTime: FTimespan;
    Text: string;
    position: FVector2D;
}

declare interface UBasicOverlays extends UOverlays {
    readonly __properties_UBasicOverlays: {
        Overlays: FOverlayItem[];
    };
    readonly __staticRegistry: 
        UOverlays['__staticRegistry'];
    readonly __propertyRegistry: 
        UBasicOverlays['__properties_UBasicOverlays'] &
        UOverlays['__propertyRegistry'];
}

declare interface ULocalizedOverlays extends UOverlays {
    readonly __properties_ULocalizedOverlays: {
        DefaultOverlays: UBasicOverlays;
        LocaleToOverlaysMap: TMap<string, UBasicOverlays>;
    };
    readonly __staticRegistry: 
        UOverlays['__staticRegistry'];
    readonly __propertyRegistry: 
        ULocalizedOverlays['__properties_ULocalizedOverlays'] &
        UOverlays['__propertyRegistry'];
}

declare interface UOverlays extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

