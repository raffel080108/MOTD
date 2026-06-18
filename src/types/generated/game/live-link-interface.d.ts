declare type FCachedSubjectFrame = object;

declare interface FLiveLinkAnimationFrameData extends FLiveLinkBaseFrameData {
    Transforms: FTransform[];
}

declare type FLiveLinkBaseBlueprintData = object;

declare interface FLiveLinkBaseFrameData {
    WorldTime: FLiveLinkWorldTime;
    MetaData: FLiveLinkMetaData;
    PropertyValues: number[];
}

declare interface FLiveLinkBaseStaticData {
    PropertyNames: string[];
}

declare interface FLiveLinkBasicBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkBaseStaticData;
    FrameData: FLiveLinkBaseFrameData;
}

declare interface FLiveLinkCameraBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkCameraStaticData;
    FrameData: FLiveLinkCameraFrameData;
}

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

declare interface FLiveLinkCurveConversionSettings {
    CurveConversionAssetMap: TMap<string, FSoftObjectPath>;
}

declare interface FLiveLinkCurveElement {
    CurveName: string;
    CurveValue: number;
}

declare interface FLiveLinkFloatAnimationFrameData extends FLiveLinkBaseFrameData {
    Transforms: FTransform3f[];
}

declare interface FLiveLinkFrameData {
    Transforms: FTransform[];
    CurveElements: FLiveLinkCurveElement[];
    WorldTime: FLiveLinkWorldTime;
    MetaData: FLiveLinkMetaData;
}

declare interface FLiveLinkFrameRate extends FFrameRate {

}

declare interface FLiveLinkGamepadInputDeviceBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkGamepadInputDeviceStaticData;
    FrameData: FLiveLinkGamepadInputDeviceFrameData;
}

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

declare interface FLiveLinkGamepadInputDeviceStaticData extends FLiveLinkBaseStaticData {

}

declare interface FLiveLinkInterpolationSettings {
    bUseInterpolation: boolean;
    InterpolationOffset: number;
}

declare interface FLiveLinkLightBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkLightStaticData;
    FrameData: FLiveLinkLightFrameData;
}

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

declare interface FLiveLinkLocatorBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkLocatorStaticData;
    FrameData: FLiveLinkLocatorFrameData;
}

declare interface FLiveLinkLocatorFrameData extends FLiveLinkBaseFrameData {
    Locators: FVector[];
}

declare interface FLiveLinkLocatorStaticData extends FLiveLinkBaseStaticData {
    LocatorNames: string[];
    bUnlabelledData: boolean;
}

declare interface FLiveLinkMetaData {
    StringMetaData: TMap<string, string>;
    SceneTime: FQualifiedFrameTime;
}

declare interface FLiveLinkRefSkeleton {
    BoneNames: string[];
    BoneParents: number[];
}

declare interface FLiveLinkSkeletonStaticData extends FLiveLinkBaseStaticData {
    BoneNames: string[];
    BoneParents: number[];
}

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

declare interface FLiveLinkSourceDebugInfo {
    SubjectName: FLiveLinkSubjectName;
    SnapshotIndex: number;
    NumberOfBufferAtSnapshot: number;
}

declare type FLiveLinkSourceHandle = object;

declare interface FLiveLinkSourcePreset {
    Guid: FGuid;
    Settings: ULiveLinkSourceSettings;
    SourceType: string;
}

declare interface FLiveLinkSubjectKey {
    Source: FGuid;
    SubjectName: FLiveLinkSubjectName;
}

declare interface FLiveLinkSubjectName {
    Name: string;
}

declare interface FLiveLinkSubjectPreset {
    Key: FLiveLinkSubjectKey;
    Role: TSubclassOf<ULiveLinkRole>;
    Settings: ULiveLinkSubjectSettings;
    VirtualSubject: ULiveLinkVirtualSubject;
    bEnabled: boolean;
}

declare interface FLiveLinkSubjectRepresentation {
    Subject: FLiveLinkSubjectName;
    Role: TSubclassOf<ULiveLinkRole>;
}

declare interface FLiveLinkTime {
    WorldTime: number;
    SceneTime: FQualifiedFrameTime;
}

declare interface FLiveLinkTimeCode extends FLiveLinkTimeCode_Base_DEPRECATED {

}

declare interface FLiveLinkTimeCode_Base_DEPRECATED {
    Seconds: number;
    Frames: number;
    FrameRate: FLiveLinkFrameRate;
}

declare interface FLiveLinkTimeSynchronizationSettings {
    FrameRate: FFrameRate;
    FrameOffset: FFrameNumber;
}

declare type FLiveLinkTransform = object;

declare interface FLiveLinkTransformBlueprintData extends FLiveLinkBaseBlueprintData {
    StaticData: FLiveLinkTransformStaticData;
    FrameData: FLiveLinkTransformFrameData;
}

declare interface FLiveLinkTransformFrameData extends FLiveLinkBaseFrameData {
    Transform: FTransform;
}

