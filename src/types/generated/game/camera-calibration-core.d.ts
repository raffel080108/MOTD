declare interface ACameraCalibrationCheckerboard extends AActor {
    Root: USceneComponent;
    TopLeft: UCalibrationPointComponent;
    TopRight: UCalibrationPointComponent;
    BottomLeft: UCalibrationPointComponent;
    BottomRight: UCalibrationPointComponent;
    Center: UCalibrationPointComponent;
    NumCornerRows: number;
    NumCornerCols: number;
    SquareSideLength: number;
    Thickness: number;
    CubeMesh: UStaticMesh;
    OddCubeMaterial: UMaterialInterface;
    EvenCubeMaterial: UMaterialInterface;
    Rebuild(): void;
}
declare const ACameraCalibrationCheckerboard: ACameraCalibrationCheckerboard;

declare interface FAnamorphicDistortionParameters {
    PixelAspect: number;
    CX02: number;
    CX04: number;
    CX22: number;
    CX24: number;
    CX44: number;
    CY02: number;
    CY04: number;
    CY22: number;
    CY24: number;
    CY44: number;
    SqueezeX: number;
    SqueezeY: number;
    LensRotation: number;
}
declare const FAnamorphicDistortionParameters: FAnamorphicDistortionParameters;

declare interface FBaseFocusCurve {

}
declare const FBaseFocusCurve: FBaseFocusCurve;

declare interface FBaseFocusPoint {

}
declare const FBaseFocusPoint: FBaseFocusPoint;

declare interface FBaseLensTable {
    LensFile: TWeakObjectPtr<ULensFile>;
}
declare const FBaseLensTable: FBaseLensTable;

declare interface FCalibratedMapFormat {
    PixelOrigin: ECalibratedMapPixelOrigin;
    UndistortionChannels: ECalibratedMapChannels;
    DistortionChannels: ECalibratedMapChannels;
}
declare const FCalibratedMapFormat: FCalibratedMapFormat;

declare interface FCameraFeedInfo {
    Dimensions: FIntPoint;
    AspectRatio: number;
}
declare const FCameraFeedInfo: FCameraFeedInfo;

declare interface FDataTablePointInfoBase {
    focus: number;
    Zoom: number;
}
declare const FDataTablePointInfoBase: FDataTablePointInfoBase;

declare interface FDerivedDistortionData {
    DistortionData: FDistortionData;
    UndistortionDisplacementMap: UTextureRenderTarget2D;
    DistortionDisplacementMap: UTextureRenderTarget2D;
}
declare const FDerivedDistortionData: FDerivedDistortionData;

declare interface FDistortionCalibrationResult {
    EvaluatedFocus: number;
    EvaluatedZoom: number;
    ReprojectionError: number;
    FocalLength: FFocalLengthInfo;
    ImageCenter: FImageCenterInfo;
    CameraPoses: TArray<FTransform>;
    NodalOffset: FNodalPointOffset;
    Parameters: FDistortionInfo;
    STMap: FSTMapInfo;
    STMapFullPath: FString;
    ErrorMessage: FText;
}
declare const FDistortionCalibrationResult: FDistortionCalibrationResult;

declare interface FDistortionData {
    DistortedUVs: TArray<FVector2D>;
    OverscanFactor: number;
}
declare const FDistortionData: FDistortionData;

declare interface FDistortionFocusCurve extends FBaseFocusCurve {
    MapBlendingCurve: FRichCurve;
    Zoom: number;
}
declare const FDistortionFocusCurve: FDistortionFocusCurve;

declare interface FDistortionFocusPoint extends FBaseFocusPoint {
    focus: number;
    MapBlendingCurve: FRichCurve;
    ZoomPoints: TArray<FDistortionZoomPoint>;
}
declare const FDistortionFocusPoint: FDistortionFocusPoint;

declare interface FDistortionHandlerPicker {
    TargetCameraComponent: UCineCameraComponent;
    DistortionProducerID: FGuid;
    HandlerDisplayName: FString;
}
declare const FDistortionHandlerPicker: FDistortionHandlerPicker;

declare interface FDistortionInfo {
    Parameters: TArray<number>;
}
declare const FDistortionInfo: FDistortionInfo;

declare interface FDistortionPointInfo extends FDataTablePointInfoBase {
    DistortionInfo: FDistortionInfo;
}
declare const FDistortionPointInfo: FDistortionPointInfo;

declare interface FDistortionTable extends FBaseLensTable {
    FocusPoints: TArray<FDistortionFocusPoint>;
    FocusCurves: TArray<FDistortionFocusCurve>;
}
declare const FDistortionTable: FDistortionTable;

