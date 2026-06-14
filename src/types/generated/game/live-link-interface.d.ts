declare interface FCachedSubjectFrame {

}
declare const FCachedSubjectFrame: FCachedSubjectFrame;

declare interface FLiveLinkAnimationFrameData extends FLiveLinkBaseFrameData {
    Transforms: TArray<FTransform>;
}
declare const FLiveLinkAnimationFrameData: FLiveLinkAnimationFrameData;

declare interface FLiveLinkBaseBlueprintData {

}
declare const FLiveLinkBaseBlueprintData: FLiveLinkBaseBlueprintData;

declare interface FLiveLinkBaseFrameData {
    WorldTime: FLiveLinkWorldTime;
    MetaData: FLiveLinkMetaData;
    PropertyValues: TArray<number>;
}
declare const FLiveLinkBaseFrameData: FLiveLinkBaseFrameData;

declare interface FLiveLinkBaseStaticData {
    PropertyNames: TArray<FName>;
}
declare const FLiveLinkBaseStaticData: FLiveLinkBaseStaticData;

declare interface FLiveLinkBasicBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkBaseStaticData;
    FrameData: FLiveLinkBaseFrameData;
}
declare const FLiveLinkBasicBlueprintData: FLiveLinkBasicBlueprintData;

declare interface FLiveLinkCameraBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkCameraStaticData;
    FrameData: FLiveLinkCameraFrameData;
}
declare const FLiveLinkCameraBlueprintData: FLiveLinkCameraBlueprintData;

declare interface FLiveLinkCameraFrameData extends FLiveLinkTransformFrameData {
    FieldOfView: number;
    AspectRatio: number;
    FocalLength: number;
    Aperture: number;
    FocusDistance: number;
    ProjectionMode: ELiveLinkCameraProjectionMode;
    FilmBackWidth: number;
    FilmBackHeight: number;
}
declare const FLiveLinkCameraFrameData: FLiveLinkCameraFrameData;

declare interface FLiveLinkCameraStaticData extends FLiveLinkTransformStaticData {
    bIsFieldOfViewSupported: boolean;
    bIsAspectRatioSupported: boolean;
    bIsFocalLengthSupported: boolean;
    bIsProjectionModeSupported: boolean;
    FilmBackWidth: number;
    FilmBackHeight: number;
    bIsApertureSupported: boolean;
    bIsFocusDistanceSupported: boolean;
    bIsDepthOfFieldSupported: boolean;
    bIsDynamicFilmbackSupported: boolean;
}
declare const FLiveLinkCameraStaticData: FLiveLinkCameraStaticData;

declare interface FLiveLinkCurveConversionSettings {
    CurveConversionAssetMap: Record<FString, FSoftObjectPath>;
}
declare const FLiveLinkCurveConversionSettings: FLiveLinkCurveConversionSettings;

declare interface FLiveLinkCurveElement {
    CurveName: FName;
    CurveValue: number;
}
declare const FLiveLinkCurveElement: FLiveLinkCurveElement;

declare interface FLiveLinkFloatAnimationFrameData extends FLiveLinkBaseFrameData {
    Transforms: TArray<FTransform3f>;
}
declare const FLiveLinkFloatAnimationFrameData: FLiveLinkFloatAnimationFrameData;

declare interface FLiveLinkFrameData {
    Transforms: TArray<FTransform>;
    CurveElements: TArray<FLiveLinkCurveElement>;
    WorldTime: FLiveLinkWorldTime;
    MetaData: FLiveLinkMetaData;
}
declare const FLiveLinkFrameData: FLiveLinkFrameData;

declare interface FLiveLinkFrameRate extends FFrameRate {

}
declare const FLiveLinkFrameRate: FLiveLinkFrameRate;

declare interface FLiveLinkGamepadInputDeviceBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkGamepadInputDeviceStaticData;
    FrameData: FLiveLinkGamepadInputDeviceFrameData;
}
declare const FLiveLinkGamepadInputDeviceBlueprintData: FLiveLinkGamepadInputDeviceBlueprintData;

