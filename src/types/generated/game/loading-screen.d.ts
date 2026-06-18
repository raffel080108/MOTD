declare interface ULoadingScreenLibrary extends UBlueprintFunctionLibrary {
    readonly __static_ULoadingScreenLibrary: {
        SetupLoadingScreenForOpenMap(LoadingImage: FSlateBrush, SpinnerImage: FSlateBrush, EstimatedLoadTime: number): void;
    };
    readonly __staticRegistry: 
        ULoadingScreenLibrary['__static_ULoadingScreenLibrary'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

