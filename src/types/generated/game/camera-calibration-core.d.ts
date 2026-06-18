declare interface ACameraCalibrationCheckerboard extends AActor {
    readonly __static_ACameraCalibrationCheckerboard: {
        Rebuild(): void;
    };
    readonly __properties_ACameraCalibrationCheckerboard: {
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
    };
    readonly __staticRegistry: 
        ACameraCalibrationCheckerboard['__static_ACameraCalibrationCheckerboard'] &
        AActor['__staticRegistry'];
    readonly __propertyRegistry: 
        ACameraCalibrationCheckerboard['__properties_ACameraCalibrationCheckerboard'] &
        AActor['__propertyRegistry'];
}

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

declare type FBaseFocusCurve = object;

declare type FBaseFocusPoint = object;

declare interface FBaseLensTable {
    LensFile: TWeakObjectPtr<ULensFile>;
}

declare interface FCalibratedMapFormat {
    PixelOrigin: ECalibratedMapPixelOrigin;
    UndistortionChannels: ECalibratedMapChannels;
    DistortionChannels: ECalibratedMapChannels;
}

declare interface FCameraFeedInfo {
    Dimensions: FIntPoint;
    AspectRatio: number;
}

declare interface FDataTablePointInfoBase {
    focus: number;
    Zoom: number;
}

declare interface FDerivedDistortionData {
    DistortionData: FDistortionData;
    UndistortionDisplacementMap: UTextureRenderTarget2D;
    DistortionDisplacementMap: UTextureRenderTarget2D;
}

declare interface FDistortionCalibrationResult {
    EvaluatedFocus: number;
    EvaluatedZoom: number;
    ReprojectionError: number;
    FocalLength: FFocalLengthInfo;
    ImageCenter: FImageCenterInfo;
    CameraPoses: FTransform[];
    NodalOffset: FNodalPointOffset;
    Parameters: FDistortionInfo;
    STMap: FSTMapInfo;
    STMapFullPath: string;
    ErrorMessage: string;
}

declare interface FDistortionData {
    DistortedUVs: FVector2D[];
    OverscanFactor: number;
}

declare interface FDistortionFocusCurve extends FBaseFocusCurve {
    MapBlendingCurve: FRichCurve;
    Zoom: number;
}

declare interface FDistortionFocusPoint extends FBaseFocusPoint {
    focus: number;
    MapBlendingCurve: FRichCurve;
    ZoomPoints: FDistortionZoomPoint[];
}

declare interface FDistortionHandlerPicker {
    TargetCameraComponent: UCineCameraComponent;
    DistortionProducerID: FGuid;
    HandlerDisplayName: string;
}

declare interface FDistortionInfo {
    Parameters: number[];
}

declare interface FDistortionPointInfo extends FDataTablePointInfoBase {
    DistortionInfo: FDistortionInfo;
}

declare interface FDistortionTable extends FBaseLensTable {
    FocusPoints: FDistortionFocusPoint[];
    FocusCurves: FDistortionFocusCurve[];
}

declare interface FDistortionZoomPoint {
    Zoom: number;
    DistortionInfo: FDistortionInfo;
}

declare interface FEncodersTable {
    focus: FRichCurve;
    Iris: FRichCurve;
}

declare interface FFocalLengthFocusCurve extends FBaseFocusCurve {
    Fx: FRichCurve;
    Fy: FRichCurve;
    Zoom: number;
}

declare interface FFocalLengthFocusPoint extends FBaseFocusPoint {
    focus: number;
    Fx: FRichCurve;
    Fy: FRichCurve;
    ZoomPoints: FFocalLengthZoomPoint[];
}

declare interface FFocalLengthInfo {
    FxFy: FVector2D;
}

declare interface FFocalLengthPointInfo extends FDataTablePointInfoBase {
    FocalLengthInfo: FFocalLengthInfo;
}

declare interface FFocalLengthTable extends FBaseLensTable {
    FocusPoints: FFocalLengthFocusPoint[];
    FocusCurves: FFocalLengthFocusCurve[];
}

declare interface FFocalLengthZoomPoint {
    Zoom: number;
    FocalLengthInfo: FFocalLengthInfo;
    bIsCalibrationPoint: boolean;
}

declare interface FImageCenterFocusCurve extends FBaseFocusCurve {
    Cx: FRichCurve;
    Cy: FRichCurve;
    Zoom: number;
}

declare interface FImageCenterFocusPoint extends FBaseFocusPoint {
    focus: number;
    Cx: FRichCurve;
    Cy: FRichCurve;
}