declare interface FLiveLinkGamepadInputDeviceFrameData extends FLiveLinkBaseFrameData {
    LeftAnalogX: number;
    LeftAnalogY: number;
    RightAnalogX: number;
    RightAnalogY: number;
    LeftTriggerAnalog: number;
    RightTriggerAnalog: number;
    LeftThumb: number;
    RightThumb: number;
    SpecialLeft: number;
    SpecialLeft_X: number;
    SpecialLeft_Y: number;
    SpecialRight: number;
    FaceButtonBottom: number;
    FaceButtonRight: number;
    FaceButtonLeft: number;
    FaceButtonTop: number;
    LeftShoulder: number;
    RightShoulder: number;
    LeftTriggerThreshold: number;
    RightTriggerThreshold: number;
    DPadUp: number;
    DPadDown: number;
    DPadRight: number;
    DPadLeft: number;
    LeftStickUp: number;
    LeftStickDown: number;
    LeftStickRight: number;
    LeftStickLeft: number;
    RightStickUp: number;
    RightStickDown: number;
    RightStickRight: number;
    RightStickLeft: number;
}
declare const FLiveLinkGamepadInputDeviceFrameData: FLiveLinkGamepadInputDeviceFrameData;

declare interface FLiveLinkGamepadInputDeviceStaticData extends FLiveLinkBaseStaticData {

}
declare const FLiveLinkGamepadInputDeviceStaticData: FLiveLinkGamepadInputDeviceStaticData;

declare interface FLiveLinkInterpolationSettings {
    bUseInterpolation: boolean;
    InterpolationOffset: number;
}
declare const FLiveLinkInterpolationSettings: FLiveLinkInterpolationSettings;

declare interface FLiveLinkLightBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkLightStaticData;
    FrameData: FLiveLinkLightFrameData;
}
declare const FLiveLinkLightBlueprintData: FLiveLinkLightBlueprintData;

declare interface FLiveLinkLightFrameData extends FLiveLinkTransformFrameData {
    temperature: number;
    Intensity: number;
    LightColor: FColor;
    InnerConeAngle: number;
    OuterConeAngle: number;
    AttenuationRadius: number;
    SourceRadius: number;
    SoftSourceRadius: number;
    SourceLength: number;
}
declare const FLiveLinkLightFrameData: FLiveLinkLightFrameData;

declare interface FLiveLinkLightStaticData extends FLiveLinkTransformStaticData {
    bIsTemperatureSupported: boolean;
    bIsIntensitySupported: boolean;
    bIsLightColorSupported: boolean;
    bIsInnerConeAngleSupported: boolean;
    bIsOuterConeAngleSupported: boolean;
    bIsAttenuationRadiusSupported: boolean;
    bIsSourceLenghtSupported: boolean;
    bIsSourceRadiusSupported: boolean;
    bIsSoftSourceRadiusSupported: boolean;
}
declare const FLiveLinkLightStaticData: FLiveLinkLightStaticData;

declare interface FLiveLinkLocatorBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkLocatorStaticData;
    FrameData: FLiveLinkLocatorFrameData;
}
declare const FLiveLinkLocatorBlueprintData: FLiveLinkLocatorBlueprintData;

declare interface FLiveLinkLocatorFrameData extends FLiveLinkBaseFrameData {
    Locators: TArray<FVector>;
}
declare const FLiveLinkLocatorFrameData: FLiveLinkLocatorFrameData;

declare interface FLiveLinkLocatorStaticData extends FLiveLinkBaseStaticData {
    LocatorNames: TArray<FName>;
    bUnlabelledData: boolean;
}
declare const FLiveLinkLocatorStaticData: FLiveLinkLocatorStaticData;

declare interface FLiveLinkMetaData {
    StringMetaData: Record<FName, FString>;
    SceneTime: FQualifiedFrameTime;
}
declare const FLiveLinkMetaData: FLiveLinkMetaData;

declare interface FLiveLinkRefSkeleton {
    BoneNames: TArray<FName>;
    BoneParents: TArray<number>;
}
declare const FLiveLinkRefSkeleton: FLiveLinkRefSkeleton;

declare interface FLiveLinkSkeletonStaticData extends FLiveLinkBaseStaticData {
    BoneNames: TArray<FName>;
    BoneParents: TArray<number>;
}
declare const FLiveLinkSkeletonStaticData: FLiveLinkSkeletonStaticData;

declare interface FLiveLinkSourceBufferManagementSettings {
    bValidEngineTimeEnabled: boolean;
    ValidEngineTime: number;
    EngineTimeOffset: number;
    EngineTimeClockOffset: number;
    SmoothEngineTimeOffset: number;
    bGenerateSubFrame: boolean;
    DetectedFrameRate: FFrameRate;
    bUseTimecodeSmoothLatest: boolean;
    SourceTimecodeFrameRate: FFrameRate;
    bValidTimecodeFrameEnabled: boolean;
    ValidTimecodeFrame: number;
    TimecodeFrameOffset: number;
    TimecodeClockOffset: number;
    LatestOffset: number;
    MaxNumberOfFrameToBuffered: number;
    bKeepAtLeastOneFrame: boolean;
}
declare const FLiveLinkSourceBufferManagementSettings: FLiveLinkSourceBufferManagementSettings;

