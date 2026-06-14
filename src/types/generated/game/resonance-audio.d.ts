declare interface AResonanceAudioDirectivityVisualizer extends AActor {
    Material: UMaterial;
    Settings: UResonanceAudioSpatializationSourceSettings;
}
declare const AResonanceAudioDirectivityVisualizer: AResonanceAudioDirectivityVisualizer;

declare interface FResonanceAudioReverbPluginSettings {
    bEnableRoomEffects: boolean;
    bGetTransformFromAudioVolume: boolean;
    RoomPosition: FVector;
    RoomRotation: FQuat;
    RoomDimensions: FVector;
    LeftWallMaterial: ERaMaterialName;
    RightWallMaterial: ERaMaterialName;
    FloorMaterial: ERaMaterialName;
    CeilingMaterial: ERaMaterialName;
    FrontWallMaterial: ERaMaterialName;
    BackWallMaterial: ERaMaterialName;
    ReflectionScalar: number;
    ReverbGain: number;
    ReverbTimeModifier: number;
    ReverbBrightness: number;
}
declare const FResonanceAudioReverbPluginSettings: FResonanceAudioReverbPluginSettings;

declare interface UResonanceAudioBlueprintFunctionLibrary extends UBlueprintFunctionLibrary {
    SetGlobalReverbPreset(InPreset: UResonanceAudioReverbPluginPreset): void;
    GetGlobalReverbPreset(): UResonanceAudioReverbPluginPreset;
}
declare const UResonanceAudioBlueprintFunctionLibrary: UResonanceAudioBlueprintFunctionLibrary;

declare interface UResonanceAudioReverbPluginPreset extends USoundEffectSubmixPreset {
    Settings: FResonanceAudioReverbPluginSettings;
    SetRoomRotation(InRotation: FQuat): void;
    SetRoomPosition(InPosition: FVector): void;
    SetRoomMaterials(InMaterials: TArray<ERaMaterialName>): void;
    SetRoomDimensions(InDimensions: FVector): void;
    SetReverbTimeModifier(InReverbTimeModifier: number): void;
    SetReverbGain(InReverbGain: number): void;
    SetReverbBrightness(InReverbBrightness: number): void;
    SetReflectionScalar(InReflectionScalar: number): void;
    SetEnableRoomEffects(bInEnableRoomEffects: boolean): void;
}
declare const UResonanceAudioReverbPluginPreset: UResonanceAudioReverbPluginPreset;

declare interface UResonanceAudioSettings extends UObject {
    OutputSubmix: FSoftObjectPath;
    QualityMode: ERaQualityMode;
    GlobalReverbPreset: FSoftObjectPath;
    GlobalSourcePreset: FSoftObjectPath;
}
declare const UResonanceAudioSettings: UResonanceAudioSettings;

declare interface UResonanceAudioSoundfieldSettings extends USoundfieldEncodingSettingsBase {
    RenderMode: EResonanceRenderMode;
}
declare const UResonanceAudioSoundfieldSettings: UResonanceAudioSoundfieldSettings;

declare interface UResonanceAudioSpatializationSourceSettings extends USpatializationPluginSourceSettingsBase {
    SpatializationMethod: ERaSpatializationMethod;
    Pattern: number;
    Sharpness: number;
    bToggleVisualization: boolean;
    Scale: number;
    Spread: number;
    Rolloff: ERaDistanceRolloffModel;
    MinDistance: number;
    MaxDistance: number;
    SetSoundSourceSpread(InSpread: number): void;
    SetSoundSourceDirectivity(InPattern: number, InSharpness: number): void;
}
declare const UResonanceAudioSpatializationSourceSettings: UResonanceAudioSpatializationSourceSettings;