declare interface FImageCenterInfo {
    PrincipalPoint: FVector2D;
}

declare interface FImageCenterPointInfo extends FDataTablePointInfoBase {
    ImageCenterInfo: FImageCenterInfo;
}

declare interface FImageCenterTable extends FBaseLensTable {
    FocusPoints: FImageCenterFocusPoint[];
    FocusCurves: FImageCenterFocusCurve[];
}

declare interface FLensDataCategoryEditorColor {
    focus: FColor;
    Iris: FColor;
    Zoom: FColor;
    Distortion: FColor;
    ImageCenter: FColor;
    STMap: FColor;
    NodalOffset: FColor;
}

declare interface FLensDistortionState {
    DistortionInfo: FDistortionInfo;
    FocalLengthInfo: FFocalLengthInfo;
    ImageCenter: FImageCenterInfo;
}

declare interface FLensFileEvaluationInputs {
    focus: number;
    Iris: number;
    Zoom: number;
    Filmback: FCameraFilmbackSettings;
    bIsValid: boolean;
}

declare interface FLensFilePicker {
    bUseDefaultLensFile: boolean;
    LensFile: ULensFile;
}

declare interface FLensInfo {
    LensModelName: string;
    LensSerialNumber: string;
    LensModel: TSubclassOf<ULensModel>;
    SensorDimensions: FVector2D;
    ImageDimensions: FIntPoint;
    SqueezeFactor: number;
}

declare interface FNodalOffsetFocusCurve extends FBaseFocusCurve {
    LocationOffset: FRichCurve;
    RotationOffset: FRichCurve;
    Zoom: number;
}

declare interface FNodalOffsetFocusPoint extends FBaseFocusPoint {
    focus: number;
    LocationOffset: FRichCurve;
    RotationOffset: FRichCurve;
}

declare interface FNodalOffsetPointInfo extends FDataTablePointInfoBase {
    NodalPointOffset: FNodalPointOffset;
}

declare interface FNodalOffsetTable extends FBaseLensTable {
    FocusPoints: FNodalOffsetFocusPoint[];
    FocusCurves: FNodalOffsetFocusCurve[];
}

declare interface FNodalPointOffset {
    LocationOffset: FVector;
    RotationOffset: FQuat;
}

declare interface FSTMapFocusCurve extends FBaseFocusCurve {
    MapBlendingCurve: FRichCurve;
    Zoom: number;
}

declare interface FSTMapFocusPoint extends FBaseFocusPoint {
    focus: number;
    MapBlendingCurve: FRichCurve;
    ZoomPoints: FSTMapZoomPoint[];
}

declare interface FSTMapInfo {
    DistortionMap: UTexture;
    MapFormat: FCalibratedMapFormat;
}

declare interface FSTMapPointInfo extends FDataTablePointInfoBase {
    STMapInfo: FSTMapInfo;
}

declare interface FSTMapTable extends FBaseLensTable {
    FocusPoints: FSTMapFocusPoint[];
    FocusCurves: FSTMapFocusCurve[];
}

declare interface FSTMapZoomPoint {
    Zoom: number;
    STMapInfo: FSTMapInfo;
    DerivedDistortionData: FDerivedDistortionData;
    bIsCalibrationPoint: boolean;
}

declare interface FSimulcamInfo {
    MediaResolution: FIntPoint;
    MediaPlateAspectRatio: number;
    CGLayerAspectRatio: number;
}

declare interface FSphericalDistortionParameters {
    K1: number;
    K2: number;
    K3: number;
    P1: number;
    P2: number;
}

declare interface UAnamorphicLensDistortionModelHandler extends ULensDistortionModelHandlerBase {
    readonly __staticRegistry: 
        ULensDistortionModelHandlerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensDistortionModelHandlerBase['__propertyRegistry'];
}