declare interface FLiveLinkSourceDebugInfo {
    SubjectName: FLiveLinkSubjectName;
    SnapshotIndex: number;
    NumberOfBufferAtSnapshot: number;
}
declare const FLiveLinkSourceDebugInfo: FLiveLinkSourceDebugInfo;

declare interface FLiveLinkSourceHandle {

}
declare const FLiveLinkSourceHandle: FLiveLinkSourceHandle;

declare interface FLiveLinkSourcePreset {
    Guid: FGuid;
    Settings: ULiveLinkSourceSettings;
    SourceType: FText;
}
declare const FLiveLinkSourcePreset: FLiveLinkSourcePreset;

declare interface FLiveLinkSubjectKey {
    Source: FGuid;
    SubjectName: FLiveLinkSubjectName;
}
declare const FLiveLinkSubjectKey: FLiveLinkSubjectKey;

declare interface FLiveLinkSubjectName {
    Name: FName;
}
declare const FLiveLinkSubjectName: FLiveLinkSubjectName;

declare interface FLiveLinkSubjectPreset {
    Key: FLiveLinkSubjectKey;
    Role: TSubclassOf<ULiveLinkRole>;
    Settings: ULiveLinkSubjectSettings;
    VirtualSubject: ULiveLinkVirtualSubject;
    bEnabled: boolean;
}
declare const FLiveLinkSubjectPreset: FLiveLinkSubjectPreset;

declare interface FLiveLinkSubjectRepresentation {
    Subject: FLiveLinkSubjectName;
    Role: TSubclassOf<ULiveLinkRole>;
}
declare const FLiveLinkSubjectRepresentation: FLiveLinkSubjectRepresentation;

declare interface FLiveLinkTime {
    WorldTime: number;
    SceneTime: FQualifiedFrameTime;
}
declare const FLiveLinkTime: FLiveLinkTime;

declare interface FLiveLinkTimeCode extends FLiveLinkTimeCode_Base_DEPRECATED {

}
declare const FLiveLinkTimeCode: FLiveLinkTimeCode;

declare interface FLiveLinkTimeCode_Base_DEPRECATED {
    Seconds: number;
    Frames: number;
    FrameRate: FLiveLinkFrameRate;
}
declare const FLiveLinkTimeCode_Base_DEPRECATED: FLiveLinkTimeCode_Base_DEPRECATED;

declare interface FLiveLinkTimeSynchronizationSettings {
    FrameRate: FFrameRate;
    FrameOffset: FFrameNumber;
}
declare const FLiveLinkTimeSynchronizationSettings: FLiveLinkTimeSynchronizationSettings;

declare interface FLiveLinkTransform {

}
declare const FLiveLinkTransform: FLiveLinkTransform;

declare interface FLiveLinkTransformBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkTransformStaticData;
    FrameData: FLiveLinkTransformFrameData;
}
declare const FLiveLinkTransformBlueprintData: FLiveLinkTransformBlueprintData;

declare interface FLiveLinkTransformFrameData extends FLiveLinkBaseFrameData {
    Transform: FTransform;
}
declare const FLiveLinkTransformFrameData: FLiveLinkTransformFrameData;

declare interface FLiveLinkTransformStaticData extends FLiveLinkBaseStaticData {
    bIsLocationSupported: boolean;
    bIsRotationSupported: boolean;
    bIsScaleSupported: boolean;
}
declare const FLiveLinkTransformStaticData: FLiveLinkTransformStaticData;

declare interface FLiveLinkWorldTime {
    Time: number;
    Offset: number;
}
declare const FLiveLinkWorldTime: FLiveLinkWorldTime;

declare interface FSubjectFrameHandle extends FLiveLinkBaseBlueprintData {

}
declare const FSubjectFrameHandle: FSubjectFrameHandle;

declare interface FSubjectMetadata {
    StringMetaData: Record<FName, FString>;
    SceneTimecode: FTimecode;
    SceneFramerate: FFrameRate;
}
declare const FSubjectMetadata: FSubjectMetadata;

declare interface ULiveLinkAnimationRole extends ULiveLinkBasicRole {

}
declare const ULiveLinkAnimationRole: ULiveLinkAnimationRole;

