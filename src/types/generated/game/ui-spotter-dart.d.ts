declare interface UUI_Spotter_Dart_C extends UUserWidget {
    readonly __static_UUI_Spotter_Dart_C: {
        UpdateDart(InIndex: number, InCurrent: number, InCurrentProgress: number): void;
    };
    readonly __properties_UUI_Spotter_Dart_C: {
        Dart_Progress: UUI_ProgressBar_SingleImage_C;
        AnimPing: UWidgetAnimation;
    };
    readonly __staticRegistry: 
        UUI_Spotter_Dart_C['__static_UUI_Spotter_Dart_C'] &
        UUserWidget['__staticRegistry'];
    readonly __propertyRegistry: 
        UUI_Spotter_Dart_C['__properties_UUI_Spotter_Dart_C'] &
        UUserWidget['__propertyRegistry'];
}