declare interface FLiveLinkTransformStaticData extends FLiveLinkBaseStaticData {
    bIsLocationSupported: boolean;
    bIsRotationSupported: boolean;
    bIsScaleSupported: boolean;
}

declare interface FLiveLinkWorldTime {
    Time: number;
    Offset: number;
}

declare interface FSubjectFrameHandle extends FLiveLinkBaseBlueprintData {

}

declare interface FSubjectMetadata {
    StringMetaData: TMap<string, string>;
    SceneTimecode: FTimecode;
    SceneFramerate: FFrameRate;
}

declare interface ULiveLinkAnimationRole extends ULiveLinkBasicRole {
    readonly __staticRegistry: 
        ULiveLinkBasicRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkBasicRole['__propertyRegistry'];
}

declare interface ULiveLinkBasicRole extends ULiveLinkRole {
    readonly __staticRegistry: 
        ULiveLinkRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkRole['__propertyRegistry'];
}

declare interface ULiveLinkCameraRole extends ULiveLinkTransformRole {
    readonly __staticRegistry: 
        ULiveLinkTransformRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkTransformRole['__propertyRegistry'];
}

declare interface ULiveLinkController extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkCurveRemapSettings extends ULiveLinkSourceSettings {
    readonly __properties_ULiveLinkCurveRemapSettings: {
        CurveConversionSettings: FLiveLinkCurveConversionSettings;
    };
    readonly __staticRegistry: 
        ULiveLinkSourceSettings['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkCurveRemapSettings['__properties_ULiveLinkCurveRemapSettings'] &
        ULiveLinkSourceSettings['__propertyRegistry'];
}

declare interface ULiveLinkDefaultSourceSettings extends UObject {
    readonly __properties_ULiveLinkDefaultSourceSettings: {
        DefaultSourceFrameBufferSize: number;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkDefaultSourceSettings['__properties_ULiveLinkDefaultSourceSettings'] &
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkDefaultSubjectSettings extends UObject {
    readonly __properties_ULiveLinkDefaultSubjectSettings: {
        bRebroadcastSubjectsByDefault: boolean;
        bAllowEditingRebroadcastProperty: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkDefaultSubjectSettings['__properties_ULiveLinkDefaultSubjectSettings'] &
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkFrameInterpolationProcessor extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkFramePreProcessor extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkFrameTranslator extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkInputDeviceRole extends ULiveLinkBasicRole {
    readonly __staticRegistry: 
        ULiveLinkBasicRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkBasicRole['__propertyRegistry'];
}

declare interface ULiveLinkLightRole extends ULiveLinkTransformRole {
    readonly __staticRegistry: 
        ULiveLinkTransformRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkTransformRole['__propertyRegistry'];
}

declare interface ULiveLinkLocatorRole extends ULiveLinkBasicRole {
    readonly __staticRegistry: 
        ULiveLinkBasicRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkBasicRole['__propertyRegistry'];
}

declare interface ULiveLinkRole extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkSourceFactory extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkSourceSettings extends UObject {
    readonly __properties_ULiveLinkSourceSettings: {
        Mode: ELiveLinkSourceMode;
        BufferSettings: FLiveLinkSourceBufferManagementSettings;
        ConnectionString: string;
        Factory: TSubclassOf<ULiveLinkSourceFactory>;
        ParentSubject: FLiveLinkSubjectName;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkSourceSettings['__properties_ULiveLinkSourceSettings'] &
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkSubjectRemapper extends UObject {
    readonly __properties_ULiveLinkSubjectRemapper: {
        BoneNameMap: TMap<string, string>;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkSubjectRemapper['__properties_ULiveLinkSubjectRemapper'] &
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkSubjectSettings extends UObject {
    readonly __properties_ULiveLinkSubjectSettings: {
        PreProcessors: ULiveLinkFramePreProcessor[];
        InterpolationProcessor: ULiveLinkFrameInterpolationProcessor;
        Translators: ULiveLinkFrameTranslator[];
        Remapper: ULiveLinkSubjectRemapper;
        Role: TSubclassOf<ULiveLinkRole>;
        FrameRate: FFrameRate;
        bRebroadcastSubject: boolean;
        OriginalSourceName: string;
        Key: FLiveLinkSubjectKey;
        bAllowModifyingRebroadcast: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkSubjectSettings['__properties_ULiveLinkSubjectSettings'] &
        UObject['__propertyRegistry'];
}

declare interface ULiveLinkTransformRole extends ULiveLinkBasicRole {
    readonly __staticRegistry: 
        ULiveLinkBasicRole['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkBasicRole['__propertyRegistry'];
}

declare interface ULiveLinkVirtualSubject extends UObject {
    readonly __properties_ULiveLinkVirtualSubject: {
        Role: TSubclassOf<ULiveLinkRole>;
        Subjects: FLiveLinkSubjectName[];
        FrameTranslators: ULiveLinkFrameTranslator[];
        bRebroadcastSubject: boolean;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        ULiveLinkVirtualSubject['__properties_ULiveLinkVirtualSubject'] &
        UObject['__propertyRegistry'];
}