declare interface UAnamorphicLensModel extends ULensModel {
    readonly __staticRegistry: 
        ULensModel['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensModel['__propertyRegistry'];
}

declare interface UCalibrationPointComponent extends UProceduralMeshComponent {
    readonly __static_UCalibrationPointComponent: {
        RebuildVertices(): void;
        NamespacedSubpointName(InSubpointName: string, OutNamespacedName: string): boolean;
        GetWorldLocation(InPointName: string, OutLocation: FVector): boolean;
        GetNamespacedPointNames(OutNamespacedNames: string[]): void;
    };
    readonly __properties_UCalibrationPointComponent: {
        SubPoints: TMap<string, FVector>;
        bVisualizePointsInEditor: boolean;
        PointVisualizationScale: number;
        VisualizationShape: ECalibrationPointVisualization;
    };
    readonly __staticRegistry: 
        UCalibrationPointComponent['__static_UCalibrationPointComponent'] &
        UProceduralMeshComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UCalibrationPointComponent['__properties_UCalibrationPointComponent'] &
        UProceduralMeshComponent['__propertyRegistry'];
}

declare interface UCameraCalibrationEditorSettings extends UDeveloperSettings {
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UCameraCalibrationSettings extends UDeveloperSettings {
    readonly __properties_UCameraCalibrationSettings: {
        StartupLensFile: TSoftObjectPtr<ULensFile>;
        DisplacementMapResolution: FIntPoint;
        CalibrationInputTolerance: number;
        CheckerboardDetectionTimeout: number;
        DefaultUndistortionDisplacementMaterials: TMap<TSubclassOf<ULensDistortionModelHandlerBase>, TSoftObjectPtr<UMaterialInterface>>;
        DefaultDistortionDisplacementMaterials: TMap<TSubclassOf<ULensDistortionModelHandlerBase>, TSoftObjectPtr<UMaterialInterface>>;
        DefaultDistortionMaterials: TMap<TSubclassOf<ULensDistortionModelHandlerBase>, TSoftObjectPtr<UMaterialInterface>>;
        bEnableCalibrationDatasetImportExport: boolean;
    };
    readonly __staticRegistry: 
        UDeveloperSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraCalibrationSettings['__properties_UCameraCalibrationSettings'] &
        UDeveloperSettings['__propertyRegistry'];
}

declare interface UCameraCalibrationStep extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UCameraCalibrationSubsystem extends UEngineSubsystem {
    readonly __static_UCameraCalibrationSubsystem: {
        UnregisterDistortionModelHandler(Component: UCineCameraComponent, Handler: ULensDistortionModelHandlerBase): void;
        SetDefaultLensFile(NewDefaultLensFile: ULensFile): void;
        GetRegisteredLensModel(ModelName: string): TSubclassOf<ULensModel>;
        GetOverlayMaterialNames(): string[];
        GetOverlayMaterial(OverlayName: string): UMaterialInterface;
        GetLensFile(Picker: FLensFilePicker): ULensFile;
        GetDistortionModelHandlers(Component: UCineCameraComponent): ULensDistortionModelHandlerBase[];
        GetDefaultLensFile(): ULensFile;
        GetCameraNodalOffsetAlgos(): string[];
        GetCameraNodalOffsetAlgo(Name: string): TSubclassOf<UCameraNodalOffsetAlgo>;
        GetCameraImageCenterAlgos(): string[];
        GetCameraImageCenterAlgo(Name: string): TSubclassOf<UCameraImageCenterAlgo>;
        GetCameraCalibrationSteps(): string[];
        GetCameraCalibrationStep(Name: string): TSubclassOf<UCameraCalibrationStep>;
        FindOrCreateDistortionModelHandler(DistortionHandlerPicker: FDistortionHandlerPicker, LensModelClass: TSubclassOf<ULensModel>): ULensDistortionModelHandlerBase;
        FindDistortionModelHandler(DistortionHandlerPicker: FDistortionHandlerPicker, bUpdatePicker: boolean): ULensDistortionModelHandlerBase;
    };
    readonly __properties_UCameraCalibrationSubsystem: {
        DefaultLensFile: ULensFile;
        LensModelMap: TMap<string, TSubclassOf<ULensModel>>;
        CameraNodalOffsetAlgosMap: TMap<string, TSubclassOf<UCameraNodalOffsetAlgo>>;
        CameraImageCenterAlgosMap: TMap<string, TSubclassOf<UCameraImageCenterAlgo>>;
        CameraCalibrationStepsMap: TMap<string, TSubclassOf<UCameraCalibrationStep>>;
    };
    readonly __staticRegistry: 
        UCameraCalibrationSubsystem['__static_UCameraCalibrationSubsystem'] &
        UEngineSubsystem['__staticRegistry'];
    readonly __propertyRegistry: 
        UCameraCalibrationSubsystem['__properties_UCameraCalibrationSubsystem'] &
        UEngineSubsystem['__propertyRegistry'];
}

declare interface UCameraImageCenterAlgo extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UCameraLensDistortionAlgo extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UCameraNodalOffsetAlgo extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULensDistortionModelHandlerBase extends UObject {
    readonly __static_ULensDistortionModelHandlerBase: {
        SetDistortionState(InNewState: FLensDistortionState): void;
        IsModelSupported(ModelToSupport: TSubclassOf<ULensModel>): boolean;
        GetUndistortionDisplacementMap(): UTextureRenderTarget2D;
        GetDistortionDisplacementMap(): UTextureRenderTarget2D;
    };
    readonly __properties_ULensDistortionModelHandlerBase: {
        LensModelClass: TSubclassOf<ULensModel>;
        DistortionPostProcessMID: UMaterialInstanceDynamic;
        CurrentState: FLensDistortionState;
        CameraFilmback: FCameraFilmbackSettings;
        DisplayName: string;
        OverscanFactor: number;
        UndistortionDisplacementMapMID: UMaterialInstanceDynamic;
        DistortionDisplacementMapMID: UMaterialInstanceDynamic;
        UndistortionDisplacementMapRT: UTextureRenderTarget2D;
        DistortionDisplacementMapRT: UTextureRenderTarget2D;
        DistortionProducerID: FGuid;
    };
    readonly __staticRegistry: 
        ULensDistortionModelHandlerBase['__static_ULensDistortionModelHandlerBase'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensDistortionModelHandlerBase['__properties_ULensDistortionModelHandlerBase'] &
        UObject['__propertyRegistry'];
}

declare interface ULensFile extends UObject {
    readonly __static_ULensFile: {
        RemoveZoomPoint(InDataCategory: ELensDataCategory, InFocus: number, InZoom: number): void;
        RemoveFocusPoint(InDataCategory: ELensDataCategory, InFocus: number): void;
        MergeFocusPoint(InDataCategory: ELensDataCategory, InSrcFocus: number, InDestFocus: number, bReplaceExistingZoomPoints: boolean): void;
        HasZoomPoint(InDataCategory: ELensDataCategory, InFocus: number, InZoom: number): boolean;
        HasSamples(InDataCategory: ELensDataCategory): boolean;
        HasIrisEncoderMapping(): boolean;
        HasFocusPoint(InDataCategory: ELensDataCategory, InFocus: number): boolean;
        HasFocusEncoderMapping(): boolean;
        GetTotalPointNum(InDataCategory: ELensDataCategory): number;
        GetSTMapPoints(): FSTMapPointInfo[];
        GetSTMapPoint(InFocus: number, InZoom: number, OutSTMapInfo: FSTMapInfo): boolean;
        GetNodalOffsetPoints(): FNodalOffsetPointInfo[];
        GetNodalOffsetPoint(InFocus: number, InZoom: number, OutNodalPointOffset: FNodalPointOffset): boolean;
        GetImageCenterPoints(): FImageCenterPointInfo[];
        GetImageCenterPoint(InFocus: number, InZoom: number, OutImageCenterInfo: FImageCenterInfo): boolean;
        GetFocalLengthPoints(): FFocalLengthPointInfo[];
        GetFocalLengthPoint(InFocus: number, InZoom: number, OutFocalLengthInfo: FFocalLengthInfo): boolean;
        GetDistortionPoints(): FDistortionPointInfo[];
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
    };
    readonly __properties_ULensFile: {
        LensInfo: FLensInfo;
        DataMode: ELensDataMode;
        UserMetadata: TMap<string, string>;
        EncodersTable: FEncodersTable;
        DistortionTable: FDistortionTable;
        FocalLengthTable: FFocalLengthTable;
        ImageCenterTable: FImageCenterTable;
        NodalOffsetTable: FNodalOffsetTable;
        STMapTable: FSTMapTable;
        UndistortionDisplacementMapHolders: UTextureRenderTarget2D[];
        DistortionDisplacementMapHolders: UTextureRenderTarget2D[];
    };
    readonly __staticRegistry: 
        ULensFile['__static_ULensFile'] &
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensFile['__properties_ULensFile'] &
        UObject['__propertyRegistry'];
}

declare interface ULensModel extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USphericalLensDistortionModelHandler extends ULensDistortionModelHandlerBase {
    readonly __staticRegistry: 
        ULensDistortionModelHandlerBase['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensDistortionModelHandlerBase['__propertyRegistry'];
}

declare interface USphericalLensModel extends ULensModel {
    readonly __staticRegistry: 
        ULensModel['__staticRegistry'];
    readonly __propertyRegistry: 
        ULensModel['__propertyRegistry'];
}

