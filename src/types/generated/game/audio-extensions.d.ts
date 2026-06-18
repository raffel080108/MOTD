declare interface FAudioParameter {
    ParamName: string;
    FloatParam: number;
    BoolParam: boolean;
    IntParam: number;
    ObjectParam: UObject;
    StringParam: string;
    ArrayFloatParam: number[];
    ArrayBoolParam: boolean[];
    ArrayIntParam: number[];
    ArrayObjectParam: UObject[];
    ArrayStringParam: string[];
    ParamType: EAudioParameterType;
    TypeName: string;
}

declare interface FSoundGeneratorOutput {
    Name: string;
}

declare interface FSoundWaveCloudStreamingPlatformProjectSettings {
    EnablementSetting: ESoundWaveCloudStreamingPlatformProjectEnableType;
}

declare interface FSoundWaveCloudStreamingPlatformSettings {
    EnablementSetting: ESoundWaveCloudStreamingPlatformEnableType;
}

declare interface FSoundWaveCuePoint {
    CuePointID: number;
    Label: string;
    FramePosition: number;
    FrameLength: number;
    bIsLoopRegion: boolean;
}

declare interface IAudioParameterControllerInterface extends IInterface {
    readonly __static_IAudioParameterControllerInterface: {
        SetTriggerParameter(InName: string): void;
        SetStringParameter(InName: string, InValue: string): void;
        SetStringArrayParameter(InName: string, InValue: string[]): void;
        SetParameters_Blueprint(InParameters: FAudioParameter[]): void;
        SetObjectParameter(InName: string, InValue: UObject): void;
        SetObjectArrayParameter(InName: string, InValue: UObject[]): void;
        SetIntParameter(InName: string, inInt: number): void;
        SetIntArrayParameter(InName: string, InValue: number[]): void;
        SetFloatParameter(InName: string, InFloat: number): void;
        SetFloatArrayParameter(InName: string, InValue: number[]): void;
        SetBoolParameter(InName: string, InBool: boolean): void;
        SetBoolArrayParameter(InName: string, InValue: boolean[]): void;
        ResetParameters(): void;
    };
    readonly __staticRegistry: 
        IAudioParameterControllerInterface['__static_IAudioParameterControllerInterface'] &
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface IAudioPropertiesSheetAssetUserInterface extends IInterface {
    readonly __staticRegistry: 
        IInterface['__staticRegistry'];
    readonly __propertyRegistry: 
        IInterface['__propertyRegistry'];
}

declare interface UAudioEndpointSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UAudioPropertiesSheetAssetBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UDummyEndpointSettings extends UAudioEndpointSettingsBase {
    readonly __staticRegistry: 
        UAudioEndpointSettingsBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UAudioEndpointSettingsBase['__propertyRegistry'];
}

declare interface UOcclusionPluginSourceSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UReverbPluginSourceSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USoundModulatorBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USoundfieldEffectBase extends UObject {
    readonly __properties_USoundfieldEffectBase: {
        Settings: USoundfieldEffectSettingsBase;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        USoundfieldEffectBase['__properties_USoundfieldEffectBase'] &
        UObject['__propertyRegistry'];
}

declare interface USoundfieldEffectSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USoundfieldEncodingSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USoundfieldEndpointSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USourceDataOverridePluginSourceSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface USpatializationPluginSourceSettingsBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWaveformTransformationBase extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UWaveformTransformationChain extends UObject {
    readonly __properties_UWaveformTransformationChain: {
        Transformations: UWaveformTransformationBase[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UWaveformTransformationChain['__properties_UWaveformTransformationChain'] &
        UObject['__propertyRegistry'];
}