declare interface FDistortionZoomPoint {
    Zoom: number;
    DistortionInfo: FDistortionInfo;
}
declare const FDistortionZoomPoint: FDistortionZoomPoint;

declare interface FEncodersTable {
    focus: FRichCurve;
    Iris: FRichCurve;
}
declare const FEncodersTable: FEncodersTable;

declare interface FFocalLengthFocusCurve extends FBaseFocusCurve {
    Fx: FRichCurve;
    Fy: FRichCurve;
    Zoom: number;
}
declare const FFocalLengthFocusCurve: FFocalLengthFocusCurve;

declare interface FFocalLengthFocusPoint extends FBaseFocusPoint {
    focus: number;
    Fx: FRichCurve;
    Fy: FRichCurve;
    ZoomPoints: TArray<FFocalLengthZoomPoint>;
}
declare const FFocalLengthFocusPoint: FFocalLengthFocusPoint;

declare interface FFocalLengthInfo {
    FxFy: FVector2D;
}
declare const FFocalLengthInfo: FFocalLengthInfo;

declare interface FFocalLengthPointInfo extends FDataTablePointInfoBase {
    FocalLengthInfo: FFocalLengthInfo;
}
declare const FFocalLengthPointInfo: FFocalLengthPointInfo;

declare interface FFocalLengthTable extends FBaseLensTable {
    FocusPoints: TArray<FFocalLengthFocusPoint>;
    FocusCurves: TArray<FFocalLengthFocusCurve>;
}
declare const FFocalLengthTable: FFocalLengthTable;

declare interface FFocalLengthZoomPoint {
    Zoom: number;
    FocalLengthInfo: FFocalLengthInfo;
    bIsCalibrationPoint: boolean;
}
declare const FFocalLengthZoomPoint: FFocalLengthZoomPoint;

declare interface FImageCenterFocusCurve extends FBaseFocusCurve {
    Cx: FRichCurve;
    Cy: FRichCurve;
    Zoom: number;
}
declare const FImageCenterFocusCurve: FImageCenterFocusCurve;

declare interface FImageCenterFocusPoint extends FBaseFocusPoint {
    focus: number;
    Cx: FRichCurve;
    Cy: FRichCurve;
}
declare const FImageCenterFocusPoint: FImageCenterFocusPoint;

declare interface FImageCenterInfo {
    PrincipalPoint: FVector2D;
}
declare const FImageCenterInfo: FImageCenterInfo;

declare interface FImageCenterPointInfo extends FDataTablePointInfoBase {
    ImageCenterInfo: FImageCenterInfo;
}
declare const FImageCenterPointInfo: FImageCenterPointInfo;

declare interface FImageCenterTable extends FBaseLensTable {
    FocusPoints: TArray<FImageCenterFocusPoint>;
    FocusCurves: TArray<FImageCenterFocusCurve>;
}
declare const FImageCenterTable: FImageCenterTable;

declare interface FLensDataCategoryEditorColor {
    focus: FColor;
    Iris: FColor;
    Zoom: FColor;
    Distortion: FColor;
    ImageCenter: FColor;
    STMap: FColor;
    NodalOffset: FColor;
}
declare const FLensDataCategoryEditorColor: FLensDataCategoryEditorColor;

declare interface FLensDistortionState {
    DistortionInfo: FDistortionInfo;
    FocalLengthInfo: FFocalLengthInfo;
    ImageCenter: FImageCenterInfo;
}
declare const FLensDistortionState: FLensDistortionState;

declare interface FLensFileEvaluationInputs {
    focus: number;
    Iris: number;
    Zoom: number;
    Filmback: FCameraFilmbackSettings;
    bIsValid: boolean;
}
declare const FLensFileEvaluationInputs: FLensFileEvaluationInputs;

declare interface FLensFilePicker {
    bUseDefaultLensFile: boolean;
    LensFile: ULensFile;
}
declare const FLensFilePicker: FLensFilePicker;

declare interface FLensInfo {
    LensModelName: FString;
    LensSerialNumber: FString;
    LensModel: TSubclassOf<ULensModel>;
    SensorDimensions: FVector2D;
    ImageDimensions: FIntPoint;
    SqueezeFactor: number;
}
declare const FLensInfo: FLensInfo;

declare interface FNodalOffsetFocusCurve extends FBaseFocusCurve {
    LocationOffset: FRichCurve;
    RotationOffset: FRichCurve;
    Zoom: number;
}
declare const FNodalOffsetFocusCurve: FNodalOffsetFocusCurve;

