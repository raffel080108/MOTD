declare interface FAudioParameter {
    ParamName: FName;
    FloatParam: number;
    BoolParam: boolean;
    IntParam: number;
    ObjectParam: UObject;
    StringParam: FString;
    ArrayFloatParam: TArray<number>;
    ArrayBoolParam: TArray<boolean>;
    ArrayIntParam: TArray<number>;
    ArrayObjectParam: TArray<UObject>;
    ArrayStringParam: TArray<FString>;
    ParamType: EAudioParameterType;
    TypeName: FName;
}
declare const FAudioParameter: FAudioParameter;

declare interface FSoundGeneratorOutput {
    Name: FName;
}
declare const FSoundGeneratorOutput: FSoundGeneratorOutput;

declare interface FSoundWaveCloudStreamingPlatformProjectSettings {
    EnablementSetting: ESoundWaveCloudStreamingPlatformProjectEnableType;
}
declare const FSoundWaveCloudStreamingPlatformProjectSettings: FSoundWaveCloudStreamingPlatformProjectSettings;

declare interface FSoundWaveCloudStreamingPlatformSettings {
    EnablementSetting: ESoundWaveCloudStreamingPlatformEnableType;
}
declare const FSoundWaveCloudStreamingPlatformSettings: FSoundWaveCloudStreamingPlatformSettings;

declare interface FSoundWaveCuePoint {
    CuePointID: number;
    Label: FString;
    FramePosition: int64;
    FrameLength: int64;
    bIsLoopRegion: boolean;
}
declare const FSoundWaveCuePoint: FSoundWaveCuePoint;

declare interface IAudioParameterControllerInterface extends IInterface {
    SetTriggerParameter(InName: FName): void;
    SetStringParameter(InName: FName, InValue: string | FString): void;
    SetStringArrayParameter(InName: FName, InValue: string | FString[]): void;
    SetParameters_Blueprint(InParameters: TArray<FAudioParameter>): void;
    SetObjectParameter(InName: FName, InValue: UObject): void;
    SetObjectArrayParameter(InName: FName, InValue: TArray<UObject>): void;
    SetIntParameter(InName: FName, inInt: number): void;
    SetIntArrayParameter(InName: FName, InValue: TArray<number>): void;
    SetFloatParameter(InName: FName, InFloat: number): void;
    SetFloatArrayParameter(InName: FName, InValue: TArray<number>): void;
    SetBoolParameter(InName: FName, InBool: boolean): void;
    SetBoolArrayParameter(InName: FName, InValue: TArray<boolean>): void;
    ResetParameters(): void;
}
declare const IAudioParameterControllerInterface: IAudioParameterControllerInterface;

declare interface IAudioPropertiesSheetAssetUserInterface extends IInterface {

}
declare const IAudioPropertiesSheetAssetUserInterface: IAudioPropertiesSheetAssetUserInterface;

declare interface UAudioEndpointSettingsBase extends UObject {

}
declare const UAudioEndpointSettingsBase: UAudioEndpointSettingsBase;

declare interface UAudioPropertiesSheetAssetBase extends UObject {

}
declare const UAudioPropertiesSheetAssetBase: UAudioPropertiesSheetAssetBase;

declare interface UDummyEndpointSettings extends UAudioEndpointSettingsBase {

}
declare const UDummyEndpointSettings: UDummyEndpointSettings;

declare interface UOcclusionPluginSourceSettingsBase extends UObject {

}
declare const UOcclusionPluginSourceSettingsBase: UOcclusionPluginSourceSettingsBase;

declare interface UReverbPluginSourceSettingsBase extends UObject {

}
declare const UReverbPluginSourceSettingsBase: UReverbPluginSourceSettingsBase;

declare interface USoundModulatorBase extends UObject {

}
declare const USoundModulatorBase: USoundModulatorBase;

declare interface USoundfieldEffectBase extends UObject {
    Settings: USoundfieldEffectSettingsBase;
}
declare const USoundfieldEffectBase: USoundfieldEffectBase;

declare interface USoundfieldEffectSettingsBase extends UObject {

}
declare const USoundfieldEffectSettingsBase: USoundfieldEffectSettingsBase;

declare interface USoundfieldEncodingSettingsBase extends UObject {

}
declare const USoundfieldEncodingSettingsBase: USoundfieldEncodingSettingsBase;

declare interface USoundfieldEndpointSettingsBase extends UObject {

}
declare const USoundfieldEndpointSettingsBase: USoundfieldEndpointSettingsBase;

declare interface USourceDataOverridePluginSourceSettingsBase extends UObject {

}
declare const USourceDataOverridePluginSourceSettingsBase: USourceDataOverridePluginSourceSettingsBase;

declare interface USpatializationPluginSourceSettingsBase extends UObject {

}
declare const USpatializationPluginSourceSettingsBase: USpatializationPluginSourceSettingsBase;

declare interface UWaveformTransformationBase extends UObject {

}
declare const UWaveformTransformationBase: UWaveformTransformationBase;

declare interface UWaveformTransformationChain extends UObject {
    Transformations: TArray<UWaveformTransformationBase>;
}
declare const UWaveformTransformationChain: UWaveformTransformationChain;

