declare interface ULoadingScreenLibrary extends UBlueprintFunctionLibrary {
    SetupLoadingScreenForOpenMap(LoadingImage: FSlateBrush, SpinnerImage: FSlateBrush, EstimatedLoadTime: number): void;
}
declare const ULoadingScreenLibrary: ULoadingScreenLibrary;