declare interface FNodalOffsetFocusPoint extends FBaseFocusPoint {
    focus: number;
    LocationOffset: FRichCurve;
    RotationOffset: FRichCurve;
}
declare const FNodalOffsetFocusPoint: FNodalOffsetFocusPoint;

declare interface FNodalOffsetPointInfo extends FDataTablePointInfoBase {
    NodalPointOffset: FNodalPointOffset;
}
declare const FNodalOffsetPointInfo: FNodalOffsetPointInfo;

declare interface FNodalOffsetTable extends FBaseLensTable {
    FocusPoints: TArray<FNodalOffsetFocusPoint>;
    FocusCurves: TArray<FNodalOffsetFocusCurve>;
}
declare const FNodalOffsetTable: FNodalOffsetTable;

declare interface FNodalPointOffset {
    LocationOffset: FVector;
    RotationOffset: FQuat;
}
declare const FNodalPointOffset: FNodalPointOffset;

declare interface FSTMapFocusCurve extends FBaseFocusCurve {
    MapBlendingCurve: FRichCurve;
    Zoom: number;
}
declare const FSTMapFocusCurve: FSTMapFocusCurve;

declare interface FSTMapFocusPoint extends FBaseFocusPoint {
    focus: number;
    MapBlendingCurve: FRichCurve;
    ZoomPoints: TArray<FSTMapZoomPoint>;
}
declare const FSTMapFocusPoint: FSTMapFocusPoint;

declare interface FSTMapInfo {
    DistortionMap: UTexture;
    MapFormat: FCalibratedMapFormat;
}
declare const FSTMapInfo: FSTMapInfo;

declare interface FSTMapPointInfo extends FDataTablePointInfoBase {
    STMapInfo: FSTMapInfo;
}
declare const FSTMapPointInfo: FSTMapPointInfo;

declare interface FSTMapTable extends FBaseLensTable {
    FocusPoints: TArray<FSTMapFocusPoint>;
    FocusCurves: TArray<FSTMapFocusCurve>;
}
declare const FSTMapTable: FSTMapTable;

declare interface FSTMapZoomPoint {
    Zoom: number;
    STMapInfo: FSTMapInfo;
    DerivedDistortionData: FDerivedDistortionData;
    bIsCalibrationPoint: boolean;
}
declare const FSTMapZoomPoint: FSTMapZoomPoint;

declare interface FSimulcamInfo {
    MediaResolution: FIntPoint;
    MediaPlateAspectRatio: number;
    CGLayerAspectRatio: number;
}
declare const FSimulcamInfo: FSimulcamInfo;

declare interface FSphericalDistortionParameters {
    K1: number;
    K2: number;
    K3: number;
    P1: number;
    P2: number;
}
declare const FSphericalDistortionParameters: FSphericalDistortionParameters;

declare interface UAnamorphicLensDistortionModelHandler extends ULensDistortionModelHandlerBase {

}
declare const UAnamorphicLensDistortionModelHandler: UAnamorphicLensDistortionModelHandler;

declare interface UAnamorphicLensModel extends ULensModel {

}
declare const UAnamorphicLensModel: UAnamorphicLensModel;

declare interface UCalibrationPointComponent extends UProceduralMeshComponent {
    SubPoints: Record<FString, FVector>;
    bVisualizePointsInEditor: boolean;
    PointVisualizationScale: number;
    VisualizationShape: ECalibrationPointVisualization;
    RebuildVertices(): void;
    NamespacedSubpointName(InSubpointName: string | FString, OutNamespacedName: string | FString): boolean;
    GetWorldLocation(InPointName: string | FString, OutLocation: FVector): boolean;
    GetNamespacedPointNames(OutNamespacedNames: string | FString[]): void;
}
declare const UCalibrationPointComponent: UCalibrationPointComponent;

declare interface UCameraCalibrationEditorSettings extends UDeveloperSettings {

}
declare const UCameraCalibrationEditorSettings: UCameraCalibrationEditorSettings;

declare interface UCameraCalibrationSettings extends UDeveloperSettings {
    StartupLensFile: TSoftObjectPtr<ULensFile>;
    DisplacementMapResolution: FIntPoint;
    CalibrationInputTolerance: number;
    CheckerboardDetectionTimeout: number;
    DefaultUndistortionDisplacementMaterials: Record<string | number | symbol, TSoftObjectPtr<UMaterialInterface>>;
    DefaultDistortionDisplacementMaterials: Record<string | number | symbol, TSoftObjectPtr<UMaterialInterface>>;
    DefaultDistortionMaterials: Record<string | number | symbol, TSoftObjectPtr<UMaterialInterface>>;
    bEnableCalibrationDatasetImportExport: boolean;
}
declare const UCameraCalibrationSettings: UCameraCalibrationSettings;

