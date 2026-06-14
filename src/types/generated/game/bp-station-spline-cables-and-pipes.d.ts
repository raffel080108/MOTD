declare interface ABP_StationSpline_CablesAndPipes_C extends AActor {
    Spline: USplineComponent;
    DefaultSceneRoot: USceneComponent;
    SectionLength: number;
    Material: UMaterialInterface;
    mesh: UStaticMesh;
    Length: number;
    UserConstructionScript(): void;
}
declare const ABP_StationSpline_CablesAndPipes_C: ABP_StationSpline_CablesAndPipes_C;

