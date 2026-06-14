declare interface FOverlayItem {
    StartTime: FTimespan;
    EndTime: FTimespan;
    Text: FString;
    position: FVector2D;
}
declare const FOverlayItem: FOverlayItem;

declare interface UBasicOverlays extends UOverlays {
    Overlays: TArray<FOverlayItem>;
}
declare const UBasicOverlays: UBasicOverlays;

declare interface ULocalizedOverlays extends UOverlays {
    DefaultOverlays: UBasicOverlays;
    LocaleToOverlaysMap: Record<FString, UBasicOverlays>;
}
declare const ULocalizedOverlays: ULocalizedOverlays;

declare interface UOverlays extends UObject {

}
declare const UOverlays: UOverlays;