declare interface UCameraCalibrationStep extends UObject {

}
declare const UCameraCalibrationStep: UCameraCalibrationStep;

declare interface UCameraCalibrationSubsystem extends UEngineSubsystem {
    DefaultLensFile: ULensFile;
    LensModelMap: Record<FName, TSubclassOf<ULensModel>>;
    CameraNodalOffsetAlgosMap: Record<FName, TSubclassOf<UCameraNodalOffsetAlgo>>;
    CameraImageCenterAlgosMap: Record<FName, TSubclassOf<UCameraImageCenterAlgo>>;
    CameraCalibrationStepsMap: Record<FName, TSubclassOf<UCameraCalibrationStep>>;
    UnregisterDistortionModelHandler(Component: UCineCameraComponent, Handler: ULensDistortionModelHandlerBase): void;
    SetDefaultLensFile(NewDefaultLensFile: ULensFile): void;
    GetRegisteredLensModel(ModelName: FName): TSubclassOf<ULensModel>;
    GetOverlayMaterialNames(): TArray<FName>;
    GetOverlayMaterial(OverlayName: FName): UMaterialInterface;
    GetLensFile(Picker: FLensFilePicker): ULensFile;
    GetDistortionModelHandlers(Component: UCineCameraComponent): TArray<ULensDistortionModelHandlerBase>;
    GetDefaultLensFile(): ULensFile;
    GetCameraNodalOffsetAlgos(): TArray<FName>;
    GetCameraNodalOffsetAlgo(Name: FName): TSubclassOf<UCameraNodalOffsetAlgo>;
    GetCameraImageCenterAlgos(): TArray<FName>;
    GetCameraImageCenterAlgo(Name: FName): TSubclassOf<UCameraImageCenterAlgo>;
    GetCameraCalibrationSteps(): TArray<FName>;
    GetCameraCalibrationStep(Name: FName): TSubclassOf<UCameraCalibrationStep>;
    FindOrCreateDistortionModelHandler(DistortionHandlerPicker: FDistortionHandlerPicker, LensModelClass: TSubclassOf<ULensModel>): ULensDistortionModelHandlerBase;
    FindDistortionModelHandler(DistortionHandlerPicker: FDistortionHandlerPicker, bUpdatePicker: boolean): ULensDistortionModelHandlerBase;
}
declare const UCameraCalibrationSubsystem: UCameraCalibrationSubsystem;

declare interface UCameraImageCenterAlgo extends UObject {

}
declare const UCameraImageCenterAlgo: UCameraImageCenterAlgo;

declare interface UCameraLensDistortionAlgo extends UObject {

}
declare const UCameraLensDistortionAlgo: UCameraLensDistortionAlgo;

declare interface UCameraNodalOffsetAlgo extends UObject {

}
declare const UCameraNodalOffsetAlgo: UCameraNodalOffsetAlgo;

declare interface ULensDistortionModelHandlerBase extends UObject {
    LensModelClass: TSubclassOf<ULensModel>;
    DistortionPostProcessMID: UMaterialInstanceDynamic;
    CurrentState: FLensDistortionState;
    CameraFilmback: FCameraFilmbackSettings;
    DisplayName: FString;
    OverscanFactor: number;
    UndistortionDisplacementMapMID: UMaterialInstanceDynamic;
    DistortionDisplacementMapMID: UMaterialInstanceDynamic;
    UndistortionDisplacementMapRT: UTextureRenderTarget2D;
    DistortionDisplacementMapRT: UTextureRenderTarget2D;
    DistortionProducerID: FGuid;
    SetDistortionState(InNewState: FLensDistortionState): void;
    IsModelSupported(ModelToSupport: TSubclassOf<ULensModel>): boolean;
    GetUndistortionDisplacementMap(): UTextureRenderTarget2D;
    GetDistortionDisplacementMap(): UTextureRenderTarget2D;
}
declare const ULensDistortionModelHandlerBase: ULensDistortionModelHandlerBase;