declare interface ULiveLinkBasicRole extends ULiveLinkRole {

}
declare const ULiveLinkBasicRole: ULiveLinkBasicRole;

declare interface ULiveLinkCameraRole extends ULiveLinkTransformRole {

}
declare const ULiveLinkCameraRole: ULiveLinkCameraRole;

declare interface ULiveLinkController extends UObject {

}
declare const ULiveLinkController: ULiveLinkController;

declare interface ULiveLinkCurveRemapSettings extends ULiveLinkSourceSettings {
    CurveConversionSettings: FLiveLinkCurveConversionSettings;
}
declare const ULiveLinkCurveRemapSettings: ULiveLinkCurveRemapSettings;

declare interface ULiveLinkDefaultSourceSettings extends UObject {
    DefaultSourceFrameBufferSize: number;
}
declare const ULiveLinkDefaultSourceSettings: ULiveLinkDefaultSourceSettings;

declare interface ULiveLinkDefaultSubjectSettings extends UObject {
    bRebroadcastSubjectsByDefault: boolean;
    bAllowEditingRebroadcastProperty: boolean;
}
declare const ULiveLinkDefaultSubjectSettings: ULiveLinkDefaultSubjectSettings;

declare interface ULiveLinkFrameInterpolationProcessor extends UObject {

}
declare const ULiveLinkFrameInterpolationProcessor: ULiveLinkFrameInterpolationProcessor;

declare interface ULiveLinkFramePreProcessor extends UObject {

}
declare const ULiveLinkFramePreProcessor: ULiveLinkFramePreProcessor;

declare interface ULiveLinkFrameTranslator extends UObject {

}
declare const ULiveLinkFrameTranslator: ULiveLinkFrameTranslator;

declare interface ULiveLinkInputDeviceRole extends ULiveLinkBasicRole {

}
declare const ULiveLinkInputDeviceRole: ULiveLinkInputDeviceRole;

declare interface ULiveLinkLightRole extends ULiveLinkTransformRole {

}
declare const ULiveLinkLightRole: ULiveLinkLightRole;

declare interface ULiveLinkLocatorRole extends ULiveLinkBasicRole {

}
declare const ULiveLinkLocatorRole: ULiveLinkLocatorRole;

declare interface ULiveLinkRole extends UObject {

}
declare const ULiveLinkRole: ULiveLinkRole;

declare interface ULiveLinkSourceFactory extends UObject {

}
declare const ULiveLinkSourceFactory: ULiveLinkSourceFactory;

declare interface ULiveLinkSourceSettings extends UObject {
    Mode: ELiveLinkSourceMode;
    BufferSettings: FLiveLinkSourceBufferManagementSettings;
    ConnectionString: FString;
    Factory: TSubclassOf<ULiveLinkSourceFactory>;
    ParentSubject: FLiveLinkSubjectName;
}
declare const ULiveLinkSourceSettings: ULiveLinkSourceSettings;

declare interface ULiveLinkSubjectRemapper extends UObject {
    BoneNameMap: Record<FName, FName>;
}
declare const ULiveLinkSubjectRemapper: ULiveLinkSubjectRemapper;

declare interface ULiveLinkSubjectSettings extends UObject {
    PreProcessors: TArray<ULiveLinkFramePreProcessor>;
    InterpolationProcessor: ULiveLinkFrameInterpolationProcessor;
    Translators: TArray<ULiveLinkFrameTranslator>;
    Remapper: ULiveLinkSubjectRemapper;
    Role: TSubclassOf<ULiveLinkRole>;
    FrameRate: FFrameRate;
    bRebroadcastSubject: boolean;
    OriginalSourceName: FName;
    Key: FLiveLinkSubjectKey;
    bAllowModifyingRebroadcast: boolean;
}
declare const ULiveLinkSubjectSettings: ULiveLinkSubjectSettings;

declare interface ULiveLinkTransformRole extends ULiveLinkBasicRole {

}
declare const ULiveLinkTransformRole: ULiveLinkTransformRole;

declare interface ULiveLinkVirtualSubject extends UObject {
    Role: TSubclassOf<ULiveLinkRole>;
    Subjects: TArray<FLiveLinkSubjectName>;
    FrameTranslators: TArray<ULiveLinkFrameTranslator>;
    bRebroadcastSubject: boolean;
}
declare const ULiveLinkVirtualSubject: ULiveLinkVirtualSubject;