declare interface ULensFile extends UObject {
    LensInfo: FLensInfo;
    DataMode: ELensDataMode;
    UserMetadata: Record<FString, FString>;
    EncodersTable: FEncodersTable;
    DistortionTable: FDistortionTable;
    FocalLengthTable: FFocalLengthTable;
    ImageCenterTable: FImageCenterTable;
    NodalOffsetTable: FNodalOffsetTable;
    STMapTable: FSTMapTable;
    UndistortionDisplacementMapHolders: TArray<UTextureRenderTarget2D>;
    DistortionDisplacementMapHolders: TArray<UTextureRenderTarget2D>;
    RemoveZoomPoint(InDataCategory: ELensDataCategory, InFocus: number, InZoom: number): void;
    RemoveFocusPoint(InDataCategory: ELensDataCategory, InFocus: number): void;
    MergeFocusPoint(InDataCategory: ELensDataCategory, InSrcFocus: number, InDestFocus: number, bReplaceExistingZoomPoints: boolean): void;
    HasZoomPoint(InDataCategory: ELensDataCategory, InFocus: number, InZoom: number): boolean;
    HasSamples(InDataCategory: ELensDataCategory): boolean;
    HasIrisEncoderMapping(): boolean;
    HasFocusPoint(InDataCategory: ELensDataCategory, InFocus: number): boolean;
    HasFocusEncoderMapping(): boolean;
    GetTotalPointNum(InDataCategory: ELensDataCategory): number;
    GetSTMapPoints(): TArray<FSTMapPointInfo>;
    GetSTMapPoint(InFocus: number, InZoom: number, OutSTMapInfo: FSTMapInfo): boolean;
    GetNodalOffsetPoints(): TArray<FNodalOffsetPointInfo>;
    GetNodalOffsetPoint(InFocus: number, InZoom: number, OutNodalPointOffset: FNodalPointOffset): boolean;
    GetImageCenterPoints(): TArray<FImageCenterPointInfo>;
    GetImageCenterPoint(InFocus: number, InZoom: number, OutImageCenterInfo: FImageCenterInfo): boolean;
    GetFocalLengthPoints(): TArray<FFocalLengthPointInfo>;
    GetFocalLengthPoint(InFocus: number, InZoom: number, OutFocalLengthInfo: FFocalLengthInfo): boolean;
    GetDistortionPoints(): TArray<FDistortionPointInfo>;
    GetDistortionPoint(InFocus: number, InZoom: number, OutDistortionInfo: FDistortionInfo): boolean;
    EvaluateNormalizedIris(InNormalizedValue: number): number;
    EvaluateNormalizedFocus(InNormalizedValue: number): number;
    EvaluateNodalPointOffset(InFocus: number, InZoom: number, OutEvaluatedValue: FNodalPointOffset): boolean;
    EvaluateImageCenterParameters(InFocus: number, InZoom: number, OutEvaluatedValue: FImageCenterInfo): boolean;
    EvaluateFocalLength(InFocus: number, InZoom: number, OutEvaluatedValue: FFocalLengthInfo): boolean;
    EvaluateDistortionParameters(InFocus: number, InZoom: number, OutEvaluatedValue: FDistortionInfo): boolean;
    EvaluateDistortionData(InFocus: number, InZoom: number, InFilmback: FVector2D, InLensHandler: ULensDistortionModelHandlerBase): boolean;
    ClearData(InDataCategory: ELensDataCategory): void;
    ClearAll(): void;
    ChangeZoomPoint(InDataCategory: ELensDataCategory, InFocus: number, InExistingZoom: number, InNewZoom: number): void;
    ChangeFocusPoint(InDataCategory: ELensDataCategory, InExistingFocus: number, InNewFocus: number): void;
    AddSTMapPoint(NewFocus: number, NewZoom: number, NewPoint: FSTMapInfo): void;
    AddNodalOffsetPoint(NewFocus: number, NewZoom: number, NewPoint: FNodalPointOffset): void;
    AddImageCenterPoint(NewFocus: number, NewZoom: number, NewPoint: FImageCenterInfo): void;
    AddFocalLengthPoint(NewFocus: number, NewZoom: number, NewFocalLength: FFocalLengthInfo): void;
    AddDistortionPoint(NewFocus: number, NewZoom: number, NewPoint: FDistortionInfo, NewFocalLength: FFocalLengthInfo): void;
}
declare const ULensFile: ULensFile;

declare interface ULensModel extends UObject {

}
declare const ULensModel: ULensModel;

declare interface USphericalLensDistortionModelHandler extends ULensDistortionModelHandlerBase {

}
declare const USphericalLensDistortionModelHandler: USphericalLensDistortionModelHandler;

declare interface USphericalLensModel extends ULensModel {

}
declare const USphericalLensModel: USphericalLensModel;

